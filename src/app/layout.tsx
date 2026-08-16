import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Confidyx — El fin del agujero negro documental",
  description:
    "Ayudamos a despachos de asesoría fiscal, contable y laboral a atender más clientes con el mismo equipo. Bandeja Cero Documentos, Expediente Completo 30D y Cierre Fiscal Blindado, en marcha en menos de 30 días.",
  keywords: [
    "asesoría fiscal",
    "asesoría laboral",
    "gestión documental despachos",
    "automatización asesorías",
    "software para gestorías",
  ],
  openGraph: {
    title: "Confidyx — El fin del agujero negro documental",
    description:
      "Recupera 15-20 horas al mes de trabajo administrativo. Revisión humana en todo lo que importa. Más clientes, con el mismo equipo.",
    locale: "es_ES",
    type: "website",
    siteName: "Confidyx",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
