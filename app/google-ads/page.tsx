import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import IncludedItem from "@/components/IncludedItem";
import SprocketDivider from "@/components/SprocketDivider";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Google Advertising",
  description:
    "Search and display campaigns built, tracked, and optimized in Google Ads, so your spend turns into leads, not just impressions.",
};

export default function GoogleAdsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Google Advertising"
        title="Ad spend that earns itself back."
        description="Search and display campaigns set up, tracked, and optimized in Google Ads — built to turn clicks into leads and sales, not just impressions."
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
              title="Campaign setup"
              description="Search, display, and shopping campaigns structured around what you actually sell, not a generic template."
            />
            <IncludedItem
              title="Conversion tracking"
              description="Real tracking on calls, form fills, and purchases, so you know which ads are actually working."
              delay={0.06}
            />
            <IncludedItem
              title="Ongoing optimization"
              description="Regular bid, keyword, and creative adjustments based on performance data, not a set-it-and-forget-it approach."
              delay={0.12}
            />
            <IncludedItem
              title="Monthly reporting"
              description="Clear reporting on spend, leads, and cost per result — in plain language, not an agency jargon dashboard."
              delay={0.18}
            />
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:px-8">
          <h2 className="font-display text-3xl tracking-wide uppercase md:text-4xl">
            Ready to make your ad spend work?
          </h2>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/contact">Start a project</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
