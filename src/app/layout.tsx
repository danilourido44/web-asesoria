import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ChatWidget } from "@/components/ChatWidget";

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
  metadataBase: new URL("https://confidyx.com"),
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
      "Recupera hasta 60 horas al mes de trabajo administrativo. Revisión humana en todo lo que importa. Más clientes, con el mismo equipo.",
    locale: "es_ES",
    type: "website",
    siteName: "Confidyx",
  },
  icons: {
    // Dos variantes del icono: marca navy sobre fondo claro para navegadores
    // en modo claro, y marca clara sobre fondo navy para modo oscuro — el
    // propio navegador elige cuál servir según prefers-color-scheme.
    icon: [
      { url: "/icon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon-dark.png" }, // fallback para quien no evalúe media (p. ej. bots de buscadores)
    ],
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
        <ChatWidget />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
