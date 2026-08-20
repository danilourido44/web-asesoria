"use client";

import { useEffect, useRef, useState, createElement } from "react";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

type RevealProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  /** Retraso en ms antes de iniciar la transición al entrar en viewport. */
  delay?: number;
  className?: string;
  /** Etiqueta HTML del contenedor — "div" por defecto, "li" dentro de listas. */
  tag?: "div" | "li";
};

/**
 * Envuelve contenido y lo revela con un fundido + desplazamiento suave la
 * primera vez que entra en el viewport. Respeta prefers-reduced-motion
 * (ver .reveal en globals.css) y no re-anima al volver a hacer scroll.
 * Cualquier otra prop (onMouseMove, onClick…) se reenvía al elemento real.
 */
export function Reveal({ children, delay = 0, className = "", tag = "div", style, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const mergedStyle: CSSProperties & { "--reveal-delay"?: string } = {
    "--reveal-delay": `${delay}ms`,
    ...style,
  };

  return createElement(
    tag,
    { ref, className: `reveal ${visible ? "reveal-visible" : ""} ${className}`, style: mergedStyle, ...rest },
    children,
  );
}
