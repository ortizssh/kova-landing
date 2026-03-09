"use client";

import { Phone, MessageSquare, Brain, BarChart3 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const points = [
  {
    icon: Phone,
    title: "Llamadas reales entrantes y salientes",
    desc: "El agente de voz atiende y realiza llamadas a números telefónicos reales. Tus clientes llaman al número de tu tienda y Kova contesta — como un agente humano.",
  },
  {
    icon: MessageSquare,
    title: "Continuidad de contexto total",
    desc: "Si un cliente chateó primero y luego llama, el agente de voz sabe exactamente qué productos vio, qué preguntó y qué tiene en el carrito.",
  },
  {
    icon: Brain,
    title: "Misma inteligencia, diferente canal",
    desc: "El mismo knowledge base, catálogo y personalidad de tu marca — ahora también por teléfono. Powered by Retell AI.",
  },
  {
    icon: BarChart3,
    title: "Analytics unificados",
    desc: "Las interacciones de voz se registran junto a las del chat. Un solo dashboard para medir todo el impacto de tu asistente.",
  },
];

function WaveformBar({ height, delay }: { height: number; delay: number }) {
  return (
    <div
      className="w-1 rounded-full bg-primary/70 animate-pulse"
      style={{
        height: `${height}px`,
        animationDelay: `${delay}s`,
        animationDuration: "1.2s",
      }}
    />
  );
}

export default function VoiceCalling() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left — text content */}
          <AnimatedSection>
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                Nuevo
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4 leading-tight">
                Llamadas telefónicas reales con IA — con todo el contexto
              </h2>
              <p className="text-text-secondary text-base sm:text-lg mb-8">
                Kova no solo chatea. Tu asistente atiende y realiza llamadas
                telefónicas reales — no VoIP, no chat de voz — llamadas a
                números reales. Y lo hace con todo el historial de la
                conversación. Sin repetir, sin fricción.
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
                Disponible en planes Professional y Enterprise.{" "}
                <a
                  href="#pricing"
                  className="text-primary font-medium hover:underline"
                >
                  Ver planes →
                </a>
              </p>
            </div>
          </AnimatedSection>

          {/* Right — visual mockup */}
          <AnimatedSection delay={0.2}>
            <div className="relative flex justify-center min-h-[520px]">
              {/* Background chat widget (blurred) */}
              <div className="absolute left-1/2 -translate-x-[60%] top-4 w-[280px] md:w-[300px] bg-white rounded-3xl shadow-md border border-border overflow-hidden opacity-30 blur-[2px]">
                <div className="bg-primary px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs">K</div>
                  <div className="text-white font-semibold text-sm">Kova</div>
                </div>
                <div className="p-4 flex flex-col gap-3 bg-[#f9f9fb]">
                  <div className="flex gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/10 shrink-0" />
                    <div className="bg-white rounded-lg px-3 py-2 text-xs text-text-primary shadow-sm">¡Hola! ¿Buscas algo en particular?</div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="bg-primary/10 rounded-lg px-3 py-2 text-xs text-text-primary">Sí, vi la Crema Hidratante</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/10 shrink-0" />
                    <div className="bg-white rounded-lg px-3 py-2 text-xs text-text-primary shadow-sm">¡Excelente elección! ¿Quieres saber sobre los ingredientes?</div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="bg-primary/10 rounded-lg px-3 py-2 text-xs text-text-primary">Prefiero hablar por teléfono</div>
                  </div>
                </div>
              </div>

              {/* Foreground — Real phone call screen (iOS style) */}
              <div className="absolute left-1/2 -translate-x-[35%] top-0 w-[280px] md:w-[300px] rounded-[2.5rem] shadow-2xl border border-gray-200 overflow-hidden bg-gradient-to-b from-[#1c1c1e] to-[#2c2c2e]">
                {/* Status bar */}
                <div className="flex items-center justify-between px-7 pt-4 pb-2">
                  <span className="text-white/60 text-[11px] font-medium">9:41</span>
                  <div className="flex items-center gap-1">
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="white" fillOpacity="0.6"><rect x="0" y="6" width="3" height="6" rx="0.5"/><rect x="4.5" y="4" width="3" height="8" rx="0.5"/><rect x="9" y="1.5" width="3" height="10.5" rx="0.5"/><rect x="13.5" y="0" width="2.5" height="12" rx="0.5"/></svg>
                    <svg width="16" height="12" viewBox="0 0 25 12" fill="white" fillOpacity="0.6"><rect x="0" y="1" width="22" height="10" rx="2" stroke="white" strokeOpacity="0.35" strokeWidth="1" fill="none"/><rect x="1.5" y="2.5" width="16" height="7" rx="1" fill="white" fillOpacity="0.6"/><rect x="23" y="4" width="2" height="4" rx="1" fill="white" fillOpacity="0.3"/></svg>
                  </div>
                </div>

                {/* Caller info */}
                <div className="flex flex-col items-center pt-6 pb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center mb-4 ring-2 ring-white/10">
                    <span className="text-3xl font-bold text-white/90">K</span>
                  </div>
                  <h3 className="text-white text-lg font-semibold">Kova</h3>
                  <p className="text-white/50 text-sm mt-0.5">+56 9 8765 4321</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-sm font-mono">03:42</span>
                  </div>
                </div>

                {/* Waveform visualization */}
                <div className="px-8 py-4 flex items-center justify-center gap-[3px]">
                  {[12, 20, 8, 26, 14, 22, 10, 18, 24, 12, 16, 22, 8, 20, 14, 26, 10, 18, 12, 24, 16, 20, 8, 22, 14].map(
                    (h, i) => (
                      <WaveformBar key={i} height={h} delay={i * 0.06} />
                    )
                  )}
                </div>

                {/* Call action buttons (iOS style) */}
                <div className="px-8 pt-4 pb-8">
                  <div className="grid grid-cols-3 gap-y-5 place-items-center">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.8"><rect x="1" y="1" width="22" height="22" rx="5"/><line x1="1" y1="8" x2="23" y2="8"/><line x1="1" y1="15" x2="23" y2="15"/><line x1="8" y1="1" x2="8" y2="23"/><line x1="16" y1="1" x2="16" y2="23"/></svg>
                      </div>
                      <span className="text-[10px] text-white/50">teclado</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.8"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 010 14.14"/><path d="M15.54 8.46a5 5 0 010 7.07"/></svg>
                      </div>
                      <span className="text-[10px] text-white/50">altavoz</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.8"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/></svg>
                      </div>
                      <span className="text-[10px] text-white/50">silenciar</span>
                    </div>
                  </div>
                  {/* End call button */}
                  <div className="flex justify-center mt-6">
                    <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/30">
                      <Phone className="w-7 h-7 text-white rotate-[135deg]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
