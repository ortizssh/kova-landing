"use client";

import KovaLogo from "./KovaLogo";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  const columns = [
    {
      title: t("footer.product"),
      links: [
        { label: t("nav.features"), href: "#features", external: false },
        { label: t("nav.pricing"), href: "#pricing", external: false },
        { label: "Demo", href: "#video", external: false },
      ],
    },
    {
      title: t("footer.resources"),
      links: [
        { label: t("footer.docs"), href: "#", external: false },
        { label: t("nav.faq"), href: "#faq", external: false },
        {
          label: t("footer.ext.shopify"),
          href: "https://apps.shopify.com",
          external: true,
        },
        {
          label: t("footer.ext.woo"),
          href: "https://wordpress.org/plugins/woocommerce/",
          external: true,
        },
        {
          label: t("footer.ext.aiEcommerce"),
          href: "https://www.shopify.com/blog/ai-ecommerce",
          external: true,
        },
      ],
    },
    {
      title: t("footer.legal"),
      links: [
        { label: t("footer.terms"), href: "#", external: false },
        { label: t("footer.privacy"), href: "#", external: false },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo column */}
          <div>
            <KovaLogo />
            <p className="mt-4 text-sm text-text-muted leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-text-primary mb-4 text-sm">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-text-muted">
            &copy; 2026 Kova. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
