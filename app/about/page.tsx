import Link from "next/link";
import {
  Cpu,
  CircuitBoard,
  LaptopMinimal,
  Globe,
  Wrench,
  GraduationCap,
  Rocket,
  Mail,
  Github,
} from "lucide-react";

export const metadata = {
  title: "About",
  description:
    "About Hafidh — aka Deau/J58c. Undergraduate in Computer Engineering; building at the intersection of embedded systems and the modern web.",
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
        <header className="grid gap-3">
          <p className="text-sm uppercase tracking-widest text-muted">About</p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Hi, I’m <span className="text-gradient">Hafidh</span> — also known as <span className="text-fg">Deau / J58c</span>
          </h1>
          <p className="text-muted max-w-3xl">
            I study Computer Engineering in Semarang and love building things that connect{" "}
            <span className="text-fg">hardware</span> with the{" "}
            <span className="text-fg">modern web</span>. Most of my time goes into rapid prototyping with ESP32,
            crafting clean interfaces with Next.js, and wiring data flows from sensors to dashboards.
          </p>
        </header>

        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="rounded-2xl border border-border p-5 bg-card card-hover">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm text-muted">Program</span>
            </div>
            <div className="text-fg font-medium">Computer Engineering</div>
            <div className="text-sm text-muted">Semarang State University</div>
          </div>
          <div className="rounded-2xl border border-border p-5 bg-card card-hover">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4" />
              <span className="text-sm text-muted">Focus</span>
            </div>
            <div className="text-fg font-medium">Embedded • Web • Mobile</div>
            <div className="text-sm text-muted">ESP32 • Next.js • Kotlin</div>
          </div>
          <div className="rounded-2xl border border-border p-5 bg-card card-hover">
            <div className="flex items-center gap-2 mb-2">
              <Wrench className="w-4 h-4" />
              <span className="text-sm text-muted">I build</span>
            </div>
            <div className="text-fg font-medium">Prototypes → Products</div>
            <div className="text-sm text-muted">sensors, APIs, UIs</div>
          </div>
          <div className="rounded-2xl border border-border p-5 bg-card card-hover">
            <div className="flex items-center gap-2 mb-2">
              <Rocket className="w-4 h-4" />
              <span className="text-sm text-muted">Alias</span>
            </div>
            <div className="text-fg font-medium">Deau / J58c</div>
            <div className="text-sm text-muted">deauport.id</div>
          </div>
        </section>

        <div className="border-t border-border/60 my-2" />

        <section className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-border p-6 bg-card">
            <div className="flex items-center gap-2 mb-2">
              <CircuitBoard className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Embedded & IoT</h2>
            </div>
            <p className="text-sm text-muted mb-3">
              Breadboard to PCB: I tinker with ESP32, sensors, and simple boards; then stream data over serial/MQTT to the cloud.
            </p>
            <div className="flex flex-wrap gap-2">
              {["ESP32", "I2C/SPI/UART", "FreeRTOS (basic)", "Edge Impulse", "MQTT"].map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border p-6 bg-card">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Web Engineering</h2>
            </div>
            <p className="text-sm text-muted mb-3">
              Crafting clean UIs & reliable APIs. I care about DX, accessibility, and sensible performance budgets.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "REST", "Tailwind v4", "Zod"].map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border p-6 bg-card">
            <div className="flex items-center gap-2 mb-2">
              <LaptopMinimal className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Mobile & Apps</h2>
            </div>
            <p className="text-sm text-muted mb-3">
              Lightweight Android with Kotlin/Flutter (when needed) and small utilities that bridge hardware ↔ app.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Kotlin", "Flutter (basic)", "Jetpack", "BLE/Wi-Fi"].map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4">
          <h2 className="text-xl font-semibold">Skills at a glance</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="rounded-2xl border border-border p-5 bg-card">
              <h3 className="text-sm text-muted mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["C++", "Python", "TypeScript", "JavaScript", "Kotlin"].map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border p-5 bg-card">
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
          <ol className="relative border-s border-border/60 pl-6 grid gap-5">
            <li>
              <div className="absolute -start-1.5 top-1 w-3 h-3 rounded-full bg-[var(--primary)]" />
              <p className="text-xs text-muted">2025 — now</p>
              <p className="text-fg font-medium">Exploring embedded + web hybrids</p>
              <p className="text-sm text-muted">
                Building demos that send sensor data to web dashboards with Next.js (API routes + streaming).
              </p>
            </li>
            <li>
              <div className="absolute -start-1.5 top-1 w-3 h-3 rounded-full bg-[var(--primary)]/70" />
              <p className="text-xs text-muted">2024</p>
              <p className="text-fg font-medium">Portfolio iterations & small apps</p>
              <p className="text-sm text-muted">
                Several portfolio redesigns, experiments with animations (animejs) and Tailwind v4 zero-config.
              </p>
            </li>
            <li>
              <div className="absolute -start-1.5 top-1 w-3 h-3 rounded-full bg-[var(--primary)]/50" />
              <p className="text-xs text-muted">Earlier</p>
              <p className="text-fg font-medium">Foundations</p>
              <p className="text-sm text-muted">C++, Python basics, simple microcontroller projects, and frontend fundamentals.</p>
            </li>
          </ol>
        </section>

        <section className="grid gap-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">Selected previews</h2>
            <span className="text-xs text-muted">(full case studies will move to subdomains)</span>
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
                brief: "Simple Android app to tune LED strips over BLE.",
                stack: ["Kotlin", "BLE", "Compose"],
              },
              {
                title: "Deau UI",
                brief: "Minimal UI kit for my personal apps.",
                stack: ["React", "Tailwind", "Radix (light)"],
              },
            ].map((p) => (
              <div key={p.title} className="rounded-2xl border border-border p-5 bg-card card-hover">
                <div className="text-fg font-medium">{p.title}</div>
                <p className="text-sm text-muted mt-1">{p.brief}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] px-2 py-0.5 rounded-lg border border-border/70 bg-bg">
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
              title="Works will live on subdomain soon"
              aria-disabled="true"
            >
              See Works (soon)
            </button>
            <button
              type="button"
              className="px-3 py-1.5 rounded-xl border border-border hover:bg-card transition cursor-not-allowed"
              title="Labs will live on subdomain soon"
              aria-disabled="true"
            >
              Labs (soon)
            </button>
          </div>
        </section>

        <section className="rounded-2xl border border-border p-6 bg-card grid gap-4">
          <h2 className="text-lg font-semibold">How I work</h2>
          <ul className="list-disc pl-5 text-sm text-muted grid gap-1.5">
            <li><span className="text-fg">Start simple</span> — ship a tiny, working slice first.</li>
            <li><span className="text-fg">Measure & iterate</span> — logs over guesses; improve with small steps.</li>
            <li><span className="text-fg">Readable over clever</span> — code should be kind to the future you.</li>
            <li><span className="text-fg">DX matters</span> — tooling & docs that make building feel smooth.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-border p-6 bg-card">
          <h2 className="text-lg font-semibold mb-2">Currently</h2>
          <ul className="text-sm text-muted grid gap-1.5">
            <li>Refining a small sensor-to-dashboard pipeline (ESP32 → API → UI).</li>
            <li>Experimenting with animations that don’t hurt performance.</li>
            <li>Collecting notes for future labs on subdomains.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-border p-6 bg-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold">Want to talk?</h2>
            <p className="text-sm text-muted">Happy to chat about embedded/web ideas or potential collaborations.</p>
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