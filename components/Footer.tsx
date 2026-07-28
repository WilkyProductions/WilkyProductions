import Link from "next/link";
import { nav, services, site } from "@/lib/site";
import SprocketDivider from "@/components/SprocketDivider";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <SprocketDivider tone="dark" />
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-script text-2xl">{site.name}</p>
            <p className="mt-3 max-w-xs text-sm text-paper/60">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="font-display text-sm tracking-wider text-signal uppercase">
              Services
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-sm text-paper/70 hover:text-paper"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/70 hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm tracking-wider text-signal uppercase">
              Get in touch
            </p>
            <ul className="mt-3 space-y-2 text-sm text-paper/70">
              <li>{site.location}</li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-paper"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/[^\d]/g, "")}`} className="hover:text-paper">
                  {site.phone}
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-4 text-sm">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-paper/70 hover:text-signal"
              >
                Instagram
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="text-paper/70 hover:text-signal"
              >
                YouTube
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-paper/70 hover:text-signal"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <p className="mt-12 text-xs text-paper/40">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
