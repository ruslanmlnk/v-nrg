import configPromise from '@payload-config'
import { cache } from 'react'
import { getPayload } from 'payload'

import { mapPayloadProduct } from '../../data/products'

export const getProductBySlug = cache(async (slug: string) => {
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

  return product ? mapPayloadProduct(product) : null
})
