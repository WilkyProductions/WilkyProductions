import Link from "next/link";

export default function ServiceCard({
  label,
  short,
  href,
}: {
  label: string;
  short: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-mist transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10"
    >
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-ink to-ink/80">
        <div className="glow-cyan absolute inset-0" />
        <span className="relative font-display text-sm tracking-wider text-paper/40 uppercase">
          Imagery
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="font-display text-xl tracking-wide uppercase">
            {label}
          </h3>
          <p className="mt-1.5 text-sm text-steel">{short}</p>
        </div>
        <span className="mt-5 inline-flex items-center gap-2 font-display text-xs tracking-wider text-signal-deep uppercase">
          Learn more
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
