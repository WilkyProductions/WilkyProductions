"use client";

import Image from "next/image";
import { useState } from "react";

function thumbnailUrl(youtubeId: string) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

function VideoSelector({
  videos,
  index,
  playing,
  onSelect,
}: {
  videos: string[];
  index: number;
  playing: boolean;
  onSelect: (i: number) => void;
}) {
  if (videos.length < 2) return null;
  return (
    <div className="absolute bottom-3 right-3 z-10 flex gap-2">
      {videos.map((id, i) => (
        <button
          key={id}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(i);
          }}
          className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold transition-colors ${
            playing && i === index
              ? "border-accent bg-accent text-black"
              : "border-border bg-black/60 text-foreground hover:border-accent"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default function VideoBanner({
  title,
  description,
  videos,
}: {
  title: string;
  description?: string;
  videos: string[];
}) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const hasVideo = videos.length > 0;
  const currentId = hasVideo ? videos[index] : null;

  function selectAndPlay(i: number) {
    setIndex(i);
    setPlaying(true);
  }

  if (playing && currentId) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-accent/40 bg-surface-2 shadow-[0_0_18px_rgba(34,182,242,0.3)]">
        <iframe
          key={currentId}
          src={`https://www.youtube-nocookie.com/embed/${currentId}?autoplay=1`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <VideoSelector videos={videos} index={index} playing={playing} onSelect={selectAndPlay} />
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-accent/40 bg-surface-2 shadow-[0_0_18px_rgba(34,182,242,0.3)]">
      {currentId && (
        <Image
          key={currentId}
          src={thumbnailUrl(currentId)}
          alt=""
          fill
          className="object-cover opacity-35"
        />
      )}
      <div className="absolute inset-0 bg-black/30" />
      <button
        type="button"
        onClick={() => hasVideo && setPlaying(true)}
        className={`group absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center ${
          hasVideo ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <span className="font-display text-3xl uppercase tracking-wide sm:text-5xl">{title}</span>
        {description && (
          <span className="max-w-xl text-sm text-text-secondary sm:text-base">{description}</span>
        )}
        <span
          className={`mt-2 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent text-accent transition-transform ${
            hasVideo ? "group-hover:scale-110" : "opacity-50"
          }`}
        >
          <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        {!hasVideo && (
          <span className="text-xs uppercase tracking-wider text-text-secondary">Coming soon</span>
        )}
      </button>
      <VideoSelector videos={videos} index={index} playing={playing} onSelect={selectAndPlay} />
    </div>
  );
}
