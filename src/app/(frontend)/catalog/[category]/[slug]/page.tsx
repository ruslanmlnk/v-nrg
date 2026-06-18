import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getProductBySlug } from '../../../components/productDetail/getProductBySlug'
import ProductDetailView from '../../../components/productDetail/ProductDetailView'
import { getSiteLocale } from '../../../lib/getSiteLocale'

type ProductDetailsProps = {
  params: Promise<{
    category: string
    slug: string
  }>
}

export async function generateMetadata({ params }: ProductDetailsProps): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug, await getSiteLocale())

  return {
    description: product?.seo?.metaDescription || undefined,
    title: product
      ? product.seo?.metaTitle || `${product.title} | V-NRG`
      : 'Товар не знайдено | V-NRG',
  }
}

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { slug } = await params
  const product = await getProductBySlug(slug, await getSiteLocale())

  if (!product) {
    notFound()
  }

  return <ProductDetailView product={product} />
}
