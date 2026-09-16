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
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Bi } from '@/components/i18n/bi'
import { useCookieConsentStore } from '@/store/cookie-consent-store'
import { useDisclaimerStore } from '@/store/disclaimer-store'

// A separate, dismissible bar — not a blocking modal like the BCI
// disclaimer — shown only after that disclaimer is acknowledged, so a
// first-time visitor is never asked to agree to two things at once.
export function CookieConsentBanner() {
  const bciAcknowledged = useDisclaimerStore((state) => state.acknowledged)
  const decided = useCookieConsentStore((state) => state.decided)
  const analytics = useCookieConsentStore((state) => state.analytics)
  const acceptAll = useCookieConsentStore((state) => state.acceptAll)
  const rejectNonEssential = useCookieConsentStore((state) => state.rejectNonEssential)
  const setAnalytics = useCookieConsentStore((state) => state.setAnalytics)

  const [hydrated, setHydrated] = useState(false)
  const [managing, setManaging] = useState(false)
  const [draftAnalytics, setDraftAnalytics] = useState(analytics)

  useEffect(() => {
    setHydrated(true)
  }, [])

  useEffect(() => {
    function openPreferences() {
      setDraftAnalytics(analytics)
      setManaging(true)
    }
    window.addEventListener('open-cookie-preferences', openPreferences)
    return () => window.removeEventListener('open-cookie-preferences', openPreferences)
  }, [analytics])

  if (!hydrated || !bciAcknowledged) return null

  return (
    <>
      {!decided ? (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white px-6 py-5 shadow-[0_-4px_16px_rgba(14,27,51,0.08)]">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-body-sm text-muted-foreground">
              <span className="lang-en">
                We use cookies to remember your preferences and understand how visitors use this
                site. Essential cookies keep the site working; analytics cookies are optional.
                See our{' '}
                <Link href="/privacy-policy" className="underline hover:text-blue-900">
                  Privacy Policy
                </Link>{' '}
                for details.
              </span>
              <span className="lang-hi">
                हम आपकी प्राथमिकताएँ याद रखने तथा यह समझने हेतु कि आगंतुक इस साइट का उपयोग कैसे
                करते हैं, कुकीज़ का उपयोग करते हैं। अनिवार्य कुकीज़ साइट को कार्यशील रखती हैं;
                विश्लेषणात्मक कुकीज़ वैकल्पिक हैं। अधिक जानकारी हेतु हमारी{' '}
                <Link href="/privacy-policy" className="underline hover:text-blue-900">
                  गोपनीयता नीति
                </Link>{' '}
                देखें।
              </span>
            </p>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setDraftAnalytics(false)
                  setManaging(true)
                }}
              >
                <Bi en="Manage Preferences" hi="प्राथमिकताएँ प्रबंधित करें" />
              </Button>
              <Button variant="outline" size="sm" onClick={rejectNonEssential}>
                <Bi en="Reject Non-Essential" hi="गैर-अनिवार्य अस्वीकार करें" />
              </Button>
              <Button size="sm" onClick={acceptAll}>
                <Bi en="Accept All" hi="सभी स्वीकार करें" />
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      <Dialog open={managing} onOpenChange={setManaging}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              <Bi en="Cookie Preferences" hi="कुकी प्राथमिकताएँ" />
            </DialogTitle>
            <DialogDescription className="text-left text-body-md text-muted-foreground">
              <span className="lang-en">
                Choose which cookies PraSanghi&rsquo;s website can use. You can change this at
                any time from the &ldquo;Cookie Preferences&rdquo; link in the footer.
              </span>
              <span className="lang-hi">
                चुनें कि प्रासंघी की वेबसाइट कौन-सी कुकीज़ उपयोग कर सकती है। आप इसे फुटर में दिए
                गए &ldquo;कुकी प्राथमिकताएँ&rdquo; लिंक से कभी भी बदल सकते हैं।
              </span>
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-2">
            <div className="flex items-start justify-between gap-4 rounded-lg border border-border p-4">
              <div>
                <p className="text-body-md font-semibold text-blue-900">
                  <Bi en="Essential" hi="अनिवार्य" />
                </p>
                <p className="mt-1 text-body-sm text-muted-foreground">
                  <Bi
                    en="Required for the site to function (e.g. remembering the BCI disclaimer and your cookie choice). Always on."
                    hi="साइट के कार्य हेतु आवश्यक (जैसे बीसीआई अस्वीकरण एवं आपकी कुकी पसंद को याद रखना)। सदैव सक्रिय।"
                  />
                </p>
              </div>
              <Switch checked disabled aria-label="Essential cookies (always on)" />
            </div>

            <div className="flex items-start justify-between gap-4 rounded-lg border border-border p-4">
              <div>
                <p className="text-body-md font-semibold text-blue-900">
                  <Bi en="Analytics" hi="विश्लेषण (एनालिटिक्स)" />
                </p>
                <p className="mt-1 text-body-sm text-muted-foreground">
                  <Bi
                    en="Helps us understand which pages are useful, via privacy-friendly Vercel Web Analytics. No personal data is sold or shared with advertisers."
                    hi="गोपनीयता-अनुकूल Vercel Web Analytics के माध्यम से यह समझने में सहायक कि कौन-से पृष्ठ उपयोगी हैं। कोई व्यक्तिगत डेटा न तो बेचा जाता है और न ही विज्ञापनदाताओं के साथ साझा किया जाता है।"
                  />
                </p>
              </div>
              <Label htmlFor="analytics-toggle" className="sr-only">
                Analytics cookies
              </Label>
              <Switch
                id="analytics-toggle"
                checked={draftAnalytics}
                onCheckedChange={setDraftAnalytics}
              />
            </div>
          </div>

          <DialogFooter className="flex-row justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => {
                setDraftAnalytics(false)
                setAnalytics(false)
                setManaging(false)
              }}
            >
              <Bi en="Reject Non-Essential" hi="गैर-अनिवार्य अस्वीकार करें" />
            </Button>
            <Button
              onClick={() => {
                setAnalytics(draftAnalytics)
                setManaging(false)
              }}
            >
              <Bi en="Save Preferences" hi="प्राथमिकताएँ सहेजें" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
