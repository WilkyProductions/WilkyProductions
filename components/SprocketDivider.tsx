export default function SprocketDivider({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const holeColor = tone === "dark" ? "bg-paper/15" : "bg-ink/10";
  const bg = tone === "dark" ? "bg-ink" : "bg-paper";

  return (
    <div className={`${bg} overflow-hidden py-3`} aria-hidden="true">
      <div className="sprocket-row px-5">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className={`sprocket-hole ${holeColor}`} />
        ))}
      </div>
    </div>
  );
}
