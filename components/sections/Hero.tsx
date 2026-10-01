import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { BOOKING_URL } from "@/lib/config";

// Placeholder images. Replace the files in /public/images/ with real project
// photos from the studio's portfolio and update the alt text to match.
const MOOD_BOARD = [
  { src: "/images/project-living-room.png", alt: "Living room with a linen sofa, oak joinery and a travertine coffee table" },
  { src: "/images/project-kitchen.png", alt: "Kitchen with fluted cabinet fronts and a stone worktop" },
  { src: "/images/project-bedroom.png", alt: "Bedroom with an upholstered headboard and warm wall lighting" },
  { src: "/images/project-bathroom.png", alt: "Bathroom with microcement walls and a brushed brass tap" },
  { src: "/images/project-dining.png", alt: "Dining room with a walnut table and a paper pendant light" },
  { src: "/images/project-office.png", alt: "Home office with built-in shelving and a green leather chair" },
];

export function Hero() {
  const [large, ...small] = MOOD_BOARD;

  return (
    <section className="section-pad">
      <div className="container-content grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">Client acquisition for interior designers</p>
          <h1 className="heading-xl mt-6">
            More qualified project enquiries <em>for interior design studios.</em>
          </h1>
          <p className="mt-6 max-w-[540px] text-lg leading-relaxed text-ink-muted">
            We run your Meta and Google ads, build the enquiry funnel and set up the CRM, so
            homeowners with a real budget and timeline end up booked in for a consultation.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={BOOKING_URL} variant="solid">
              Book a strategy call
            </ButtonLink>
            <ButtonLink href="#pricing" variant="outline">
              View pricing
            </ButtonLink>
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-3 gap-2 sm:gap-3">
          <div className="relative col-span-2 row-span-2 aspect-square overflow-hidden rounded-tile">
            <Image
              src={large.src}
              alt={large.alt}
              fill
              priority
              sizes="(min-width: 1024px) 400px, 66vw"
              className="object-cover"
            />
          </div>
          {small.map((img, i) => (
            <div
              key={img.src}
              className={`relative aspect-square overflow-hidden ${i === 0 ? "rounded-full" : "rounded-tile"}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 200px, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
