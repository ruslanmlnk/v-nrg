import configPromise from '@payload-config'
import { getPayload } from 'payload'

import {
  AboutCertificatesSection,
  AboutHeroSection,
  AboutMapSectionBlock,
  AboutPrinciplesSection,
  AboutStorySection,
} from '../components/about/AboutSections'
import { getSiteLocale } from '../lib/getSiteLocale'
import { createSeoMetadata } from '../lib/seo'

export async function generateMetadata() {
  const payload = await getPayload({ config: configPromise })
  const aboutPage = await payload.findGlobal({
    slug: 'about-page',
    locale: await getSiteLocale(),
  })

  return createSeoMetadata(aboutPage.seo, 'Про бренд V-NRG')
}

export default function AboutPage() {
  return (
    <div className="pt-12">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 lg:gap-24">
        <AboutHeroSection />
        <AboutStorySection />
      </div>

      <AboutCertificatesSection />
      <AboutPrinciplesSection />
      <AboutMapSectionBlock />
    </div>
  )
}
