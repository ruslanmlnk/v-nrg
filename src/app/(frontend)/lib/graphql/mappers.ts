import type { FrontendUser } from '@/lib/frontendUser'

import { unwrapProduct, type ProductData, type ProductSource } from '../../data/products'
import type { GetLayoutDataQuery, ProductFrontendFieldsFragment } from './generated'

type GraphQLProduct = ProductFrontendFieldsFragment
type GraphQLUser = NonNullable<GetLayoutDataQuery['meUser']>['user']

export function mapGraphQLProducts(products: GraphQLProduct[]): ProductData[] {
  return products.map(mapGraphQLProduct)
}

export function mapGraphQLProduct(product: GraphQLProduct): ProductData {
  return unwrapProduct(toGraphQLProductSource(product))
}

export function mapGraphQLUser(user: GraphQLUser | null | undefined): FrontendUser | null {
  if (!user || typeof user.id !== 'number' || typeof user.email !== 'string') {
    return null
  }

  return {
    email: user.email,
    firstName: typeof user.firstName === 'string' ? user.firstName : '',
    id: user.id,
    lastName: typeof user.lastName === 'string' ? user.lastName : '',
    phone: typeof user.phone === 'string' ? user.phone : '',
    role: user.role ?? 'user',
  }
}

function toGraphQLProductSource(product: GraphQLProduct): ProductSource {
  return {
    advantages: {
      items: product.advantages?.items?.map((item) => item?.advantage),
    },
    categorySlugs: product.category?.map((item) => item?.slug),
    characteristics: {
      items: product.characteristics?.items?.map((item) => item?.specification),
    },
    cmsId: product.id,
    compareFeatures: product.compareFeatures,
    description: product.description?.content,
    details: product.details,
    equipment: product.equipment?.content,
    faq: product.faq,
    galleryUrls: product.gallery?.map((item) => item?.url),
    listFeatures: product.listFeatures?.map((item) => item?.feature),
    maniples: product.maniples,
    powerWatts: product.powerWatts,
    price: product.price,
    rating: product.rating,
    shortDescription: product.shortDescription,
    slug: product.slug,
    title: product.title,
    video: product.video?.content,
  }
}
