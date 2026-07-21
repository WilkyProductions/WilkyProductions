import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PhotoGrid from "@/components/PhotoGrid";
import ContactCta from "@/components/ContactCta";
import { websiteDesignExamples } from "@/lib/media";

export const metadata: Metadata = {
  title: "Website Design | Wilky Productions",
  description: "New websites or redesigns, built to fit your business. Email for pricing.",
};

const included = [
  "New site builds or redesigns of an existing site",
  "Mobile-friendly, fast-loading pages",
  "Custom design matched to your existing brand (or a new brand built alongside it)",
  "Contact forms, galleries, and booking/quote requests",
];

const process = [
  { step: "1. Email a quote request", detail: "Tell me about your business and what the site needs to do." },
  { step: "2. Design", detail: "A layout and style direction built around your brand." },
  { step: "3. Build", detail: "The site gets built, tested, and reviewed with you." },
  { step: "4. Launch", detail: "Site goes live, with a walkthrough of anything you'll manage yourself." },
];

export default function WebsiteDesignPage() {
  return (
    <div>
      <PageHero
        eyebrow="Website Design"
        title="Website Design"
        description="New sites or redesigns, built and maintained by one person from start to finish. Email for pricing."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl uppercase tracking-wide">What&apos;s included</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {included.map((item) => (
            <li key={item} className="border-l-2 border-accent pl-4 text-sm text-text-secondary">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-2xl uppercase tracking-wide">How it works</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="rounded-sm border border-border bg-surface-2 p-5">
                <p className="font-semibold text-accent">{item.step}</p>
                <p className="mt-2 text-sm text-text-secondary">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="font-display text-2xl uppercase tracking-wide">Recent work</h2>
          <span className="text-sm text-text-secondary">(click to view full site)</span>
        </div>
        <div className="mt-6">
          <PhotoGrid items={websiteDesignExamples} />
        </div>
      </section>

      <ContactCta />
    </div>
  );
}
