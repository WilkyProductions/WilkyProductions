import type { Video } from "@/lib/media";

export default function VideoGrid({ items }: { items: Video[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((video, i) => (
        <div
          key={`${video.title}-${i}`}
          className="relative aspect-video overflow-hidden rounded-sm border border-border bg-surface-2"
        >
          {video.youtubeId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
              title={video.title}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full items-center justify-center px-4 text-center text-sm text-text-secondary">
              {video.title}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
