// Point this at your Calendly or GoHighLevel booking page.
export const BOOKING_URL = "[BOOKING_URL]";

// Endpoint that receives the intake form (e.g. Formspree, GoHighLevel or a CRM webhook).
export const FORM_ACTION = "[FORM_ENDPOINT]";

export const SITE_NAME = "WEBSPHERX";

export const NAV_LINKS = [
  { label: "Engine", href: "#stack", icon: { src: "/figma/nav-engine.svg", width: 11, height: 18 } },
  { label: "Vault", href: "#process", icon: { src: "/figma/nav-vault.svg", width: 20, height: 18 } },
  { label: "Metrics", href: "#metrics", icon: { src: "/figma/nav-metrics.svg", width: 22, height: 17 } },
  { label: "Atelier", href: "#apply", icon: { src: "/figma/nav-atelier.svg", width: 18, height: 18 } },
] as const;
