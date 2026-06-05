"use client";

import React from "react";
import type { Content, Lang } from "@/lib/kovaContent";
import { rev } from "./util";
import { HeroStage, PhoneCall, VisionChat, BrandWidget } from "./widgets";

export function Nav({ t, lang, setLang }: { t: Content; lang: Lang; setLang: (l: Lang) => void }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="wrap nav-inner">
        <a href="#top" className="nav-logo" aria-label="Kova">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/kova-logo.svg" alt="Kova" className="logo-img" />
        </a>
        <div className="nav-links">
          <a href="#features">{t.nav.features}</a>
          <a href="#how">{t.nav.how}</a>
          <a href="#pricing">{t.nav.pricing}</a>
          <a href="#faq">{t.nav.faq}</a>
        </div>
        <div className="nav-right">
          <div className="lang-toggle">
            <button className={lang === "es" ? "on" : ""} onClick={() => setLang("es")}>ES</button>
            <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <a href="https://app.heykova.io/login" className="btn btn-ghost btn-sm">{t.nav.login}</a>
          <a href="https://app.heykova.io/register" className="btn btn-primary btn-sm">{t.nav.cta}</a>
        </div>
      </div>
    </nav>
  );
}

export function Hero({ t }: { t: Content }) {
  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <div {...rev(0)}><span className="eyebrow">{t.hero.eyebrow}</span></div>
          <h1 className="display" {...rev(80)} style={{ ...rev(80).style, marginTop: 26 }}>
            {t.hero.h1a} <em>{t.hero.h1em}</em>
          </h1>
          <p className="lead" {...rev(160)}>{t.hero.lead}</p>
          <div className="hero-cta" {...rev(240)}>
            <a href="https://app.heykova.io/register" className="btn btn-primary">{t.hero.cta1} <span className="arrow">→</span></a>
            <a href="#demo" className="btn btn-ghost">{t.hero.cta2}</a>
          </div>
          <div className="hero-note" {...rev(300)}>{t.hero.note}</div>
          <div className="hero-chips" {...rev(360)}>
            {t.hero.chips.map((c, i) => (
              <span className="chip" key={i}><span className="dot" />{c}</span>
            ))}
          </div>
        </div>
        <div className="hero-media" {...rev(220)} style={{ ...rev(220).style, display: "flex", justifyContent: "center" }}>
          <HeroStage t={t} />
        </div>
      </div>
    </header>
  );
}

export function Logos({ t }: { t: Content }) {
  return (
    <section className="section-pad-sm">
      <div className="wrap center">
        <div className="eyebrow no-rule" {...rev(0)} style={{ ...rev(0).style, justifyContent: "center", marginBottom: 34 }}>{t.logos.title}</div>
        <div className="logos" {...rev(80)}>
          <span className="logo-ph">Shopify</span>
          <span style={{ width: 1, height: 28, background: "var(--line)" }} />
          <span className="logo-ph">WooCommerce</span>
        </div>
      </div>
    </section>
  );
}

type BlockData = {
  eyebrow: string;
  h: string;
  lead: string;
  points: { t: string; d: string }[];
  foot: string;
};

function FeatureBlock({ data, media, reversed, id }: { data: BlockData; media: React.ReactNode; reversed?: boolean; id?: string }) {
  return (
    <div className={"fblock" + (reversed ? " rev" : "")} id={id}>
      <div className="fblock-media" {...rev(reversed ? 0 : 120)} style={{ ...rev(reversed ? 0 : 120).style, display: "flex", justifyContent: "center" }}>
        {media}
      </div>
      <div className="fblock-text">
        <div {...rev(0)}><span className="eyebrow">{data.eyebrow}</span></div>
        <h2 className="display" {...rev(80)} style={{ ...rev(80).style, marginTop: 20 }}>{data.h}</h2>
        <p className="lead" {...rev(140)}>{data.lead}</p>
        <div className="fpoints">
          {data.points.map((p, i) => (
            <div className="fpoint" key={i} {...rev(180 + i * 70)}>
              <span className="idx">{String(i + 1).padStart(2, "0")}</span>
              <div><h4>{p.t}</h4><p>{p.d}</p></div>
            </div>
          ))}
        </div>
        <div {...rev(420)} style={{ ...rev(420).style, marginTop: 30 }}>
          <a href="#pricing" className="eyebrow no-rule" style={{ color: "var(--accent)" }}>{data.foot} →</a>
        </div>
      </div>
    </div>
  );
}

export function Voice({ t }: { t: Content }) {
  return (
    <section className="section-pad" id="features">
      <div className="wrap">
        <FeatureBlock data={t.voice} media={<PhoneCall t={t} />} reversed={false} />
      </div>
    </section>
  );
}

export function Vision({ t }: { t: Content }) {
  return (
    <section className="section-pad" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <FeatureBlock data={t.vision} media={<VisionChat t={t} />} reversed={true} />
      </div>
    </section>
  );
}

export function Verticals({ t }: { t: Content }) {
  const v = t.verts;
  return (
    <section className="section-pad" style={{ background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="section-head" {...rev(0)}>
          <span className="eyebrow">{v.eyebrow}</span>
          <h2 className="display">{v.h}</h2>
          <p className="lead">{v.lead}</p>
        </div>
        <div className="verts" style={{ marginTop: 56 }}>
          {v.items.map((it, i) => (
            <div className="vert" key={i} {...rev(i * 110)}>
              <div className="vlabel">{it.label}</div>
              <div className="vrow">
                <div className="vk">{v.before}</div>
                <div className="vt">{it.before}</div>
              </div>
              <div className="vrow">
                <div className="vk">{v.after}</div>
                <div className="vt pos">{it.after}</div>
              </div>
              <div className="vstat">
                <b>{it.stat}</b>
                <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>{it.statl}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function How({ t }: { t: Content }) {
  const h = t.how;
  return (
    <section className="section-pad" id="how">
      <div className="wrap">
        <div className="section-head" {...rev(0)} style={{ ...rev(0).style, marginBottom: 56 }}>
          <span className="eyebrow">{h.eyebrow}</span>
          <h2 className="display">{h.h}</h2>
          <p className="lead">{h.lead}</p>
        </div>
      </div>
      <div className="wrap">
        <div className="steps">
          {h.steps.map((s, i) => (
            <div className="step" key={i} {...rev(i * 120)}>
              <div className="sn">{String(i + 1).padStart(2, "0")}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Feats({ t }: { t: Content }) {
  const f = t.feats;
  return (
    <section className="section-pad" id="all-features">
      <div className="wrap">
        <div className="section-head" {...rev(0)} style={{ ...rev(0).style, marginBottom: 54 }}>
          <span className="eyebrow">{f.eyebrow}</span>
          <h2 className="display">{f.h}</h2>
          <p className="lead">{f.lead}</p>
        </div>
        <div className="fgrid">
          {f.items.map((it, i) => (
            <div className="fcell" key={i} {...rev((i % 4) * 80)}>
              <span className="fnum">{String(i + 1).padStart(2, "0")}</span>
              <h4>{it.t}</h4>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BrandSection({ t }: { t: Content }) {
  const cap =
    t.lang === "en"
      ? { e: "Your brand", h: "A widget that adapts to your brand", l: "Colors, avatar, tone, language, position — every detail bends to your store, not the other way around.", a: ["Welcome message", "Product card with image", "Cart panel", "Input bar"] }
      : { e: "Tu marca", h: "Un widget que se adapta a tu marca", l: "Colores, avatar, tono, idioma, posición — cada detalle se pliega a tu tienda, no al revés.", a: ["Mensaje de bienvenida", "Tarjeta de producto con imagen", "Panel de carrito", "Barra de input"] };
  return (
    <section className="section-pad" style={{ background: "var(--paper-2)" }}>
      <div className="wrap fblock">
        <div className="fblock-text">
          <div {...rev(0)}><span className="eyebrow">{cap.e}</span></div>
          <h2 className="display" {...rev(80)} style={{ ...rev(80).style, marginTop: 20 }}>{cap.h}</h2>
          <p className="lead" {...rev(140)}>{cap.l}</p>
          <div className="fpoints">
            {cap.a.map((p, i) => (
              <div className="fpoint" key={i} {...rev(180 + i * 70)}>
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <div><h4 style={{ marginBottom: 0 }}>{p}</h4></div>
              </div>
            ))}
          </div>
        </div>
        <div className="fblock-media" {...rev(160)} style={{ ...rev(160).style, display: "flex", justifyContent: "center" }}>
          <BrandWidget t={t} />
        </div>
      </div>
    </section>
  );
}

export function Comparison({ t }: { t: Content }) {
  const c = t.cmp;
  const cell = (val: string) => {
    if (val === "y") return <span className="yes">✓</span>;
    if (val === "n") return <span className="no">—</span>;
    return <span>{val}</span>;
  };
  return (
    <section className="section-pad">
      <div className="wrap">
        <div className="section-head" {...rev(0)} style={{ ...rev(0).style, marginBottom: 48 }}>
          <span className="eyebrow">{c.eyebrow}</span>
          <h2 className="display">{c.h}</h2>
          <p className="lead">{c.lead}</p>
        </div>
        <div {...rev(80)} style={{ ...rev(80).style, overflowX: "auto" }}>
          <table className="cmp">
            <thead>
              <tr>
                {c.cols.map((col, i) => (
                  <th key={i} className={i === 1 ? "kova col-kova" : ""}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((val, ci) => (
                    <td key={ci} className={ci === 1 ? "col-kova" : ""}>{cell(val)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function Stats({ t }: { t: Content }) {
  const s = t.stats;
  return (
    <section className="section-pad" style={{ background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="section-head mx-auto center" {...rev(0)} style={{ ...rev(0).style, marginBottom: 50 }}>
          <div style={{ display: "flex", justifyContent: "center" }}><span className="eyebrow">{s.eyebrow}</span></div>
          <h2 className="display" style={{ margin: "22px auto 0" }}>{s.h}</h2>
          <p className="lead mx-auto" style={{ marginTop: 24 }}>{s.lead}</p>
        </div>
        <div className="stats" {...rev(80)}>
          {s.items.map((it, i) => (
            <div className="stat" key={i}><b>{it.b}</b><span>{it.s}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Value({ t }: { t: Content }) {
  const v = t.value;
  return (
    <section className="section-pad">
      <div className="wrap">
        <div className="section-head" {...rev(0)} style={{ ...rev(0).style, marginBottom: 50 }}>
          <span className="eyebrow">{v.eyebrow}</span>
          <h2 className="display">{v.h}</h2>
          <p className="lead">{v.lead}</p>
        </div>
        <div className="value">
          <div className="vrows" {...rev(60)}>
            {v.rows.map((r, i) => (
              <div className="vsline" key={i}>
                <div className="vsl">{r.l}<small>{r.s}</small></div>
                <div className="vsp">{r.p}</div>
              </div>
            ))}
          </div>
          <div className="vtotal" {...rev(140)}>
            <div className="vtk">{v.totalk}</div>
            <div className="vtbig">{v.total}<span style={{ fontSize: 22, opacity: 0.7 }}>{v.totalper}</span></div>
            <div className="vtsub">{v.foot}</div>
            <div className="vtinv">
              <div className="vtk">{v.invk}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 30, marginTop: 6 }}>{v.inv}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pricing({ t }: { t: Content }) {
  const p = t.pricing;
  const [annual, setAnnual] = React.useState(false);
  return (
    <section className="section-pad" id="pricing" style={{ background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="section-head mx-auto center" {...rev(0)} style={{ ...rev(0).style, marginBottom: 8 }}>
          <div style={{ display: "flex", justifyContent: "center" }}><span className="eyebrow">{p.eyebrow}</span></div>
          <h2 className="display" style={{ margin: "22px auto 0", maxWidth: "16ch" }}>{p.h}</h2>
          <p className="lead mx-auto" style={{ marginTop: 24 }}>{p.lead}</p>
        </div>
        <div className="center" {...rev(60)} style={{ ...rev(60).style, marginTop: 30 }}>
          <div className="bill-toggle">
            <span style={{ color: annual ? "var(--ink-soft)" : "var(--ink)" }}>{p.monthly}</span>
            <button className={"switch" + (annual ? " on" : "")} onClick={() => setAnnual((a) => !a)} aria-label="billing"><i /></button>
            <span style={{ color: annual ? "var(--ink)" : "var(--ink-soft)" }}>{p.annual}</span>
            <span className="save-pill">{p.save}</span>
          </div>
        </div>
        <div className="plans">
          {p.plans.map((pl, i) => {
            const now = annual && pl.now !== "" ? "$" + Math.round(parseInt(pl.now.replace("$", "")) * 0.8) : pl.now;
            return (
              <div className={"plan" + (pl.feat ? " feat" : "")} key={i} {...rev(i * 100)}>
                {pl.feat && <div className="pop">{p.popular}</div>}
                <div className="pname">{pl.name}</div>
                <div className="price">
                  {pl.was && <span className="was">{pl.was}</span>}
                  <span className="now">{now}</span>
                  <span className="per">{p.per}</span>
                </div>
                <ul className="plist">
                  {pl.feats.map((ft, j) => {
                    const [label, tag] = ft.split("|");
                    return <li key={j}>{label}{tag && <span className="new">{tag}</span>}</li>;
                  })}
                </ul>
                <a href="https://app.heykova.io/register" className={"btn " + (pl.feat ? "btn-ghost" : "btn-primary")} style={pl.feat ? { borderColor: "var(--accent-ink)", color: "var(--accent-ink)" } : undefined}>{pl.cta}</a>
              </div>
            );
          })}
        </div>
        <p className="center" {...rev(0)} style={{ ...rev(0).style, marginTop: 30, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-soft)", letterSpacing: ".04em" }}>{p.foot}</p>
      </div>
    </section>
  );
}

export function Guarantee({ t }: { t: Content }) {
  const g = t.guarantee;
  return (
    <section className="section-pad-sm">
      <div className="wrap-narrow">
        <div className="guarantee" {...rev(0)}>
          <div className="guar-badge">30</div>
          <div style={{ display: "flex", justifyContent: "center" }}><span className="eyebrow">{g.eyebrow}</span></div>
          <h3 className="display" style={{ fontSize: "clamp(30px,4vw,46px)", margin: "18px 0 18px" }}>{g.h}</h3>
          <p className="lead mx-auto" style={{ textAlign: "center" }}>{g.lead}</p>
        </div>
      </div>
    </section>
  );
}

export function FAQ({ t }: { t: Content }) {
  const f = t.faq;
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section-pad" id="faq">
      <div className="wrap-narrow">
        <div className="section-head" {...rev(0)} style={{ ...rev(0).style, marginBottom: 40 }}>
          <span className="eyebrow">{f.eyebrow}</span>
          <h2 className="display">{f.h}</h2>
        </div>
        <div {...rev(60)}>
          {f.items.map((it, i) => (
            <div className={"faq-item" + (open === i ? " open" : "")} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                {it.q}<span className="pm">+</span>
              </button>
              <div className="faq-a" style={{ maxHeight: open === i ? 320 : 0 }}>
                <div className="faq-a-inner">{it.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BigCTA({ t }: { t: Content }) {
  const b = t.bigcta;
  return (
    <section className="section-pad" id="demo">
      <div className="wrap-narrow bigcta">
        <div {...rev(0)} style={{ ...rev(0).style, display: "flex", justifyContent: "center" }}><span className="eyebrow">{b.eyebrow}</span></div>
        <h2 className="display" {...rev(80)} style={{ ...rev(80).style, marginTop: 26 }}>{b.h}</h2>
        <p className="lead" {...rev(140)}>{b.lead}</p>
        <div {...rev(200)} style={{ ...rev(200).style, marginTop: 38 }}>
          <a href="https://app.heykova.io/register" className="btn btn-primary" style={{ padding: "18px 36px", fontSize: 16 }}>{b.cta} <span className="arrow">→</span></a>
        </div>
        <div className="hero-note" {...rev(260)} style={{ ...rev(260).style, marginTop: 22 }}>{b.note}</div>
      </div>
    </section>
  );
}

export function Footer({ t }: { t: Content }) {
  const f = t.footer;
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="nav-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/kova-logo.svg" alt="Kova" className="logo-img" style={{ height: 34 }} />
            </div>
            <p style={{ color: "var(--ink-soft)", fontSize: 14, maxWidth: "32ch", marginTop: 14 }}>{f.tag}</p>
          </div>
          <div><h5>{f.colP}</h5><ul>{f.product.map((x, i) => <li key={i}><a href="#">{x}</a></li>)}</ul></div>
          <div><h5>{f.colR}</h5><ul>{f.resources.map((x, i) => <li key={i}><a href="#">{x}</a></li>)}</ul></div>
          <div><h5>{f.colL}</h5><ul>{f.legal.map((x, i) => <li key={i}><a href="#">{x}</a></li>)}</ul></div>
        </div>
        <div className="footer-bottom">
          <span>{f.rights}</span>
          <span>hello@heykova.io</span>
        </div>
      </div>
    </footer>
  );
}
