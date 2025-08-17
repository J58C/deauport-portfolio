import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="pb-12">
        <div className="container">
          <ul className="grid sm:grid-cols-3 gap-3 text-sm">
            <li className="rounded-xl border border-border p-4 bg-card text-muted transition hover:-translate-y-0.5 hover:border-[var(--primary)]/60 hover:shadow-md/20">
              <span className="block text-fg font-medium">Computer Engineering</span>
              <span>Semarang State University</span>
            </li>
            <li className="rounded-xl border border-border p-4 bg-card text-muted transition hover:-translate-y-0.5 hover:border-[var(--primary)]/60 hover:shadow-md/20">
              <span className="block text-fg font-medium">Focus</span>
              <span>Embedded • Web • Mobile</span>
            </li>
            <li className="rounded-xl border border-border p-4 bg-card text-muted transition hover:-translate-y-0.5 hover:border-[var(--primary)]/60 hover:shadow-md/20">
              <span className="block text-fg font-medium">Stack</span>
              <span>C++ · Python · JS · Next.js · ESP32</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}