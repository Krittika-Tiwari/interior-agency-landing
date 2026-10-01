import { TESTIMONIALS } from "@/lib/testimonials";

export function Results() {
  return (
    <section id="results" className="panel section-pad bg-paper-alt">
      <div className="container-content">
        <p className="eyebrow">Results</p>
        <h2 className="heading-lg mt-6 max-w-[900px]">What <em>studio owners</em> say.</h2>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-tile bg-card p-8">
              <span aria-hidden="true" className="font-display text-[72px] leading-[0.6] text-accent">
                &ldquo;
              </span>
              <blockquote className="mt-4 flex-1 font-display text-[24px] font-medium italic leading-snug">
                <p>{t.quote}</p>
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
