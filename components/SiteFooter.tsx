import Link from "next/link";
import { Github, Linkedin, FlaskConical, Briefcase } from "lucide-react";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20">
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)]/60 to-transparent" />

      <div className="container py-10">
        <div className="relative rounded-2xl border border-border/70 bg-card/70 backdrop-blur p-6 md:p-8 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 -top-px h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, color-mix(in oklab, var(--primary) 75%, white 0%), transparent)",
            }}
          />

          <div className="grid gap-8 md:grid-cols-3">
            <div className="grid gap-3">
              <Link
                href="/"
                className="inline-flex w-fit px-2 py-1 rounded-xl hover:bg-card transition"
                aria-label="Deauport Home"
              >
                <span className="text-fg tracking-tight font-brand text-lg">Déauport</span>
              </Link>

              <p className="text-sm text-muted max-w-sm">
                Hardware ↔ Web. Small, fast, and accessible builds.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href="https://works.deauport.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-card/10 hover:bg-card transition text-sm"
                  aria-label="Works (opens in new tab)"
                >
                  <Briefcase className="w-4 h-4" />
                  Works
                </a>
                <a
                  href="https://labs.deauport.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-card/10 hover:bg-card transition text-sm"
                  aria-label="Labs (opens in new tab)"
                >
                  <FlaskConical className="w-4 h-4" />
                  Labs
                </a>
                <a
                  href="https://github.com/J58C"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-card/10 hover:bg-card transition text-sm"
                  aria-label="GitHub (opens in new tab)"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/hmus122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-card/10 hover:bg-card transition text-sm"
                  aria-label="LinkedIn (opens in new tab)"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="grid gap-3">
              <h4 className="text-xs uppercase tracking-wide text-muted">Navigation</h4>
              <nav className="grid gap-1.5 text-sm">
                <Link href="/" className="px-2 py-1 rounded-lg hover:bg-card transition leading-none">
                  Home
                </Link>
                <Link href="/about" className="px-2 py-1 rounded-lg hover:bg-card transition leading-none">
                  About
                </Link>
                <Link href="/contact" className="px-2 py-1 rounded-lg hover:bg-card transition leading-none">
                  Contact
                </Link>
              </nav>
            </div>

            <div className="grid gap-3">
              <h4 className="text-xs uppercase tracking-wide text-muted">Notes</h4>
              <ul className="grid gap-1.5 text-sm text-muted max-w-xs">
                <li>Clean UI • fast • accessible.</li>
                <li>Full cases on Works & Labs.</li>
              </ul>

              <a
                href="#"
                className="mt-2 inline-flex px-3 py-1.5 rounded-xl border border-border hover:bg-card transition text-sm"
                aria-label="Back to top"
              >
                ↑ Back to top
              </a>
            </div>
          </div>

          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[var(--border)]/40 to-transparent" />
          <div className="mt-3 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <p className="text-xs text-muted">
              © {year} Déauport. Built with Next.js & Tailwind.
            </p>
            <div className="flex items-center gap-3 text-xs text-muted">
              <span className="hidden md:inline">Status:</span>
              <span className="inline-flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]/80" />
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]/50" />
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]/30" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}