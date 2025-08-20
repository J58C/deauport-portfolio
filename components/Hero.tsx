"use client";

import { ArrowDown, Github } from "lucide-react";

export default function Hero() {
  const items = [
    "MQTT", "Edge Impulse", "FreeRTOS", "KiCad",
    "Next.js", "React", "Node.js", "Tailwind", "Vue",
    "Flutter", "Kotlin", "Compose", "REST API", "Dart",
    "cPanel", "GitHub", "PCB", "Schematic", "Gerber",
    "C++", "Python", "Java",
    "RNN", "LSTM", "Keras", "TensorFlow", "PyTorch",
  ];

  return (
    <section
      className="
        relative isolate overflow-hidden
        pt-24 md:pt-28 pb-10
        min-h-[calc(100svh-5.5rem)]
        flex flex-col
      "
    >
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

      <div className="container my-auto">
        <div className="w-full flex flex-col items-start gap-6 px-6 sm:px-8 md:px-10 lg:px-12">
          <div className="flex-1 md:hidden" />

          <header className="grid gap-3 max-w-4xl text-left">
            <p className="text-muted text-sm uppercase tracking-widest">Portfolio</p>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug sm:leading-tight">
              <span className="text-gradient">Embedded Wearables</span>
              <br />
              meets Modern Web &amp; Mobile.
            </h1>

            <p className="text-muted text-base md:text-lg max-w-2xl">
              I build end-to-end projects—from circuits &amp; microcontrollers to fast APIs
              and clean, accessible UI.
            </p>

            <div className="flex flex-wrap items-center justify-start gap-3 pt-1">
              <a
                href="https://works.deauport.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-xl bg-primary text-on-primary hover:opacity-90 transition
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]
                           focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
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

          <div className="w-full max-w-4xl rounded-2xl border border-border/70 bg-card/70 backdrop-blur card-accent px-3 md:px-4 py-2 overflow-hidden">
            <div className="marquee-smooth" style={{ height: "2rem" }}>
              <ul className="track" aria-hidden="false">
                {items.map((t, i) => (
                  <li key={`a-${i}`} className="marquee-item">{t}</li>
                ))}
              </ul>
              <ul className="track dup" aria-hidden="true">
                {items.map((t, i) => (
                  <li key={`b-${i}`} className="marquee-item">{t}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1 md:hidden" />

          <div className="pt-2 md:pt-4 flex items-center gap-2 text-xs text-muted">
            <ArrowDown className="w-4 h-4 animate-bounce" />
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
}