import { ButtonLink } from "@/components/ButtonLink";
import { BOOKING_URL } from "@/lib/config";

export function FinalCta() {
  return (
    <section className="on-dark section-pad relative overflow-hidden bg-accent text-white">
      <WireSphere />
      <div className="container-content relative flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[760px]">
          <h2 className="heading-lg">Your next project shouldn&rsquo;t depend on referrals alone.</h2>
          <p className="mt-5 text-lg leading-relaxed">
            Book a 30-minute call. We&rsquo;ll look at your current enquiries and service area, and
            show you what a campaign for your studio would involve.
          </p>
        </div>
        <ButtonLink href={BOOKING_URL} variant="light" className="shrink-0">
          Schedule your call
        </ButtonLink>
      </div>
    </section>
  );
}

/** Large decorative wireframe globe bleeding off the right edge */
function WireSphere() {
  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden="true"
      className="pointer-events-none absolute -right-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 opacity-25 md:-right-16"
    >
      <g fill="none" stroke="white" strokeWidth="1">
        <circle cx="200" cy="200" r="198" />
        {[60, 120, 170].map((ry) => (
          <ellipse key={`lat-${ry}`} cx="200" cy="200" rx="198" ry={ry} />
        ))}
        {[50, 110, 160].map((rx) => (
          <ellipse key={`lon-${rx}`} cx="200" cy="200" rx={rx} ry="198" />
        ))}
        <line x1="2" y1="200" x2="398" y2="200" />
        <line x1="200" y1="2" x2="200" y2="398" />
      </g>
    </svg>
  );
}
