const STEPS = [
  {
    step: "1",
    title: "Diagnóstico Documental Express",
    description:
      "30 minutos para ver juntos cuántas horas al mes se están yendo en tu agujero negro documental, y qué número real hay detrás.",
    icon: (
      <>
        <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M20 20L15.8 15.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    step: "2",
    title: "Diseño del proceso",
    description:
      "Definimos qué necesita tu despacho: Bandeja Cero Documentos, Expediente Completo 30D, Cierre Fiscal Blindado — o los tres.",
    icon: (
      <path
        d="M12 3L3 8L12 13L21 8L12 3Z M3 13L12 18L21 13 M3 18L12 23L21 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  {
    step: "3",
    title: "Puesta en marcha",
    description:
      "Implantación en menos de 30 días, con visibilidad total del proceso desde el primer día. Nada de cajas negras.",
    icon: (
      <>
        <rect x="3" y="4.5" width="18" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M3 9.5H21 M7.5 2.5V6.5 M16.5 2.5V6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 14.5L11 17.5L16.5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
  {
    step: "4",
    title: "Revisión humana continua",
    description:
      "Automatizamos lo repetitivo. Las decisiones sensibles las revisa siempre alguien de tu equipo.",
    icon: (
      <>
        <path
          d="M2 12C4.5 6.5 8 4 12 4C16 4 19.5 6.5 22 12C19.5 17.5 16 20 12 20C8 20 4.5 17.5 2 12Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" fill="none" />
      </>
    ),
  },
];

export function ProcessSection() {
  return (
    <section id="proceso" className="bg-navy px-6 py-20 text-cream md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-cream/60">
            Cómo funciona
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
            De la primera llamada a un proceso bajo control, en menos de 30
            días
          </h2>
        </div>

        <div className="relative mt-16">
          <div
            className="absolute left-8 top-2 bottom-2 hidden w-px bg-gradient-to-b from-transparent via-cream/25 to-transparent md:left-1/2 md:block md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-10 md:space-y-4">
            {STEPS.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={item.step}
                  className="relative grid items-center gap-x-8 gap-y-4 md:grid-cols-[1fr_auto_1fr] md:py-8"
                >
                  <div
                    className={`order-1 flex justify-start md:order-2 md:justify-center`}
                  >
                    <div className="relative shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-navy shadow-lg shadow-black/20 ring-8 ring-navy">
                        <svg viewBox="0 0 24 24" className="h-7 w-7">
                          {item.icon}
                        </svg>
                      </div>
                      <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-xs font-bold text-gold ring-2 ring-gold">
                        {item.step}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`order-2 pl-[4.75rem] md:pl-0 ${
                      isEven
                        ? "md:order-1 md:pr-4 md:text-right"
                        : "md:order-3 md:pl-4 md:text-left"
                    }`}
                  >
                    <h3 className="font-display text-lg font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-cream/70">
                      {item.description}
                    </p>
                  </div>

                  <div
                    className={`hidden md:block ${
                      isEven ? "md:order-3" : "md:order-1"
                    }`}
                    aria-hidden="true"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
