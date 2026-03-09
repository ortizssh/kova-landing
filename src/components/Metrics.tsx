"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

function Counter({
  target,
  suffix = "",
  prefix = "",
  duration = 1.5,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

const metrics = [
  { value: 2195, suffix: "+", label: "Recomendaciones AI" },
  { value: 1808, suffix: "+", label: "Sesiones de chat" },
  { value: 4.4, suffix: "%", label: "Tasa de conversión", isDecimal: true },
  { prefix: "<", value: 45, suffix: " min", label: "De recomendación a compra" },
];

export default function Metrics() {
  return (
    <section className="py-16 md:py-20 bg-sage">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Métricas reales de early access
          </span>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <AnimatedSection key={m.label} delay={i * 0.1}>
              <div className="bg-bg-card rounded-[--radius-lg] p-6 text-center shadow-sm border border-border">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {m.isDecimal ? (
                    <span>{m.prefix}{m.value}{m.suffix}</span>
                  ) : (
                    <Counter
                      target={m.value}
                      suffix={m.suffix}
                      prefix={m.prefix || ""}
                    />
                  )}
                </div>
                <p className="text-sm text-text-secondary font-medium">
                  {m.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
