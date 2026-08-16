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

        <div className="relative mt-14">
          <div
            className="pointer-events-none absolute left-6 right-6 top-6 hidden border-t-2 border-dashed border-cream/15 md:block"
            aria-hidden="true"
          />
          <div className="grid gap-10 md:grid-cols-4 md:gap-8">
            {STEPS.map((item) => (
              <div key={item.step} className="relative">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gold font-display text-xl font-bold text-navy ring-8 ring-navy">
                  {item.step}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-cream/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
