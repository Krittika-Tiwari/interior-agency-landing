const STACK = [
  {
    number: "01",
    title: "Performance advertising",
    points: [
      "Meta, Google and YouTube ads aimed at people in your service area who are planning a project",
      "Retargeting for people who visited your site or watched your videos but haven't enquired",
    ],
  },
  {
    number: "02",
    title: "Funnels, CRM and automation",
    points: [
      "Landing page and enquiry form that asks for budget, property type and timeline",
      "CRM pipeline that tracks every lead from enquiry to signed project",
      "WhatsApp, SMS and email follow-ups",
    ],
  },
  {
    number: "03",
    title: "Portfolio content and creative",
    points: [
      "Before-and-after reels from your finished projects",
      "Walkthrough videos of completed spaces",
      "Carousel case studies that show the brief, the process and the result",
    ],
  },
];

export function GrowthStack() {
  return (
    <section id="services" className="section-pad">
      <div className="container-content">
        <p className="eyebrow">Our growth stack</p>
        <h2 className="heading-lg mt-6 max-w-[900px]">
          Every studio with a full pipeline has a system behind it. This is ours.
        </h2>
        <div className="mt-14 grid border-t border-ink md:grid-cols-3">
          {STACK.map((item, i) => (
            <article
              key={item.number}
              className={`py-10 md:px-8 md:first:pl-0 md:last:pr-0 ${
                i > 0 ? "border-t border-line md:border-l md:border-t-0" : ""
              }`}
            >
              <p className="font-display text-[40px] font-medium leading-none tracking-[-0.03em] text-accent">{item.number}</p>
              <h3 className="mt-6 font-display text-[21px] font-medium leading-snug tracking-[-0.02em]">{item.title}</h3>
              <ul className="mt-5 space-y-3 text-ink-muted">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed">
                    <span aria-hidden="true" className="mt-[11px] h-px w-3 shrink-0 bg-ink-muted" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
