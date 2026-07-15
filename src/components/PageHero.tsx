import CategoryBackdrop from "@/components/CategoryBackdrop";

export default function PageHero({
  eyebrow,
  title,
  description,
  backdrop,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  backdrop?: "video" | "photo" | "design" | "web";
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      {backdrop && (
        <CategoryBackdrop
          variant={backdrop}
          className="-right-16 -top-16 h-[420px] w-[420px] sm:h-[520px] sm:w-[520px]"
        />
      )}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-16 sm:pt-32 sm:pb-20">
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
