"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { reviews } from "@/lib/media";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex justify-center gap-1 text-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-12 w-12 sm:h-14 sm:w-14 ${i < count ? "fill-current" : "fill-none stroke-current"}`}
        >
          <path
            d="M10 1.5 12.4 7 18.5 7.6 13.9 11.6 15.3 17.5 10 14.3 4.7 17.5 6.1 11.6 1.5 7.6 7.6 7 Z"
            strokeWidth="1"
          />
        </svg>
      ))}
    </div>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2">
      <path
        d={direction === "left" ? "M15 5 8 12l7 7" : "M9 5l7 7-7 7"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M8 5v14l11-7Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M7 5h4v14H7Zm6 0h4v14h-4Z" />
    </svg>
  );
}

const SWIPE_THRESHOLD = 40;

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const goTo = (i: number) => {
    setIndex(((i % reviews.length) + reviews.length) % reviews.length);
  };
  const goPrev = () => goTo(index - 1);
  const goNext = () => goTo(index + 1);

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isPlaying]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchDeltaX.current > SWIPE_THRESHOLD) {
      goPrev();
    } else if (touchDeltaX.current < -SWIPE_THRESHOLD) {
      goNext();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <section className="border-t border-border bg-surface py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-xl uppercase tracking-wide sm:text-4xl">
          See what past clients have to say!
        </h2>

        <div className="relative mt-10 flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous review"
            className="hidden shrink-0 rounded-full border border-border p-2 text-text-secondary transition-colors hover:border-accent hover:text-accent sm:block"
          >
            <ChevronIcon direction="left" />
          </button>

          <div
            className="relative flex-1 overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {reviews.map((review, i) => (
                <div key={i} className="w-full shrink-0 px-4">
                  <Stars count={review.rating} />
                  <p className="mt-4 text-lg italic text-text-secondary">&ldquo;{review.quote}&rdquo;</p>
                  <p className="mt-4 font-semibold text-foreground">{review.name}</p>
                  {review.company && <p className="text-sm italic text-text-secondary">{review.company}</p>}
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next review"
            className="hidden shrink-0 rounded-full border border-border p-2 text-text-secondary transition-colors hover:border-accent hover:text-accent sm:block"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-4 sm:hidden">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous review"
            className="rounded-full border border-border p-2 text-text-secondary transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next review"
            className="rounded-full border border-border p-2 text-text-secondary transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            aria-label={isPlaying ? "Pause reviews" : "Play reviews"}
            className="rounded-full border border-border p-2 text-text-secondary transition-colors hover:border-accent hover:text-accent"
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>

          <div className="flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show review ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? "bg-accent" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>

        <Link
          href="/review"
          className="mt-10 inline-block rounded-sm border-2 border-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent transition-colors hover:bg-accent hover:text-black"
        >
          Add a review
        </Link>
      </div>
    </section>
  );
}
