import Reveal from "@/components/Reveal";

export default function IncludedItem({
  title,
  description,
  delay = 0,
}: {
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="border-t border-line py-6">
        <h3 className="font-display text-xl tracking-wide uppercase">
          {title}
        </h3>
        <p className="mt-2 max-w-md text-steel">{description}</p>
      </div>
    </Reveal>
  );
}
