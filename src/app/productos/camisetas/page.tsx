"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const camisetas = [
  {
    id: 1,
    name: "CAMISETA CLASSIC BLACK",
    price: 89000,
    originalPrice: 110000,
    image:
      "/camisetas/137-0019-blk-f011-2e90f0e6db0032235316485025838464-480-0.jpg",
    badge: "20% OFF",
    freeShipping: true,
  },
  {
    id: 2,
    name: "CAMISETA URBAN BLACK",
    price: 95000,
    image:
      "/camisetas/137-0020-blk-f011-c67c1e8b6732a193ba16485022116752-480-0.jpg",
    badge: "NUEVO",
    freeShipping: true,
  },
  {
    id: 3,
    name: "CAMISETA PREMIUM CREAM",
    price: 105000,
    image:
      "/camisetas/137-0020-cre-f011-77e8be505ca5f4b5f816611377473026-640-0.jpg",
    badge: "LIMITADO",
    freeShipping: true,
  },
  {
    id: 4,
    name: "CAMISETA VINTAGE BLACK",
    price: 120000,
    image:
      "/camisetas/137-0044-blk-f011-fbe4ce7e5fc509e76f16752903191999-640-0.jpg",
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

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              👕 CAMISETAS PREMIUM 👕
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explora nuestra colección de camisetas de alta calidad. Diseños
              únicos, materiales premium y el estilo que define tu personalidad.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Camisetas</span>
          </nav>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">
                Filtrar por:
              </span>
              <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                <option>Todas las tallas</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
              <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                <option>Todos los colores</option>
                <option>Negro</option>
                <option>Blanco</option>
                <option>Gris</option>
                <option>Azul</option>
                <option>Rojo</option>
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {camisetas.length} productos
              </span>
              <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                <option>Ordenar por popularidad</option>
                <option>Precio: menor a mayor</option>
                <option>Precio: mayor a menor</option>
                <option>Más recientes</option>
              </select>
            </div>
          </div>
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
                          : camiseta.badge === "30% OFF"
                          ? "bg-yellow-400 text-black"
                          : camiseta.badge === "40% OFF"
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
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                    {camiseta.name}
                  </h3>

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

                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700 transition-colors">
                    Agregar al carrito
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            ¡No te pierdas nuestros nuevos lanzamientos!
          </h3>
          <p className="text-gray-300 mb-6">
            Suscríbete a nuestro newsletter y recibe descuentos exclusivos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-2 rounded text-white-900"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button + Chat */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
        {/* Chat desplegable */}
        {showChat && (
          <div className="mb-3 w-80 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden animate-fade-in">
            <div className="bg-green-500 text-white px-4 py-2 flex justify-between items-center">
              <span className="font-semibold">WhatsApp</span>
              <button
                onClick={() => setShowChat(false)}
                className="text-white hover:text-gray-200 text-xl"
              >
                &times;
              </button>
            </div>
            <div className="p-4 text-sm text-gray-700">
              <p>¡Hola! ¿En qué podemos ayudarte?</p>
              <a
                href="https://wa.me/573118945864"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded font-medium hover:bg-green-600 transition-colors"
              >
                Chatear en WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* Botón flotante */}
        <button
          onClick={() => setShowChat((v) => !v)}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center"
          style={{ width: 56, height: 56 }}
          aria-label="Abrir chat de WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </button>
      </div>
    </main>
  );
}
