"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import KovaLogo from "./KovaLogo";

const links = [
  { label: "Características", href: "#features" },
  { label: "Cómo funciona", href: "#how-it-works" },
  { label: "Precios", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
            Iniciar sesión
          </a>
          <a
            href="https://app.heykova.io/register"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors shadow-primary"
          >
            Comenzar ahora
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
                Iniciar sesión
              </a>
              <a
                href="https://app.heykova.io/register"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors"
              >
                Comenzar ahora
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
