import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { apps } from "@/lib/media";

export async function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) return {};

  return {
    title: app.name,
    description: app.tagline,
  };
}

export default async function AppDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) notFound();

  const hasBarDartsPages = app.slug === "bar-darts";

  return (
    <div>
      <PageHero eyebrow="Wilky Productions" title={app.name} description={app.tagline} />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
          <Image
            src={app.icon.src}
            alt={`${app.name} icon`}
            width={app.icon.width}
            height={app.icon.height}
            className="h-28 w-28 shrink-0 rounded-[18%] border border-border"
          />
          <div>
            <p className="max-w-xl text-text-secondary">{app.description}</p>

            <div className="mt-6 flex flex-wrap justify-center gap-4 sm:justify-start">
              {app.appStoreUrl ? (
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:bg-accent-dark"
                >
                  Download on the App Store
                </a>
              ) : (
                <span className="rounded-sm border-2 border-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent">
                  Coming soon to the App Store
                </span>
              )}
              {app.playStoreUrl && (
                <a
                  href={app.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  Get it on Google Play
                </a>
              )}
            </div>
          </div>
        </div>

        {app.features.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-lg uppercase tracking-wide">What&apos;s inside</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {app.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-full border border-border px-4 py-1.5 text-sm text-text-secondary"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-12">
          <h2 className="font-display text-lg uppercase tracking-wide">Screenshots</h2>
          <div className="mt-4 flex gap-4 overflow-x-auto pb-4">
            {app.screenshots.map((screenshot, i) => (
              <Image
                key={screenshot.src}
                src={screenshot.src}
                alt={`${app.name} screenshot ${i + 1}`}
                width={screenshot.width}
                height={screenshot.height}
                className="h-80 w-auto shrink-0 rounded-sm border border-accent/40 shadow-[0_0_18px_rgba(34,182,242,0.3)] sm:h-[32rem]"
              />
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <Link href="/apps" className="font-semibold text-accent hover:underline">
            &larr; All apps
          </Link>
          {hasBarDartsPages && (
            <>
              <Link href="/bar-darts/privacy" className="text-text-secondary hover:text-accent">
                Privacy Policy
              </Link>
              <Link href="/bar-darts/support" className="text-text-secondary hover:text-accent">
                Support
              </Link>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
