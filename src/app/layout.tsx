import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Store Caps",
  description:
    "Compra gorras originales y premium con envío gratis. La mejor selección de gorras beisboleras y urbanas en Colombia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <CartProvider>
        <html lang="es">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50`}
          >
            {/* Header superior con botones de login/register o UserButton */}
            <header className="flex justify-between items-center p-4 h-16 bg-white shadow-sm">
              {/* Logo o nombre de la tienda */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold">👑</span>
                </div>
                <div className="hidden sm:block">
                  <div className="font-bold text-sm text-gray-900">STORE CAPS</div>
                  <div className="text-xs text-gray-600">Tienda Oficial</div>
                </div>
              </div>

              {/* Botones de autenticación */}
              <div className="flex items-center gap-3">
                <SignedOut>
                  <SignInButton>
                    <button className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors">
                      Iniciar Sesión
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm h-10 px-4 transition-colors">
                      Crear Cuenta
                    </button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10"
                      }
                    }}
                  />
                </SignedIn>
              </div>
            </header>

            {/* Navbar personalizada */}
            <Navbar />

            {/* Contenido principal */}
            <main className="min-h-screen">
              {children}
            </main>

            {/* Footer personalizado */}
            <footer className="bg-gray-900 text-white py-12 mt-10">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                        <span className="text-black font-bold">👑</span>
                      </div>
                      <div>
                        <div className="font-bold text-sm">TIENDA OFICIAL</div>
                        <div className="font-bold text-sm">COLOMBIA</div>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">
                      La mejor tienda de gorras premium en Colombia. Calidad garantizada.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Navegación</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li><a href="/inicio" className="hover:text-white transition-colors">Inicio</a></li>
                      <li><a href="/productos" className="hover:text-white transition-colors">Productos</a></li>
                      <li><a href="/nuevos" className="hover:text-white transition-colors">Nuevos Ingresos</a></li>
                      <li><a href="/limitadas" className="hover:text-white transition-colors">Ediciones Limitadas</a></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Atención al Cliente</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>📱 WhatsApp: 311 894 5864</li>
                      <li>📧 contacto@tiendaoficial.com</li>
                      <li>📍 Envíos a todo Colombia</li>
                      <li>🚚 Envío gratis +$200.000</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Métodos de Pago</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>💳 Tarjeta débito/crédito</li>
                      <li>🏦 PSE - Transferencia</li>
                      <li>📱 Nequi</li>
                      <li>🏧 Bancolombia</li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                  © 2025 Tienda Oficial Colombia. Todos los derechos reservados.
                </div>
              </div>
            </footer>
          </body>
        </html>
      </CartProvider>
    </ClerkProvider>
  );
}