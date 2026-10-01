import { Eyebrow } from "@/components/Eyebrow";

const METRICS = [
  {
    label: "Monthly lead volume",
    value: "30–50",
    body: "Vetted client briefs generated monthly per dedicated territory.",
    gold: true,
  },
  {
    label: "Discovery show-up rate",
    value: "84%",
    body: "Direct-to-calendar consultation attendance powered by concierge confirmation.",
  },
  {
    label: "Average deal value",
    value: "$420k+",
    body: "Aggregate client pipeline project size across active partner studios.",
    gold: true,
  },
];

export function Metrics() {
  return (
    <section id="metrics" className="section-pad bg-surface-lowest">
      <div className="container-content">
        <Eyebrow>Validated benchmarks</Eyebrow>
        <h2 className="heading-2 mt-1">Strict accountability metrics</h2>

        <dl className="mt-8 grid gap-4 lg:mt-12 lg:grid-cols-3">
          {METRICS.map((m) => (
            <div key={m.label} className="flex flex-col bg-surface-high p-4 lg:p-6">
              <dt className="label pb-1">{m.label}</dt>
              <dd
                className={`font-display text-[56px] font-extrabold leading-[56px] tracking-[-0.025em] lg:text-[44px] lg:leading-[48px] xl:text-[56px] xl:leading-[56px] ${
                  m.gold ? "text-gold" : "text-ink"
                }`}
              >
                {m.value}
              </dd>
              <dd className="pt-2 text-[14px] leading-[22.4px] tracking-[0.01em] text-ink-muted">{m.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
