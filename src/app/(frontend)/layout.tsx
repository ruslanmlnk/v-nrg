import { Google_Sans } from 'next/font/google'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'

import type { Media } from '@/payload-types'
import './styles.css'
import Header from './components/Header'
import { CommerceProvider } from './components/providers/CommerceProvider'
import {
  SitePreferencesProvider,
  type SiteCurrency,
} from './components/providers/SitePreferencesProvider'
import { GlobalEnglishTranslator } from './components/providers/GlobalEnglishTranslator'
import SiteFooter from './components/SiteFooter'
import { getLayoutData } from './lib/graphql/queries'
import { getSiteLocale } from './lib/getSiteLocale'

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config })
  const siteSettings = await payload.findGlobal({ slug: 'site-settings', depth: 1 })
  const favicon = getMedia(siteSettings.favicon)

  return {
    description: 'A blank template using Payload in a Next.js app.',
    icons: favicon?.url ? [{ rel: 'icon', url: favicon.url }] : undefined,
    title: 'Payload Blank Template',
  }
}

const googleSans = Google_Sans({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
  weight: 'variable',
  display: 'swap',
})

export default async function RootLayout(props: { children: ReactNode }) {
  const { children } = props
  const initialLocale = await getSiteLocale()
  const { initialCategories, initialProducts, initialUser } = await getLayoutData(initialLocale)
  const payload = await getPayload({ config })
  const currencyResult = await payload.find({
    collection: 'currencies',
    locale: initialLocale,
    pagination: false,
    sort: 'sortOrder',
    where: { active: { equals: true } },
  })
  const initialCurrencies: SiteCurrency[] = currencyResult.docs.map((currency) => ({
    code: currency.code,
    name: currency.name,
    rate: currency.rate,
    symbol: currency.symbol,
  }))

  return (
    <html lang={initialLocale}>
      <body className={googleSans.className}>
        <SitePreferencesProvider
          initialCurrencies={initialCurrencies}
          initialLocale={initialLocale}
        >
          <GlobalEnglishTranslator />
          <CommerceProvider
            initialCategories={initialCategories}
            initialProducts={initialProducts}
            initialUser={initialUser}
          >
            <Header />
            <main>{children}</main>
            <SiteFooter />
          </CommerceProvider>
        </SitePreferencesProvider>
      </body>
    </html>
  )
}

function getMedia(value: number | Media | null | undefined) {
  return typeof value === 'object' && value ? value : null
}
