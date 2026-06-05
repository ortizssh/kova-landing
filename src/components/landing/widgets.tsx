"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { IMG, type Content } from "@/lib/kovaContent";
import { Icon } from "./icons";

/* small product thumbnail — real photo or striped placeholder */
export function Thumb({ tone = 0, src }: { tone?: number; src?: string }) {
  if (src) {
    return (
      <div
        className="thumb photo"
        style={{ backgroundImage: "url(" + IMG.u(src, 200) + ")", border: "1px solid var(--line-2)" }}
      />
    );
  }
  const tones = ["var(--paper-3)", "var(--paper-2)"];
  return (
    <div
      className="thumb"
      style={{
        background: tones[tone % 2],
        backgroundImage:
          "repeating-linear-gradient(135deg, transparent 0 5px, color-mix(in srgb, var(--ink) 7%, transparent) 5px 6px)",
        border: "1px solid var(--line-2)",
      }}
    />
  );
}

/* typing dots */
export function Typing() {
  return (
    <div className="bubble bot" style={{ display: "flex", gap: 5, padding: "14px 16px", width: "fit-content" }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "var(--ink-soft)",
            animation: "kovaTyping 1.2s infinite",
            animationDelay: `${i * 0.18}s`,
          }}
        />
      ))}
    </div>
  );
}

/* Voice call mock */
export function PhoneCall({ t }: { t: Content }) {
  const w = t.widget;
  return (
    <div className="phone" style={{ maxWidth: 320, margin: "0 auto" }}>
      <div className="pava">K</div>
      <div className="pname">Kova</div>
      <div className="pnum">+56 9 8765 4321</div>
      <div className="ptime">{w.calling} · 03:42</div>
      <div className="pwave">
        {[14, 26, 18, 34, 22, 30, 16, 28, 20, 32, 15, 24].map((h, i) => (
          <i key={i} style={{ animationDelay: `${i * 0.08}s`, height: h }} />
        ))}
      </div>
      <div className="pactions">
        <div className="pact">
          <span className="ico">🔇</span>
          {w.mute}
        </div>
        <div className="pact">
          <span className="ico">⊞</span>
          {w.keypad}
        </div>
        <div className="pact">
          <span className="ico">🔊</span>
          {w.speaker}
        </div>
      </div>
    </div>
  );
}

/* Vision chat mock — photo upload → recommendations */
export function VisionChat({ t }: { t: Content }) {
  const w = t.widget;
  return (
    <div className="device" style={{ maxWidth: 400 }}>
      <div className="w-head">
        <div className="w-ava">K</div>
        <div>
          <div className="w-name">Kova</div>
          <div className="w-status">
            <span className="live" />
            {w.online}
          </div>
        </div>
        <span className="tag-new" style={{ marginLeft: "auto" }}>
          {t.vision.eyebrow}
        </span>
      </div>
      <div className="w-body" style={{ gap: 14 }}>
        <div style={{ alignSelf: "flex-end", display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
          <div
            className="ph photo"
            style={{
              width: 150,
              height: 104,
              borderRadius: 14,
              backgroundImage: "url(" + IMG.u(IMG.visionRoom, 360) + ")",
              border: "1px solid var(--line)",
            }}
          />
          <div className="bubble me">{w.visionQ}</div>
        </div>
        <div className="bubble bot" style={{ maxWidth: "92%" }}>
          {w.visionA}
        </div>
        <div className="w-prodcard">
          <Thumb src={IMG.prodSofa} />
          <div>
            <div className="pn">{w.p1}</div>
            <div className="pp">{w.p1p}</div>
          </div>
        </div>
        <div className="w-prodcard">
          <Thumb src={IMG.prodLamp} />
          <div>
            <div className="pn">{w.p2}</div>
            <div className="pp">{w.p2p}</div>
          </div>
        </div>
      </div>
      <div className="w-input">
        <span className="clip">⌯</span>
        <span>{w.input}</span>
        <span className="send">→</span>
      </div>
    </div>
  );
}

/* Branded widget showcase (customization section) — cycles brand colors to show
   how the whole widget recolors to a store's identity. */
const BRAND_THEMES: [accent: string, ink: string][] = [
  ["#1b1c1e", "#fbfbf9"], // ink (default)
  ["#b5654a", "#ffffff"], // terracotta
  ["#3f6f52", "#ffffff"], // forest green
  ["#2f5d8a", "#ffffff"], // deep blue
  ["#9a6a3a", "#ffffff"], // brass / amber
  ["#7a4f8f", "#ffffff"], // plum
];

export function BrandWidget({ t }: { t: Content }) {
  const w = t.widget;
  const reduce = useRef(typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [bi, setBi] = useState(0);
  useEffect(() => {
    if (reduce.current) return;
    const id = setInterval(() => setBi((i) => (i + 1) % BRAND_THEMES.length), 2100);
    return () => clearInterval(id);
  }, []);
  const [accent, ink] = BRAND_THEMES[bi];
  const quick = t.lang === "en" ? ["New in", "Deals", "Help"] : ["Novedades", "Ofertas", "Ayuda"];

  return (
    <div
      className="device brandcycle"
      style={{ maxWidth: 380, ["--accent"]: accent, ["--accent-ink"]: ink } as React.CSSProperties}
    >
      <div className="w-head">
        <div className="w-ava">K</div>
        <div>
          <div className="w-name">Kova</div>
          <div className="w-status">
            <span className="live" />
            {w.online}
          </div>
        </div>
      </div>
      <div className="w-body" style={{ gap: 14, minHeight: 384 }}>
        <div className="bubble bot">{w.msg1}</div>
        <div className="bw-quick">
          {quick.map((q) => (
            <button key={q} className="bw-chip" type="button">{q}</button>
          ))}
        </div>
        <div className="bubble me" style={{ alignSelf: "flex-end" }}>{w.hMe1}</div>
        <div className="w-prodcard">
          <Thumb src={IMG.prodSofa} />
          <div style={{ flex: 1 }}>
            <div className="pn">{w.p1}</div>
            <div className="pp">{w.p1p}</div>
          </div>
        </div>
        <div className="bw-checkout">
          <span>🛒 1 · {w.p1p}</span>
          <span style={{ fontWeight: 600 }}>checkout →</span>
        </div>
      </div>
      <div className="w-input">
        <span className="clip">⌯</span>
        <span>{w.input}</span>
        <span className="send">→</span>
      </div>
    </div>
  );
}

/* rAF-driven fade-in (reliable; CSS anim timelines can stall in some contexts) */
function kovaFadeIn(
  el: HTMLElement | null,
  opts: { dur?: number; delay?: number; dy?: number; scale?: number; opacityOnly?: boolean } = {},
) {
  if (!el) return;
  const dur = opts.dur || 480;
  const delay = opts.delay || 0;
  const dy = opts.dy || 0;
  const scale = opts.scale != null ? opts.scale : 1;
  const moves = !opts.opacityOnly && (dy || scale !== 1);
  el.style.opacity = "0";
  if (moves) el.style.transform = "translateY(" + dy + "px) scale(" + scale + ")";
  const start = performance.now() + delay;
  const step = (now: number) => {
    let p = (now - start) / dur;
    if (p < 0) {
      requestAnimationFrame(step);
      return;
    }
    if (p > 1) p = 1;
    const k = 1 - Math.pow(1 - p, 3);
    el.style.opacity = String(k);
    if (moves)
      el.style.transform =
        "translateY(" + (dy * (1 - k)).toFixed(2) + "px) scale(" + (scale + (1 - scale) * k).toFixed(3) + ")";
    if (p < 1) requestAnimationFrame(step);
    else {
      el.style.opacity = "";
      if (moves) el.style.transform = "";
    }
  };
  requestAnimationFrame(step);
}

/* HERO STAGE — composite chat + product + floating call + feature icons */
export function HeroStage({ t }: { t: Content }) {
  const w = t.widget;
  const [shown, setShown] = useState(1);
  const [typing, setTyping] = useState(false);
  const reduce = useRef(typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches);
  const stageRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const callRef = useRef<HTMLDivElement>(null);
  const TOTAL = 7;

  useEffect(() => {
    if (reduce.current) {
      setShown(TOTAL);
      return;
    }
    let alive = true;
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const botSteps: Record<number, boolean> = { 1: true, 3: true, 5: true };
    const run = async () => {
      while (alive) {
        for (let i = 1; i <= TOTAL; i++) {
          if (!alive) return;
          if (botSteps[i]) {
            setTyping(true);
            await wait(820);
            if (!alive) return;
            setTyping(false);
          }
          setShown(i);
          await wait(i === 4 ? 1100 : i === 6 ? 900 : 1350);
        }
        await wait(3200);
        if (!alive) return;
        setShown(1);
      }
    };
    run();
    return () => {
      alive = false;
    };
  }, [t]);

  // keep chat scrolled to the latest message (smoothly)
  useLayoutEffect(() => {
    const b = bodyRef.current;
    if (!b) return;
    b.scrollTo({ top: b.scrollHeight, behavior: reduce.current ? "auto" : "smooth" });
  }, [shown, typing]);

  // entrance animations: call card (step 6), floating icons (step 7 — the end)
  useLayoutEffect(() => {
    if (reduce.current) return;
    if (shown === 6) kovaFadeIn(callRef.current, { dur: 540, dy: 16, scale: 0.94 });
    if (shown === 7 && stageRef.current) {
      stageRef.current.querySelectorAll<HTMLElement>(".hs-icon").forEach((el, i) =>
        kovaFadeIn(el, { dur: 460, delay: i * 120, opacityOnly: true }),
      );
    }
  }, [shown]);

  return (
    <div className="herostage" ref={stageRef}>
      {shown >= 7 && (
        <div className="hs-icon hs-mail">
          <Icon name="mail" />
        </div>
      )}
      {shown >= 7 && (
        <div className="hs-icon hs-cal">
          <Icon name="cal" />
        </div>
      )}
      {shown >= 7 && (
        <div className="hs-icon hs-doc">
          <Icon name="doc" />
        </div>
      )}
      {shown >= 7 && (
        <div className="hs-icon hs-cart">
          <Icon name="cart" />
        </div>
      )}

      <div className="device hs-chat">
        <div className="w-head">
          <div className="w-ava">K</div>
          <div>
            <div className="w-name">Kova</div>
            <div className="w-status">
              <span className="live" />
              {w.online}
            </div>
          </div>
        </div>
        <div className="hs-body" ref={bodyRef}>
          {shown >= 1 && <div className="bubble bot">{w.hBot1}</div>}
          {shown >= 2 && <div className="bubble me">{w.hMe1}</div>}
          {shown >= 3 && <div className="bubble bot">{w.hBot2}</div>}
          {shown >= 4 && (
            <div className="hs-prod">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="pim" src={IMG.u(IMG.prodSofa, 520)} alt={w.prod3} />
              <div className="pbody">
                <div className="pnm">{w.prod3}</div>
                <div className="ppr">{w.prod3p}</div>
                <button className="hs-cta">
                  <Icon name="cart" />
                  {w.addCart}
                </button>
              </div>
            </div>
          )}
          {shown >= 5 && (
            <div className="bubble bot">
              {w.hBot3}
              <button className="hs-cta ghost hs-afterbtn">
                <Icon name="phone" />
                {w.reqCall}
              </button>
            </div>
          )}
          {typing && <Typing />}
        </div>
        <div className="w-input">
          <span className="clip">
            <Icon name="phone" />
          </span>
          <span>{w.input}</span>
          <span className="send">
            <Icon name="send" />
          </span>
        </div>
      </div>

      {shown >= 6 && (
        <div className="hs-call" ref={callRef}>
          <div className="ava">K</div>
          <div className="nm">Kova</div>
          <div className="st">
            <span className="d" />
            03:42
          </div>
          <div className="hs-wave">
            {[8, 16, 11, 22, 14, 19, 9, 17, 12, 20].map((h, i) => (
              <i key={i} style={{ height: h, animationDelay: i * 0.07 + "s" }} />
            ))}
          </div>
          <div className="hs-acts">
            <span className="b">
              <Icon name="speaker" />
            </span>
            <span className="b">
              <Icon name="mic" />
            </span>
            <span className="b end">
              <Icon name="end" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
