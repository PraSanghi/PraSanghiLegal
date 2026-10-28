import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { FaqItem } from '@/lib/faq-data'
import { Bi } from '@/components/i18n/bi'

export interface FaqAccordionProps {
  items: FaqItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion type="single" collapsible className="mt-8">
      {items.map((item, i) => (
        <AccordionItem key={item.question} value={`item-${i}`}>
          <AccordionTrigger className="py-5 text-heading-sm font-semibold text-ink-900 hover:no-underline">
            <Bi en={item.question} hi={item.questionHi ?? item.question} />
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-body-md text-muted-foreground">
            <Bi en={item.answer} hi={item.answerHi ?? item.answer} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
