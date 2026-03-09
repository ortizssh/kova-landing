"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "¿Qué es Kova?",
    a: "Kova es un asistente de compras con inteligencia artificial que se instala en tu tienda online (Shopify o WooCommerce). Usa búsqueda semántica para entender lo que tus clientes necesitan, recomienda productos relevantes y gestiona el carrito — todo dentro de un chat conversacional.",
  },
  {
    q: "¿Cómo se instala?",
    a: "En Shopify: instalación en 1 clic desde el Theme Editor (App Embeds). En WooCommerce: instala el plugin y completa el setup wizard. En ambos casos, el catálogo se sincroniza automáticamente. Todo el proceso toma menos de 5 minutos.",
  },
  {
    q: "¿Cómo se miden las conversiones?",
    a: "Kova trackea cada recomendación hecha por el AI. Cuando un cliente compra un producto recomendado dentro de una ventana de atribución, se registra como conversión. El dashboard muestra métricas reales: recomendaciones, conversiones, revenue atribuido, tasa de conversión y top productos.",
  },
  {
    q: "¿Puedo personalizar la apariencia del widget?",
    a: "Sí, completamente. Colores, avatar, mensajes de bienvenida, subtítulos, preguntas sugeridas, badge promocional, posición en pantalla, tamaño, tema claro/oscuro — todo configurable desde el panel de administración sin tocar código.",
  },
  {
    q: "¿En qué idiomas funciona?",
    a: "El asistente soporta múltiples idiomas. El idioma principal se configura por tienda (español, inglés, etc.) y el AI responde en el idioma del cliente automáticamente.",
  },
  {
    q: "¿Qué pasa con mis datos?",
    a: "Tus datos se almacenan de forma segura en Supabase (PostgreSQL) con aislamiento por tenant y row-level security. Las conversaciones, productos y configuraciones están protegidas y nunca se comparten entre tiendas.",
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "No. La instalación, configuración del widget, carga de knowledge base y gestión de planes se hace completamente desde la interfaz visual. No se requiere código.",
  },
  {
    q: "¿Puedo probar antes de pagar?",
    a: "Sí. Todos los planes incluyen un trial de 14 días gratis con acceso completo a todas las funciones. No se requiere tarjeta de crédito para comenzar.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-base font-semibold text-text-primary pr-4">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-text-muted shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-text-secondary leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-[800px] px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-text-secondary text-lg">
            Todo lo que necesitas saber sobre Kova
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-bg-card rounded-[--radius-xl] border border-border px-6 md:px-8 shadow-sm">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
