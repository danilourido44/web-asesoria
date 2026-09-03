"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/services-data";
import { handleSpotlightMove } from "@/lib/spotlight";

const CONTACT_EMAIL = "confidyx@gmail.com";

type Signal = "bandeja" | "expediente" | "cierre" | null;

type QuestionOption = {
  text: string;
  detail: string;
  signal: Signal;
  hours?: "bajo" | "medio" | "alto" | "muyalto";
};

type Question = {
  question: string;
  options: QuestionOption[];
};

const QUESTIONS: Question[] = [
  {
    question: "¿Cómo llega hoy la documentación de tus clientes?",
    options: [
      {
        text: "Por email, WhatsApp y carpetas, sin un orden común",
        detail: "Cada cliente a su manera, difícil de seguir",
        signal: "bandeja",
      },
      {
        text: "Tenemos un canal principal, pero siempre se cuela algo por otro lado",
        detail: "",
        signal: "bandeja",
      },
      {
        text: "Bastante ordenado, el problema está en otra parte",
        detail: "",
        signal: null,
      },
    ],
  },
  {
    question: "Cuando a un cliente le falta un documento, ¿qué pasa hoy?",
    options: [
      {
        text: "Alguien tiene que acordarse de perseguirlo",
        detail: "Llamadas, emails, WhatsApps de recordatorio",
        signal: "expediente",
      },
      {
        text: "Mandamos recordatorios, pero hay que revisar a mano quién respondió",
        detail: "",
        signal: "expediente",
      },
      {
        text: "Tenemos un sistema que lo controla bien",
        detail: "",
        signal: null,
      },
    ],
  },
  {
    question: "¿Cuántas horas a la semana se van en este tipo de tareas?",
    options: [
      { text: "Menos de 5 horas", detail: "", signal: null, hours: "bajo" },
      { text: "Entre 5 y 10 horas", detail: "", signal: null, hours: "medio" },
      { text: "Entre 10 y 15 horas", detail: "", signal: null, hours: "alto" },
      { text: "Más de 15 horas", detail: "", signal: null, hours: "muyalto" },
    ],
  },
  {
    question: "Cuando se acerca un vencimiento, ¿cómo estáis de tranquilos?",
    options: [
      {
        text: "Hay sustos de última hora, casi siempre",
        detail: "",
        signal: "cierre",
      },
      {
        text: "Vamos bien, pero depende mucho de quién esté ese día",
        detail: "",
        signal: "cierre",
      },
      {
        text: "Todo bajo control, sin sorpresas",
        detail: "",
        signal: null,
      },
    ],
  },
  {
    question: "¿Cuántos empleados tiene el despacho?",
    options: [
      { text: "Menos de 5", detail: "", signal: null },
      { text: "Entre 5 y 15", detail: "", signal: null },
      { text: "Entre 15 y 30", detail: "", signal: null },
      { text: "Más de 30", detail: "", signal: null },
    ],
  },
];

const HOURS_RANGE: Record<string, string> = {
  bajo: "20–25 h/mes",
  medio: "25–40 h/mes",
  alto: "40–55 h/mes",
  muyalto: "55–60+ h/mes",
};

function QuestionIcon({ index }: { index: number }) {
  const icons = [
    <path key="0" d="M4 6H20V18H4V6Z M4 6L12 13L20 6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" fill="none" />,
    <path key="1" d="M9 6l-2 2m0 0-2 2m2-2 2 2m-2-2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8m-10 0h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
    <path key="2" d="M12 7V12L15.5 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  ];
  return icons[index] || icons[0];
}

export function DiagnosticoQuiz() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({ bandeja: 0, expediente: 0, cierre: 0 });
  const [hours, setHours] = useState<string>("medio");

  const total = QUESTIONS.length;
  const finished = step >= total;

  function handleAnswer(opt: QuestionOption) {
    if (opt.signal) {
      setScores((prev) => ({ ...prev, [opt.signal as string]: prev[opt.signal as string] + 1 }));
    }
    if (opt.hours) setHours(opt.hours);
    setStep((s) => s + 1);
  }

  function handleBack() {
    setStep((s) => Math.max(0, s - 1));
  }

  function handleRestart() {
    setStep(0);
    setScores({ bandeja: 0, expediente: 0, cierre: 0 });
    setHours("medio");
  }

  // servicio recomendado: el de mayor puntuación, con "expediente" como
  // desempate por defecto (es nuestro punto de partida más barato).
  const recommendedId =
    scores.cierre > scores.bandeja && scores.cierre > scores.expediente
      ? "cierre"
      : scores.bandeja > scores.expediente
        ? "bandeja"
        : "expediente";
  const recommended = SERVICES.find((s) => s.id === recommendedId)!;

  const mailSubject = encodeURIComponent(`He hecho el diagnóstico — interesado en ${recommended.name}`);
  const mailBody = encodeURIComponent(
    `Hola Confidyx,\n\nHe hecho el test de diagnóstico en la web y me habéis recomendado "${recommended.name}".\n\nMe gustaría que habláramos sobre mi despacho.\n\nUn saludo,`,
  );

  if (finished) {
    return (
      <div
        onMouseMove={handleSpotlightMove}
        className="spotlight spotlight-dark mx-auto max-w-2xl rounded-2xl bg-navy p-8 text-cream md:p-10"
      >
        <p className="text-sm font-semibold uppercase tracking-wide text-cream/50">
          Tu diagnóstico
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold leading-tight md:text-3xl">
          Estimamos que estáis perdiendo{" "}
          <span className="text-gold">{HOURS_RANGE[hours]}</span> en tareas
          documentales que podrían ir solas.
        </h2>

        <div className="mt-8 rounded-xl border border-cream/15 bg-cream/[0.04] p-6">
          {recommended.badge && (
            <span className="mb-3 inline-block w-fit rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy">
              {recommended.badge}
            </span>
          )}
          <p className="text-xs font-semibold uppercase tracking-wide text-cream/50">
            Te recomendamos
          </p>
          <h3 className="mt-1 font-display text-xl font-bold">{recommended.name}</h3>
          <p className="mt-3 text-sm leading-6 text-cream/75">{recommended.description}</p>
          <ul className="mt-4 space-y-2">
            {recommended.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm leading-6 text-cream/80">
                <svg viewBox="0 0 24 24" className="mt-1 h-3.5 w-3.5 shrink-0 text-accent-bright" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-sm leading-6 text-cream/70">
          Esto es una estimación orientativa a partir de tus respuestas, no un
          análisis definitivo — el siguiente paso real es hablarlo 30 minutos
          con nosotros.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/reservar-llamada"
            onMouseMove={handleSpotlightMove}
            className="spotlight spotlight-btn flex-1 rounded-full bg-gold px-6 py-3.5 text-center text-sm font-semibold text-navy transition-transform hover:scale-[1.02]"
          >
            Agendar llamada de 30 min
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${mailSubject}&body=${mailBody}`}
            onMouseMove={handleSpotlightMove}
            className="spotlight flex-1 rounded-full border border-cream/25 px-6 py-3.5 text-center text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
          >
            Mandar por email
          </a>
        </div>

        <button
          type="button"
          onClick={handleRestart}
          className="mt-5 text-xs font-semibold text-cream/50 underline underline-offset-4 hover:text-cream/80"
        >
          Repetir el test
        </button>
      </div>
    );
  }

  const q = QUESTIONS[step];

  return (
    <div
      onMouseMove={handleSpotlightMove}
      className="spotlight mx-auto max-w-2xl rounded-2xl bg-cream p-8 shadow-sm md:p-10"
    >
      <div className="flex items-center gap-2" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={total}>
        {QUESTIONS.map((_, i) => (
          <div
            key={i}
            className={
              i <= step
                ? "h-1.5 flex-1 rounded-full bg-gold transition-colors"
                : "h-1.5 flex-1 rounded-full bg-mist transition-colors"
            }
          />
        ))}
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">
        Pregunta {step + 1} de {total}
      </p>

      <div className="mt-3 flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
          <svg viewBox="0 0 24 24" className="h-5 w-5">
            <QuestionIcon index={step % 3} />
          </svg>
        </div>
        <h2 className="mt-1.5 font-display text-xl font-bold leading-snug text-navy md:text-2xl">
          {q.question}
        </h2>
      </div>

      <div className="mt-6 space-y-3">
        {q.options.map((opt) => (
          <button
            key={opt.text}
            type="button"
            onClick={() => handleAnswer(opt)}
            onMouseMove={handleSpotlightMove}
            className="spotlight block w-full rounded-xl border border-mist bg-cream px-5 py-3.5 text-left transition-colors hover:border-gold/50 hover:bg-mist/40"
          >
            <span className="block text-sm font-semibold text-navy">{opt.text}</span>
            {opt.detail && (
              <span className="mt-0.5 block text-xs leading-5 text-ink/60">{opt.detail}</span>
            )}
          </button>
        ))}
      </div>

      {step > 0 && (
        <button
          type="button"
          onClick={handleBack}
          className="mt-6 text-xs font-semibold text-muted hover:text-navy"
        >
          ← Volver a la anterior
        </button>
      )}
    </div>
  );
}
