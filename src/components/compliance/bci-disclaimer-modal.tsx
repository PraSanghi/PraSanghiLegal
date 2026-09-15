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
import { useDisclaimerStore } from '@/store/disclaimer-store'

const DISCLAIMER_TEXT =
  'The Bar Council of India does not permit advocates to solicit work or advertise. By proceeding, you confirm that you are seeking information about PraSanghi of your own accord, that there has been no solicitation or invitation of any kind from PraSanghi or its members, and that the contents of this website are for informational purposes only and do not constitute legal advice. No lawyer-client relationship is created by accessing this website.'

export function BciDisclaimerModal() {
  const acknowledged = useDisclaimerStore((state) => state.acknowledged)
  const acknowledge = useDisclaimerStore((state) => state.acknowledge)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  const handleCancel = () => {
    window.location.href = 'https://www.barcouncilofindia.org/'
  }

  if (!hydrated) return null

  return (
    <Dialog open={!acknowledged}>
      <DialogContent
        showCloseButton={false}
        onEscapeKeyDown={(event) => {
          event.preventDefault()
          handleCancel()
        }}
        onPointerDownOutside={(event) => event.preventDefault()}
        className="sm:max-w-lg"
      >
        <DialogHeader>
          <DialogTitle>Disclaimer</DialogTitle>
          <DialogDescription className="text-left text-body-md text-muted-foreground">
            {DISCLAIMER_TEXT}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-row justify-end gap-3">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={acknowledge}>I Agree</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
