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
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="container-content flex h-[72px] items-center justify-between gap-6">
        <a href="#top" aria-label={`${SITE_NAME} home`} className="text-xl leading-none">
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[15px] font-medium text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={BOOKING_URL} variant="accent">
            Book a strategy call
          </ButtonLink>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-btn border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.5" />
            )}
          </svg>
        </button>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-line lg:hidden">
        <nav aria-label="Mobile" className="container-content py-6">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-line">
                <a
                  href={link.href}
                  className="block py-4 text-lg font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href={BOOKING_URL} variant="accent" className="mt-6 w-full">
            Book a strategy call
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
