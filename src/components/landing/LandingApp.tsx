"use client";

import React from "react";
import { KOVA, IMG, type Lang, type Content } from "@/lib/kovaContent";
import {
  Nav, Hero, Logos, Voice, Vision, Verticals, How, Feats,
  BrandSection, Comparison, Stats, Value, Pricing, Guarantee, FAQ, BigCTA, Footer,
} from "./sections";
import { ImageBand, GalleryRow } from "./media";

export default function LandingApp() {
  const [lang, setLang] = React.useState<Lang>("es");

  // load saved language after mount (avoids SSR/hydration mismatch)
  React.useEffect(() => {
    const saved = (localStorage.getItem("kova_lang") as Lang | null) || null;
    if (saved === "es" || saved === "en") setLang(saved);
  }, []);
  React.useEffect(() => {
    localStorage.setItem("kova_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const content: Content = { ...KOVA[lang], lang };

  // scroll reveal — JS rAF tween writing inline opacity/transform.
  // Independent of CSS animation/transition timelines, so content always ends
  // visible (with a hard failsafe on top). Motion fixed to "subtle".
  React.useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const clear = (e: HTMLElement) => {
      e.style.opacity = "";
      e.style.transform = "";
      e.dataset.revealed = "1";
    };

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(clear);
      return;
    }

    const dist = 26;
    const dur = 720;
    const easeOut = (p: number) => 1 - Math.pow(1 - p, 3);

    const tween = (el: HTMLElement) => {
      if (el.dataset.revealing === "1" || el.dataset.revealed === "1") return;
      el.dataset.revealing = "1";
      const delay = parseFloat(el.style.getPropertyValue("--reveal-delay")) || 0;
      let start: number | null = null;
      const step = (now: number) => {
        if (start === null) start = now + delay;
        let p = (now - start) / dur;
        if (p < 0) {
          requestAnimationFrame(step);
          return;
        }
        if (p > 1) p = 1;
        const k = easeOut(p);
        el.style.opacity = String(k);
        el.style.transform = "translateY(" + (dist * (1 - k)).toFixed(2) + "px)";
        if (p < 1) requestAnimationFrame(step);
        else {
          clear(el);
          el.dataset.revealing = "";
        }
      };
      requestAnimationFrame(step);
    };

    els.forEach((el) => {
      if (el.dataset.revealed === "1") return;
      el.style.opacity = "0";
      el.style.transform = "translateY(" + dist + "px)";
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            tween(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    const raf = requestAnimationFrame(() => {
      els.forEach((el) => {
        if (el.dataset.revealed === "1") return;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.94) tween(el);
        else io.observe(el);
      });
    });

    const safety = setTimeout(() => els.forEach(clear), 1800);
    return () => {
      io.disconnect();
      clearTimeout(safety);
      cancelAnimationFrame(raf);
    };
  }, [lang]);

  return (
    <>
      <Nav t={content} lang={lang} setLang={setLang} />
      <main>
        <Hero t={content} />
        <Logos t={content} />
        <ImageBand id={IMG.bandA} kicker={content.media.bandA.k} title={content.media.bandA.t} />
        <Voice t={content} />
        <Vision t={content} />
        <ImageBand id={IMG.bandB} kicker={content.media.bandB.k} title={content.media.bandB.t} />
        <Verticals t={content} />
        <How t={content} />
        <Feats t={content} />
        <GalleryRow t={content} />
        <BrandSection t={content} />
        <Comparison t={content} />
        <Stats t={content} />
        <Value t={content} />
        <ImageBand id={IMG.bandC} kicker={content.media.bandC.k} title={content.media.bandC.t} />
        <Pricing t={content} />
        <Guarantee t={content} />
        <FAQ t={content} />
        <BigCTA t={content} />
      </main>
      <Footer t={content} />
    </>
  );
}
