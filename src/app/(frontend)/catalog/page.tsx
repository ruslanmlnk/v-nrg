import configPromise from '@payload-config'
import { getPayload } from 'payload'

import {
  CatalogCategoriesSection,
  CatalogHeroSection,
  CatalogInfoSection,
} from '../components/catalog/CatalogSections'
import { getSiteLocale } from '../lib/getSiteLocale'
import { createSeoMetadata } from '../lib/seo'

export async function generateMetadata() {
  const payload = await getPayload({ config: configPromise })
  const catalogPage = await payload.findGlobal({
    slug: 'catalog-page',
    locale: await getSiteLocale(),
  })

  return createSeoMetadata(catalogPage.seo, 'Каталог V-NRG', '/catalog')
}

export default async function CatalogPage() {
  const payload = await getPayload({ config: configPromise })
  const catalogPage = await payload.findGlobal({
    slug: 'catalog-page',
    locale: await getSiteLocale(),
  })

  return (
    <div className="pt-12">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-5 px-6 pb-[100px]">
        <CatalogHeroSection />
        <CatalogCategoriesSection />
        <CatalogInfoSection
          description={catalogPage.seoText?.description}
          title={catalogPage.seoText?.title}
        />
      </div>
    </div>
  )
}
