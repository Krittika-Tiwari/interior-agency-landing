const STEPS = [
  {
    when: "Week 1",
    title: "Strategy call",
    body: "We go through your project types, service area, minimum budget and current lead flow, then agree targets for the first three months.",
  },
  {
    when: "Weeks 1 to 2",
    title: "Build",
    body: "We write and design the ads, build the enquiry funnel and set up your CRM pipeline, calendar and follow-ups.",
  },
  {
    when: "Weeks 2 to 3",
    title: "Launch",
    body: "Campaigns go live. Qualified enquiries land in your CRM and book straight into your calendar.",
  },
  {
    when: "Ongoing",
    title: "Optimise",
    body: "We review cost per enquiry and booked consultations, refresh creative and cut what isn't working.",
  },
];

export function HowItWorks() {
  return (
    <section id="process" className="panel section-pad bg-paper-alt">
      <div className="container-content">
        <p className="eyebrow">How it works</p>
        <h2 className="heading-lg mt-6 max-w-[900px]">From first call to live campaigns <em>in three weeks.</em></h2>
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex flex-col rounded-tile bg-card p-7">
              <div className="flex items-center justify-between">
                <span className="pill border-line text-ink-muted">{step.when}</span>
                <span aria-hidden="true" className="font-display text-[40px] font-medium italic leading-none text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-12 font-display text-[28px] font-semibold leading-tight">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
