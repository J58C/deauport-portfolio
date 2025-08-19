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
    <main className="pt-24 md:pt-28 pb-16 md:pb-24">
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
                  v: "C++ · Python · Java · TS · JS",
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
              From prototyping to production: build with ESP32 and sensors, stream data via MQTT, run basic FreeRTOS tasks, integrate AI on Edge Impulse, and design PCBs in KiCad.
            </p>
            <div className="flex flex-wrap gap-2">
              {["MQTT", "Edge Impulse", "FreeRTOS", "KiCad"].map((s) => (
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
              Build scalable backends and clean interfaces. From APIs to dashboards with Next.js, React, and modern tooling that focus on DX & accessibility.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "REST", "Tailwind", "JS"].map((s) => (
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
              Cross-platform with Flutter and native Android (Kotlin/Compose). Bridge sensors and APIs into lightweight apps with clean, reliable UX.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Kotlin", "Flutter", "Jetpack", "Compose"].map((s) => (
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
                {["C++", "Python", "TypeScript", "JavaScript", "Kotlin", "Dart"].map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border/70 p-5 bg-card">
              <h3 className="text-sm text-muted mb-3">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "Vue", "Tailwind", "Vercel", "Linux", "Git", "Docker", "cPanel"].map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4">
          <h2 className="text-xl font-semibold">A short timeline</h2>
          <div className="relative">
            <div className="absolute left-24 top-0 bottom-0 w-px bg-[var(--border)]/60 pointer-events-none" />

            <ol className="grid gap-6">
              <li className="grid grid-cols-[6rem_1fr] gap-4 items-start relative">
                <div className="w-24 text-xs text-muted relative">
                  2022 — Now
                  <span className="absolute right-[-7px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--primary)]" />
                </div>
                <div>
                  <p className="text-fg font-medium flex items-center gap-2">
                    Computer Engineering · UNNES
                    <span className="text-[10px] px-2 py-0.5 rounded-md border border-border/70 bg-bg text-muted">
                      Ongoing
                    </span>
                  </p>
                  <p className="text-sm text-muted">
                    Fokus kuat pada <span className="text-fg">IoT & embedded systems</span>:
                    microcontrollers, perancangan PCB, optimasi low‑power, serta integrasi device‑to‑cloud.
                  </p>
                </div>
              </li>

              <li className="grid grid-cols-[6rem_1fr] gap-4 items-start relative">
                <div className="w-24 text-xs text-muted relative">
                  2024 — Now
                  <span className="absolute right-[-7px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--primary)]/80" />
                </div>
                <div>
                  <p className="text-fg font-medium flex items-center gap-2">
                    Capstone Project: SICermat
                    <span className="text-[10px] px-2 py-0.5 rounded-md border border-border/70 bg-bg text-muted">
                      Ongoing
                    </span>
                  </p>
                  <p className="text-sm text-muted">
                    Wearable monitoring dengan ESP32‑C3 (BMI270 & MAX30102), integrasi Edge Impulse ML,
                    dan dashboard Flutter.
                  </p>
                </div>
              </li>

              <li className="grid grid-cols-[6rem_1fr] gap-4 items-start relative">
                <div className="w-24 text-xs text-muted relative">
                  2024
                  <span className="absolute right-[-7px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--primary)]/60" />
                </div>
                <div>
                  <p className="text-fg font-medium">Rebuild Doswall App</p>
                  <p className="text-sm text-muted">
                    Rebuild dari Dogoes (Kotlin) ke Flutter/Dart untuk cross‑platform,
                    dengan REST API dan geolokasi real‑time.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="grid gap-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">Selected previews</h2>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://works.deauport.id"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl border border-border hover:bg-card transition"
              >
                Works
              </a>
              <a
                href="https://labs.deauport.id"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl border border-border hover:bg-card transition"
              >
                Labs
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              {
                title: "DeltaT32",
                brief:
                  "PCB design di KiCad: mulai dari schematic capture, penentuan footprint, penataan net/label, hingga routing 2‑layer yang mempertimbangkan lebar trace & clearance. Output akhir: BOM dan berkas Gerber siap manufaktur.",
                stack: ["KiCad", "PCB", "Schematic", "Layout", "Gerber"],
              },
              {
                title: "Doswall (ex Dogoes)",
                brief:
                  "Aplikasi pengumuman & geotag kampus. Awalnya Dogoes (native Android/Kotlin), lalu di‑rebuild menjadi Doswall dengan Flutter/Dart untuk dukungan lintas platform. Integrasi REST API, autentikasi, dan pengambilan lokasi real‑time.",
                stack: ["Flutter", "Dart", "Kotlin", "REST API", "Geolocation"],
              },
              {
                title: "HAR RNN–LSTM (Prototype)",
                brief:
                  "Eksperimen Human Activity Recognition berbasis time‑series IMU. Pipeline: pra‑proses data (windowing/normalisasi) → arsitektur RNN/LSTM (Keras/TensorFlow) → evaluasi akurasi. Proyek dihentikan karena akurasi rendah, tapi menghasilkan banyak catatan untuk pendekatan Edge ML berikutnya.",
                stack: ["Python", "Keras", "TensorFlow", "RNN/LSTM", "IMU"],
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