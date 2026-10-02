import Script from "next/script";
import { CALENDLY_URL } from "@/lib/config";

// Calendly honours colour params on paid plans; otherwise they are ignored.
const EMBED_URL = `${CALENDLY_URL}?hide_gdpr_banner=1&background_color=f6f1ea&text_color=2a211c&primary_color=a0522d`;

export function FinalCta() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-content grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">Let&rsquo;s talk</p>
          <h2 className="heading-lg mt-8">
            Your next project shouldn&rsquo;t depend on <em>referrals alone.</em>
          </h2>
          <p className="mt-8 max-w-[460px] text-lg leading-relaxed text-ink-muted">
            Book a 30-minute call. We&rsquo;ll look at your current enquiries and service area, and
            show you what a campaign for your studio would involve.
          </p>
          <p className="mt-10 text-[15px] text-ink-muted">
            Calendar not loading?{" "}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-line underline-offset-[6px] transition-colors hover:decoration-ink"
            >
              Open the booking page
            </a>
          </p>
        </div>

        <div
          className="calendly-inline-widget -mx-6 h-[700px] min-w-[320px] md:mx-0"
          data-url={EMBED_URL}
        />
      </div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </section>
  );
}
