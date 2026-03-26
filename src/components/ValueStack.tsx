"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useI18n } from "@/lib/i18n";

const totalValue = 4600;

export default function ValueStack() {
  const { t } = useI18n();

  const stackItems = [
    { label: t("valueStack.item1"), value: "$2,500", note: t("valueStack.item1.note") },
    { label: t("valueStack.item2"), value: "$800", note: t("valueStack.item2.note") },
    { label: t("valueStack.item3"), value: "$400", note: t("valueStack.item3.note") },
    { label: t("valueStack.item4"), value: "$600", note: t("valueStack.item4.note") },
    { label: t("valueStack.item5"), value: "$300", note: t("valueStack.item5.note") },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[800px] px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            {t("valueStack.title")}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t("valueStack.subtitle")}
          </p>
        </AnimatedSection>

        <div className="space-y-3 mb-8">
          {stackItems.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
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
              <span className="text-sm text-text-muted">{t("valueStack.totalValue")}</span>
            </div>
            <div className="flex items-baseline justify-center gap-2 mb-3">
              <span className="text-sm text-text-secondary">{t("valueStack.yourInvestment")}</span>
              <span className="text-4xl font-bold text-primary">{t("valueStack.from")}</span>
              <span className="text-text-muted">/mes</span>
            </div>
            <p className="text-sm text-text-secondary mb-5">
              Eso es un <span className="font-bold text-primary">96%</span> {t("valueStack.savings")}
            </p>
            <a
              href="https://app.heykova.io/register"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover transition-colors shadow-primary text-base"
            >
              {t("valueStack.cta")}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
