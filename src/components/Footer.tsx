import { Logo } from "./Logo";

// Con "/" delante: si ya estás en la portada salta a la sección, si
// estás en otra página (diagnóstico, reservar llamada...) te lleva primero a
// la portada y luego a la sección, en vez de no hacer nada.
const FOOTER_LINKS = [
  { href: "/#problema", label: "El problema" },
  { href: "/#proceso", label: "Cómo funciona" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#nosotros", label: "Nosotros" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/confidyx/",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61593554554232",
    icon: (
      <path
        d="M14 8.5h2.5V5h-2.5C11.5 5 10 6.6 10 9v2H8v3.5h2V21h3.5v-6.5H16l.5-3.5h-3V9c0-.6.2-1 1-1z"
        fill="currentColor"
      />
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-navy px-6 pb-28 pt-16 text-cream lg:pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div>
            <Logo variant="invertida" width={170} />
            <p className="mt-4 max-w-xs text-sm leading-6 text-cream/60">
              El fin del agujero negro documental. Vendemos tiempo liberado y
              tranquilidad, no inteligencia artificial.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-cream/50">
              Navegación
            </p>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/75 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-cream/50">
              Contacto
            </p>
            <ul className="mt-4 space-y-2.5">
            </ul>
            <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-cream/15 px-3 py-1.5 text-xs text-cream/60">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-accent-bright" fill="none">
                <path d="M12 3l7 3v5c0 5-3.4 8.4-7 10-3.6-1.6-7-5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              Datos cifrados y conformes con el RGPD
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Confidyx. Todos los derechos reservados.</span>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <span>Hecho para despachos que quieren crecer sin volverse locos.</span>
            <a
              href="/#como-trabajamos"
              className="inline-flex items-center gap-1.5 font-semibold text-cream/70 hover:text-gold"
            >
              Volver arriba
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
                <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
