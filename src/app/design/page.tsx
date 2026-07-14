import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderGrid from "@/components/PlaceholderGrid";
import ContactCta from "@/components/ContactCta";

export const metadata: Metadata = {
  title: "Design | Wilky Productions",
  description: "Logo design, apparel graphics, and motorsports imagery. Email for pricing.",
};

const categories = [
  { title: "Logo Design", items: ["Logo sample 1", "Logo sample 2", "Logo sample 3"] },
  { title: "Apparel & Tee Graphics", items: ["Tee design 1", "Tee design 2", "Tee design 3"] },
  { title: "Motorsports Imagery", items: ["Motorsports 1", "Motorsports 2", "Motorsports 3"] },
];

export default function DesignPage() {
  return (
    <div>
      <PageHero
        eyebrow="Graphic & Logo Design"
        title="Design"
        description="Logos, apparel, and motorsports graphics. Email for a quote on any project."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10">
          {categories.map((category) => (
            <div key={category.title}>
              <h2 className="font-display text-2xl uppercase tracking-wide">{category.title}</h2>
              <div className="mt-5">
                <PlaceholderGrid items={category.items} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactCta />
    </div>
  );
}
