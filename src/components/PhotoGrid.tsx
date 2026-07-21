import Image from "next/image";
import type { Photo } from "@/lib/media";

export default function PhotoGrid({
  items,
  columns = 3,
}: {
  items: Photo[];
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
      {items.map((photo, i) => {
        const frame = (
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-accent/40 bg-surface-2 shadow-[0_0_18px_rgba(34,182,242,0.3)] transition-opacity group-hover:opacity-90">
            {photo.src ? (
              <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center px-4 text-center text-sm text-text-secondary">
                {photo.alt}
              </div>
            )}
          </div>
        );

        return photo.href ? (
          <a
            key={`${photo.alt}-${i}`}
            href={photo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            {frame}
          </a>
        ) : (
          <div key={`${photo.alt}-${i}`}>{frame}</div>
        );
      })}
    </div>
  );
}
