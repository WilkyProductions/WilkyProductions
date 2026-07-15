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
    <div>
      <PageHero
        eyebrow="Graphic & Logo Design"
        title="Design"
        description="Logos, apparel, and motorsports graphics. Email for a quote on any project."
        backdrop="design"
      />

      <section className="relative overflow-hidden">
        <CategoryBackdrop
          variant="design"
          className="left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 sm:h-[650px] sm:w-[650px]"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
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
        </div>
      </section>

      <ContactCta />
    </div>
  );
}
