import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import VideoBanner from "@/components/VideoBanner";
import ContactCta from "@/components/ContactCta";
import CategoryBackdrop from "@/components/CategoryBackdrop";
import { videoCategories } from "@/lib/media";

export const metadata: Metadata = {
  title: "Videos | Wilky Productions",
  description:
    "Wedding videos, business spotlights, real estate walkthroughs, offroad and car videos, and aerial videography.",
};

export default function VideosPage() {
  return (
    <div>
      <CategoryBackdrop variant="video" />

      <PageHero
        eyebrow="Videography"
        title="Videos"
        description="Packages starting at just $500. Email for a quote on your specific project."
      />

      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-14">
          {videoCategories.map((category) => (
            <VideoBanner
              key={category.title}
              title={category.title}
              description={category.description}
              videos={category.videos}
            />
          ))}
        </div>
      </section>

      <ContactCta />
    </div>
  );
}
