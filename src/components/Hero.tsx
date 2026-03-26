"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

/* Typing dots component */
function TypingDots() {
  return (
    <div className="flex gap-2 items-end">
      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0">K</div>
      <div className="bg-white rounded-xl rounded-bl-sm px-3 py-2.5 shadow-sm flex gap-1 items-center">
        <motion.span className="w-1.5 h-1.5 rounded-full bg-text-muted" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} />
        <motion.span className="w-1.5 h-1.5 rounded-full bg-text-muted" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} />
        <motion.span className="w-1.5 h-1.5 rounded-full bg-text-muted" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} />
      </div>
    </div>
  );
}

/* Message animation variant */
const msgVariant = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.35, ease: "easeOut" as const } 
  },
};

function ChatWidget() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Timeline: each step shows typing then message, then transitions to call
    const delays = [
      800,   // step 1: AI welcome appears
      1500,  // step 2: typing before user msg
      1000,  // step 3: user message appears
      1200,  // step 4: typing before AI product
      1800,  // step 5: AI product card appears
      1400,  // step 6: typing before call suggestion
      1200,  // step 7: call suggestion appears
      1500,  // step 8: transition to call (animate chat out, call screen in)
    ];

    const timers: ReturnType<typeof setTimeout>[] = [];
    let cumulative = 0;
    delays.forEach((d, i) => {
      cumulative += d;
      timers.push(setTimeout(() => setStep(i + 1), cumulative));
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  const showCall = step >= 8;

  return (
    <div className="relative w-full max-w-[380px]">
      {/* Chat Widget */}
      <div className="w-full bg-white rounded-3xl shadow-lg border border-border overflow-hidden">
        {/* Header */}
        <div className="bg-primary px-4 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">K</div>
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
        <div className="p-4 flex flex-col gap-3 bg-[#f9f9fb] min-h-[320px]">
        <AnimatePresence mode="popLayout">
          {/* Step 0: typing for welcome */}
          {step === 0 && <TypingDots key="typing-0" />}

          {/* Step 1+: AI welcome */}
          {step >= 1 && (
            <motion.div key="msg-welcome" variants={msgVariant} initial="hidden" animate="visible" className="flex gap-2 items-end">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0">K</div>
              <div className="bg-white rounded-xl rounded-bl-sm px-3 py-2 text-sm text-text-primary shadow-sm max-w-[260px]">
                ¡Hola! 👋 Soy tu asistente de compras. ¿En qué puedo ayudarte?
              </div>
            </motion.div>
          )}

          {/* Step 2: user typing simulation (input bar cursor) */}
          {step === 2 && (
            <motion.div key="user-typing" variants={msgVariant} initial="hidden" animate="visible" className="flex justify-end">
              <div className="bg-primary/20 rounded-xl rounded-br-sm px-3 py-2 text-sm max-w-[220px] flex items-center gap-1">
                <motion.span className="w-1.5 h-1.5 rounded-full bg-primary/60" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0 }} />
                <motion.span className="w-1.5 h-1.5 rounded-full bg-primary/60" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.15 }} />
                <motion.span className="w-1.5 h-1.5 rounded-full bg-primary/60" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }} />
              </div>
            </motion.div>
          )}

          {/* Step 3+: User message */}
          {step >= 3 && (
            <motion.div key="msg-user" variants={msgVariant} initial="hidden" animate="visible" className="flex justify-end">
              <div className="bg-primary text-white rounded-xl rounded-br-sm px-3 py-2 text-sm max-w-[220px]">
                Busco algo para piel sensible
              </div>
            </motion.div>
          )}

          {/* Step 4: AI typing */}
          {step === 4 && <TypingDots key="typing-4" />}

          {/* Step 5+: AI product card */}
          {step >= 5 && (
            <motion.div key="msg-product" variants={msgVariant} initial="hidden" animate="visible" className="flex gap-2 items-end">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0">K</div>
              <div className="bg-white rounded-xl rounded-bl-sm shadow-sm max-w-[280px] overflow-hidden">
                <div className="px-3 py-2 text-sm text-text-primary">
                  ¡Tengo la opción perfecta para ti! 🧴
                </div>
                <div className="border-t border-border p-3">
                  <div className="w-full h-24 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg mb-2 flex items-center justify-center">
                    <span className="text-3xl">🧴</span>
                  </div>
                  <p className="text-sm font-semibold text-text-primary">Crema Hidratante Suave</p>
                  <p className="text-sm font-bold text-primary mt-0.5">$24.990</p>
                  <button className="mt-2 w-full py-1.5 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-primary-hover transition-colors">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 6: AI typing for call */}
          {step === 6 && <TypingDots key="typing-6" />}

          {/* Step 7: AI call suggestion */}
          {step >= 7 && (
            <motion.div key="msg-call" variants={msgVariant} initial="hidden" animate="visible" className="flex gap-2 items-end">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0">K</div>
              <div className="bg-white rounded-xl rounded-bl-sm shadow-sm max-w-[260px] overflow-hidden">
                <div className="px-3 py-2 text-sm text-text-primary">
                  ¿Prefieres que te explique por teléfono? 📞
                </div>
                <div className="px-3 pb-2.5">
                  <motion.button
                    className="w-full flex items-center justify-center gap-2 py-2 bg-green-500 text-white text-xs font-semibold rounded-lg"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                    Solicitar llamada
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input bar */}
      <div className="border-t border-border px-3 py-2.5 flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 cursor-pointer hover:bg-green-500/20 transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
        </div>
        <div className="flex-1 bg-[#f5f5f8] rounded-full px-3 py-2 text-xs text-text-muted">
          Escribe un mensaje...
        </div>
        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </div>
      </div>
      </div>

      {/* Call overlay – slides in from right, sits on top */}
      <AnimatePresence>
        {showCall && (
          <motion.div
            key="call-overlay"
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute -right-4 top-8 z-10 w-[220px]"
          >
            <div className="bg-gradient-to-b from-[#1c1c1e] to-[#2c2c2e] rounded-2xl overflow-hidden shadow-2xl border border-white/10 p-5 flex flex-col items-center gap-3">
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center ring-2 ring-white/10">
                <span className="text-2xl font-bold text-white/90">K</span>
              </div>
              {/* Info */}
              <div className="text-center">
                <h3 className="text-white text-sm font-semibold">Kova</h3>
                <div className="flex items-center justify-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-mono">03:42</span>
                </div>
              </div>
              {/* Waveform */}
              <div className="flex items-center justify-center gap-[2px] h-[24px]">
                {[10, 16, 7, 20, 12, 18, 8, 14, 20, 10, 16].map((h, i) => (
                  <motion.div
                    key={i}
                    className="w-[3px] rounded-full bg-primary/70"
                    animate={{ height: [`${h}px`, `${h * 0.4}px`, `${h}px`] }}
                    transition={{ duration: 0.8 + i * 0.05, repeat: Infinity, ease: "easeInOut" }}
                  />
                ))}
              </div>
              {/* Controls */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.7"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M19.07 4.93a10 10 0 010 14.14" /></svg>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.7"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2" /></svg>
                </div>
                <div className="w-11 h-11 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/30">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-[135deg]"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="pt-20 pb-12 sm:pt-28 md:pt-36 sm:pb-16 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 md:gap-8 items-center">
          {/* Left */}
          <div>
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-600 text-sm font-medium mb-6">
                El 70% de tus visitantes se van sin comprar
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-[3.5rem] font-bold leading-tight text-text-primary mb-6">
                Recupera las ventas que tu tienda{" "}
                <span className="text-primary">pierde cada día</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-lg">
                Tus clientes tienen dudas, no encuentran lo que buscan y abandonan el carrito.
                Kova los atiende por chat y los llama por teléfono con voz IA — con todo el contexto
                de tu catálogo. <strong className="text-text-primary">Sin contratar vendedores. Sin perder más ventas.</strong>
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                  Chat que vende
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                  Llamadas con voz IA
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
                  Carrito integrado
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <a
                  href="https://app.heykova.io/register"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover transition-colors shadow-primary text-base"
                >
                  Quiero vender más con IA
                </a>
                <a
                  href="#video"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-border text-text-primary font-semibold hover:bg-sage transition-colors text-base"
                >
                  Ver demo
                </a>
              </div>
              <p className="text-sm text-text-muted">
                Setup en 5 minutos · 7 días de prueba · Resultados desde el día 1
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
        <AnimatedSection delay={0.4} className="mt-12 sm:mt-16 text-center">
          <p className="text-xs sm:text-sm text-text-muted mb-6 sm:mb-8">
            Se integra con las principales plataformas de e-commerce
          </p>
          <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
            {/* Shopify logo */}
            <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/shopify-logo.svg" alt="Shopify" className="h-8" />
            </div>
            {/* WooCommerce logo */}
            <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/woocommerce-logo.png" alt="WooCommerce" className="h-8" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
