import type { Category, Media, Product as PayloadProduct } from '@/payload-types'

import { unwrapProduct, type ProductSource, type ProductVideoSource } from './productModel'

export * from './productModel'

export function mapPayloadProducts(products: PayloadProduct[]) {
  return products.map(mapPayloadProduct)
}

export function mapPayloadProduct(product: PayloadProduct) {
  return unwrapProduct(toPayloadProductSource(product))
}

function toPayloadProductSource(product: PayloadProduct): ProductSource {
  return {
    advantages: product.advantages?.items?.map((item) => item.item),
    categorySlugs: unwrapCategorySlugs(product.category),
    characteristics: product.characteristics?.items?.map((item) => ({
      label: item.label,
      value: item.value,
    })),
    cmsId: product.id,
    compareFeatures: product.compareFeatures,
    description: product.description?.content,
    details: product.details,
    equipment: product.equipment?.items?.map((item) => item.item),
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
    videoDescription: product.video?.description,
    videos: unwrapVideoSources(product.video?.items),
  }
}

function unwrapCategorySlugs(value: PayloadProduct['category']) {
  return Array.isArray(value)
    ? value.map((item) => (isCategory(item) ? item.slug : undefined))
    : []
}

function unwrapGalleryUrls(value: PayloadProduct['gallery']) {
  return Array.isArray(value) ? value.map((item) => (isMedia(item) ? item.url : undefined)) : []
}

function unwrapVideoSources(
  value: Array<number | Media> | null | undefined,
): ProductVideoSource[] {
  return Array.isArray(value)
    ? value.map((item) =>
        isMedia(item)
          ? {
              alt: item.alt,
              mimeType: item.mimeType,
              previewImage: item.thumbnailURL ?? item.url,
              src: item.url,
            }
          : {},
      )
    : []
}

function isMedia(value: number | Media | null | undefined): value is Media {
  return Boolean(value && typeof value === 'object' && 'url' in value)
}

function isCategory(value: number | Category | null | undefined): value is Category {
  return Boolean(value && typeof value === 'object' && 'slug' in value)
}
