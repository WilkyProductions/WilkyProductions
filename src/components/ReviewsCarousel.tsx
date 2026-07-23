"use client";

import { useEffect, useState } from "react";
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

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="border-t border-border bg-surface py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-xl uppercase tracking-wide sm:text-4xl">
          See what past clients have to say!
        </h2>

        <div className="relative mt-10 overflow-hidden">
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

        <div className="mt-6 flex justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show review ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-accent" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
