import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "accent" | "light";

// [button, arrow chip]
const variants: Record<Variant, [string, string]> = {
  solid: ["bg-ink text-paper border-ink hover:bg-accent hover:border-accent", "bg-paper text-ink"],
  outline: ["border-ink text-ink hover:bg-ink hover:text-paper", "bg-ink text-paper group-hover:bg-paper group-hover:text-ink"],
  accent: ["bg-accent text-white border-accent hover:bg-ink hover:border-ink", "bg-white text-accent"],
  light: ["bg-paper text-ink border-paper hover:bg-white hover:border-white", "bg-ink text-paper"],
};

type Props = {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ href, variant = "solid", className = "", children }: Props) {
  const [button, chip] = variants[variant];
  return (
    <a
      href={href}
      className={`group inline-flex min-h-btn items-center justify-between gap-4 rounded-full border py-1.5 pl-6 pr-1.5 text-[15px] font-medium transition-colors ${button} ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-[transform,background-color,color] duration-300 group-hover:rotate-45 motion-reduce:transition-none ${chip}`}
      >
        <ArrowIcon />
      </span>
    </a>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path d="M4.5 11.5l7-7M5.5 4.5h6v6" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
