"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeSwitch from "@/components/ThemeSwitch";

const links = [
  { href: "/", label: "Home", type: "link" as const },
  { href: "/about", label: "About", type: "link" as const },
  { href: "#", label: "Works", type: "soon" as const, title: "Will be on subdomain" },
  { href: "#", label: "Labs", type: "soon" as const, title: "Will be on subdomain" },
  { href: "/contact", label: "Contact", type: "link" as const },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // --- auto-hide on scroll ---
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

  // --- components ---
  const NavItem = ({ href, label, active }: { href: string; label: string; active?: boolean }) => (
    <Link
      href={href}
      className={`nav-link ${active ? "is-active" : ""}`}
    >
      <span>{label}</span>
      {active && <span className="nav-underline" />}
    </Link>
  );

  const SoonItem = ({ label, title }: { label: string; title: string }) => (
    <button
      type="button"
      title={title}
      aria-disabled="true"
      className="px-3 py-2 rounded-xl text-muted border border-border/80 bg-card/60 cursor-not-allowed hover:bg-card transition relative"
    >
      {label}
      <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-[var(--primary)]/15 text-[var(--primary)] border border-[var(--primary)]/30 align-middle">
        soon
      </span>
    </button>
  );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 will-change-transform ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container mt-3 mb-4">
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-bg/70 backdrop-blur-md px-3 md:px-4 h-14 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <Link href="/" className="px-2 py-1 rounded-xl text-fg font-semibold tracking-tight">
            Deauport
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {links.map((l) =>
              l.type === "link" ? (
                <NavItem key={l.label} href={l.href} label={l.label} active={pathname === l.href} />
              ) : (
                <SoonItem key={l.label} label={l.label} title={l.title!} />
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
          <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setOpen(false)} />
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
                      <SoonItem key={l.label} label={l.label} title={l.title!} />
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