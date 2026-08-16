// Textura de fondo detrás del titular del hero: numerales fantasma muy
// tenues (misma técnica que en los pilares), inspirados en la densidad de
// datos del hero de Semrush pero adaptados a un fondo claro y discreto.
// Puramente decorativo: aria-hidden, sin interacción, no interfiere con
// la legibilidad del texto real (que va por encima, en z-10).

export function HeroBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <span className="font-display absolute -bottom-8 -right-6 select-none text-[8rem] font-bold leading-none text-navy/[0.05]">
        30d
      </span>
      <span className="font-display absolute -bottom-10 left-0 select-none text-[6rem] font-bold leading-none text-navy/[0.04]">
        100%
      </span>
    </div>
  );
}
