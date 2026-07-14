"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString() ?? "";
    const email = data.get("email")?.toString() ?? "";
    const projectType = data.get("projectType")?.toString() ?? "";
    const message = data.get("message")?.toString() ?? "";

    const subject = encodeURIComponent(`Quote request: ${projectType || "General inquiry"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`
    );

    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          Name
          <input
            name="name"
            type="text"
            required
            className="rounded-sm border border-border bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-accent"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Email
          <input
            name="email"
            type="email"
            required
            className="rounded-sm border border-border bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-accent"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm">
        Project type
        <select
          name="projectType"
          defaultValue="Videography"
          className="rounded-sm border border-border bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-accent"
        >
          <option>Videography</option>
          <option>Photography</option>
          <option>Website Design</option>
          <option>Graphic / Logo Design</option>
          <option>Other</option>
        </select>
      </label>

      <label className="flex flex-col gap-2 text-sm">
        Tell me about your project
        <textarea
          name="message"
          rows={5}
          required
          className="rounded-sm border border-border bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-accent"
        />
      </label>

      <button
        type="submit"
        className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:bg-accent-dark"
      >
        Send
      </button>

      {submitted && (
        <p className="text-sm text-text-secondary">
          Opening your email app now. If nothing happens, email {site.email} directly.
        </p>
      )}
    </form>
  );
}
