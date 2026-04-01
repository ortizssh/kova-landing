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
  title: "Kova — Vendedor IA para Shopify y WooCommerce",
  description:
    "Asistente de ventas con IA para tu tienda online. Chat inteligente, llamadas con voz IA y carrito integrado. Hasta 30% de conversión. Prueba 7 días gratis.",
  alternates: {
    canonical: "https://heykova.io",
    languages: {
      "es": "https://heykova.io",
      "en": "https://heykova.io",
      "x-default": "https://heykova.io",
    },
  },
  openGraph: {
    title: "Kova — Vendedor IA para Shopify y WooCommerce",
    description:
      "Asistente de ventas con IA para tu tienda online. Chat inteligente, llamadas con voz IA y carrito integrado. Hasta 30% de conversión. Prueba 7 días gratis.",
    url: "https://heykova.io",
    siteName: "Kova",
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: "https://heykova.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kova — Vendedor IA para Shopify y WooCommerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kova — Vendedor IA para Shopify y WooCommerce",
    description:
      "Asistente de ventas con IA para tu tienda online. Chat inteligente, llamadas con voz IA y carrito integrado. Hasta 30% de conversión. Prueba 7 días gratis.",
    images: ["https://heykova.io/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kova",
  url: "https://heykova.io",
  logo: "https://heykova.io/kova-logo.svg",
  description:
    "AI sales assistant for Shopify and WooCommerce e-commerce stores",
  foundingDate: "2024",
  sameAs: ["https://instagram.com/kova.agent"],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Kova",
  description:
    "AI-powered sales assistant that integrates with Shopify and WooCommerce. Features smart chat, AI voice calls, semantic product search, and cart management.",
  url: "https://heykova.io",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "99",
      priceCurrency: "USD",
      billingIncrement: "P1M",
    },
    {
      "@type": "Offer",
      name: "Professional",
      price: "299",
      priceCurrency: "USD",
      billingIncrement: "P1M",
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      price: "599",
      priceCurrency: "USD",
      billingIncrement: "P1M",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es Kova?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kova es un asistente de compras con inteligencia artificial que se instala en tu tienda online (Shopify o WooCommerce). Usa búsqueda semántica para entender lo que tus clientes necesitan, recomienda productos relevantes y gestiona el carrito — todo dentro de un chat conversacional.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se instala?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En Shopify: instalación en 1 clic desde el Theme Editor (App Embeds). En WooCommerce: instala el plugin y completa el setup wizard. En ambos casos, el catálogo se sincroniza automáticamente. Todo el proceso toma menos de 5 minutos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se miden las conversiones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kova trackea cada recomendación hecha por el AI. Cuando un cliente compra un producto recomendado dentro de una ventana de atribución, se registra como conversión. El dashboard muestra métricas reales: recomendaciones, conversiones, revenue atribuido, tasa de conversión y top productos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo personalizar la apariencia del widget?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, completamente. Colores, avatar, mensajes de bienvenida, subtítulos, preguntas sugeridas, badge promocional, posición en pantalla, tamaño, tema claro/oscuro — todo configurable desde el panel de administración sin tocar código.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué idiomas funciona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El asistente soporta múltiples idiomas. El idioma principal se configura por tienda (español, inglés, etc.) y el AI responde en el idioma del cliente automáticamente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa con mis datos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tus datos se almacenan de forma segura en Supabase (PostgreSQL) con aislamiento por tenant y row-level security. Las conversaciones, productos y configuraciones están protegidas y nunca se comparten entre tiendas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito conocimientos técnicos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La instalación, configuración del widget, carga de knowledge base y gestión de planes se hace completamente desde la interfaz visual. No se requiere código.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo probar antes de pagar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Todos los planes incluyen 7 días de prueba con acceso completo a todas las funciones.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si el AI da una recomendación equivocada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kova se basa en tu catálogo real y datos de productos para recomendar. Si algo no es correcto, puedes ajustar las instrucciones del agente desde el panel de admin. También puedes activar el modo supervisado donde un humano revisa las respuestas antes de enviarlas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa cuando llego al límite de mensajes de mi plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Te notificamos cuando estás cerca del límite. Puedes subir de plan en cualquier momento sin perder configuración. Los mensajes que excedan el límite quedan en cola hasta que actualices o inicie el nuevo período.",
      },
    },
  ],
};

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Kova",
  description:
    "AI-powered sales assistant for Shopify and WooCommerce stores. Features smart chat, AI voice calls, semantic product search, and cart management.",
  url: "https://heykova.io",
  review: [
    {
      "@type": "Review",
      reviewBody:
        "Integrar al Agente Kova ha sido uno de los mayores aciertos del año. Es un servicio altamente personalizable e intuitivo, nos ha dado altos índices de conversión y ha sido entrenado de forma óptima en poco tiempo.",
      author: {
        "@type": "Person",
        name: "Belén Escobar",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      reviewBody:
        "Desde que implementamos Kova, nuestros clientes reciben atención inmediata las 24 horas. La tasa de respuesta mejoró drásticamente y las ventas nocturnas se duplicaron.",
      author: {
        "@type": "Person",
        name: "Miguel Álvarez",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      reviewBody:
        "La instalación fue increíblemente fácil. En 5 minutos ya teníamos el chat funcionando.",
      author: {
        "@type": "Person",
        name: "Ana P.",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
    bestRating: "5",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
        />
      </head>
      <body className="font-sans antialiased"><Providers>{children}</Providers></body>
    </html>
  );
}
