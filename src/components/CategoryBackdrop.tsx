type Variant = "video" | "photo" | "design" | "web";

function VideoGlyph() {
  return (
    <g stroke="currentColor" strokeWidth="1.5" fill="none">
      <rect x="60" y="120" width="200" height="140" rx="12" />
      <path d="M260 160 L340 120 L340 260 L260 220 Z" />
      <circle cx="160" cy="190" r="34" />
      <path d="M150 175 L182 190 L150 205 Z" fill="currentColor" stroke="none" />
      {[90, 130, 170, 210].map((x) => (
        <rect key={`t${x}`} x={x} y="104" width="10" height="10" />
      ))}
      {[90, 130, 170, 210].map((x) => (
        <rect key={`b${x}`} x={x} y="276" width="10" height="10" />
      ))}
    </g>
  );
}

function PhotoGlyph() {
  return (
    <g stroke="currentColor" strokeWidth="1.5" fill="none">
      <rect x="70" y="140" width="240" height="160" rx="14" />
      <rect x="140" y="108" width="60" height="32" rx="6" />
      <circle cx="190" cy="222" r="55" />
      <circle cx="190" cy="222" r="30" />
      <rect x="255" y="160" width="22" height="14" rx="3" />
    </g>
  );
}

function DesignGlyph() {
  return (
    <g stroke="currentColor" strokeWidth="1.5" fill="none">
      <path d="M90 310 C140 230 220 220 310 130" strokeDasharray="5 7" />
      <circle cx="90" cy="310" r="8" />
      <circle cx="200" cy="223" r="6" fill="currentColor" stroke="none" />
      <circle cx="310" cy="130" r="8" />
      <path d="M310 130 L338 100 L360 122 L332 152 Z" />
      <path d="M310 130 L322 142" />
    </g>
  );
}

function WebGlyph() {
  return (
    <g stroke="currentColor" strokeWidth="1.5" fill="none">
      <rect x="55" y="95" width="290" height="210" rx="10" />
      <line x1="55" y1="138" x2="345" y2="138" />
      <circle cx="78" cy="116" r="5" />
      <circle cx="97" cy="116" r="5" />
      <circle cx="116" cy="116" r="5" />
      <rect x="80" y="160" width="240" height="22" rx="4" />
      <rect x="80" y="198" width="112" height="84" rx="4" />
      <rect x="208" y="198" width="112" height="84" rx="4" />
    </g>
  );
}

const glyphs: Record<Variant, () => React.JSX.Element> = {
  video: VideoGlyph,
  photo: PhotoGlyph,
  design: DesignGlyph,
  web: WebGlyph,
};

export default function CategoryBackdrop({
  variant,
  className = "",
}: {
  variant: Variant;
  className?: string;
}) {
  const Glyph = glyphs[variant];
  return (
    <svg
      viewBox="0 0 400 400"
      className={`pointer-events-none absolute text-accent opacity-20 ${className}`}
      aria-hidden="true"
    >
      <Glyph />
    </svg>
  );
}
