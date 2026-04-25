import { toFrontendUser, type FrontendUser } from '@/lib/frontendUser'

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
  return toFrontendUser(user)
}

function toGraphQLProductSource(product: GraphQLProduct): ProductSource {
  return {
    advantages: product.advantages?.items?.map((item) => item?.item),
    categorySlugs: product.category?.map((item) => item?.slug),
    characteristics: product.characteristics?.items?.map((item) => ({
      label: item?.label,
      value: item?.value,
    })),
    cmsId: product.id,
    compareFeatures: product.compareFeatures,
    description: product.description?.content,
    details: product.details,
    equipment: product.equipment?.items?.map((item) => item?.item),
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
    videoDescription: product.video?.description,
    videos: product.video?.items?.map((item) => ({
      alt: item?.alt,
      mimeType: item?.mimeType,
      previewImage: item?.thumbnailURL ?? item?.url,
      src: item?.url,
    })),
  }
}
