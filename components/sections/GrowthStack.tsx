import Image from "next/image";
import { ArrowIcon } from "@/components/ButtonLink";

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

// Bento layout: wide card, tall accent card, wide card with photo
const LAYOUT = [
  "bg-card border border-line lg:col-span-2",
  "on-dark bg-accent text-white lg:row-span-2",
  "bg-card border border-line lg:col-span-2",
];

export function GrowthStack() {
  return (
    <section id="services" className="section-pad">
      <div className="container-content">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <p className="eyebrow lg:mt-5">Our growth stack</p>
          <h2 className="heading-lg">
            Every studio with a full pipeline has a system behind it. <em>This is ours.</em>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {STACK.map((item, i) => {
            const accent = i === 1;
            return (
              <article
                key={item.number}
                className={`flex flex-col overflow-hidden rounded-tile ${LAYOUT[i]} ${i === 2 ? "md:flex-row" : ""}`}
              >
                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <div className="flex items-center justify-between">
                    <span className={`pill ${accent ? "border-white/40" : "border-line text-ink-muted"}`}>
                      {item.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        accent ? "bg-white text-accent" : "bg-ink text-paper"
                      }`}
                    >
                      <ArrowIcon />
                    </span>
                  </div>
                  <h3 className={`font-display text-[32px] font-semibold leading-tight ${accent ? "mt-auto pt-16" : "mt-10"}`}>
                    {item.title}
                  </h3>
                  <ul className={`mt-5 space-y-3 ${accent ? "text-white/85" : "text-ink-muted"}`}>
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 leading-relaxed">
                        <span aria-hidden="true" className="mt-[11px] h-px w-3 shrink-0 bg-current" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                {i === 2 && (
                  <div className="relative aspect-[4/3] md:aspect-auto md:w-[42%]">
                    <Image
                      src="/images/project-kitchen.png"
                      alt="Kitchen with fluted cabinet fronts and a stone worktop"
                      fill
                      sizes="(min-width: 1024px) 340px, (min-width: 768px) 42vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
