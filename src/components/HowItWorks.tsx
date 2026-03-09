"use client";

import { Plug, Palette, TrendingUp } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: Plug,
    title: "Conecta tu tienda",
    description:
      "Instala Kova en tu Shopify o WooCommerce en minutos. Sincronización automática de catálogo con embeddings semánticos.",
  },
  {
    icon: Palette,
    title: "Personaliza tu asistente",
    description:
      "Configura colores, mensajes, tono de voz, idioma y comportamiento del AI. Se adapta a la identidad de tu marca.",
  },
  {
    icon: TrendingUp,
    title: "Vende más con IA",
    description:
      "El asistente atiende a tus clientes 24/7: recomienda productos, gestiona el carrito y genera conversiones medibles.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <AnimatedSection className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            Cómo funciona
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Tres pasos para empezar a vender más con inteligencia artificial
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="relative mb-6">
                  <span className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center mx-auto">
                    {i + 1}
                  </span>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
