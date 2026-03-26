import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "Kova — Asistente de Ventas con IA para Shopify y WooCommerce",
  description:
    "Kova es un asistente de compras con inteligencia artificial que se integra en tu tienda Shopify o WooCommerce. Búsqueda semántica, gestión de carrito y analytics de conversión.",
  openGraph: {
    title: "Kova — Asistente de Ventas con IA para Shopify y WooCommerce",
    description:
      "Kova es un asistente de compras con inteligencia artificial que se integra en tu tienda Shopify o WooCommerce. Búsqueda semántica, gestión de carrito y analytics de conversión.",
    url: "https://heykova.io",
    siteName: "Kova",
    type: "website",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kova — Asistente de Ventas con IA para Shopify y WooCommerce",
    description:
      "Asistente de compras con IA para Shopify y WooCommerce. Búsqueda semántica, gestión de carrito y analytics de conversión.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={plusJakarta.variable}>
      <head>
        <script defer src="https://dustkey-os.vercel.app/t.js" data-domain="heykova.io"></script>
      </head>
      <body className="font-sans antialiased"><Providers>{children}</Providers></body>
    </html>
  );
}
