import type { ProductCategory, ProductData } from '../../data/products'

export const ITEMS_PER_PAGE = 5

export type ViewMode = 'grid' | 'list'
export type SortOption = 'popular' | 'price-asc' | 'price-desc'
export type PowerBand = 'under-1000' | 'over-1000'
export type CatalogModelKey = string

export type CatalogItem = ProductData & {
  category: ProductCategory
  categoryLabel: string
  summary: string
  uid: string
}

export type CatalogCategoryOption = {
  label: string
  slug: ProductCategory
}

export const powerLabels: Record<PowerBand, string> = {
  'over-1000': 'понад 1000 Вт',
  'under-1000': 'до 1000 Вт',
}

export function matchesPowerBandValue(powerWatts: number, band: PowerBand) {
  if (band === 'under-1000') {
    return powerWatts <= 1000
  }

  return powerWatts > 1000
}

export function getCatalogModelKey(title: string): CatalogModelKey {
  return title.trim().toLowerCase()
}
