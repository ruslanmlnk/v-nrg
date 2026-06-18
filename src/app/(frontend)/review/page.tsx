import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { AboutMapSectionBlock } from '../components/about/AboutMapSectionBlock'
import { ReviewShowcaseSection } from '../components/review/ReviewSections'
import { getSiteLocale } from '../lib/getSiteLocale'
import { createSeoMetadata } from '../lib/seo'

export async function generateMetadata() {
  const payload = await getPayload({ config: configPromise })
  const reviewPage = await payload.findGlobal({
    slug: 'review-page',
    locale: await getSiteLocale(),
  })

  return createSeoMetadata(reviewPage.seo, 'Відгуки | V-NRG')
}

export default function ReviewPage() {
  return (
    <div className="pt-12">
      <ReviewShowcaseSection />
      <div className="pt-12 md:pt-[100px]">
        <AboutMapSectionBlock />
      </div>
    </div>
  )
}
