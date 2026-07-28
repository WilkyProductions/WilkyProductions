import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a video, photo, or design project with Wilky Productions.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-12 md:px-8 md:pt-20">
          <p className="font-script text-signal text-lg">Contact</p>
          <h1 className="font-display mt-4 text-4xl tracking-wide uppercase sm:text-5xl md:text-6xl">
            Let&apos;s build something.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-paper/70">
            Tell us what you need shot, designed, or built, and we&apos;ll
            follow up with next steps and a quote.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-8">
          <ContactForm />

          <div>
            <h2 className="font-display text-xl tracking-wide uppercase">
              Direct contact
            </h2>
            <ul className="mt-4 space-y-2 text-steel">
              <li>{site.location}</li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-ink">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/[^\d]/g, "")}`}
                  className="hover:text-ink"
                >
                  {site.phone}
                </a>
              </li>
            </ul>

            <h2 className="font-display mt-8 text-xl tracking-wide uppercase">
              Follow along
            </h2>
            <ul className="mt-4 space-y-2 text-steel">
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
