import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: { default: "Deauport", template: "%s · Deauport" },
  description: "Portfolio — web, mobile, embedded systems, and hardware design.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-fg transition-colors">
        <NavBar />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}