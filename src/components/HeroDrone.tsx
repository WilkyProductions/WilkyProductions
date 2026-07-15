export default function HeroDrone({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 220 170"
        className="h-auto w-full animate-[float_6s_ease-in-out_infinite] drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
        aria-hidden="true"
      >
        {/* prop blur rings */}
        <g stroke="var(--accent)" strokeWidth="1.5" opacity="0.45" fill="none">
          <ellipse cx="34" cy="34" rx="26" ry="10" />
          <ellipse cx="186" cy="34" rx="26" ry="10" />
          <ellipse cx="34" cy="116" rx="26" ry="10" />
          <ellipse cx="186" cy="116" rx="26" ry="10" />
        </g>
        {/* arms */}
        <g stroke="#f2f2f0" strokeWidth="4" strokeLinecap="round">
          <line x1="98" y1="66" x2="34" y2="34" />
          <line x1="122" y1="66" x2="186" y2="34" />
          <line x1="98" y1="84" x2="34" y2="116" />
          <line x1="122" y1="84" x2="186" y2="116" />
        </g>
        {/* motors */}
        <g fill="#f2f2f0">
          <circle cx="34" cy="34" r="7" />
          <circle cx="186" cy="34" r="7" />
          <circle cx="34" cy="116" r="7" />
          <circle cx="186" cy="116" r="7" />
        </g>
        {/* body */}
        <rect x="92" y="62" width="36" height="26" rx="10" fill="#f2f2f0" />
        {/* camera gimbal */}
        <circle cx="110" cy="96" r="9" fill="#0a0a0b" stroke="#f2f2f0" strokeWidth="2.5" />
        {/* rec indicator */}
        <circle cx="132" cy="60" r="3.5" fill="var(--accent)" className="animate-pulse" />
      </svg>
    </div>
  );
}
