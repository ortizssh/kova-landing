"use client";

import { Plug, Palette, TrendingUp } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useI18n } from "@/lib/i18n";

export default function HowItWorks() {
  const { t } = useI18n();

  const steps = [
    {
      icon: Plug,
      title: t("how.step1.title"),
      description: t("how.step1.desc"),
    },
    {
      icon: Palette,
      title: t("how.step2.title"),
      description: t("how.step2.desc"),
    },
    {
      icon: TrendingUp,
      title: t("how.step3.title"),
      description: t("how.step3.desc"),
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <AnimatedSection className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            {t("how.title")}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            {t("how.subtitle")}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="text-center">
                <div className="relative mb-6 inline-block">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
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
