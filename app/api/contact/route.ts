import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ContactSchema } from "@/lib/contact-schema";

// rate-limit sederhana (tetap sama)
const WINDOW_MS = 60_000; const MAX_HITS = 5;
const hits = new Map<string, number[]>();
const rateLimit = (ip: string) => {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  arr.push(now); hits.set(ip, arr);
  return arr.length <= MAX_HITS;
};

const getIP = (req: Request) =>
  (req.headers.get("x-forwarded-for")?.split(",")[0] ?? req.headers.get("x-real-ip") ?? "0.0.0.0").trim();

const {
  SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO,
} = process.env;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT || 587),
  secure: String(SMTP_SECURE).toLowerCase() === "true",
  auth: { user: SMTP_USER, pass: SMTP_PASS },
});

export async function POST(request: Request) {
  const ip = getIP(request);
  if (!rateLimit(ip)) return NextResponse.json({ success: false, message: "Rate limit exceeded" }, { status: 429 });

  const json = await request.json().catch(() => null);
  const parsed = ContactSchema.safeParse(json);
  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors; // { name?: string[], email?:..., message?:... }
    return NextResponse.json({ success: false, errors }, { status: 400 });
  }
  const { name, email, message } = parsed.data;

  try {
    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: `${name} <${email}>`,
      subject: `New message from ${name} via Deauport`,
      text: message,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>IP:</b> ${ip}</p>
        <hr/>
        <pre style="white-space:pre-wrap;font-family:system-ui,Segoe UI,Arial">${escapeHtml(message)}</pre>
      `,
    });
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[m]!));
}