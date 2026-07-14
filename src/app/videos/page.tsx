import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import VideoGrid from "@/components/VideoGrid";
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
        <div className="grid gap-10">
          {videoCategories.map((category) => (
            <div key={category.title}>
              <h2 className="font-display text-2xl uppercase tracking-wide">{category.title}</h2>
              <p className="mt-2 max-w-2xl text-sm text-text-secondary">{category.description}</p>
              <div className="mt-5">
                <VideoGrid items={category.videos} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactCta />
    </div>
  );
}
