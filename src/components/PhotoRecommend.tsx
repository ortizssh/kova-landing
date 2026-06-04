"use client";

import { motion } from "framer-motion";
import { Camera, Eye, Package, ShoppingBag, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useI18n } from "@/lib/i18n";

/* Mini product card shown inside the mockup */
function ProductCard({
  emoji,
  gradient,
  name,
  price,
  delay,
}: {
  emoji: string;
  gradient: string;
  name: string;
  price: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex-1 bg-white rounded-xl border border-border shadow-sm overflow-hidden"
    >
      <div className={`h-16 ${gradient} flex items-center justify-center`}>
        <span className="text-2xl">{emoji}</span>
      </div>
      <div className="p-2">
        <p className="text-[11px] font-semibold text-text-primary leading-tight">{name}</p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-[11px] font-bold text-primary">{price}</span>
          <span className="w-5 h-5 rounded-md bg-primary flex items-center justify-center">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function PhotoRecommend() {
  const { t } = useI18n();

  const points = [
    { icon: Camera, title: t("vision.p1.title"), desc: t("vision.p1.desc") },
    { icon: Eye, title: t("vision.p2.title"), desc: t("vision.p2.desc") },
    { icon: Package, title: t("vision.p3.title"), desc: t("vision.p3.desc") },
    { icon: ShoppingBag, title: t("vision.p4.title"), desc: t("vision.p4.desc") },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-sage/40">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left — visual mockup */}
          <AnimatedSection className="lg:order-1">
            <div className="relative flex justify-center min-h-[480px]">
              {/* Chat widget mockup */}
              <div className="relative w-[300px] md:w-[320px] bg-white rounded-3xl shadow-2xl border border-border overflow-hidden">
                {/* Header */}
                <div className="bg-primary px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs">K</div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm">Kova</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                      <span className="text-white/80 text-xs">{t("chat.online")}</span>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-4 flex flex-col gap-3 bg-[#f9f9fb] min-h-[400px]">
                  {/* User photo message */}
                  <div className="flex flex-col items-end gap-1">
                    <div className="relative w-[180px] h-[120px] rounded-2xl rounded-br-sm overflow-hidden shadow-sm bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100">
                      {/* simple room illustration */}
                      <div className="absolute inset-0 flex items-end justify-center pb-3">
                        <span className="text-4xl">🛋️</span>
                      </div>
                      <div className="absolute top-2 left-3 w-8 h-8 rounded-full bg-yellow-200/70 blur-[1px]" />
                      {/* scan line */}
                      <motion.div
                        className="absolute left-0 right-0 h-8 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0"
                        animate={{ y: [-32, 120, -32] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                      />
                      {/* analyzing badge */}
                      <div className="absolute top-2 right-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-black/40 backdrop-blur-sm">
                        <Sparkles className="w-2.5 h-2.5 text-white" />
                        <span className="text-[8px] text-white font-medium">{t("vision.badge")}</span>
                      </div>
                    </div>
                    <div className="bg-primary text-white rounded-xl rounded-br-sm px-3 py-2 text-xs max-w-[220px]">
                      {t("vision.mock.userMsg")}
                    </div>
                  </div>

                  {/* Kova reply */}
                  <div className="flex gap-2 items-end">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px] font-bold shrink-0">K</div>
                    <div className="bg-white rounded-xl rounded-bl-sm px-3 py-2 text-xs text-text-primary shadow-sm max-w-[230px]">
                      {t("vision.mock.reply")}
                    </div>
                  </div>

                  {/* Product recommendations */}
                  <div className="flex gap-2 pl-8">
                    <ProductCard
                      emoji="🛋️"
                      gradient="bg-gradient-to-br from-amber-100 to-orange-100"
                      name={t("vision.mock.p1.name")}
                      price="$1.290.000"
                      delay={0.2}
                    />
                    <ProductCard
                      emoji="💡"
                      gradient="bg-gradient-to-br from-yellow-100 to-amber-100"
                      name={t("vision.mock.p2.name")}
                      price="$189.000"
                      delay={0.35}
                    />
                  </div>
                </div>
              </div>

              {/* Floating camera icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -top-3 -left-3 sm:-left-6 z-20"
              >
                <div className="w-16 h-16 rounded-2xl border border-white/70 flex items-center justify-center backdrop-blur-sm bg-[#f5f3ff]" style={{ boxShadow: "0 16px 40px -10px rgba(124,58,237,0.35)" }}>
                  <Camera size={30} strokeWidth={2} className="text-primary" />
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right — text content */}
          <AnimatedSection delay={0.2} className="lg:order-2">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                {t("vision.badge")}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4 leading-tight">
                {t("vision.title")}
              </h2>
              <p className="text-text-secondary text-base sm:text-lg mb-8">
                {t("vision.subtitle")}
              </p>

              <div className="flex flex-col gap-6">
                {points.map((p) => (
                  <div key={p.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <p.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary text-sm mb-0.5">
                        {p.title}
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm text-text-muted">
                {t("vision.plans")}{" "}
                <a href="#pricing" className="text-primary font-medium hover:underline">
                  {t("vision.seePlans")}
                </a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
