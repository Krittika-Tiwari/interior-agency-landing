import { Eyebrow } from "@/components/Eyebrow";
import { Icon } from "@/components/Icon";

const TOOLS = [
  {
    title: "Meta ads infrastructure",
    icon: { src: "/figma/stack-meta.svg", width: 20, height: 19.167 },
    body: "Geo-fenced targeting calibrated exclusively to the top 5% zip codes, reaching verified ultra-luxury residential owners.",
  },
  {
    title: "Google Search & P-Max",
    icon: { src: "/figma/stack-google.svg", width: 17.083, height: 16.667 },
    body: "Surgical keyword interception targeting active intent expressions like ‘luxury interior architect’ and ‘penthouse restoration’.",
  },
  {
    title: "Studio CRM pipeline",
    icon: { src: "/figma/stack-crm.svg", width: 15, height: 15 },
    body: "Dedicated enterprise backend executing two-way SMS and WhatsApp client verification in under 60 seconds.",
  },
  {
    title: "Direct principal calendar",
    icon: { src: "/figma/stack-calendar.svg", width: 15, height: 16.667 },
    body: "SavvyCal & Calendly synchronized reservations ensuring immediate briefing scheduling with verified studio heads.",
  },
  {
    title: "Zapier & Make webhooks",
    icon: { src: "/figma/stack-webhooks.svg", width: 16.667, height: 15 },
    body: "99.98% uptime automated dispatch piping project briefs straight into internal studio Slack and Notion operations.",
  },
  {
    title: "Bespoke intake dossier",
    icon: { src: "/figma/stack-intake.svg", width: 13.333, height: 16.667 },
    body: "Algorithmic multi-step filter eliminating non-qualified inquiries via rigid $100k+ budget and floor area gates.",
  },
];

export function Stack() {
  return (
    <section id="stack" className="section-pad bg-surface-low">
      <div className="container-content">
        <Eyebrow>System blueprints</Eyebrow>
        <div className="mt-1 grid gap-2 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h2 className="heading-2">The enterprise advertising &amp; automation stack</h2>
          <p className="body-sm max-w-[460px] lg:text-[16px] lg:leading-[26px]">
            Rigid software synchronization engineered exclusively to capture ultra-high-net-worth
            real estate commissions.
          </p>
        </div>

        <ol className="mt-8 grid gap-2 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {TOOLS.map((tool, i) => (
            <li key={tool.title} className="flex flex-col gap-[3px] bg-surface p-4 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] lg:p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="flex items-center gap-1 font-display text-[18px] font-semibold uppercase leading-6">
                  <Icon {...tool.icon} />
                  {tool.title}
                </h3>
                <span className="text-[12px] font-semibold leading-4 tracking-[0.12em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="body-sm">{tool.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
