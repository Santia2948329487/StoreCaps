// src/app/api/route.ts
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json([], { status: 200 });

  const cartItems = await prisma.cartItem.findMany({ where: { userId } });
  return NextResponse.json(cartItems);
}

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const data = await req.json();

  const existing = await prisma.cartItem.findFirst({
    where: { userId, productId: data.productId },
  });

  if (existing) {
    const updated = await prisma.cartItem.update({
      where: { id: existing.id },
      data: { quantity: existing.quantity + data.quantity },
    });
    return NextResponse.json(updated);
  }

  const newItem = await prisma.cartItem.create({
    data: {
      userId,
      ...data,
    },
  });

  return NextResponse.json(newItem);
}

export async function DELETE(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

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
}



export async function PUT(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const data = await req.json();

  const updated = await prisma.cartItem.update({
  where: { id: data.id },
  data: { quantity: data.quantity },
});


  return NextResponse.json(updated);
}

