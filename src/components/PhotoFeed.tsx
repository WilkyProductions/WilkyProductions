import Image from "next/image";
import type { Photo } from "@/lib/media";

export default function PhotoFeed({ items }: { items: Photo[] }) {
  return (
    <div className="flex flex-col gap-10">
      {items.map((photo, i) =>
        photo.src ? (
          <Image
            key={`${photo.alt}-${i}`}
            src={photo.src}
            alt={photo.alt}
            width={photo.width ?? 1600}
            height={photo.height ?? 900}
            className="h-auto w-full rounded-sm border border-accent/40 shadow-[0_0_18px_rgba(34,182,242,0.3)]"
          />
        ) : (
          <div
            key={`${photo.alt}-${i}`}
            className="flex aspect-video w-full items-center justify-center rounded-sm border border-accent/40 bg-surface-2 text-sm text-text-secondary shadow-[0_0_18px_rgba(34,182,242,0.3)]"
          >
            {photo.alt}
          </div>
        )
      )}
    </div>
  );
}
