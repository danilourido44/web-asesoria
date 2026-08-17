"use client";

import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string; error?: boolean };

const GREETING =
  "Hola. Soy el asistente de Confidyx. Puedo contarte cómo funcionan nuestros servicios, precios orientativos, o ayudarte a pedir un Diagnóstico Documental Express gratuito. ¿En qué te ayudo?";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, sending, open]);

  function handleToggle() {
    setOpen((prev) => {
      const next = !prev;
      if (next) {
        setMessages((current) =>
          current.length === 0 ? [{ role: "assistant", content: GREETING }] : current,
        );
      }
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = input.trim();
    if (!text || sending) return;

    const history = messages.map((m) => ({ role: m.role, content: m.content }));
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message: text, history }),
      });
      const data = await res.json();

      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            error: true,
            content:
              "No he podido responder ahora mismo. Prueba de nuevo en un momento, o usa el formulario de contacto de la web.",
          },
        ]);
        return;
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          error: true,
          content:
            "No he podido conectar con el asistente. Usa el formulario de contacto y te respondemos en persona.",
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleToggle}
        aria-label={open ? "Cerrar chat de Confidyx" : "Abrir chat de Confidyx"}
        className="fixed bottom-6 right-6 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy shadow-lg shadow-navy/30 transition-transform hover:scale-105"
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-[999] flex h-[520px] max-h-[calc(100vh-8.75rem)] w-[360px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl bg-cream shadow-2xl shadow-navy/30 max-sm:inset-x-4 max-sm:bottom-[88px] max-sm:h-[calc(100vh-160px)] max-sm:w-auto">
          <div className="flex items-center justify-between bg-navy px-[18px] py-4 text-cream">
            <div>
              <div className="font-display text-[15px] font-bold">Confidyx · Asistente</div>
              <div className="mt-0.5 text-xs text-muted">
                Normalmente responde al instante
              </div>
            </div>
            <button
              type="button"
              onClick={handleToggle}
              aria-label="Cerrar chat"
              className="p-1 text-xl leading-none text-cream/80 hover:text-cream"
            >
              ✕
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex flex-1 flex-col gap-2.5 overflow-y-auto p-4"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "max-w-[82%] self-end rounded-xl rounded-br-sm bg-navy px-3.5 py-2.5 text-[13.5px] leading-relaxed text-cream"
                    : m.error
                      ? "max-w-[82%] self-start rounded-xl rounded-bl-sm border-l-[3px] border-gold bg-mist px-3.5 py-2.5 text-[13.5px] leading-relaxed text-ink"
                      : "max-w-[82%] self-start rounded-xl rounded-bl-sm bg-mist px-3.5 py-2.5 text-[13.5px] leading-relaxed text-ink"
                }
              >
                {m.content}
              </div>
            ))}
            {sending && (
              <div className="max-w-[82%] self-start rounded-xl rounded-bl-sm bg-mist px-3.5 py-2.5 text-[13.5px] italic text-muted">
                Escribiendo…
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex gap-2 border-t border-mist bg-white p-3"
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  e.currentTarget.form?.requestSubmit();
                }
              }}
              rows={1}
              required
              disabled={sending}
              placeholder="Escribe tu pregunta…"
              className="flex-1 resize-none rounded-lg border border-mist px-3 py-2.5 text-[13.5px] text-ink outline-none focus:border-navy disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={sending}
              className="rounded-lg bg-gold px-4 text-[13px] font-bold text-navy disabled:cursor-default disabled:opacity-50"
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
}
