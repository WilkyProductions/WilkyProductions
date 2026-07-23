import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  const { name, rating, service, quote } = await request.json();

  if (!name || !rating || !quote) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email isn't configured yet. Please send this to us directly." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Wilky Productions Website <onboarding@resend.dev>",
    to: site.email,
    subject: `New review submission — ${name} (${rating}★)`,
    text: `A new review was submitted on the website.\n\nName: ${name}\nRating: ${rating} / 5\nService: ${service || "N/A"}\n\nReview:\n${quote}\n\nAdd this to the Reviews section on the site if it looks good to publish.`,
  });

  if (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send review." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
