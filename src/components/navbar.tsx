"use client";

import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
import { useCart } from "../lib/CartContext";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useUser();
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);


  return (
    <section className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">👑</span>
            </div>
            <div>
              <div className="font-bold text-black text-sm">STORE</div>
              <div className="font-bold text-black text-sm">CAPS</div>
              <div className="font-bold text-black text-sm">COLOMBIA</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="/" className="text-blue-600 border-b-2 border-blue-600 pb-1 hover:text-blue-700">
              INICIO
            </Link>

            {/* Productos Dropdown */}
            <div className="relative group">
              <button className="text-gray-600 hover:text-blue-600 flex items-center pb-1">
                PRODUCTOS
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link
                    href="/productos/gorras"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors font-medium"
                  >
                    GORRAS
                  </Link>
                  <Link
                    href="/productos/camisetas"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors font-medium"
                  >
                    CAMISETAS
                  </Link>
                  <Link
                    href="/productos/pantalones"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors font-medium"
                  >
                    PANTALONES
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/nosotros" className="text-gray-600 hover:text-blue-600">
              NOSOTROS
            </Link>
            <Link href="/nuevosingresos" className="text-gray-600 hover:text-blue-600">
              NUEVOS INGRESOS
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-black">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Clerk Authentication Button */}
            <div className="flex items-center">
              {isSignedIn ? (
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8",
                    },
                  }}
                />
              ) : (
                <SignInButton mode="redirect">
                  <button className="text-gray-600 hover:text-black">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </button>
                </SignInButton>
              )}
            </div>

            <Link href="/cart" className="relative text-gray-600 hover:text-black">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m4.5-5a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-blue-600 font-medium text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                INICIO
              </Link>

              <div className="text-gray-600 font-medium text-sm">PRODUCTOS</div>
              <div className="pl-4 space-y-2">
                <Link
                  href="/productos/gorras"
                  className="block text-gray-600 hover:text-blue-600 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GORRAS
                </Link>
                <Link
                  href="/productos/camisetas"
                  className="block text-gray-600 hover:text-blue-600 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CAMISETAS
                </Link>
                <Link
                  href="/productos/pantalones"
                  className="block text-gray-600 hover:text-blue-600 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PANTALONES
                </Link>
              </div>

              <Link
                href="/nosotros"
                className="text-gray-600 hover:text-blue-600 font-medium text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                NOSOTROS
              </Link>
              <Link
                href="/nuevosingresos"
                className="text-gray-600 hover:text-blue-600 font-medium text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                NUEVOS INGRESOS
              </Link>

              {/* Mobile Authentication */}
              <div className="pt-2 border-t">
                {isSignedIn ? (
                  <div className="flex items-center space-x-2">
                    <UserButton
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          avatarBox: "w-8 h-8",
                        },
                      }}
                    />
                    <span className="text-sm text-gray-600">Mi Cuenta</span>
                  </div>
                ) : (
                  <SignInButton mode="redirect">
                    <button className="text-gray-600 hover:text-blue-600 font-medium text-sm">
                      INICIAR SESIÓN
                    </button>
                  </SignInButton>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}