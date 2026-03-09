"use client";

import AnimatedSection from "./AnimatedSection";

const mainPlatforms = [
  {
    name: "Shopify",
    color: "#95BF47",
    description: "Instalación en 1 clic via Theme Extension",
  },
  {
    name: "WooCommerce",
    color: "#96588A",
    description: "Plugin WordPress dedicado. Setup wizard incluido.",
  },
];

const secondary = [
  { name: "OpenAI", color: "#412991" },
  { name: "Supabase", color: "#3ECF8E" },
  { name: "Stripe", color: "#635BFF" },
];

export default function Integrations() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            Integraciones
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Instalación en menos de 5 minutos. Sin código.
          </p>
        </AnimatedSection>

        {/* Main platforms */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {mainPlatforms.map((p, i) => (
            <AnimatedSection key={p.name} delay={i * 0.15}>
              <div className="bg-bg-card rounded-[--radius-lg] p-8 border border-border shadow-sm text-center">
                <svg
                  width="160"
                  height="44"
                  viewBox="0 0 160 44"
                  className="mx-auto mb-4"
                >
                  <text
                    x="50%"
                    y="32"
                    textAnchor="middle"
                    fontFamily="Plus Jakarta Sans, sans-serif"
                    fontWeight="700"
                    fontSize="28"
                    fill={p.color}
                  >
                    {p.name}
                  </text>
                </svg>
                <p className="text-text-secondary text-sm">{p.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Secondary */}
        <AnimatedSection delay={0.3}>
          <div className="flex items-center justify-center gap-10 opacity-50">
            {secondary.map((s) => (
              <svg key={s.name} width="100" height="30" viewBox="0 0 100 30">
                <text
                  x="50%"
                  y="22"
                  textAnchor="middle"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontWeight="600"
                  fontSize="16"
                  fill={s.color}
                >
                  {s.name}
                </text>
              </svg>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
