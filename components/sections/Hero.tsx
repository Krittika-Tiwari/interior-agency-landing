import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { BOOKING_URL } from "@/lib/config";

// Placeholder image. Replace /public/images/project-living-room.png with a real,
// wide project photo from the studio's portfolio and update the alt text to match.
const HERO_IMAGE = {
  src: "/images/project-living-room.png",
  alt: "Living room with a linen sofa, oak joinery and a travertine coffee table",
};

export function Hero() {
  return (
    <section className="pt-20 md:pt-32">
      <div className="container-content">
        <p className="eyebrow">Client acquisition for interior designers</p>
        <h1 className="heading-hero mt-8 max-w-[1100px]">
          More qualified project enquiries <em>for interior design studios.</em>
        </h1>

        <div className="mt-12 flex flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[520px] text-lg leading-relaxed text-ink-muted">
            We run your Meta and Google ads, build the enquiry funnel and set up the CRM, so
            homeowners with a real budget and timeline end up booked in for a consultation.
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <ButtonLink href={BOOKING_URL}>Book a strategy call</ButtonLink>
            <ButtonLink href="#pricing" variant="text">
              View pricing
            </ButtonLink>
          </div>
        </div>

        <div className="relative mt-20 aspect-[4/3] bg-paper-alt md:mt-28 md:aspect-[16/7]">
          <Image
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            fill
            priority
            sizes="(min-width: 1320px) 1160px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
