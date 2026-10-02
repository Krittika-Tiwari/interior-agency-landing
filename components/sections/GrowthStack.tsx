const STACK = [
  {
    title: "Performance advertising",
    points: [
      "Meta, Google and YouTube ads aimed at people in your service area who are planning a project",
      "Retargeting for people who visited your site or watched your videos but haven't enquired",
    ],
  },
  {
    title: "Funnels, CRM and automation",
    points: [
      "Landing page and enquiry form that asks for budget, property type and timeline",
      "CRM pipeline that tracks every lead from enquiry to signed project",
      "WhatsApp, SMS and email follow-ups",
    ],
  },
  {
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
    <section id="services" className="section-pad bg-paper-alt">
      <div className="container-content">
        <p className="eyebrow">Our growth stack</p>
        <h2 className="heading-lg mt-8 max-w-[900px]">
          Every studio with a full pipeline has a system behind it. <em>This is ours.</em>
        </h2>

        <div className="mt-20 grid gap-16 md:mt-28 lg:grid-cols-3 lg:gap-16">
          {STACK.map((item, i) => (
            <article key={item.title}>
              <p className="text-[13px] tabular-nums text-ink-muted">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="heading-sm mt-6">{item.title}</h3>
              <ul className="mt-6 space-y-3 leading-relaxed text-ink-muted">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
