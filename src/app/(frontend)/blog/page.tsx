import configPromise from '@payload-config'
import { getPayload } from 'payload'

import type { Article, Media } from '@/payload-types'

import { BlogCard, type BlogCardData } from '../components/blog/BlogCard'
import PageHero from '../components/shared/PageHero'

export const metadata = {
  title: 'Блог | V-NRG',
}

export default async function BlogPage() {
  const payload = await getPayload({ config: configPromise })
  const articles = await payload.find({
    collection: 'articles',
    depth: 1,
    limit: 9,
    sort: '-publishedAt',
  })

  const blogCards = articles.docs.map(mapArticleToBlogCard).filter(isDefined)

  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col px-6 pb-[100px]">
        <PageHero currentLabel="Блог" title="Блог та корисні матеріали" />

        <section className="flex flex-col gap-5 pt-12">
          {blogCards.length > 0 ? (
            <>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {blogCards.map((card) => (
                  <BlogCard key={card.id} {...card} />
                ))}
              </div>

              <div className="flex flex-col gap-5 rounded-[24px] bg-white px-8 py-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                  Показано 1-{blogCards.length} з {articles.totalDocs} статтей
                </p>

                <div className="flex items-center gap-[10px]">
                  <PaginationArrow direction="left" disabled />
                  <div className="flex items-center gap-[5px]">
                    <PaginationPage active>1</PaginationPage>
                    <PaginationPage>2</PaginationPage>
                    <PaginationPage>3</PaginationPage>
                  </div>
                  <PaginationArrow direction="right" />
                </div>
              </div>
            </>
          ) : (
            <div className="rounded-[24px] bg-white px-8 py-16 text-center shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
              <h2 className="text-[32px] font-medium leading-[125%] text-[#22354A]">
                Статей немає
              </h2>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

function mapArticleToBlogCard(article: Article): BlogCardData | null {
  const cardPoster = asMedia(article.cardPoster)
  const image = cardPoster?.url

  if (!image) {
    return null
  }

  return {
    date: formatArticleDate(article.publishedAt),
    href: `/blog/${article.slug}`,
    id: String(article.id),
    image,
    title: article.title,
  }
}

function PaginationPage({
  active = false,
  children,
}: {
  active?: boolean
  children: string
}) {
  return (
    <button
      type="button"
      className={`flex h-[42px] w-[42px] items-center justify-center rounded-[10px] text-[16px] font-medium leading-[145%] transition-colors ${
        active ? 'bg-[#4FACF5] text-white' : 'bg-[#F5F8F9] text-[#22354A] hover:bg-[#D5E0E8]'
      }`}
    >
      {children}
    </button>
  )
}

function PaginationArrow({
  direction,
  disabled = false,
}: {
  direction: 'left' | 'right'
  disabled?: boolean
}) {
  return (
    <button
      type="button"
      aria-label={direction === 'left' ? 'Попередня сторінка' : 'Наступна сторінка'}
      disabled={disabled}
      className="flex h-[50.75px] w-[42px] items-center justify-center rounded-[16px] bg-[#F5F8F9] text-[#22354A] transition-colors hover:bg-[#D5E0E8] disabled:cursor-not-allowed disabled:opacity-45"
    >
      <span className={`block text-[24px] leading-none ${direction === 'left' ? 'rotate-180' : ''}`}>
        ›
      </span>
    </button>
  )
}

function asMedia(value: Article['cardPoster']): Media | null {
  return typeof value === 'object' && value ? value : null
}

function formatArticleDate(value: string) {
  return new Intl.DateTimeFormat('uk-UA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(value))
}

function isDefined<T>(value: T | null | undefined): value is T {
  return value != null
}
