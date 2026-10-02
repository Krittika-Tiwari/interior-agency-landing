import { TESTIMONIALS } from "@/lib/testimonials";

export function Results() {
  return (
    <section id="results" className="section-pad">
      <div className="container-content">
        <p className="eyebrow">Results</p>
        <h2 className="heading-lg mt-8 max-w-[900px]">
          What <em>studio owners</em> say.
        </h2>
        <div className="mt-20 grid gap-16 md:mt-28 md:grid-cols-3 md:gap-12">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="flex flex-col">
              <blockquote className="flex-1 text-[22px] font-light leading-snug tracking-[-0.015em]">
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-10">
                <p className="font-medium">{t.name}</p>
                <p className="mt-1 text-sm text-ink-muted">
                  {t.studio}, {t.city}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
