export const metadata = {
  title: "About",
  description: "About me and my skills.",
};

const skills = {
  Languages: ["C++", "Python", "JavaScript", "TypeScript", "Kotlin"],
  Web: ["Next.js", "React", "Node.js", "REST", "Tailwind CSS"],
  Embedded_IoT: ["ESP32", "Sensors", "Serial/I2C/SPI", "Edge Impulse", "MQTT"],
  Tools: ["Git", "Vercel", "Linux", "Docker (basic)"],
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
    <main className="py-16 md:py-24">
      <div className="container max-w-4xl grid gap-8">
        {/* Intro */}
        <header className="grid gap-3">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">About</h1>
          <p className="text-muted">
            I’m <span className="text-fg font-medium">Hafidh</span> — also known as <span className="text-fg font-medium">Deau / J58c</span>.  
            I build end-to-end projects: from circuits & embedded firmware to modern web and mobile apps.
          </p>
        </header>

        {/* What I do */}
        <section className="rounded-xl border border-border p-6 bg-card grid gap-2">
          <h2 className="text-xl font-semibold">What I do</h2>
          <ul className="list-disc pl-5 text-muted space-y-1">
            <li>Embedded prototyping (ESP32, sensors, simple PCBs)</li>
            <li>Full-stack web (Next.js/React, REST API)</li>
            <li>Mobile apps (Flutter/Android)</li>
            <li>Lightweight deploy & ops (Vercel, VPS)</li>
          </ul>
        </section>

        {/* Skills */}
        {Object.entries(skills).map(([group, items]) => (
          <section key={group} className="rounded-xl border border-border p-6 bg-card">
            <h3 className="text-lg font-semibold mb-3">{group.replace("_", " / ")}</h3>
            <div className="flex flex-wrap gap-2">
              {(items as string[]).map((s) => <Pill key={s}>{s}</Pill>)}
            </div>
          </section>
        ))}

        {/* Status */}
        <section className="rounded-xl border border-border p-6 bg-card">
          <h2 className="text-xl font-semibold mb-2">Currently</h2>
          <p className="text-muted">
            Undergraduate in Computer Engineering (Semarang State University) — exploring embedded systems,
            practical IoT integrations, and clean UI/UX for developer tools.
          </p>
        </section>
      </div>
    </main>
  );
}