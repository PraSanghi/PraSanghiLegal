import { Landmark, Scale, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/common/text-link";
import { PracticeAreaCard } from "@/components/cards/practice-area-card";
import { AttorneyCard } from "@/components/cards/attorney-card";
import { InsightCard } from "@/components/cards/insight-card";
import { CtaBand } from "@/components/common/cta-band";
import { ValuesTriad } from "@/components/common/values-triad";
import { practiceAreas } from "@/lib/navigation";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-24">
        <p className="text-label-eyebrow uppercase tracking-wide text-gold-600">
          Advocates · LLP · Pan India
        </p>
        <h1 className="max-w-3xl text-balance font-serif text-display-lg font-medium text-navy-900">
          Litigation experience. Regulatory precision. One legal partner.
        </h1>
        <p className="max-w-2xl text-pretty text-body-lg text-muted-foreground">
          PraSanghi combines Supreme Court and High Court litigation with
          substantive regulatory, compliance, and advisory practice — for
          clients who need both.
        </p>
        <div className="flex gap-4">
          <Button size="lg">Get in Touch</Button>
          <TextLink href="/practice-areas">Explore Practice Areas</TextLink>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-serif text-heading-lg font-medium text-navy-900">
          Practice Areas
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <PracticeAreaCard
              key={area.href}
              title={area.title}
              description="Detailed practice-area description pending founder-confirmed content — see project_requirements.md §10."
              href={area.href}
              icon={Scale}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-serif text-heading-lg font-medium text-navy-900">
          People, Justice, Progress
        </h2>
        <div className="mt-8">
          <ValuesTriad
            items={[
              {
                icon: Landmark,
                label: "People",
                body: "Every matter starts with the person, not the file.",
              },
              {
                icon: Scale,
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
        <h2 className="font-serif text-heading-lg font-medium text-navy-900">
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
        <h2 className="font-serif text-heading-lg font-medium text-navy-900">
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
