"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

function AnnotationLine({
  label,
  side,
  top,
}: {
  label: string;
  side: "left" | "right";
  top: string;
}) {
  return (
    <div
      className={`absolute hidden lg:flex items-center gap-2 ${
        side === "left" ? "right-full mr-4" : "left-full ml-4"
      }`}
      style={{ top }}
    >
      {side === "right" && (
        <>
          <div className="w-2 h-2 rounded-full bg-primary/60 shrink-0" />
          <div className="w-10 h-px bg-primary/40" />
        </>
      )}
      <span className="whitespace-nowrap text-sm font-medium text-text-secondary bg-white px-3 py-1.5 rounded-full shadow-sm border border-border">
        {label}
      </span>
      {side === "left" && (
        <>
          <div className="w-10 h-px bg-primary/40" />
          <div className="w-2 h-2 rounded-full bg-primary/60 shrink-0" />
        </>
      )}
    </div>
  );
}

export default function WidgetShowcase() {
  return (
    <section className="py-16 md:py-24 bg-sage">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            Un widget que se adapta a tu marca
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Se adapta a la identidad de tu marca
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex justify-center">
            <div className="relative">
              {/* Annotations */}
              <AnnotationLine label="Avatar + nombre + estado" side="left" top="32px" />
              <AnnotationLine label="Mensaje de bienvenida" side="right" top="100px" />
              <AnnotationLine label="Botones de respuesta rápida" side="left" top="170px" />
              <AnnotationLine label="Tarjeta de producto con imagen" side="right" top="260px" />
              <AnnotationLine label="Badge: 10% OFF" side="left" top="280px" />
              <AnnotationLine label="Panel de carrito" side="right" top="400px" />
              <AnnotationLine label="Micrófono + adjuntar imagen" side="left" top="510px" />
              <AnnotationLine label="Barra de input" side="right" top="530px" />

              {/* Widget mockup with color animation */}
              <motion.div 
                className="w-[380px] bg-white rounded-3xl shadow-xl border overflow-hidden"
                animate={{
                  borderColor: [
                    "#6b5afc",
                    "#10b981",
                    "#f59e0b",
                    "#ef4444",
                    "#3b82f6",
                    "#6b5afc",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Header */}
                <motion.div 
                  className="px-5 py-4 flex items-center gap-3"
                  animate={{
                    background: [
                      "#6b5afc",
                      "#10b981",
                      "#f59e0b",
                      "#ef4444",
                      "#3b82f6",
                      "#6b5afc",
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                    K
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm">Kova</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-white/80 text-xs">En línea</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                  </div>
                </motion.div>

                {/* Messages area */}
                <div className="p-5 flex flex-col gap-4 bg-[#f9f9fb]">
                  {/* Welcome */}
                  <div className="flex gap-2">
                    <motion.div 
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                      animate={{
                        background: [
                          "rgba(107, 90, 252, 0.1)",
                          "rgba(16, 185, 129, 0.1)",
                          "rgba(245, 158, 11, 0.1)",
                          "rgba(239, 68, 68, 0.1)",
                          "rgba(59, 130, 246, 0.1)",
                          "rgba(107, 90, 252, 0.1)",
                        ],
                        color: [
                          "#6b5afc",
                          "#10b981",
                          "#f59e0b",
                          "#ef4444",
                          "#3b82f6",
                          "#6b5afc",
                        ],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      K
                    </motion.div>
                    <div className="bg-white rounded-lg px-4 py-2.5 text-sm text-text-primary shadow-sm">
                      ¡Hola! 👋 ¿En qué puedo ayudarte hoy?
                    </div>
                  </div>

                  {/* Quick replies */}
                  <div className="flex gap-2 flex-wrap ml-9">
                    {["Novedades", "Ofertas", "Ayuda"].map((btn) => (
                      <motion.button
                        key={btn}
                        className="px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors"
                        animate={{
                          borderColor: [
                            "#6b5afc4d",
                            "#10b9814d",
                            "#f59e0b4d",
                            "#ef44444d",
                            "#3b82f64d",
                            "#6b5afc4d",
                          ],
                          color: [
                            "#6b5afc",
                            "#10b981",
                            "#f59e0b",
                            "#ef4444",
                            "#3b82f6",
                            "#6b5afc",
                          ],
                          background: [
                            "rgba(107, 90, 252, 0.05)",
                            "rgba(16, 185, 129, 0.05)",
                            "rgba(245, 158, 11, 0.05)",
                            "rgba(239, 68, 68, 0.05)",
                            "rgba(59, 130, 246, 0.05)",
                            "rgba(107, 90, 252, 0.05)",
                          ],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ border: "1px solid" }}
                      >
                        {btn}
                      </motion.button>
                    ))}
                  </div>

                  {/* Product card */}
                  <div className="ml-9 bg-white rounded-xl shadow-sm overflow-hidden max-w-[270px]">
                    <div className="h-28 bg-gradient-to-br from-violet-200 via-indigo-100 to-purple-200 flex items-center justify-center relative">
                      {/* Colored product placeholder */}
                      <div className="w-16 h-16 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-sm">
                        <span className="text-3xl">👟</span>
                      </div>
                      {/* Promo badge */}
                      <span className="absolute top-2 right-2 bg-accent text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                        10% OFF
                      </span>
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-semibold text-text-primary">
                        Zapatilla Urban Pro
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <p className="text-sm font-bold text-primary">$49.990</p>
                        <p className="text-xs text-text-muted line-through">$55.990</p>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <svg key={s} width="10" height="10" viewBox="0 0 24 24" fill={s <= 4 ? "#facc15" : "#e5e7eb"}>
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                        <span className="text-[10px] text-text-muted ml-0.5">(128)</span>
                      </div>
                      <motion.button 
                        className="mt-2 w-full py-1.5 text-white text-xs font-semibold rounded-lg"
                        animate={{
                          background: [
                            "#6b5afc",
                            "#10b981",
                            "#f59e0b",
                            "#ef4444",
                            "#3b82f6",
                            "#6b5afc",
                          ],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        Agregar al carrito
                      </motion.button>
                    </div>
                  </div>

                  {/* Cart panel preview */}
                  <div className="ml-9 bg-white rounded-xl shadow-sm p-3 max-w-[270px]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-text-primary">
                        🛒 Tu carrito (1)
                      </span>
                      <span className="text-sm font-bold text-primary">
                        $49.990
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2 bg-sage rounded-lg">
                      <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-lg">
                        👟
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-text-primary">
                          Zapatilla Urban Pro
                        </p>
                        <p className="text-[11px] text-text-muted">Qty: 1</p>
                      </div>
                      <motion.span 
                        className="text-xs font-semibold"
                        animate={{
                          color: [
                            "#6b5afc",
                            "#10b981",
                            "#f59e0b",
                            "#ef4444",
                            "#3b82f6",
                            "#6b5afc",
                          ],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        $49.990
                      </motion.span>
                    </div>
                    <motion.button 
                      className="mt-2 w-full py-1.5 text-xs font-semibold rounded-lg"
                      animate={{
                        background: [
                          "rgba(107, 90, 252, 0.1)",
                          "rgba(16, 185, 129, 0.1)",
                          "rgba(245, 158, 11, 0.1)",
                          "rgba(239, 68, 68, 0.1)",
                          "rgba(59, 130, 246, 0.1)",
                          "rgba(107, 90, 252, 0.1)",
                        ],
                        color: [
                          "#6b5afc",
                          "#10b981",
                          "#f59e0b",
                          "#ef4444",
                          "#3b82f6",
                          "#6b5afc",
                        ],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      Ir al checkout →
                    </motion.button>
                  </div>
                </div>

                {/* Input */}
                <div className="border-t border-border px-4 py-3 flex items-center gap-3">
                  <button className="text-text-muted hover:text-primary transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </button>
                  <button className="text-text-muted hover:text-primary transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
                      <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" />
                    </svg>
                  </button>
                  <div className="flex-1 bg-[#f5f5f8] rounded-full px-4 py-2 text-xs text-text-muted flex items-center">
                    Escribe un mensaje...
                  </div>
                  <motion.div 
                    className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                    animate={{
                      background: [
                        "#6b5afc",
                        "#10b981",
                        "#f59e0b",
                        "#ef4444",
                        "#3b82f6",
                        "#6b5afc",
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
