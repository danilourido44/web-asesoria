const STATS = [
  { value: "15–20h", label: "recuperadas al mes por despacho" },
  { value: "<30 días", label: "para poner el proceso en marcha" },
  { value: "100%", label: "revisión humana en lo sensible" },
];

export function Hero() {
  return (
    <section id="inicio" className="px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">
            Para despachos de asesoría fiscal, contable y laboral
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-navy sm:text-5xl md:text-6xl">
            El fin del agujero negro documental.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/80">
            Ayudamos a despachos de 5 a 30 empleados a atender más clientes
            con el mismo equipo — eliminando el trabajo mecánico de gestionar
            documentación y poniendo bajo control sus procesos, vencimientos
            y expedientes.
          </p>
          <p className="mt-3 max-w-2xl text-lg font-semibold text-navy">
            Vendemos tiempo liberado y tranquilidad. No vendemos “IA”.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contacto"
              className="rounded-full bg-gold px-7 py-3.5 text-center text-sm font-semibold text-navy shadow-sm transition-transform hover:scale-[1.02]"
            >
              Pedir Diagnóstico Documental Express →
            </a>
            <a
              href="#proceso"
              className="rounded-full border border-navy/20 px-7 py-3.5 text-center text-sm font-semibold text-navy transition-colors hover:bg-mist"
            >
              Ver cómo funciona
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-navy/10 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-navy px-6 py-8">
              <div className="font-display text-3xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-cream/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
