import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderGrid from "@/components/PlaceholderGrid";
import ContactCta from "@/components/ContactCta";

export const metadata: Metadata = {
  title: "Videos | Wilky Productions",
  description:
    "Wedding videos, business spotlights, real estate walkthroughs, offroad and car videos, and aerial videography.",
};

const categories = [
  {
    title: "Wedding Videos",
    description: "Full-day coverage, highlight reels, and ceremony films.",
  },
  {
    title: "Business Spotlight",
    description: "Short-form videos that introduce your business and what makes it work.",
  },
  {
    title: "Real Estate & Home Remodels",
    description: "Walkthroughs and before/after coverage for listings and remodel projects.",
  },
  {
    title: "Offroad & Cars",
    description: "Race day, trail runs, and build features for the offroad and automotive scene.",
  },
  {
    title: "Aerial Videography",
    description: "Licensed drone coverage (FAA Part 107) for any of the above.",
  },
];

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
          {categories.map((category) => (
            <div key={category.title}>
              <h2 className="font-display text-2xl uppercase tracking-wide">{category.title}</h2>
              <p className="mt-2 max-w-2xl text-sm text-text-secondary">{category.description}</p>
              <div className="mt-5">
                <PlaceholderGrid items={[`${category.title} — sample 1`, `${category.title} — sample 2`, `${category.title} — sample 3`]} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactCta />
    </div>
  );
}
