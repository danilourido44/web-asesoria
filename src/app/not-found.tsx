import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="relative overflow-hidden bg-navy px-6 py-28 text-cream md:py-36">
          <div
            className="pointer-events-none absolute inset-0 -z-0 hidden lg:block"
            aria-hidden="true"
          >
            <div className="animate-aurora absolute left-[8%] top-[10%] h-[22rem] w-[22rem] rounded-full bg-gold/[0.15] blur-[100px]" />
            <div className="animate-aurora-slow absolute bottom-[-6rem] right-[10%] h-[24rem] w-[24rem] rounded-full bg-accent/[0.12] blur-[110px]" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <p
              className="font-display select-none text-[8rem] font-bold leading-none text-cream/35 md:text-[10rem]"
              aria-hidden="true"
            >
              404
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold leading-tight md:text-4xl">
              Esta página se ha extraviado en el agujero documental
            </h1>
            <p className="mx-auto mt-5 max-w-md text-base leading-7 text-cream/70">
              El enlace que has seguido no existe o se ha movido. Nada grave —
              te devolvemos al sitio.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-sm transition-transform hover:scale-[1.02]"
              >
                Volver al inicio
              </Link>
              <Link
                href="/#contacto"
                className="rounded-full border border-cream/25 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                Contactar con Confidyx
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
