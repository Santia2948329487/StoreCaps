"use client";

import { useEffect, useState } from 'react';
import { FiTrash2 } from "react-icons/fi";
import Image from 'next/image';
import Link from 'next/link';
import { useUser, SignInButton, UserButton } from '@clerk/nextjs';

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
};

export default function CartPage() {
  const { isSignedIn, user, isLoaded } = useUser();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const updateQuantity = async (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      // Eliminar visualmente
      setCartItems(cartItems.filter(item => item.id !== id));

      // Eliminar de la base de datos
      await fetch('/api/cart', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }), // no productId
      })
    } else {
      // Actualizar visualmente
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));

      // Actualizar en base de datos
      await fetch('/api/cart', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, quantity: newQuantity }), // no productId
      });
    }
  };

  // Obtener carrito desde la base de datos
  useEffect(() => {
    if (!isSignedIn || !user) return;

    const fetchCart = async () => {
      try {
        const res = await fetch(`/api/cart`);
        const data = await res.json();
        setCartItems(data);
      } catch (error) {
        console.error("Error cargando el carrito:", error);
      }
    };

    fetchCart();
  }, [isSignedIn, user]);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 200000 ? 0 : 15000;
  const total = subtotal + shipping;

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="mb-8">
            <div className="text-6xl mb-4">🔒</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Inicia Sesión para Ver tu Carrito
            </h1>
            <p className="text-gray-600 mb-8">
              Necesitas iniciar sesión para acceder a tu carrito de compras
            </p>
          </div>
          <div className="space-y-4">
            <SignInButton mode="modal">
              <button className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Iniciar Sesión
              </button>
            </SignInButton>
            <Link
              href="/"
              className="block w-full text-center text-gray-600 hover:text-gray-900 font-medium border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Mi Carrito</h1>
            <p className="text-gray-600">
              Hola {user?.firstName || user?.emailAddresses[0]?.emailAddress} • {cartItems.length} producto{cartItems.length !== 1 ? 's' : ''} en tu carrito
            </p>
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Tu carrito está vacío</h2>
            <p className="text-gray-600 mb-8">Descubre nuestras increíbles gorras</p>
            <Link
              href="/"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explorar Productos
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Productos */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Productos</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 flex items-center space-x-4">
                      <div className="flex-shrink-0 w-20 h-20 relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-medium text-gray-900 truncate">
                          {item.name}
                        </h3>
                        {item.size && (
                          <p className="text-sm text-gray-500">Talla: {item.size}</p>
                        )}
                        <p className="text-lg font-semibold text-gray-900 mt-1">
                          ${item.price.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => updateQuantity(item.id, 0)}
                        className="text-red-500 hover:text-red-700"
                        title="Eliminar del carrito"
                      >
                        <FiTrash2 size={20} />
                      </button>

                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Resumen del Pedido */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm sticky top-4">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Resumen del Pedido</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Envío</span>
                    <span className="font-medium">
                      {shipping === 0 ? (
                        <span className="text-green-600">Gratis</span>
                      ) : (
                        `$${shipping.toLocaleString()}`
                      )}
                    </span>
                  </div>
                  {shipping === 0 && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-sm text-green-800">
                        🎉 ¡Felicitaciones! Tienes envío gratis
                      </p>
                    </div>
                  )}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>${total.toLocaleString()}</span>
                    </div>
                  </div>
                  <button
                    onClick={async () => {
                      try {
                        const res = await fetch('/api/checkout', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(cartItems),
                        });

                        const data = await res.json();
                        if (data.url) {
                          window.location.href = data.url;
                        }
                      } catch (error) {
                        console.error("Error iniciando el checkout:", error);
                      }
                    }}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    Proceder al Pago
                  </button>

                  <Link
                    href="/"
                    className="block w-full text-center text-gray-600 hover:text-gray-900 font-medium"
                  >
                    Continuar Comprando
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
