import { Header } from "@/components/Header";
import { ComoTrabajamosSection } from "@/components/ComoTrabajamosSection";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { PillarsSection } from "@/components/PillarsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Confidyx",
  description:
    "Ayudamos a despachos de asesoría fiscal, contable y laboral a atender más clientes con el mismo equipo, poniendo bajo control su documentación, expedientes y vencimientos.",
  areaServed: "ES",
  audience: {
    "@type": "Audience",
    audienceType: "Despachos de asesoría fiscal, contable y laboral",
  },
};

export default function Home() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
      />
      <Header />
      <main className="flex-1">
        <ComoTrabajamosSection />
        <Hero />
        <ProblemSection />
        <PillarsSection />
        <ProcessSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
