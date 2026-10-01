import type { ReactNode } from "react";

/** Gold square marker + small uppercase label that opens each section */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-2 text-[12px] font-semibold uppercase leading-4 tracking-[0.1em] text-gold ${className}`}>
      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-gold" />
      {children}
    </p>
  );
}
