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
    // Timeline: each step shows typing then message
    const delays = [
      800,   // step 1: AI welcome appears
      1500,  // step 2: typing before user msg
      1000,  // step 3: user message appears
      1200,  // step 4: typing before AI product
      1800,  // step 5: AI product card appears
      1400,  // step 6: typing before call suggestion
      1200,  // step 7: call suggestion appears
    ];

    const timers: ReturnType<typeof setTimeout>[] = [];
    let cumulative = 0;
    delays.forEach((d, i) => {
      cumulative += d;
      timers.push(setTimeout(() => setStep(i + 1), cumulative));
    });

    // Loop the animation
    const totalTime = cumulative + 4000;
    const loopTimer = setTimeout(() => setStep(0), totalTime);
    const restartTimer = setTimeout(() => {
      setStep(0);
      // Re-trigger by forcing re-mount would be complex, 
      // so we just let it sit on the final state
    }, totalTime + 500);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(loopTimer);
      clearTimeout(restartTimer);
    };
  }, []);

  return (
    <div className="w-full max-w-[380px] bg-white rounded-3xl shadow-lg border border-border overflow-hidden">
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
                productos, gestiona el carrito y atiende llamadas telefónicas
                reales con todo el contexto de la conversación — 24/7.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                  Chat con IA
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                  Llamadas telefónicas reales
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
                  Comenzar gratis
                </a>
                <a
                  href="#video"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-border text-text-primary font-semibold hover:bg-sage transition-colors text-base"
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
          <p className="text-sm text-text-muted mb-8">
            Se integra con las principales plataformas de e-commerce
          </p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {/* Shopify logo SVG */}
            <div className="flex items-center justify-center">
              <svg width="100" height="32" viewBox="0 0 446 128" fill="none">
                <path fill="#95BF47" d="M115.6 30.3c-.1-.8-.7-1.2-1.2-1.2s-10.4-.8-10.4-.8-6.9-6.9-7.7-7.6c-.8-.8-2.2-.5-2.8-.3-.1 0-1.5.5-3.9 1.2-2.3-6.7-6.4-12.8-13.6-12.8h-.6C73.6 6.3 71.1 4 69 4c-16.8.2-24.8 21-27.3 31.7-6.5 2-11.1 3.4-11.7 3.6-3.6 1.1-3.7 1.2-4.2 4.6C25.5 46.2 14 137.5 14 137.5l85.4 14.8 40.3-10s-24-81.7-24.1-82zM85.1 25.3c-1.9.6-4 1.2-6.4 2V25c0-4.4-.6-8-1.6-10.9 4 .5 6.7 5.1 8 11.2zM72.4 14.9c1.1 3 1.8 7.1 1.8 12.7v1c-4.2 1.3-8.7 2.7-13.2 4.1 2.5-9.8 7.3-14.6 11.4-17.8zM68.7 9.2c.7 0 1.5.3 2.2.8-5.4 2.5-11.1 8.9-13.6 21.6l-10.5 3.2C49.7 25 56.1 9.4 68.7 9.2z"/>
                <path fill="#5E8E3E" d="M114.4 29.1c-.5 0-10.4-.8-10.4-.8s-6.9-6.9-7.7-7.6c-.3-.3-.6-.4-1-.4l-5.6 114.2 40.3-10S115.6 30.3 115.6 30.3c-.1-.8-.7-1.2-1.2-1.2z"/>
                <path fill="#fff" d="M79.5 45.8l-4.4 16.3s-5-2.3-10.8-2.3c-8.7 0-9.2 5.5-9.2 6.8 0 7.5 19.5 10.4 19.5 28 0 13.8-8.8 22.8-20.6 22.8-14.2 0-21.5-8.8-21.5-8.8l3.8-12.6s7.5 6.4 13.8 6.4c4.1 0 5.8-3.3 5.8-5.7 0-9.8-16-10.2-16-26.4 0-13.6 9.7-26.7 29.3-26.7 7.6.1 11.3 2.2 11.3 2.2z"/>
              </svg>
            </div>
            {/* WooCommerce logo SVG */}
            <div className="flex items-center justify-center">
              <svg width="140" height="32" viewBox="0 0 579 108" fill="none">
                <path fill="#96588A" d="M52.9 0H16.2C7.3 0 0 7.3 0 16.2v55.7c0 8.9 7.3 16.2 16.2 16.2h14.3l6.4 19.8 19.8-19.8h-3.8c8.9 0 16.2-7.3 16.2-16.2V16.2C69.1 7.3 61.8 0 52.9 0zM19.2 57.3c-1.8 2.6-4.3 3.8-7.3 3.5-3-.3-5.1-1.8-6.4-4.7-3.2-7.2-5.7-14.8-7.5-22.9-.7-3 .2-5.5 2.5-7.3 2.3-1.8 4.8-2.2 7.5-1.2 2.3.9 3.7 2.7 4.2 5.3.9 5.3 2.3 10.3 4 15.2 2.8-5.5 5-11.3 6.6-17.4.8-3 3-4.8 6-5.2 3-.3 5.4.7 7.2 3.1 2.6 3.4 4.5 7.2 5.8 11.4.7-8.5 2.4-16.5 5.1-24 1-2.8 3.2-4.4 6.2-4.8 2.8-.3 5.3.6 7.2 2.9 1.2 1.5 1.5 3.2 1 5.1-2.3 8.2-3.9 16.6-4.8 25.2-.5 4.6-1 9.2-1.5 13.8-.3 3.2-1.9 5.4-4.8 6.5-2.8 1-5.3.4-7.3-1.9-3.8-4.3-6.6-9.3-8.3-14.8-3.4 6.8-6.3 13.7-9.8 20.6-.5.9-1.2 1.9-2.4 3.2z"/>
              </svg>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
