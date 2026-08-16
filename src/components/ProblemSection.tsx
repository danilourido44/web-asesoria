const PAIN_POINTS = [
  {
    before: "La documentación entra ",
    emphasis: "por todas partes",
    after:
      ": email, WhatsApp, carpetas compartidas, papel escaneado a última hora.",
  },
  {
    before: "Tu equipo ",
    emphasis: "pierde horas cada semana",
    after: " descargando, renombrando y clasificando archivos a mano.",
  },
  {
    before: "Perseguís ",
    emphasis: "manualmente",
    after:
      " a los clientes que no han mandado la nómina o el justificante que falta.",
  },
  {
    before: "Los vencimientos viven en hojas de cálculo sueltas y ",
    emphasis: "en la memoria de quien lleva más tiempo en la casa",
    after: ".",
  },
  {
    before:
      "Cuando esa persona coge vacaciones — o simplemente tiene un mal día — algo ",
    emphasis: "se cuela por las rendijas",
    after: ".",
  },
];

export function ProblemSection() {
  return (
    <section id="problema" className="bg-mist px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">
            ¿Te suena esto?
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy md:text-4xl">
            El agujero negro documental
          </h2>
          <p className="mt-5 text-base leading-7 text-ink/80">
            No es un problema de que tu equipo trabaje poco o mal — trabajáis
            muchísimo, y bien. Es un problema de diseño: nadie ha construido
            nunca un sistema pensado para que la documentación entre ordenada
            desde el primer contacto con el cliente.
          </p>
        </div>

        <ul className="space-y-4">
          {PAIN_POINTS.map((point) => (
            <li
              key={point.emphasis}
              className="flex items-start gap-4 rounded-xl bg-cream px-5 py-4 shadow-sm"
            >
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy/10">
                <svg viewBox="0 0 24 24" className="h-3 w-3 text-navy" fill="none">
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-[15px] leading-6 text-ink/70">
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
