"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Locale = "es" | "en";

const translations = {
  // Navbar
  "nav.features": { es: "Características", en: "Features" },
  "nav.howItWorks": { es: "Cómo funciona", en: "How it works" },
  "nav.pricing": { es: "Precios", en: "Pricing" },
  "nav.faq": { es: "FAQ", en: "FAQ" },
  "nav.login": { es: "Iniciar sesión", en: "Sign in" },
  "nav.cta": { es: "Comenzar ahora", en: "Get started" },

  // Hero AEO definition
  "hero.definition": {
    es: "Kova es un vendedor con inteligencia artificial para tiendas de hogar premium en Shopify y WooCommerce. Asesora compras de alto ticket —muebles de diseño, deco, iluminación y outdoor— por chat y voz IA, recomienda desde tu catálogo y llama por teléfono para cerrar, 24/7.",
    en: "Kova is an AI-powered salesperson for premium home stores on Shopify and WooCommerce. It advises high-ticket purchases —design furniture, decor, lighting and outdoor— via chat and AI voice, recommends from your catalog and calls to close, 24/7.",
  },

  // Hero
  "hero.badge": { es: "Para tiendas de hogar premium · alto ticket", en: "For premium home stores · high ticket" },
  "hero.title": { es: "Tu mejor vendedor de showroom,", en: "Your best showroom salesperson," },
  "hero.titleHighlight": { es: "ahora 24/7", en: "now 24/7" },
  "hero.subtitle": { es: "El comprador de alto ticket no decide por impulso: tiene dudas de medidas, materiales y despacho. Si nadie responde al instante, se va a “pensarlo” y no vuelve. Kova lo asesora por chat, recomienda desde tu catálogo y", en: "High-ticket buyers don't decide on impulse: they have questions about sizes, materials and delivery. If no one answers right away, they leave to “think about it” and don't come back. Kova advises them via chat, recommends from your catalog and" },
  "hero.subtitleBold": { es: "lo llama por teléfono para cerrar la venta.", en: "calls them on the phone to close the sale." },
  "hero.pill1": { es: "Llamadas con voz IA", en: "AI voice calls" },
  "hero.pill2": { es: "Carrito integrado", en: "Integrated cart" },
  "hero.pill3": { es: "Emails con recomendaciones", en: "AI email recommendations" },
  "hero.pill4": { es: "Cotizaciones automáticas", en: "Automatic quotes" },
  "hero.pill5": { es: "Agenda reuniones", en: "Books meetings" },
  "hero.pill6": { es: "Recomienda por foto", en: "Recommends from a photo" },
  "hero.cta": { es: "Activar mi vendedor de showroom", en: "Activate my showroom salesperson" },
  "hero.ctaSecondary": { es: "Ver demo", en: "Watch demo" },
  "hero.subtext": { es: "Setup en 5 minutos · 7 días de prueba · Cancela cuando quieras", en: "5-minute setup · 7-day trial · Cancel anytime" },
  "hero.platforms": { es: "Se integra con las principales plataformas de e-commerce", en: "Integrates with the leading e-commerce platforms" },

  // Hero Chat Widget
  "chat.online": { es: "En línea", en: "Online" },
  "chat.welcome": { es: "¡Hola! 👋 Soy tu asistente de compras. ¿En qué puedo ayudarte?", en: "Hi! 👋 I'm your shopping assistant. How can I help you?" },
  "chat.userMsg": { es: "Busco un sofá para un living pequeño", en: "I'm looking for a sofa for a small living room" },
  "chat.productIntro": { es: "¡Tengo la opción ideal para tu espacio! 🛋️", en: "I have the perfect fit for your space! 🛋️" },
  "chat.productName": { es: "Sofá Modular Roble 3 Cuerpos", en: "Oak Modular Sofa, 3-Seater" },
  "chat.addToCart": { es: "Agregar al carrito", en: "Add to cart" },
  "chat.callSuggestion": { es: "¿Quieres que te explique medidas y despacho por teléfono? 📞", en: "Want me to explain measurements and delivery over the phone? 📞" },
  "chat.requestCall": { es: "Solicitar llamada", en: "Request call" },
  "chat.placeholder": { es: "Escribe un mensaje...", en: "Type a message..." },

  // Metrics
  "metrics.badge": { es: "Métricas reales — actualizadas en tiempo real", en: "Real metrics — updated in real time" },
  "metrics.aiMessages": { es: "Mensajes AI enviados", en: "AI messages sent" },
  "metrics.recommendations": { es: "Recomendaciones de producto", en: "Product recommendations" },
  "metrics.conversionRate": { es: "Tasa de conversión", en: "Conversion rate" },
  "metrics.timeToSale": { es: "De recomendación a venta", en: "From recommendation to sale" },

  // How it Works
  "how.title": { es: "Cómo funciona", en: "How it works" },
  "how.subtitle": { es: "Tres pasos para empezar a vender más con inteligencia artificial", en: "Three steps to start selling more with artificial intelligence" },
  "how.step1.title": { es: "Conecta tu tienda", en: "Connect your store" },
  "how.step1.desc": { es: "Instala Kova en tu Shopify o WooCommerce en minutos. Sincronización automática de catálogo con embeddings semánticos.", en: "Install Kova on your Shopify or WooCommerce in minutes. Automatic catalog sync with semantic embeddings." },
  "how.step2.title": { es: "Personaliza tu asistente", en: "Customize your assistant" },
  "how.step2.desc": { es: "Configura colores, mensajes, tono de voz, idioma y comportamiento del AI. Se adapta a la identidad de tu marca.", en: "Configure colors, messages, tone of voice, language and AI behavior. Adapts to your brand identity." },
  "how.step3.title": { es: "Vende más con IA", en: "Sell more with AI" },
  "how.step3.desc": { es: "El asistente atiende a tus clientes 24/7: recomienda productos, gestiona el carrito y genera conversiones medibles.", en: "The assistant serves your customers 24/7: recommends products, manages the cart, and generates measurable conversions." },

  // Video Demo
  "video.title": { es: "Mira a Kova en acción", en: "See Kova in action" },
  "video.subtitle": { es: "Descubre cómo el asistente interactúa con tus clientes en tiempo real", en: "Discover how the assistant interacts with your customers in real time" },
  "video.cta": { es: "Quiero esto en mi tienda", en: "I want this in my store" },

  // Features
  "features.title": { es: "Todo incluido para que vendas más", en: "Everything included to sell more" },
  "features.subtitle": { es: "Cada funcionalidad está diseñada para un solo objetivo: convertir visitantes en compradores", en: "Every feature is designed for one goal: converting visitors into buyers" },
  "features.f1.title": { es: "Tus clientes encuentran lo que buscan", en: "Your customers find what they need" },
  "features.f1.desc": { es: 'Tu cliente escribe "un sofá que quepa en un living pequeño" y Kova entiende. No keywords, no filtros complicados. Resultado: tus productos se encuentran, no se pierden entre categorías.', en: 'Your customer types "a sofa that fits a small living room" and Kova understands. No keywords, no complicated filters. Result: your products are found, not lost in categories.' },
  "features.f2.title": { es: "El carrito se llena desde el chat", en: "The cart fills up from the chat" },
  "features.f2.desc": { es: "El cliente pregunta, Kova recomienda y agrega al carrito en un solo paso. Sin fricción, sin salir de la conversación. Menos clics = más compras completadas.", en: "The customer asks, Kova recommends and adds to cart in one step. No friction, no leaving the conversation. Fewer clicks = more completed purchases." },
  "features.f3.title": { es: "Se ve como tu marca, no como un bot", en: "Looks like your brand, not a bot" },
  "features.f3.desc": { es: "Colores, avatar, tono de voz, idioma — todo se adapta a tu tienda. Tus clientes sienten que hablan con tu marca, no con un chatbot genérico.", en: "Colors, avatar, tone of voice, language — everything adapts to your store. Your customers feel they're talking to your brand, not a generic chatbot." },
  "features.f4.title": { es: "Sabes exactamente cuánto genera", en: "Know exactly how much it generates" },
  "features.f4.desc": { es: "Revenue atribuido al AI, tasa de conversión, productos top. No adivinas — ves el impacto real en tu dashboard con números concretos.", en: "AI-attributed revenue, conversion rate, top products. No guessing — see the real impact in your dashboard with concrete numbers." },
  "features.f5.title": { es: "Llamadas reales cuando el chat no basta", en: "Real calls when chat isn't enough" },
  "features.f5.desc": { es: "Si el cliente prefiere hablar, Kova lo llama por teléfono con voz IA — con todo el contexto de la conversación. Sin repetir, sin fricción.", en: "If the customer prefers talking, Kova calls them with AI voice — with full conversation context. No repeating, no friction." },
  "features.f6.title": { es: "Respuestas precisas sobre TU marca", en: "Precise answers about YOUR brand" },
  "features.f6.desc": { es: "Sube documentos, políticas, guías de talla. Kova los usa para dar respuestas exactas y alineadas con tu negocio. Cero respuestas inventadas.", en: "Upload documents, policies, size guides. Kova uses them for exact answers aligned with your business. Zero made-up responses." },
  "features.f7.title": { es: "Recomendaciones por correo, automáticas", en: "Automatic email recommendations" },
  "features.f7.desc": { es: "Kova envía sugerencias personalizadas al inbox de tu cliente —productos relacionados, restock, ofertas— con copy adaptado a su historial. Sin que muevas un dedo.", en: "Kova sends personalized suggestions to your customer's inbox — related products, restock, deals — with copy adapted to their history. Without you lifting a finger." },
  "features.f8.title": { es: "Cotizaciones generadas al instante", en: "Quotes generated instantly" },
  "features.f8.desc": { es: "Para B2B o tickets altos, Kova arma y envía la cotización dentro de la conversación. Productos, cantidades, precios y términos —lista para que tu cliente apruebe.", en: "For B2B or high tickets, Kova builds and sends the quote inside the conversation. Products, quantities, prices and terms — ready for your customer to approve." },
  "features.f9.title": { es: "Agenda reuniones automáticamente", en: "Auto-schedules meetings" },
  "features.f9.desc": { es: "Cuando un cliente quiere una llamada, demo o consulta, Kova revisa tu calendario y agenda el slot ideal —sin idas y vueltas. Confirmación y recordatorios para ambos lados, listo.", en: "When a customer wants a call, demo or consult, Kova checks your calendar and books the ideal slot — no back-and-forth. Confirmation and reminders for both sides, done." },
  // Vision / Photo recommendation banner
  "vision.badge": { es: "Visión IA", en: "AI Vision" },
  "vision.title": { es: "Tu cliente manda una foto de su espacio. Kova le arma la compra.", en: "Your customer sends a photo of their space. Kova builds the order." },
  "vision.subtitle": { es: "Sube una foto de su living, su pieza o una inspiración que vio en Instagram. Kova analiza el estilo, la paleta y las proporciones del ambiente — y recomienda las piezas de tu catálogo que de verdad combinan. Como tener un asesor de interiores 24/7.", en: "They upload a photo of their living room, bedroom, or an inspiration they saw on Instagram. Kova reads the style, palette, and proportions of the space — and recommends the pieces from your catalog that truly match. Like having an interior advisor 24/7." },
  "vision.p1.title": { es: "Foto desde la cámara o la galería", en: "Photo from camera or gallery" },
  "vision.p1.desc": { es: "El cliente toca el clip, saca una foto al momento o elige una de su galería. Sin apps, sin fricción.", en: "The customer taps the clip, snaps a photo, or picks one from their gallery. No apps, no friction." },
  "vision.p2.title": { es: "Entiende el espacio, no solo el objeto", en: "Understands the space, not just the object" },
  "vision.p2.desc": { es: "Kova lee estilo, colores y proporciones del ambiente para recomendar lo que realmente combina con ese espacio.", en: "Kova reads style, colors, and proportions of the room to recommend what truly fits that space." },
  "vision.p3.title": { es: "Recomienda desde TU catálogo", en: "Recommends from YOUR catalog" },
  "vision.p3.desc": { es: "Cruza lo que ve con tu inventario real y arma la selección con productos disponibles — no sugerencias genéricas.", en: "It cross-references what it sees with your real inventory and builds the selection from available products — not generic suggestions." },
  "vision.p4.title": { es: "De la foto al carrito", en: "From photo to cart" },
  "vision.p4.desc": { es: "Las piezas recomendadas se agregan al carrito en un toque. Ideal para muebles, deco e iluminación de alto ticket.", en: "Recommended pieces are added to the cart in one tap. Ideal for high-ticket furniture, decor, and lighting." },
  "vision.plans": { es: "Incluido en el widget de Kova, sin configuración.", en: "Included in the Kova widget, no setup needed." },
  "vision.seePlans": { es: "Ver planes →", en: "See plans →" },
  // Vision mockup labels
  "vision.mock.userMsg": { es: "¿Qué sofá combina con mi living?", en: "Which sofa matches my living room?" },
  "vision.mock.reply": { es: "Para tu estilo nórdico en tonos cálidos, te recomiendo:", en: "For your Nordic style in warm tones, I recommend:" },
  "vision.mock.p1.name": { es: "Sofá Modular Roble", en: "Oak Modular Sofa" },
  "vision.mock.p2.name": { es: "Lámpara de Pie Lino", en: "Linen Floor Lamp" },
  "vision.mock.analyzing": { es: "Analizando tu espacio…", en: "Analyzing your space…" },

  // Widget Showcase
  "widget.title": { es: "Un widget que se adapta a tu marca", en: "A widget that adapts to your brand" },
  "widget.subtitle": { es: "Se adapta a la identidad de tu marca", en: "Adapts to your brand identity" },

  // Voice Calling
  "voice.badge": { es: "Nuevo", en: "New" },
  "voice.title": { es: "Llamadas telefónicas reales con IA — con todo el contexto", en: "Real phone calls with AI — with full context" },
  "voice.subtitle": { es: "Kova no solo chatea. Tu asistente atiende y realiza llamadas telefónicas reales — no VoIP, no chat de voz — llamadas a números reales. Y lo hace con todo el historial de la conversación. Sin repetir, sin fricción.", en: "Kova doesn't just chat. Your assistant handles and makes real phone calls — not VoIP, not voice chat — calls to real numbers. With the full conversation history. No repeating, no friction." },
  "voice.p1.title": { es: "Llamadas reales entrantes y salientes", en: "Real inbound and outbound calls" },
  "voice.p1.desc": { es: "El agente de voz atiende y realiza llamadas a números telefónicos reales. Tus clientes llaman al número de tu tienda y Kova contesta — como un agente humano.", en: "The voice agent handles and makes calls to real phone numbers. Your customers call your store number and Kova answers — like a human agent." },
  "voice.p2.title": { es: "Continuidad de contexto total", en: "Full context continuity" },
  "voice.p2.desc": { es: "Si un cliente chateó primero y luego llama, el agente de voz sabe exactamente qué productos vio, qué preguntó y qué tiene en el carrito.", en: "If a customer chatted first then calls, the voice agent knows exactly what products they viewed, what they asked, and what's in their cart." },
  "voice.p3.title": { es: "Misma inteligencia, diferente canal", en: "Same intelligence, different channel" },
  "voice.p3.desc": { es: "El mismo knowledge base, catálogo y personalidad de tu marca — ahora también por teléfono. Powered by Retell AI.", en: "The same knowledge base, catalog, and brand personality — now also by phone. Powered by Retell AI." },
  "voice.p4.title": { es: "Analytics unificados", en: "Unified analytics" },
  "voice.p4.desc": { es: "Las interacciones de voz se registran junto a las del chat. Un solo dashboard para medir todo el impacto de tu asistente.", en: "Voice interactions are logged alongside chat. One dashboard to measure your assistant's full impact." },
  "voice.plans": { es: "Disponible en planes Professional y Enterprise.", en: "Available on Professional and Enterprise plans." },
  "voice.seePlans": { es: "Ver planes →", en: "See plans →" },

  // Integrations
  "integrations.title": { es: "Integraciones", en: "Integrations" },
  "integrations.subtitle": { es: "Instalación en menos de 5 minutos. Sin código.", en: "Installation in under 5 minutes. No code." },
  "integrations.shopify": { es: "Instalación en 1 clic via Theme Extension", en: "1-click install via Theme Extension" },
  "integrations.woo": { es: "Plugin WordPress dedicado. Setup wizard incluido.", en: "Dedicated WordPress plugin. Setup wizard included." },

  // Value Stack
  "valueStack.title": { es: "Como tener un equipo de showroom completo", en: "Like having a full showroom team" },
  "valueStack.subtitle": { es: "Un asesor de ventas, un experto en producto y un coordinador de despacho — armarlo por separado costaría esto cada mes", en: "A sales advisor, a product expert and a delivery coordinator — building it separately would cost this every month" },
  "valueStack.item1": { es: "Vendedor AI disponible 24/7", en: "AI salesperson available 24/7" },
  "valueStack.item1.note": { es: "vs contratar una persona", en: "vs hiring a person" },
  "valueStack.item2": { es: "Búsqueda inteligente de productos", en: "Smart product search" },
  "valueStack.item2.note": { es: "vs implementación custom", en: "vs custom implementation" },
  "valueStack.item3": { es: "Analytics de conversión con atribución", en: "Conversion analytics with attribution" },
  "valueStack.item3.note": { es: "vs herramientas separadas", en: "vs separate tools" },
  "valueStack.item4": { es: "Llamadas telefónicas con voz IA", en: "AI voice phone calls" },
  "valueStack.item4.note": { es: "vs call center", en: "vs call center" },
  "valueStack.item5": { es: "Knowledge base + personalización total", en: "Knowledge base + full customization" },
  "valueStack.item5.note": { es: "vs desarrollo a medida", en: "vs custom development" },
  "valueStack.totalValue": { es: "de valor total", en: "total value" },
  "valueStack.yourInvestment": { es: "Tu inversión:", en: "Your investment:" },
  "valueStack.from": { es: "desde $99", en: "from $99" },
  "valueStack.savings": { es: "de lo que costaría hacerlo por tu cuenta", en: "of what it would cost to do it yourself" },
  "valueStack.cta": { es: "Quiero vender más con IA", en: "I want to sell more with AI" },

  // Pricing
  "pricing.badge": { es: "Precio de lanzamiento — cupos limitados", en: "Launch price — limited spots" },
  "pricing.title": { es: "Recupera una venta de alto ticket y Kova ya se pagó", en: "Recover one high-ticket sale and Kova already paid for itself" },
  "pricing.subtitle": { es: "Cuando tu ticket promedio es de cientos de miles, una sola venta asistida cubre tu plan por meses", en: "When your average order is in the hundreds of thousands, a single assisted sale covers your plan for months" },
  "pricing.monthly": { es: "Mensual", en: "Monthly" },
  "pricing.annual": { es: "Anual", en: "Annual" },
  "pricing.saveAnnual": { es: "Facturado anualmente", en: "Billed annually" },
  "pricing.save": { es: "Ahorras", en: "Save" },
  "pricing.year": { es: "año", en: "year" },
  "pricing.disclaimer": { es: "Todos los planes incluyen 7 días de prueba. Precios en USD.", en: "All plans include a 7-day trial. Prices in USD." },
  "pricing.starter.cta": { es: "Comenzar ahora", en: "Get started" },
  "pricing.pro.cta": { es: "Elegir Professional", en: "Choose Professional" },
  "pricing.enterprise.cta": { es: "Contactar ventas", en: "Contact sales" },

  // Guarantee
  "guarantee.title": { es: "Garantía de 30 días — Sin riesgo", en: "30-day guarantee — Risk free" },
  "guarantee.desc": { es: "Si en los primeros 30 días no ves un impacto real en tus conversiones, te devolvemos el 100% de tu dinero. Sin preguntas, sin letra chica.", en: "If in the first 30 days you don't see real impact on your conversions, we refund 100% of your money. No questions, no fine print." },
  "guarantee.note": { es: "Creemos tanto en Kova que asumimos todo el riesgo por ti.", en: "We believe in Kova so much that we take all the risk for you." },

  // Early Access / Social Proof
  "earlyAccess.badge": { es: "Resultados reales", en: "Real results" },
  "earlyAccess.title": { es: "Las primeras tiendas ya están vendiendo más", en: "The first stores are already selling more" },
  "earlyAccess.subtitle": { es: "10% de tasa de conversión promedio. Más de 2,000 recomendaciones que terminaron en compra. Menos de 20 minutos de recomendación a checkout.", en: "10% average conversion rate. Over 2,000 recommendations that led to purchase. Under 20 minutes from recommendation to checkout." },
  "earlyAccess.conversion": { es: "Conversión", en: "Conversion" },
  "earlyAccess.assistedSales": { es: "Ventas asistidas", en: "Assisted sales" },
  "earlyAccess.toPurchase": { es: "A compra", en: "To purchase" },
  "earlyAccess.cta": { es: "Quiero estos resultados", en: "I want these results" },

  // FAQ
  "faq.title": { es: "Preguntas frecuentes", en: "Frequently asked questions" },
  "faq.subtitle": { es: "Todo lo que necesitas saber sobre Kova", en: "Everything you need to know about Kova" },
  "faq.q1": { es: "¿Qué es Kova?", en: "What is Kova?" },
  "faq.a1": { es: "Kova es un asistente de compras con inteligencia artificial que se instala en tu tienda online (Shopify o WooCommerce). Usa búsqueda semántica para entender lo que tus clientes necesitan, recomienda productos relevantes y gestiona el carrito — todo dentro de un chat conversacional.", en: "Kova is an AI-powered shopping assistant that installs on your online store (Shopify or WooCommerce). It uses semantic search to understand what your customers need, recommends relevant products, and manages the cart — all within a conversational chat." },
  "faq.q2": { es: "¿Cómo se instala?", en: "How do I install it?" },
  "faq.a2": { es: "En Shopify: instalación en 1 clic desde el Theme Editor (App Embeds). En WooCommerce: instala el plugin y completa el setup wizard. En ambos casos, el catálogo se sincroniza automáticamente. Todo el proceso toma menos de 5 minutos.", en: "On Shopify: 1-click install from the Theme Editor (App Embeds). On WooCommerce: install the plugin and complete the setup wizard. In both cases, the catalog syncs automatically. The whole process takes less than 5 minutes." },
  "faq.q3": { es: "¿Cómo se miden las conversiones?", en: "How are conversions measured?" },
  "faq.a3": { es: "Kova trackea cada recomendación hecha por el AI. Cuando un cliente compra un producto recomendado dentro de una ventana de atribución, se registra como conversión. El dashboard muestra métricas reales: recomendaciones, conversiones, revenue atribuido, tasa de conversión y top productos.", en: "Kova tracks every recommendation made by the AI. When a customer buys a recommended product within an attribution window, it's recorded as a conversion. The dashboard shows real metrics: recommendations, conversions, attributed revenue, conversion rate, and top products." },
  "faq.q4": { es: "¿Puedo personalizar la apariencia del widget?", en: "Can I customize the widget's appearance?" },
  "faq.a4": { es: "Sí, completamente. Colores, avatar, mensajes de bienvenida, subtítulos, preguntas sugeridas, badge promocional, posición en pantalla, tamaño, tema claro/oscuro — todo configurable desde el panel de administración sin tocar código.", en: "Yes, completely. Colors, avatar, welcome messages, subtitles, suggested questions, promotional badge, screen position, size, light/dark theme — all configurable from the admin panel without touching code." },
  "faq.q5": { es: "¿En qué idiomas funciona?", en: "What languages does it support?" },
  "faq.a5": { es: "El asistente soporta múltiples idiomas. El idioma principal se configura por tienda (español, inglés, etc.) y el AI responde en el idioma del cliente automáticamente.", en: "The assistant supports multiple languages. The primary language is set per store (Spanish, English, etc.) and the AI responds in the customer's language automatically." },
  "faq.q6": { es: "¿Qué pasa con mis datos?", en: "What about my data?" },
  "faq.a6": { es: "Tus datos se almacenan de forma segura en Supabase (PostgreSQL) con aislamiento por tenant y row-level security. Las conversaciones, productos y configuraciones están protegidas y nunca se comparten entre tiendas.", en: "Your data is stored securely in Supabase (PostgreSQL) with tenant isolation and row-level security. Conversations, products, and settings are protected and never shared between stores." },
  "faq.q7": { es: "¿Necesito conocimientos técnicos?", en: "Do I need technical knowledge?" },
  "faq.a7": { es: "No. La instalación, configuración del widget, carga de knowledge base y gestión de planes se hace completamente desde la interfaz visual. No se requiere código.", en: "No. Installation, widget configuration, knowledge base upload, and plan management are all done through the visual interface. No code required." },
  "faq.q8": { es: "¿Puedo probar antes de pagar?", en: "Can I try before paying?" },
  "faq.a8": { es: "Sí. Todos los planes incluyen 7 días de prueba con acceso completo a todas las funciones.", en: "Yes. All plans include a 7-day trial with full access to all features." },

  // Final CTA
  "final.title": { es: "Cada duda sin responder es una venta de alto ticket que se va a “pensarlo”", en: "Every unanswered question is a high-ticket sale that leaves to “think about it”" },
  "final.subtitle": { es: "Mientras lees esto, alguien está mirando tu sofá, tu comedor o tu set de terraza — y tiene una duda que nadie está respondiendo. Kova la responde en segundos y llama para cerrar.", en: "While you read this, someone is looking at your sofa, your dining set or your patio collection — with a question no one is answering. Kova answers it in seconds and calls to close." },
  "final.subtext": { es: "Setup en 5 minutos. 7 días de prueba. Garantía de 30 días.", en: "5-minute setup. 7-day trial. 30-day guarantee." },
  "final.cta": { es: "Activar mi vendedor IA", en: "Activate my AI salesperson" },
  "final.questions": { es: "¿Preguntas? Escríbenos a", en: "Questions? Write to us at" },

  // Footer
  "footer.tagline": { es: "Asistente de ventas con IA para e-commerce.", en: "AI sales assistant for e-commerce." },
  "footer.product": { es: "Producto", en: "Product" },
  "footer.resources": { es: "Recursos", en: "Resources" },
  "footer.legal": { es: "Legal", en: "Legal" },
  "footer.docs": { es: "Documentación", en: "Documentation" },
  "footer.terms": { es: "Términos de servicio", en: "Terms of service" },
  "footer.privacy": { es: "Política de privacidad", en: "Privacy policy" },
  "footer.copyright": { es: "Todos los derechos reservados.", en: "All rights reserved." },
  "footer.ext.shopify": { es: "Shopify App Store", en: "Shopify App Store" },
  "footer.ext.woo": { es: "Directorio de plugins WooCommerce", en: "WooCommerce Plugin Directory" },
  "footer.ext.aiEcommerce": { es: "IA para e-commerce: guía completa", en: "AI for e-commerce: complete guide" },
  "footer.ext.shopifyBlog": { es: "Blog de Shopify", en: "Shopify Blog" },
  "footer.ext.wooGuide": { es: "Guía oficial de WooCommerce", en: "Official WooCommerce Guide" },

  // Comparison
  "comparison.title": { es: "¿Por qué elegir Kova?", en: "Why choose Kova?" },
  "comparison.subtitle": {
    es: "Comparado con las alternativas más populares del mercado",
    en: "Compared to the most popular alternatives on the market",
  },
  "comparison.feature": { es: "Funcionalidad", en: "Feature" },
  "comparison.f1": { es: "Chat IA", en: "AI Chat" },
  "comparison.f2": { es: "Llamadas con voz IA", en: "AI voice calls" },
  "comparison.f3": { es: "Carrito integrado", en: "Integrated cart" },
  "comparison.f4": { es: "Búsqueda semántica", en: "Semantic search" },
  "comparison.f5": { es: "Precio desde", en: "Price from" },
  "comparison.f6": { es: "Shopify + WooCommerce", en: "Shopify + WooCommerce" },
  "comparison.f7": { es: "Español nativo", en: "Native Spanish" },
  "comparison.f8": { es: "Emails con recomendaciones IA", en: "AI email recommendations" },
  "comparison.f9": { es: "Cotizaciones automáticas", en: "Automatic quotes" },
  "comparison.f10": { es: "Agenda reuniones desde el chat", en: "Books meetings from chat" },
  "comparison.f11": { es: "Recomienda por foto (visión IA)", en: "Recommends from a photo (AI vision)" },
  "comparison.limited": { es: "Limitado", en: "Limited" },
  "comparison.keywordOnly": { es: "Solo keywords", en: "Keywords only" },
  "comparison.onlyShopify": { es: "Solo Shopify", en: "Shopify only" },
  "comparison.onlyIntercom": { es: "Parcial", en: "Partial" },
  "comparison.cta": { es: "Empezar con Kova", en: "Get started with Kova" },

  // Pricing features (reused)
  "plan.messages": { es: "mensajes AI/mes", en: "AI messages/mo" },
  "plan.products": { es: "productos", en: "products" },
  "plan.semanticSearch": { es: "Búsqueda semántica", en: "Semantic search" },
  "plan.cartManagement": { es: "Gestión de carrito", en: "Cart management" },
  "plan.conversionAnalytics": { es: "Analytics de conversión", en: "Conversion analytics" },
  "plan.customBranding": { es: "Branding personalizado", en: "Custom branding" },
  "plan.voiceAgents": { es: "Agentes de voz", en: "Voice agents" },
  "plan.prioritySupport": { es: "Soporte prioritario", en: "Priority support" },
  "plan.voiceCalls": { es: "llamadas de voz/mes", en: "voice calls/mo" },
  "plan.unlimitedMessages": { es: "Mensajes ilimitados", en: "Unlimited messages" },
  "plan.unlimitedProducts": { es: "Productos ilimitados", en: "Unlimited products" },
  "plan.allFeatures": { es: "Todas las funcionalidades", en: "All features" },
  "plan.apiAccess": { es: "Acceso a API", en: "API access" },
  "plan.unlimitedVoice": { es: "Llamadas de voz ilimitadas", en: "Unlimited voice calls" },
  "plan.emailRecs": { es: "Emails con recomendaciones IA", en: "AI email recommendations" },
  "plan.autoQuotes": { es: "Cotizaciones automáticas", en: "Automatic quotes" },
  "plan.meetingScheduling": { es: "Agenda reuniones desde el chat", en: "Books meetings from chat" },

  // Promo Popup
  "popup.badge": { es: "Oferta por tiempo limitado", en: "Limited time offer" },
  "popup.title": { es: "Prueba Kova 7 días y vende más desde hoy", en: "Try Kova for 7 days and sell more starting today" },
  "popup.subtitle": { es: "Activa tu vendedor IA en 5 minutos. Si no ves resultados en 30 días, te devolvemos tu dinero.", en: "Activate your AI salesperson in 5 minutes. If you don't see results in 30 days, we refund your money." },
  "popup.benefit1": { es: "Chat + llamadas con voz IA incluidas", en: "Chat + AI voice calls included" },
  "popup.benefit2": { es: "10% de tasa de conversión promedio", en: "10% average conversion rate" },
  "popup.benefit3": { es: "Garantía de devolución de 30 días", en: "30-day money-back guarantee" },
  "popup.cta": { es: "Comenzar mi prueba de 7 días", en: "Start my 7-day trial" },
  "popup.disclaimer": { es: "Sin compromiso. Cancela cuando quieras.", en: "No commitment. Cancel anytime." },

  // Sticky Banner
  "banner.highlight": { es: "7 días de prueba:", en: "7-day trial:" },
  "banner.text": { es: "Activa tu vendedor IA y recupera ventas perdidas desde hoy", en: "Activate your AI salesperson and recover lost sales starting today" },
  "banner.cta": { es: "Probar ahora", en: "Try now" },

  // Use Cases
  "usecases.title": { es: "Pensado para tiendas de hogar premium", en: "Built for premium home stores" },
  "usecases.subtitle": { es: "Donde cada venta es de alto ticket y el cliente lo piensa días antes de decidir", en: "Where every sale is high-ticket and the customer thinks it over for days before deciding" },
  "usecases.a.industry": { es: "Muebles de diseño", en: "Design furniture" },
  "usecases.a.problem": { es: "Tienda de sofás y comedores con ticket sobre $800.000. El cliente compara durante semanas antes de decidir.", en: "Sofa and dining store with tickets over $800K CLP. The customer compares for weeks before deciding." },
  "usecases.a.result": { es: "Kova resuelve dudas de medidas, telas y despacho al instante — y llama para cerrar la venta.", en: "Kova answers questions on measurements, fabrics, and delivery instantly — and calls to close the sale." },
  "usecases.a.metric": { es: "+32% de cotizaciones que terminan en compra", en: "+32% of quotes that turn into purchases" },
  "usecases.b.industry": { es: "Deco e iluminación", en: "Decor & lighting" },
  "usecases.b.problem": { es: "Catálogo de 1.500 piezas de diseño. El visitante no sabe qué combina con qué.", en: "Catalog of 1,500 design pieces. The visitor doesn't know what goes with what." },
  "usecases.b.result": { es: "Kova arma el ambiente completo y sube el ticket con piezas complementarias.", en: "Kova builds the full look and raises the ticket with complementary pieces." },
  "usecases.b.metric": { es: "+28% ticket promedio", en: "+28% average order value" },
  "usecases.c.industry": { es: "Terraza y muebles a medida", en: "Outdoor & custom furniture" },
  "usecases.c.problem": { es: "Proyectos a medida con plazos de semanas. Muchos clientes cotizan y desaparecen.", en: "Custom projects with weeks-long lead times. Many customers request a quote and vanish." },
  "usecases.c.result": { es: "Kova hace seguimiento automático y agenda la visita o llamada de cierre.", en: "Kova follows up automatically and books the visit or closing call." },
  "usecases.c.metric": { es: "30% de cotizaciones frías recuperadas", en: "30% of cold quotes recovered" },
  "usecases.before": { es: "Antes", en: "Before" },
  "usecases.after": { es: "Con Kova", en: "With Kova" },

  // Integration Steps
  "integration.title": { es: "Instalación en 5 minutos", en: "5-minute setup" },
  "integration.subtitle": { es: "Sin código, sin configuración técnica, sin fricción", en: "No code, no technical configuration, no friction" },
  "integration.step1.title": { es: "Conecta tu tienda", en: "Connect your store" },
  "integration.step1.desc": { es: "Instala la extensión de Shopify o el plugin de WooCommerce con un click.", en: "Install the Shopify extension or the WooCommerce plugin with one click." },
  "integration.step2.title": { es: "Personaliza tu agente", en: "Customize your agent" },
  "integration.step2.desc": { es: "Configura el tono, colores, mensajes de bienvenida y catálogo de productos.", en: "Configure the tone, colors, welcome messages, and product catalog." },
  "integration.step3.title": { es: "Empieza a vender", en: "Start selling" },
  "integration.step3.desc": { es: "Kova comienza a atender clientes inmediatamente. Sin código, sin configuración técnica.", en: "Kova starts serving customers immediately. No code, no technical setup." },
  "integration.badge": { es: "Compatible con Shopify y WooCommerce · Prueba 7 días gratis", en: "Compatible with Shopify and WooCommerce · 7-day free trial" },

  // Testimonials
  "testimonials.title": { es: "Lo que dicen nuestras tiendas", en: "What our stores say" },
  "testimonials.subtitle": { es: "Tiendas reales, resultados reales", en: "Real stores, real results" },
  "testimonials.a.quote": { es: "Integrar al Agente Kova ha sido uno de los mayores aciertos del año. Es un servicio altamente personalizable e intuitivo, nos ha dado altos índices de conversión y ha sido entrenado de forma óptima en poco tiempo. Este agente es un golazo para cualquier e-commerce.", en: "Integrating the Kova Agent has been one of the best decisions of the year. It's a highly customizable and intuitive service that has given us high conversion rates and was optimally trained in a short time. This agent is a game-changer for any e-commerce." },
  "testimonials.a.name": { es: "Belén Escobar", en: "Belén Escobar" },
  "testimonials.a.role": { es: "Marketing, Naáy Chile", en: "Marketing, Naáy Chile" },
  "testimonials.b.quote": { es: "Desde que implementamos Kova, nuestros clientes reciben atención inmediata las 24 horas. La tasa de respuesta mejoró drásticamente y las ventas nocturnas se duplicaron. El equipo de soporte es excepcional.", en: "Since we implemented Kova, our customers get immediate attention 24/7. Response rates improved dramatically and night-time sales doubled. The support team is exceptional." },
  "testimonials.b.name": { es: "Miguel Álvarez", en: "Miguel Álvarez" },
  "testimonials.b.role": { es: "E-commerce, Imperio NFC Chile", en: "E-commerce, Imperio NFC Chile" },
  "testimonials.c.quote": { es: "La instalación fue increíblemente fácil. En 5 minutos ya teníamos el chat funcionando.", en: "Installation was incredibly easy. In 5 minutes we already had the chat running." },
  "testimonials.c.name": { es: "Ana P.", en: "Ana P." },
  "testimonials.c.role": { es: "Tienda de alimentos, México", en: "Food store, Mexico" },

  // FAQ Q9 + Q10
  "faq.q9": { es: "¿Qué pasa si el AI da una recomendación equivocada?", en: "What if the AI gives a wrong recommendation?" },
  "faq.a9": { es: "Kova se basa en tu catálogo real y datos de productos para recomendar. Si algo no es correcto, puedes ajustar las instrucciones del agente desde el panel de admin. También puedes activar el modo supervisado donde un humano revisa las respuestas antes de enviarlas.", en: "Kova bases its recommendations on your real catalog and product data. If something is incorrect, you can adjust the agent's instructions from the admin panel. You can also activate supervised mode where a human reviews responses before they are sent." },
  "faq.q10": { es: "¿Qué pasa cuando llego al límite de mensajes de mi plan?", en: "What happens when I reach my plan's message limit?" },
  "faq.a10": { es: "Te notificamos cuando estás cerca del límite. Puedes subir de plan en cualquier momento sin perder configuración. Los mensajes que excedan el límite quedan en cola hasta que actualices o inicie el nuevo período.", en: "We notify you when you're approaching the limit. You can upgrade your plan at any time without losing your configuration. Messages that exceed the limit are queued until you upgrade or the new period begins." },
} as const;

type TranslationKey = keyof typeof translations;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType>({
  locale: "es",
  setLocale: () => {},
  t: (key) => translations[key]?.es ?? key,
});

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    // Priority: localStorage (manual choice) > cookie (geo-detected) > default
    const manual = localStorage.getItem("kova_locale") as Locale | null;
    if (manual === "en" || manual === "es") {
      setLocale(manual);
      return;
    }
    const geo = getCookie("kova_locale") as Locale | null;
    if (geo === "en" || geo === "es") setLocale(geo);
  }, []);

  const changeLocale = (l: Locale) => {
    setLocale(l);
    localStorage.setItem("kova_locale", l);
    setCookie("kova_locale", l); // also set cookie so middleware knows user chose manually
  };

  const t = (key: TranslationKey) => translations[key]?.[locale] ?? key;

  return (
    <I18nContext.Provider value={{ locale, setLocale: changeLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
