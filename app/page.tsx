import Hero from "@/components/Hero";
import { GraduationCap, Cpu, Boxes } from "lucide-react";

function SectionHeader({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <h2 className="text-lg md:text-xl font-semibold tracking-tight">{title}</h2>
      {hint ? <span className="text-xs text-muted">{hint}</span> : null}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] px-2 py-0.5 rounded-lg border border-border/70 bg-bg">
      {children}
    </span>
  );
}

function Highlight({
  icon,
  title,
  caption,
}: {
  icon: React.ReactNode;
  title: string;
  caption: string;
}) {
  return (
    <li
      className="group relative rounded-2xl border border-border/70 bg-card p-5
                 transition will-change-transform card-hover"
    >
      <div
        className="pointer-events-none absolute left-0 right-0 -top-px h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--primary) 75%, white 0%), transparent)",
        }}
      />
      <div className="mb-2 inline-flex items-center gap-2 text-muted">
        <span className="inline-flex w-6 h-6 items-center justify-center rounded-lg border border-border/70 bg-bg">
          {icon}
        </span>
        <span className="text-sm">{title}</span>
      </div>
      <div className="text-fg font-medium">{caption}</div>
    </li>
  );
}

function Feature({
  title,
  desc,
  stack,
}: {
  title: string;
  desc: string;
  stack: string[];
}) {
  return (
    <article
      className="tilt relative rounded-2xl border border-border/70 bg-card overflow-hidden
                 transition will-change-transform card-hover"
    >
      <div className="p-6">
        <h3 className="text-base md:text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted mt-1">{desc}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {stack.map((s) => (
            <span
              key={s}
              className="text-[11px] px-2 py-0.5 rounded-lg border border-border/70 bg-bg"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-[2px] bg-[radial-gradient(50%_120%_at_50%_0%,color-mix(in_oklab,var(--primary)_60%,transparent),transparent)]" />
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero-wrap">
        <div className="hero-overlay" aria-hidden="true" />
        <Hero />
      </section>

      <div className="my-12 h-px bg-gradient-to-r from-transparent via-[var(--border)]/35 to-transparent" />

      <section className="pt-2 pb-10">
        <div className="container grid gap-4">
          <SectionHeader title="Highlights" hint="Quick facts" />
          <ul className="grid sm:grid-cols-3 gap-3 text-sm">
            <Highlight
              icon={<GraduationCap className="w-3.5 h-3.5" />}
              title="Education"
              caption="Computer Engineering · UNNES"
            />
            <Highlight
              icon={<Cpu className="w-3.5 h-3.5" />}
              title="Focus"
              caption="Embedded • Web • Mobile"
            />
            <Highlight
              icon={<Boxes className="w-3.5 h-3.5" />}
              title="Stack"
              caption="C++ • Python • Java • TS • JS"
            />
          </ul>
        </div>
      </section>

      <section className="pb-12">
        <div className="container grid gap-4">
          <div className="flex items-center justify-between">
            <SectionHeader title="Featured previews" />
            <div className="flex items-center gap-2">
              <a
                href="https://works.deauport.id"
                target="_blank"
                className="px-3 py-1.5 rounded-xl border border-border hover:bg-card transition"
                rel="noopener noreferrer"
              >
                Works
              </a>
              <a
                href="https://labs.deauport.id"
                target="_blank"
                className="px-3 py-1.5 rounded-xl border border-border hover:bg-card transition"
                rel="noopener noreferrer"
              >
                Labs
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            <Feature
              title="DeltaT32"
              desc="Proyek PCB di KiCad — mulai dari schematic capture, mapping footprint, hingga routing 2‑layer. Hasilkan Gerber & BOM siap manufaktur."
              stack={["KiCad", "PCB", "Schematic", "Layout", "Gerber"]}
            />
            <Feature
              title="Doswall (ex Dogoes)"
              desc="Aplikasi pengumuman & geotag kampus. Berawal sebagai Dogoes (Kotlin), lalu di‑rebuild menjadi Doswall dengan Flutter/Dart + REST API."
              stack={["Flutter", "Dart", "Kotlin", "REST API", "Geolocation"]}
            />
            <Feature
              title="HAR RNN–LSTM (Prototype)"
              desc="Human Activity Recognition dari data IMU time‑series. Eksperimen model RNN/LSTM; dihentikan karena akurasi rendah, menyisakan banyak pembelajaran."
              stack={["Python", "Keras", "RNN/LSTM", "IMU", "Jupyter"]}
            />
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container grid lg:grid-cols-2 gap-4">
          <article className="rounded-2xl border border-border/70 bg-card p-6 md:p-8 shadow-[0_10px_26px_color-mix(in_oklab,var(--primary)_12%,transparent)]">
            <h3 className="text-lg font-semibold">What I’m into</h3>
            <p className="text-sm text-muted mt-3">
              Menghubungkan <span className="text-fg">IoT/data</span> dengan <span className="text-fg">web modern</span>:
              dari aliran data sensor → API & backend yang terukur → dashboard serta aplikasi
              mobile yang bersih & aksesibel. Fokus pada kode yang terbaca, iterasi kecil, dan DX yang mulus.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["IoT", "Next.js", "Tailwind", "Flutter", "Kotlin"].map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
            <a
              href="/about"
              className="inline-flex items-center mt-5 px-3 py-1.5 rounded-xl border border-border hover:bg-card transition
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]
                         focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              See more on About
            </a>
          </article>

          <article className="rounded-2xl border border-border/70 bg-card p-6 md:p-8">
            <h3 className="text-lg font-semibold">Recent mini-notes</h3>
            <ul className="text-sm text-muted grid gap-2 mt-2 list-disc list-inside">
              <li>ESP32-C3 power test → bandingkan deep sleep vs light sleep; konsumsi idle ±200–300 µA.</li>
              <li>Serial vs MQTT → uji latency data stream, MQTT lebih stabil untuk data sensor periodik.</li>
              <li>Node.js on cPanel → auto-deploy via GitHub Actions + ekstrak ZIP langsung di server.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="rounded-2xl border border-border/70 p-6 md:p-8 bg-card shadow-[0_10px_26px_color-mix(in_oklab,var(--primary)_12%,transparent)]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">Have an idea to build?</h3>
                <p className="text-sm text-muted">Open to collaborations around embedded ↔ web integrations.</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 rounded-xl bg-primary text-on-primary hover:opacity-90 transition
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]
                             focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                >
                  Contact
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center px-4 py-2 rounded-xl border border-border hover:bg-card transition
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]
                             focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                >
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}