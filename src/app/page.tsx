import Link from "next/link";
import { Buildings, UserFocus, Scales, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PositioningHero } from "@/components/common/positioning-hero";
import { FounderSpotlight } from "@/components/common/founder-spotlight";
import { FaqAccordion } from "@/components/common/faq-accordion";
import { InsightCard } from "@/components/cards/insight-card";
import { CtaBand } from "@/components/common/cta-band";
import { TrustedByStrip } from "@/components/common/trusted-by-strip";
import { DocumentationTree } from "@/components/common/documentation-tree";
import { ValuesTriad } from "@/components/common/values-triad";
import { RevealOnScroll } from "@/components/common/reveal-on-scroll";
import { TextLink } from "@/components/common/text-link";
import { Bi } from "@/components/i18n/bi";
import { Button } from "@/components/ui/button";
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

      {founder ? (
        <section className="mx-auto max-w-7xl px-6 py-16">
          <RevealOnScroll>
            <FounderSpotlight founder={founder} />
          </RevealOnScroll>
        </section>
      ) : null}

      {/* Homepage-exclusive differentiators — not repeated on any other
          page, which keeps the People/Justice/Progress triad on
          /about/vision-values from reading as a duplicate. */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <RevealOnScroll>
          <h2 className="text-heading-lg font-bold text-blue-900">
            <Bi en="Why Choose PraSanghi" hi="प्रासंघी को क्यों चुनें" />
          </h2>
          <span className="mt-3 block h-0.5 w-12 bg-teal-500" aria-hidden="true" />
        </RevealOnScroll>
        <div className="mt-8">
          <ValuesTriad
            items={[
              {
                icon: Buildings,
                label: "One Firm, Every Forum",
                labelHi: "एक फर्म, हर फोरम",
                body: "Litigation and regulatory work sit under one roof — not split across two firms that don't talk to each other.",
                bodyHi:
                  "वाद-विवाद एवं नियामक कार्य एक ही छत के नीचे — न कि दो ऐसी अलग फर्मों में विभाजित जो आपस में समन्वय नहीं रखतीं।",
              },
              {
                icon: UserFocus,
                label: "A Named Advocate, Always",
                labelHi: "सदैव एक नामित अधिवक्ता",
                body: "The advocate who takes your brief argues your matter — never handed off to unfamiliar staff along the way.",
                bodyHi:
                  "जो अधिवक्ता आपका ब्रीफ स्वीकार करता है, वही आपके मामले की पैरवी करता है — बीच में कभी अपरिचित स्टाफ को नहीं सौंपा जाता।",
              },
              {
                icon: Scales,
                label: "Litigation-Grade Rigor, Applied to Compliance",
                labelHi: "अनुपालन में भी वाद-विवाद जैसी कठोरता",
                body: "Certifications and registrations are prepared with the same discipline PraSanghi brings to a courtroom matter.",
                bodyHi:
                  "प्रमाणन एवं पंजीकरण उसी अनुशासन के साथ तैयार किए जाते हैं जो प्रासंघी किसी न्यायालयीन मामले में लाता है।",
              },
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <RevealOnScroll className="flex items-end justify-between gap-4">
          <h2 className="text-heading-lg font-bold text-blue-900">
            <Bi en="Legal Insights" hi="विधिक विश्लेषण" />
          </h2>
          <TextLink href="/insights" className="hidden sm:inline-flex">
            <Bi en="View All Insights" hi="सभी विश्लेषण देखें" />
          </TextLink>
        </RevealOnScroll>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredInsights.map((item, i) => (
            <RevealOnScroll key={item.slug} delayMs={i * 75}>
              <InsightCard
                contentType={item.contentType}
                date={item.date}
                headline={item.headline}
                headlineHi={item.headlineHi}
                excerpt={item.excerpt}
                excerptHi={item.excerptHi}
                practiceAreaTag={item.practiceAreaTag}
                practiceAreaTagHi={item.practiceAreaTagHi}
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
              <Bi en="Expert Documentation" hi="विशेषज्ञ प्रलेखन" />
            </p>
            <span className="mx-auto mt-2 block h-0.5 w-12 bg-teal-500" aria-hidden="true" />
            <p className="mt-4 text-body-lg text-muted-foreground">
              <Bi
                en="The exact documents individuals and businesses need — named specifically, drafted with the same care as a courtroom filing."
                hi="व्यक्तियों एवं व्यवसायों को आवश्यक ठीक वही दस्तावेज़ — विशेष रूप से नामित, तथा किसी न्यायालयीन दाखिले जितनी ही सावधानी से प्रारूपित।"
              />
            </p>
          </RevealOnScroll>

          <div className="mt-14 overflow-x-auto overflow-y-hidden">
            <DocumentationTree />
          </div>

          <div className="mt-14 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/practice-areas/legal-drafting-documentation">
                <Bi
                  en="Learn More About Legal Drafting & Documentation"
                  hi="विधिक प्रारूपण एवं प्रलेखन के बारे में अधिक जानें"
                />
                <ArrowRight weight="light" className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <RevealOnScroll>
          <h2 className="text-heading-lg font-bold text-blue-900">
            <Bi en="Frequently Asked Questions" hi="अक्सर पूछे जाने वाले प्रश्न" />
          </h2>
          <span className="mt-3 block h-0.5 w-12 bg-teal-500" aria-hidden="true" />
          <FaqAccordion items={homeFaqs} />
        </RevealOnScroll>
      </section>

      <CtaBand
        headline="Consult Our Legal Team"
        headlineHi="हमारी विधिक टीम से परामर्श करें"
        ctaLabel="Schedule a Consultation"
        ctaLabelHi="परामर्श निर्धारित करें"
        ctaHref="/contact"
      />
    </>
  );
}
