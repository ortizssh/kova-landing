"use client";

import AnimatedSection from "./AnimatedSection";

export default function EarlyAccess() {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-to-r from-primary to-primary-hover px-6 sm:px-8 py-12 md:px-16 md:py-20 text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Resultados reales
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold mb-4">
              Las primeras tiendas ya están vendiendo más
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8">
              10% de tasa de conversión promedio. Más de 2,000 recomendaciones que
              terminaron en compra. Menos de 20 minutos de recomendación a checkout.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold">10%</div>
                <div className="text-white/70 text-xs sm:text-sm">Conversión</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold">2,195+</div>
                <div className="text-white/70 text-xs sm:text-sm">Ventas asistidas</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold">&lt;20m</div>
                <div className="text-white/70 text-xs sm:text-sm">A compra</div>
              </div>
            </div>
            <a
              href="https://app.heykova.io/register"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-colors text-sm sm:text-base"
            >
              Quiero estos resultados
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
