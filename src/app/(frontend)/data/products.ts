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
    beforeAfter: product.beforeafter?.map((item) => ({
      afterUrl: isMedia(item.after) ? item.after.url : undefined,
      beforeUrl: isMedia(item.before) ? item.before.url : undefined,
    })),
    certificates: unwrapGalleryUrls(product.certificates),
    categories: unwrapCategorySources(product.category),
    categorySlugs: unwrapCategorySlugs(product.category),
    characteristics: product.characteristics?.items?.map((item) => ({
      label: item.label,
      value: item.value,
    })),
    cmsId: product.id,
    description: product.description?.content,
    details: product.details,
    equipment: product.equipment?.items?.map((item) => item.item),
    faq: product.faq,
    galleryUrls: unwrapGalleryUrls(product.gallery),
    posterUrl: isMedia(product.poster) ? product.poster.url : undefined,
    maniples: product.maniples,
    moreProductIds: unwrapRelationshipIds(product.moreProducts),
    oldprice: product.oldprice,
    powerWatts: product.powerWatts,
    price: product.price,
    rating: product.rating,
    recommendedTogetherIds: unwrapRelationshipIds(product.recommendedTogether),
    reviews: product.reviews?.map((item) =>
      typeof item === 'object' && item ? { author: item.name, quote: item.text } : {},
    ),
    seo: product.seo,
    shortDescription: product.shortDescription,
    slug: product.slug,
    title: product.title,
    videoDescription: product.video?.description,
    videos: unwrapVideoSources(product.video?.items),
  }
}

function unwrapCategorySources(value: PayloadProduct['category']) {
  return Array.isArray(value)
    ? value.map((item) =>
        isCategory(item)
          ? {
              slug: item.slug,
              title: item.title,
            }
          : undefined,
      )
    : []
}

function unwrapCategorySlugs(value: PayloadProduct['category']) {
  return Array.isArray(value) ? value.map((item) => (isCategory(item) ? item.slug : undefined)) : []
}

function unwrapGalleryUrls(value: PayloadProduct['gallery']) {
  return Array.isArray(value) ? value.map((item) => (isMedia(item) ? item.url : undefined)) : []
}

function unwrapRelationshipIds(
  value: Array<number | { id: number }> | null | undefined,
): Array<number | undefined> {
  return Array.isArray(value)
    ? value.map((item) => (typeof item === 'number' ? item : item.id))
    : []
}

function unwrapVideoSources(value: Array<number | Media> | null | undefined): ProductVideoSource[] {
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
