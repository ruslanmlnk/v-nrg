export type ProductId = string
export type ProductImage = string | null
export type ProductCategory =
  | 'accessories'
  | 'chairs'
  | 'components'
  | 'materials'
  | 'physiotherapy'
  | 'vacuum'

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

export type ProductTabContent =
  | {
      paragraphs: string[]
      type: 'paragraphs'
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

export type ProductData = {
  cartImage: ProductImage
  catalogImage: ProductImage
  category: ProductCategory
  categoryLabel: string
  cmsId: number
  compareFeatures: ProductFeature[]
  compareImage: ProductImage
  details: string
  faq: ProductFaqItem[]
  galleryImages: ProductImage[]
  href: string
  id: ProductId
  listFeatures: string[]
  maniples?: number
  powerWatts?: number
  price: number
  rating: number
  shortDescription: string
  slug: string
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
  description?: unknown
  details?: string | null
  equipment?: Array<string | null | undefined> | null
  faq?: Array<{ answer?: string | null; question?: string | null } | null> | null | undefined
  galleryUrls?: Array<string | null | undefined> | null
  listFeatures?: Array<string | null | undefined> | null
  maniples?: number | null
  powerWatts?: number | null
  price?: number | null
  rating?: number | null
  shortDescription?: string | null
  slug?: string | null
  title?: string | null
  videoDescription?: string | null
  videos?: Array<ProductVideoSource | null> | null
}

export const productCategoryLabels: Record<ProductCategory, string> = {
  accessories: 'Аксесуари',
  chairs: 'Стільці для масажу',
  components: 'Комплектуючі',
  materials: 'Розхідники',
  physiotherapy: 'Апарати фізіотерапії',
  vacuum: 'Апарати вакуумного масажу',
}

export function unwrapProduct(product: ProductSource): ProductData {
  const slug = unwrapSlug(product)
  const category = unwrapCategory(product.categorySlugs)
  const galleryImages = unwrapTextList(product.galleryUrls)
  const primaryImage = galleryImages[0] ?? null

  return {
    cartImage: galleryImages[2] ?? primaryImage,
    catalogImage: primaryImage,
    category,
    categoryLabel: productCategoryLabels[category],
    cmsId: product.cmsId,
    compareFeatures: unwrapCompareFeatures(product.compareFeatures),
    compareImage: galleryImages[1] ?? primaryImage,
    details: unwrapDetails(product),
    faq: unwrapFaq(product.faq),
    galleryImages,
    href: `/catalog/aparaty-vakuumnoho-masazhu/${slug}`,
    id: slug,
    listFeatures: unwrapTextList(product.listFeatures),
    maniples: unwrapNumber(product.maniples),
    powerWatts: unwrapNumber(product.powerWatts),
    price: product.price ?? 0,
    rating: product.rating ?? 4.8,
    shortDescription: unwrapText(product.shortDescription) ?? '',
    slug,
    tabs: unwrapTabs(product),
    title: unwrapText(product.title) ?? 'Товар без назви',
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
  const description = unwrapRichTextLines(product.description)
  const specifications = unwrapSpecifications(product.characteristics)
  const equipment = unwrapTextList(product.equipment)
  const advantages = unwrapTextList(product.advantages)
  const videos = unwrapVideos(product.videos)
  const videoDescription = unwrapText(product.videoDescription)

  return [
    createParagraphTab('description', 'Опис', description),
    createSpecificationTab('specs', 'Характеристики', specifications),
    createChecklistTab('package', 'Комплектація', equipment),
    createChecklistTab('advantages', 'Переваги', advantages),
    createVideoTab('video', 'Відео роботи', videos, videoDescription),
  ].filter(isDefined)
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

function createChecklistTab(id: string, label: string, items: string[]): ProductTabData | undefined {
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

function unwrapCategory(value: ProductSource['categorySlugs']): ProductCategory {
  const slug = unwrapText(asArray<string | null | undefined>(value)[0])

  return slug && slug in productCategoryLabels ? (slug as ProductCategory) : 'vacuum'
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

function unwrapRichTextLines(value: unknown): string[] {
  const children = asArray(asRecord(asRecord(value)?.root)?.children)

  return children.map(collectText).map((line) => line.trim()).filter(Boolean)
}

function collectText(value: unknown): string {
  const record = asRecord(value)

  if (!record) {
    return ''
  }

  const text = unwrapText(record.text) ?? ''
  const childText = asArray(record.children).map(collectText).filter(Boolean).join(' ')

  return [text, childText].filter(Boolean).join(' ')
}

function unwrapTextList(value: Array<string | null | undefined> | null | undefined): string[] {
  return asArray<string | null | undefined>(value).map(unwrapText).filter(isDefined)
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
