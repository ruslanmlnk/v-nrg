import Image from 'next/image'
import { notFound } from 'next/navigation'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

import type { Article, Media } from '@/payload-types'

import instagramIconAsset from '@public/icon/generated/review-review-page-instagram.svg'
import phoneIconAsset from '@public/icon/generated/review-review-page-phone.svg'

import {
  ArticleTableOfContents,
  type ArticleTocItem,
} from '../../components/blog/ArticleTableOfContents'
import { BlogCard, type BlogCardData } from '../../components/blog/BlogCard'
import { RichTextRenderer } from '../../components/blog/RichTextRenderer'
import IconAsset from '../../components/ui/IconAsset'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  return {
    title: article ? `${article.title} | V-NRG` : 'Стаття | V-NRG',
  }
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })
  const article = await getArticleBySlug(slug, payload)

  if (!article) {
    notFound()
  }

  const heroImage = asMedia(article.heroImage)
  const tocItems = collectHeadings(article.content)
  const related = await payload.find({
    collection: 'articles',
    depth: 1,
    limit: 3,
    sort: '-publishedAt',
    where: {
      slug: {
        not_equals: article.slug,
      },
    },
  })
  const relatedCards = related.docs.map(mapArticleToBlogCard).filter(isDefined)

  return (
    <div className="pt-5">
      <article className="mx-auto flex max-w-[1288px] flex-col px-6 pb-[100px]">
        <header className="flex flex-col items-center gap-4 py-12 text-center">
          <div className="text-[18px] font-bold leading-[145%] text-[#4FACF5]">
            {formatArticleDate(article.publishedAt)}
          </div>
          <h1 className="max-w-[940px] text-[36px] font-medium leading-[125%] text-[#22354A] md:text-[56px]">
            {article.title}
          </h1>
        </header>

        {heroImage?.url ? (
          <div className="relative h-[320px] overflow-hidden rounded-[20px] md:h-[520px]">
            <Image
              src={heroImage.url}
              alt={heroImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 1240px, 100vw"
              className="object-cover"
            />
          </div>
        ) : null}

        <div className="grid gap-8 pt-12 lg:grid-cols-[minmax(0,820px)_minmax(300px,1fr)] lg:gap-20">
          <RichTextRenderer content={article.content} />

          <aside className="flex flex-col gap-5 lg:sticky lg:top-6 lg:self-start">
            {tocItems.length > 0 ? (
              <div className="rounded-[24px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
                <ArticleTableOfContents items={tocItems} />
              </div>
            ) : null}

            <div className="rounded-[24px] bg-[#22354A] p-8 text-white">
              <h2 className="text-[24px] font-medium leading-[145%]">
                Сподобалася ця стаття?
                <br />
                Поділіться нею!
              </h2>
              <div className="mt-6 flex items-center gap-3">
                <ShareButton label="Instagram">
                  <IconAsset src={instagramIconAsset} width={20} height={20} />
                </ShareButton>
                <ShareButton label="Телефон">
                  <IconAsset src={phoneIconAsset} width={20} height={20} />
                </ShareButton>
              </div>
            </div>
          </aside>
        </div>

        {relatedCards.length > 0 ? (
          <section className="pt-[100px]">
            <div className="mb-12 flex flex-col gap-3">
              <div className="text-[16px] font-bold uppercase leading-[145%] text-[#4FACF5]">
                Більше корисного
              </div>
              <h2 className="text-[42px] font-medium leading-[125%] text-[#22354A]">
                Схожі статті
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {relatedCards.map((card) => (
                <BlogCard key={card.id} {...card} />
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </div>
  )
}

async function getArticleBySlug(
  slug: string,
  providedPayload?: Awaited<ReturnType<typeof getPayload>>,
) {
  const payload = providedPayload ?? (await getPayload({ config: configPromise }))
  const result = await payload.find({
    collection: 'articles',
    depth: 1,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs[0] ?? null
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

function asMedia(value: Article['cardPoster'] | Article['heroImage']): Media | null {
  return typeof value === 'object' && value ? value : null
}

function formatArticleDate(value: string) {
  return new Intl.DateTimeFormat('uk-UA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(value))
}

function collectHeadings(content: Article['content']): ArticleTocItem[] {
  const headings: ArticleTocItem[] = []
  let h2Index = 0

  for (const node of content.root.children) {
    if (node.type !== 'heading' || node.tag === 'h3') {
      continue
    }

    const title = collectText(node as Record<string, unknown>)

    if (title) {
      headings.push({
        id: `article-section-${h2Index}`,
        title,
      })
    }

    h2Index += 1
  }

  return headings
}

function collectText(node: { children?: unknown[]; text?: unknown }): string {
  if (typeof node.text === 'string') {
    return node.text
  }

  if (!Array.isArray(node.children)) {
    return ''
  }

  return node.children.map((child) => collectText(child as Record<string, unknown>)).join('')
}

function ShareButton({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#4FACF5] text-white"
    >
      {children}
    </button>
  )
}

function isDefined<T>(value: T | null | undefined): value is T {
  return value != null
}
