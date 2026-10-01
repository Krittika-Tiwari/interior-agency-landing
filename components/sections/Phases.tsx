import { Eyebrow } from "@/components/Eyebrow";
import { Icon } from "@/components/Icon";

const PHASES = [
  {
    tag: "Creative rigor",
    title: "Hyper-targeted luxury creative execution",
    body: "We convert your atelier's built portfolio into cinematic, spatial motion assets that command the attention of estate developers and private homeowners.",
    proof: "Architectural grade media curation",
    icon: { src: "/figma/phase-media.svg", width: 13.333, height: 12 },
  },
  {
    tag: "Strict filtering",
    title: "High-converting bespoke intake dossier",
    body: "An interactive qualification protocol screens every prospect for liquid architectural budget, architectural floor plans, timeline, and jurisdiction.",
    proof: "Zero tire-kickers. Zero budget mismatches.",
    icon: { src: "/figma/phase-filter.svg", width: 10.694, height: 10.667 },
  },
  {
    tag: "Instant retention",
    title: "Automated multi-touch follow-up system",
    body: "Every lead is contacted in under 60 seconds with personalized concierge responses, driving show-up rates to an industry-leading 84%.",
    proof: "<60s time-to-touch SLA guarantee",
    icon: { src: "/figma/phase-sla.svg", width: 10.667, height: 13.333 },
  },
];

export function Phases() {
  return (
    <section id="process" className="section-pad bg-surface">
      <div className="container-content">
        <Eyebrow>Systematic execution</Eyebrow>
        <h2 className="heading-2 mt-1 max-w-[760px]">How we extract 30–50 verified commissions monthly</h2>

        <ol className="mt-4 grid gap-4 lg:mt-12 lg:grid-cols-3">
          {PHASES.map((phase, i) => (
            <li key={phase.title} className="flex flex-col bg-surface-high p-4 lg:p-6">
              <div className="flex items-center justify-between pb-2">
                <span className="text-[12px] font-bold uppercase leading-4 tracking-[0.1em] text-gold">
                  Phase {String(i + 1).padStart(2, "0")}
                </span>
                <span className="bg-gold/10 px-1 py-0.5 text-[10px] font-bold uppercase leading-[15px] text-gold">
                  {phase.tag}
                </span>
              </div>
              <h3 className="heading-3 pb-1">{phase.title}</h3>
              <p className="body-sm flex-1">{phase.body}</p>
              <p className="mt-4 flex items-center gap-2 bg-surface-low p-2 text-[12px] font-semibold uppercase leading-4 tracking-[0.12em] text-ink">
                <Icon {...phase.icon} />
                {phase.proof}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
