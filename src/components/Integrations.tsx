"use client";

import AnimatedSection from "./AnimatedSection";

const mainPlatforms = [
  {
    name: "Shopify",
    color: "#95BF47",
    description: "Instalación en 1 clic via Theme Extension",
  },
  {
    name: "WooCommerce",
    color: "#96588A",
    description: "Plugin WordPress dedicado. Setup wizard incluido.",
  },
];

/* Inline SVG logos for secondary integrations */
function OpenAILogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="#412991">
      <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0011.708.414 6.073 6.073 0 005.383 2.07a6.04 6.04 0 00-4.027 2.918 6.063 6.063 0 00.745 7.097 5.98 5.98 0 00.516 4.911 6.047 6.047 0 006.51 2.9A6.057 6.057 0 0012.292 23.586a6.073 6.073 0 006.325-1.656 6.043 6.043 0 004.027-2.918 6.064 6.064 0 00-.745-7.097 5.98 5.98 0 00.383-2.094zM12.292 21.94a4.477 4.477 0 01-2.876-1.04l.143-.082 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.496 4.495zM3.648 17.886a4.467 4.467 0 01-.535-3.014l.143.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.549a4.5 4.5 0 01-6.092-1.663zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071.005L3.93 14.016a4.504 4.504 0 01-1.59-6.12zM19.062 12.4l-5.817-3.373 2.02-1.164a.076.076 0 01.071-.006l4.89 2.787a4.494 4.494 0 01-.69 8.105v-5.676a.79.79 0 00-.393-.681l.002.002-.083.006zm2.01-3.023l-.141-.085-4.78-2.764a.776.776 0 00-.785 0L9.524 9.9V7.568a.074.074 0 01.033-.063l4.888-2.783a4.5 4.5 0 016.627 4.655zM8.392 12.64l-2.02-1.164a.08.08 0 01-.038-.057V5.836a4.499 4.499 0 017.375-3.453l-.142.08L8.783 5.23a.795.795 0 00-.392.68l.001 6.73zm1.096-2.365L12 8.658l2.51 1.453v2.904L12 14.467l-2.512-1.452v-2.74z" />
    </svg>
  );
}

function SupabaseLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 109 113" fill="none">
      <path
        d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874L63.708 110.284z"
        fill="url(#supa-a)"
      />
      <path
        d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874L63.708 110.284z"
        fill="url(#supa-b)"
        fillOpacity=".2"
      />
      <path
        d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.071z"
        fill="#3ECF8E"
      />
      <defs>
        <linearGradient id="supa-a" x1="53.974" y1="54.974" x2="94.163" y2="71.829" gradientUnits="userSpaceOnUse">
          <stop stopColor="#249361" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
        <linearGradient id="supa-b" x1="36.156" y1="30.578" x2="54.484" y2="65.081" gradientUnits="userSpaceOnUse">
          <stop />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function StripeLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="#635BFF">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-7.076-2.19l-.926 5.555C4.865 22.86 7.739 24 11.29 24c2.603 0 4.735-.635 6.234-1.866 1.638-1.34 2.476-3.33 2.476-5.905-.005-4.174-2.507-5.81-6.024-7.079z" />
    </svg>
  );
}

function RetellLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#1A1A2E" />
      <path
        d="M7 8.5h2.5a2.5 2.5 0 010 5H7v-5z"
        stroke="#fff"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="15" cy="11" r="2.5" stroke="#6b5afc" strokeWidth="1.5" fill="none" />
      <path d="M15 13.5v3" stroke="#6b5afc" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 13.5v3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const techLogos = [
  { name: "OpenAI", Logo: OpenAILogo },
  { name: "Supabase", Logo: SupabaseLogo },
  { name: "Stripe", Logo: StripeLogo },
  { name: "Retell AI", Logo: RetellLogo },
];

export default function Integrations() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary mb-4">
            Integraciones
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Instalación en menos de 5 minutos. Sin código.
          </p>
        </AnimatedSection>

        {/* Main platforms */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {mainPlatforms.map((p, i) => (
            <AnimatedSection key={p.name} delay={i * 0.15}>
              <div className="bg-bg-card rounded-[--radius-lg] p-8 border border-border shadow-sm text-center">
                <svg
                  width="160"
                  height="44"
                  viewBox="0 0 160 44"
                  className="mx-auto mb-4"
                >
                  <text
                    x="50%"
                    y="32"
                    textAnchor="middle"
                    fontFamily="Plus Jakarta Sans, sans-serif"
                    fontWeight="700"
                    fontSize="28"
                    fill={p.color}
                  >
                    {p.name}
                  </text>
                </svg>
                <p className="text-text-secondary text-sm">{p.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Tech logos */}
        <AnimatedSection delay={0.3}>
          <p className="text-center text-xs text-text-muted mb-4 font-medium uppercase tracking-wider">
            Powered by
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-12">
            {techLogos.map((t) => (
              <div
                key={t.name}
                className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
              >
                <t.Logo />
                <span className="text-[11px] font-medium text-text-muted">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
