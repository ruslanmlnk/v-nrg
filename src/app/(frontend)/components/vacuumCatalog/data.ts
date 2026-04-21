import type { ProductCategory, ProductData } from '../../data/products'

export const ITEMS_PER_PAGE = 5

export type ViewMode = 'grid' | 'list'
export type SortOption = 'popular' | 'price-asc' | 'price-desc'
export type PowerBand = 'under-1000' | 'over-1000'

export type CatalogItem = ProductData & {
  category: ProductCategory
  maniples: number
  powerWatts: number
  summary: string
  uid: string
}

export const footerCopyTitle = 'Професійні апарати вакуумного масажу V-NRG'
export const footerCopyBody =
  'Апарати вакуумного масажу V-NRG це інноваційне обладнання європейської якості для салонів краси, спа-центрів та приватних кабінетів. Наша продукція сертифікована згідно з міжнародними стандартами CE та ISO 9001:2015.'
export const footerCopyTitleSecondary = 'Переваги вакуумного масажу'
export const footerCopyBodySecondary =
  'Вакуумний масаж ефективно стимулює кровообіг, покращує лімфодренаж, зменшує прояви целюліту та сприяє корекції фігури. Процедури з використанням апаратів V-NRG дозволяють досягти видимих результатів вже після 3-5 сеансів.'

export const categoryLabels: Record<ProductCategory, string> = {
  accessories: 'Аксесуари',
  chairs: 'Стільці для масажу',
  components: 'Комплектуючі',
  materials: 'Розхідники',
  physiotherapy: 'Апарати фізіотерапії',
  vacuum: 'Апарати вакуумного масажу',
}

export const categoryOptions: ProductCategory[] = [
  'vacuum',
  'physiotherapy',
  'components',
  'materials',
  'accessories',
  'chairs',
]

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
