const AUDIENCES = [
  {
    title: "For residential design studios",
    body: "Full-home and single-room projects for homeowners. We target people who are buying, building or renovating, filter out budgets below your minimum, and fill your calendar with site visits and consultations.",
  },
  {
    title: "For turnkey and commercial firms",
    body: "Offices, retail, hospitality and design-and-build. We set up lead systems for longer sales cycles, with follow-ups that keep your firm in front of decision makers until they're ready to commit.",
  },
];

export function WhoWeWorkWith() {
  return (
    <section id="about" className="on-dark section-pad bg-ink text-paper">
      <div className="container-content">
        <p className="eyebrow text-dark-muted">Who we work with</p>
        <h2 className="heading-lg mt-6 max-w-[900px]">
          Paid ads, automation and creative strategy, built around how people actually hire a
          designer.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {AUDIENCES.map((item) => (
            <article key={item.title} className="rounded-tile border border-dark-line p-8 transition-colors hover:border-accent md:p-10">
              <h3 className="font-display text-[22px] font-medium leading-snug tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-dark-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
