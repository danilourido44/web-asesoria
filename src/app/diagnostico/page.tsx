import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DiagnosticoQuiz } from "@/components/DiagnosticoQuiz";

export const metadata: Metadata = {
  title: "Diagnóstico Documental Express — Confidyx",
  description:
    "5 preguntas para ver cuánto tiempo se pierde en el agujero documental de tu despacho, y qué servicio de Confidyx encaja mejor.",
};

export default function DiagnosticoPage() {
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
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-cream/60">
              Diagnóstico Documental Express
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
              5 preguntas sobre vuestro agujero documental
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-cream/75">
              Sin registros ni esperas. Al final, una estimación de las horas
              que os cuesta y el servicio de Confidyx que mejor encaja.
            </p>
          </div>
        </div>

        <div className="px-6 py-14 md:py-20">
          <DiagnosticoQuiz />
        </div>
      </main>
      <Footer />
    </>
  );
}
