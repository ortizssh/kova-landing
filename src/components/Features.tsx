"use client";

import {
  Search,
  ShoppingCart,
  Palette,
  BarChart3,
  Mic,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useI18n } from "@/lib/i18n";

export default function Features() {
  const { t } = useI18n();

  const features = [
    {
      icon: Search,
      title: t("features.f1.title"),
      description: t("features.f1.desc"),
    },
    {
      icon: ShoppingCart,
      title: t("features.f2.title"),
      description: t("features.f2.desc"),
    },
    {
      icon: Palette,
      title: t("features.f3.title"),
      description: t("features.f3.desc"),
    },
    {
      icon: BarChart3,
      title: t("features.f4.title"),
      description: t("features.f4.desc"),
    },
    {
      icon: Mic,
      title: t("features.f5.title"),
      description: t("features.f5.desc"),
    },
    {
      icon: BookOpen,
      title: t("features.f6.title"),
      description: t("features.f6.desc"),
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            {t("features.title")}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-shadow h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {f.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {f.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
