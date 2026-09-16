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
import { BCI_DISCLAIMER_TEXT, BCI_DISCLAIMER_TEXT_HI } from '@/lib/legal-text'

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
        <DialogHeader>
          <DialogTitle>
            <Bi en="Disclaimer" hi="अस्वीकरण" />
          </DialogTitle>
        </DialogHeader>
        <div className="min-h-0 flex-1 overflow-y-auto pr-1">
          <DialogDescription className="text-left text-body-md text-muted-foreground">
            <Bi en={BCI_DISCLAIMER_TEXT} hi={BCI_DISCLAIMER_TEXT_HI} />
          </DialogDescription>
        </div>
        <DialogFooter className="flex-row justify-end gap-3">
          <Button onClick={acknowledge}>
            <Bi en="Proceed to Website" hi="वेबसाइट पर आगे बढ़ें" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
