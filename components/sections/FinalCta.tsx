import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { BOOKING_URL } from "@/lib/config";

export function FinalCta() {
  return (
    <section className="on-dark panel relative bg-accent text-white">
      {/* Placeholder image. Swap for a real project photo. */}
      <Image
        src="/images/project-dining.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30 mix-blend-multiply"
      />
      <div className="container-content section-pad relative flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[780px]">
          <p className="eyebrow text-white">Let&rsquo;s talk</p>
          <h2 className="heading-hero mt-6 [&_em]:text-white">
            Your next project shouldn&rsquo;t depend on <em>referrals alone.</em>
          </h2>
          <p className="mt-6 max-w-[600px] text-lg leading-relaxed text-white/85">
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
