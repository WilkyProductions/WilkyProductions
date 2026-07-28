import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import IncludedItem from "@/components/IncludedItem";
import SprocketDivider from "@/components/SprocketDivider";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "Studio product photography, on-location action, and event coverage for brands and builders who need images that sell.",
};

export default function PhotographyPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Photography"
        title="Images that sell before you say a word."
        description="Studio product shots, on-location action, and event coverage — lit and framed so the work speaks for itself on a listing or a feed."
      />

      <SprocketDivider tone="light" />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl tracking-wide uppercase md:text-4xl">
              What&apos;s included
            </h2>
          </Reveal>
          <div className="mt-4">
            <IncludedItem
              title="Product photography"
              description="Clean studio shots for listings, catalogs, and packaging — consistent lighting across your whole lineup."
            />
            <IncludedItem
              title="On-location action"
              description="Trail, track, and job-site photography that shows your product doing what it's built for."
            delay={0.06}
            />
            <IncludedItem
              title="Event coverage"
              description="Full coverage of meetups, launches, and races, delivered fast enough to post while it's still relevant."
            delay={0.12}
            />
            <IncludedItem
              title="Retouching & delivery"
              description="Color-corrected, retouched images delivered in the sizes you need for web, print, and social."
            delay={0.18}
            />
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex aspect-square items-center justify-center rounded-3xl border border-paper/15 text-sm text-paper/50">
                  Photo sample {i + 1}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:px-8">
          <h2 className="font-display text-3xl tracking-wide uppercase md:text-4xl">
            Let&apos;s shoot your lineup.
          </h2>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/contact">Book a shoot</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
