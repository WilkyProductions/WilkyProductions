import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import PhotoFeed from "@/components/PhotoFeed";
import ContactCta from "@/components/ContactCta";
import OtherServices from "@/components/OtherServices";
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

const packages = [
  {
    name: "Single-Page",
    price: "$1,500",
    features: [
      "One fully designed page, built to tell your story top to bottom",
      "Smooth-scroll anchor navigation between sections",
      "Custom nav menu",
      "Mobile-responsive, fast-loading layout",
      "Contact form or call-to-action built in",
    ],
    bestFor: "Personal brands, service businesses, portfolios, and landing pages",
    featured: false,
  },
  {
    name: "Multi-Page",
    price: "$2,500",
    features: [
      "Up to 3 pages included (e.g. Home, About, Services, Contact)",
      "Custom nav menu connecting every page",
      "Mobile-responsive, fast-loading layout",
      "Contact form and/or booking & quote requests",
    ],
    note: "Need more than 3 pages? Additional pages can be added for an extra fee — just ask for a quote.",
    bestFor: "Small businesses that need more room to tell their story",
    featured: true,
  },
  {
    name: "Ecommerce",
    price: "$3,500",
    features: [
      "Full online store build with product catalog and product pages",
      "Shopping cart and secure checkout",
      "Payment processing setup",
      "Custom nav menu, mobile-responsive, fast-loading",
    ],
    bestFor: "Businesses ready to sell products directly through their website",
    featured: false,
  },
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
          <h2 className="font-display text-2xl uppercase tracking-wide">Packages &amp; pricing</h2>
          <p className="mt-3 max-w-2xl text-sm text-text-secondary">
            Every package includes a custom design, mobile-friendly build, and direct
            communication start to finish. Prices below are starting points — final
            pricing depends on your pages, features, and content.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col rounded-sm border p-6 ${
                  pkg.featured
                    ? "border-accent bg-gradient-to-b from-accent/10 to-surface-2"
                    : "border-border bg-surface-2"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
                  Starting at
                </p>
                <p className="font-display text-3xl text-accent">{pkg.price}</p>
                <p className="mt-3 font-semibold text-foreground">{pkg.name}</p>
                <ul className="mt-3 flex-1 space-y-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="border-l-2 border-accent pl-3 text-xs text-text-secondary">
                      {f}
                    </li>
                  ))}
                </ul>
                {pkg.note && (
                  <p className="mt-3 border-t border-border pt-3 text-xs text-accent">{pkg.note}</p>
                )}
                <p className="mt-3 text-xs italic text-text-secondary">Best for: {pkg.bestFor}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-sm border border-border bg-surface-2 p-6 sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <a
                href="/website-design-proposal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto block w-full max-w-[220px] shrink-0 overflow-hidden rounded-sm border border-border md:mx-0"
              >
                <Image
                  src="/website-design-proposal-preview.jpg"
                  alt="Website Design Proposal PDF preview"
                  width={900}
                  height={1165}
                  className="w-full"
                />
              </a>
              <div className="flex-1">
                <h3 className="font-display text-xl uppercase tracking-wide">
                  Full proposal, in detail
                </h3>
                <p className="mt-3 text-sm text-text-secondary">
                  Download the full breakdown of every package, what&apos;s included, how the
                  process works, and answers to common questions — handy if you want to
                  review it later or share it with someone else on your team.
                </p>
                <div className="mt-5 flex flex-wrap gap-4">
                  <a
                    href="/website-design-proposal.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:bg-accent-dark"
                  >
                    View proposal
                  </a>
                  <a
                    href="/website-design-proposal.pdf"
                    download
                    className="rounded-sm border-2 border-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent transition-colors hover:bg-accent hover:text-black"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 hidden overflow-hidden rounded-sm border border-border md:block">
              <iframe
                src="/website-design-proposal.pdf"
                title="Website Design Proposal"
                className="h-[700px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-2xl uppercase tracking-wide">How it works</h2>
          <div className="mt-8 grid gap-0 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <Fragment key={item.step}>
                <div className="p-5 sm:rounded-sm sm:border sm:border-border sm:bg-surface-2">
                  <p className="font-semibold text-accent">{item.step}</p>
                  <p className="mt-2 text-sm text-text-secondary">{item.detail}</p>
                </div>
                {i < process.length - 1 && (
                  <div
                    className="h-px sm:hidden"
                    style={{
                      background: "linear-gradient(to right, transparent, var(--accent) 50%, transparent)",
                    }}
                  />
                )}
              </Fragment>
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
          <PhotoFeed items={websiteDesignExamples} />
        </div>
      </section>

      <OtherServices current="website-design" />

      <ContactCta />
    </div>
  );
}
