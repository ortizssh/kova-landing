"use client";

import AnimatedSection from "./AnimatedSection";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-sage">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            Empieza a vender más hoy
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8">
            Instala Kova en tu tienda en menos de 5 minutos. 7 días de prueba
            incluidos.
          </p>
          <a
            href="https://app.heykova.io/register"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-semibold text-lg hover:bg-primary-hover transition-colors shadow-primary"
          >
            Comenzar ahora
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
