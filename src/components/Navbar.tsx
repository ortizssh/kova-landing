"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import KovaLogo from "./KovaLogo";
import { useI18n } from "@/lib/i18n";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, locale, setLocale } = useI18n();

  const links = [
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.howItWorks"), href: "#how-it-works" },
    { label: t("nav.pricing"), href: "#pricing" },
    { label: t("nav.faq"), href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-border">
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center">
          <KovaLogo />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.heykova.io/login"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-border text-text-primary text-sm font-semibold hover:bg-sage transition-colors"
          >
            {t("nav.login")}
          </a>
          <button
            onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border hover:bg-sage transition-colors text-lg"
            aria-label="Switch language"
          >
            {locale === 'es' ? '🇺🇸' : '🇲🇽'}
          </button>
          <a
            href="https://app.heykova.io/register"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors shadow-primary"
          >
            {t("nav.cta")}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-text-primary"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-2">
              <a
                href="https://app.heykova.io/login"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-border text-text-primary text-sm font-semibold hover:bg-sage transition-colors"
              >
                {t("nav.login")}
              </a>
              <button
                onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-border hover:bg-sage transition-colors text-sm"
                aria-label="Switch language"
              >
                <span className="text-lg">{locale === 'es' ? '🇺🇸' : '🇲🇽'}</span>
                {locale === 'es' ? 'English' : 'Español'}
              </button>
              <a
                href="https://app.heykova.io/register"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors"
              >
                {t("nav.cta")}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
