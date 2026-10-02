"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { Logo } from "@/components/Logo";
import { BOOKING_URL, NAV_LINKS, SITE_NAME } from "@/lib/config";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-paper/90 backdrop-blur-md">
      <div className="container-content flex h-20 items-center justify-between gap-6">
        <a href="#top" aria-label={`${SITE_NAME} home`} className="text-[14px] leading-none">
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[15px] text-ink-muted transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={BOOKING_URL}
          className="hidden text-[15px] font-medium text-ink transition-colors hover:text-accent lg:block"
        >
          Book a call
        </a>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            {open ? (
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.25" />
            ) : (
              <path d="M3 8h16M3 14h16" stroke="currentColor" strokeWidth="1.25" />
            )}
          </svg>
        </button>
      </div>

      <div id="mobile-menu" hidden={!open} className="lg:hidden">
        <nav aria-label="Mobile" className="container-content pb-10 pt-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 text-[32px] font-light tracking-[-0.03em]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href={BOOKING_URL} className="mt-8">
            Book a strategy call
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
