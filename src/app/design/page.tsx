import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PhotoFeed from "@/components/PhotoFeed";
import ContactCta from "@/components/ContactCta";
import { designCategories } from "@/lib/media";

export const metadata: Metadata = {
  title: "Design | Wilky Productions",
  description: "Logo design, apparel graphics, and motorsports imagery. Email for pricing.",
};

const designGallery = designCategories.flatMap((category) => category.items);

export default function DesignPage() {
  return (
    <div>
      <PageHero
        eyebrow="Graphic & Logo Design"
        title="Design"
        description="Logos, apparel, and motorsports graphics. Email for a quote on any project."
      />

      <section className="px-4 py-16">
        <PhotoFeed items={designGallery} />
      </section>

      <ContactCta />
    </div>
  );
}
