import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Wilky Productions",
  description: "Get a quote on videography, photography, website design, or graphic design.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Get in touch"
        title="Contact"
        description="Email me for a quote on any project, or send a message below."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[2fr_1fr]">
        <ContactForm />

        <div className="space-y-6 md:border-l md:border-border md:pl-10">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">Location</h2>
            <p className="mt-2 text-sm text-text-secondary">{site.location}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">Phone</h2>
            <a href={site.phoneHref} className="mt-2 block text-sm text-text-secondary hover:text-accent">
              {site.phone}
            </a>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">Email</h2>
            <a href={site.emailHref} className="mt-2 block text-sm text-text-secondary hover:text-accent">
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
