"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import ThemeSwitch from "@/components/ThemeSwitch";

const links = [
  { href: "/", label: "Home", type: "link" as const },
  { href: "/about", label: "About", type: "link" as const },
  { href: "https://works.deauport.id", label: "Works", type: "external" as const },
  { href: "https://labs.deauport.id", label: "Labs", type: "external" as const },
  { href: "/contact", label: "Contact", type: "link" as const },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;

        if (y < 16) setHidden(false);
        else if (Math.abs(delta) > 6) setHidden(delta > 0);

        lastY.current = y;
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NavItem = ({ href, label, active }: { href: string; label: string; active?: boolean }) => (
    <Link href={href} className={`nav-link ${active ? "is-active" : ""}`}>
      <span>{label}</span>
      {active && <span className="nav-underline" />}
    </Link>
  );

  const ExternalItem = ({ href, label }: { href: string; label: string }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="nav-link"
      aria-label={`${label} (opens in new tab)`}
      title={`${label} — opens in new tab`}
    >
      <span className="inline-flex items-center gap-1.5">
        {label}
        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
      </span>
    </a>
  );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 will-change-transform ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container mt-3 mb-4">
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-bg/70 backdrop-blur-md px-3 md:px-4 h-14 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <Link href="/" className="px-2 py-1 rounded-xl text-fg tracking-tight font-brand text-xl" >
            Déauport
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {links.map((l) =>
              l.type === "link" ? (
                <NavItem key={l.label} href={l.href} label={l.label} active={pathname === l.href} />
              ) : (
                <ExternalItem key={l.label} href={l.href} label={l.label} />
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <ThemeSwitch />
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]
                       focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <>
          <button
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 md:hidden bg-transparent"
          />
          <div className="md:hidden fixed top-[5.5rem] left-0 right-0 z-50">
            <div className="container">
              <div className="rounded-2xl border border-border/60 bg-bg/90 backdrop-blur-md p-3 shadow-lg">
                <nav className="grid gap-2">
                  {links.map((l) =>
                    l.type === "link" ? (
                      <Link
                        key={l.label}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={`px-3 py-2 rounded-xl transition hover:bg-card ${
                          pathname === l.href ? "text-fg" : "text-muted"
                        }`}
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="px-3 py-2 rounded-xl transition hover:bg-card text-muted"
                        aria-label={`${l.label} (opens in new tab)`}
                        title={`${l.label} — opens in new tab`}
                      >
                        <span className="inline-flex items-center gap-1.5">
                          {l.label}
                          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                        </span>
                      </a>
                    )
                  )}
                  <div className="mt-1">
                    <ThemeSwitch />
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}