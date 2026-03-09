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
    title: "Búsqueda Semántica con IA",
    description:
      "Entiende la intención del cliente, no solo keywords. Powered by embeddings vectoriales para encontrar el producto perfecto.",
  },
  {
    icon: ShoppingCart,
    title: "Gestión de Carrito Integrada",
    description:
      "Agrega, modifica y elimina productos del carrito directamente desde el chat. Sincronizado con tu plataforma en tiempo real.",
  },
  {
    icon: Palette,
    title: "Personalización Total",
    description:
      "Colores, tipografía, avatar, mensajes de bienvenida, tono del asistente, idioma — todo configurable sin código.",
  },
  {
    icon: BarChart3,
    title: "Analytics de Conversión",
    description:
      "Mide el impacto real: recomendaciones, conversiones, revenue atribuido al AI, tasa de conversión. Dashboard completo.",
  },
  {
    icon: Mic,
    title: "Multimodal: Voz e Imágenes",
    description:
      "Los clientes pueden enviar mensajes de voz y fotos. El asistente entiende y responde inteligentemente.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base / RAG",
    description:
      "Sube documentos con información de tu marca. El asistente los usa como contexto para respuestas precisas y alineadas.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            Todo lo que necesitas para vender más
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Funcionalidades diseñadas para maximizar conversiones en tu tienda
            online
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-bg-card rounded-[--radius-lg] p-6 border border-border shadow-sm hover:shadow-lg transition-shadow h-full"
              >
                <div className="w-12 h-12 rounded-[--radius-md] bg-primary/10 flex items-center justify-center mb-4">
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
