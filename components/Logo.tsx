type Props = {
  className?: string;
};

/** Wireframe sphere: outline, equator and one meridian */
export function SphereMark({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <circle cx="16" cy="16" r="14" fill="currentColor" className="text-accent" />
      <g fill="none" stroke="#F6F1EA" strokeWidth="1.2" opacity="0.85">
        <ellipse cx="16" cy="16" rx="14" ry="5" />
        <ellipse cx="16" cy="16" rx="5.5" ry="14" />
      </g>
    </svg>
  );
}

/** WEBSPHERX wordmark. The final X picks up the accent colour. */
export function Logo({ className = "" }: Props) {
  return (
    <span className={`inline-flex items-center gap-3 font-sans font-medium uppercase tracking-[0.3em] ${className}`}>
      <SphereMark className="h-[1.6em] w-[1.6em] shrink-0" />
      <span>
        WEBSPHER<span className="text-accent">X</span>
      </span>
    </span>
  );
}
