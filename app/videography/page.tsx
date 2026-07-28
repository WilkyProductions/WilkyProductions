import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import IncludedItem from "@/components/IncludedItem";
import SprocketDivider from "@/components/SprocketDivider";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Videography",
  description:
    "Trail edits, build features, and product spots shot and cut to match the pace of what's actually happening.",
};

export default function VideographyPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Videography"
        title="Footage that earns the rewatch."
        description="Trail runs, build reveals, product spots, and event recaps — filmed on location and edited with a pace that matches the ride, not a template."
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
              title="Trail & event coverage"
              description="Multi-angle capture of runs, races, and meetups, delivered as short-form cuts ready for Instagram and YouTube."
            />
            <IncludedItem
              title="Build features"
              description="Story-driven walkthroughs of a fabrication build or install, shot in the shop and on the rig."
              delay={0.06}
            />
            <IncludedItem
              title="Product & install spots"
              description="Clean, well-lit spots that show exactly how a part works and why it's worth buying."
              delay={0.12}
            />
            <IncludedItem
              title="Color, sound, and delivery"
              description="Full edit with color grading, licensed music, and exports sized for every platform you post to."
              delay={0.18}
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="glow-cyan pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl tracking-wide uppercase md:text-4xl">
              How it works
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              <div>
                <p className="font-script text-signal text-2xl">Plan</p>
                <p className="mt-2 text-paper/70">
                  We talk through the shots, the location, and what the edit
                  needs to do for your brand.
                </p>
              </div>
              <div>
                <p className="font-script text-signal text-2xl">Shoot</p>
                <p className="mt-2 text-paper/70">
                  On-site or in-shop, with the gear to capture action and
                  detail without slowing your day down.
                </p>
              </div>
              <div>
                <p className="font-script text-signal text-2xl">Deliver</p>
                <p className="mt-2 text-paper/70">
                  Edited, graded, and exported in the formats you need,
                  usually within a week of the shoot.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:px-8">
          <h2 className="font-display text-3xl tracking-wide uppercase md:text-4xl">
            Ready to shoot something?
          </h2>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/contact">Book a shoot</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
