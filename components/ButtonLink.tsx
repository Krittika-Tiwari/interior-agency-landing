import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "accent" | "light";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-paper border border-ink hover:bg-accent hover:border-accent",
  outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
  accent: "bg-accent text-white border border-accent hover:bg-accent-deep hover:border-accent-deep",
  light: "bg-paper text-ink border border-paper hover:bg-white hover:border-white",
};

type Props = {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ href, variant = "solid", className = "", children }: Props) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-btn items-center justify-center rounded-btn px-7 text-[15px] font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
