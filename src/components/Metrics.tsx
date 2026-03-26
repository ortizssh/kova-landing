"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useI18n } from "@/lib/i18n";

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

// Fallback metrics in case API is down
const FALLBACK = {
  ai_messages: 5400,
  total_recommendations: 2921,
  conversion_rate: 9.9,
  avg_minutes_to_conversion: 18,
};

const API_URL = "https://naay-agent-app1763504937.azurewebsites.net/api/public-metrics";

export default function Metrics() {
  const { t } = useI18n();
  const [data, setData] = useState(FALLBACK);

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((d) => {
        if (d && d.total_recommendations > 0) {
          setData({
            ai_messages: d.ai_messages,
            total_recommendations: d.total_recommendations,
            conversion_rate: d.conversion_rate,
            avg_minutes_to_conversion: d.avg_minutes_to_conversion,
          });
        }
      })
      .catch(() => {});
  }, []);

  const metrics = [
    { value: data.ai_messages, suffix: "+", label: t("metrics.aiMessages") },
    { value: data.total_recommendations, suffix: "+", label: t("metrics.recommendations") },
    { value: data.conversion_rate, suffix: "%", label: t("metrics.conversionRate"), isStatic: true },
    { prefix: "<", value: data.avg_minutes_to_conversion, suffix: " min", label: t("metrics.timeToSale") },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-sage">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <AnimatedSection className="text-center mb-8 sm:mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium">
            {t("metrics.badge")}
          </span>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((m, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-bg-card rounded-2xl p-4 sm:p-6 text-center shadow-sm border border-border">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                  {m.isStatic ? (
                    <span>{m.prefix}{m.value}{m.suffix}</span>
                  ) : (
                    <Counter
                      target={m.value}
                      suffix={m.suffix}
                      prefix={m.prefix || ""}
                    />
                  )}
                </div>
                <p className="text-xs sm:text-sm text-text-secondary font-medium">
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
