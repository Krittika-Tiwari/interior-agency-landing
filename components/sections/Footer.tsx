import { Logo } from "@/components/Logo";
import { NAV_LINKS, SITE_NAME } from "@/lib/config";

const CONTACT_LINKS = [
  { label: "[PHONE]", href: "tel:[PHONE]" },
  { label: "[EMAIL]", href: "mailto:[EMAIL]" },
  { label: "Instagram", href: "[INSTAGRAM]" },
  { label: "LinkedIn", href: "[LINKEDIN]" },
];

const linkClass = "text-dark-muted transition-colors hover:text-paper";
const headingClass = "text-[13px] font-medium uppercase tracking-[0.18em] text-dark-muted";

export function Footer() {
  return (
    <footer className="on-dark bg-ink pb-10 pt-24 text-paper md:pt-32">
      <div className="container-content">
        <div className="grid gap-16 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <a href="#top" aria-label={`${SITE_NAME} home`} className="text-[14px] leading-none">
              <Logo />
            </a>
            <p className="mt-6 max-w-[360px] leading-relaxed text-dark-muted">
              Paid ads, enquiry funnels and CRM automation for interior design studios.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className={headingClass}>Menu</h2>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={headingClass}>Contact</h2>
            <ul className="mt-6 space-y-3">
              {CONTACT_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-dark-line pt-8 text-sm text-dark-muted sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <ul className="flex gap-8">
            <li>
              <a href="[PRIVACY_POLICY_URL]" className={linkClass}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="[TERMS_URL]" className={linkClass}>
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
