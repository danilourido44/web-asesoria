import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad y Cookies — Confidyx",
  description:
    "Cómo trata Confidyx los datos personales de quienes visitan esta web, y qué cookies utiliza el sitio.",
};

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="bg-navy px-6 py-16 text-cream md:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-cream/60">
              Legal
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
              Política de Privacidad y Cookies
            </h1>
          </div>
        </div>

        <article className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-3xl space-y-10 text-ink/80">
            {/* ───────────── POLÍTICA DE PRIVACIDAD ───────────── */}
            <section id="privacidad">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted">
                1. Política de privacidad
              </p>
              <p className="mt-3 leading-7">
                En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y de la
                Ley Orgánica 3/2018, de Protección de Datos Personales y
                garantía de los derechos digitales (LOPDGDD), se informa de lo
                siguiente:
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy">
                1.1 Responsable del tratamiento
              </h2>
              <dl className="mt-4 space-y-2 rounded-xl border border-mist bg-mist/60 p-5 text-sm leading-6">
                <div>
                  <dt className="inline font-semibold text-navy">
                    Responsable:{" "}
                  </dt>
                  <dd className="inline">Daniel Lourido Lage (Confidyx)</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-navy">NIF: </dt>
                  <dd className="inline">32721205W</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-navy">
                    Domicilio:{" "}
                  </dt>
                  <dd className="inline">
                    Camiño de Mañón, 244, 15405, Ferrol (A Coruña), España
                  </dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-navy">
                    Contacto para temas de privacidad:{" "}
                  </dt>
                  <dd className="inline">
                    <a href="mailto:confidyx@gmail.com" className="text-accent underline underline-offset-2">
                      confidyx@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
              <p className="mt-4 rounded-xl border-l-4 border-gold bg-gold/10 p-4 text-sm leading-6">
                <strong className="text-navy">
                  Importante — no confundir dos roles distintos:
                </strong>{" "}
                esta política regula los datos de las personas que visitan
                esta web (formulario de contacto, chat). Es un tratamiento
                distinto y separado del que Confidyx realiza como{" "}
                <strong>encargado del tratamiento</strong> cuando presta sus
                servicios a un despacho cliente y procesa, por cuenta de ese
                despacho, la documentación de los clientes finales de dicho
                despacho (nóminas, datos fiscales, etc.). Ese segundo
                tratamiento se rige por el contrato de servicios firmado con
                cada cliente y su Anexo de protección de datos, no por esta
                política.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy">
                1.2 ¿Qué datos tratamos y con qué finalidad?
              </h2>
              <div className="mt-4 overflow-x-auto rounded-xl border border-mist">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-cream">
                      <th className="px-4 py-3 font-display font-semibold">Vía de recogida</th>
                      <th className="px-4 py-3 font-display font-semibold">Datos tratados</th>
                      <th className="px-4 py-3 font-display font-semibold">Finalidad</th>
                      <th className="px-4 py-3 font-display font-semibold">Base legal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-cream">
                      <td className="px-4 py-3 font-semibold text-navy">Formulario de contacto</td>
                      <td className="px-4 py-3">Nombre, correo electrónico, teléfono (si se facilita), nombre del despacho, mensaje</td>
                      <td className="px-4 py-3">Responder a la consulta y, en su caso, preparar una propuesta comercial (p. ej. el Diagnóstico Documental Express)</td>
                      <td className="px-4 py-3">Consentimiento del interesado al enviar el formulario (art. 6.1.a RGPD)</td>
                    </tr>
                    <tr className="bg-mist/60">
                      <td className="px-4 py-3 font-semibold text-navy">Asistente de chat</td>
                      <td className="px-4 py-3">Contenido de los mensajes escritos por el usuario durante la conversación</td>
                      <td className="px-4 py-3">Responder a consultas generales sobre los servicios de Confidyx de forma automatizada</td>
                      <td className="px-4 py-3">Consentimiento del interesado al iniciar la conversación (art. 6.1.a RGPD)</td>
                    </tr>
                    <tr className="bg-cream">
                      <td className="px-4 py-3 font-semibold text-navy">Navegación (cookies)</td>
                      <td className="px-4 py-3">Datos técnicos de navegación</td>
                      <td className="px-4 py-3">Ver Política de Cookies, más abajo</td>
                      <td className="px-4 py-3">Consentimiento / interés legítimo según el tipo de cookie</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 leading-7">
                No se recogen categorías especiales de datos (salud,
                ideología, etc.) a través de este Sitio. Se pide a los
                usuarios que no incluyan datos sensibles ni de terceros en el
                formulario de contacto o en el chat.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy">
                1.3 ¿Cuánto tiempo conservamos los datos?
              </h2>
              <p className="mt-3 leading-7">
                Los datos del formulario de contacto y del chat se
                conservarán mientras exista una relación precontractual o
                comercial activa, y posteriormente durante el plazo necesario
                para atender eventuales responsabilidades legales, tras lo
                cual se suprimirán o anonimizarán.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy">
                1.4 ¿A quién se comunican los datos?
              </h2>
              <p className="mt-3 leading-7">
                Confidyx puede apoyarse en proveedores tecnológicos que actúan
                como <strong>encargados del tratamiento</strong> por cuenta de
                Confidyx, con acceso a los datos únicamente en la medida
                necesaria para prestar su servicio:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                <li>
                  <strong className="text-navy">Proveedor de alojamiento web / infraestructura</strong>{" "}
                  (Vercel), para alojar el Sitio y procesar el envío del
                  formulario y del chat.
                </li>
                <li>
                  <strong className="text-navy">Proveedor del modelo de inteligencia artificial</strong>{" "}
                  que da soporte al asistente de chat (Anthropic, proveedor de
                  la API de Claude), que procesa el contenido de los mensajes
                  para generar la respuesta.
                </li>
                <li>
                  <strong className="text-navy">Proveedor de analítica web</strong>{" "}
                  (Vercel Analytics), que registra visitas y uso agregado del
                  Sitio sin cookies ni identificadores personales — ver
                  apartado 2.2, Política de Cookies.
                </li>
              </ul>
              <p className="mt-4 leading-7">
                No se ceden datos a terceros con fines comerciales o
                publicitarios ajenos a Confidyx.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy">
                1.5 Derechos de las personas usuarias
              </h2>
              <p className="mt-3 leading-7">
                Cualquier persona puede ejercer, de forma gratuita, los
                siguientes derechos sobre sus datos personales:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7">
                <li><strong className="text-navy">Acceso:</strong> saber qué datos suyos tratamos y con qué finalidad.</li>
                <li><strong className="text-navy">Rectificación:</strong> corregir datos inexactos o incompletos.</li>
                <li><strong className="text-navy">Supresión:</strong> solicitar que eliminemos sus datos cuando ya no sean necesarios.</li>
                <li><strong className="text-navy">Oposición:</strong> oponerse al tratamiento en determinadas circunstancias.</li>
                <li><strong className="text-navy">Limitación:</strong> solicitar que restrinjamos el tratamiento mientras se resuelve una solicitud.</li>
                <li><strong className="text-navy">Portabilidad:</strong> recibir sus datos en un formato estructurado y de uso común.</li>
              </ul>
              <p className="mt-4 leading-7">
                Estos derechos pueden ejercerse escribiendo a{" "}
                <a href="mailto:confidyx@gmail.com" className="text-accent underline underline-offset-2">
                  confidyx@gmail.com
                </a>
                , indicando el derecho que se desea ejercer y adjuntando copia
                de un documento identificativo. Responderemos en el plazo de
                un mes, ampliable a dos meses adicionales en casos complejos.
              </p>
              <p className="mt-3 leading-7">
                Si considera que sus derechos no han sido atendidos
                correctamente, puede presentar una reclamación ante la{" "}
                <strong className="text-navy">
                  Agencia Española de Protección de Datos (AEPD)
                </strong>
                , a través de{" "}
                <a
                  href="https://www.aepd.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-2"
                >
                  www.aepd.es
                </a>
                .
              </p>
            </section>

            {/* ───────────── POLÍTICA DE COOKIES ───────────── */}
            <section id="cookies" className="border-t border-mist pt-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted">
                2. Política de cookies
              </p>
              <h2 className="mt-3 font-display text-xl font-bold text-navy">
                2.1 ¿Qué son las cookies?
              </h2>
              <p className="mt-3 leading-7">
                Las cookies son pequeños archivos que se almacenan en el
                dispositivo del usuario al navegar por el Sitio, con
                distintas finalidades (técnicas, de personalización,
                analíticas, publicitarias).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy">
                2.2 Cookies utilizadas en este Sitio
              </h2>
              <p className="mt-3 leading-7">
                El Sitio utiliza <strong>Vercel Analytics</strong> para medir
                visitas y páginas más consultadas de forma agregada y
                anónima. Es una herramienta que <strong>no utiliza cookies ni
                almacena identificadores que permitan reconocer a una persona
                concreta entre visitas</strong>, por lo que no requiere
                consentimiento previo. Fuera de esto, Confidyx no utiliza
                ninguna cookie analítica ni de terceros. Esta tabla se
                actualizará en cuanto se incorpore cualquier otra herramienta
                de medición o marketing (Google Analytics, píxeles de
                anuncios, etc.), que si utilizara cookies pasaría a requerir
                consentimiento explícito antes de activarse.
              </p>
              <div className="mt-4 overflow-x-auto rounded-xl border border-mist">
                <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-cream">
                      <th className="px-4 py-3 font-display font-semibold">Tipo</th>
                      <th className="px-4 py-3 font-display font-semibold">Finalidad</th>
                      <th className="px-4 py-3 font-display font-semibold">¿Requiere consentimiento?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-cream">
                      <td className="px-4 py-3 font-semibold text-navy">Técnicas / necesarias</td>
                      <td className="px-4 py-3">Permiten el funcionamiento básico del Sitio (navegación, recordar preferencias ya elegidas, seguridad)</td>
                      <td className="px-4 py-3">No — necesarias para el funcionamiento del Sitio</td>
                    </tr>
                    <tr className="bg-mist/60">
                      <td className="px-4 py-3 font-semibold text-navy">Analíticas</td>
                      <td className="px-4 py-3">
                        Vercel Analytics — mide visitas y páginas más
                        consultadas de forma agregada, sin cookies ni
                        identificadores personales
                      </td>
                      <td className="px-4 py-3">No — no utiliza cookies</td>
                    </tr>
                    <tr className="bg-cream">
                      <td className="px-4 py-3 font-semibold text-navy">De terceros</td>
                      <td className="px-4 py-3 text-ink/75">No se utilizan actualmente</td>
                      <td className="px-4 py-3 text-ink/75">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy">
                2.3 Gestión del consentimiento
              </h2>
              <p className="mt-3 leading-7">
                Si en el futuro el Sitio incorpora cookies no esenciales, se
                mostrará al acceder por primera vez un banner donde el
                usuario podrá <strong>aceptar o rechazar las cookies no
                necesarias con la misma facilidad</strong> — ambas opciones
                con el mismo nivel de visibilidad, tamaño y número de clics,
                conforme exige la guía de cookies de la Agencia Española de
                Protección de Datos (AEPD). No se activará ninguna cookie no
                esencial hasta que el usuario dé su consentimiento expreso.
              </p>
              <p className="mt-3 leading-7">
                El usuario puede eliminar en cualquier momento las cookies ya
                instaladas desde la configuración de su propio navegador.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy">
                2.4 Más información
              </h2>
              <p className="mt-3 leading-7">
                Para más información sobre el tratamiento de los datos
                recogidos a través de cookies, consulta el apartado 1 de esta
                misma página (Política de Privacidad).
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
