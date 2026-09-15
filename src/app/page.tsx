import { Bank, Scales, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { PositioningHero } from "@/components/common/positioning-hero";
import { PracticeAreaCard } from "@/components/cards/practice-area-card";
import { AttorneyCard } from "@/components/cards/attorney-card";
import { InsightCard } from "@/components/cards/insight-card";
import { CtaBand } from "@/components/common/cta-band";
import { ValuesTriad } from "@/components/common/values-triad";
import { RevealOnScroll } from "@/components/common/reveal-on-scroll";
import { TextLink } from "@/components/common/text-link";
import { practiceAreaDetails, practiceAreaSlugs } from "@/lib/practice-areas-data";
import { people } from "@/lib/people-data";
import { insights } from "@/lib/insights-data";

export default function HomePage() {
  const featuredPeople = people.slice(0, 4);
  const featuredInsights = insights.slice(0, 3);

  return (
    <>
      <PositioningHero />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <RevealOnScroll className="flex items-end justify-between gap-4">
          <h2 className="text-heading-lg font-bold text-blue-900">Practice Areas</h2>
          <TextLink href="/practice-areas" className="hidden sm:inline-flex">
            View All
          </TextLink>
        </RevealOnScroll>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreaSlugs.map((slug, i) => {
            const area = practiceAreaDetails[slug];
            return (
              <RevealOnScroll key={slug} delayMs={i * 75}>
                <PracticeAreaCard
                  title={area.title}
                  description={area.summary}
                  href={`/practice-areas/${slug}`}
                  image={area.image}
                />
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <RevealOnScroll>
          <h2 className="text-heading-lg font-bold text-blue-900">
            People, Justice, Progress
          </h2>
        </RevealOnScroll>
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
        <RevealOnScroll className="flex items-end justify-between gap-4">
          <h2 className="text-heading-lg font-bold text-blue-900">Our Team</h2>
          <TextLink href="/people" className="hidden sm:inline-flex">
            Meet Everyone
          </TextLink>
        </RevealOnScroll>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPeople.map((person, i) => (
            <RevealOnScroll key={person.slug} delayMs={i * 75}>
              <AttorneyCard
                name={person.name}
                role={person.role}
                photo={person.photo}
                href={`/people/${person.slug}`}
                practiceTags={person.practiceTags}
              />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <RevealOnScroll className="flex items-end justify-between gap-4">
          <h2 className="text-heading-lg font-bold text-blue-900">Insights</h2>
          <TextLink href="/insights" className="hidden sm:inline-flex">
            View All
          </TextLink>
        </RevealOnScroll>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredInsights.map((item, i) => (
            <RevealOnScroll key={item.slug} delayMs={i * 75}>
              <InsightCard
                contentType={item.contentType}
                date={item.date}
                headline={item.headline}
                excerpt={item.excerpt}
                practiceAreaTag={item.practiceAreaTag}
                image={item.image}
                href={`/insights/${item.slug}`}
              />
            </RevealOnScroll>
          ))}
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
