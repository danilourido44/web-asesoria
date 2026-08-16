// NOTA PARA DESARROLLO: el formulario usa un enlace "mailto" como solución
// provisional honesta (abre el cliente de correo del visitante) mientras no
// haya backend. Antes de publicar en producción, sustituir el `action` por
// una API route propia conectada a un proveedor de email/CRM real, y
// cambiar "hola@confidyx.com" por la bandeja de entrada real de Confidyx.
const CONTACT_EMAIL = "hola@confidyx.com";

const FIELDS = [
  { name: "nombre", label: "Nombre", type: "text", required: true },
  { name: "despacho", label: "Nombre del despacho", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "telefono", label: "Teléfono / WhatsApp", type: "tel", required: false },
];

export function ContactSection() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-navy px-6 py-20 text-cream md:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-0 hidden lg:block"
        aria-hidden="true"
      >
        <div className="absolute -left-10 bottom-0 h-[22rem] w-[22rem] rounded-full bg-gold/[0.12] blur-[100px]" />
        <div className="absolute -right-16 top-0 h-[24rem] w-[24rem] rounded-full bg-accent/[0.10] blur-[110px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-cream/60">
            Primer paso
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
            Empecemos con un Diagnóstico Documental Express
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
          </dl>
        </div>

        <form
          action={`mailto:${CONTACT_EMAIL}`}
          method="POST"
          encType="text/plain"
          className="rounded-2xl bg-cream p-8"
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
                  className="w-full rounded-lg border border-mist bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy"
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
              className="w-full rounded-lg border border-mist bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-navy transition-transform hover:scale-[1.01]"
          >
            Pedir mi diagnóstico gratuito
          </button>
          <p className="mt-3 text-center text-xs text-ink/50">
            Al enviar, se abrirá tu cliente de correo para confirmar el
            mensaje a Confidyx.
          </p>
        </form>
      </div>
    </section>
  );
}
