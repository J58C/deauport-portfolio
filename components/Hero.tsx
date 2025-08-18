"use client";

import { ArrowDown, Github } from "lucide-react";

export default function Hero() {
  const items = [
    "MQTT",
    "Edge Impulse",
    "FreeRTOS",
    "Next.js",
    "Node.js",
    "Tailwind",
    "React",
    "Vue",
    "Flutter",
    "Kotlin",
    "Dart",
    "cPanel",
    "GitHub",
    "C++",
    "Python",
    "Java",
    "Kicad",
  ];
  const loop = [...items, ...items];

  return (
    <section className="relative isolate overflow-hidden pt-20 md:pt-28 pb-16 md:pb-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.9]"
        style={{
          backgroundImage: `
            radial-gradient(90% 60% at 15% 0%,
              color-mix(in oklab, var(--primary) 20%, transparent) 0%,
              transparent 55%),
            radial-gradient(80% 60% at 100% -15%,
              color-mix(in oklab, var(--primary) 14%, transparent) 0%,
              transparent 60%),
            var(--hero-bg)
          `,
          backgroundSize: "auto, auto, cover",
          backgroundPosition: "center, center, center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="container grid gap-5">
        <header className="grid gap-3 max-w-4xl">
          <p className="text-muted text-xl uppercase tracking-wide text-fg">Portfolio</p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-gradient">Embedded Wearables</span>
            <br />
            meets Modern Web <br className="md:hidden" />{" "}
            <br />
            & Mobile. <br className="md:hidden" />{" "}
          </h1>

          <p className="text-muted text-base md:text-lg max-w-2xl">
            I build end-to-end projects—from circuits & microcontrollers to fast APIs
            and clean, accessible UI.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="https://works.deauport.id"
              target="_blank"
              className="inline-flex items-center px-4 py-2 rounded-xl bg-primary text-on-primary hover:opacity-90 transition
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]
                         focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
              rel="noopener noreferrer"
            >
              See Works
            </a>

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
        </header>

        <div className="rounded-2xl border border-border/70 bg-card/70 backdrop-blur card-accent px-3 md:px-4 py-2 overflow-hidden">
          <div className="marquee">
            <ul className="marquee-track flex items-center gap-2">
              {loop.map((t, i) => (
                <li key={i} className="marquee-item">{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted">
          <ArrowDown className="w-4 h-4 animate-bounce" />
          Scroll
        </div>
      </div>
    </section>
  );
}