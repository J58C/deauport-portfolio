"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Pref = "light" | "dark" | null;

export default function ThemeSwitch() {
  const [pref, setPref] = useState<Pref>(null);
  const [systemDark, setSystemDark] = useState(false);

  function applyTheme(p: Pref) {
    const root = document.documentElement;
    if (p === null) {
      root.removeAttribute("data-theme");
      localStorage.removeItem("theme");
    } else {
      root.setAttribute("data-theme", p);
      localStorage.setItem("theme", p);
    }
  }

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Pref) || null;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const initialSys = mq.matches;
    setSystemDark(initialSys);
    applyTheme(saved);
    setPref(saved);

    const onChange = (e: MediaQueryListEvent) => {
      setSystemDark(e.matches);
      if (saved === null) applyTheme(null);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const currentIsDark = pref === null ? systemDark : pref === "dark";

  const toggle = () => {
    const next: Pref = currentIsDark ? "light" : "dark";
    setPref(next);
    applyTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center justify-center p-2 rounded-xl hover:bg-card transition
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]
                 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
      title="Toggle theme"
    >
      {currentIsDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}