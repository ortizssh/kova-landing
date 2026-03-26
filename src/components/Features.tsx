"use client";

import {
  Search,
  ShoppingCart,
  Palette,
  BarChart3,
  Mic,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: Search,
    title: "Tus clientes encuentran lo que buscan",
    description:
      'Tu cliente escribe "algo para piel sensible" y Kova entiende. No keywords, no filtros complicados. Resultado: tus productos se encuentran, no se pierden entre categorías.',
  },
  {
    icon: ShoppingCart,
    title: "El carrito se llena desde el chat",
    description:
      "El cliente pregunta, Kova recomienda y agrega al carrito en un solo paso. Sin fricción, sin salir de la conversación. Menos clics = más compras completadas.",
  },
  {
    icon: Palette,
    title: "Se ve como tu marca, no como un bot",
    description:
      "Colores, avatar, tono de voz, idioma — todo se adapta a tu tienda. Tus clientes sienten que hablan con tu marca, no con un chatbot genérico.",
  },
  {
    icon: BarChart3,
    title: "Sabes exactamente cuánto genera",
    description:
      "Revenue atribuido al AI, tasa de conversión, productos top. No adivinas — ves el impacto real en tu dashboard con números concretos.",
  },
  {
    icon: Mic,
    title: "Llamadas reales cuando el chat no basta",
    description:
      "Si el cliente prefiere hablar, Kova lo llama por teléfono con voz IA — con todo el contexto de la conversación. Sin repetir, sin fricción.",
  },
  {
    icon: BookOpen,
    title: "Respuestas precisas sobre TU marca",
    description:
      "Sube documentos, políticas, guías de talla. Kova los usa para dar respuestas exactas y alineadas con tu negocio. Cero respuestas inventadas.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            Todo incluido para que vendas más
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Cada funcionalidad está diseñada para un solo objetivo: convertir visitantes en compradores
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-shadow h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {f.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {f.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
