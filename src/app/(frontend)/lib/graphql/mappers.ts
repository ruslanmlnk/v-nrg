import { toFrontendUser, type FrontendUser } from '@/lib/frontendUser'

import {
  unwrapCatalogCategory,
  unwrapProduct,
  type ProductCategoryData,
  type ProductData,
  type ProductRichTextContent,
  type ProductSource,
} from '../../data/products'
import type { GetLayoutDataQuery, ProductFrontendFieldsFragment } from './generated'

type GraphQLCategory = NonNullable<NonNullable<GetLayoutDataQuery['Categories']>['docs']>[number]
type GraphQLProduct = ProductFrontendFieldsFragment
type GraphQLUser = NonNullable<GetLayoutDataQuery['meUser']>['user']

export function mapGraphQLCategories(categories: GraphQLCategory[]): ProductCategoryData[] {
  return categories
    .map((category) =>
      unwrapCatalogCategory({
        description: category.description,
        id: category.id,
        imageUrl: category.image?.url,
        slug: category.slug,
        title: category.title,
      }),
    )
    .filter((category): category is ProductCategoryData => Boolean(category))
}

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
    categories: product.category?.map((item) => ({
      slug: item?.slug,
      title: item?.title,
    })),
    categorySlugs: product.category?.map((item) => item?.slug),
    characteristics: product.characteristics?.items?.map((item) => ({
      label: item?.label,
      value: item?.value,
    })),
    cmsId: product.id,
    compareFeatures: product.compareFeatures,
    description: product.description?.content as ProductRichTextContent | null | undefined,
    details: product.details,
    equipment: product.equipment?.items?.map((item) => item?.item),
    faq: product.faq,
    galleryUrls: product.gallery?.map((item) => item?.url),
    posterUrl: product.poster?.url,
    listFeatures: product.listFeatures?.map((item) => item?.feature),
    maniples: product.maniples,
    oldprice: product.oldprice,
    powerWatts: product.powerWatts,
    price: product.price,
    rating: product.rating,
    seo: product.seo,
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
