import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aviso Legal — Confidyx",
  description: "Información legal del titular y condiciones de uso del sitio web de Confidyx.",
};

export default function AvisoLegalPage() {
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
              Aviso Legal
            </h1>
          </div>
        </div>

        <article className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-3xl space-y-10 text-ink/80">
            <section>
              <h2 className="font-display text-xl font-bold text-navy">
                1.1 Datos identificativos del prestador
              </h2>
              <p className="mt-3 leading-7">
                En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios
                de la Sociedad de la Información y de Comercio Electrónico
                (LSSI-CE), se informa de los siguientes datos:
              </p>
              <dl className="mt-4 space-y-2 rounded-xl border border-mist bg-mist/60 p-5 text-sm leading-6">
                <div>
                  <dt className="inline font-semibold text-navy">Titular: </dt>
                  <dd className="inline">
                    Daniel Lourido Lage (operando bajo el nombre comercial
                    &ldquo;Confidyx&rdquo;)
                  </dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-navy">NIF: </dt>
                  <dd className="inline">32721205W</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-navy">Domicilio: </dt>
                  <dd className="inline">
                    Camiño de Mañón, 244, 15405, Ferrol (A Coruña), España
                  </dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-navy">
                    Datos registrales:{" "}
                  </dt>
                  <dd className="inline">
                    No aplica — actividad ejercida como empresario individual
                    (autónomo), sin inscripción en el Registro Mercantil.
                  </dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-navy">
                    Correo electrónico de contacto:{" "}
                  </dt>
                  <dd className="inline">
                    <a href="mailto:hola@confidyx.com" className="text-accent hover:underline">
                      hola@confidyx.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-navy">Sitio web: </dt>
                  <dd className="inline">www.confidyx.com</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm italic leading-6 text-ink/60">
                Nota: si en el futuro Confidyx se constituye como sociedad
                (SLU), estos datos identificativos (titular, NIF/CIF y, en ese
                caso, también los datos registrales) se actualizarán el mismo
                día en que se formalice el cambio — el artículo 10 LSSI-CE
                obliga a que esta información sea real y esté accesible de
                forma permanente, fácil y gratuita.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy">
                1.2 Objeto
              </h2>
              <p className="mt-3 leading-7">
                Confidyx presta servicios de automatización documental
                mediante inteligencia artificial dirigidos a despachos de
                asesoría fiscal, contable y laboral, consistentes en la
                recepción, clasificación, seguimiento y control de
                documentación y plazos. El presente Aviso Legal regula el
                acceso y uso del sitio web www.confidyx.com (en adelante,
                &ldquo;el Sitio&rdquo;), a través del cual se ofrece
                información sobre estos servicios, un formulario de contacto y
                un asistente de chat.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy">
                1.3 Condiciones de acceso y uso
              </h2>
              <p className="mt-3 leading-7">
                El acceso al Sitio es gratuito y no requiere registro previo,
                salvo para el uso del formulario de contacto o del chat, que
                implican el tratamiento de los datos que el usuario facilite
                voluntariamente (ver Política de Privacidad).
              </p>
              <p className="mt-3 leading-7">
                El usuario se compromete a hacer un uso lícito del Sitio, sin
                incurrir en actividades ilícitas, lesivas de derechos de
                terceros, o contrarias a la buena fe, y a no introducir virus,
                código malicioso ni realizar acciones que puedan dañar,
                sobrecargar o impedir el funcionamiento normal del Sitio.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy">
                1.4 Propiedad intelectual e industrial
              </h2>
              <p className="mt-3 leading-7">
                Todos los contenidos del Sitio —textos, imágenes, logotipos,
                marca &ldquo;Confidyx&rdquo;, diseño, estructura de navegación
                y código fuente— son titularidad de Daniel Lourido Lage
                (Confidyx) o de terceros que han autorizado su uso, y están
                protegidos por la normativa de propiedad intelectual e
                industrial. Queda prohibida su reproducción, distribución,
                comunicación pública o transformación sin autorización
                expresa, salvo en los casos permitidos por la ley.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy">
                1.5 Exclusión de responsabilidad
              </h2>
              <p className="mt-3 leading-7">
                Confidyx no garantiza la disponibilidad, continuidad ni
                infalibilidad del Sitio, y no se responsabiliza de los daños
                derivados de la falta de disponibilidad o de fallos de acceso,
                sin perjuicio de las medidas razonables que adopte para
                evitarlos.
              </p>
              <p className="mt-3 leading-7">
                El asistente de chat del Sitio utiliza tecnología de
                inteligencia artificial para responder de forma automatizada a
                consultas generales. Sus respuestas tienen carácter meramente
                informativo y orientativo, no constituyen asesoramiento
                fiscal, laboral, contable ni legal, y no sustituyen la
                relación contractual ni el trato directo con el equipo de
                Confidyx para la contratación de servicios.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy">
                1.6 Enlaces
              </h2>
              <p className="mt-3 leading-7">
                El Sitio puede incluir enlaces a páginas de terceros. Confidyx
                no asume responsabilidad alguna por el contenido, políticas de
                privacidad o prácticas de dichos sitios, que quedan fuera de
                su control.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy">
                1.7 Modificaciones
              </h2>
              <p className="mt-3 leading-7">
                Confidyx se reserva el derecho a modificar, sin previo aviso,
                el contenido del Sitio y del presente Aviso Legal, siendo
                aplicable la versión publicada en cada momento de acceso.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy">
                1.8 Legislación aplicable y jurisdicción
              </h2>
              <p className="mt-3 leading-7">
                Las presentes condiciones se rigen por la legislación
                española. Para la resolución de cualquier controversia
                derivada del acceso o uso del Sitio, las partes se someten a
                los juzgados y tribunales de Ferrol (A Coruña), salvo que la
                normativa de consumidores y usuarios establezca un fuero
                distinto de carácter imperativo.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
