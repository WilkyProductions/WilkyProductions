import Image from "next/image";
import Link from "next/link";
import { services, site } from "@/lib/site";
import ContactCta from "@/components/ContactCta";

const whyChooseUs = [
  {
    title: "One person, every discipline",
    description:
      "Video, photo, and design under one roof means your brand looks and sounds consistent everywhere it shows up.",
  },
  {
    title: "Southern California based",
    description: `Based in ${site.location}, available for weddings, businesses, and events across the region.`,
  },
  {
    title: "Real racing & offroad experience",
    description:
      "Years shooting motorsports and offroad builds means work that understands the culture, not just the camera settings.",
  },
  {
    title: "Straightforward pricing",
    description:
      "No hidden fees or confusing packages. Email for a quote and get a straight answer.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <Image
          src="/hero-stadium.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        {/* Vignette: darkens edges and top/bottom so nav and text stay legible over the photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.75) 100%), linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 25%, rgba(0,0,0,0.35) 65%, var(--background) 100%)",
          }}
        />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pt-28 pb-16 text-center sm:pt-32">
          <p className="relative z-10 max-w-2xl text-xl text-text-secondary sm:text-2xl">
            {site.tagline} <span className="text-foreground">{site.taglineEmphasis}</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/videos"
              className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:bg-accent-dark"
            >
              See our work
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border-2 border-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent transition-colors hover:bg-accent hover:text-black"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">What we do</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="group flex flex-col rounded-sm border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <h3 className="font-display text-xl uppercase tracking-wide">{service.name}</h3>
              <p className="mt-3 flex-1 text-sm text-text-secondary">{service.blurb}</p>
              <span className="mt-4 text-sm font-semibold text-accent">
                Learn more <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
            Why choose Wilky Productions?
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="border-l-2 border-accent pl-5">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </div>
  );
}
