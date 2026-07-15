import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  const { name, email, projectType, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email isn't configured yet. Please email us directly." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Wilky Productions Website <onboarding@resend.dev>",
    to: site.email,
    replyTo: email,
    subject: `New inquiry: ${projectType || "General"} — ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType || "N/A"}\n\n${message}`,
  });

  if (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
