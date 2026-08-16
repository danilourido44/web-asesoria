const STEPS = [
  {
    step: "1",
    title: "Diagnóstico Documental Express",
    description:
      "30 minutos para ver juntos cuántas horas al mes se están yendo en tu agujero negro documental, y qué número real hay detrás.",
  },
  {
    step: "2",
    title: "Diseño del proceso",
    description:
      "Definimos qué necesita tu despacho: Bandeja Cero Documentos, Expediente Completo 30D, Cierre Fiscal Blindado — o los tres.",
  },
  {
    step: "3",
    title: "Puesta en marcha",
    description:
      "Implantación en menos de 30 días, con visibilidad total del proceso desde el primer día. Nada de cajas negras.",
  },
  {
    step: "4",
    title: "Revisión humana continua",
    description:
      "Automatizamos lo repetitivo. Las decisiones sensibles las revisa siempre alguien de tu equipo.",
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

        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {STEPS.map((item, i) => (
            <div key={item.step} className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold font-display text-lg font-bold text-navy">
                {item.step}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-cream/70">
                {item.description}
              </p>
              {i < STEPS.length - 1 && (
                <div
                  className="absolute right-[-1rem] top-5 hidden h-px w-8 bg-cream/20 md:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
