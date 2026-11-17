'use client'

import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Bi } from '@/components/i18n/bi'
import { useDisclaimerStore } from '@/store/disclaimer-store'
import { BCI_DISCLAIMER_POINTS } from '@/lib/legal-text'
import { BrandLogo } from '@/components/common/logo-mark'

export function BciDisclaimerModal() {
  const acknowledged = useDisclaimerStore((state) => state.acknowledged)
  const acknowledge = useDisclaimerStore((state) => state.acknowledge)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) return null

  return (
    <Dialog open={!acknowledged}>
      <DialogContent
        showCloseButton={false}
        onEscapeKeyDown={(event) => event.preventDefault()}
        onPointerDownOutside={(event) => event.preventDefault()}
        className="flex max-h-[85vh] flex-col sm:max-w-xl"
      >
        <DialogHeader className="items-center border-b border-gold-500/40 pb-4 text-center">
          <BrandLogo className="h-10 w-auto" />
          <DialogTitle className="mt-3 text-heading-sm uppercase tracking-[0.2em] text-ink-900">
            <Bi en="Disclaimer" hi="अस्वीकरण" />
          </DialogTitle>
        </DialogHeader>
        <div className="min-h-0 flex-1 overflow-y-auto pr-1">
          <DialogDescription className="text-left text-body-md text-muted-foreground">
            <Bi
              en="Please read and accept the following before proceeding:"
              hi="कृपया आगे बढ़ने से पूर्व निम्नलिखित को पढ़कर स्वीकार करें:"
            />
          </DialogDescription>
          <ol className="mt-4 flex flex-col gap-3">
            {BCI_DISCLAIMER_POINTS.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-body-sm text-ink-900 text-justify hyphens-auto">
                <span
                  className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-gold-500 text-[0.7rem] font-semibold text-gold-700"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <Bi en={point.en} hi={point.hi} />
              </li>
            ))}
          </ol>
        </div>
        <DialogFooter className="flex-row justify-end gap-3">
          <Button onClick={acknowledge}>
            <Bi en="I Agree — Proceed to Website" hi="मैं सहमत हूँ — वेबसाइट पर आगे बढ़ें" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
