import type { Media, Product as PayloadProduct } from '@/payload-types'

import catalogEquipment from '@public/assets/catalog/catalog-equipment.jpg'
import catalogVacuum from '@public/assets/catalog/catalog-vacuum.jpg'
import productCardImage from '@public/assets/product/product-card.jpg'
import productMainImage from '@public/assets/product/product-main.jpg'
import productThumbActive from '@public/assets/product/product-thumb-active.jpg'

export type ProductId = string
export type ProductImage = string
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

export const productCategoryLabels: Record<ProductCategory, string> = {
  accessories: 'Аксесуари',
  chairs: 'Стільці для масажу',
  components: 'Комплектуючі',
  materials: 'Розхідники',
  physiotherapy: 'Апарати фізіотерапії',
  vacuum: 'Апарати вакуумного масажу',
}

const fallbackProducts = [
  {
    cartImage: productCardImage.src,
    catalogImage: catalogVacuum.src,
    compareFeatures: [
      { label: 'Кількість маніпул', value: '18 шт' },
      { label: 'Потужність', value: '800 Вт' },
      { label: 'Тиск', value: '0-100 кПа' },
      { label: 'Режим роботи', value: '10 год.' },
      { label: 'Тип дисплею', value: 'Сенсорний 10"' },
    ],
    compareImage: productMainImage.src,
    details: '18 маніпул · 800 Вт',
    listFeatures: ['18 маніпул', 'Потужність 800 Вт', 'Для помірного навантаження'],
    maniples: 18,
    powerWatts: 800,
    shortDescription: 'Професійний апарат для вакуумного масажу',
  },
  {
    cartImage: productCardImage.src,
    catalogImage: catalogEquipment.src,
    compareFeatures: [
      { label: 'Кількість маніпул', value: '36 шт' },
      { label: 'Потужність', value: '1200 Вт' },
      { label: 'Тиск', value: '0-120 кПа' },
      { label: 'Режим роботи', value: '15 год.' },
      { label: 'Тип дисплею', value: 'Сенсорний 12"' },
    ],
    compareImage: catalogEquipment.src,
    details: '36 маніпул · 1200 Вт',
    listFeatures: ['36 маніпул', 'Потужність 1200 Вт', 'Для інтенсивної роботи'],
    maniples: 36,
    powerWatts: 1200,
    shortDescription: 'Посилена конфігурація для інтенсивної роботи',
  },
  {
    cartImage: productThumbActive.src,
    catalogImage: productMainImage.src,
    compareFeatures: [
      { label: 'Кількість маніпул', value: '12 шт' },
      { label: 'Потужність', value: '650 Вт' },
      { label: 'Тиск', value: '0-90 кПа' },
      { label: 'Режим роботи', value: '8 год.' },
      { label: 'Тип дисплею', value: 'Сенсорний 8"' },
    ],
    compareImage: productThumbActive.src,
    details: '12 маніпул · 650 Вт',
    listFeatures: ['12 маніпул', 'Потужність 650 Вт', 'Для локальних процедур'],
    maniples: 12,
    powerWatts: 650,
    shortDescription: 'Компактний апарат для локальних процедур і невеликих кабінетів',
  },
] as const

const fallbackProductsBySlug: Record<string, (typeof fallbackProducts)[number]> = {
  'v-nrg-18-pro': fallbackProducts[0],
  'v-nrg-36-pro': fallbackProducts[1],
  'v-nrg-body-sculpt': fallbackProducts[2],
}

const productTabConfig = [
  { id: 'description', key: 'description', label: 'Опис', type: 'paragraphs' },
  { id: 'specs', key: 'characteristics', label: 'Характеристики', type: 'list' },
  { id: 'package', key: 'equipment', label: 'Комплектація', type: 'list' },
  { id: 'advantages', key: 'advantages', label: 'Переваги', type: 'list' },
  { id: 'video', key: 'video', label: 'Відео роботи', type: 'paragraphs' },
] as const

export function mapPayloadProducts(products: PayloadProduct[]) {
  return products.map((product, index) => mapPayloadProduct(product, index))
}

export function mapPayloadProduct(product: PayloadProduct, index = 0): ProductData {
  const slug = product.slug || formatSlug(product.title) || String(product.id)
  const fallback = fallbackProductsBySlug[slug] ?? fallbackProducts[index % fallbackProducts.length] ?? fallbackProducts[0]
  const category = normalizeCategory(product.category)
  const galleryImages = getGalleryImages(product)
  const primaryImage = galleryImages[0] ?? fallback.catalogImage
  const secondaryImage = galleryImages[1] ?? fallback.compareImage
  const listFeatures = normalizeListFeatures(product.listFeatures) ?? [...fallback.listFeatures]
  const maniples = product.maniples ?? fallback.maniples
  const powerWatts = product.powerWatts ?? fallback.powerWatts

  return {
    cartImage: galleryImages[2] ?? primaryImage,
    catalogImage: primaryImage,
    category,
    categoryLabel: productCategoryLabels[category],
    cmsId: product.id,
    compareFeatures: normalizeCompareFeatures(product.compareFeatures) ?? [
      ...fallback.compareFeatures,
    ],
    compareImage: secondaryImage,
    details:
      product.details ||
      [maniples ? `${maniples} маніпул` : null, powerWatts ? `${powerWatts} Вт` : null]
        .filter(Boolean)
        .join(' · ') ||
      fallback.details,
    faq: normalizeFaq(product.faq),
    galleryImages: galleryImages.length > 0 ? galleryImages : [primaryImage, secondaryImage],
    href: `/catalog/aparaty-vakuumnoho-masazhu/${slug}`,
    id: slug,
    listFeatures,
    maniples,
    powerWatts,
    price: product.price ?? 0,
    rating: product.rating ?? 4.8,
    shortDescription: product.shortDescription || fallback.shortDescription,
    slug,
    tabs: mapProductTabs(product),
    title: product.title || 'Товар без назви',
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

function normalizeCategory(value: PayloadProduct['category']): ProductCategory {
  return value && value in productCategoryLabels ? value : 'vacuum'
}

function normalizeListFeatures(
  features: PayloadProduct['listFeatures'],
): string[] | undefined {
  const normalized = features
    ?.map((item) => item.feature?.trim())
    .filter((feature): feature is string => Boolean(feature))

  return normalized && normalized.length > 0 ? normalized : undefined
}

function normalizeCompareFeatures(
  features: PayloadProduct['compareFeatures'],
): ProductFeature[] | undefined {
  const normalized = features
    ?.map((feature) => ({
      label: feature.label?.trim() ?? '',
      value: feature.value?.trim() ?? '',
    }))
    .filter((feature) => feature.label && feature.value)

  return normalized && normalized.length > 0 ? normalized : undefined
}

function normalizeFaq(faq: PayloadProduct['faq']): ProductFaqItem[] {
  return (
    faq
      ?.map((item) => ({
        answer: item.answer?.trim() || undefined,
        question: item.question?.trim() ?? '',
      }))
      .filter((item) => item.question) ?? []
  )
}

function getGalleryImages(product: PayloadProduct): ProductImage[] {
  return (
    product.gallery
      ?.map((item) => (isMedia(item) ? item.url : undefined))
      .filter((url): url is string => Boolean(url)) ?? []
  )
}

function isMedia(value: number | Media | null | undefined): value is Media {
  return Boolean(value && typeof value === 'object' && 'url' in value)
}

function mapProductTabs(product: PayloadProduct): ProductTabData[] {
  return productTabConfig.flatMap((tab) => {
    const lines = getRichTextLines(product[tab.key]?.content)

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

function getRichTextLines(value: unknown): string[] {
  const root = asRecord(asRecord(value)?.root)
  const children = Array.isArray(root?.children) ? root.children : []

  return children
    .map((child) => collectText(child).trim())
    .filter((line) => line.length > 0)
}

function collectText(value: unknown): string {
  const record = asRecord(value)

  if (!record) {
    return ''
  }

  const text = typeof record.text === 'string' ? record.text : ''
  const children = Array.isArray(record.children) ? record.children : []
  const childText = children.map(collectText).filter(Boolean).join(' ')

  return [text, childText].filter(Boolean).join(' ')
}

function asRecord(value: unknown): Record<string, unknown> | undefined {
  return value && typeof value === 'object' ? (value as Record<string, unknown>) : undefined
}

function formatSlug(value?: string | null) {
  return (
    value
      ?.trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') || undefined
  )
}
