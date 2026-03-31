"use client";

import AnimatedSection from "./AnimatedSection";
import { useI18n } from "@/lib/i18n";

export default function FinalCTA() {
  const { t } = useI18n();

  return (
    <section className="py-16 md:py-24 bg-sage">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            {t("final.title")}
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-4">
            {t("final.subtitle")}
          </p>
          <p className="text-text-muted text-sm max-w-md mx-auto mb-8">
            {t("final.subtext")}
          </p>
          <a
            href="https://app.heykova.io/register"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-semibold text-lg hover:bg-primary-hover transition-colors shadow-primary"
          >
            {t("final.cta")}
          </a>
          <p className="mt-6 text-sm text-text-muted">
            {t("final.questions")}{" "}
            <a
              href="mailto:hello@heykova.io"
              className="text-primary hover:underline"
            >
              hello@heykova.io
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
