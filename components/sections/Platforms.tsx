import { PLATFORMS } from "@/lib/platforms";

/** Quiet logo strip of the ad platforms and tools campaigns run on */
export function Platforms() {
  return (
    <section aria-labelledby="platforms-heading" className="pt-20 md:pt-28">
      <div className="container-content flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-20">
        <h2 id="platforms-heading" className="eyebrow shrink-0 lg:max-w-[200px]">
          Platforms &amp; tools we work with
        </h2>
        <ul className="grid flex-1 grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 lg:flex lg:flex-wrap lg:items-center lg:justify-between">
          {PLATFORMS.map((p) => (
            <li key={p.name} className="flex items-center gap-2.5 text-ink-muted">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0 fill-current">
                <path d={p.path} />
              </svg>
              <span className="text-[15px] font-medium tracking-[-0.01em]">{p.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
