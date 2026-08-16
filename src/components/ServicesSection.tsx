const SERVICES = [
  {
    badge: "El punto de partida",
    name: "Bandeja Cero Documentos",
    description:
      "Recibe la documentación que llega por cualquier canal, identifica al cliente, extrae los datos clave y la archiva.",
    features: [
      "Identificación automática de cliente",
      "Extracción de datos clave",
      "Tu equipo solo revisa excepciones",
    ],
    highlighted: true,
  },
  {
    badge: null,
    name: "Expediente Completo 30D",
    description:
      "Controla qué le falta a cada cliente y envía recordatorios estructurados hasta que el expediente está cerrado.",
    features: [
      "Seguimiento automático de lo pendiente",
      "Recordatorios estructurados, sin perseguir a mano",
      "Expedientes cerrados antes",
    ],
    highlighted: false,
  },
  {
    badge: null,
    name: "Cierre Fiscal Blindado",
    description:
      "Organiza los vencimientos y tareas críticas de cada cliente, asigna responsables y avisa antes de que se conviertan en urgencia.",
    features: [
      "Vencimientos por cliente y servicio",
      "Responsables asignados",
      "Avisos antes del último momento",
    ],
    highlighted: false,
  },
];

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

              <ul className="mt-6 flex-1 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        service.highlighted ? "text-accent" : "text-accent"
                      }`}
                      fill="none"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={
                        service.highlighted
                          ? "text-sm leading-6 text-cream/90"
                          : "text-sm leading-6 text-ink/80"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={
                  service.highlighted
                    ? "mt-8 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-navy transition-transform hover:scale-[1.02]"
                    : "mt-8 rounded-full border border-navy/20 px-5 py-3 text-center text-sm font-semibold text-navy transition-colors hover:bg-mist"
                }
              >
                Solicitar información
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
