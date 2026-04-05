import type { StaticImageData } from 'next/image'

import catalogEquipment from '@public/assets/catalog/catalog-equipment.jpg'
import catalogVacuum from '@public/assets/catalog/catalog-vacuum.jpg'
import productCardImage from '@public/assets/product/product-card.jpg'
import productMainImage from '@public/assets/product/product-main.jpg'

export type ProductId = 'v-nrg-18-pro' | 'v-nrg-36-pro'

export type ProductFeature = {
  label: string
  value: string
}

export type ProductData = {
  cartImage: StaticImageData
  catalogImage: StaticImageData
  categoryLabel: string
  compareFeatures: ProductFeature[]
  compareImage: StaticImageData
  details: string
  href: string
  id: ProductId
  price: number
  shortDescription: string
  title: string
}

export const products: ProductData[] = [
  {
    cartImage: productCardImage,
    catalogImage: catalogVacuum,
    categoryLabel: 'Апарати вакуумного масажу',
    compareFeatures: [
      { label: 'Кількість маніпул', value: '18 шт' },
      { label: 'Потужність', value: '800W' },
      { label: 'Тиск', value: '0-100 кПа' },
      { label: 'Режим роботи', value: '10 год.' },
      { label: 'Тип дисплею', value: 'Сенсорний 10"' },
    ],
    compareImage: productMainImage,
    details: '18 маніпул · 800 Вт',
    href: '/catalog/aparaty-vakuumnoho-masazhu/v-nrg-18-pro',
    id: 'v-nrg-18-pro',
    price: 68000,
    shortDescription: 'Професійний апарат для вакуумного масажу',
    title: 'V-NRG 18 PRO',
  },
  {
    cartImage: productCardImage,
    catalogImage: catalogEquipment,
    categoryLabel: 'Апарати вакуумного масажу',
    compareFeatures: [
      { label: 'Кількість маніпул', value: '36 шт' },
      { label: 'Потужність', value: '1200W' },
      { label: 'Тиск', value: '0-120 кПа' },
      { label: 'Режим роботи', value: '15 год.' },
      { label: 'Тип дисплею', value: 'Сенсорний 12"' },
    ],
    compareImage: catalogEquipment,
    details: '36 маніпул · 1200 Вт',
    href: '/catalog/aparaty-vakuumnoho-masazhu',
    id: 'v-nrg-36-pro',
    price: 68000,
    shortDescription: 'Посилена конфігурація для інтенсивної роботи',
    title: 'V-NRG 36 PRO',
  },
] as const

export const featuredCatalogProducts: ProductData[] = [
  products[0],
  products[1],
  products[0],
  products[1],
  products[0],
  products[1],
] as const

export const productsMap = Object.fromEntries(products.map((product) => [product.id, product])) as Record<
  ProductId,
  ProductData
>

export function formatPrice(value: number) {
  return `${new Intl.NumberFormat('uk-UA').format(value)} ₴`
}
