import configPromise from '@payload-config'
import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'

export const dynamic = 'force-dynamic'

const staticRoutes: Array<{
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  path: string
  priority: number
}> = [
  { changeFrequency: 'weekly', path: '/', priority: 1 },
  { changeFrequency: 'weekly', path: '/catalog', priority: 0.9 },
  { changeFrequency: 'weekly', path: '/blog', priority: 0.8 },
  { changeFrequency: 'monthly', path: '/about', priority: 0.7 },
  { changeFrequency: 'monthly', path: '/contacts', priority: 0.7 },
  { changeFrequency: 'monthly', path: '/dealer', priority: 0.7 },
  { changeFrequency: 'monthly', path: '/info', priority: 0.6 },
  { changeFrequency: 'monthly', path: '/review', priority: 0.6 },
  { changeFrequency: 'monthly', path: '/training', priority: 0.6 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl()
  const payload = await getPayload({ config: configPromise })
  const [products, categories, articles, legalPages] = await Promise.all([
    payload.find({
      collection: 'products',
      depth: 1,
      limit: 1000,
      sort: '-updatedAt',
    }),
    payload.find({
      collection: 'category',
      depth: 0,
      limit: 1000,
      sort: '-updatedAt',
    }),
    payload.find({
      collection: 'articles',
      depth: 0,
      limit: 1000,
      sort: '-updatedAt',
    }),
    payload.find({
      collection: 'legal-pages',
      depth: 0,
      limit: 1000,
      sort: '-updatedAt',
    }),
  ])

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    url: createUrl(siteUrl, route.path),
  }))

  const categoryEntries: MetadataRoute.Sitemap = categories.docs.map((category) => ({
    changeFrequency: 'weekly',
    lastModified: category.updatedAt,
    priority: 0.8,
    url: createUrl(siteUrl, `/${category.slug}`),
  }))

  const productEntries: MetadataRoute.Sitemap = products.docs.flatMap((product) => {
    const categorySlug = getProductCategorySlug(product.category)

    if (!categorySlug) {
      return []
    }

    return [
      {
        changeFrequency: 'weekly',
        lastModified: product.updatedAt,
        priority: 0.8,
        url: createUrl(siteUrl, `/catalog/${categorySlug}/${product.slug}`),
      },
    ]
  })

  const articleEntries: MetadataRoute.Sitemap = articles.docs.map((article) => ({
    changeFrequency: 'monthly',
    lastModified: article.updatedAt,
    priority: 0.7,
    url: createUrl(siteUrl, `/blog/${article.slug}`),
  }))

  const legalPageEntries: MetadataRoute.Sitemap = legalPages.docs.map((page) => ({
    changeFrequency: 'yearly',
    lastModified: page.updatedAt,
    priority: 0.3,
    url: createUrl(siteUrl, `/${page.slug}`),
  }))

  return [
    ...staticEntries,
    ...categoryEntries,
    ...productEntries,
    ...articleEntries,
    ...legalPageEntries,
  ]
}

function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    'http://localhost:3000'
  const url = configuredUrl.startsWith('http') ? configuredUrl : `https://${configuredUrl}`

  return url.replace(/\/+$/, '')
}

function createUrl(siteUrl: string, path: string) {
  return `${siteUrl}${path === '/' ? '' : path}`
}

function getProductCategorySlug(category: unknown) {
  if (!Array.isArray(category)) {
    return null
  }

  const populatedCategory = category.find(
    (item): item is { slug: string } =>
      Boolean(item) &&
      typeof item === 'object' &&
      'slug' in item &&
      typeof item.slug === 'string' &&
      item.slug.length > 0,
  )

  return populatedCategory?.slug ?? null
}
