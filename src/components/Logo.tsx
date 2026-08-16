type LogoVariant = "principal" | "invertida" | "avatar";

/**
 * Icono de documento con esquina doblada + check interior, recreado en SVG
 * a partir del manual de identidad Confidyx. El check es siempre verde
 * (#2E9E6B); el documento y el wordmark cambian de color según el fondo.
 */
export function Logo({
  variant = "principal",
  className = "",
}: {
  variant?: LogoVariant;
  className?: string;
}) {
  const isInverted = variant === "invertida";
  const inkClass = isInverted ? "text-cream" : "text-navy";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className={`h-8 w-8 shrink-0 ${inkClass}`}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14 4H38L50 16V60H14V4Z"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M38 4V16H50"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M20 33L28 41L45 22"
          stroke="#2E9E6B"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {variant !== "avatar" && (
        <span
          className={`font-display text-lg font-bold tracking-tight ${inkClass}`}
        >
          CONFIDYX
        </span>
      )}
      <span className="sr-only">Confidyx</span>
    </span>
  );
}
