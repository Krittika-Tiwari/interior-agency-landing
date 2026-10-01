import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { BOOKING_URL, NAV_LINKS, SITE_NAME } from "@/lib/config";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface-lowest/80 shadow-header backdrop-blur-[12px]">
      <div className="container-content flex h-16 items-center justify-between gap-6">
        <a href="#top" aria-label={`${SITE_NAME} home`}>
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[12px] font-semibold uppercase leading-4 tracking-[0.1em] text-ink-muted transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={BOOKING_URL}
            className="flex h-9 items-center bg-gold-deep px-4 text-[12px] font-semibold uppercase leading-4 tracking-[0.05em] text-gold-on-deep transition-colors hover:bg-gold"
          >
            Acquire
          </a>
          <a
            href="#apply"
            aria-label="Apply for your territory"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gold transition-colors hover:bg-gold-deep"
          >
            <Icon src="/figma/header-action.svg" width={12} height={12} />
          </a>
        </div>
      </div>
    </header>
  );
}
