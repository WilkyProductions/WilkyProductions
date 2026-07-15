import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PhotoGrid from "@/components/PhotoGrid";
import ContactCta from "@/components/ContactCta";
import CategoryBackdrop from "@/components/CategoryBackdrop";
import { designCategories } from "@/lib/media";

export const metadata: Metadata = {
  title: "Design | Wilky Productions",
  description: "Logo design, apparel graphics, and motorsports imagery. Email for pricing.",
};

export default function DesignPage() {
  return (
    <div className="relative">
      <CategoryBackdrop variant="design" />

      <PageHero
        eyebrow="Graphic & Logo Design"
        title="Design"
        description="Logos, apparel, and motorsports graphics. Email for a quote on any project."
      />

      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10">
          {designCategories.map((category) => (
            <div key={category.title}>
              <h2 className="font-display text-2xl uppercase tracking-wide">{category.title}</h2>
              <div className="mt-5">
                <PhotoGrid items={category.items} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactCta />
    </div>
  );
}
