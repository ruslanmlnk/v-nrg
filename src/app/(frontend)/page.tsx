import './styles.css'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

import type { Article, Home, Media, Review } from '@/payload-types'

import { mapPayloadProduct } from './data/products'
import { AboutCertificatesSection } from './components/about/AboutCertificatesSection'
import type { BlogCardData } from './components/blog/BlogCard'
import FaqSection from './components/FaqSection'
import Hero from './components/mainPage/Hero'
import HomeBlogSection from './components/mainPage/HomeBlogSection'
import HomeContactSection from './components/mainPage/HomeContactSection'
import HomeReviewsSection from './components/mainPage/HomeReviewsSection'
import HomeVideoTeaserSection from './components/mainPage/HomeVideoTeaserSection'
import HowItWorks from './components/mainPage/HowItWorks'
import ModelComparisonSection from './components/mainPage/ModelComparisonSection'
import { ProductComparisonSection } from './components/productDetail/ProductComparisonSection'

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })
  const [home, articles] = await Promise.all([
    payload.findGlobal({
      slug: 'home',
      depth: 2,
    }),
    payload.find({
      collection: 'articles',
      depth: 1,
      limit: 3,
      sort: '-publishedAt',
    }),
  ])
  const blogCards = articles.docs.map(mapArticleToBlogCard).filter(isDefined)
  const heroImage = getMedia(home.hero.image)
  const beforeAfterCards = (home.beforeAfter ?? []).flatMap((item, index) => {
    const before = getMedia(item.before)
    const after = getMedia(item.after)

    return before?.url && after?.url
      ? [{ afterImage: after.url, beforeImage: before.url, defaultPosition: [44, 58, 71][index] ?? 50 }]
      : []
  })

  return (
    <>
      {heroImage?.url ? <Hero {...home.hero} image={heroImage.url} /> : null}
      <HowItWorks
        cards={(home.howItWork.cards ?? []).flatMap((card) => {
          const icon = getMedia(card.icon)
          return icon?.url ? [{ ...card, icon: icon.url }] : []
        })}
        subtitle={home.howItWork.subtitle}
        title={home.howItWork.title}
      />
      {beforeAfterCards.length > 0 ? <ProductComparisonSection cards={beforeAfterCards} /> : null}
      <ModelComparisonSection
        products={(home.modelComparison.products ?? []).flatMap((product) =>
          typeof product === 'object' && product ? [mapPayloadProduct(product)] : [],
        )}
        subtitle={home.modelComparison.subtitle}
        title={home.modelComparison.title}
      />
      <AboutCertificatesSection
        certificates={(home.certificatesSection.certificates ?? []).flatMap((certificate) => {
          const media = getMedia(certificate)
          return media?.url ? [{ alt: media.alt, url: media.url }] : []
        })}
        subtitle={home.certificatesSection.subtitle}
        title={home.certificatesSection.title}
      />
      {renderTraining(home.trainingSection)}
      <HomeReviewsSection
        reviews={(home.reviewsSection.reviews ?? []).flatMap(mapReview)}
        subtitle={home.reviewsSection.subtitle}
        title={home.reviewsSection.title}
      />
      <FaqSection
        columns={splitIntoColumns(home.faqSection.items ?? [])}
        eyebrow={home.faqSection.subtitle}
        sectionClassName="px-6 pt-12 md:pt-[96px] lg:px-[100px]"
        title={home.faqSection.title}
      />
      <HomeBlogSection articles={blogCards} />
      <HomeContactSection />
    </>
  )
}

function renderTraining(training: Home['trainingSection']) {
  const poster = getMedia(training.video.poster)
  const video = getMedia(training.video.file)

  if (!poster?.url || !video?.url) {
    return null
  }

  return (
    <HomeVideoTeaserSection
      cards={(training.cards ?? []).flatMap((card) => {
        const icon = getMedia(card.icon)
        return icon?.url ? [{ ...card, icon: icon.url }] : []
      })}
      poster={poster.url}
      subtitle={training.subtitle}
      title={training.title}
      video={video.url}
    />
  )
}

function mapReview(review: number | Review) {
  if (typeof review !== 'object' || !review) {
    return []
  }

  const avatar = getMedia(review.avatar)

  return [
    {
      author: review.name ?? '',
      image: avatar?.url ?? undefined,
      quote: review.text ?? '',
    },
  ]
}

function splitIntoColumns(items: Array<{ answer: string; question: string }>) {
  const midpoint = Math.ceil(items.length / 2)

  return [items.slice(0, midpoint), items.slice(midpoint)].filter((column) => column.length > 0)
}

function mapArticleToBlogCard(article: Article): BlogCardData | null {
  const cardPoster = getMedia(article.cardPoster)
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

function getMedia(value: number | Media | null | undefined): Media | null {
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
