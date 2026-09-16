import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { TextLink } from '@/components/common/text-link'
import { PageBanner } from '@/components/common/page-banner'
import { Bi } from '@/components/i18n/bi'
import { pageMetadata } from '@/lib/site-config'

export const metadata: Metadata = pageMetadata({
  title: 'Media Coverage',
  description: 'Press mentions and The Samvaad Podcast.',
  path: '/media',
})

export default function MediaPage() {
  return (
    <>
      <Breadcrumb segments={[{ label: 'Media Coverage', labelHi: 'मीडिया कवरेज' }]} />
      <PageBanner
        eyebrow="Media Coverage"
        eyebrowHi="मीडिया कवरेज"
        title="Media Coverage"
        titleHi="मीडिया कवरेज"
        image="https://picsum.photos/seed/prasanghi-media/1600/700"
      />
      <section className="mx-auto max-w-3xl px-6 py-12">
        <div>
          <h2 className="text-heading-md font-bold text-blue-900">
            <Bi en="Press Mentions" hi="प्रेस उल्लेख" />
          </h2>
          <p className="mt-3 text-body-md text-muted-foreground italic">
            <Bi
              en="No press mentions are confirmed yet. This section will list real coverage as it happens."
              hi="अभी तक कोई प्रेस उल्लेख पुष्ट नहीं हुआ है। यह अनुभाग वास्तविक कवरेज होते ही उसे सूचीबद्ध करेगा।"
            />
          </p>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <h2 className="text-heading-md font-bold text-blue-900">The Samvaad Podcast</h2>
          <p className="mt-3 text-body-md text-muted-foreground">
            <span className="lang-en">
              PraSanghi is affiliated with The Samvaad Podcast, a media property referenced in
              the firm&rsquo;s founding notes. Episode content is pending.
            </span>
            <span className="lang-hi">
              प्रासंघी &lsquo;द संवाद पॉडकास्ट&rsquo; से सहबद्ध है, जो फर्म के संस्थापन नोट्स में
              उल्लिखित एक मीडिया संपत्ति है। एपिसोड सामग्री शीघ्र प्रकाशित की जाएगी।
            </span>
          </p>
          <div className="mt-4">
            <TextLink href="/insights">
              <Bi en="Explore Legal Insights" hi="विधिक विश्लेषण देखें" />
            </TextLink>
          </div>
        </div>
      </section>
    </>
  )
}
