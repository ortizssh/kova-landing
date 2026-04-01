"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import KovaLogo from "./KovaLogo";
import { useI18n } from "@/lib/i18n";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { t, locale, setLocale } = useI18n();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

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
          {/* Language dropdown */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Seleccionar idioma"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-xl text-sm text-text-secondary hover:bg-sage transition-colors cursor-pointer"
            >
              <span className="text-base">{locale === 'es' ? '🇲🇽' : '🇺🇸'}</span>
              <span className="font-medium">{locale === 'es' ? 'ES' : 'EN'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white rounded-xl border border-border shadow-lg py-1 min-w-[140px] z-50">
                <button
                  role="option"
                  onClick={() => { setLocale('es'); setLangOpen(false); }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-sage transition-colors ${locale === 'es' ? 'text-primary font-semibold' : 'text-text-secondary'}`}
                >
                  <span className="text-base">🇲🇽</span> Español
                </button>
                <button
                  role="option"
                  onClick={() => { setLocale('en'); setLangOpen(false); }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-sage transition-colors ${locale === 'en' ? 'text-primary font-semibold' : 'text-text-secondary'}`}
                >
                  <span className="text-base">🇺🇸</span> English
                </button>
              </div>
            )}
          </div>
          <a
            href="https://app.heykova.io/login"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-border text-text-primary text-sm font-semibold hover:bg-sage transition-colors"
          >
            {t("nav.login")}
          </a>
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
