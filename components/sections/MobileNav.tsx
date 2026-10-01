"use client";

import { useEffect, useState } from "react";
import { MaskIcon } from "@/components/Icon";
import { NAV_LINKS } from "@/lib/config";

/** Fixed bottom tab bar on phones. Highlights the section currently in view. */
export function MobileNav() {
  const [active, setActive] = useState<string>(NAV_LINKS[0].href);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Sections"
      className="fixed inset-x-0 bottom-0 z-50 bg-surface-lowest/90 shadow-nav backdrop-blur-[12px] md:hidden"
    >
      <ul className="flex h-20 items-center justify-around px-2 pb-[env(safe-area-inset-bottom)]">
        {NAV_LINKS.map((link) => {
          const isActive = active === link.href;
          return (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={`flex h-12 min-w-16 flex-col items-center justify-between text-[12px] font-semibold uppercase leading-4 tracking-[0.1em] transition-colors ${
                  isActive ? "text-gold" : "text-ink-muted"
                }`}
              >
                <span className="flex h-[22px] items-center">
                  <MaskIcon {...link.icon} />
                </span>
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
