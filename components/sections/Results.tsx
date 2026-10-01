import { TESTIMONIALS } from "@/lib/testimonials";

export function Results() {
  return (
    <section id="results" className="section-pad bg-paper-alt">
      <div className="container-content">
        <p className="eyebrow">Results</p>
        <h2 className="heading-lg mt-6 max-w-[900px]">What studio owners say.</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-tile border border-line bg-card p-8">
              <blockquote className="flex-1 font-serif text-[26px] italic leading-snug">
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-8 border-t border-line pt-6">
                <p className="font-semibold">{t.name}</p>
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
