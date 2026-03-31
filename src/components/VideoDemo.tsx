"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useI18n } from "@/lib/i18n";

export default function VideoDemo() {
  const { t } = useI18n();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <section id="video" className="py-16 md:py-24 bg-sage">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            {t("video.title")}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t("video.subtitle")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-4xl mx-auto">
          <div
            className="relative aspect-video rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src="/kova-demo.mp4"
              className="w-full h-full object-cover"
              playsInline
              onEnded={() => setPlaying(false)}
            />

            {/* Play/Pause overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            >
              <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <div className="w-[72px] h-[72px] rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:bg-white transition-colors duration-300">
                  {playing ? (
                    <Pause className="w-8 h-8 text-primary" fill="#6b5afc" />
                  ) : (
                    <Play className="w-8 h-8 text-primary ml-1" fill="#6b5afc" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="text-center mt-10">
          <a
            href="https://app.heykova.io/register"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover transition-colors shadow-primary text-base"
          >
            {t("video.cta")}
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
