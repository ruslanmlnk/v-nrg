import configPromise from '@payload-config'
import { getPayload } from 'payload'

import type { Media } from '@/payload-types'

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

  return createSeoMetadata(aboutPage.seo, 'Про бренд V-NRG', '/about')
}

export default async function AboutPage() {
  const payload = await getPayload({ config: configPromise })
  const aboutPage = await payload.findGlobal({
    slug: 'about-page',
    locale: await getSiteLocale(),
  })

  return (
    <div className="pt-12">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 lg:gap-24">
        <AboutHeroSection />
        <AboutStorySection content={aboutPage.storySection} />
      </div>

      <AboutCertificatesSection />
      <AboutPrinciplesSection
        cards={(aboutPage.principlesSection.cards ?? []).flatMap((card) => {
          const icon = getMedia(card.icon)

          return icon?.url ? [{ ...card, icon: icon.url }] : []
        })}
        subtitle={aboutPage.principlesSection.subtitle}
        title={aboutPage.principlesSection.title}
      />
      <AboutMapSectionBlock />
    </div>
  )
}

function getMedia(value: number | Media | null | undefined): Media | null {
  return typeof value === 'object' && value ? value : null
}
