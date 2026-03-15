import { NextRequest, NextResponse } from "next/server";

// TODO: replace with your actual delivery method
// Options: nodemailer (SMTP), Resend, Telegram bot, CRM webhook, etc.
const NOTIFY_WEBHOOK_URL = process.env.CONTACT_WEBHOOK_URL ?? "";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || !body.email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const { name, company, email, message } = body as {
    name: string;
    company: string;
    email: string;
    message: string;
  };

  // If a webhook URL is configured, forward the submission
  if (NOTIFY_WEBHOOK_URL) {
    await fetch(NOTIFY_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, company, email, message }),
    });
  }

  return NextResponse.json({ ok: true });
}
