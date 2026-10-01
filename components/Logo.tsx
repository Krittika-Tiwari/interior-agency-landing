import { SITE_NAME } from "@/lib/config";

/** Gold square + Syne wordmark */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-gold" />
      <span className="font-display text-[18px] font-semibold uppercase leading-6 tracking-[0.1em] text-ink">
        {SITE_NAME}
      </span>
    </span>
  );
}
