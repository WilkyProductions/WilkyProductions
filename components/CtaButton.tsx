import Link from "next/link";

export default function CtaButton({
  href,
  children,
  variant = "solid",
  onDark = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  onDark?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display text-sm tracking-wider uppercase transition-all hover:-translate-y-0.5";

  const styles = (() => {
    if (variant === "solid") {
      return "bg-signal text-ink shadow-lg shadow-signal/20 hover:shadow-signal/40";
    }
    return onDark
      ? "border-2 border-paper/40 text-paper hover:border-signal hover:text-signal"
      : "border-2 border-ink/30 text-ink hover:border-signal-deep hover:text-signal-deep";
  })();

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
