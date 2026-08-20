"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { StaggerText } from "./StaggerText";
import { handleSpotlightMove } from "@/lib/spotlight";

const STORY = [
  {
    tag: "Antes",
    photo: "/photos/story-antes.jpg",
    caption:
      "Equipos enteros perdiendo horas cada semana descargando, renombrando y persiguiendo documentos por email, WhatsApp o donde fuera.",
  },
  {
    tag: "El quiebre",
    photo: "/photos/story-quiebre.jpg",
    caption:
      "La solución no era contratar más gente, sino poner orden real en cómo entra y se sigue la documentación.",
  },
  {
    tag: "Después",
    photo: "/photos/story-despues.jpg",
    caption:
      "Proyectos que se ponen en marcha en menos de 30 días, con revisión humana en todo lo sensible que importa.",
  },
];

function StoryArrow() {
  return (
    <div className="hidden shrink-0 items-center justify-center md:flex" aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold/60">
        <path
          d="M4 12H20M13 5L20 12L13 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

function StoryPanel({ step }: { step: (typeof STORY)[number] }) {
  return (
    <div
      onMouseMove={handleSpotlightMove}
      className="spotlight relative flex-1 overflow-hidden rounded-2xl border border-mist bg-cream"
    >
      <div className="relative h-40">
        <Image
          src={step.photo}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover grayscale-[8%] saturate-[0.9]"
        />
        <div className="absolute inset-0 bg-navy/20" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-cream via-cream/10 to-transparent"
          aria-hidden="true"
        />
        <span className="absolute left-3 top-3 rounded-full bg-navy/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-gold backdrop-blur-sm">
          {step.tag}
        </span>
      </div>
      <p className="relative px-4 py-4 text-sm leading-6 text-ink/75">{step.caption}</p>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-mist px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">
            Sobre Confidyx
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy md:text-4xl">
            <StaggerText text="Nació de ver el mismo problema, despacho tras despacho" />
          </h2>
          <p className="mt-5 text-base leading-7 text-ink/75">
            Antes de Confidyx, vimos el mismo patrón una y otra vez en despachos
            de asesoría fiscal, contable y laboral. No era un problema de
            talento — era un agujero negro documental que nadie había
            diseñado para que funcionara bien.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-stretch">
          {STORY.flatMap((step, i) => {
            const panel = (
              <Reveal key={`panel-${step.tag}`} delay={i * 120} className="flex md:flex-1">
                <StoryPanel step={step} />
              </Reveal>
            );
            if (i === STORY.length - 1) return [panel];
            return [panel, <StoryArrow key={`arrow-${step.tag}`} />];
          })}
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <Reveal>
            <p className="text-base leading-7 text-ink/80">
              El quiebre llegó al entender que la solución no era contratar
              más gente, sino poner orden real en cómo entra y se sigue la
              documentación. Así nació Confidyx: proyectos que se ponen en
              marcha en menos de 30 días, con revisión humana en todo lo
              sensible, para que los despachos ganen capacidad sin quemar a
              su equipo.
            </p>
            <p className="mt-6 font-display text-lg font-semibold text-navy">
              — Dani, fundador de Confidyx
            </p>
          </Reveal>

          <Reveal
            delay={150}
            onMouseMove={handleSpotlightMove}
            className="spotlight spotlight-dark rounded-2xl bg-navy px-8 py-10 text-cream"
          >
            <p className="font-display text-2xl font-bold leading-snug">
              “Nuestra misión: que la tecnología <span className="text-gold">libere tiempo humano</span>, nunca lo
              sustituya.”
            </p>
            <p className="mt-6 text-sm leading-6 text-cream/70">
              Hoy ayudamos a asesorías a atender más clientes con el mismo
              equipo — sin urgencias de última hora y sin que crecer signifique
              contratar sin parar.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
