const PILLARS = [
  {
    index: "01",
    value: "Velocidad",
    title: "Recuperamos las horas que hoy se van en papeleo",
    points: [
      "Bandeja Cero Documentos elimina la descarga y clasificación manual — tu equipo solo revisa las excepciones que de verdad lo necesitan.",
      "Un despacho tipo recupera entre 15 y 20 horas al mes de trabajo administrativo no facturable.",
    ],
  },
  {
    index: "02",
    value: "Confianza",
    title: "Revisión humana en todo lo que importa",
    points: [
      "Las decisiones sensibles — declaraciones, envíos, cierres — siempre pasan por una persona de tu equipo. Nunca se automatizan a ciegas.",
      "Los tres servicios se implantan en menos de 30 días, con visibilidad total del proceso desde el primer día.",
    ],
  },
  {
    index: "03",
    value: "Transformación",
    title: "Más clientes, sin contratar más gente",
    points: [
      "Expediente Completo 30D hace que los expedientes se completen antes, sin perseguir manualmente a cada cliente.",
      "Cierre Fiscal Blindado organiza vencimientos por cliente y servicio, reduciendo el riesgo de retrasos justo cuando más aprietan los cierres.",
    ],
  },
];

export function PillarsSection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">
            Por qué Confidyx
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy md:text-4xl">
            Control, sin fichar a nadie más
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-mist bg-cream p-7"
            >
              <span
                className="font-display pointer-events-none absolute -right-2 -top-6 text-8xl font-bold text-navy/5"
                aria-hidden="true"
              >
                {pillar.index}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-gold">
                {pillar.value}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold leading-snug text-navy">
                {pillar.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {pillar.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm leading-6 text-ink/75"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
