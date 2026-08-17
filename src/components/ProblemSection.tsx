const PAIN_POINTS = [
  {
    before: "La documentación llega ",
    emphasis: "por todas partes",
    after: ": email, WhatsApp, carpetas sueltas.",
  },
  {
    before: "Tu equipo ",
    emphasis: "pierde horas cada semana",
    after: " clasificando archivos a mano.",
  },
  {
    before: "Perseguís ",
    emphasis: "manualmente",
    after: " a quien no ha mandado lo que falta.",
  },
  {
    before: "Los vencimientos dependen de ",
    emphasis: "la memoria de una persona",
    after: ": si falta, algo se cuela.",
  },
];

export function ProblemSection() {
  return (
    <section id="problema" className="bg-mist px-6 py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">
            ¿Te suena esto?
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-navy md:text-4xl">
            El agujero negro documental
          </h2>
          <p className="mt-4 text-base leading-7 text-ink/75">
            No es que tu equipo trabaje poco o mal. Es que nadie ha diseñado
            un sistema para que la documentación entre ordenada desde el
            primer contacto.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
          {PAIN_POINTS.map((point) => (
            <li
              key={point.emphasis}
              className="flex items-start gap-3 rounded-xl bg-cream px-4 py-3.5 shadow-sm"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy/10">
                <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 text-navy" fill="none">
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-sm leading-6 text-ink/70">
                {point.before}
                <span className="font-bold text-gold">{point.emphasis}</span>
                {point.after}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
