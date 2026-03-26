"use client";

import AnimatedSection from "./AnimatedSection";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-sage">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            Cada minuto sin Kova es dinero que pierdes
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-4">
            Mientras lees esto, visitantes están entrando a tu tienda, no encuentran
            lo que buscan, y se van. Kova los atiende en segundos.
          </p>
          <p className="text-text-muted text-sm max-w-md mx-auto mb-8">
            Setup en 5 minutos. 7 días de prueba. Garantía de 30 días.
          </p>
          <a
            href="https://app.heykova.io/register"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-semibold text-lg hover:bg-primary-hover transition-colors shadow-primary"
          >
            Activar mi vendedor IA
          </a>
          <p className="mt-6 text-sm text-text-muted">
            ¿Preguntas? Escríbenos a{" "}
            <a
              href="mailto:hola@heykova.io"
              className="text-primary hover:underline"
            >
              hola@heykova.io
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
