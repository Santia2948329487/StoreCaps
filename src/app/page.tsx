"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCart } from "@/lib/CartContext";

const nuevosIngresos = [
  {
    image: "/gorras/101-0388-onx-9d49f6f6b94a7736f517201962375757-640-0.jpg",
    alt: "Gorra 1",
  },
  {
    image: "/gorras/101-0864-cre-f011-5e2c2b0ddce4434b3616822179987232-1024-1024.jpg",
    alt: "Gorra 2",
  },
  {
    image: "/gorras/101-0996-red-f01-72987587995d9d42cf17170303949429-480-0.jpg",
    alt: "Gorra 3",
  },
  {
    image: "/gorras/101-1013-whi-f011-73bd83fa8dcca3dca916812535329995-480-0.jpg",
    alt: "Gorra 4",
  },
];

const hats = [
  {
    name: "THE LION KING - BLACK",
    price: 299000,
    originalPrice: 320000,
    image: "/gorras/101-0388-onx-9d49f6f6b94a7736f517201962375757-640-0.jpg",
    badge: "40% OFF",
    freeShipping: true,
  },
  {
    name: "THE STALLION CABALLO- SNOW",
    price: 259000,
    image:
      "/gorras/101-0864-cre-f011-5e2c2b0ddce4434b3616822179987232-1024-1024.jpg",
    badge: "NUEVO",
    freeShipping: true,
  },
  {
    name: "THE COCK - RED",
    price: 225000,
    image:
      "/gorras/101-0996-red-f01-72987587995d9d42cf17170303949429-480-0.jpg",
    freeShipping: true,
  },
  {
    name: "THE WHITE CAT - WHITE",
    price: 259000,
    image:
      "/gorras/101-1013-whi-f011-73bd83fa8dcca3dca916812535329995-480-0.jpg",
    freeShipping: true,
  },
  {
    name: "THE CACHO - SNOW",
    price: 340000,
    image:
      "/gorras/101-1106-whi-f01-eaadae6f8e2f72253717242694631247-480-0.jpg",
    badge: "NUEVO",
    freeShipping: true,
  },
  {
    name: "THE COCK - GREEN MILITAR",
    price: 350000,
    image:
      "/gorras/101-1455-mos-f01-0ea8cf2066ad79f9c317242712014591-480-0.jpg",
    freeShipping: true,
  },
  {
    name: "THE WARDOG - BROWN ",
    price: 315000,
    image:
      "/gorras/101-1784-bro-f01-322671d22c8dcf3b4e17315363269089-480-0.webp",
    freeShipping: true,
  },
  {
    name: "THE WHITE PANTHER - SNOW",
    price: 275000,
    image:
      "/gorras/201-0066-whi-f01-8021f43bb998375fff17425731422415-640-0.jpg",
    freeShipping: true,
  },
];

export default function Home() {
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



  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* SLIDER */}
      <section className="py-12 bg-yellow-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <span className="font-black text-3xl mr-4">NUEVOS INGRESOS</span>
          </div>
          <Slider {...sliderSettings}>
            {nuevosIngresos.map((item, idx) => (
              <div key={idx} className="px-2">
                <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={350}
                    height={350}
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex justify-center mt-8">
            <a
              href="/nuevosingresos"
              className="bg-yellow-400 text-black font-extrabold text-2xl px-10 py-3 rounded shadow hover:bg-yellow-300 transition"
            >
              VER AQUÍ
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ⭐ PRODUCTOS DESTACADOS ⭐
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Te mostramos los productos destacados de la marca.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hats.map((hat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative">
                  {hat.badge && (
                    <div
                      className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold rounded z-10 ${hat.badge === "40% OFF"
                        ? "bg-yellow-400 text-black"
                        : "bg-orange-500 text-white"
                        }`}
                    >
                      {hat.badge}
                    </div>
                  )}

                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={hat.image}
                      alt={hat.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>

                  {hat.freeShipping && (
                    <div className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded flex items-center">
                      <span className="mr-1">🚚</span>
                      ENVÍO GRATIS
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                    {hat.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    {hat.originalPrice && (
                      <span className="text-gray-400 line-through text-sm mr-2">
                        ${hat.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="text-lg font-bold text-black">
                      ${hat.price.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      handleAddToCart({
                        productId: `hat-${idx}`,
                        name: hat.name,
                        price: hat.price,
                        quantity: 1,
                        image: hat.image,
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

      {/* Additional Products Grid */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Placeholder for additional products */}
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <div className="aspect-square bg-gray-200 rounded-lg mb-3"></div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Más productos próximamente
              </h3>
              <p className="text-sm text-gray-600">
                Explora toda nuestra colección
              </p>
            </div>
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
              <button onClick={() => setShowChat(false)} className="text-white hover:text-gray-200 text-xl">&times;</button>
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