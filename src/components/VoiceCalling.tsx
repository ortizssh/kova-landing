"use client";

import { Phone, MessageSquare, Brain, BarChart3 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const points = [
  {
    icon: Phone,
    title: "Llamadas entrantes y salientes",
    desc: "El agente de voz atiende llamadas de tus clientes o las inicia proactivamente para seguimiento post-venta.",
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
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text content */}
          <AnimatedSection>
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                Nuevo
              </span>
              <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4 leading-tight">
                Atención telefónica con IA — con todo el contexto
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                Kova no solo chatea. Cuando tu cliente necesita hablar, el
                agente de voz toma la llamada con todo el historial de la
                conversación. Sin repetir, sin fricción.
              </p>

              <div className="flex flex-col gap-6">
                {points.map((p) => (
                  <div key={p.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-[--radius-md] bg-primary/10 flex items-center justify-center shrink-0">
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
            <div className="relative flex justify-center">
              {/* Background chat (blurred / dimmed) */}
              <div className="w-[300px] md:w-[320px] bg-white rounded-[--radius-xl] shadow-md border border-border overflow-hidden opacity-40 blur-[1px]">
                {/* Header */}
                <div className="bg-primary px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs">
                    K
                  </div>
                  <div className="text-white font-semibold text-sm">Kova</div>
                </div>
                {/* Messages */}
                <div className="p-4 flex flex-col gap-3 bg-[#f9f9fb]">
                  <div className="flex gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/10 shrink-0" />
                    <div className="bg-white rounded-lg px-3 py-2 text-xs text-text-primary shadow-sm">
                      ¡Hola! ¿Buscas algo en particular?
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="bg-primary/10 rounded-lg px-3 py-2 text-xs text-text-primary">
                      Sí, vi la Crema Hidratante
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/10 shrink-0" />
                    <div className="bg-white rounded-lg px-3 py-2 text-xs text-text-primary shadow-sm">
                      ¡Excelente elección! Es nuestra más vendida. ¿Quieres
                      saber sobre los ingredientes?
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="bg-primary/10 rounded-lg px-3 py-2 text-xs text-text-primary">
                      Sí, y prefiero hablar por teléfono
                    </div>
                  </div>
                </div>
              </div>

              {/* Foreground phone call card */}
              <div className="absolute top-8 md:top-12 left-1/2 -translate-x-1/2 w-[280px] md:w-[300px] bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
                {/* Call header */}
                <div className="bg-gradient-to-r from-primary to-primary/80 px-5 py-4 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium opacity-80">
                      Llamada activa
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-mono">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      03:42
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">
                        María González
                      </div>
                      <div className="text-white/70 text-xs">
                        +56 9 8765 4321
                      </div>
                    </div>
                  </div>
                </div>

                {/* Waveform */}
                <div className="px-5 py-3 flex items-center justify-center gap-[3px] bg-primary/5">
                  {[14, 22, 10, 28, 16, 24, 12, 20, 26, 14, 18, 24, 10, 22, 16, 28, 12, 20, 14, 26].map(
                    (h, i) => (
                      <WaveformBar key={i} height={h} delay={i * 0.08} />
                    )
                  )}
                </div>

                {/* Context panel */}
                <div className="px-5 py-3 border-t border-border">
                  <div className="flex items-center gap-1.5 mb-2">
                    <MessageSquare className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-semibold text-text-primary">
                      Contexto del chat
                    </span>
                  </div>
                  <div className="bg-sage rounded-lg p-2.5 flex flex-col gap-1.5">
                    <div className="flex items-start gap-2">
                      <div className="w-8 h-8 rounded bg-violet-100 flex items-center justify-center text-xs shrink-0">
                        🧴
                      </div>
                      <div>
                        <p className="text-[11px] font-medium text-text-primary">
                          Vio Crema Hidratante
                        </p>
                        <p className="text-[11px] text-primary font-semibold">
                          $24.990
                        </p>
                      </div>
                    </div>
                    <div className="text-[10px] text-text-muted flex flex-col gap-0.5">
                      <span>• Preguntó por ingredientes</span>
                      <span>• Interesada en envío gratis</span>
                    </div>
                  </div>
                </div>

                {/* Call controls */}
                <div className="px-5 py-3 border-t border-border flex items-center justify-center gap-4">
                  <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-text-secondary"
                    >
                      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
                      <path d="M19 10v2a7 7 0 01-14 0v-2" />
                    </svg>
                  </button>
                  <button className="w-11 h-11 rounded-full bg-red-500 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white rotate-[135deg]" />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-text-secondary"
                    >
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
