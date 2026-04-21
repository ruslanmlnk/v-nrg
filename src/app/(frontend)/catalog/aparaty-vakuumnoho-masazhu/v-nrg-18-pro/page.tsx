import { notFound } from 'next/navigation'

import { getProductBySlug } from '../../../components/productDetail/getProductBySlug'
import ProductDetailView from '../../../components/productDetail/ProductDetailView'

export const metadata = {
  title: 'V-NRG 18 PRO | V-NRG',
}

export default async function ProductDetails() {
  const product = await getProductBySlug('v-nrg-18-pro')

  if (!product) {
    notFound()
  }

  return <ProductDetailView product={product} />
}
