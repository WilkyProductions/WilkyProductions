type Variant = "video" | "photo" | "design" | "web";

function CameraIcon() {
  return (
    <>
      <rect x="15" y="35" width="70" height="55" rx="6" />
      <path d="M85 50 L110 35 L110 90 L85 75 Z" />
      <circle cx="50" cy="62" r="18" />
    </>
  );
}

function ClapperIcon() {
  return (
    <>
      <rect x="15" y="45" width="90" height="55" rx="4" />
      <path d="M15 45 L105 45 L95 20 L25 25 Z" />
      <line x1="35" y1="25" x2="45" y2="45" />
      <line x1="55" y1="23" x2="65" y2="45" />
      <line x1="75" y1="21" x2="85" y2="45" />
    </>
  );
}

function PlayIcon() {
  return (
    <>
      <circle cx="60" cy="60" r="42" />
      <path d="M50 42 L82 60 L50 78 Z" fill="currentColor" stroke="none" />
    </>
  );
}

function ReelIcon() {
  return (
    <>
      <circle cx="60" cy="60" r="42" />
      <circle cx="60" cy="60" r="9" />
      <circle cx="60" cy="27" r="8" />
      <circle cx="89" cy="45" r="8" />
      <circle cx="89" cy="75" r="8" />
      <circle cx="31" cy="75" r="8" />
      <circle cx="31" cy="45" r="8" />
    </>
  );
}

function DslrIcon() {
  return (
    <>
      <rect x="15" y="40" width="90" height="55" rx="8" />
      <rect x="45" y="20" width="30" height="20" rx="4" />
      <circle cx="60" cy="68" r="24" />
      <circle cx="60" cy="68" r="12" />
    </>
  );
}

function ApertureIcon() {
  return (
    <>
      <circle cx="60" cy="60" r="45" />
      <line x1="60" y1="60" x2="60" y2="15" />
      <line x1="60" y1="60" x2="99" y2="38" />
      <line x1="60" y1="60" x2="99" y2="83" />
      <line x1="60" y1="60" x2="60" y2="105" />
      <line x1="60" y1="60" x2="21" y2="83" />
      <line x1="60" y1="60" x2="21" y2="38" />
    </>
  );
}

function MountainFrameIcon() {
  return (
    <>
      <rect x="15" y="20" width="90" height="80" rx="6" />
      <circle cx="80" cy="42" r="8" />
      <path d="M20 90 L45 55 L65 75 L85 50 L100 90 Z" />
    </>
  );
}

function FlashIcon() {
  return <path d="M65 15 L35 65 L55 65 L45 105 L85 55 L62 55 Z" />;
}

function PenToolIcon() {
  return (
    <>
      <path d="M20 100 C40 60 60 60 96 22" strokeDasharray="4 6" />
      <circle cx="20" cy="100" r="6" />
      <circle cx="96" cy="22" r="6" />
      <path d="M96 22 L108 10 L120 22 L108 34 Z" />
    </>
  );
}

function SwatchIcon() {
  return (
    <>
      <circle cx="42" cy="62" r="14" />
      <circle cx="68" cy="42" r="14" />
      <circle cx="92" cy="66" r="14" />
      <circle cx="64" cy="90" r="14" />
    </>
  );
}

function RulerIcon() {
  return (
    <>
      <path d="M15 105 L15 15 L105 15" />
      <line x1="15" y1="30" x2="25" y2="30" />
      <line x1="15" y1="45" x2="25" y2="45" />
      <line x1="15" y1="60" x2="25" y2="60" />
      <line x1="15" y1="75" x2="25" y2="75" />
      <line x1="15" y1="90" x2="25" y2="90" />
      <line x1="30" y1="15" x2="30" y2="25" />
      <line x1="45" y1="15" x2="45" y2="25" />
      <line x1="60" y1="15" x2="60" y2="25" />
      <line x1="75" y1="15" x2="75" y2="25" />
      <line x1="90" y1="15" x2="90" y2="25" />
    </>
  );
}

function BrushIcon() {
  return (
    <>
      <path d="M30 90 L70 30" strokeWidth="10" />
      <path d="M70 30 L85 15 L95 25 L80 40 Z" />
    </>
  );
}

function BrowserIcon() {
  return (
    <>
      <rect x="15" y="20" width="90" height="70" rx="6" />
      <line x1="15" y1="38" x2="105" y2="38" />
      <circle cx="26" cy="29" r="3" fill="currentColor" stroke="none" />
      <circle cx="36" cy="29" r="3" fill="currentColor" stroke="none" />
      <circle cx="46" cy="29" r="3" fill="currentColor" stroke="none" />
    </>
  );
}

function CodeIcon() {
  return (
    <>
      <path d="M45 30 L20 60 L45 90" />
      <path d="M75 30 L100 60 L75 90" />
    </>
  );
}

function CursorIcon() {
  return <path d="M30 20 L30 95 L48 78 L60 100 L70 95 L58 73 L82 70 Z" />;
}

function WifiIcon() {
  return (
    <>
      <path d="M25 55 C45 35 75 35 95 55" />
      <path d="M38 68 C50 56 70 56 82 68" />
      <circle cx="60" cy="85" r="5" fill="currentColor" stroke="none" />
    </>
  );
}

const iconSets: Record<Variant, Array<() => React.JSX.Element>> = {
  video: [CameraIcon, ClapperIcon, PlayIcon, ReelIcon],
  photo: [DslrIcon, ApertureIcon, MountainFrameIcon, FlashIcon],
  design: [PenToolIcon, SwatchIcon, RulerIcon, BrushIcon],
  web: [BrowserIcon, CodeIcon, CursorIcon, WifiIcon],
};

const positions = [
  { topPct: 8, side: "left" as const, size: 100, rotate: -8 },
  { topPct: 30, side: "right" as const, size: 120, rotate: 6 },
  { topPct: 56, side: "left" as const, size: 110, rotate: 5 },
  { topPct: 80, side: "right" as const, size: 100, rotate: -6 },
];

export default function CategoryBackdrop({ variant }: { variant: Variant }) {
  const icons = iconSets[variant];
  const gridId = `blueprint-grid-${variant}`;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden text-accent" aria-hidden="true">
      {/* Blueprint grid, tiled across the full page */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.12]">
        <defs>
          <pattern id={gridId} width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0 L0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${gridId})`} />
      </svg>

      {/* Themed technical illustrations, scattered top to bottom */}
      {icons.map((IconComp, i) => {
        const pos = positions[i];
        const sideClass = pos.side === "left" ? "left-[4%] sm:left-[8%]" : "right-[4%] sm:right-[8%]";
        return (
          <svg
            key={i}
            viewBox="0 0 120 120"
            className={`absolute opacity-[0.18] ${sideClass}`}
            style={{
              top: `${pos.topPct}%`,
              width: pos.size,
              height: pos.size,
              transform: `rotate(${pos.rotate}deg)`,
            }}
          >
            <g stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <IconComp />
            </g>
          </svg>
        );
      })}
    </div>
  );
}
