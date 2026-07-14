"use client";

import { useState } from "react";

export default function VideoBanner({
  title,
  description,
  youtubeId,
}: {
  title: string;
  description?: string;
  youtubeId: string | null;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing && youtubeId) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-border bg-surface-2">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => youtubeId && setPlaying(true)}
      className={`group relative flex aspect-video w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-sm border border-border bg-surface-2 px-6 text-center ${
        youtubeId ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <span className="font-display text-3xl uppercase tracking-wide sm:text-5xl">{title}</span>
      {description && (
        <span className="max-w-xl text-sm text-text-secondary sm:text-base">{description}</span>
      )}
      <span
        className={`mt-2 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent text-accent transition-transform ${
          youtubeId ? "group-hover:scale-110" : "opacity-50"
        }`}
      >
        <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      {!youtubeId && (
        <span className="text-xs uppercase tracking-wider text-text-secondary">Coming soon</span>
      )}
    </button>
  );
}
