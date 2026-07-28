export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div className="border-y-2 border-ink bg-signal py-3">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span
            key={i}
            className="mx-4 font-display text-lg tracking-wide text-ink uppercase whitespace-nowrap"
          >
            {item} <span className="mx-4 inline-block">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
