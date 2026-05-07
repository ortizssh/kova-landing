import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de privacidad — Kova",
  description:
    "Cómo Kova (Dustkey LLC) recolecta, usa y protege la información de merchants y de los visitantes finales que interactúan con el asistente.",
  alternates: { canonical: "https://heykova.io/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="mx-auto max-w-[760px] px-6 py-16 md:py-24">
          <header className="mb-12">
            <p className="text-xs uppercase tracking-[0.18em] text-text-muted mb-3">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
              Política de privacidad
            </h1>
            <p className="mt-4 text-sm text-text-muted">
              Última actualización: 7 de mayo de 2026
            </p>
          </header>

          <article className="prose-content space-y-8 text-text-secondary leading-relaxed">
            <Section title="1. Quiénes somos">
              <p>
                Kova es un servicio operado por <strong>Dustkey LLC</strong>, una sociedad de responsabilidad
                limitada constituida en el estado de Delaware, Estados Unidos. En esta política nos referimos a
                Dustkey LLC como &quot;Kova&quot;, &quot;nosotros&quot; o &quot;nuestro&quot;.
              </p>
              <p>
                Esta política explica qué información recolectamos, cómo la usamos, con quién la compartimos y
                cuáles son tus derechos. Aplica a:
              </p>
              <ul>
                <li>
                  <strong>Merchants:</strong> tiendas que instalan Kova como aplicación o plugin para atender
                  a sus clientes finales.
                </li>
                <li>
                  <strong>Visitantes finales:</strong> compradores que interactúan con el asistente Kova en
                  una tienda donde está instalado.
                </li>
                <li>
                  <strong>Visitantes del sitio:</strong> personas que navegan por heykova.io.
                </li>
              </ul>
            </Section>

            <Section title="2. Información que recolectamos">
              <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">
                2.1 De los merchants
              </h3>
              <ul>
                <li>
                  <strong>Información de cuenta:</strong> nombre, correo electrónico, contraseña hasheada,
                  datos de facturación procesados por Stripe.
                </li>
                <li>
                  <strong>Información de la tienda:</strong> dominio, plataforma (Shopify o WooCommerce),
                  catálogo de productos, configuración del asistente, instrucciones del agente, idioma,
                  branding.
                </li>
                <li>
                  <strong>Datos de uso:</strong> métricas de conversación, conversiones atribuidas, logs de
                  webhooks, eventos de plataforma.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">
                2.2 De los visitantes finales
              </h3>
              <ul>
                <li>
                  <strong>Conversaciones de chat:</strong> mensajes enviados al asistente y respuestas
                  generadas por nuestra IA.
                </li>
                <li>
                  <strong>Datos voluntarios:</strong> nombre, correo electrónico y número de teléfono cuando
                  el visitante decide compartirlos para recibir una llamada o un seguimiento.
                </li>
                <li>
                  <strong>Datos técnicos:</strong> identificador de sesión, URL de origen, idioma del
                  navegador, marcas de tiempo. No usamos cookies de tracking de terceros.
                </li>
                <li>
                  <strong>Llamadas con voz IA (opcional):</strong> cuando el visitante acepta una llamada,
                  procesamos la grabación, transcripción y resumen para uso del merchant.
                </li>
              </ul>
            </Section>

            <Section title="3. Para qué usamos esta información">
              <ul>
                <li>Operar el servicio: responder preguntas, recomendar productos, ejecutar llamadas con voz IA.</li>
                <li>Sincronizar el catálogo del merchant para que el asistente recomiende productos reales.</li>
                <li>Mostrar al merchant las conversaciones, leads y métricas de su tienda.</li>
                <li>Cobrar la suscripción a través de Stripe.</li>
                <li>Mejorar el servicio: agregadas y anonimizadas, las conversaciones nos ayudan a evaluar la calidad de las respuestas.</li>
                <li>Cumplir obligaciones legales y prevenir fraude o abuso.</li>
              </ul>
              <p>
                <strong>No vendemos tus datos</strong> ni los compartimos con anunciantes. No usamos las
                conversaciones de un merchant para entrenar modelos generales que se usen con otros merchants.
              </p>
            </Section>

            <Section title="4. Sub-procesadores y servicios de terceros">
              <p>
                Para prestar el servicio compartimos información estrictamente necesaria con los siguientes
                proveedores. Cada uno tiene un contrato de procesamiento de datos (DPA) con Dustkey LLC:
              </p>
              <ul>
                <li><strong>OpenAI</strong> — generación de respuestas del asistente.</li>
                <li><strong>Retell AI</strong> — llamadas telefónicas con voz IA.</li>
                <li><strong>Twilio</strong> — telefonía para las llamadas salientes.</li>
                <li><strong>Stripe</strong> — procesamiento de pagos de suscripciones.</li>
                <li><strong>Mailgun</strong> — emails transaccionales.</li>
                <li><strong>Supabase</strong> — base de datos PostgreSQL y almacenamiento de archivos.</li>
                <li><strong>Vercel</strong> — hosting y entrega del sitio web y de la aplicación.</li>
              </ul>
            </Section>

            <Section title="5. Plataformas e-commerce">
              <p>
                Cuando un merchant instala Kova en Shopify o WooCommerce, recibimos un token de acceso que nos
                permite leer su catálogo y, según los permisos otorgados, datos de pedidos. Esta información
                pertenece al merchant; nuestro acceso se revoca automáticamente al desinstalar la aplicación.
              </p>
              <p>
                Para Shopify cumplimos con los <strong>webhooks de cumplimiento obligatorios</strong> definidos
                por la plataforma:
              </p>
              <ul>
                <li>
                  <code>customers/data_request</code> — exportación de datos de un visitante final a solicitud.
                </li>
                <li>
                  <code>customers/redact</code> — borrado de datos de un visitante final.
                </li>
                <li>
                  <code>shop/redact</code> — borrado completo de los datos de una tienda 48 horas después de
                  desinstalar la app.
                </li>
              </ul>
            </Section>

            <Section title="6. Tus derechos">
              <p>Independientemente de tu jurisdicción, podés ejercer los siguientes derechos:</p>
              <ul>
                <li>
                  <strong>Acceso:</strong> solicitar una copia de los datos personales que tenemos sobre vos.
                </li>
                <li>
                  <strong>Rectificación:</strong> corregir datos inexactos o incompletos.
                </li>
                <li>
                  <strong>Eliminación:</strong> solicitar la eliminación de tus datos.
                </li>
                <li>
                  <strong>Oposición:</strong> oponerte al tratamiento de tus datos para usos específicos.
                </li>
                <li>
                  <strong>Portabilidad:</strong> recibir tus datos en formato estructurado y legible por
                  máquina.
                </li>
              </ul>
              <p>
                Para ejercer cualquiera de estos derechos, escribinos a{" "}
                <a href="mailto:hello@heykova.io" className="text-text-primary underline">
                  hello@heykova.io
                </a>
                . Respondemos dentro de los 30 días.
              </p>
              <p>
                Si sos visitante final de una tienda que usa Kova, podés también solicitar el borrado a través
                del propio merchant; nuestro sistema procesa estas solicitudes automáticamente vía los
                webhooks descritos en la sección 5.
              </p>
            </Section>

            <Section title="7. Retención de datos">
              <ul>
                <li>
                  <strong>Conversaciones de chat:</strong> 12 meses desde la última interacción. Después se
                  anonimizan.
                </li>
                <li>
                  <strong>Grabaciones y transcripciones de llamadas:</strong> 12 meses desde la fecha de la
                  llamada.
                </li>
                <li>
                  <strong>Datos de cuenta del merchant:</strong> mientras la suscripción esté activa y hasta
                  90 días después de cancelarla, salvo obligación legal de conservar más tiempo.
                </li>
                <li>
                  <strong>Logs de auditoría:</strong> 24 meses, por requisitos de seguridad y cumplimiento.
                </li>
              </ul>
            </Section>

            <Section title="8. Seguridad">
              <p>
                Aplicamos medidas técnicas y organizativas razonables: encriptación TLS 1.2+ en tránsito,
                aislamiento por tenant en la base de datos, row-level security en Supabase, rotación de
                secretos, control de acceso basado en roles para nuestro equipo, y registro de auditoría de
                accesos sensibles. Ningún sistema en línea es 100% seguro, pero nos comprometemos a notificar
                a los afectados de cualquier incidente que afecte sus datos personales dentro de las 72 horas
                de tomar conocimiento.
              </p>
            </Section>

            <Section title="9. Transferencias internacionales">
              <p>
                Nuestros servidores y los de nuestros sub-procesadores están ubicados principalmente en
                Estados Unidos. Si nos contactás desde otro país, tu información será transferida y procesada
                en EE.UU. Aplicamos cláusulas contractuales tipo y otros mecanismos legales aceptados para
                proteger esas transferencias.
              </p>
            </Section>

            <Section title="10. Cookies y tecnologías similares">
              <p>
                heykova.io usa cookies estrictamente necesarias para funcionar (sesión, preferencia de
                idioma, tema oscuro) y métricas de tráfico anónimas y agregadas. No usamos cookies de
                publicidad ni de tracking entre sitios.
              </p>
            </Section>

            <Section title="11. Cambios a esta política">
              <p>
                Podemos actualizar esta política para reflejar cambios en nuestras prácticas o en la
                regulación aplicable. Cuando hagamos cambios materiales lo notificaremos por correo
                electrónico al merchant y publicaremos la fecha de la nueva versión arriba. La versión vigente
                siempre estará disponible en esta misma URL.
              </p>
            </Section>

            <Section title="12. Contacto">
              <p>
                Para cualquier consulta sobre esta política o el tratamiento de tus datos, escribinos a{" "}
                <a href="mailto:hello@heykova.io" className="text-text-primary underline">
                  hello@heykova.io
                </a>
                .
              </p>
              <p className="text-sm text-text-muted">
                Dustkey LLC<br />
                Delaware, Estados Unidos
              </p>
            </Section>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-4 mt-2">
        {title}
      </h2>
      <div className="space-y-4 text-[15px] leading-7 text-text-secondary [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-[15px] [&_strong]:text-text-primary [&_code]:font-mono [&_code]:text-[13px] [&_code]:bg-gray-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded">
        {children}
      </div>
    </section>
  );
}
