"use client";

import { Shield } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useI18n } from "@/lib/i18n";

export default function Guarantee() {
  const { t } = useI18n();

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-[800px] px-6">
        <AnimatedSection>
          <div className="rounded-3xl border-2 border-primary/20 bg-primary/5 p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              {t("guarantee.title")}
            </h2>
            <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto mb-2 leading-relaxed">
              {t("guarantee.desc")}
            </p>
            <p className="text-sm text-text-muted">
              {t("guarantee.note")}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
