import Marquee from "@/components/Marquee";
import SprocketDivider from "@/components/SprocketDivider";
import ServiceCard from "@/components/ServiceCard";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="glow-cyan pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pt-16 pb-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-8 md:pt-20 md:pb-20">
          <div>
            <p className="font-script text-signal text-2xl">
              Video &middot; Photo &middot; Growth
            </p>
            <h1 className="font-display mt-3 text-5xl leading-[0.98] tracking-wide uppercase sm:text-6xl md:text-7xl">
              Look as good
              <br />
              online as you
              <br />
              do in person.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-paper/70">
              Videography, photography, aerial coverage, web design,
              marketing, and Google Ads — one team, one consistent brand,
              everywhere your customers are looking.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <CtaButton href="/contact">Start a project</CtaButton>
              <CtaButton href="/work" variant="outline" onDark>
                See the work
              </CtaButton>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 flex aspect-[16/10] items-center justify-center rounded-3xl border border-paper/10 bg-gradient-to-br from-white/10 to-white/0 text-sm text-paper/40">
              Featured reel
            </div>
            <div className="flex aspect-square items-center justify-center rounded-3xl border border-paper/10 bg-white/5 text-xs text-paper/40">
              Aerial still
            </div>
            <div className="flex aspect-square items-center justify-center rounded-3xl border border-paper/10 bg-white/5 text-xs text-paper/40">
              Product shot
            </div>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "Videography",
          "Photography",
          "Aerial",
          "Web Design",
          "Marketing",
          "Google Ads",
          "Graphic Design",
        ]}
      />

      {/* Services */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="font-script text-signal-deep text-xl">
                Everything under one roof
              </p>
              <h2 className="font-display mt-2 text-3xl tracking-wide uppercase md:text-4xl">
                Seven services. One brand.
              </h2>
              <p className="mt-3 text-steel">
                From the first drone pass to the ad campaign that follows it
                up, your brand looks and sounds the same everywhere.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <ServiceCard
                  label={s.label}
                  short={s.short}
                  href={`/${s.slug}`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SprocketDivider tone="light" />

      {/* Featured work strip */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-3xl tracking-wide uppercase md:text-4xl">
                Recent work
              </h2>
              <CtaButton href="/work" variant="outline">
                Full gallery
              </CtaButton>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <div className="flex aspect-[4/5] items-center justify-center rounded-3xl border border-line bg-mist text-sm text-steel">
                  Project photo {i + 1}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="glow-cyan pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-4xl tracking-wide uppercase md:text-5xl">
              Got something worth showing off?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-paper/70">
              Tell us about your brand, your build, or your campaign.
              We&apos;ll tell you what it takes to make it look right.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaButton href="/contact">Get a quote</CtaButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
