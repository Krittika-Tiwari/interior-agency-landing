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
    <section id="process" className="section-pad">
      <div className="container-content">
        <p className="eyebrow">How it works</p>
        <h2 className="heading-lg mt-8 max-w-[900px]">
          From first call to live campaigns <em>in three weeks.</em>
        </h2>
        <ol className="mt-20 grid gap-16 sm:grid-cols-2 md:mt-28 lg:grid-cols-4 lg:gap-12">
          {STEPS.map((step) => (
            <li key={step.title}>
              <p className="text-[13px] text-ink-muted">{step.when}</p>
              <h3 className="heading-sm mt-6">{step.title}</h3>
              <p className="mt-4 leading-relaxed text-ink-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
