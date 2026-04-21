import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getProductBySlug } from '../../../components/productDetail/getProductBySlug'
import ProductDetailView from '../../../components/productDetail/ProductDetailView'

type ProductDetailsProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ProductDetailsProps): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  return {
    title: product ? `${product.title} | V-NRG` : 'Товар не знайдено | V-NRG',
  }
}

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { slug } = await params

  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return <ProductDetailView product={product} />
}
