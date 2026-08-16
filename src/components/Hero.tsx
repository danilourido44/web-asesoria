import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section id="inicio" className="px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="max-w-xl">
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

        <HeroVisual />
      </div>
    </section>
  );
}
