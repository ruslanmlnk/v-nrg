import type { Metadata } from 'next'

type SeoData = {
  metaDescription?: string | null
  metaTitle?: string | null
}

export function createSeoMetadata(
  seo: SeoData | null | undefined,
  fallbackTitle: string,
): Metadata {
  return {
    description: seo?.metaDescription || undefined,
    title: seo?.metaTitle || fallbackTitle,
  }
}
