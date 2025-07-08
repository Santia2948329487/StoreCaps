"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "@/lib/CartContext"; // ✅ Importado

const camisetas = [
  {
    id: 1,
    name: "CAMISETA CLASSIC BLACK",
    price: 89000,
    originalPrice: 110000,
    image: "/camisetas/137-0019-blk-f011-2e90f0e6db0032235316485025838464-480-0.jpg",
    badge: "20% OFF",
    freeShipping: true,
  },
  {
    id: 2,
    name: "CAMISETA URBAN BLACK",
    price: 95000,
    image: "/camisetas/137-0020-blk-f011-c67c1e8b6732a193ba16485022116752-480-0.jpg",
    badge: "NUEVO",
    freeShipping: true,
  },
  {
    id: 3,
    name: "CAMISETA PREMIUM CREAM",
    price: 105000,
    image: "/camisetas/137-0020-cre-f011-77e8be505ca5f4b5f816611377473026-640-0.jpg",
    badge: "LIMITADO",
    freeShipping: true,
  },
  {
    id: 4,
    name: "CAMISETA VINTAGE BLACK",
    price: 120000,
    image: "/camisetas/137-0044-blk-f011-fbe4ce7e5fc509e76f16752903191999-640-0.jpg",
    badge: "POPULAR",
    freeShipping: true,
  },
  {
    id: 5,
    name: "CAMISETA STREET STYLE WHITE",
    price: 85000,
    image: "/camisetas/Captura de pantalla 2025-07-03 221540.png",
    freeShipping: true,
  },
  {
    id: 6,
    name: "CAMISETA LOGO NAVY",
    price: 92000,
    image: "/camisetas/Captura de pantalla 2025-07-03 221603.png",
    freeShipping: true,
  },
  {
    id: 7,
    name: "CAMISETA GRAPHIC GREY",
    price: 98000,
    image: "/camisetas/Captura de pantalla 2025-07-03 221622.png",
    badge: "NUEVO",
    freeShipping: true,
  },
  {
    id: 8,
    name: "CAMISETA PREMIUM GREY",
    price: 115000,
    image: "/camisetas/Captura de pantalla 2025-07-03 221644.png",
    freeShipping: true,
  },
];

export default function CamisetasPage() {
  const [showChat, setShowChat] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = async (item: {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }) => {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Error al agregar al carrito:", errorText);
        return;
      }

      const data = await res.json();
      console.log("Agregado al carrito:", data);
    } catch (err) {
      console.error("Error al agregar al carrito:", err);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">👕 CAMISETAS PREMIUM 👕</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explora nuestra colección de camisetas de alta calidad. Diseños únicos, materiales premium y estilo auténtico.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Camisetas</span>
          </nav>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {camisetas.map((camiseta, idx) => (
              <motion.div
                key={camiseta.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative">
                  {camiseta.badge && (
                    <div
                      className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold rounded z-10 ${
                        camiseta.badge === "20% OFF"
                          ? "bg-yellow-400 text-black"
                          : camiseta.badge === "NUEVO"
                          ? "bg-orange-500 text-white"
                          : camiseta.badge === "POPULAR"
                          ? "bg-blue-500 text-white"
                          : camiseta.badge === "LIMITADO"
                          ? "bg-red-500 text-white"
                          : "bg-gray-500 text-white"
                      }`}
                    >
                      {camiseta.badge}
                    </div>
                  )}
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={camiseta.image}
                      alt={camiseta.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                  {camiseta.freeShipping && (
                    <div className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded flex items-center">
                      <span className="mr-1">🚚</span>
                      ENVÍO GRATIS
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm">{camiseta.name}</h3>
                  <div className="flex items-center mb-3">
                    {camiseta.originalPrice && (
                      <span className="text-gray-400 line-through text-sm mr-2">
                        ${camiseta.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="text-lg font-bold text-black">
                      ${camiseta.price.toLocaleString()}
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      handleAddToCart({
                        productId: `camiseta-${camiseta.id}`,
                        name: camiseta.name,
                        price: camiseta.price,
                        quantity: 1,
                        image: camiseta.image,
                      })
                    }
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    Agregar al carrito
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
