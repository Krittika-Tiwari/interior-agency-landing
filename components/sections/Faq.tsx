"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { FAQS } from "@/lib/faqs";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Arrow keys, Home and End move focus between questions (WAI-ARIA accordion pattern)
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = FAQS.length - 1;
    const targets: Record<string, number> = {
      ArrowDown: index === last ? 0 : index + 1,
      ArrowUp: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    if (e.key in targets) {
      e.preventDefault();
      buttonRefs.current[targets[e.key]]?.focus();
    }
  };

  return (
    <section id="faqs" className="section-pad">
      <div className="container-content grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <p className="eyebrow">FAQs</p>
          <h2 className="heading-lg mt-6">Questions studios ask before they book.</h2>
        </div>

        <div className="border-t border-ink">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            const buttonId = `faq-button-${i}`;
            const panelId = `faq-panel-${i}`;
            return (
              <div key={faq.question} className="border-b border-line">
                <h3>
                  <button
                    ref={(el) => {
                      buttonRefs.current[i] = el;
                    }}
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    onKeyDown={(e) => onKeyDown(e, i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold"
                  >
                    {faq.question}
                    <span aria-hidden="true" className="relative h-4 w-4 shrink-0">
                      <span className="absolute left-0 top-1/2 h-px w-4 bg-ink" />
                      <span
                        className={`absolute left-1/2 top-0 h-4 w-px bg-ink transition-transform duration-300 motion-reduce:transition-none ${
                          isOpen ? "scale-y-0" : ""
                        }`}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  inert={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[640px] pb-6 leading-relaxed text-ink-muted">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
