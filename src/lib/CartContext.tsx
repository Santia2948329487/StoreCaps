"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

export interface CartItem {
  id?: number;
  productId: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => Promise<void>;
  removeFromCart: (id: number) => Promise<void>;
  clearCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    if (user) {
      fetch("/api/cart") // <- tu nueva ruta
        .then((res) => res.json())
        .then((data) => setCart(data))
        .catch(() => setCart([]));
    }
  }, [user]);

  const addToCart = async (item: CartItem) => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });
    const newItem = await res.json();

    setCart((prev) => {
      const exists = prev.find((p) => p.productId === item.productId);
      if (exists) {
        return prev.map((p) =>
          p.productId === item.productId
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        );
      }
      return [...prev, newItem];
    });
  };

  const removeFromCart = async (id: number) => {
    await fetch("/api/cart", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });

    setCart((prev) => prev.filter((item) => item.id !== id));
  };


  const clearCart = async () => {
    await fetch("/api/cart", {
      method: "DELETE",
      body: JSON.stringify({ clear: true }),
      headers: { "Content-Type": "application/json" },
    });

    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
