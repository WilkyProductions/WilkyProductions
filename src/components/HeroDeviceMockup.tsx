import Image from "next/image";

export default function HeroDeviceMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Laptop */}
      <div className="relative">
        {/* Screen */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-lg border-[6px] border-b-0 border-neutral-800 bg-black shadow-2xl">
          <Image
            src="/mockups/m81-desktop.jpg"
            alt="M81 Designs website preview"
            fill
            className="object-cover object-top"
          />
        </div>
        {/* Aluminum keyboard deck, showing just the top row of keys */}
        <div className="rounded-b-lg border border-t-0 border-neutral-400 bg-gradient-to-b from-neutral-300 to-neutral-400 px-3 pb-2 pt-1.5 shadow-2xl">
          <div className="h-px w-full bg-neutral-500/50" />
          <div className="mt-1.5 grid grid-cols-12 gap-[3px]">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-1.5 rounded-[1px] bg-neutral-500/70" />
            ))}
          </div>
        </div>
        {/* Trackpad lip */}
        <div className="mx-auto h-1 w-1/6 rounded-b-full bg-neutral-500" />
      </div>

      {/* Phone, overlapping bottom-right */}
      <div className="absolute -bottom-8 -right-6 w-[26%] min-w-[84px] max-w-[130px]">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[18px] border-[5px] border-neutral-800 bg-black shadow-2xl">
          <div className="absolute left-1/2 top-1.5 z-10 h-3 w-1/3 -translate-x-1/2 rounded-full bg-neutral-900" />
          <Image
            src="/mockups/m81-mobile.jpg"
            alt="M81 Designs website preview on mobile"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
