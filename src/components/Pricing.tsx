"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useI18n } from "@/lib/i18n";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  features: PlanFeature[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
  style: "outline" | "filled" | "filled-shadow" | "outline-dark";
}

function ctaClasses(style: Plan["style"]) {
  const base =
    "w-full py-3 rounded-xl font-semibold text-sm transition-colors text-center block";
  switch (style) {
    case "outline":
      return `${base} border border-border text-text-primary hover:bg-sage`;
    case "filled":
      return `${base} bg-primary text-white hover:bg-primary-hover`;
    case "filled-shadow":
      return `${base} bg-primary text-white hover:bg-primary-hover shadow-primary`;
    case "outline-dark":
      return `${base} border border-dark text-dark hover:bg-dark hover:text-white`;
  }
}

export default function Pricing() {
  const { t } = useI18n();

  const plans: Plan[] = [
    {
      name: "Starter",
      price: "$99",
      period: "USD/mes",
      features: [
        { text: `1,000 ${t("plan.messages")}`, included: true },
        { text: `500 ${t("plan.products")}`, included: true },
        { text: t("plan.semanticSearch"), included: true },
        { text: t("plan.cartManagement"), included: true },
        { text: t("plan.conversionAnalytics"), included: true },
        { text: t("plan.customBranding"), included: false },
        { text: t("plan.voiceAgents"), included: false },
      ],
      cta: t("pricing.starter.cta"),
      ctaHref: "https://app.heykova.io/register",
      style: "filled",
    },
    {
      name: "Professional",
      price: "$349",
      period: "USD/mes",
      highlighted: true,
      features: [
        { text: `10,000 ${t("plan.messages")}`, included: true },
        { text: `5,000 ${t("plan.products")}`, included: true },
        { text: t("plan.semanticSearch"), included: true },
        { text: t("plan.cartManagement"), included: true },
        { text: t("plan.conversionAnalytics"), included: true },
        { text: t("plan.customBranding"), included: true },
        { text: t("plan.prioritySupport"), included: true },
        { text: `100 ${t("plan.voiceCalls")}`, included: true },
      ],
      cta: t("pricing.pro.cta"),
      ctaHref: "https://app.heykova.io/register",
      style: "filled-shadow",
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "USD/mes",
      features: [
        { text: t("plan.unlimitedMessages"), included: true },
        { text: t("plan.unlimitedProducts"), included: true },
        { text: t("plan.allFeatures"), included: true },
        { text: t("plan.apiAccess"), included: true },
        { text: t("plan.unlimitedVoice"), included: true },
        { text: t("plan.prioritySupport"), included: true },
      ],
      cta: t("pricing.enterprise.cta"),
      ctaHref: "https://app.heykova.io/register",
      style: "outline-dark",
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-bg-warm">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-600 text-sm font-medium mb-4">
            {t("pricing.badge")}
          </span>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 items-start max-w-[960px] mx-auto">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className={`bg-bg-card rounded-3xl p-6 border shadow-sm relative ${
                  plan.highlighted
                    ? "border-primary shadow-primary scale-[1.03] lg:scale-105"
                    : "border-border"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    POPULAR
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-text-primary">
                      {plan.price}
                    </span>
                    <span className="text-text-muted text-sm">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2">
                      {f.included ? (
                        <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-text-muted mt-0.5 shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          f.included
                            ? "text-text-primary"
                            : "text-text-muted"
                        }`}
                      >
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href={plan.ctaHref} className={ctaClasses(plan.style)}>
                  {plan.cta}
                </a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="text-center mt-10">
          <p className="text-sm text-text-muted">
            {t("pricing.disclaimer")}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
