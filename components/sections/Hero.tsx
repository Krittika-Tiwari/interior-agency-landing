import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Eyebrow } from "@/components/Eyebrow";
import { Icon } from "@/components/Icon";
import { BOOKING_URL } from "@/lib/config";

const SPECS = [
  { label: "Guaranteed inflow", value: "30–50 /mo", highlight: true },
  { label: "Min. project floor", value: "$150k+" },
  { label: "Deployment matrix", value: "Meta • Google P-Max", small: true },
  { label: "Dispatch latency", value: "<60s CRM Sync", highlight: true },
];

export function Hero() {
  return (
    <section className="bg-surface pb-16 pt-8 lg:pb-24 lg:pt-20">
      <div className="container-content grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
        <div>
          <Eyebrow>Architectural growth protocol</Eyebrow>
          <h1 className="heading-1 mt-4">
            Engineered client acquisition for interior architects &amp; design studios.
          </h1>
          <p className="mt-4 max-w-[560px] text-[16px] leading-[26px] text-ink-muted lg:text-[18px] lg:leading-[30px]">
            We build systems for interior designers that generate 30–50 qualified leads every single
            month via paid ads.
          </p>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:gap-3">
            <ButtonLink href={BOOKING_URL} variant="primary">
              Book strategy &amp; audit call
            </ButtonLink>
            <ButtonLink href="#stack" variant="secondary">
              Explore pipeline architecture
            </ButtonLink>
          </div>
        </div>

        <HudCard />
      </div>
    </section>
  );
}

/** Studio photo with a live-pipeline dashboard underneath */
function HudCard() {
  return (
    <div className="w-full overflow-hidden bg-surface-lowest shadow-card">
      <div className="relative h-64 bg-surface-high lg:h-72">
        <Image
          src="/figma/hero-studio.jpg"
          alt="Interior design studio with a moody, warmly lit living space"
          fill
          priority
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-surface-lowest via-surface-lowest/40 to-surface-lowest/0" />
        <p className="absolute left-2 top-2 flex items-center gap-1 bg-surface-lowest/90 px-2 py-1 text-[12px] font-bold uppercase leading-4 tracking-[0.1em] text-gold backdrop-blur-[6px]">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-gold motion-safe:animate-pulse" />
          Real-time feed
        </p>
      </div>

      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center justify-between bg-surface-high p-2">
          <p className="flex items-center gap-1 text-[12px] font-semibold uppercase leading-4 tracking-[0.05em] text-ink">
            <Icon src="/figma/pipeline-status.svg" width={11.667} height={11.667} />
            Live pipeline status
          </p>
          <p className="text-[12px] font-bold leading-4 tracking-[0.12em] text-gold">Q3 ACTIVE</p>
        </div>

        <p className="font-display text-[18px] font-bold uppercase leading-6 tracking-[0.025em]">
          42 private villa inquiries booked this month
        </p>

        <dl className="grid grid-cols-2 gap-1">
          {SPECS.map((spec) => (
            <div key={spec.label} className="bg-surface-low p-2">
              <dt className="label">{spec.label}</dt>
              <dd
                className={`pt-0.5 ${
                  spec.small
                    ? "text-[14px] font-medium leading-[22.4px] tracking-[0.01em] text-ink-muted"
                    : `font-display text-[18px] font-bold leading-6 ${spec.highlight ? "text-gold" : "text-ink"}`
                }`}
              >
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
