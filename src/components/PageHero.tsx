export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
        )}
        <h1 className="mt-3 font-display text-4xl uppercase tracking-wide sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">{description}</p>
        )}
      </div>
    </section>
  );
}
