'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
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
import { BCI_DISCLAIMER_TEXT } from '@/lib/legal-text'

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
        className="flex max-h-[85vh] flex-col sm:max-w-xl"
      >
        <DialogHeader>
          <DialogTitle>Disclaimer</DialogTitle>
        </DialogHeader>
        <div className="min-h-0 flex-1 overflow-y-auto pr-1">
          <DialogDescription className="text-left text-body-md text-muted-foreground">
            {BCI_DISCLAIMER_TEXT}
          </DialogDescription>
          <p className="mt-4 text-left text-body-sm text-muted-foreground">
            By clicking &ldquo;I Agree,&rdquo; you also acknowledge our{' '}
            <Link
              href="/terms-of-use"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-900"
            >
              Terms of Use
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-900"
            >
              Privacy Policy
            </Link>
            , including our use of essential and optional cookies as
            described there.
          </p>
        </div>
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
