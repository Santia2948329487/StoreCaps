"use client";


import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Emmanuel Galeano Martinez",
    role: "Diseñador FrontEnd",
    image: "/nosotros/carlos.jpg",
    description:
      "Apasionado por la moda urbana con más de 10 años de experiencia en el sector.",
  },
  {
    id: 2,
    name: "Santiago Castaño Guerrero",
    role: "Desarrollador Full Stack",
    image: "/nosotros/yo.jpeg",
    description:
      "Apasionado por la tecnología, desarrollo soluciones completas desde la interfaz hasta la base de datos. Enfocado en la innovación, el rendimiento y la sostenibilidad en el desarrollo web.",
  },
  {
    id: 3,
    name: "David Andres Herrera",
    role: "Creador de Contenido",
    image: "/nosotros/ana.jpg",
    description:
      "Editor de video y fotógrafo, capturando la esencia de nuestra marca.",
  },
];

const values = [
  {
    icon: "🎯",
    title: "Calidad Premium",
    description:
      "Solo trabajamos con los mejores materiales y procesos de fabricación para garantizar durabilidad y confort.",
  },
  {
    icon: "🚀",
    title: "Innovación Constante",
    description:
      "Siempre a la vanguardia de las tendencias, creando diseños únicos y exclusivos.",
  },
  {
    icon: "🌟",
    title: "Satisfacción del Cliente",
    description:
      "Tu satisfacción es nuestra prioridad. Ofrecemos el mejor servicio y atención personalizada.",
  },
  {
    icon: "🌱",
    title: "Responsabilidad Social",
    description:
      "Comprometidos con prácticas sostenibles y responsables con el medio ambiente.",
  },
];

export default function AboutUsPage() {
  const [showChat, setShowChat] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-6"
            >
              👑 STORE CAPS 👑
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Más que una tienda, somos una comunidad apasionada por el
              streetwear y la moda urbana. Desde 2015, hemos sido tu destino
              favorito para gorras premium y accesorios únicos.
            </motion.p>
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
            <span className="text-gray-800 font-medium">Sobre Nosotros</span>
          </nav>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Nuestra Historia
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Todo comenzó en 2025, cuando tres estudiantes de programación,
                apasionados por la tecnología y la moda, imaginaron una forma
                innovadora de unir ambos mundos. La idea nació durante una noche
                de estudio, al darnos cuenta de que la industria de la moda
                necesitaba una revolución digital. Aunque al principio muchos
                dudaron de nuestra visión, trabajamos con determinación desde
                nuestros cuartos. Tras lanzar la primera versión beta y ver a
                las personas usando lo que creamos, entendimos que esto era más
                que un proyecto académico: era el inicio de algo transformador.
                Hoy seguimos siendo esos mismos soñadores, convencidos de que la
                tecnología puede hacer del mundo un lugar más creativo y
                conectado.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Desde nuestros humildes comienzos en un pequeño local en
                Medellín, hemos crecido hasta convertirnos en una de las marcas
                de streetwear más reconocidas del país, sin perder nunca nuestro
                compromiso con la calidad y la innovación.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Hoy, Store Caps es sinónimo de estilo, calidad y autenticidad.
                Cada gorra que vendemos cuenta una historia y representa la
                pasión de nuestra comunidad por la moda urbana.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/WhatsApp Image 2025-07-03 at 11.02.29 PM.jpg"
                  alt="Historia de Store Caps"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Los principios que guían cada decisión que tomamos y cada producto
              que creamos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Conoce a las personas apasionadas que hacen posible Store Caps
              cada día
            </p>
          </div>
              
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
            
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square relative bg-gradient-to-br from-blue-100 to-purple-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold mb-2">9+</div>
              <p className="text-xl">Años de Experiencia</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">50k+</div>
              <p className="text-xl">Clientes Satisfechos</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="text-xl">Diseños Únicos</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-xl">Calidad Premium</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                🎯 Nuestra Misión
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Crear y ofrecer productos de streetwear premium que permitan a
                nuestros clientes expresar su personalidad única y auténtica.
                Nos comprometemos a ser más que una tienda: somos una comunidad
                que celebra la cultura urbana y la autoexpresión.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                🚀 Nuestra Visión
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ser la marca de streetwear más reconocida y respetada de
                Latinoamérica, estableciendo nuevos estándares de calidad,
                innovación y sostenibilidad en la industria de la moda urbana,
                mientras inspiramos a las nuevas generaciones.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            ¿Quieres Ser Parte de Nuestra Historia?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Únete a la comunidad Store Caps y descubre lo que nos hace únicos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/productos"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Ver Nuestros Productos
            </Link>
            <Link
              href="/contacto"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors"
            >
              Contáctanos
            </Link>
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
