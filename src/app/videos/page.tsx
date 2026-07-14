import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import VideoBanner from "@/components/VideoBanner";
import ContactCta from "@/components/ContactCta";
import { videoCategories } from "@/lib/media";

export const metadata: Metadata = {
  title: "Videos | Wilky Productions",
  description:
    "Wedding videos, business spotlights, real estate walkthroughs, offroad and car videos, and aerial videography.",
};

export default function VideosPage() {
  return (
    <div>
      <PageHero
        eyebrow="Videography"
        title="Videos"
        description="Packages start at $1,500. Email for a quote on your specific project."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-14">
          {videoCategories.map((category) => (
            <VideoBanner
              key={category.title}
              title={category.title}
              description={category.description}
              youtubeId={category.youtubeId}
            />
          ))}
        </div>
      </section>

      <ContactCta />
    </div>
  );
}
