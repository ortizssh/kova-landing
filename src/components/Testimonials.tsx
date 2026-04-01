"use client";

import AnimatedSection from "./AnimatedSection";
import { useI18n } from "@/lib/i18n";

interface Testimonial {
  quoteKey: "testimonials.a.quote" | "testimonials.b.quote" | "testimonials.c.quote";
  nameKey: "testimonials.a.name" | "testimonials.b.name" | "testimonials.c.name";
  roleKey: "testimonials.a.role" | "testimonials.b.role" | "testimonials.c.role";
  flag: string;
  logo?: string;
  logoUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    quoteKey: "testimonials.a.quote",
    nameKey: "testimonials.a.name",
    roleKey: "testimonials.a.role",
    flag: "🇨🇱",
    logo: "https://naay.cl/cdn/shop/files/naay-brand-WEB.png?v=1732543577&width=1505",
    logoUrl: "https://naay.cl",
  },
  {
    quoteKey: "testimonials.b.quote",
    nameKey: "testimonials.b.name",
    roleKey: "testimonials.b.role",
    flag: "🇨🇱",
    logo: "https://imperionfc.cl/wp-content/uploads/2026/02/logoinfc.png",
    logoUrl: "https://www.imperionfc.cl",
  },
  {
    quoteKey: "testimonials.c.quote",
    nameKey: "testimonials.c.name",
    roleKey: "testimonials.c.role",
    flag: "🇲🇽",
  },
];

function QuoteIcon() {
  return (
    <svg
      className="w-8 h-8 text-primary/20 shrink-0"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export default function Testimonials() {
  const { t } = useI18n();

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <AnimatedSection className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <AnimatedSection key={item.nameKey} delay={i * 0.1}>
              <div className="h-full bg-white dark:bg-bg-card rounded-xl border border-border shadow-sm overflow-hidden flex flex-col">
                {/* Purple left accent bar */}
                <div className="w-full h-1 bg-primary" />

                <div className="p-6 flex flex-col flex-1">
                  <QuoteIcon />
                  <blockquote className="mt-4 flex-1">
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed italic">
                      &ldquo;{t(item.quoteKey)}&rdquo;
                    </p>
                  </blockquote>

                  <footer className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {!item.logo && (
                        <span className="text-2xl" role="img" aria-label="country flag">
                          {item.flag}
                        </span>
                      )}
                      <div>
                        <p className="text-sm font-semibold text-text-primary">
                          {t(item.nameKey)}
                        </p>
                        <p className="text-xs text-text-muted">{t(item.roleKey)}</p>
                      </div>
                    </div>
                    {item.logo && (
                      <a href={item.logoUrl} target="_blank" rel="noopener noreferrer">
                        <img src={item.logo} alt="" className="h-7 object-contain hover:opacity-80 transition-opacity" />
                      </a>
                    )}
                  </footer>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
