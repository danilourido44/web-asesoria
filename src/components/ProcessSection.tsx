const STEPS = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "30 minutos para ver cuántas horas al mes se pierden en tu agujero documental.",
    icon: (
      <>
        <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M20 20L15.8 15.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    step: "02",
    title: "Diseño",
    description:
      "Definimos qué necesita tu despacho: uno de los tres servicios, o los tres juntos.",
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
    step: "03",
    title: "Implantación",
    description:
      "En menos de 30 días, con visibilidad total desde el primer día.",
    icon: (
      <>
        <rect x="3" y="4.5" width="18" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M3 9.5H21 M7.5 2.5V6.5 M16.5 2.5V6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 14.5L11 17.5L16.5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
  {
    step: "04",
    title: "Revisión",
    description:
      "Automatizamos lo repetitivo. Las decisiones sensibles las revisa siempre tu equipo.",
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

function ConnectorArcs() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 top-0 hidden h-24 w-full sm:block"
      viewBox="0 0 100 28"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="processArc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#D9A441" stopOpacity="0" />
          <stop offset="50%" stopColor="#D9A441" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#D9A441" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M12.5 24 Q 25 2 37.5 24" stroke="url(#processArc)" strokeWidth="0.7" fill="none" />
      <path d="M37.5 24 Q 50 2 62.5 24" stroke="url(#processArc)" strokeWidth="0.7" fill="none" />
      <path d="M62.5 24 Q 75 2 87.5 24" stroke="url(#processArc)" strokeWidth="0.7" fill="none" />
    </svg>
  );
}

export function ProcessSection() {
  return (
    <section id="proceso" className="relative overflow-hidden bg-navy px-6 py-16 text-cream md:py-20">
      <div
        className="pointer-events-none absolute inset-0 -z-0 hidden lg:block"
        aria-hidden="true"
      >
        <div className="absolute -left-16 top-0 h-[22rem] w-[22rem] rounded-full bg-gold/[0.12] blur-[100px]" />
        <div className="absolute -right-10 bottom-0 h-[24rem] w-[24rem] rounded-full bg-accent/[0.10] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl text-center md:mx-auto md:text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-cream/60">
            Cómo funciona
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
            De la primera llamada a un proceso bajo control, en menos de 30 días
          </h2>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl pt-8">
          <ConnectorArcs />

          <div className="grid grid-cols-2 gap-x-4 gap-y-14 sm:grid-cols-4 sm:gap-x-0">
            {STEPS.map((item) => (
              <div key={item.step} className="relative flex flex-col items-center px-2 text-center">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-navy text-gold shadow-[0_0_0_4px_rgba(217,164,65,0.9),0_10px_25px_rgba(0,0,0,0.45)]">
                  <svg viewBox="0 0 24 24" className="h-7 w-7">
                    {item.icon}
                  </svg>
                </div>

                <div className="relative -mt-4 flex w-full max-w-[10.5rem] flex-col items-center rounded-2xl border border-gold/25 bg-cream/[0.05] px-3 pb-5 pt-7">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-md bg-gold px-2.5 py-0.5 font-display text-xs font-bold text-navy shadow-md">
                    {item.step}
                  </span>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wide text-gold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-cream/65">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
