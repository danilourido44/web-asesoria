import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Reservar una llamada — Confidyx",
  description:
    "Elige un hueco en el calendario y reserva tu Diagnóstico Documental Express gratuito con Confidyx.",
};

const BOOKING_URL =
  "https://calendar.google.com/appointments/schedules/AcZssZ0ke7FNA90uIsI1pGbNKGz6e0Z6OzV8K_c4cFrUtz6ea2miy5ENR6vbfDi50Enj78z7W4Mu6bKu";

export default function ReservarLlamadaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="relative overflow-hidden bg-navy px-6 py-16 text-cream md:py-20">
          <div
            className="pointer-events-none absolute inset-0 -z-0 hidden lg:block"
            aria-hidden="true"
          >
            <div className="animate-aurora-slow absolute -left-10 top-0 h-[22rem] w-[22rem] rounded-full bg-gold/[0.12] blur-[100px]" />
            <div className="animate-aurora absolute -right-16 bottom-0 h-[24rem] w-[24rem] rounded-full bg-accent/[0.10] blur-[110px]" />
          </div>
          <div className="relative mx-auto max-w-3xl text-center">
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cream/60 hover:text-cream"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path
                  d="M15 6L9 12L15 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Volver
            </Link>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-cream/60">
              Diagnóstico Documental Express
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
              Reserva tu llamada
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-cream/75">
              Elige el hueco que mejor te venga. 30 minutos, sin compromiso,
              para ver cuántas horas al mes se pierden en el agujero
              documental de tu despacho.
            </p>
          </div>
        </div>

        <div className="px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-mist shadow-sm">
            <iframe
              src={BOOKING_URL}
              title="Reservar una llamada con Confidyx"
              width="100%"
              height="750"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-6 text-muted">
            ¿Prefieres escribirnos en vez de llamar?{" "}
            <Link href="/#contacto" className="font-semibold text-navy underline underline-offset-2">
              Vuelve al formulario de contacto
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
