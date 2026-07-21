import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Thin cyan line, brightest at center, fading to transparent at both edges — matches the header */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, var(--accent) 50%, transparent)",
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Image
            src="/brand/wilky-logo.png"
            alt="Wilky Productions"
            width={180}
            height={36}
            className="h-8 w-auto"
          />
          <p className="mt-4 text-sm text-text-secondary">
            {site.tagline} {site.taglineEmphasis}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Navigate</h3>
          <ul className="mt-4 space-y-2 text-sm text-text-secondary">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-text-secondary">
            <li>{site.location}</li>
            <li>
              <a href={site.phoneHref} className="hover:text-accent">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-accent">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Follow</h3>
          <ul className="mt-4 space-y-2 text-sm text-text-secondary">
            <li>
              <a href={site.social.facebook} className="hover:text-accent">
                Facebook
              </a>
            </li>
            <li>
              <a href={site.social.instagram} className="hover:text-accent">
                Instagram
              </a>
            </li>
            <li>
              <a href={site.social.youtube} className="hover:text-accent">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-6 py-6 text-center text-xs text-text-secondary">
        © {new Date().getFullYear()} Wilky Productions. All rights reserved.
      </div>
    </footer>
  );
}
