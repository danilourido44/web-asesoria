import { Logo } from "./Logo";

const FOOTER_LINKS = [
  { href: "#problema", label: "El problema" },
  { href: "#proceso", label: "Cómo funciona" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
];

const LEGAL_LINKS = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Cookies", href: "/privacidad#cookies" },
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
  {
    label: "WhatsApp",
    href: "https://wa.me/34649323804",
    icon: (
      <path
        d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Zm0 2a7 7 0 0 1 5.9 10.8l-.2.3.6 2.2-2.3-.6-.3.2A7 7 0 1 1 12 5Zm-2.9 3.3c-.2 0-.5 0-.7.4-.2.4-.9.9-.9 2.1s.9 2.4 1 2.6c.2.2 1.7 2.6 4.1 3.6 2 .9 2.4.7 2.9.7.4 0 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.6-.4-.3-.2-1.5-.8-1.8-.8-.2-.1-.4-.1-.6.2-.2.3-.6.8-.8 1-.1.1-.3.2-.6 0-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.4-1.9-.1-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.1Z"
        fill="currentColor"
      />
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-navy px-6 pb-28 pt-16 text-cream lg:pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
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
              Legal
            </p>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-cream/75 hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Confidyx. Todos los derechos reservados.</span>
          <span>Hecho para despachos que quieren crecer sin volverse locos.</span>
        </div>
      </div>
    </footer>
  );
}
