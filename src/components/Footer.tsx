import { Logo } from "./Logo";

const FOOTER_LINKS = [
  { href: "#problema", label: "El problema" },
  { href: "#proceso", label: "Cómo funciona" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
];

// NOTA: el perfil de LinkedIn sigue pendiente.
const LEGAL_LINKS = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Cookies", href: "/privacidad#cookies" },
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
