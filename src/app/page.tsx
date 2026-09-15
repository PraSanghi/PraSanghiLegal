import {
  Buildings,
  UserFocus,
  Scales,
  Megaphone,
  Handshake,
  ClipboardText,
  MapTrifold,
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

// Grouped by document type for the homepage's editorial index — the
// underlying flat list on the practice-area page (practice-areas-data.ts)
// stays the single source of truth for the service names; the one-line
// descriptions here are general, standard definitions of each document
// type (not a claim about PraSanghi's specific process or pricing).
const DOCUMENTATION_CATEGORIES = [
  {
    label: "Notices & Filings",
    icon: Megaphone,
    items: [
      {
        title: "Legal Notice Before Filing a Civil Case",
        description:
          "A formal notice to the opposing party, often a required first step before civil litigation begins.",
      },
      {
        title: "Caveat Filing",
        description:
          "A formal request asking a court to notify you before any order is passed in a matter that concerns you.",
      },
      {
        title: "Public (Paper) Notice Drafting",
        description:
          "Notices published in newspapers to formally inform the public of a legal matter.",
      },
    ],
  },
  {
    label: "Agreements & Contracts",
    icon: Handshake,
    items: [
      {
        title: "Prenuptial Agreements",
        description:
          "An agreement between partners setting out financial and property terms before marriage.",
      },
      {
        title: "MOU Drafting",
        description:
          "A written record of terms two parties intend to formalise into a binding agreement.",
      },
      {
        title: "Import & Export Contracts",
        description:
          "Agreements governing cross-border sale, shipment, and payment terms for goods.",
      },
    ],
  },
  {
    label: "Affidavits & Reports",
    icon: ClipboardText,
    items: [
      {
        title: "Affidavit Drafting (All Types)",
        description:
          "Sworn written statements prepared for court proceedings, applications, or official filings.",
      },
      {
        title: "Legal Online Search Reports",
        description:
          "Title and encumbrance checks on a property, drawn from public land records.",
      },
      {
        title: "Business Valuation & Mapping Reports",
        description:
          "Documentation supporting the value and boundaries of a business or property asset.",
      },
    ],
  },
  {
    label: "Property & Land Matters",
    icon: MapTrifold,
    items: [
      {
        title: "Sale Deed Drafting & Registration",
        description:
          "The primary legal document transferring ownership of immovable property, drafted and registered.",
      },
      {
        title: "NA Conversion of Agricultural Land",
        description:
          "The regulatory process for converting agricultural land to residential or commercial use.",
      },
      {
        title: "Land Satellite Mapping Reports",
        description: "Satellite-based reports used to verify land boundaries and current use.",
      },
      {
        title: "Tahasildar & Prant Office Matters",
        description:
          "Filings and representation before revenue authorities — the Tahasildar and Sub-Divisional (Prant) offices.",
      },
    ],
  },
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

          <div className="mt-14 flex flex-col gap-14">
            {DOCUMENTATION_CATEGORIES.map((category, ci) => (
              <div key={category.label}>
                <RevealOnScroll delayMs={ci * 75} className="flex items-center gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-900 text-white">
                    <category.icon weight="light" className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-heading-sm font-bold text-blue-900">{category.label}</h3>
                  <span className="h-px flex-1 bg-border" aria-hidden="true" />
                </RevealOnScroll>

                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, i) => (
                    <RevealOnScroll key={item.title} delayMs={ci * 75 + i * 30}>
                      <div className="group flex h-full flex-col gap-2 border border-border bg-card p-5 transition-shadow duration-150 ease-out hover:shadow-[0_4px_16px_rgba(15,30,69,0.1)]">
                        <p className="text-body-md font-semibold text-blue-900">{item.title}</p>
                        <p className="text-body-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
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
