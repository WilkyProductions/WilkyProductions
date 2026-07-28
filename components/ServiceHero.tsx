import CtaButton from "@/components/CtaButton";

export default function ServiceHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="glow-cyan pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-14 md:px-8 md:pt-20 md:pb-16">
        <p className="font-script text-signal text-2xl">{eyebrow}</p>
        <h1 className="font-display mt-3 max-w-3xl text-4xl leading-[0.98] tracking-wide uppercase sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-paper/70">{description}</p>
        <div className="mt-8">
          <CtaButton href="/contact">Get a quote</CtaButton>
        </div>
      </div>
    </section>
  );
}
