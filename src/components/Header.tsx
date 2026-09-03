"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogoMark } from "./Logo";
import { handleSpotlightMove } from "@/lib/spotlight";

const NAV_LINKS = [
  { href: "#problema", label: "El problema" },
  { href: "#proceso", label: "Cómo funciona" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(
      (el): el is HTMLElement => !!el,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-mist bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" onClick={() => setOpen(false)}>
          <LogoMark />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                activeId === link.href.slice(1)
                  ? "rounded-full bg-mist px-3.5 py-1.5 text-sm font-semibold text-navy transition-colors"
                  : "rounded-full px-3.5 py-1.5 text-sm font-medium text-ink/70 transition-colors hover:text-navy"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          href="/diagnostico"
          onMouseMove={handleSpotlightMove}
          className="spotlight spotlight-btn hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-transform hover:scale-[1.03] lg:inline-block"
        >
          Pedir diagnóstico
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Abrir menú"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-mist lg:hidden"
        >
          <span className="sr-only">Menú</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-navy" fill="none">
            {open ? (
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-mist bg-cream px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink/80"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/diagnostico"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold px-5 py-2.5 text-center text-sm font-semibold text-navy"
            >
              Pedir diagnóstico
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
