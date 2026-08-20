type StaggerTextProps = {
  text: string;
  className?: string;
  /** ms entre palabra y palabra */
  step?: number;
};

/**
 * Divide un titular en palabras y las revela en cascada. No observa el
 * scroll por sí mismo: se activa vía CSS cuando el <Reveal> ancestro añade
 * la clase .reveal-visible (ver .stagger-words en globals.css). Úsalo
 * siempre dentro de un <Reveal>.
 */
export function StaggerText({ text, className = "", step = 45 }: StaggerTextProps) {
  const words = text.split(" ");
  return (
    <span className={`stagger-words ${className}`}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          style={{ ["--word-delay" as string]: `${i * step}ms` }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
