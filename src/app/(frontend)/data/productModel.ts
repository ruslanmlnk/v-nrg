export type ProductId = string
export type ProductImage = string | null
export type ProductCategory = string

export type ProductCategoryData = {
  description: string
  href: string
  id: string
  image: ProductImage
  slug: string
  title: string
}

export type ProductCategorySource = {
  slug?: string | null
  title?: string | null
}

export type CatalogCategorySource = ProductCategorySource & {
  description?: string | null
  id?: number | string | null
  imageUrl?: string | null
}

export type ProductFeature = {
  label: string
  value: string
}

export type ProductSpecification = {
  label: string
  value: string
}

export type ProductVideoItem = {
  alt: string
  mimeType?: string
  previewImage: ProductImage
  src: string
}

export type ProductRichTextNode = {
  children?: ProductRichTextNode[]
  fields?: {
    blockType?: string
    doc?: {
      relationTo?: string
      value?: number | string | Record<string, unknown> | null
    } | null
    linkType?: string
    newTab?: boolean | null
    url?: string | null
  }
  format?: number | string
  listType?: string
  tag?: string
  text?: string
  type?: string
}

export type ProductRichTextContent = {
  root?: {
    children?: ProductRichTextNode[]
  }
}

export type ProductTabContent =
  | {
      paragraphs: string[]
      type: 'paragraphs'
    }
  | {
      content: ProductRichTextContent
      type: 'richText'
    }
  | {
      items: string[]
      type: 'checklist'
    }
  | {
      items: ProductSpecification[]
      type: 'specifications'
    }
  | {
      description?: string
      items: ProductVideoItem[]
      type: 'videos'
    }

export type ProductTabData = {
  content: ProductTabContent
  id: string
  label: string
}

export type ProductFaqItem = {
  answer?: string
  question: string
}

export type ProductReviewItem = {
  author: string
  quote: string
}

export type ProductBeforeAfterItem = {
  afterImage: string
  beforeImage: string
}

export type ProductData = {
  cartImage: ProductImage
  certificates: string[]
  catalogImage: ProductImage
  category: ProductCategory
  categoryLabel: string
  cmsId: number
  compareFeatures: ProductFeature[]
  compareImage: ProductImage
  beforeAfter: ProductBeforeAfterItem[]
  details: string
  faq: ProductFaqItem[]
  galleryImages: ProductImage[]
  href: string
  id: ProductId
  listFeatures: string[]
  moreProductIds: number[]
  maniples?: number
  oldPrice?: number
  powerWatts?: number
  price: number
  rating: number
  recommendedTogetherIds: number[]
  reviews: ProductReviewItem[]
  regularPrice?: number
  shortDescription: string
  slug: string
  seo?: {
    metaDescription?: string | null
    metaTitle?: string | null
  } | null
  tabs: ProductTabData[]
  title: string
}

export type ProductVideoSource = {
  alt?: string | null
  mimeType?: string | null
  previewImage?: string | null
  src?: string | null
}

export type ProductSource = {
  advantages?: Array<string | null | undefined> | null
  beforeAfter?: Array<{ afterUrl?: string | null; beforeUrl?: string | null } | null> | null
  certificates?: Array<string | null | undefined> | null
  categories?: Array<ProductCategorySource | null | undefined> | null
  categorySlugs?: Array<string | null | undefined> | null
  characteristics?:
    | Array<{ label?: string | null; value?: string | null } | null>
    | null
    | undefined
  cmsId: number
  compareFeatures?:
    | Array<{ label?: string | null; value?: string | null } | null>
    | null
    | undefined
  description?: ProductRichTextContent | null
  details?: string | null
  equipment?: Array<string | null | undefined> | null
  faq?: Array<{ answer?: string | null; question?: string | null } | null> | null | undefined
  galleryUrls?: Array<string | null | undefined> | null
  listFeatures?: Array<string | null | undefined> | null
  maniples?: number | null
  moreProductIds?: Array<number | null | undefined> | null
  oldprice?: number | null
  powerWatts?: number | null
  posterUrl?: string | null
  price?: number | null
  rating?: number | null
  recommendedTogetherIds?: Array<number | null | undefined> | null
  reviews?: Array<{ author?: string | null; quote?: string | null } | null> | null
  shortDescription?: string | null
  slug?: string | null
  seo?: {
    metaDescription?: string | null
    metaTitle?: string | null
  } | null
  title?: string | null
  videoDescription?: string | null
  videos?: Array<ProductVideoSource | null> | null
}

export function unwrapProduct(product: ProductSource): ProductData {
  const slug = unwrapSlug(product)
  const category = unwrapProductCategory(product.categories, product.categorySlugs)
  const galleryImages = unwrapTextList(product.galleryUrls)
  const primaryImage = galleryImages[0] ?? null

  return {
    beforeAfter: unwrapBeforeAfter(product.beforeAfter),
    cartImage: galleryImages[2] ?? primaryImage,
    certificates: unwrapTextList(product.certificates),
    catalogImage: unwrapText(product.posterUrl) ?? primaryImage,
    category: category.slug,
    categoryLabel: category.title,
    cmsId: product.cmsId,
    compareFeatures: unwrapCompareFeatures(product.compareFeatures),
    compareImage: galleryImages[1] ?? primaryImage,
    details: unwrapDetails(product),
    faq: unwrapFaq(product.faq),
    galleryImages,
    href: `/catalog/${category.slug}/${slug}`,
    id: slug,
    listFeatures: unwrapTextList(product.listFeatures),
    moreProductIds: unwrapNumberList(product.moreProductIds),
    maniples: unwrapNumber(product.maniples),
    oldPrice: unwrapNumber(product.oldprice),
    powerWatts: unwrapNumber(product.powerWatts),
    price: product.price ?? 0,
    rating: product.rating ?? 4.8,
    recommendedTogetherIds: unwrapNumberList(product.recommendedTogetherIds),
    reviews: unwrapReviews(product.reviews),
    shortDescription: unwrapText(product.shortDescription) ?? '',
    slug,
    seo: product.seo,
    tabs: unwrapTabs(product),
    title: unwrapText(product.title) ?? 'Товар без назви',
  }
}

export function unwrapCatalogCategory(category: CatalogCategorySource): ProductCategoryData | null {
  const slug = unwrapText(category.slug)

  if (!slug) {
    return null
  }

  const title = unwrapText(category.title) ?? slug

  return {
    description: unwrapText(category.description) ?? '',
    href: `/${slug}`,
    id: String(category.id ?? slug),
    image: unwrapText(category.imageUrl) ?? null,
    slug,
    title,
  }
}

export function productsToMap(products: ProductData[]) {
  return Object.fromEntries(products.map((product) => [product.id, product])) as Record<
    ProductId,
    ProductData | undefined
  >
}

export function formatPrice(value: number) {
  return `${new Intl.NumberFormat('uk-UA').format(value)} ₴`
}

function unwrapTabs(product: ProductSource): ProductTabData[] {
  const specifications = unwrapSpecifications(product.characteristics)
  const equipment = unwrapTextList(product.equipment)
  const advantages = unwrapTextList(product.advantages)
  const videos = unwrapVideos(product.videos)
  const videoDescription = unwrapText(product.videoDescription)

  return [
    createRichTextTab('description', 'Опис', product.description),
    createSpecificationTab('specs', 'Характеристики', specifications),
    createChecklistTab('package', 'Комплектація', equipment),
    createChecklistTab('advantages', 'Переваги', advantages),
    createVideoTab('video', 'Відео роботи', videos, videoDescription),
  ].filter(isDefined)
}

function createRichTextTab(
  id: string,
  label: string,
  content?: ProductRichTextContent | null,
): ProductTabData | undefined {
  if (!hasRichTextContent(content)) {
    return undefined
  }

  return {
    content: { content, type: 'richText' },
    id,
    label,
  }
}

function createParagraphTab(
  id: string,
  label: string,
  paragraphs: string[],
): ProductTabData | undefined {
  return paragraphs.length > 0
    ? {
        content: { paragraphs, type: 'paragraphs' },
        id,
        label,
      }
    : undefined
}

function createChecklistTab(
  id: string,
  label: string,
  items: string[],
): ProductTabData | undefined {
  return items.length > 0
    ? {
        content: { items, type: 'checklist' },
        id,
        label,
      }
    : undefined
}

function createSpecificationTab(
  id: string,
  label: string,
  items: ProductSpecification[],
): ProductTabData | undefined {
  return items.length > 0
    ? {
        content: { items, type: 'specifications' },
        id,
        label,
      }
    : undefined
}

function createVideoTab(
  id: string,
  label: string,
  items: ProductVideoItem[],
  description?: string,
): ProductTabData | undefined {
  return items.length > 0 || description
    ? {
        content: { description, items, type: 'videos' },
        id,
        label,
      }
    : undefined
}

function unwrapProductCategory(
  categories: ProductSource['categories'],
  categorySlugs: ProductSource['categorySlugs'],
): { slug: ProductCategory; title: string } {
  const category = asArray<ProductCategorySource | null | undefined>(categories)
    .map((item) => {
      const slug = unwrapText(item?.slug)

      return slug
        ? {
            slug,
            title: unwrapText(item?.title) ?? slug,
          }
        : undefined
    })
    .filter(isDefined)[0]

  if (category) {
    return category
  }

  const fallbackSlug = unwrapText(asArray<string | null | undefined>(categorySlugs)[0])
  const slug = fallbackSlug && fallbackSlug !== 'catalog' ? fallbackSlug : 'product'

  return {
    slug,
    title: slug,
  }
}

function unwrapSpecifications(value: ProductSource['characteristics']): ProductSpecification[] {
  return asArray<NonNullable<NonNullable<ProductSource['characteristics']>[number]>>(value)
    .map((item) => ({
      label: unwrapText(item?.label) ?? '',
      value: unwrapText(item?.value) ?? '',
    }))
    .filter((item) => item.label && item.value)
}

function unwrapCompareFeatures(value: ProductSource['compareFeatures']): ProductFeature[] {
  return asArray<NonNullable<NonNullable<ProductSource['compareFeatures']>[number]>>(value)
    .map((feature) => ({
      label: unwrapText(feature?.label) ?? '',
      value: unwrapText(feature?.value) ?? '',
    }))
    .filter((feature) => feature.label && feature.value)
}

function unwrapFaq(value: ProductSource['faq']): ProductFaqItem[] {
  return asArray<NonNullable<NonNullable<ProductSource['faq']>[number]>>(value)
    .map((item) => ({
      answer: unwrapText(item?.answer),
      question: unwrapText(item?.question) ?? '',
    }))
    .filter((item) => item.question)
}

function unwrapBeforeAfter(value: ProductSource['beforeAfter']): ProductBeforeAfterItem[] {
  return asArray<NonNullable<NonNullable<ProductSource['beforeAfter']>[number]>>(value).flatMap(
    (item) => {
      const beforeImage = unwrapText(item?.beforeUrl)
      const afterImage = unwrapText(item?.afterUrl)

      return beforeImage && afterImage ? [{ afterImage, beforeImage }] : []
    },
  )
}

function unwrapNumberList(value: Array<number | null | undefined> | null | undefined): number[] {
  return asArray<number | null | undefined>(value).filter(
    (item): item is number => typeof item === 'number',
  )
}

function unwrapReviews(value: ProductSource['reviews']): ProductReviewItem[] {
  return asArray<NonNullable<NonNullable<ProductSource['reviews']>[number]>>(value).flatMap(
    (item) => {
      const author = unwrapText(item?.author)
      const quote = unwrapText(item?.quote)

      return author && quote ? [{ author, quote }] : []
    },
  )
}

function unwrapVideos(value: ProductSource['videos']): ProductVideoItem[] {
  return asArray<ProductVideoSource | null>(value)
    .map((item) => {
      const src = unwrapText(item?.src)

      if (!src) {
        return undefined
      }

      return {
        alt: unwrapText(item?.alt) ?? 'Відео роботи',
        mimeType: unwrapText(item?.mimeType),
        previewImage: unwrapText(item?.previewImage) ?? src,
        src,
      }
    })
    .filter(isDefined)
}

function unwrapDetails(product: ProductSource): string {
  const maniples = unwrapNumber(product.maniples)
  const powerWatts = unwrapNumber(product.powerWatts)

  return (
    unwrapText(product.details) ??
    [maniples ? `${maniples} маніпул` : undefined, powerWatts ? `${powerWatts} Вт` : undefined]
      .filter(isDefined)
      .join(' · ')
  )
}

function unwrapSlug(product: ProductSource): string {
  return unwrapText(product.slug) ?? formatSlug(unwrapText(product.title)) ?? String(product.cmsId)
}

function unwrapTextList(value: Array<string | null | undefined> | null | undefined): string[] {
  return asArray<string | null | undefined>(value).map(unwrapText).filter(isDefined)
}

function hasRichTextContent(
  content?: ProductRichTextContent | null,
): content is ProductRichTextContent {
  return asArray<ProductRichTextNode>(content?.root?.children).some(hasRichTextNodeContent)
}

function hasRichTextNodeContent(node: ProductRichTextNode): boolean {
  if (unwrapText(node.text)) {
    return true
  }

  if (node.type && node.type !== 'paragraph') {
    return true
  }

  return asArray<ProductRichTextNode>(node.children).some(hasRichTextNodeContent)
}

function unwrapText(value: unknown): string | undefined {
  return typeof value === 'string' ? value.trim() || undefined : undefined
}

function unwrapNumber(value: unknown): number | undefined {
  return typeof value === 'number' ? value : undefined
}

function asArray<T = unknown>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : []
}

function asRecord(value: unknown): Record<string, unknown> | undefined {
  return value && typeof value === 'object' ? (value as Record<string, unknown>) : undefined
}

function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

function formatSlug(value?: string) {
  return (
    value
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') || undefined
  )
}
