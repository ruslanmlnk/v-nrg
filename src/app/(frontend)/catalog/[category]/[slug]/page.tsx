import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getProductBySlug } from '../../../components/productDetail/getProductBySlug'
import ProductDetailView from '../../../components/productDetail/ProductDetailView'
import { JsonLd } from '../../../components/seo/JsonLd'
import { getSiteLocale } from '../../../lib/getSiteLocale'
import { absoluteUrl } from '../../../lib/seo'

type ProductDetailsProps = {
  params: Promise<{
    category: string
    slug: string
  }>
}

export async function generateMetadata({ params }: ProductDetailsProps): Promise<Metadata> {
  const { category, slug } = await params
  const product = await getProductBySlug(slug, await getSiteLocale())

  return {
    alternates: { canonical: `/catalog/${category}/${slug}` },
    description: product?.seo?.metaDescription || undefined,
    title: product
      ? product.seo?.metaTitle || `${product.title} | V-NRG`
      : 'Товар не знайдено | V-NRG',
  }
}

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { category, slug } = await params
  const product = await getProductBySlug(slug, await getSiteLocale())

  if (!product) {
    notFound()
  }

  const heading = getProductHeading(product.title, product.slug)
  const url = absoluteUrl(`/catalog/${category}/${slug}`)
  const schemas: Array<Record<string, unknown>> = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Головна', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Каталог', item: absoluteUrl('/catalog') },
        {
          '@type': 'ListItem',
          position: 3,
          name: product.categoryLabel,
          item: absoluteUrl(`/${product.category}`),
        },
        { '@type': 'ListItem', position: 4, name: heading, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: heading,
      description: product.shortDescription || product.seo?.metaDescription || undefined,
      image: product.galleryImages.filter(Boolean).map((image) => absoluteUrl(image as string)),
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: 'UAH',
        url,
      },
      sku: String(product.cmsId),
      url,
    },
  ]

  if (product.faq.some((item) => item.question && item.answer)) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: product.faq.flatMap((item) =>
        item.question && item.answer
          ? [
              {
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: { '@type': 'Answer', text: item.answer },
              },
            ]
          : [],
      ),
    })
  }

  return (
    <>
      <JsonLd data={schemas} />
      <ProductDetailView heading={heading} product={product} />
    </>
  )
}

function getProductHeading(title: string, slug: string) {
  const normalizedTitle = title.toLocaleLowerCase('uk-UA')

  if (slug === 'masagnyi-stilec-tm-v-nrg-pro-blu' && !normalizedTitle.includes('синій')) {
    return `${title} (синій)`
  }

  if (slug === 'masagnyi-stilec-tm-v-nrg-pro-wite' && !normalizedTitle.includes('білий')) {
    return `${title} (білий)`
  }

  return title
}
