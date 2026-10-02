import type { ReactNode } from "react";

type Variant = "primary" | "text";

// Plain text links with no box or underline: primary in full ink, text in a quieter tone
const variants: Record<Variant, string> = {
  primary: "font-medium text-ink hover:text-accent",
  text: "text-ink-muted hover:text-ink",
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
      className={`inline-flex min-h-11 items-center text-[16px] tracking-[-0.005em] transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
