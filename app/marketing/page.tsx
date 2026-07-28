import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import IncludedItem from "@/components/IncludedItem";
import SprocketDivider from "@/components/SprocketDivider";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Marketing",
  description:
    "Content calendars, campaign planning, and social strategy that turn one shoot into weeks of material with a plan behind it.",
};

export default function MarketingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Marketing"
        title="A plan behind every post."
        description="Content calendars, campaign planning, and social strategy that turn one shoot into weeks of material — instead of scrambling for something to post."
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
              title="Content calendars"
              description="A posting schedule built around your shoots, launches, and slow seasons, so content never feels last-minute."
            />
            <IncludedItem
              title="Campaign planning"
              description="Launch plans that tie your video, photo, and ad spend to a single goal instead of running in parallel."
              delay={0.06}
            />
            <IncludedItem
              title="Social strategy"
              description="Platform-specific guidance on what to post, when, and why — grounded in what your audience actually engages with."
              delay={0.12}
            />
            <IncludedItem
              title="Performance reporting"
              description="Straightforward monthly reporting on what worked, so the plan keeps improving instead of guessing."
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
              Where it fits
            </h2>
            <p className="mt-4 max-w-xl text-paper/70">
              Marketing strategy is the connective tissue between the other
              six services — it&apos;s what turns a videography shoot, a
              photo set, and an ad campaign into one coordinated push instead
              of three disconnected efforts.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:px-8">
          <h2 className="font-display text-3xl tracking-wide uppercase md:text-4xl">
            Need a plan, not just content?
          </h2>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/contact">Start a project</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
