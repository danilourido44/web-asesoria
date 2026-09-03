"use client";

import Link from "next/link";
import { HeroVisual } from "./HeroVisual";
import { HeroBackdrop } from "./HeroBackdrop";
import { Reveal } from "./Reveal";
import { StaggerText } from "./StaggerText";
import { handleSpotlightMove } from "@/lib/spotlight";

// Cifras reales de Confidyx (ver confidyx_servicios_high_ticket_resumen.md),
// mostradas como chips flotantes bajo los CTA — la parte "de datos" del
// hero, en vez de dejar el hueco en blanco.
const DATA_CHIPS = [
  {
    label: "750–1.800 €/mes ahorrados",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <path
          d="M9 9.5C9 8 10.3 7 12 7C13.5 7 14.6 7.7 14.9 8.7 M9 14.5C9 16 10.3 17 12 17C13.7 17 15 16 15 14.4C15 13 13.8 12.4 12 12C10.2 11.6 9 11 9 9.6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
        />
      </>
    ),
  },
  {
    label: "Hasta 60 h/mes liberadas",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <path
          d="M12 7V12L15.5 14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </>
    ),
  },
  {
    label: "Emails y WhatsApps, bajo control",
    icon: (
      <path
        d="M4 6H20V18H4V6Z M4 6L12 13L20 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
];

export function Hero() {
  return (
    <section id="inicio" className="relative px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Halo difuminado compartido: une visualmente el panel de proceso con
          el texto ("Para despachos de asesoría fiscal...") en vez de dejar
          el panel como una tarjeta aislada sobre fondo en blanco. */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden lg:block"
        aria-hidden="true"
      >
        <div className="animate-aurora absolute left-[4%] top-[2%] h-[24rem] w-[24rem] rounded-full bg-gold/40 blur-[80px]" />
        <div className="animate-aurora-slow absolute right-[6%] top-0 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-[90px]" />
        <div className="animate-aurora absolute bottom-[-4rem] right-[16%] h-[20rem] w-[20rem] rounded-full bg-navy/30 blur-[70px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="relative max-w-xl">
          <HeroBackdrop />
          <Reveal className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">
              Para despachos de asesoría fiscal, contable y laboral
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-navy sm:text-5xl md:text-6xl">
              <StaggerText text="Fin del agujero documental." step={70} />
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/80">
              Ayudamos a despachos de 5 a 30 empleados a atender más clientes
              con el mismo equipo — eliminando el trabajo mecánico de
              gestionar documentación y poniendo bajo control sus procesos,
              vencimientos y expedientes.
            </p>
            <p className="text-shine mt-3 max-w-2xl text-lg font-semibold text-navy">
              Vendemos tiempo liberado y tranquilidad. No vendemos “IA”.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/diagnostico"
                onMouseMove={handleSpotlightMove}
                className="spotlight spotlight-btn rounded-full bg-gold px-7 py-3.5 text-center text-sm font-semibold text-navy shadow-sm transition-transform hover:scale-[1.02]"
              >
                Pedir Diagnóstico Documental Express →
              </Link>
              <a
                href="#proceso"
                className="rounded-full border border-navy/20 px-7 py-3.5 text-center text-sm font-semibold text-navy transition-colors hover:bg-mist"
              >
                Ver cómo funciona
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {DATA_CHIPS.map((chip, i) => (
                <div
                  key={chip.label}
                  className="animate-drift flex items-center gap-2 rounded-full border border-navy/10 bg-white/70 px-3.5 py-2 text-xs font-semibold text-navy/70 shadow-sm backdrop-blur-sm"
                  style={{
                    animationDuration: `${7 + i}s`,
                    animationDelay: `${i * 0.4}s`,
                    ["--drift-rot" as string]: i % 2 === 0 ? "-1.5deg" : "1.5deg",
                  }}
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-gold">
                    {chip.icon}
                  </svg>
                  {chip.label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
