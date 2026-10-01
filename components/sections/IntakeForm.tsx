import { Icon } from "@/components/Icon";
import { FORM_ACTION } from "@/lib/config";

const FEE_OPTIONS = [
  "$50,000 – $100,000 Base Project",
  "$100,000 – $250,000 Base Project",
  "$250,000 – $500,000 Base Project",
  "$500,000+ Base Project",
];

const inputClass =
  "h-12 w-full bg-surface-high px-2 text-[16px] text-ink placeholder:text-ink-ghost focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-gold";

export function IntakeForm() {
  return (
    <section id="apply" className="section-pad bg-surface">
      <div className="container-content grid gap-4 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="flex items-start gap-2 bg-surface-highest p-2">
            <Icon src="/figma/exclusivity.svg" width={13.333} height={17.5} />
            <div>
              <p className="text-[12px] font-bold uppercase leading-4 tracking-[0.05em]">Strict geographic exclusivity</p>
              <p className="pt-px text-[14px] leading-[19.25px] tracking-[0.01em] text-ink-muted">
                We partner with exactly ONE interior architecture studio per metropolitan zone.
              </p>
            </div>
          </div>
          <h2 className="heading-2 mt-4">Reserve your studio acquisition chamber</h2>
          <p className="body-sm mt-1 max-w-[460px] lg:text-[16px] lg:leading-[26px]">
            Submit your practice credentials below for automated market availability check and
            pipeline sizing.
          </p>
        </div>

        <form action={FORM_ACTION} method="post" className="mt-4 flex flex-col gap-4 lg:mt-0">
          <Field id="principal" label="Principal / managing director name">
            <input id="principal" name="principal" type="text" autoComplete="name" required placeholder="e.g. Alistair Vance, RIBA" className={inputClass} />
          </Field>
          <Field id="website" label="Studio website / portfolio domain">
            <input id="website" name="website" type="url" autoComplete="url" required placeholder="https://vancestudio.com" className={inputClass} />
          </Field>
          <Field id="territory" label="Primary metropolitan territory">
            <input id="territory" name="territory" type="text" autoComplete="address-level2" required placeholder="e.g. London / Mayfair, New York / Tribeca, Dubai" className={inputClass} />
          </Field>
          <Field id="fee" label="Minimum project fee threshold">
            <div className="relative">
              <select id="fee" name="fee" required defaultValue={FEE_OPTIONS[1]} className={`${inputClass} appearance-none pr-8`}>
                {FEE_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <svg aria-hidden="true" viewBox="0 0 12 12" className="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-ink-muted">
                <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </Field>
          <Field id="phone" label="Direct principal mobile (confidential brief)">
            <input id="phone" name="phone" type="tel" autoComplete="tel" required placeholder="+44 7911 123456" className={inputClass} />
          </Field>

          <button
            type="submit"
            className="mt-2 h-14 w-full bg-gold text-[12px] font-bold uppercase leading-4 tracking-[0.05em] text-gold-on shadow-btn transition-colors hover:bg-gold-deep"
          >
            Initiate studio capacity audit
          </button>
          <p className="flex items-center justify-center gap-3 text-center text-[12px] font-semibold uppercase leading-4 tracking-[0.1em] text-ink-faint">
            <Icon src="/figma/nda-lock.svg" width={8} height={10.5} />
            Strict NDA &amp; non-disclosure protocol active
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-[12px] font-semibold uppercase leading-4 tracking-[0.05em] text-ink-muted">
        {label}
      </label>
      {children}
    </div>
  );
}
