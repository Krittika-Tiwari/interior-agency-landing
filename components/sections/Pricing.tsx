import { ButtonLink } from "@/components/ButtonLink";
import { BOOKING_URL } from "@/lib/config";
import { PLANS } from "@/lib/pricing";

export function Pricing() {
  return (
    <section id="pricing" className="section-pad bg-paper-alt">
      <div className="container-content">
        <p className="eyebrow">Pricing</p>
        <h2 className="heading-lg mt-8 max-w-[900px]">
          Two plans. <em>Both run for three months.</em>
        </h2>
        <p className="mt-6 text-ink-muted">Ad spend is paid directly to Meta and Google and is not included.</p>

        <div className="mt-20 grid gap-20 md:mt-28 md:grid-cols-2 md:gap-16 lg:gap-24">
          {PLANS.map((plan) => {
            const featured = plan.theme === "dark";
            return (
              <article key={plan.name} className="flex flex-col border-t border-ink pt-10">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="heading-sm">{plan.name}</h3>
                  {featured && (
                    <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-accent">Full system</p>
                  )}
                </div>
                <p className="mt-6">
                  <span className="text-[48px] font-light leading-none tracking-[-0.03em]">{plan.price}</span>{" "}
                  <span className="text-ink-muted">/ {plan.period}</span>
                </p>
                <div className="mt-10 flex-1">
                  {plan.intro && <p className="mb-4 font-medium">{plan.intro}</p>}
                  <ul className="space-y-3 leading-relaxed text-ink-muted">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <ButtonLink
                  href={BOOKING_URL}
                  variant={featured ? "primary" : "text"}
                  className="mt-10 self-start"
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
