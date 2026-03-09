"use client";

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
        <div className="w-8 h-px bg-primary/40" />
      )}
      <span className="whitespace-nowrap text-sm font-medium text-text-secondary bg-white px-3 py-1.5 rounded-full shadow-sm border border-border">
        {label}
      </span>
      {side === "left" && (
        <div className="w-8 h-px bg-primary/40" />
      )}
    </div>
  );
}

function ThemePreview({
  name,
  primary,
  bg,
  text,
}: {
  name: string;
  primary: string;
  bg: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-20 h-32 rounded-[--radius-md] border border-border overflow-hidden shadow-sm"
        style={{ background: bg }}
      >
        {/* Mini header */}
        <div className="h-6 flex items-center px-2" style={{ background: primary }}>
          <div className="w-3 h-3 rounded-full bg-white/30" />
        </div>
        {/* Mini messages */}
        <div className="p-1.5 flex flex-col gap-1">
          <div
            className="h-2 w-12 rounded-full"
            style={{ background: primary + "20" }}
          />
          <div
            className="h-2 w-10 rounded-full ml-auto"
            style={{ background: primary }}
          />
          <div
            className="h-2 w-14 rounded-full"
            style={{ background: primary + "20" }}
          />
          <div className="h-5 w-full rounded border" style={{ borderColor: primary + "30" }}>
            <div className="h-2 w-6 rounded-full mt-1.5 ml-1" style={{ background: primary + "40" }} />
          </div>
        </div>
      </div>
      <span className="text-xs font-medium" style={{ color: text }}>
        {name}
      </span>
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
              <AnnotationLine label="Avatar + nombre + estado" side="left" top="28px" />
              <AnnotationLine label="Mensaje de bienvenida" side="right" top="80px" />
              <AnnotationLine label="Botones de respuesta rápida" side="left" top="140px" />
              <AnnotationLine label="Tarjeta de producto" side="right" top="220px" />
              <AnnotationLine label="Panel de carrito" side="left" top="300px" />
              <AnnotationLine label="Badge promocional" side="right" top="340px" />
              <AnnotationLine label="Barra de input" side="left" top="420px" />

              {/* Widget mockup */}
              <div className="w-[340px] bg-white rounded-[--radius-xl] shadow-lg border border-border overflow-hidden">
                {/* Header */}
                <div className="bg-primary px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                    K
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm">Kova</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-white/80 text-xs">En línea</span>
                    </div>
                  </div>
                </div>

                {/* Messages area */}
                <div className="p-4 flex flex-col gap-3 bg-[#f9f9fb]">
                  {/* Welcome */}
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                      K
                    </div>
                    <div className="bg-white rounded-[--radius-sm] px-3 py-2 text-xs text-text-primary shadow-sm">
                      ¡Hola! 👋 ¿En qué puedo ayudarte hoy?
                    </div>
                  </div>

                  {/* Quick replies */}
                  <div className="flex gap-2 flex-wrap ml-8">
                    <button className="px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-medium bg-primary/5">
                      Novedades
                    </button>
                    <button className="px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-medium bg-primary/5">
                      Ofertas
                    </button>
                    <button className="px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-medium bg-primary/5">
                      Ayuda
                    </button>
                  </div>

                  {/* Product card */}
                  <div className="ml-8 bg-white rounded-[--radius-sm] shadow-sm overflow-hidden max-w-[240px]">
                    <div className="h-20 bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center relative">
                      <span className="text-2xl">👟</span>
                      {/* Promo badge */}
                      <span className="absolute top-1.5 right-1.5 bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        10% OFF
                      </span>
                    </div>
                    <div className="p-2.5">
                      <p className="text-xs font-semibold text-text-primary">
                        Zapatilla Urban Pro
                      </p>
                      <p className="text-xs font-bold text-primary">$49.990</p>
                      <button className="mt-1.5 w-full py-1 bg-primary text-white text-[10px] font-semibold rounded-[--radius-sm]">
                        Agregar al carrito
                      </button>
                    </div>
                  </div>

                  {/* Cart panel preview */}
                  <div className="ml-8 bg-white rounded-[--radius-sm] shadow-sm p-2.5 max-w-[240px]">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-text-primary">
                        Tu carrito (1)
                      </span>
                      <span className="text-xs font-bold text-primary">
                        $49.990
                      </span>
                    </div>
                    <div className="flex items-center gap-2 p-1.5 bg-sage rounded">
                      <div className="w-8 h-8 bg-violet-100 rounded flex items-center justify-center text-sm">
                        👟
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-medium text-text-primary">
                          Zapatilla Urban Pro
                        </p>
                        <p className="text-[10px] text-text-muted">Qty: 1</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="border-t border-border px-3 py-2 flex items-center gap-2">
                  <button className="text-text-muted">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                    </svg>
                  </button>
                  <button className="text-text-muted">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
                      <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" />
                    </svg>
                  </button>
                  <div className="flex-1 bg-[#f5f5f8] rounded-full px-3 py-1.5 text-[10px] text-text-muted">
                    Escribe un mensaje...
                  </div>
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Theme previews */}
        <AnimatedSection delay={0.3} className="mt-12">
          <div className="flex justify-center gap-8">
            <ThemePreview
              name="Purple"
              primary="#6b5afc"
              bg="#f9f9fb"
              text="#6b5afc"
            />
            <ThemePreview
              name="Dark"
              primary="#1a1a2e"
              bg="#1a1a2e"
              text="#64648c"
            />
            <ThemePreview
              name="Green"
              primary="#10b981"
              bg="#f0fdf4"
              text="#10b981"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
