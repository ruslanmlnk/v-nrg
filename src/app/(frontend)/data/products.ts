import type { Category, Media, Product as PayloadProduct } from '@/payload-types'

import {
  createProductSourceSection,
  unwrapProduct,
  type ProductSource,
} from './productModel'

export * from './productModel'

export function mapPayloadProducts(products: PayloadProduct[]) {
  return products.map(mapPayloadProduct)
}

export function mapPayloadProduct(product: PayloadProduct) {
  return unwrapProduct(toPayloadProductSource(product))
}

function toPayloadProductSource(product: PayloadProduct): ProductSource {
  return {
    advantages: createProductSourceSection(
      product.advantages,
      product.advantages?.items?.map((item) => item.advantage),
    ),
    categorySlugs: unwrapCategorySlugs(product.category),
    characteristics: createProductSourceSection(
      product.characteristics,
      product.characteristics?.items?.map((item) => item.specification),
    ),
    cmsId: product.id,
    compareFeatures: product.compareFeatures,
    description: product.description?.content,
    details: product.details,
    equipment: product.equipment?.content,
    faq: product.faq,
    galleryUrls: unwrapGalleryUrls(product.gallery),
    listFeatures: product.listFeatures?.map((item) => item.feature),
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

function unwrapCategorySlugs(value: PayloadProduct['category']) {
  return Array.isArray(value) ? value.map((item) => (isCategory(item) ? item.slug : undefined)) : []
}

function unwrapGalleryUrls(value: PayloadProduct['gallery']) {
  return Array.isArray(value) ? value.map((item) => (isMedia(item) ? item.url : undefined)) : []
}

function isMedia(value: number | Media | null | undefined): value is Media {
  return Boolean(value && typeof value === 'object' && 'url' in value)
}

function isCategory(value: number | Category | null | undefined): value is Category {
  return Boolean(value && typeof value === 'object' && 'slug' in value)
}
