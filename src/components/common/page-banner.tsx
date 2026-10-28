import Image from 'next/image'
import { Bi } from '@/components/i18n/bi'

export interface PageBannerProps {
  eyebrow: string
  eyebrowHi?: string
  title: string
  titleHi?: string
  image: string
}

export function PageBanner({ eyebrow, eyebrowHi, title, titleHi, image }: PageBannerProps) {
  return (
    <div className="relative mt-4 aspect-[21/9] w-full overflow-hidden bg-muted sm:aspect-[3/1]">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/15 to-transparent" />
      <div className="absolute bottom-0 left-0 px-6 pb-8 sm:px-12">
        <p className="text-label-eyebrow uppercase tracking-wide text-gold-300">
          <Bi en={eyebrow} hi={eyebrowHi ?? eyebrow} />
        </p>
        <h1 className="mt-2 max-w-2xl text-display-lg font-bold text-white">
          <Bi en={title} hi={titleHi ?? title} />
        </h1>
      </div>
    </div>
  )
}
