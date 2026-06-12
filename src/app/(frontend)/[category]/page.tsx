import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'

import { CatalogCategoryPage } from '../components/catalog/CatalogCategoryPage'
import { LegalPageView } from '../components/legal/LegalPageView'

const reservedRootSlugs = new Set([
  'about',
  'account',
  'api',
  'blog',
  'catalog',
  'checkout',
  'compare',
  'contacts',
  'dealer',
  'info',
  'login',
  'register',
  'review',
  'training',
])

export default async function RootCatalogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params

  if (reservedRootSlugs.has(category)) {
    notFound()
  }

  const payload = await getPayload({ config: configPromise })
  const legalPage = await payload.find({
    collection: 'legal-pages',
    depth: 1,
    limit: 1,
    where: {
      slug: {
        equals: category,
      },
    },
  })

  if (legalPage.docs[0]) {
    return (
      <LegalPageView
        content={legalPage.docs[0].content}
        contentMarkdown={legalPage.docs[0].contentMarkdown}
        title={legalPage.docs[0].title}
      />
    )
  }

  const result = await payload.find({
    collection: 'category',
    depth: 0,
    limit: 1,
    where: {
      slug: {
        equals: category,
      },
    },
  })

  if (result.docs.length === 0) {
    notFound()
  }

  return <CatalogCategoryPage routeCategory={category} />
}
