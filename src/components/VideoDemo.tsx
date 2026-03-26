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
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl cursor-pointer group">
            {/* Background: faint widget mockup */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-[#1e1e35] to-[#2a2a50]">
              {/* Simulated store + widget screenshot feel */}
              <div className="absolute inset-0 opacity-[0.12]">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              {/* Faint widget preview in bottom-right */}
              <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-[160px] md:w-[220px] opacity-30">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                  {/* Mini header */}
                  <div className="h-8 bg-primary/60 px-3 flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-white/30" />
                    <div className="w-12 h-2 rounded-full bg-white/40" />
                  </div>
                  {/* Mini messages */}
                  <div className="p-2.5 flex flex-col gap-1.5">
                    <div className="h-2 w-3/4 rounded-full bg-white/15" />
                    <div className="h-2 w-1/2 rounded-full bg-white/10 ml-auto" />
                    <div className="h-8 w-full rounded bg-white/10 mt-1" />
                    <div className="h-2 w-2/3 rounded-full bg-white/15" />
                  </div>
                  {/* Mini input */}
                  <div className="h-6 border-t border-white/10 px-2 flex items-center">
                    <div className="h-2 w-full rounded-full bg-white/10" />
                  </div>
                </div>
              </div>

              {/* Faint store UI in top-left */}
              <div className="absolute top-8 left-8 md:top-12 md:left-12 opacity-20">
                <div className="flex gap-3 mb-4">
                  <div className="w-16 h-2 rounded-full bg-white/30" />
                  <div className="w-12 h-2 rounded-full bg-white/20" />
                  <div className="w-14 h-2 rounded-full bg-white/20" />
                </div>
                <div className="flex gap-3">
                  <div className="w-24 h-28 rounded-lg bg-white/10 p-2">
                    <div className="w-full h-14 rounded bg-white/10 mb-2" />
                    <div className="h-2 w-3/4 rounded-full bg-white/15" />
                    <div className="h-2 w-1/2 rounded-full bg-white/10 mt-1" />
                  </div>
                  <div className="w-24 h-28 rounded-lg bg-white/10 p-2 hidden md:block">
                    <div className="w-full h-14 rounded bg-white/10 mb-2" />
                    <div className="h-2 w-3/4 rounded-full bg-white/15" />
                    <div className="h-2 w-1/2 rounded-full bg-white/10 mt-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

            {/* Frosted glass play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <div className="w-18 h-18 w-[72px] h-[72px] rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:bg-white transition-colors duration-300">
                  <Play className="w-8 h-8 text-primary ml-1" fill="#6b5afc" />
                </div>
              </div>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <span className="text-white/70 text-sm font-medium">
                Demo — Kova AI Assistant
              </span>
              <span className="text-white/50 text-sm font-mono">2:34</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="text-center mt-10">
          <a
            href="https://app.heykova.io/register"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover transition-colors shadow-primary text-base"
          >
            Probar Kova
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
