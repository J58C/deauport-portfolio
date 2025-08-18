import Link from "next/link";
import {
  CircuitBoard,
  LaptopMinimal,
  Globe,
  Mail,
  Github,
  Sparkles,
  Gauge,
  Layers,
  Workflow,
} from "lucide-react";

export const metadata = {
  title: "About",
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-sm px-3 py-1 rounded-xl border border-border/80 bg-card">
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="py-16 md:py-24">
      <div className="container max-w-5xl grid gap-10">

        <section className="relative rounded-2xl border border-border/60 shadow-brand overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-90"
            style={{
              backgroundImage: `
                radial-gradient(70% 50% at 10% 0%,
                  color-mix(in oklab, var(--primary) 16%, transparent) 0%, transparent 60%),
                radial-gradient(60% 50% at 95% -10%,
                  color-mix(in oklab, var(--primary) 10%, transparent) 0%, transparent 62%),
                var(--about-bg)
              `,
              backgroundSize: "auto, auto, cover",
              backgroundPosition: "center, center, center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="relative p-6 md:p-10 bg-card/65 backdrop-blur-xl">
            <header className="grid gap-3">
              <p className="text-sm uppercase tracking-widest text-muted">About</p>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Hi, I’m <span className="text-gradient">Hafidh</span> — also known as{" "}
                <span className="text-fg">Deau / J58c</span>
              </h1>
              <p className="text-muted max-w-3xl">
                I build at the intersection of <span className="text-fg">embedded systems</span> and the{" "}
                <span className="text-fg">modern web</span>: ESP32 prototyping, APIs that stream sensor data,
                and clean UI that respects performance & accessibility.
              </p>
            </header>

            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {[
                {
                  icon: <Gauge className="w-4 h-4" />,
                  k: "Focus",
                  v: "Embedded • Web • Mobile",
                },
                {
                  icon: <Layers className="w-4 h-4" />,
                  k: "Stack",
                  v: "C++ · Python · TS · Next.js · ESP32",
                },
                {
                  icon: <Workflow className="w-4 h-4" />,
                  k: "Approach",
                  v: "Ship small • Iterate fast",
                },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border border-border bg-card/80 p-4 hover:shadow-brand-lg transition"
                >
                  <div className="flex items-center gap-2 text-muted">
                    <span className="inline-flex w-6 h-6 items-center justify-center rounded-lg border border-border/70 bg-bg">
                      {s.icon}
                    </span>
                    <span className="text-sm">{s.k}</span>
                  </div>
                  <div className="text-fg font-medium mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-border/70 p-6 bg-card">
            <div className="flex items-center gap-2 mb-2">
              <CircuitBoard className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Embedded & IoT</h2>
            </div>
            <p className="text-sm text-muted mb-3">
              Breadboard to PCB. ESP32 + sensors, stream via serial/MQTT, log the truth and iterate.
            </p>
            <div className="flex flex-wrap gap-2">
              {["ESP32", "I2C/SPI/UART", "FreeRTOS (basic)", "Edge Impulse", "MQTT"].map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border/70 p-6 bg-card">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Web Engineering</h2>
            </div>
            <p className="text-sm text-muted mb-3">
              Clean UIs & reliable APIs. DX-first, accessible components, and sensible budgets.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "REST", "Tailwind v4", "Zod"].map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border/70 p-6 bg-card">
            <div className="flex items-center gap-2 mb-2">
              <LaptopMinimal className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Mobile & Apps</h2>
            </div>
            <p className="text-sm text-muted mb-3">
              Lightweight Android (Kotlin/Compose) & small utilities that bridge hardware ↔ app.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Kotlin", "Flutter (basic)", "Jetpack", "BLE/Wi-Fi"].map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-border/70 bg-card p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-lg font-semibold">What I value</h2>
          </div>
          <ul className="list-disc pl-5 text-sm text-muted grid gap-1.5">
            <li><span className="text-fg">Start simple</span> — ship a tiny, working slice first.</li>
            <li><span className="text-fg">Logs over guesses</span> — measure, then iterate.</li>
            <li><span className="text-fg">Readable beats clever</span> — future-you will thank you.</li>
            <li><span className="text-fg">A11y & DX</span> — tools and UI that feel smooth.</li>
          </ul>
        </section>

        <section className="grid gap-4">
          <h2 className="text-xl font-semibold">Skills at a glance</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="rounded-2xl border border-border/70 p-5 bg-card">
              <h3 className="text-sm text-muted mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["C++", "Python", "TypeScript", "JavaScript", "Kotlin"].map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border/70 p-5 bg-card">
              <h3 className="text-sm text-muted mb-3">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "Tailwind", "Vercel", "Linux", "Git", "Docker (basic)"].map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4">
          <h2 className="text-xl font-semibold">A short timeline</h2>
          <ol className="relative border-s border-border/60 pl-8 grid gap-5">
            <li className="relative">
              <div className="absolute -start-9.75 top-1 w-3 h-3 rounded-full bg-[var(--bg)] ring-2 ring-[var(--primary)]" />
              <p className="text-xs text-muted">2025 — now</p>
              <p className="text-fg font-medium">Exploring embedded + web hybrids</p>
              <p className="text-sm text-muted">
                Streaming sensor data to web dashboards with Next.js (API routes & incremental updates).
              </p>
            </li>
            <li className="relative">
              <div className="absolute -start-9.75 top-1 w-3 h-3 rounded-full bg-[var(--bg)] ring-2 ring-[var(--primary)]/70" />
              <p className="text-xs text-muted">2024</p>
              <p className="text-fg font-medium">Portfolio iterations & small apps</p>
              <p className="text-sm text-muted">
                Redesigns, experiments with animejs, and Tailwind v4 zero-config.
              </p>
            </li>
            <li className="relative">
              <div className="absolute -start-9.75 top-1 w-3 h-3 rounded-full bg-[var(--bg)] ring-2 ring-[var(--primary)]/50" />
              <p className="text-xs text-muted">Earlier</p>
              <p className="text-fg font-medium">Foundations</p>
              <p className="text-sm text-muted">C++, Python basics, microcontrollers, and frontend fundamentals.</p>
            </li>
          </ol>
        </section>

        <section className="grid gap-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">Selected previews</h2>
            <span className="text-xs text-muted">(full case studies will live on subdomains)</span>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              {
                title: "EnviroSense",
                brief: "ESP32 + temp/humidity sensor → live dashboard.",
                stack: ["ESP32", "MQTT", "Next.js", "Tailwind"],
              },
              {
                title: "Decklight",
                brief: "Android BLE control for LED strips.",
                stack: ["Kotlin", "BLE", "Compose"],
              },
              {
                title: "Deau UI",
                brief: "Minimal UI kit for personal apps.",
                stack: ["React", "Tailwind", "Radix (light)"],
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border/70 p-5 bg-card hover:shadow-brand-lg transition"
              >
                <div className="text-fg font-medium">{p.title}</div>
                <p className="text-sm text-muted mt-1">{p.brief}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] px-2 py-0.5 rounded-lg border border-border/70 bg-bg"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="px-3 py-1.5 rounded-xl border border-border hover:bg-card transition cursor-not-allowed"
              title="Works will be on a subdomain soon"
              aria-disabled="true"
            >
              Works (soon)
            </button>
            <button
              type="button"
              className="px-3 py-1.5 rounded-xl border border-border hover:bg-card transition cursor-not-allowed"
              title="Labs will be on a subdomain soon"
              aria-disabled="true"
            >
              Labs (soon)
            </button>
          </div>
        </section>

        <section className="rounded-2xl border border-border/70 p-6 bg-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold">Want to talk?</h2>
            <p className="text-sm text-muted">
              Happy to chat about embedded/web ideas or potential collaborations.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-on-primary hover:opacity-90 transition
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]
                         focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              <Mail className="w-4 h-4" />
              Contact
            </Link>
            <a
              href="https://github.com/J58C"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:bg-card transition
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]
                         focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}