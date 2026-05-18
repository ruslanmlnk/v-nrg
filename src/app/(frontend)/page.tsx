import './styles.css'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

import type { Article, Media } from '@/payload-types'

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
import BeforeAfterGrid from './components/ui/BeforeAfterGrid'
import beforeAfterAfter from '@public/assets/product/before-after-after.jpg'
import beforeAfterBefore from '@public/assets/product/before-after-before.jpg'
import { ProductComparisonSection } from './components/productDetail/ProductComparisonSection'


const demoHref = `mailto:0870758@gmail.com?subject=${encodeURIComponent(`Демонстрація`)}`

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })
  const articles = await payload.find({
    collection: 'articles',
    depth: 1,
    limit: 3,
    sort: '-publishedAt',
  })
  const blogCards = articles.docs.map(mapArticleToBlogCard).filter(isDefined)

  return (
    <>
      <Hero />
      <HowItWorks />
      <ProductComparisonSection demoHref={demoHref} title={"Результати наших клієнтів"} />
      <ModelComparisonSection />
      <AboutCertificatesSection />
      <HomeVideoTeaserSection />
      <HomeReviewsSection />
      <FaqSection
        sectionClassName="px-6 pt-[96px] lg:px-[100px]"
        title={
          <>
            Відповіді на поширені
            <br />
            запитання
          </>
        }
      />
      <HomeBlogSection articles={blogCards} />
      <HomeContactSection />
    </>
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
