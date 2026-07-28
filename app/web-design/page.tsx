import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import IncludedItem from "@/components/IncludedItem";
import SprocketDivider from "@/components/SprocketDivider";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Web Design",
  description:
    "Custom storefronts and marketing sites built for shops and brands that need a site as solid as their product.",
};

export default function WebDesignPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Web Design"
        title="A site built like your product — solid."
        description="Custom storefronts and marketing sites, built with real code instead of a drag-and-drop template, so it loads fast and looks like nobody else's."
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
              title="Custom storefronts"
              description="Shopify builds with custom sections, product pages, and configurators tailored to how your product actually gets bought."
            />
            <IncludedItem
              title="Marketing & brand sites"
              description="Fast, modern sites built on Next.js and Vercel — no bloated page builder slowing things down."
            delay={0.06}
            />
            <IncludedItem
              title="Ongoing support"
              description="Fixes, new sections, and small features as your business changes, without waiting on a big redesign."
            delay={0.12}
            />
            <IncludedItem
              title="SEO fundamentals"
              description="Clean markup, fast load times, and metadata set up right from day one so the site can actually be found."
            delay={0.18}
            />
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <h2 className="font-display text-3xl tracking-wide uppercase md:text-4xl">
            Built the way this site was
          </h2>
          <p className="mt-4 max-w-xl text-paper/70">
            This site is the example: Next.js, deployed on Vercel, version
            controlled on GitHub. That&apos;s the same setup we build for
            clients — fast, maintainable, and yours to keep.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:px-8">
          <h2 className="font-display text-3xl tracking-wide uppercase md:text-4xl">
            Need a site that actually works?
          </h2>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/contact">Start a project</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
