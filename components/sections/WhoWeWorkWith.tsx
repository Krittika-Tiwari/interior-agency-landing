import Image from "next/image";

// Placeholder images. Swap for real project photos.
const AUDIENCES = [
  {
    title: "For residential design studios",
    body: "Full-home and single-room projects for homeowners. We target people who are buying, building or renovating, filter out budgets below your minimum, and fill your calendar with site visits and consultations.",
    tags: ["Full-home", "Single-room", "Renovations"],
    image: { src: "/images/project-bedroom.png", alt: "Bedroom with an upholstered headboard and warm wall lighting" },
  },
  {
    title: "For turnkey and commercial firms",
    body: "Offices, retail, hospitality and design-and-build. We set up lead systems for longer sales cycles, with follow-ups that keep your firm in front of decision makers until they're ready to commit.",
    tags: ["Offices", "Retail", "Hospitality"],
    image: { src: "/images/project-office.png", alt: "Home office with built-in shelving and a green leather chair" },
  },
];

export function WhoWeWorkWith() {
  return (
    <section id="about" className="on-dark panel section-pad bg-ink text-paper">
      <div className="container-content">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <p className="eyebrow text-brass lg:mt-5">Who we work with</p>
          <h2 className="heading-lg">
            Paid ads, automation and creative strategy, built around <em>how people actually hire a
            designer.</em>
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {AUDIENCES.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-tile border border-dark-line bg-white/[0.03] transition-colors hover:border-brass"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 768px) 600px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                />
              </div>
              <div className="p-7 md:p-9">
                <h3 className="font-display text-[30px] font-semibold leading-tight">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-dark-muted">{item.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <li key={t} className="pill border-dark-line text-dark-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
