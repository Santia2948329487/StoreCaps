// src/app/api/cart/route.ts
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json([], { status: 200 });

    const cartItems = await prisma.cartItem.findMany({ 
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });
    
    return NextResponse.json(cartItems);
  } catch (error) {
    console.error('Error en GET /api/cart:', error);
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const data = await req.json();
    
    // Validación básica
    if (!data.productId || !data.name || !data.price) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
    }

    const existing = await prisma.cartItem.findFirst({
      where: { userId, productId: data.productId },
    });

    if (existing) {
      const updated = await prisma.cartItem.update({
        where: { id: existing.id },
        data: { quantity: existing.quantity + (data.quantity || 1) },
      });
      return NextResponse.json(updated);
    }

    const newItem = await prisma.cartItem.create({
      data: {
        userId,
        productId: data.productId,
        name: data.name,
        price: data.price,
        image: data.image || null,
        quantity: data.quantity || 1,
      },
    });

    return NextResponse.json(newItem);
  } catch (error) {
    console.error('Error en POST /api/cart:', error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const data = await req.json();

    if (data.clear) {
      await prisma.cartItem.deleteMany({ where: { userId } });
      return NextResponse.json({ success: true });
    }

    if (data.id) {
      await prisma.cartItem.delete({
        where: { id: data.id },
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Falta el ID del producto" }, { status: 400 });
  } catch (error) {
    console.error('Error en DELETE /api/cart:', error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const data = await req.json();
    
    if (!data.id || !data.quantity) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
    }

    const updated = await prisma.cartItem.update({
      where: { id: data.id },
      data: { quantity: data.quantity },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error en PUT /api/cart:', error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}