"use client";

import { Play } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function VideoDemo() {
  return (
    <section id="video" className="py-16 md:py-24 bg-sage">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            Mira a Kova en acción
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Descubre cómo el asistente interactúa con tus clientes en tiempo
            real
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-[--radius-xl] overflow-hidden bg-gradient-to-br from-dark via-[#2a2a40] to-primary/40 shadow-lg cursor-pointer group">
            {/* Decorative grid */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <Play className="w-7 h-7 text-primary ml-1" fill="#6b5afc" />
                </div>
              </div>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <span className="text-white/60 text-sm font-medium">
                Demo — Kova AI Assistant
              </span>
              <span className="text-white/40 text-sm">2:34</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="text-center mt-10">
          <a
            href="https://app.heykova.io/register"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-[--radius-md] bg-primary text-white font-semibold hover:bg-primary-hover transition-colors shadow-primary text-base"
          >
            Pruébalo gratis
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
