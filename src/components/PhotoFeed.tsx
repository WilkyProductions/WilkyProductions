import Image from "next/image";
import type { Photo } from "@/lib/media";

export default function PhotoFeed({ items }: { items: Photo[] }) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {items.map((photo, i) => {
        if (!photo.src) {
          return (
            <div
              key={`${photo.alt}-${i}`}
              className="mb-4 flex aspect-video w-full items-center justify-center break-inside-avoid rounded-sm border border-accent/40 bg-surface-2 text-sm text-text-secondary shadow-[0_0_18px_rgba(34,182,242,0.3)]"
            >
              {photo.alt}
            </div>
          );
        }

        const image = (
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width ?? 1600}
            height={photo.height ?? 900}
            className={`w-full rounded-sm border border-accent/40 shadow-[0_0_18px_rgba(34,182,242,0.3)] transition-opacity ${
              photo.href ? "group-hover:opacity-90" : ""
            } ${photo.src.toLowerCase().endsWith(".png") ? "bg-gray-200" : ""}`}
          />
        );

        return photo.href ? (
          <a
            key={`${photo.alt}-${i}`}
            href={photo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-4 block break-inside-avoid"
          >
            {image}
          </a>
        ) : (
          <div key={`${photo.alt}-${i}`} className="mb-4 break-inside-avoid">
            {image}
          </div>
        );
      })}
    </div>
  );
}
