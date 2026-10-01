import { ButtonLink } from "@/components/ButtonLink";
import { BOOKING_URL } from "@/lib/config";
import { PLANS } from "@/lib/pricing";

export function Pricing() {
  return (
    <section id="pricing" className="section-pad">
      <div className="container-content">
        <p className="eyebrow">Pricing</p>
        <h2 className="heading-lg mt-6 max-w-[900px]">Two plans. <em>Both run for three months.</em></h2>
        <p className="mt-4 text-ink-muted">Ad spend is paid directly to Meta and Google and is not included.</p>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {PLANS.map((plan) => {
            const dark = plan.theme === "dark";
            return (
              <article
                key={plan.name}
                className={`flex flex-col rounded-panel border p-8 md:p-10 ${
                  dark ? "on-dark border-ink bg-ink text-paper" : "border-line bg-card"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-[32px] font-semibold leading-tight">{plan.name}</h3>
                  {dark && <span className="pill border-brass text-brass">Full system</span>}
                </div>
                <p className="mt-4">
                  <span className="font-display text-[48px] font-medium italic leading-none">{plan.price}</span>{" "}
                  <span className={dark ? "text-dark-muted" : "text-ink-muted"}>/ {plan.period}</span>
                </p>
                <div className={`mt-8 flex-1 border-t pt-8 ${dark ? "border-dark-line" : "border-line"}`}>
                  {plan.intro && <p className="mb-4 font-semibold">{plan.intro}</p>}
                  <ul className={`space-y-3 ${dark ? "text-dark-muted" : "text-ink-muted"}`}>
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 leading-relaxed">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          className={`mt-[5px] h-4 w-4 shrink-0 ${dark ? "text-brass" : "text-accent"}`}
                        >
                          <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <ButtonLink
                  href={BOOKING_URL}
                  variant={dark ? "light" : "outline"}
                  className="mt-10 w-full"
                >
                  Book a strategy call
                </ButtonLink>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
