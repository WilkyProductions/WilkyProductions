import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A look at recent video, photo, aerial, marketing, and design work for brands that need to look as good online as they do in person.",
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="glow-cyan pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-12 md:px-8 md:pt-20">
          <p className="font-script text-signal text-2xl">Portfolio</p>
          <h1 className="font-display mt-3 text-4xl tracking-wide uppercase sm:text-5xl md:text-6xl">
            Recent work
          </h1>
          <p className="mt-6 max-w-xl text-lg text-paper/70">
            A running record of what&apos;s shipped — replace these
            placeholders with real project photos and reel embeds as they
            come in.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <Reveal>
            <div className="flex flex-wrap gap-3">
              {services.map((s) => (
                <span
                  key={s.slug}
                  className="rounded-full border border-line px-4 py-1.5 font-display text-xs tracking-wider text-steel uppercase"
                >
                  {s.label}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <div className="flex aspect-[4/5] items-center justify-center rounded-3xl border border-line bg-mist text-sm text-steel">
                  Project {i + 1}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="glow-cyan pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl tracking-wide uppercase md:text-4xl">
              Want your project on this page?
            </h2>
            <div className="mt-8 flex justify-center">
              <CtaButton href="/contact">Start a project</CtaButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
