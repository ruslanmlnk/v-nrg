'use client'

import Link from 'next/link'

import { translate } from '../../lib/siteTranslations'
import { useSitePreferences } from '../providers/SitePreferencesProvider'

type ProductHeroSectionProps = {
  categoryLabel?: string
  categorySlug?: string
  title: string
}

export function ProductHeroSection({
  categoryLabel,
  categorySlug,
  title,
}: ProductHeroSectionProps) {
  const { locale } = useSitePreferences()
  const hasCategory = Boolean(
    categoryLabel && categorySlug && categorySlug !== 'catalog' && categorySlug !== 'product',
  )

  return (
    <section className="flex min-h-[268px] items-center justify-center rounded-[20px] bg-[#22354A] px-6 py-14 text-center text-white">
      <div className="flex max-w-[920px] flex-col items-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-2 text-[16px] font-bold uppercase leading-[145%]">
          <Link href="/">{translate(locale, 'main')}</Link>
          <span>/</span>
          <Link href="/catalog">{translate(locale, 'catalog')}</Link>
          {hasCategory ? (
            <>
              <span>/</span>
              <Link href={`/${categorySlug}`}>{categoryLabel}</Link>
            </>
          ) : null}
          <span>/</span>
          <span className="text-[#4FACF5]">{title}</span>
        </div>
        <h1 className="text-[36px] font-medium leading-[145%] md:text-[48px]">{title}</h1>
      </div>
    </section>
  )
}
