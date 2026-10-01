import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

const variants: Record<Variant, string> = {
  primary: "bg-gold font-bold text-gold-on shadow-btn hover:bg-gold-deep",
  secondary: "bg-surface-highest font-semibold text-ink hover:bg-surface-high",
};

type Props = {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ href, variant = "primary", className = "", children }: Props) {
  return (
    <a
      href={href}
      className={`inline-flex h-14 items-center justify-center px-8 text-center text-[12px] uppercase leading-4 tracking-[0.05em] transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
