import Link from "next/link";
import { site } from "@/lib/site";

export default function ContactCta() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
          Email me for a quote on any project
        </h2>
        <p className="mt-3 text-text-secondary">{site.location}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:bg-accent-dark"
          >
            Get a quote
          </Link>
          <a
            href={site.emailHref}
            className="rounded-sm border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
