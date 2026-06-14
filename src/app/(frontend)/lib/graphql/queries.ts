import { cache } from 'react'

import { createGraphQLClient, createRequestGraphQLClient } from './client'
import { getSdk, LocaleInputType } from './generated'
import {
  mapGraphQLCategories,
  mapGraphQLProduct,
  mapGraphQLProducts,
  mapGraphQLUser,
} from './mappers'

export async function getLayoutData(locale: 'uk' | 'en' = 'uk') {
  const sdk = getSdk(await createRequestGraphQLClient())
  const data = await sdk.GetLayoutData({
    locale: locale === 'en' ? LocaleInputType.En : LocaleInputType.Uk,
  })

  return {
    initialCategories: mapGraphQLCategories(data.Categories?.docs ?? []),
    initialProducts: mapGraphQLProducts(data.Products?.docs ?? []),
    initialUser: mapGraphQLUser(data.meUser?.user ?? null),
  }
}

export const getProductBySlug = cache(async (slug: string, locale: 'uk' | 'en' = 'uk') => {
  const sdk = getSdk(createGraphQLClient())
  const data = await sdk.GetProductBySlug({
    locale: locale === 'en' ? LocaleInputType.En : LocaleInputType.Uk,
    slug,
  })
  const product = data.Products?.docs[0]

  return product ? mapGraphQLProduct(product) : null
})
