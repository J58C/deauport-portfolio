"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mail, User, MessageSquare, CheckCircle2, AlertTriangle, Loader2, ClipboardPaste, Sparkles, Linkedin
} from "lucide-react";
import { ContactSchema, type ContactInput } from "@/lib/contact-schema";

type Status = "idle" | "sending" | "ok" | "err";

function Field({
  label,
  hint,
  icon,
  input,
  error,
}: {
  label: string;
  hint?: string;
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
        <span className="text-fg">{label}</span>
        {hint ? <span className="ml-auto text-xs text-muted">{hint}</span> : null}
      </label>
      {input}
      {!!error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}

const PRESETS = [
  "Project inquiry",
  "Bug/Support on my repo",
  "Collaboration",
];

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
  const [msgLen, setMsgLen] = useState(0);
  const alertRef = useRef<HTMLDivElement | null>(null);

  const onChange =
    (key: keyof ContactInput) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const v = e.target.value;
      setForm((f) => ({ ...f, [key]: v }));
      if (key === "message") setMsgLen(v.length);
      setFieldErr((prev) => ({ ...prev, [key]: [] }));
    };

  useEffect(() => {
    if (status !== "idle" && alertRef.current) {
      alertRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [status]);

  function onKeyDown(e: React.KeyboardEvent<HTMLFormElement>) {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      (e.currentTarget.querySelector("button[type=submit]") as HTMLButtonElement)?.click();
    }
  }

  async function onPasteFromClipboard() {
    try {
      const text = await navigator.clipboard.readText();
      setForm((f) => ({ ...f, message: (f.message ? f.message + "\n\n" : "") + text }));
      setMsgLen((form.message + text).length);
    } catch {
      setStatus("err");
      setErrorMsg("Tidak bisa akses clipboard.");
    }
  }

  function addPreset(p: string) {
    const next =
      form.message
        ? `${form.message}\n\n— ${p}`
        : `— ${p}\n\nRingkas tujuan, timeline, dan tautan referensi ya.`;
    setForm((f) => ({ ...f, message: next }));
    setMsgLen(next.length);
  }

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
        setMsgLen(0);
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
    <main className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="container max-w-5xl grid gap-3">
        <header className="grid gap-2 mb-4">
          <div className="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-lg border border-border/70 bg-bg w-fit">
            <span className="inline-flex w-4 h-4 items-center justify-center rounded-md border border-border/70 bg-card">
              <Mail className="w-3 h-3" />
            </span>
            Contact
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Send a message
          </h1>
          <p className="text-muted">
            Isi formulir di kiri atau kirim email langsung. Balasan biasanya &lt; 24 jam (weekday).
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          <section
            className="md:col-span-2 rounded-2xl border border-border/70 bg-card card-accent shadow-brand p-6 md:p-8"
            aria-labelledby="contact-form-title"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="inline-flex w-7 h-7 items-center justify-center rounded-lg border border-border/70 bg-bg">
                  <MessageSquare className="w-4 h-4" />
                </span>
                <h2 id="contact-form-title" className="text-lg font-semibold">Your message</h2>
              </div>
              <span className="text-xs text-muted">{msgLen} chars</span>
            </div>

            {status !== "idle" && (
              <div
                ref={alertRef}
                role="status"
                aria-live="polite"
                className={`mb-4 rounded-xl border px-3 py-2 text-sm flex items-center gap-2 ${
                  status === "ok"
                    ? "border-emerald-600/40 bg-emerald-500/10 text-emerald-400"
                    : status === "err"
                    ? "border-red-600/40 bg-red-500/10 text-red-400"
                    : "border-border/60 bg-bg text-muted"
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

            <form onSubmit={onSubmit} onKeyDown={onKeyDown} className="grid gap-5">
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

              <div className="grid gap-2">
                <div className="text-sm text-muted flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Quick presets
                </div>
                <div className="flex flex-wrap gap-2">
                  {PRESETS.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => addPreset(p)}
                      className="text-[11px] px-2 py-1 rounded-lg border border-border/70 bg-bg hover:bg-card transition"
                      title="Tambahkan template singkat ke pesan"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

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
                  <div className="grid gap-2">
                    <textarea
                      id="message"
                      name="message"
                      rows={8}
                      value={form.message}
                      onChange={onChange("message")}
                      required
                      aria-invalid={!!fieldErr.message?.length}
                      className="block w-full rounded-xl border border-border/80 bg-bg px-3 py-2
                                 text-fg placeholder:text-muted
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]
                                 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                      placeholder="Tulis pesan. Sertakan tujuan, konteks, dan tautan referensi."
                    />
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted">Ctrl/Cmd + Enter untuk kirim</p>
                      <button
                        type="button"
                        onClick={onPasteFromClipboard}
                        className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg border border-border hover:bg-card transition"
                        title="Paste dari clipboard"
                      >
                        <ClipboardPaste className="w-3.5 h-3.5" />
                        Paste
                      </button>
                    </div>
                  </div>
                }
              />

              <div className="flex items-center justify-between gap-3">
                <p className="text-xs text-muted">Subtle anti-spam enabled.</p>
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

          <aside className="rounded-2xl border border-border/60 bg-bg/70 backdrop-blur-md p-5 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] grid gap-4">
            <div>
              <h2 className="text-base font-semibold">Direct contact</h2>
              <p className="text-sm text-muted">Kalau lebih cepat via email atau LinkedIn:</p>
              
              <div className="mt-2 flex flex-col gap-2">
                <a
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-border hover:bg-card transition"
                  href="mailto:hello@deauport.id"
                  target="_blank"
                >
                  <Mail className="w-4 h-4" />
                  Mail
                </a>

                <a
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-border hover:bg-card transition"
                  href="https://www.linkedin.com/in/hafidhmusyafa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="border-t border-border/60 my-2" />

            <div className="grid gap-2">
              <h3 className="text-base font-semibold">Response time</h3>
              <p className="text-sm text-muted">
                Biasanya <span className="text-fg">&lt; 24 jam</span> di weekdays.
              </p>
            </div>

            <div className="grid gap-2">
              <h3 className="text-base font-semibold">Tips kirim pesan</h3>
              <ul className="text-sm text-muted list-disc pl-5 space-y-1">
                <li>Tujuan & ruang lingkup (singkat).</li>
                <li>Timeline, anggaran (opsional), dan referensi link.</li>
                <li>File besar kirim via link publik.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}