import Image from 'next/image'

export interface PageBannerProps {
  eyebrow: string
  title: string
  image: string
}

export function PageBanner({ eyebrow, title, image }: PageBannerProps) {
  return (
    <div className="relative mt-4 aspect-[21/9] w-full overflow-hidden bg-muted sm:aspect-[3/1]">
      <Image src={image} alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/15 to-transparent" />
      <div className="absolute bottom-0 left-0 px-6 pb-8 sm:px-12">
        <p className="text-label-eyebrow uppercase tracking-wide text-teal-400">{eyebrow}</p>
        <h1 className="mt-2 max-w-2xl text-display-lg font-bold text-white">{title}</h1>
      </div>
    </div>
  )
}
