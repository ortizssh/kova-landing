"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const stackItems = [
  { label: "Vendedor AI disponible 24/7", value: "$2,500", note: "vs contratar una persona" },
  { label: "Búsqueda inteligente de productos", value: "$800", note: "vs implementación custom" },
  { label: "Analytics de conversión con atribución", value: "$400", note: "vs herramientas separadas" },
  { label: "Llamadas telefónicas con voz IA", value: "$600", note: "vs call center" },
  { label: "Knowledge base + personalización total", value: "$300", note: "vs desarrollo a medida" },
];

const totalValue = 4600;

export default function ValueStack() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[800px] px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            Lo que realmente estás obteniendo
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Si tuvieras que armar esto por separado, esto es lo que costaría cada mes
          </p>
        </AnimatedSection>

        <div className="space-y-3 mb-8">
          {stackItems.map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.15 }}
                className="flex items-center justify-between bg-bg-card rounded-xl p-4 border border-border shadow-sm"
              >
                <div className="flex-1">
                  <p className="text-sm font-semibold text-text-primary">{item.label}</p>
                  <p className="text-xs text-text-muted mt-0.5">{item.note}</p>
                </div>
                <span className="text-lg font-bold text-text-muted line-through ml-4">{item.value}/mes</span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="bg-bg-card rounded-2xl p-6 border-2 border-primary shadow-primary text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-2xl font-bold text-text-muted line-through">${totalValue.toLocaleString()}/mes</span>
              <span className="text-sm text-text-muted">de valor total</span>
            </div>
            <div className="flex items-baseline justify-center gap-2 mb-3">
              <span className="text-sm text-text-secondary">Tu inversión:</span>
              <span className="text-4xl font-bold text-primary">desde $149</span>
              <span className="text-text-muted">/mes</span>
            </div>
            <p className="text-sm text-text-secondary mb-5">
              Eso es un <span className="font-bold text-primary">96% menos</span> de lo que costaría hacerlo por tu cuenta
            </p>
            <a
              href="https://app.heykova.io/register"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover transition-colors shadow-primary text-base"
            >
              Quiero vender más con IA
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
