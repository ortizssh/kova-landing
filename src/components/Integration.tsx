"use client";

import AnimatedSection from "./AnimatedSection";
import { useI18n } from "@/lib/i18n";

const steps = [
  {
    number: 1,
    icon: "🔌",
    titleKey: "integration.step1.title" as const,
    descKey: "integration.step1.desc" as const,
  },
  {
    number: 2,
    icon: "⚙️",
    titleKey: "integration.step2.title" as const,
    descKey: "integration.step2.desc" as const,
  },
  {
    number: 3,
    icon: "🚀",
    titleKey: "integration.step3.title" as const,
    descKey: "integration.step3.desc" as const,
  },
];

export default function Integration() {
  const { t } = useI18n();

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-sage/30">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <AnimatedSection className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            {t("integration.title")}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            {t("integration.subtitle")}
          </p>
        </AnimatedSection>

        {/* Steps */}
        <AnimatedSection delay={0.1}>
          <div className="relative flex flex-col md:flex-row items-start md:items-stretch gap-8 md:gap-0">
            {/* Connecting line — visible on desktop only */}
            <div
              className="hidden md:block absolute top-[2.25rem] left-[calc(16.666%+1.5rem)] right-[calc(16.666%+1.5rem)] h-px bg-border z-0"
              aria-hidden="true"
            />

            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative z-10 flex-1 flex flex-col items-center text-center px-4 md:px-6"
              >
                {/* Number circle with icon */}
                <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-primary flex flex-col items-center justify-center mb-5 shadow-primary shrink-0">
                  <span className="text-white text-xl leading-none" role="img" aria-label={t(step.titleKey)}>
                    {step.icon}
                  </span>
                  <span className="text-white/70 text-[0.625rem] font-bold tracking-widest uppercase mt-0.5">
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-2">
                  {t(step.titleKey)}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-[18rem] mx-auto">
                  {t(step.descKey)}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Badge */}
        <AnimatedSection delay={0.25} className="flex justify-center mt-10 sm:mt-12">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-white dark:bg-bg-card text-sm text-text-secondary font-medium shadow-sm">
            <span className="text-primary font-semibold">✓</span>
            {t("integration.badge")}
          </span>
        </AnimatedSection>
      </div>
    </section>
  );
}
