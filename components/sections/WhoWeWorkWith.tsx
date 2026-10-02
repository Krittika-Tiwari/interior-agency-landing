import Image from "next/image";

// Placeholder images. Swap for real project photos.
const AUDIENCES = [
  {
    title: "Residential design studios",
    body: "Full-home and single-room projects for homeowners. We target people who are buying, building or renovating, filter out budgets below your minimum, and fill your calendar with site visits and consultations.",
    image: { src: "/images/project-bedroom.png", alt: "Bedroom with an upholstered headboard and warm wall lighting" },
  },
  {
    title: "Turnkey and commercial firms",
    body: "Offices, retail, hospitality and design-and-build. We set up lead systems for longer sales cycles, with follow-ups that keep your firm in front of decision makers until they're ready to commit.",
    image: { src: "/images/project-office.png", alt: "Home office with built-in shelving and a green leather chair" },
  },
];

export function WhoWeWorkWith() {
  return (
    <section id="about" className="section-pad">
      <div className="container-content">
        <p className="eyebrow">Who we work with</p>
        <h2 className="heading-lg mt-8 max-w-[900px]">
          Paid ads, automation and creative strategy, <em>built around how people actually hire a
          designer.</em>
        </h2>

        <div className="mt-20 grid gap-20 md:mt-28 md:grid-cols-2 md:gap-16">
          {AUDIENCES.map((item) => (
            <article key={item.title}>
              <div className="relative aspect-[4/3] bg-paper-alt">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="heading-sm mt-8">{item.title}</h3>
              <p className="mt-4 max-w-[480px] leading-relaxed text-ink-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
