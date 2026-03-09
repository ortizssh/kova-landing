import KovaLogo from "./KovaLogo";

const columns = [
  {
    title: "Producto",
    links: [
      { label: "Características", href: "#features" },
      { label: "Precios", href: "#pricing" },
      { label: "Demo", href: "#video" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Documentación", href: "#" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos de servicio", href: "#" },
      { label: "Política de privacidad", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo column */}
          <div>
            <KovaLogo />
            <p className="mt-4 text-sm text-text-muted leading-relaxed">
              Asistente de ventas con IA para e-commerce.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-text-primary mb-4 text-sm">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-text-muted">
            &copy; 2026 Kova. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
