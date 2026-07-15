import Image from "next/image";

export default function HeroDeviceMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Laptop */}
      <div className="relative">
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-lg border-[6px] border-b-0 border-neutral-800 bg-black shadow-2xl">
          <Image
            src="/mockups/m81-desktop.jpg"
            alt="M81 Designs website preview"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="h-2.5 rounded-b-lg border border-t-0 border-neutral-800 bg-gradient-to-b from-neutral-700 to-neutral-900" />
        <div className="mx-auto -mt-px h-1.5 w-1/4 rounded-b-md bg-neutral-800" />
      </div>

      {/* Phone, overlapping bottom-right */}
      <div className="absolute -bottom-8 -right-6 w-[26%] min-w-[84px] max-w-[130px]">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[20%] border-[5px] border-neutral-800 bg-black shadow-2xl">
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
