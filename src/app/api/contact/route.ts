import nodemailer from "nodemailer";

const CONTACT_EMAIL = "confidyx@gmail.com";

type ContactPayload = {
  nombre?: string;
  despacho?: string;
  email?: string;
  telefono?: string;
  mensaje?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.error("Faltan GMAIL_USER / GMAIL_APP_PASSWORD en el entorno.");
    return Response.json(
      { error: "El formulario no está configurado todavía. Escríbenos directamente a " + CONTACT_EMAIL },
      { status: 500 },
    );
  }

  let data: ContactPayload;
  try {
    data = await req.json();
  } catch {
    return Response.json({ error: "Datos inválidos." }, { status: 400 });
  }

  const nombre = (data.nombre || "").trim();
  const despacho = (data.despacho || "").trim();
  const email = (data.email || "").trim();
  const telefono = (data.telefono || "").trim();
  const mensaje = (data.mensaje || "").trim();

  if (!nombre || !despacho || !email) {
    return Response.json({ error: "Faltan campos obligatorios." }, { status: 400 });
  }

  // validación básica de email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "El email no parece válido." }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Web Confidyx" <${user}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Nuevo diagnóstico solicitado — ${despacho}`,
      text: [
        `Nombre: ${nombre}`,
        `Despacho: ${despacho}`,
        `Email: ${email}`,
        `Teléfono: ${telefono || "—"}`,
        "",
        "Mensaje:",
        mensaje || "(sin mensaje)",
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #14213D; max-width: 560px;">
          <h2 style="color:#0B192C;">Nuevo Diagnóstico Documental Express solicitado</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding:6px 0; font-weight:bold; width:120px;">Nombre</td><td>${escapeHtml(nombre)}</td></tr>
            <tr><td style="padding:6px 0; font-weight:bold;">Despacho</td><td>${escapeHtml(despacho)}</td></tr>
            <tr><td style="padding:6px 0; font-weight:bold;">Email</td><td>${escapeHtml(email)}</td></tr>
            <tr><td style="padding:6px 0; font-weight:bold;">Teléfono</td><td>${escapeHtml(telefono || "—")}</td></tr>
          </table>
          <p style="font-weight:bold; margin-top:16px;">Mensaje:</p>
          <p style="white-space: pre-wrap;">${escapeHtml(mensaje || "(sin mensaje)")}</p>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Error enviando email de contacto:", err);
    return Response.json(
      { error: "No se pudo enviar el mensaje. Escríbenos directamente a " + CONTACT_EMAIL },
      { status: 502 },
    );
  }
}
