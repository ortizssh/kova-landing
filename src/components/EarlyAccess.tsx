"use client";

import AnimatedSection from "./AnimatedSection";
import { useI18n } from "@/lib/i18n";

export default function EarlyAccess() {
  const { t } = useI18n();

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-to-r from-primary to-primary-hover px-6 sm:px-8 py-12 md:px-16 md:py-20 text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              {t("earlyAccess.badge")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold mb-4">
              {t("earlyAccess.title")}
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8">
              {t("earlyAccess.subtitle")}
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold">10%</div>
                <div className="text-white/70 text-xs sm:text-sm">{t("earlyAccess.conversion")}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold">2,195+</div>
                <div className="text-white/70 text-xs sm:text-sm">{t("earlyAccess.assistedSales")}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold">&lt;20m</div>
                <div className="text-white/70 text-xs sm:text-sm">{t("earlyAccess.toPurchase")}</div>
              </div>
            </div>
            <a
              href="https://app.heykova.io/register"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-colors text-sm sm:text-base"
            >
              {t("earlyAccess.cta")}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
