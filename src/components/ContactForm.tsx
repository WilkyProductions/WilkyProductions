"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name")?.toString() ?? "",
      email: data.get("email")?.toString() ?? "",
      projectType: data.get("projectType")?.toString() ?? "",
      message: data.get("message")?.toString() ?? "",
    };

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
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
        disabled={status === "sending"}
        className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:bg-accent-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>

      {status === "sent" && (
        <p className="text-sm text-text-secondary">
          Message sent. I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-text-secondary">
          Something went wrong sending that. Email {site.email} directly instead.
        </p>
      )}
    </form>
  );
}
