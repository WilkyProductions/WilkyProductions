import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderGrid from "@/components/PlaceholderGrid";
import ContactCta from "@/components/ContactCta";

export const metadata: Metadata = {
  title: "Photography | Wilky Productions",
  description: "Family photos, events, and racing/motorsports photography. Email for pricing.",
};

const gallery = Array.from({ length: 12 }, (_, i) => `Photo ${i + 1}`);

export default function PhotographyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Photography"
        title="Photography"
        description="Family photos, events, and racing/motorsports coverage. Email for a quote."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <PlaceholderGrid items={gallery} columns={4} />
      </section>

      <ContactCta />
    </div>
  );
}
