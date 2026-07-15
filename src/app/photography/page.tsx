import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PhotoFeed from "@/components/PhotoFeed";
import ContactCta from "@/components/ContactCta";
import CategoryBackdrop from "@/components/CategoryBackdrop";
import { photographyGallery } from "@/lib/media";

export const metadata: Metadata = {
  title: "Photography | Wilky Productions",
  description: "Family photos, events, and racing/motorsports photography. Email for pricing.",
};

export default function PhotographyPage() {
  return (
    <div className="relative">
      <CategoryBackdrop variant="photo" />

      <PageHero
        eyebrow="Photography"
        title="Photography"
        description="Family photos, events, and racing/motorsports coverage. Email for a quote."
      />

      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <PhotoFeed items={photographyGallery} />
      </section>

      <ContactCta />
    </div>
  );
}
