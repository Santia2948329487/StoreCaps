// src/app/api/checkout/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import prisma from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const items = await req.json(); // Array de productos

    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: item.image?.startsWith('http') ? [item.image] : [], // <-- aquí
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));


    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart`,
    });

    // 🔐 Aquí puedes obtener el ID del usuario desde Clerk o sesión
    const userId = "usuario-demo"; // Reemplázalo con Clerk o JWT auth
    const total = items.reduce(
      (acc: number, item: any) => acc + item.price * item.quantity,
      0
    );

    const newOrder = await prisma.order.create({
      data: {
        userId,
        total,
        items: {
          createMany: {
            data: items.map((item: any) => ({
              productId: item.productId,
              name: item.name,
              image: item.image,
              price: item.price,
              quantity: item.quantity,
            })),
          },
        },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error en /api/checkout:', error);
    return NextResponse.json(
      { error: 'Error al crear la sesión de pago' },
      { status: 500 }
    );
  }
}
