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
    <div>
      <PageHero
        eyebrow="Photography"
        title="Photography"
        description="Family photos, events, and racing/motorsports coverage. Email for a quote."
        backdrop="photo"
      />

      <section className="relative overflow-hidden">
        <CategoryBackdrop
          variant="photo"
          className="left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 sm:h-[650px] sm:w-[650px]"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
          <PhotoFeed items={photographyGallery} />
        </div>
      </section>

      <ContactCta />
    </div>
  );
}
