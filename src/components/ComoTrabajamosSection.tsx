"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

// Hero panorámico (estilo "cabecera de tienda grande": texto enorme a un
// lado, demo real al otro, a todo lo ancho) para las 3 demos reales del
// producto. Los vídeos nacieron en 9:16 — en vez de recortarlos para
// forzarlos a 16:9 (se probó: deja solo un trozo irreconocible del
// contenido), se mantienen íntegros como la pieza "dispositivo" de un
// layout a dos columnas, que es lo que hace panorámica a la sección en
// sí sin perder nada de lo que cuenta cada demo.
const SLIDES = [
  {
    id: "bandeja",
    label: "Bandeja Cero Documentos",
    description:
      "Recibe, ordena, renombra y clasifica automáticamente facturas, nóminas y justificantes de email, WhatsApp y carpetas.",
    src: "/videos/como-trabajamos/bandeja-cero.mp4",
  },
  {
    id: "expediente",
    label: "Expediente Completo 30D",
    description: "Sabe qué debe entregar cada cliente, qué ha enviado y qué falta. Solo avisa a tu equipo ante una excepción.",
    src: "/videos/como-trabajamos/expediente-30d.mp4",
  },
  {
    id: "cierre",
    label: "Cierre Fiscal Blindado",
    description: "Controla cada expediente desde que llega la documentación hasta que queda listo para revisión.",
    src: "/videos/como-trabajamos/cierre-fiscal.mp4",
  },
] as const;

export function ComoTrabajamosSection() {
  const [index, setIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [index]);

  const go = (next: number) => setIndex((next + SLIDES.length) % SLIDES.length);
  const active = SLIDES[index];

  return (
    <section id="como-trabajamos" className="bg-navy px-6 py-16 md:py-0">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:min-h-[620px] md:grid-cols-2 md:gap-16 md:py-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Cómo trabajamos</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-cream md:text-5xl">
            {active.label}
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-cream/70">{active.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/diagnostico"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition-transform hover:scale-[1.03]"
            >
              Pedir diagnóstico
            </Link>
            <a
              href="/#servicios"
              className="rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              Ver los 3 servicios
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <button
              type="button"
              aria-label="Demo anterior"
              onClick={() => go(index - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Siguiente demo"
              onClick={() => go(index + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  aria-label={`Ver ${s.label}`}
                  onClick={() => go(i)}
                  className={
                    i === index ? "h-2 w-6 rounded-full bg-gold transition-all" : "h-2 w-2 rounded-full bg-cream/25 transition-all hover:bg-cream/50"
                  }
                />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={140} className="mx-auto w-full max-w-[300px] md:ml-auto md:mr-0">
          <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] border border-cream/10 shadow-2xl shadow-black/40">
            {SLIDES.map((s, i) => (
              <video
                key={s.id}
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  i === index ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                src={s.src}
                muted
                loop
                playsInline
                autoPlay={i === 0}
                preload={i === 0 ? "auto" : "none"}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
