export default function PlaceholderGrid({
  items,
  columns = 3,
}: {
  items: string[];
  columns?: 2 | 3 | 4;
}) {
  const colClass =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-4 ${colClass}`}>
      {items.map((label) => (
        <div
          key={label}
          className="flex aspect-video items-center justify-center rounded-sm border border-border bg-surface-2 px-4 text-center text-sm text-text-secondary"
        >
          {label}
        </div>
      ))}
    </div>
  );
}
