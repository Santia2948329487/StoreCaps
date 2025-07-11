"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

export default function SuccessPage() {
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !isSignedIn) return;

    const clearCart = async () => {
      try {
        await fetch("/api/cart", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ clear: true }),
        });
      } catch (error) {
        console.error("Error al vaciar el carrito:", error);
      }
    };

    clearCart();
  }, [isLoaded, isSignedIn]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-4">✅ ¡Pago exitoso!</h1>
        <p className="text-gray-700">Gracias por tu compra. Tu pedido está siendo procesado.</p>
      </div>
    </div>
  );
}
