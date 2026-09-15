import Link from "next/link";
import { Buildings, UserFocus, Scales, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PositioningHero } from "@/components/common/positioning-hero";
import { FounderSpotlight } from "@/components/common/founder-spotlight";
import { FaqAccordion } from "@/components/common/faq-accordion";
import { InsightCard } from "@/components/cards/insight-card";
import { CtaBand } from "@/components/common/cta-band";
import { TrustedByStrip } from "@/components/common/trusted-by-strip";
import { DocumentationTree } from "@/components/common/documentation-tree";
import { PracticeAreaCarousel } from "@/components/common/practice-area-carousel";
import { ValuesTriad } from "@/components/common/values-triad";
import { RevealOnScroll } from "@/components/common/reveal-on-scroll";
import { TextLink } from "@/components/common/text-link";
import { Button } from "@/components/ui/button";
import { practiceAreaDetails, practiceAreaSlugs } from "@/lib/practice-areas-data";
import { practiceAreaCarouselImages } from "@/lib/practice-area-carousel-images";
import { peopleBySlug } from "@/lib/people-data";
import { insights } from "@/lib/insights-data";
import { homeFaqs } from "@/lib/faq-data";

export default function HomePage() {
  const founder = peopleBySlug["rajwardhan-gawde"];
  const featuredInsights = insights.slice(0, 3);

  return (
    <>
      <PositioningHero />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <RevealOnScroll>
          <TrustedByStrip />
        </RevealOnScroll>
      </section>

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
        <RevealOnScroll className="mt-8">
          <PracticeAreaCarousel
            items={practiceAreaSlugs.map((slug) => ({
              slug,
              title: practiceAreaDetails[slug].title,
              summary: practiceAreaDetails[slug].summary,
              image: practiceAreaCarouselImages[slug],
            }))}
          />
        </RevealOnScroll>
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
            <span className="mx-auto mt-2 block h-0.5 w-12 bg-teal-500" aria-hidden="true" />
            <p className="mt-4 text-body-lg text-muted-foreground">
              The exact documents individuals and businesses need — named
              specifically, drafted with the same care as a courtroom filing.
            </p>
          </RevealOnScroll>

          <div className="mt-14 overflow-x-auto">
            <DocumentationTree />
          </div>

          <div className="mt-14 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/practice-areas/legal-drafting-documentation">
                Learn More About Legal Drafting &amp; Documentation
                <ArrowRight weight="light" className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <RevealOnScroll>
          <h2 className="text-heading-lg font-bold text-blue-900">Common Questions</h2>
          <span className="mt-3 block h-0.5 w-12 bg-teal-500" aria-hidden="true" />
          <FaqAccordion items={homeFaqs} />
        </RevealOnScroll>
      </section>

      <CtaBand
        headline="Speak to Our Team"
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </>
  );
}
