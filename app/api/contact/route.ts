import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, service, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // TODO: wire this up to an email service (e.g. Resend) or a CRM/webhook.
  // For now this just logs the submission so the form works end-to-end.
  console.log("New contact form submission:", {
    name,
    email,
    service,
    message,
  });

  return NextResponse.json({ ok: true });
}
