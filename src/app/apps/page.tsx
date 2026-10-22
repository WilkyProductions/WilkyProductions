import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { apps } from "@/lib/media";

export const metadata: Metadata = {
  title: "Apps",
  description: "iOS apps built by Wilky Productions.",
};

export default function AppsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Wilky Productions"
        title="Apps"
        description="A couple of apps I've built. Tap one to see screenshots and grab the download link."
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {apps.map((app) => (
            <Link
              key={app.slug}
              href={`/apps/${app.slug}`}
              className="group flex items-center gap-5 rounded-sm border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <Image
                src={app.icon.src}
                alt={`${app.name} icon`}
                width={app.icon.width}
                height={app.icon.height}
                className="h-20 w-20 shrink-0 rounded-[18%] border border-border"
              />
              <div>
                <h2 className="font-display text-xl uppercase tracking-wide">{app.name}</h2>
                <p className="mt-2 text-sm text-text-secondary">{app.tagline}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-accent">
                  View details <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
