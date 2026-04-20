import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import { mapPayloadProduct } from '../../data/products'
import ProductDetailPage from './ProductDetailPage'

export default async function ProductDetailRoute({ slug }: { slug: string }) {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: 'products',
    depth: 2,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  const product = docs[0]

  if (!product) {
    notFound()
  }

  return <ProductDetailPage product={mapPayloadProduct(product)} />
}
