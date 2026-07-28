import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import IncludedItem from "@/components/IncludedItem";
import SprocketDivider from "@/components/SprocketDivider";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Graphic Design",
  description:
    "Brand identity, vehicle wraps, decals, and print collateral designed to hold up on a shop floor and on a shelf.",
};

export default function GraphicDesignPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Graphic Design"
        title="Marks built to survive a shop floor."
        description="Logos, decals, wraps, and print — designed to look right at full size on a trailer and small enough to read on a favicon."
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
              title="Logo & brand identity"
              description="A mark built as a real vector, with variants for print, embroidery, and social — not just a PNG."
            />
            <IncludedItem
              title="Vehicle wraps & decals"
              description="Print-ready artwork sized and proofed for your specific rig or trailer, cut files included."
            delay={0.06}
            />
            <IncludedItem
              title="Packaging & print"
              description="Boxes, labels, hang tags, and spec sheets that match the rest of your brand."
            delay={0.12}
            />
            <IncludedItem
              title="Social & ad templates"
              description="Reusable templates so your posts and promos look consistent without a redesign every time."
            delay={0.18}
            />
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:px-8">
          <h2 className="font-display text-3xl tracking-wide uppercase md:text-4xl">
            Have a mark that needs cleaning up?
          </h2>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/contact">Start a project</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
