import Image from "next/image";

type LockupVariant = "principal" | "invertida";

// Logotipo oficial completo (icono + wordmark "CONFIDYX"), tal cual el
// manual de identidad. "principal" usa el archivo con fondo transparente
// (funciona sobre cualquier fondo claro); "invertida" trae el fondo navy
// ya incluido, para secciones oscuras.
const LOCKUP_SRC: Record<LockupVariant, string> = {
  principal: "/logo/confidyx-transparente.png",
  invertida: "/logo/confidyx-invertida.png",
};

export function Logo({
  variant = "principal",
  width = 160,
  className = "",
}: {
  variant?: LockupVariant;
  width?: number;
  className?: string;
}) {
  return (
    <Image
      src={LOCKUP_SRC[variant]}
      alt="Confidyx"
      width={512}
      height={512}
      style={{ width, height: "auto" }}
      className={className}
      priority
    />
  );
}

/**
 * Versión compacta para barras horizontales (header, botones): el icono
 * oficial en avatar + el wordmark maquetado en Space Grotesk, en vez del
 * lockup cuadrado completo (que a alturas de navbar queda demasiado
 * pequeño para leerse).
 */
export function LogoMark({
  inverted = false,
  className = "",
}: {
  inverted?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo/confidyx-avatar.png"
        alt=""
        width={696}
        height={696}
        className="h-8 w-8 shrink-0 rounded-md"
        aria-hidden="true"
        priority
      />
      <span
        className={`font-display text-lg font-bold tracking-tight ${
          inverted ? "text-cream" : "text-navy"
        }`}
      >
        CONFIDYX
      </span>
      <span className="sr-only">Confidyx</span>
    </span>
  );
}
