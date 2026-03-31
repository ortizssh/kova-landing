"use client";

import AnimatedSection from "./AnimatedSection";
import { useI18n } from "@/lib/i18n";

interface UseCaseCard {
  icon: string;
  industryKey: "usecases.a.industry" | "usecases.b.industry" | "usecases.c.industry";
  problemKey: "usecases.a.problem" | "usecases.b.problem" | "usecases.c.problem";
  resultKey: "usecases.a.result" | "usecases.b.result" | "usecases.c.result";
  metricKey: "usecases.a.metric" | "usecases.b.metric" | "usecases.c.metric";
}

const cards: UseCaseCard[] = [
  {
    icon: "🧴",
    industryKey: "usecases.a.industry",
    problemKey: "usecases.a.problem",
    resultKey: "usecases.a.result",
    metricKey: "usecases.a.metric",
  },
  {
    icon: "👗",
    industryKey: "usecases.b.industry",
    problemKey: "usecases.b.problem",
    resultKey: "usecases.b.result",
    metricKey: "usecases.b.metric",
  },
  {
    icon: "🍎",
    industryKey: "usecases.c.industry",
    problemKey: "usecases.c.problem",
    resultKey: "usecases.c.result",
    metricKey: "usecases.c.metric",
  },
];

export default function UseCases() {
  const { t } = useI18n();

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <AnimatedSection className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            {t("usecases.title")}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            {t("usecases.subtitle")}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <AnimatedSection key={card.industryKey} delay={i * 0.1}>
              <div className="bg-white dark:bg-bg-card rounded-xl border border-border p-6 shadow-sm h-full flex flex-col">
                {/* Icon + industry */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-3xl"
                    role="img"
                    aria-label={t(card.industryKey)}
                  >
                    {card.icon}
                  </span>
                  <span className="text-base font-semibold text-text-primary">
                    {t(card.industryKey)}
                  </span>
                </div>

                {/* Problem */}
                <div className="mb-3">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wide text-text-muted mb-1">
                    {t("usecases.before")}
                  </span>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {t(card.problemKey)}
                  </p>
                </div>

                {/* Result */}
                <div className="mb-5">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary mb-1">
                    {t("usecases.after")}
                  </span>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {t(card.resultKey)}
                  </p>
                </div>

                {/* Metric pill */}
                <div className="mt-auto">
                  <span className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    {t(card.metricKey)}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
