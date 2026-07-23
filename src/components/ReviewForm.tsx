"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export default function ReviewForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name")?.toString() ?? "",
      company: data.get("company")?.toString() ?? "",
      rating: data.get("rating")?.toString() ?? "",
      service: data.get("service")?.toString() ?? "",
      quote: data.get("quote")?.toString() ?? "",
    };

    setStatus("sending");

    try {
      const res = await fetch("/api/review", {
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

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-border bg-surface-2 p-8 text-center">
        <p className="font-display text-xl uppercase tracking-wide text-accent">Thank you!</p>
        <p className="mt-3 text-sm text-text-secondary">
          Your review has been submitted. I really appreciate you taking the time to share your experience.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          Your name
          <input
            name="name"
            type="text"
            required
            className="rounded-sm border border-border bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-accent"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Company name (optional)
          <input
            name="company"
            type="text"
            className="rounded-sm border border-border bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-accent"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          Rating
          <select
            name="rating"
            required
            defaultValue=""
            className="rounded-sm border border-border bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-accent"
          >
            <option value="" disabled>
              Select a rating
            </option>
            <option value="5">★★★★★ (5)</option>
            <option value="4">★★★★☆ (4)</option>
            <option value="3">★★★☆☆ (3)</option>
            <option value="2">★★☆☆☆ (2)</option>
            <option value="1">★☆☆☆☆ (1)</option>
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Service you used
          <select
            name="service"
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
      </div>

      <label className="flex flex-col gap-2 text-sm">
        Your review
        <textarea
          name="quote"
          rows={5}
          required
          placeholder="Tell us about your experience working together."
          className="rounded-sm border border-border bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-accent"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:bg-accent-dark disabled:opacity-60"
      >
        {status === "sending" ? "Submitting…" : "Submit review"}
      </button>

      {status === "error" && (
        <p className="text-sm text-text-secondary">
          Something went wrong submitting that. Email {site.email} directly instead.
        </p>
      )}
    </form>
  );
}
