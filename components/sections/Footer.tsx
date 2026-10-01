import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-surface-lowest px-6 py-16">
      <div className="flex flex-col items-center gap-1 text-center">
        <Logo />
        <p className="max-w-[320px] text-[12px] font-semibold uppercase leading-4 tracking-[0.05em] text-ink-faint">
          Architectural acquisition infrastructure for elite space ateliers
        </p>
        <p className="mt-6 text-[12px] leading-4 text-ink-faint">
          &copy; {new Date().getFullYear()} WEBSPHERX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
