const SERVICES = [
  {
    badge: "El punto de partida",
    name: "Bandeja Cero Documentos",
    description:
      "Recibe, ordena, renombra, clasifica y registra automáticamente facturas, nóminas y justificantes de email, WhatsApp y carpetas.",
    roi: "25–60 h liberadas/mes",
    roiDetail: "~750–1.800 € de capacidad operativa recuperada",
    bullets: [
      "Cada factura que hoy alguien descarga, renombra y coloca a mano se convierte en un expediente organizado sin intervención administrativa.",
      "Liberamos horas para atender más clientes o dedicar tiempo a servicios de mayor valor.",
      "Recuperas capacidad sin contratar a otra persona.",
    ],
    bestWhen:
      "Tenéis muchos emails, carpetas desordenadas y gente dedicada a introducir datos a mano.",
    setup: "4.000–8.000 €",
    monthly: "600–1.200 €/mes",
    highlighted: true,
  },
  {
    badge: null,
    name: "Expediente Completo 30D",
    description:
      "Sabe qué debe entregar cada cliente, qué ha enviado ya y qué falta. Envía recordatorios personalizados y solo avisa a tu equipo ante una excepción.",
    roi: "20–40 h liberadas/mes",
    roiDetail: "menos retrasos, más expedientes procesados",
    bullets: [
      "Tu equipo deja de perseguir facturas, nóminas y justificantes por email y teléfono durante semanas.",
      "Los expedientes incompletos se convierten en expedientes listos para trabajar.",
      "Más capacidad facturable y menos noches antes de un cierre.",
    ],
    bestWhen:
      "Vuestros empleados se quejan de que los clientes nunca entregan todo, o siempre tarde.",
    setup: "3.000–6.000 €",
    monthly: "500–1.000 €/mes",
    highlighted: false,
  },
  {
    badge: null,
    name: "Cierre Fiscal Blindado",
    description:
      "Controla cada expediente desde que llega la documentación hasta que queda listo para revisión: información incompleta, tareas bloqueadas y lo que puede llegar tarde al vencimiento.",
    roi: "1.500–5.000 €/mes",
    roiDetail: "entre horas extra, retrabajo y riesgo evitado",
    bullets: [
      "Evitamos que los problemas aparezcan 3 días antes de una presentación, cuando ya solo quedan las horas extra.",
      "Tu equipo recibe cada mañana una lista clara de clientes en riesgo, documentos pendientes y tareas prioritarias.",
      "Proteges la facturación y reduces el riesgo de errores que dañen la confianza del cliente.",
    ],
    bestWhen:
      "Tenéis temporadas de mucha presión, varias personas en los mismos clientes, o antecedentes de retrasos.",
    setup: "6.000–12.000 €",
    monthly: "800–1.500 €/mes",
    highlighted: false,
  },
];

const COMPARISON_ROWS = [
  {
    service: "Bandeja Cero Documentos",
    roi: "25–60 h/mes",
    facilidad: "Alta",
    valor: "Alta",
  },
  {
    service: "Expediente Completo 30D",
    roi: "20–40 h/mes",
    facilidad: "Muy alta",
    valor: "Muy alta",
  },
  {
    service: "Cierre Fiscal Blindado",
    roi: "1.500–5.000 €/mes",
    facilidad: "Media",
    valor: "Máxima",
  },
];

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
                  ? "flex flex-col rounded-2xl bg-navy px-8 py-10 text-cream shadow-lg md:-translate-y-4"
                  : "flex flex-col rounded-2xl border border-mist bg-cream px-8 py-10"
              }
            >
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

              <div
                className={
                  service.highlighted
                    ? "mt-5 rounded-xl bg-cream/[0.06] px-4 py-3"
                    : "mt-5 rounded-xl bg-accent/[0.08] px-4 py-3"
                }
              >
                <div className="font-display text-lg font-bold text-accent">
                  {service.roi}
                </div>
                <div
                  className={
                    service.highlighted
                      ? "mt-0.5 text-xs text-cream/60"
                      : "mt-0.5 text-xs text-ink/60"
                  }
                >
                  {service.roiDetail}
                </div>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
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
                    ? "mt-6 flex items-baseline justify-between border-t border-cream/10 pt-5"
                    : "mt-6 flex items-baseline justify-between border-t border-mist pt-5"
                }
              >
                <div>
                  <div
                    className={
                      service.highlighted
                        ? "text-[11px] uppercase tracking-wide text-cream/50"
                        : "text-[11px] uppercase tracking-wide text-muted"
                    }
                  >
                    Puesta en marcha
                  </div>
                  <div className="font-display text-lg font-bold">
                    {service.setup}
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={
                      service.highlighted
                        ? "text-[11px] uppercase tracking-wide text-cream/50"
                        : "text-[11px] uppercase tracking-wide text-muted"
                    }
                  >
                    Cuota
                  </div>
                  <div className="font-display text-lg font-bold text-gold">
                    {service.monthly}
                  </div>
                </div>
              </div>

              <a
                href="#contacto"
                className={
                  service.highlighted
                    ? "mt-6 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-navy transition-transform hover:scale-[1.02]"
                    : "mt-6 rounded-full border border-navy/20 px-5 py-3 text-center text-sm font-semibold text-navy transition-colors hover:bg-mist"
                }
              >
                Solicitar información
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
          Las cifras son rangos orientativos para un despacho de 5–10
          empleados y deben validarse con una auditoría real de horas,
          documentos y clientes de vuestro despacho concreto.
        </p>
      </div>
    </section>
  );
}
