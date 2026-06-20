'use client'

import Link from 'next/link'

import type { SiteLocale } from '../providers/SitePreferencesProvider'
import { translate } from '../../lib/siteTranslations'

export function CatalogHero({
  hasCategory,
  locale,
  title,
}: {
  hasCategory: boolean
  locale: SiteLocale
  title: string
}) {
  return (
    <section className="flex min-h-[268px] items-center justify-center rounded-[20px] bg-[#22354A] px-6 py-14 text-center text-white">
      <div className="flex max-w-[845px] flex-col items-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-2 text-[16px] font-bold uppercase leading-[145%]">
          <Link href="/">{translate(locale, 'main')}</Link>
          <span>/</span>
          {hasCategory ? (
            <>
              <Link href="/catalog">{translate(locale, 'catalog')}</Link>
              <span>/</span>
            </>
          ) : null}
          <span className="text-[#4FACF5]">{title}</span>
        </div>
        <h1 className="text-[36px] font-medium leading-[145%] md:text-[48px]">{title}</h1>
      </div>
    </section>
  )
}
