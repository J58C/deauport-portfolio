"use client";

import { useEffect } from "react";
import { animate, stagger } from "animejs";

export default function Hero() {
  useEffect(() => {
    animate(".hero-item", { opacity: [0, 1], translateY: [8, 0], delay: stagger(80), duration: 420, easing: "easeOutQuad" });
  }, []);

  return (
    <section className="pt-16 md:pt-24 pb-12">
      <div className="container grid gap-6">
        <div className="grid gap-4 max-w-3xl">
          <p className="hero-item text-sm uppercase tracking-widest text-muted">Portfolio</p>
          <h1 className="hero-item text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-gradient">Hardware & Embedded</span> meets
            <br className="hidden sm:block" />
            Modern Web Engineering.
            </h1>
          <p className="hero-item text-lg text-muted">
            I build end-to-end projects—from circuits & microcontrollers to web and mobile apps.
          </p>
          <div className="hero-item flex gap-3 pt-2">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 rounded-xl bg-primary text-on-primary hover:opacity-90 transition cursor-not-allowed
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
              title="Coming soon"
            >
              See Works (soon)
            </button>
            <a
              href="https://github.com/J58C"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-xl border border-border hover:bg-card transition
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}