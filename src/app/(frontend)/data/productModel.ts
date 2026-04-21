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

export type ProductTabContent =
  | {
      paragraphs: string[]
      type: 'paragraphs'
    }
  | {
      items: string[]
      type: 'list'
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

export type ProductSourceSection = {
  content?: unknown | null
  items?: Array<string | null | undefined> | null
}

export type ProductSource = {
  advantages?: ProductSourceSection | null
  categorySlugs?: Array<string | null | undefined> | null
  characteristics?: ProductSourceSection | null
  cmsId: number
  compareFeatures?:
    | Array<{ label?: string | null; value?: string | null } | null>
    | null
    | undefined
  description?: unknown
  details?: string | null
  equipment?: unknown
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
  video?: unknown
}

type ProductTabConfig = {
  getLines: (product: ProductSource) => string[]
  id: string
  label: string
  type: ProductTabContent['type']
}

export const productCategoryLabels: Record<ProductCategory, string> = {
  accessories: 'Аксесуари',
  chairs: 'Стільці для масажу',
  components: 'Комплектуючі',
  materials: 'Розхідники',
  physiotherapy: 'Апарати фізіотерапії',
  vacuum: 'Апарати вакуумного масажу',
}

const productTabs: ProductTabConfig[] = [
  createTab('description', 'Опис', 'paragraphs', (product) =>
    unwrapRichTextLines(product.description),
  ),
  createTab('specs', 'Характеристики', 'list', (product) =>
    unwrapSectionLines(product.characteristics),
  ),
  createTab('package', 'Комплектація', 'list', (product) =>
    unwrapRichTextLines(product.equipment),
  ),
  createTab('advantages', 'Переваги', 'list', (product) =>
    unwrapSectionLines(product.advantages),
  ),
  createTab('video', 'Відео роботи', 'paragraphs', (product) =>
    unwrapRichTextLines(product.video),
  ),
]

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

export function createProductSourceSection(
  value: unknown,
  items?: Array<string | null | undefined> | null,
): ProductSourceSection | null {
  return {
    content: asRecord(value)?.content,
    items,
  }
}

function createTab(
  id: string,
  label: string,
  type: ProductTabContent['type'],
  getLines: (product: ProductSource) => string[],
): ProductTabConfig {
  return { getLines, id, label, type }
}

function unwrapCategory(value: ProductSource['categorySlugs']): ProductCategory {
  const slug = unwrapText(asArray<string | null | undefined>(value)[0])

  return slug && slug in productCategoryLabels ? (slug as ProductCategory) : 'vacuum'
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

function unwrapTabs(product: ProductSource): ProductTabData[] {
  return productTabs.flatMap((tab) => {
    const lines = tab.getLines(product)

    if (lines.length === 0) {
      return []
    }

    return [
      {
        content:
          tab.type === 'list'
            ? { items: lines, type: 'list' as const }
            : { paragraphs: lines, type: 'paragraphs' as const },
        id: tab.id,
        label: tab.label,
      },
    ]
  })
}

function unwrapSectionLines(value: ProductSourceSection | null | undefined): string[] {
  const items = unwrapTextList(value?.items)
  return items.length > 0 ? items : unwrapRichTextLines(value?.content)
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
