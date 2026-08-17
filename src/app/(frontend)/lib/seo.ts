import type { Metadata } from 'next'

export const SITE_URL = 'https://v-nrg.pro'

const DEFAULT_DESCRIPTION =
  'Професійні апарати вакуумного масажу V-NRG: обладнання для косметологів, навчання, гарантія та підтримка виробника.'

type SeoData = {
  metaDescription?: string | null
  metaTitle?: string | null
}

export function createSeoMetadata(
  seo: SeoData | null | undefined,
  fallbackTitle: string,
  canonicalPath?: string,
): Metadata {
  return {
    alternates: canonicalPath ? { canonical: canonicalPath } : undefined,
    description: seo?.metaDescription || DEFAULT_DESCRIPTION,
    title: seo?.metaTitle || fallbackTitle,
  }
}

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString()
}
