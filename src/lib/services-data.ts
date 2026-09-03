// Fuente única de verdad de los 3 servicios de Confidyx — usada por
// ServicesSection y por el test de diagnóstico (src/app/diagnostico), para
// que ninguno de los dos se desincronice del otro.

export const SERVICES = [
  {
    id: "expediente",
    badge: "El punto de partida",
    name: "Expediente Completo 30D",
    photo: "/photos/expediente-completo.jpeg",
    description:
      "Sabe qué debe entregar cada cliente, qué ha enviado y qué falta. Solo avisa a tu equipo ante una excepción.",
    bullets: [
      "Tu equipo deja de perseguir facturas y justificantes por email y teléfono.",
      "Los expedientes incompletos pasan a listos para trabajar.",
      "Más capacidad facturable y menos noches antes de un cierre.",
    ],
    bestWhen: "Los clientes nunca entregan todo, o siempre tarde.",
    highlighted: true,
  },
  {
    id: "bandeja",
    badge: null,
    name: "Bandeja Cero Documentos",
    photo: "/photos/bandeja-documentos.jpeg",
    description:
      "Recibe, ordena, renombra y clasifica automáticamente facturas, nóminas y justificantes de email, WhatsApp y carpetas.",
    bullets: [
      "Cada factura se organiza sola, sin trabajo administrativo manual.",
      "Liberas tiempo para más clientes o servicios de mayor valor.",
      "Recuperas capacidad sin contratar a otra persona.",
    ],
    bestWhen: "Hay muchos emails, carpetas desordenadas y datos a mano.",
    highlighted: false,
  },
  {
    id: "cierre",
    badge: null,
    name: "Cierre Fiscal Blindado",
    photo: "/photos/cierre-fiscal.jpeg",
    description:
      "Controla cada expediente desde que llega la documentación hasta que queda listo para revisión.",
    bullets: [
      "Detecta los problemas antes de que lleguen 3 días antes de un vencimiento.",
      "Lista diaria de clientes en riesgo y tareas prioritarias.",
      "Proteges la facturación y reduces errores que dañan la confianza del cliente.",
    ],
    bestWhen: "Hay temporadas de mucha presión o antecedentes de retrasos.",
    highlighted: false,
  },
] as const;

export const COMPARISON_ROWS = [
  {
    service: "Expediente Completo 30D",
    roi: "20–40 h/mes",
    facilidad: "Muy alta",
    valor: "Muy alta",
  },
  {
    service: "Bandeja Cero Documentos",
    roi: "25–60 h/mes",
    facilidad: "Alta",
    valor: "Alta",
  },
  {
    service: "Cierre Fiscal Blindado",
    roi: "1.500–5.000 €/mes",
    facilidad: "Media",
    valor: "Máxima",
  },
] as const;
