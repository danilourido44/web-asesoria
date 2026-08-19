import Image from "next/image";

const SERVICES = [
  {
    badge: "El punto de partida",
    name: "Expediente Completo 30D",
    photo: "/photos/expediente-completo.jpeg",
    description:
      "Sabe qué debe entregar cada cliente, qué ha enviado y qué falta. Solo avisa a tu equipo ante una excepción.",
    bullets: [
      "Tu equipo deja de perseguir facturas y justificantes por email y teléfono.",
      "Los expedientes incompletos pasan a listos para trabajar.",
      "Más capacidad facturable y menos noches antes de un cierre.",
    ],
    bestWhen: "Los clientes nunca entregan todo, o siempre tarde.",
    highlighted: true,
  },
  {
    badge: null,
    name: "Bandeja Cero Documentos",
    photo: "/photos/bandeja-documentos.jpeg",
    description:
      "Recibe, ordena, renombra y clasifica automáticamente facturas, nóminas y justificantes de email, WhatsApp y carpetas.",
    bullets: [
      "Cada factura se organiza sola, sin trabajo administrativo manual.",
      "Liberas tiempo para más clientes o servicios de mayor valor.",
      "Recuperas capacidad sin contratar a otra persona.",
    ],
    bestWhen: "Hay muchos emails, carpetas desordenadas y datos a mano.",
    highlighted: false,
  },
  {
    badge: null,
    name: "Cierre Fiscal Blindado",
    photo: "/photos/cierre-fiscal.jpeg",
    description:
      "Controla cada expediente desde que llega la documentación hasta que queda listo para revisión.",
    bullets: [
      "Detecta los problemas antes de que lleguen 3 días antes de un vencimiento.",
      "Lista diaria de clientes en riesgo y tareas prioritarias.",
      "Proteges la facturación y reduces errores que dañan la confianza del cliente.",
    ],
    bestWhen: "Hay temporadas de mucha presión o antecedentes de retrasos.",
    highlighted: false,
  },
];

const COMPARISON_ROWS = [
  {
    service: "Expediente Completo 30D",
    roi: "20–40 h/mes",
    facilidad: "Muy alta",
    valor: "Muy alta",
  },
  {
    service: "Bandeja Cero Documentos",
    roi: "25–60 h/mes",
    facilidad: "Alta",
    valor: "Alta",
  },
  {
    service: "Cierre Fiscal Blindado",
    roi: "1.500–5.000 €/mes",
    facilidad: "Media",
    valor: "Máxima",
  },
];

function ServicePhoto({
  src,
  highlighted,
}: {
  src: string;
  highlighted: boolean;
}) {
  return (
    <div className="relative -mx-8 -mt-10 mb-6 h-44">
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
      />
      <div
        className={
          highlighted
            ? "absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/0"
            : "absolute inset-0 bg-gradient-to-t from-cream via-cream/55 to-cream/0"
        }
        aria-hidden="true"
      />
    </div>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServicesSection() {
  return (
    <section id="servicios" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">
            Los tres servicios
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy md:text-4xl">
            Tres piezas para acabar con el agujero negro documental
          </h2>
          <p className="mt-4 text-base leading-7 text-ink/75">
            Pensadas para atacar el problema en el orden en que realmente
            duele. Se implantan por separado o juntas, siempre en menos de 30
            días.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:items-start">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className={
                service.highlighted
                  ? "relative flex flex-col overflow-hidden rounded-2xl bg-navy px-8 py-10 text-cream shadow-lg md:-translate-y-4"
                  : "relative flex flex-col overflow-hidden rounded-2xl border border-mist bg-cream px-8 py-10"
              }
            >
              <ServicePhoto src={service.photo} highlighted={service.highlighted} />

              {service.badge && (
                <span className="mb-4 inline-block w-fit rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy">
                  {service.badge}
                </span>
              )}
              <h3
                className={
                  service.highlighted
                    ? "font-display text-xl font-bold"
                    : "font-display text-xl font-bold text-navy"
                }
              >
                {service.name}
              </h3>
              <p
                className={
                  service.highlighted
                    ? "mt-3 text-sm leading-6 text-cream/75"
                    : "mt-3 text-sm leading-6 text-ink/75"
                }
              >
                {service.description}
              </p>

              <ul className="mt-5 flex-1 space-y-3">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <CheckIcon
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        service.highlighted ? "text-accent" : "text-accent"
                      }`}
                    />
                    <span
                      className={
                        service.highlighted
                          ? "text-sm leading-6 text-cream/90"
                          : "text-sm leading-6 text-ink/80"
                      }
                    >
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                className={
                  service.highlighted
                    ? "mt-5 text-xs italic leading-5 text-cream/50"
                    : "mt-5 text-xs italic leading-5 text-ink/50"
                }
              >
                <span className="font-semibold not-italic">
                  Mejor cuando:
                </span>{" "}
                {service.bestWhen}
              </p>

              <div
                className={
                  service.highlighted
                    ? "mt-6 border-t border-cream/10 pt-5"
                    : "mt-6 border-t border-mist pt-5"
                }
              >
                <p
                  className={
                    service.highlighted
                      ? "text-sm leading-6 text-cream/70"
                      : "text-sm leading-6 text-ink/70"
                  }
                >
                  Precio adaptado a tu despacho. Pídenos un informe
                  personalizado sin compromiso.
                </p>
              </div>

              <a
                href="#contacto"
                className={
                  service.highlighted
                    ? "mt-5 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-navy transition-transform hover:scale-[1.02]"
                    : "mt-5 rounded-full border border-navy/20 px-5 py-3 text-center text-sm font-semibold text-navy transition-colors hover:bg-mist"
                }
              >
                Solicitar informe
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-navy text-cream">
                <th className="px-5 py-4 font-display font-semibold">
                  Servicio
                </th>
                <th className="px-5 py-4 font-display font-semibold">
                  ROI estimado
                </th>
                <th className="px-5 py-4 font-display font-semibold">
                  Facilidad de implementación
                </th>
                <th className="px-5 py-4 font-display font-semibold">
                  Valor percibido
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr
                  key={row.service}
                  className={i % 2 === 0 ? "bg-cream" : "bg-mist/60"}
                >
                  <td className="px-5 py-4 font-semibold text-navy">
                    {row.service}
                  </td>
                  <td className="px-5 py-4 font-semibold text-accent">
                    {row.roi}
                  </td>
                  <td className="px-5 py-4 text-ink/75">{row.facilidad}</td>
                  <td className="px-5 py-4 text-ink/75">{row.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-muted">
          Las cifras de ahorro son rangos orientativos para un despacho de
          5–10 empleados. El precio de cada servicio se ajusta a la
          auditoría real de horas, documentos y clientes de vuestro
          despacho.
        </p>
      </div>
    </section>
  );
}
