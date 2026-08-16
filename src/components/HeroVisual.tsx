const PIPELINE = [
  {
    name: "Bandeja Cero Documentos",
    status: "Al día",
    icon: (
      <path
        d="M6 3H15L20 8V21H6V3Z M15 3V8H20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  {
    name: "Expediente Completo 30D",
    status: "3 pendientes",
    icon: (
      <path
        d="M4 6H15L18 9V19H4V6Z M8 13L10.5 15.5L15 10.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  {
    name: "Cierre Fiscal Blindado",
    status: "Sin riesgos",
    icon: (
      <path
        d="M12 3L20 6V11C20 16 16.5 19.8 12 21C7.5 19.8 4 16 4 11V6L12 3Z M9 11.5L11 13.5L15.5 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
];

const STATS = [
  { value: "25–60h", label: "al mes" },
  { value: "<30 días", label: "puesta en marcha" },
  { value: "100%", label: "revisión humana" },
];

export function HeroVisual() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-gold/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="animate-float rounded-3xl bg-navy p-6 shadow-2xl shadow-navy/30 sm:p-7">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-cream/50">
            Panel de proceso
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-semibold text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            En marcha
          </span>
        </div>

        <div className="mt-5 rounded-2xl bg-cream/[0.04] p-4">
          <div className="flex items-center justify-between text-[11px] text-cream/50">
            <span>Horas recuperadas / mes</span>
            <span className="font-semibold text-accent">↑ 32%</span>
          </div>
          <svg viewBox="0 0 300 70" className="mt-2 h-16 w-full" fill="none">
            <polyline
              points="6,55 63,46 120,50 177,30 234,34 294,14"
              stroke="#2E9E6B"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw"
            />
            {[6, 63, 120, 177, 234, 294].map((x, i) => (
              <circle
                key={x}
                cx={x}
                cy={[55, 46, 50, 30, 34, 14][i]}
                r="3"
                fill="#2E9E6B"
              />
            ))}
          </svg>
          <div className="mt-1 flex justify-between text-[10px] text-cream/35">
            {["Ene", "Feb", "Mar", "Abr", "May", "Jun"].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>

        <ul className="mt-5 space-y-2.5">
          {PIPELINE.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-3 rounded-xl bg-cream/[0.04] px-3.5 py-3"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cream/10 text-cream">
                <svg viewBox="0 0 24 24" className="h-4 w-4">
                  {item.icon}
                </svg>
              </span>
              <span className="flex-1 text-[13px] font-medium text-cream/90">
                {item.name}
              </span>
              <span className="rounded-full bg-cream/10 px-2 py-1 text-[10px] font-semibold text-cream/60">
                {item.status}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-5 grid grid-cols-3 gap-2.5 border-t border-cream/10 pt-5">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-lg font-bold text-gold">
                {stat.value}
              </div>
              <div className="mt-0.5 text-[10px] leading-tight text-cream/45">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
