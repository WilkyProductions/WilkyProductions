import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import IncludedItem from "@/components/IncludedItem";
import SprocketDivider from "@/components/SprocketDivider";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Aerial Photo & Video",
  description:
    "FAA-registered drone photo and video for property, trail, event, and job-site coverage — the angle ground cameras can't get.",
};

export default function AerialPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Aerial Photo & Video"
        title="The angle ground cameras can't get."
        description="FAA-registered drone photo and video for property, trail, event, and job-site coverage — scaled to fit into any project alongside ground footage."
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
              title="Property & job-site coverage"
              description="Full-perimeter aerial photo and video for real estate, construction progress, and facility overviews."
            />
            <IncludedItem
              title="Trail & event flyovers"
              description="Wide establishing shots and chase footage for races, meetups, and trail runs that ground cameras can't follow."
              delay={0.06}
            />
            <IncludedItem
              title="Product & brand footage"
              description="Aerial reveals and tracking shots that add scale and motion to a product or vehicle feature."
              delay={0.12}
            />
            <IncludedItem
              title="Licensed & insured"
              description="FAA Part 107 certified operation, so coverage is compliant on any site that requires it."
              delay={0.18}
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="glow-cyan pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex aspect-square items-center justify-center rounded-3xl border border-paper/15 text-sm text-paper/50"
                >
                  Aerial still {i + 1}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:px-8">
          <h2 className="font-display text-3xl tracking-wide uppercase md:text-4xl">
            Need eyes in the sky?
          </h2>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/contact">Book a flight</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
