import { cache } from 'react'

import { createGraphQLClient, createRequestGraphQLClient } from './client'
import { getSdk } from './generated'
import { mapGraphQLProduct, mapGraphQLProducts, mapGraphQLUser } from './mappers'

export async function getLayoutData() {
  const sdk = getSdk(await createRequestGraphQLClient())
  const data = await sdk.GetLayoutData()

  return {
    initialProducts: mapGraphQLProducts(data.Products?.docs ?? []),
    initialUser: mapGraphQLUser(data.meUser?.user ?? null),
  }
}

export const getProductBySlug = cache(async (slug: string) => {
  const sdk = getSdk(createGraphQLClient())
  const data = await sdk.GetProductBySlug({ slug })
  const product = data.Products?.docs[0]

  return product ? mapGraphQLProduct(product) : null
})
