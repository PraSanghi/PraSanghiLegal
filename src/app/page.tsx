import { Bank, Scales, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { PositioningHero } from "@/components/common/positioning-hero";
import { PracticeAreaCard } from "@/components/cards/practice-area-card";
import { AttorneyCard } from "@/components/cards/attorney-card";
import { InsightCard } from "@/components/cards/insight-card";
import { CtaBand } from "@/components/common/cta-band";
import { ValuesTriad } from "@/components/common/values-triad";
import { practiceAreas } from "@/lib/navigation";

export default function HomePage() {
  return (
    <>
      <PositioningHero />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-heading-lg font-bold text-blue-900">
          Practice Areas
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <PracticeAreaCard
              key={area.href}
              title={area.title}
              description="Detailed practice-area description pending founder-confirmed content — see project_requirements.md §10."
              href={area.href}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-heading-lg font-bold text-blue-900">
          People, Justice, Progress
        </h2>
        <div className="mt-8">
          <ValuesTriad
            items={[
              {
                icon: Bank,
                label: "People",
                body: "Every matter starts with the person, not the file.",
              },
              {
                icon: Scales,
                label: "Justice",
                body: "Precise, considered advocacy across every forum.",
              },
              {
                icon: ShieldCheck,
                label: "Progress",
                body: "Compliance and counsel that move a client forward.",
              },
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-heading-lg font-bold text-blue-900">
          Our Team
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AttorneyCard
            name="Rajwardhan Gawde"
            role="Founder"
            photo="/placeholder-attorney.svg"
            href="/people/rajwardhan-gawde"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-heading-lg font-bold text-blue-900">
          Insights
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <InsightCard
            contentType="Article"
            date="2026-09-01"
            headline="Sample headline pending real content — see implementation-roadmap.md Phase 10."
            href="/insights/sample"
          />
        </div>
      </section>

      <CtaBand
        headline="Speak to Our Team"
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </>
  );
}
