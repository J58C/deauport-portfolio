import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-16">
      <div className="container">
        <div className="rounded-2xl border border-border/60 bg-bg/70 backdrop-blur-md p-6 md:p-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="col-span-2">
              <div className="text-fg font-semibold text-lg">Deauport</div>
              <p className="text-muted mt-2 text-sm">
                Portfolio hub — embedded systems × modern web. Built with Next.js.
              </p>
            </div>

            <div>
              <div className="text-fg font-semibold mb-2">Navigate</div>
              <ul className="text-sm text-muted grid gap-1.5">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><span className="opacity-70">Works (soon)</span></li>
                <li><span className="opacity-70">Labs (soon)</span></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-fg font-semibold mb-2">Elsewhere</div>
              <ul className="text-sm text-muted grid gap-1.5">
                <li>
                  <a href="https://github.com/J58C" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@deauport.id" className="hover:underline">
                    hello@deauport.id
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/60 my-6" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted">
            <span>© {new Date().getFullYear()} Deauport</span>
            <span className="opacity-80">
              Design tokens • glass card • focus ring for a11y
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}