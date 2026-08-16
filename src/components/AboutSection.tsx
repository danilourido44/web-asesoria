export function AboutSection() {
  return (
    <section id="nosotros" className="bg-mist px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">
            Sobre Confidyx
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy md:text-4xl">
            Nació de ver el mismo problema, despacho tras despacho
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-ink/80">
            <p>
              Antes de Confidyx, vimos el mismo patrón una y otra vez en
              despachos de asesoría fiscal, contable y laboral: equipos
              enteros perdiendo horas cada semana en descargar, renombrar y
              perseguir documentos que sus clientes mandaban por email,
              WhatsApp o donde fuera. No era un problema de talento — era un
              agujero negro documental que nadie había diseñado para que
              funcionara bien.
            </p>
            <p>
              El quiebre llegó al entender que la solución no era contratar
              más gente, sino poner orden real en cómo entra y se sigue la
              documentación. Así nació Confidyx: proyectos que se ponen en
              marcha en menos de 30 días, con revisión humana en todo lo
              sensible, para que los despachos ganen capacidad sin quemar a
              su equipo.
            </p>
          </div>
          <p className="mt-6 font-display text-lg font-semibold text-navy">
            — Dani, fundador de Confidyx
          </p>
        </div>

        <div className="rounded-2xl bg-navy px-8 py-10 text-cream">
          <p className="font-display text-2xl font-bold leading-snug">
            “Nuestra misión: que la tecnología libere tiempo humano, nunca lo
            sustituya.”
          </p>
          <p className="mt-6 text-sm leading-6 text-cream/70">
            Hoy ayudamos a asesorías a atender más clientes con el mismo
            equipo — sin urgencias de última hora y sin que crecer signifique
            contratar sin parar.
          </p>
        </div>
      </div>
    </section>
  );
}
