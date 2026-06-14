import { cookies } from 'next/headers'

import type { SiteLocale } from '../components/providers/SitePreferencesProvider'

export async function getSiteLocale(): Promise<SiteLocale> {
  const locale = (await cookies()).get('site-locale')?.value
  return locale === 'en' ? 'en' : 'uk'
}
