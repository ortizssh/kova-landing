"use client";

import AnimatedSection from "./AnimatedSection";
import { useI18n } from "@/lib/i18n";

function ShopifyLogo() {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img src="/shopify-logo.svg" alt="Shopify" className="h-10 mx-auto mb-4" />
  );
}

function WooCommerceLogo() {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img src="/woocommerce-logo.png" alt="WooCommerce" className="h-10 mx-auto mb-4" />
  );
}

export default function Integrations() {
  const { t } = useI18n();

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <AnimatedSection className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            {t("integrations.title")}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            {t("integrations.subtitle")}
          </p>
        </AnimatedSection>

        {/* Main platforms */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          <AnimatedSection delay={0}>
            <div className="bg-bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <ShopifyLogo />
              <p className="text-text-secondary text-xs sm:text-sm">
                {t("integrations.shopify")}
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="bg-bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <WooCommerceLogo />
              <p className="text-text-secondary text-xs sm:text-sm">
                {t("integrations.woo")}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
