import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN ?? "";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID ?? "";

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

  if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
    const text = [
      "📩 *Новая заявка с сайта*",
      `👤 Имя: ${name || "—"}`,
      `🏢 Компания: ${company || "—"}`,
      `📧 Email: ${email}`,
      `💬 Сообщение: ${message || "—"}`,
    ].join("\n");

    await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      }
    );
  }

  return NextResponse.json({ ok: true });
}
