"use client";

import AnimatedSection from "./AnimatedSection";

export default function EarlyAccess() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-to-r from-primary to-primary-hover px-8 py-14 md:px-16 md:py-20 text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-sm font-medium mb-6">
              Early Access
            </span>
            <h2 className="text-3xl md:text-[2.5rem] font-bold mb-4">
              Únete a las marcas que ya venden más con IA
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
              Kova está en early access. Las primeras tiendas ya están generando
              conversiones medibles con nuestro asistente.
            </p>
            <a
              href="https://app.heykova.io/register"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-colors text-base"
            >
              Solicitar acceso
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
