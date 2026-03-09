"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

function ChatWidget() {
  return (
    <div className="w-full max-w-[380px] bg-white rounded-[--radius-xl] shadow-lg border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-primary px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
          K
        </div>
        <div className="flex-1">
          <div className="text-white font-semibold text-sm">Kova</div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            <span className="text-white/80 text-xs">En línea</span>
          </div>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 flex flex-col gap-3 bg-[#f9f9fb] min-h-[280px]">
        {/* AI welcome */}
        <div className="flex gap-2 items-end">
          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0">
            K
          </div>
          <div className="bg-white rounded-[--radius-md] rounded-bl-sm px-3 py-2 text-sm text-text-primary shadow-sm max-w-[260px]">
            ¡Hola! 👋 Soy tu asistente de compras. ¿En qué puedo ayudarte?
          </div>
        </div>

        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-primary text-white rounded-[--radius-md] rounded-br-sm px-3 py-2 text-sm max-w-[220px]">
            Busco algo para piel sensible
          </div>
        </div>

        {/* AI response with product card */}
        <div className="flex gap-2 items-end">
          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0">
            K
          </div>
          <div className="bg-white rounded-[--radius-md] rounded-bl-sm shadow-sm max-w-[280px] overflow-hidden">
            <div className="px-3 py-2 text-sm text-text-primary">
              ¡Tengo la opción perfecta para ti! 🧴
            </div>
            {/* Product card */}
            <div className="border-t border-border p-3">
              <div className="w-full h-24 bg-gradient-to-br from-pink-100 to-purple-100 rounded-[--radius-sm] mb-2 flex items-center justify-center">
                <span className="text-3xl">🧴</span>
              </div>
              <p className="text-sm font-semibold text-text-primary">
                Crema Hidratante Suave
              </p>
              <p className="text-sm font-bold text-primary mt-0.5">$24.990</p>
              <button className="mt-2 w-full py-1.5 bg-primary text-white text-xs font-semibold rounded-[--radius-sm] hover:bg-primary-hover transition-colors">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>

        {/* Typing indicator */}
        <div className="flex gap-2 items-end">
          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0">
            K
          </div>
          <div className="bg-white rounded-[--radius-md] rounded-bl-sm px-3 py-2.5 shadow-sm flex gap-1 items-center">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-text-muted"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
            />
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-text-muted"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
            />
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-text-muted"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
            />
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="border-t border-border px-3 py-2.5 flex items-center gap-2">
        <div className="flex-1 bg-[#f5f5f8] rounded-full px-3 py-2 text-xs text-text-muted">
          Escribe un mensaje...
        </div>
        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left */}
          <div>
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Asistente de ventas con IA para e-commerce
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-[3.5rem] font-bold leading-tight text-text-primary mb-6">
                Convierte visitantes en compradores con{" "}
                <span className="text-primary">IA conversacional</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-lg">
                Kova es un asistente de compras con inteligencia artificial que
                se integra en tu tienda Shopify o WooCommerce. Recomienda
                productos, gestiona el carrito y aumenta tus ventas — 24/7.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <a
                  href="https://app.heykova.io/register"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-[--radius-md] bg-primary text-white font-semibold hover:bg-primary-hover transition-colors shadow-primary text-base"
                >
                  Comenzar gratis
                </a>
                <a
                  href="#video"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-[--radius-md] border border-border text-text-primary font-semibold hover:bg-sage transition-colors text-base"
                >
                  Ver demo
                </a>
              </div>
              <p className="text-sm text-text-muted">
                Trial de 14 días gratis · Sin tarjeta de crédito
              </p>
            </AnimatedSection>
          </div>

          {/* Right — Chat widget */}
          <AnimatedSection
            delay={0.2}
            className="flex justify-center md:justify-end"
          >
            <ChatWidget />
          </AnimatedSection>
        </div>

        {/* Platform badges */}
        <AnimatedSection delay={0.4} className="mt-16 text-center">
          <p className="text-sm text-text-muted mb-6">
            Se integra con las principales plataformas de e-commerce
          </p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            {/* Shopify logo */}
            <svg width="120" height="36" viewBox="0 0 120 36" fill="none">
              <text
                x="0"
                y="26"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontWeight="700"
                fontSize="22"
                fill="#95BF47"
              >
                Shopify
              </text>
            </svg>
            {/* WooCommerce logo */}
            <svg width="160" height="36" viewBox="0 0 160 36" fill="none">
              <text
                x="0"
                y="26"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontWeight="700"
                fontSize="22"
                fill="#96588A"
              >
                WooCommerce
              </text>
            </svg>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
