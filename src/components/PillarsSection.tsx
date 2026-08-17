import Image from "next/image";

const PILLARS = [
  {
    index: "01",
    value: "Velocidad",
    photo: "/photos/pillar-velocidad.jpg",
    title: "Recuperamos las horas que hoy se van en papeleo",
    points: [
      "Bandeja Cero Documentos elimina la descarga y clasificación manual — tu equipo solo revisa las excepciones que de verdad lo necesitan.",
      "Un despacho tipo recupera entre 25 y 60 horas al mes de trabajo administrativo no facturable, según el servicio implantado.",
    ],
  },
  {
    index: "02",
    value: "Confianza",
    photo: "/photos/pillar-confianza.jpg",
    title: "Revisión humana en todo lo que importa",
    points: [
      "Las decisiones sensibles — declaraciones, envíos, cierres — siempre pasan por una persona de tu equipo. Nunca se automatizan a ciegas.",
      "Los tres servicios se implantan en menos de 30 días, con visibilidad total del proceso desde el primer día.",
    ],
  },
  {
    index: "03",
    value: "Transformación",
    photo: "/photos/pillar-transformacion.jpg",
    title: "Más clientes, sin contratar más gente",
    points: [
      "Expediente Completo 30D hace que los expedientes se completen antes, sin perseguir manualmente a cada cliente.",
      "Cierre Fiscal Blindado organiza vencimientos por cliente y servicio, reduciendo el riesgo de retrasos justo cuando más aprietan los cierres.",
    ],
  },
];

function PillarPhoto({ src }: { src: string }) {
  return (
    <div className="relative -mx-7 -mt-7 mb-6 h-36 overflow-hidden">
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover grayscale-[10%] saturate-[0.85]"
      />
      <div
        className="absolute inset-0 bg-navy/25"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-cream via-cream/15 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}

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
              <PillarPhoto src={pillar.photo} />

              <span
                className="font-display pointer-events-none absolute -right-2 top-24 text-8xl font-bold text-navy/5"
                aria-hidden="true"
              >
                {pillar.index}
              </span>
              <span className="relative text-xs font-bold uppercase tracking-wider text-gold">
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
