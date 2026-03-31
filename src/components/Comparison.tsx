"use client";

import AnimatedSection from "./AnimatedSection";
import { useI18n } from "@/lib/i18n";

const Check = () => (
  <span className="text-green-500 font-bold text-base" aria-label="Yes">
    ✓
  </span>
);

const Cross = () => (
  <span className="text-red-400 font-bold text-base" aria-label="No">
    ✗
  </span>
);

export default function Comparison() {
  const { t } = useI18n();

  const rows: {
    label: string;
    kova: React.ReactNode;
    tidio: React.ReactNode;
    gorgias: React.ReactNode;
    intercom: React.ReactNode;
  }[] = [
    {
      label: t("comparison.f1"),
      kova: <Check />,
      tidio: <Check />,
      gorgias: <Check />,
      intercom: <Check />,
    },
    {
      label: t("comparison.f2"),
      kova: <Check />,
      tidio: <Cross />,
      gorgias: <Cross />,
      intercom: <Cross />,
    },
    {
      label: t("comparison.f3"),
      kova: <Check />,
      tidio: (
        <span className="text-xs text-text-muted">{t("comparison.limited")}</span>
      ),
      gorgias: (
        <span className="text-xs text-text-muted">{t("comparison.limited")}</span>
      ),
      intercom: (
        <span className="text-xs text-text-muted">{t("comparison.limited")}</span>
      ),
    },
    {
      label: t("comparison.f4"),
      kova: <Check />,
      tidio: (
        <span className="text-xs text-text-muted">{t("comparison.keywordOnly")}</span>
      ),
      gorgias: (
        <span className="text-xs text-text-muted">{t("comparison.keywordOnly")}</span>
      ),
      intercom: (
        <span className="text-xs text-text-muted">{t("comparison.keywordOnly")}</span>
      ),
    },
    {
      label: t("comparison.f5"),
      kova: <span className="text-sm font-semibold text-primary">$149</span>,
      tidio: <span className="text-sm text-text-secondary">$29</span>,
      gorgias: <span className="text-sm text-text-secondary">$300</span>,
      intercom: <span className="text-sm text-text-secondary">$74</span>,
    },
    {
      label: t("comparison.f6"),
      kova: <Check />,
      tidio: (
        <span className="text-xs text-text-muted">{t("comparison.onlyShopify")}</span>
      ),
      gorgias: <Check />,
      intercom: <Cross />,
    },
    {
      label: t("comparison.f7"),
      kova: <Check />,
      tidio: (
        <span className="text-xs text-text-muted">{t("comparison.limited")}</span>
      ),
      gorgias: (
        <span className="text-xs text-text-muted">{t("comparison.limited")}</span>
      ),
      intercom: (
        <span className="text-xs text-text-muted">{t("comparison.limited")}</span>
      ),
    },
  ];

  const competitors = ["Tidio", "Gorgias", "Intercom"];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-sage/30">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <AnimatedSection className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            {t("comparison.title")}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            {t("comparison.subtitle")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full min-w-[560px] border-collapse bg-white">
              {/* Header */}
              <thead>
                <tr>
                  <th className="text-left px-5 py-4 text-sm font-semibold text-text-muted bg-bg-card border-b border-border w-[200px]">
                    {t("comparison.feature")}
                  </th>
                  {/* Kova column — highlighted */}
                  <th className="px-5 py-4 text-sm font-bold text-white bg-primary border-b border-primary/80 text-center">
                    Kova
                  </th>
                  {competitors.map((name) => (
                    <th
                      key={name}
                      className="px-5 py-4 text-sm font-semibold text-text-secondary bg-bg-card border-b border-border text-center"
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-bg-card/50"}
                  >
                    <td className="px-5 py-3.5 text-sm font-medium text-text-primary border-b border-border">
                      {row.label}
                    </td>
                    {/* Kova cell */}
                    <td className="px-5 py-3.5 text-center border-b border-border bg-primary/5">
                      {row.kova}
                    </td>
                    <td className="px-5 py-3.5 text-center border-b border-border">
                      {row.tidio}
                    </td>
                    <td className="px-5 py-3.5 text-center border-b border-border">
                      {row.gorgias}
                    </td>
                    <td className="px-5 py-3.5 text-center border-b border-border">
                      {row.intercom}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="text-center mt-8">
          <a
            href="https://app.heykova.io/register"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover transition-colors shadow-primary text-base"
          >
            {t("comparison.cta")}
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
