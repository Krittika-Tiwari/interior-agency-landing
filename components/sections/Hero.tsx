import Image from "next/image";
import { ArrowIcon, ButtonLink } from "@/components/ButtonLink";
import { BOOKING_URL } from "@/lib/config";

// Placeholder image. Replace /public/images/project-living-room.png with a real,
// wide project photo from the studio's portfolio and update the alt text to match.
const HERO_IMAGE = {
  src: "/images/project-living-room.png",
  alt: "Living room with a linen sofa, oak joinery and a travertine coffee table",
};

const SERVICES = ["Meta ads", "Google ads", "Enquiry funnels", "CRM automation", "Reels & creative"];

export function Hero() {
  return (
    <section className="on-dark panel relative mt-1 bg-ink text-paper">
      <Image
        src={HERO_IMAGE.src}
        alt={HERO_IMAGE.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />

      <RotatingBadge />

      <div className="container-content relative flex min-h-[620px] flex-col justify-end pb-10 pt-28 sm:min-h-[700px] lg:min-h-[780px] lg:pb-14">
        <p className="eyebrow text-brass">Client acquisition for interior designers</p>
        <h1 className="heading-hero mt-6 max-w-[1000px]">
          More qualified project enquiries <em>for interior design studios.</em>
        </h1>

        <div className="mt-10 grid gap-8 border-t border-paper/20 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="max-w-[560px] text-lg leading-relaxed text-paper/80">
              We run your Meta and Google ads, build the enquiry funnel and set up the CRM, so
              homeowners with a real budget and timeline end up booked in for a consultation.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Services">
              {SERVICES.map((s) => (
                <li key={s} className="pill border-paper/25 bg-paper/10 text-paper backdrop-blur-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={BOOKING_URL} variant="accent">
              Book a strategy call
            </ButtonLink>
            <ButtonLink href="#pricing" variant="light">
              View pricing
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Circular "book a call" badge with slowly rotating text */
function RotatingBadge() {
  return (
    <a
      href={BOOKING_URL}
      aria-label="Book a strategy call"
      className="group absolute right-6 top-6 z-10 hidden h-[132px] w-[132px] items-center justify-center rounded-full bg-paper text-ink transition-colors hover:bg-accent hover:text-white md:flex lg:right-10 lg:top-10"
    >
      <svg viewBox="0 0 120 120" aria-hidden="true" className="absolute inset-0 h-full w-full animate-spin-slow motion-reduce:animate-none">
        <defs>
          <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text className="fill-current font-sans text-[10.5px] font-medium uppercase tracking-[0.32em]">
          <textPath href="#badge-circle">Book a strategy call • Book a call •</textPath>
        </text>
      </svg>
      <ArrowIcon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-45" />
    </a>
  );
}
