const WORDS = [
  "Residential studios",
  "Turnkey firms",
  "Commercial interiors",
  "Kitchen & bath",
  "Design-and-build",
  "Hospitality",
];

/** Slow scrolling strip of who we work with. Static when reduced motion is on. */
export function Marquee() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-10 pr-10">
      {WORDS.map((w) => (
        <li key={w} className="flex items-center gap-10 whitespace-nowrap">
          <span className="font-display text-[34px] font-medium italic md:text-[48px]">{w}</span>
          <span aria-hidden="true" className="text-2xl text-accent">✦</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden py-10 md:py-14">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
