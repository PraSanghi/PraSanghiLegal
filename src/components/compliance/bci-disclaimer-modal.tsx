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
          <DialogTitle>
            <Bi en="Disclaimer" hi="अस्वीकरण" />
          </DialogTitle>
        </DialogHeader>
        <div className="min-h-0 flex-1 overflow-y-auto pr-1">
          <DialogDescription className="text-left text-body-md text-muted-foreground">
            <Bi en={BCI_DISCLAIMER_TEXT} hi={BCI_DISCLAIMER_TEXT_HI} />
          </DialogDescription>
          <p className="mt-4 text-left text-body-sm text-muted-foreground">
            <span className="lang-en">
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
              , including our use of essential and optional cookies as described there.
            </span>
            <span className="lang-hi">
              &ldquo;मैं सहमत हूँ&rdquo; पर क्लिक करके, आप हमारी{' '}
              <Link
                href="/terms-of-use"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-900"
              >
                उपयोग की शर्तें
              </Link>{' '}
              तथा{' '}
              <Link
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-900"
              >
                गोपनीयता नीति
              </Link>{' '}
              भी स्वीकार करते हैं, जिसमें वहाँ वर्णित अनिवार्य एवं वैकल्पिक कुकीज़ के हमारे उपयोग की
              स्वीकृति भी सम्मिलित है।
            </span>
          </p>
        </div>
        <DialogFooter className="flex-row justify-end gap-3">
          <Button variant="outline" onClick={handleCancel}>
            <Bi en="Cancel" hi="रद्द करें" />
          </Button>
          <Button onClick={acknowledge}>
            <Bi en="I Agree" hi="मैं सहमत हूँ" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
