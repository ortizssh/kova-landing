"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  features: PlanFeature[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
  style: "outline" | "filled" | "filled-shadow" | "outline-dark";
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "/mes",
    features: [
      { text: "100 mensajes AI/mes", included: true },
      { text: "Hasta 50 productos", included: true },
      { text: "Búsqueda semántica", included: true },
      { text: "Gestión de carrito", included: true },
      { text: "Analytics", included: false },
      { text: "Branding personalizado", included: false },
      { text: "Agentes de voz", included: false },
    ],
    cta: "Comenzar gratis",
    ctaHref: "https://app.heykova.io/register",
    style: "outline",
  },
  {
    name: "Starter",
    price: "$149",
    period: "USD/mes",
    features: [
      { text: "1,000 mensajes AI/mes", included: true },
      { text: "Hasta 500 productos", included: true },
      { text: "Búsqueda semántica", included: true },
      { text: "Gestión de carrito", included: true },
      { text: "Analytics de conversión", included: true },
      { text: "Branding personalizado", included: false },
      { text: "Agentes de voz", included: false },
    ],
    cta: "Elegir Starter",
    ctaHref: "https://app.heykova.io/register",
    style: "filled",
  },
  {
    name: "Professional",
    price: "$349",
    period: "USD/mes",
    highlighted: true,
    features: [
      { text: "10,000 mensajes AI/mes", included: true },
      { text: "Hasta 5,000 productos", included: true },
      { text: "Búsqueda semántica", included: true },
      { text: "Gestión de carrito", included: true },
      { text: "Analytics de conversión", included: true },
      { text: "Branding personalizado", included: true },
      { text: "Soporte prioritario", included: true },
      { text: "100 llamadas de voz/mes", included: true },
    ],
    cta: "Elegir Professional",
    ctaHref: "https://app.heykova.io/register",
    style: "filled-shadow",
  },
  {
    name: "Enterprise",
    price: "$599",
    period: "USD/mes",
    features: [
      { text: "Mensajes ilimitados", included: true },
      { text: "Productos ilimitados", included: true },
      { text: "Todas las funcionalidades", included: true },
      { text: "Acceso a API", included: true },
      { text: "Llamadas de voz ilimitadas", included: true },
      { text: "Soporte prioritario", included: true },
    ],
    cta: "Contactar ventas",
    ctaHref: "https://app.heykova.io/register",
    style: "outline-dark",
  },
];

function ctaClasses(style: Plan["style"]) {
  const base =
    "w-full py-3 rounded-[--radius-md] font-semibold text-sm transition-colors text-center block";
  switch (style) {
    case "outline":
      return `${base} border border-border text-text-primary hover:bg-sage`;
    case "filled":
      return `${base} bg-primary text-white hover:bg-primary-hover`;
    case "filled-shadow":
      return `${base} bg-primary text-white hover:bg-primary-hover shadow-primary`;
    case "outline-dark":
      return `${base} border border-dark text-dark hover:bg-dark hover:text-white`;
  }
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-bg-warm">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            Precios simples, sin sorpresas
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tu tienda
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className={`bg-bg-card rounded-[--radius-xl] p-6 border shadow-sm relative ${
                  plan.highlighted
                    ? "border-primary shadow-primary scale-[1.03] lg:scale-105"
                    : "border-border"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    POPULAR
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-text-primary">
                      {plan.price}
                    </span>
                    <span className="text-text-muted text-sm">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2">
                      {f.included ? (
                        <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-text-muted mt-0.5 shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          f.included
                            ? "text-text-primary"
                            : "text-text-muted"
                        }`}
                      >
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href={plan.ctaHref} className={ctaClasses(plan.style)}>
                  {plan.cta}
                </a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="text-center mt-10">
          <p className="text-sm text-text-muted">
            Todos los planes incluyen trial de 14 días gratis. Sin tarjeta de
            crédito. Precios en USD.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
