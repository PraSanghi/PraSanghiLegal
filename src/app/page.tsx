import {
  Buildings,
  UserFocus,
  Scales,
  Megaphone,
  Flag,
  Newspaper,
  Users,
  Handshake,
  Globe,
  Signature,
  MagnifyingGlass,
  ChartLine,
  House,
  Plant,
  Compass,
  Bank,
} from "@phosphor-icons/react/dist/ssr";
import { PositioningHero } from "@/components/common/positioning-hero";
import { PracticeAreaTeaser } from "@/components/common/practice-area-teaser";
import { FounderSpotlight } from "@/components/common/founder-spotlight";
import { FaqAccordion } from "@/components/common/faq-accordion";
import { InsightCard } from "@/components/cards/insight-card";
import { CtaBand } from "@/components/common/cta-band";
import { ValuesTriad } from "@/components/common/values-triad";
import { RevealOnScroll } from "@/components/common/reveal-on-scroll";
import { TextLink } from "@/components/common/text-link";
import { practiceAreaDetails } from "@/lib/practice-areas-data";
import { peopleBySlug } from "@/lib/people-data";
import { insights } from "@/lib/insights-data";
import { homeFaqs } from "@/lib/faq-data";

const FEATURED_PRACTICE_SLUGS = [
  "supreme-court-high-court-practice",
  "regulatory-advisory",
  "contract-drafting-commercial-advisory",
] as const;

// Structurally matches whitecollarlegalcompany.in's "Legal Drafting &
// Documentation" section (per explicit direction): a flat grid of
// icon-badge cards, one per service, sourced from the same underlying
// list as practice-areas-data.ts. Each item gets its own distinct icon
// rather than repeating one icon across every card.
const DOCUMENTATION_ITEMS = [
  { title: "Legal Notice Before Filing a Civil Case", icon: Megaphone },
  { title: "Prenuptial Agreements", icon: Users },
  { title: "Caveat Filing", icon: Flag },
  { title: "MOU Drafting", icon: Handshake },
  { title: "Affidavit Drafting (All Types)", icon: Signature },
  { title: "Legal Online Search Reports", icon: MagnifyingGlass },
  { title: "Business Valuation & Mapping Reports", icon: ChartLine },
  { title: "Public (Paper) Notice Drafting", icon: Newspaper },
  { title: "Sale Deed Drafting & Registration", icon: House },
  { title: "Import & Export Contracts", icon: Globe },
  { title: "NA Conversion of Agricultural Land", icon: Plant },
  { title: "Land Satellite Mapping Reports", icon: Compass },
  { title: "Tahasildar & Prant Office Matters", icon: Bank },
] as const;

export default function HomePage() {
  const founder = peopleBySlug["rajwardhan-gawde"];
  const featuredInsights = insights.slice(0, 3);

  return (
    <>
      <PositioningHero />

      {/* Homepage-exclusive differentiators — not repeated on any other
          page, which keeps the People/Justice/Progress triad on
          /about/vision-values from reading as a duplicate. */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <RevealOnScroll>
          <h2 className="text-heading-lg font-bold text-blue-900">Why PraSanghi</h2>
          <span className="mt-3 block h-0.5 w-12 bg-teal-500" aria-hidden="true" />
        </RevealOnScroll>
        <div className="mt-8">
          <ValuesTriad
            items={[
              {
                icon: Buildings,
                label: "One Firm, Every Forum",
                body: "Litigation and regulatory work sit under one roof — not split across two firms that don't talk to each other.",
              },
              {
                icon: UserFocus,
                label: "A Named Advocate, Always",
                body: "The advocate who takes your brief argues your matter — never handed off to unfamiliar staff along the way.",
              },
              {
                icon: Scales,
                label: "Litigation-Grade Rigor, Applied to Compliance",
                body: "Certifications and registrations are prepared with the same discipline PraSanghi brings to a courtroom matter.",
              },
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <RevealOnScroll className="flex items-end justify-between gap-4">
          <h2 className="text-heading-lg font-bold text-blue-900">Practice Areas</h2>
          <TextLink href="/practice-areas" className="hidden sm:inline-flex">
            View All Practice Areas
          </TextLink>
        </RevealOnScroll>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {FEATURED_PRACTICE_SLUGS.map((slug, i) => {
            const area = practiceAreaDetails[slug];
            return (
              <RevealOnScroll key={slug} delayMs={i * 75}>
                <PracticeAreaTeaser
                  title={area.title}
                  href={`/practice-areas/${slug}`}
                  image={area.image}
                />
              </RevealOnScroll>
            );
          })}
        </div>
        <TextLink href="/practice-areas" className="mt-8 inline-flex sm:hidden">
          View All Practice Areas
        </TextLink>
      </section>

      {founder ? (
        <section className="mx-auto max-w-7xl px-6 py-16">
          <RevealOnScroll>
            <FounderSpotlight founder={founder} />
          </RevealOnScroll>
        </section>
      ) : null}

      <section className="mx-auto max-w-3xl px-6 py-16">
        <RevealOnScroll>
          <h2 className="text-heading-lg font-bold text-blue-900">Common Questions</h2>
          <span className="mt-3 block h-0.5 w-12 bg-teal-500" aria-hidden="true" />
          <FaqAccordion items={homeFaqs} />
        </RevealOnScroll>
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

      <section className="border-t border-border bg-off-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll className="mx-auto max-w-2xl text-center">
            <p className="text-label-eyebrow uppercase tracking-wide text-teal-600">
              Expert Documentation
            </p>
            <h2 className="mt-2 text-heading-lg font-bold text-blue-900">
              Legal Drafting &amp; Documentation
            </h2>
            <span className="mx-auto mt-3 block h-0.5 w-12 bg-teal-500" aria-hidden="true" />
            <p className="mt-4 text-body-lg text-muted-foreground">
              The exact documents individuals and businesses need — named
              specifically, drafted with the same care as a courtroom filing.
            </p>
          </RevealOnScroll>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DOCUMENTATION_ITEMS.map((item, i) => (
              <RevealOnScroll key={item.title} delayMs={i * 30}>
                <div className="group flex h-full flex-col gap-4 border border-border bg-card p-6 transition-shadow duration-150 ease-out hover:shadow-[0_4px_16px_rgba(15,30,69,0.1)]">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 transition-colors duration-150 ease-out group-hover:bg-teal-600 group-hover:text-white">
                    <item.icon weight="light" className="size-5" aria-hidden="true" />
                  </span>
                  <p className="text-body-md font-semibold text-blue-900">{item.title}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-12 text-center">
            <TextLink href="/practice-areas/legal-drafting-documentation">
              Learn More About Legal Drafting &amp; Documentation
            </TextLink>
          </div>
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
