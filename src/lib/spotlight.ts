import type { MouseEvent } from "react";

/**
 * Handler compartido para el halo que sigue al cursor (clase .spotlight en
 * globals.css). Se define fuera de cualquier componente porque se usa
 * dentro de listas (.map) — un hook no podría llamarse ahí dentro.
 */
export function handleSpotlightMove(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
}
