"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { StaggerText } from "./StaggerText";
import { handleSpotlightMove } from "@/lib/spotlight";

const CONTACT_EMAIL = "confidyx@gmail.com";
const CONTACT_PHONE = "649 32 38 04";
const CONTACT_PHONE_HREF = "+34649323804";
const BOOKING_URL =
  "https://calendar.google.com/appointments/schedules/AcZssZ0ke7FNA90uIsI1pGbNKGz6e0Z6OzV8K_c4cFrUtz6ea2miy5ENR6vbfDi50Enj78z7W4Mu6bKu";

const FIELDS = [
  { name: "nombre", label: "Nombre", type: "text", required: true },
  { name: "despacho", label: "Nombre del despacho", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "telefono", label: "Teléfono / WhatsApp", type: "tel", required: false },
];

type Status = "idle" | "sending" | "sent" | "error";
type Mode = "calendar" | "form";

export function ContactSection() {
  const [mode, setMode] = useState<Mode>("calendar");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.error || "No se pudo enviar el mensaje.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setErrorMsg(`No se pudo conectar. Escríbenos directamente a ${CONTACT_EMAIL}`);
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="relative overflow-hidden bg-navy px-6 py-20 text-cream md:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-0 hidden lg:block"
        aria-hidden="true"
      >
        <div className="animate-aurora-slow absolute -left-10 bottom-0 h-[22rem] w-[22rem] rounded-full bg-gold/[0.12] blur-[100px]" />
        <div className="animate-aurora absolute -right-16 top-0 h-[24rem] w-[24rem] rounded-full bg-accent/[0.10] blur-[110px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-cream/60">
            Primer paso
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
            <StaggerText text="Empecemos con un Diagnóstico Documental Express" />
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-cream/75">
            30 minutos para ver juntos cuántas horas al mes se están yendo en
            tu propio agujero negro documental — y qué número real hay
            detrás de esas horas.
          </p>

          <dl className="mt-10 space-y-4 text-sm text-cream/70">
            <div className="flex items-center gap-3">
              <dt className="font-semibold text-cream">Email</dt>
              <dd>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold">
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <dt className="font-semibold text-cream">Teléfono</dt>
              <dd>
                <a href={`tel:${CONTACT_PHONE_HREF}`} className="hover:text-gold">
                  {CONTACT_PHONE}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={150}>
          <div
            role="tablist"
            aria-label="Forma de contacto"
            className="mb-5 flex gap-1 rounded-full bg-cream/10 p-1 text-sm font-semibold"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === "calendar"}
              onClick={() => setMode("calendar")}
              className={
                mode === "calendar"
                  ? "flex-1 rounded-full bg-gold py-2.5 text-navy transition-colors"
                  : "flex-1 rounded-full py-2.5 text-cream/70 transition-colors hover:text-cream"
              }
            >
              Reservar llamada
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === "form"}
              onClick={() => setMode("form")}
              className={
                mode === "form"
                  ? "flex-1 rounded-full bg-gold py-2.5 text-navy transition-colors"
                  : "flex-1 rounded-full py-2.5 text-cream/70 transition-colors hover:text-cream"
              }
            >
              Escribir mensaje
            </button>
          </div>

          {mode === "calendar" ? (
            <div className="overflow-hidden rounded-2xl bg-cream">
              <iframe
                src={BOOKING_URL}
                title="Reservar una llamada con Confidyx"
                width="100%"
                height="650"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          ) : status === "sent" ? (
            <div
              onMouseMove={handleSpotlightMove}
              className="spotlight flex min-h-[420px] flex-col items-center justify-center rounded-2xl bg-cream p-8 text-center"
              role="status"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <svg viewBox="0 0 24 24" className="h-7 w-7 text-accent" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-navy">
                Mensaje enviado
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-ink/70">
                Gracias — hemos recibido tu solicitud y te escribiremos en
                breve a la dirección que nos has dado.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-semibold text-navy underline underline-offset-4 hover:text-gold"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              onMouseMove={handleSpotlightMove}
              className="spotlight rounded-2xl bg-cream p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {FIELDS.map((field) => (
                  <div
                    key={field.name}
                    className={field.name === "email" ? "sm:col-span-2" : ""}
                  >
                    <label
                      htmlFor={field.name}
                      className="mb-1.5 block text-sm font-medium text-navy"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      disabled={status === "sending"}
                      className="w-full rounded-lg border border-mist bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy disabled:opacity-60"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="mensaje"
                  className="mb-1.5 block text-sm font-medium text-navy"
                >
                  Cuéntanos brevemente tu situación (opcional)
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={3}
                  disabled={status === "sending"}
                  className="w-full rounded-lg border border-mist bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy disabled:opacity-60"
                />
              </div>

              {status === "error" && (
                <p role="alert" className="mt-4 rounded-lg border-l-4 border-gold bg-gold/10 px-4 py-3 text-sm text-navy">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                onMouseMove={handleSpotlightMove}
                className="spotlight spotlight-btn mt-6 w-full rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-navy transition-transform hover:scale-[1.01] disabled:cursor-default disabled:opacity-60"
              >
                {status === "sending" ? "Enviando…" : "Pedir mi diagnóstico gratuito"}
              </button>
              <p className="mt-3 text-center text-xs text-ink/50">
                Nunca compartimos tus datos con terceros. Solo los usamos
                para responder a tu consulta.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
