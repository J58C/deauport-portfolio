"use client";

import { useState } from "react";
import { Mail, User, MessageSquare, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";
import { ContactSchema, type ContactInput } from "@/lib/contact-schema";

type Status = "idle" | "sending" | "ok" | "err";

function Field({
  label,
  icon,
  input,
  error,
}: {
  label: string;
  icon: React.ReactNode;
  input: React.ReactNode;
  error?: string;
}) {
  return (
    <div className="grid gap-1.5">
      <label className="text-sm text-muted flex items-center gap-2">
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-card border border-border/80">
          {icon}
        </span>
        {label}
      </label>
      {input}
      {!!error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactInput>({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErr, setFieldErr] = useState<Record<string, string[]>>({});

  const onChange =
    (key: keyof ContactInput) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [key]: e.target.value });
      setFieldErr((prev) => ({ ...prev, [key]: [] }));
    };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;

    const parsed = ContactSchema.safeParse(form);
    if (!parsed.success) {
      setStatus("err");
      setErrorMsg("Please correct the highlighted fields.");
      setFieldErr(parsed.error.flatten().fieldErrors);
      return;
    }

    setStatus("sending");
    setErrorMsg("");
    setFieldErr({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("ok");
        setForm({ name: "", email: "", message: "", website: "" });
      } else {
        setStatus("err");
        setErrorMsg(data?.message || "Failed to send message.");
        if (data?.errors) setFieldErr(data.errors);
      }
    } catch {
      setStatus("err");
      setErrorMsg("Network error.");
    }
  }

  return (
    <main className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <header className="grid gap-2 mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Let’s build something.</h1>
          <p className="text-muted">
            Isi formulir di bawah—saya akan membalas secepatnya. Email dikirim langsung ke inbox (no third-party).
          </p>
        </header>

        <div className="border-t border-border/60 my-8" />

        <div className="grid md:grid-cols-3 gap-6">
          <section className="md:col-span-2 rounded-2xl border border-border/60 bg-bg/70 backdrop-blur px-5 md:px-6 py-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <form onSubmit={onSubmit} className="grid gap-5">
              <div style={{ position: "absolute", left: "-9999px" }} aria-hidden>
                <label>
                  Website
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={onChange("website")}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              {status !== "idle" && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl border px-3 py-2 text-sm flex items-center gap-2 ${
                    status === "ok"
                      ? "border-emerald-600/40 bg-emerald-500/10 text-emerald-400"
                      : status === "err"
                      ? "border-red-600/40 bg-red-500/10 text-red-400"
                      : "border-border/60 bg-card text-muted"
                  }`}
                >
                  {status === "ok" ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Message sent. Thanks!</span>
                    </>
                  ) : status === "err" ? (
                    <>
                      <AlertTriangle className="w-4 h-4" />
                      <span>{errorMsg}</span>
                    </>
                  ) : (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending…</span>
                    </>
                  )}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <Field
                  label="Name"
                  icon={<User className="w-4 h-4" />}
                  error={fieldErr.name?.[0]}
                  input={
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={onChange("name")}
                      required
                      aria-invalid={!!fieldErr.name?.length}
                      className="block w-full rounded-xl border border-border/80 bg-bg px-3 py-2
                                 text-fg placeholder:text-muted
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]
                                 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                      placeholder="Your name"
                    />
                  }
                />
                <Field
                  label="Email"
                  icon={<Mail className="w-4 h-4" />}
                  error={fieldErr.email?.[0]}
                  input={
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange("email")}
                      required
                      aria-invalid={!!fieldErr.email?.length}
                      className="block w-full rounded-xl border border-border/80 bg-bg px-3 py-2
                                 text-fg placeholder:text-muted
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]
                                 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                      placeholder="you@example.com"
                    />
                  }
                />
              </div>

              <Field
                label="Message"
                icon={<MessageSquare className="w-4 h-4" />}
                error={fieldErr.message?.[0]}
                input={
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    value={form.message}
                    onChange={onChange("message")}
                    required
                    aria-invalid={!!fieldErr.message?.length}
                    className="block w-full rounded-xl border border-border/80 bg-bg px-3 py-2
                               text-fg placeholder:text-muted
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]
                               focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                    placeholder="Write your message…"
                  />
                }
              />

              <div className="flex items-center justify-between gap-3">
                <p className="text-xs text-muted">Protected with a subtle anti-spam.</p>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-on-primary hover:opacity-90 transition
                             disabled:opacity-60 disabled:cursor-not-allowed
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]
                             focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                >
                  {status === "sending" && <Loader2 className="w-4 h-4 animate-spin" />}
                  Send
                </button>
              </div>
            </form>
          </section>

          <aside className="rounded-2xl border border-border/60 bg-bg/70 backdrop-blur p-5 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] grid gap-4">
            <div>
              <h2 className="text-base font-semibold">Direct contact</h2>
              <p className="text-sm text-muted">Prefer email? Kirim langsung ke:</p>
              <a
                className="mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-border hover:bg-card transition"
                href="mailto:hello@deauport.id"
              >
                <Mail className="w-4 h-4" />
                hello@deauport.id
              </a>
            </div>

            <div className="border-t border-border/60 my-2" />

            <div className="grid gap-2">
              <h3 className="text-base font-semibold">Response time</h3>
              <p className="text-sm text-muted">
                Biasanya <span className="text-fg">&lt; 24 jam</span> di weekdays.
              </p>
            </div>

            <div className="grid gap-2">
              <h3 className="text-base font-semibold">Notes</h3>
              <ul className="text-sm text-muted list-disc pl-5 space-y-1">
                <li>Tolong sertakan konteks proyek/tujuan.</li>
                <li>Link referensi sangat membantu.</li>
                <li>File besar? Kirim via drive/link publik.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}