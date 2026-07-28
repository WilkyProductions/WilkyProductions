"use client";

import { useState } from "react";
import { services } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-line bg-mist p-8">
        <p className="font-display text-xl tracking-wide uppercase">
          Message sent
        </p>
        <p className="mt-2 text-steel">
          Thanks for reaching out — we&apos;ll get back to you within a
          couple of business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-display text-sm tracking-wider uppercase">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink focus:border-signal-deep"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-display text-sm tracking-wider uppercase">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink focus:border-signal-deep"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="font-display text-sm tracking-wider uppercase">
          What do you need?
        </label>
        <select
          id="service"
          name="service"
          className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink focus:border-signal-deep"
        >
          {services.map((s) => (
            <option key={s.slug}>{s.label}</option>
          ))}
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="font-display text-sm tracking-wider uppercase">
          Tell us about the project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink focus:border-signal-deep"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 font-display text-sm tracking-wider text-ink uppercase shadow-lg shadow-signal/20 transition-all hover:-translate-y-0.5 hover:shadow-signal/40 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-signal-deep">
          Something went wrong — try again, or email us directly.
        </p>
      )}
    </form>
  );
}
