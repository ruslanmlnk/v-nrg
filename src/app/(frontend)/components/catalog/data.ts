import catalogEquipment from '@public/assets/catalog/catalog-equipment.jpg'
import catalogVacuum from '@public/assets/catalog/catalog-vacuum.jpg'

export type CatalogCategory = {
  description: string
  href: string
  image: typeof catalogVacuum
  isHighlighted?: boolean
  title: string
}

export const catalogCategories: CatalogCategory[] = [
  {
    description: 'Обладнання для вакуумного масажу',
    href: '/catalog/aparaty-vakuumnoho-masazhu',
    image: catalogVacuum,
    isHighlighted: true,
    title: 'Апарати вакуумного масажу',
  },
  {
    description: 'Професійне обладнання фізіотерапії',
    href: '/info?topic=physiotherapy',
    image: catalogEquipment,
    title: 'Апарати фізіотерапії',
  },
  {
    description: 'Маніпули, насадки, фільтри, шланги',
    href: '/info?topic=components',
    image: catalogEquipment,
    title: 'Комплектуючі',
  },
  {
    description: 'Витратні матеріали для процедур',
    href: '/info?topic=materials',
    image: catalogEquipment,
    title: 'Витратні матеріали',
  },
  {
    description: 'Додаткове обладнання та аксесуари',
    href: '/info?topic=accessories',
    image: catalogEquipment,
    title: 'Аксесуари',
  },
  {
    description: 'Професійні масажні крісла та стільці',
    href: '/info?topic=chairs',
    image: catalogEquipment,
    title: 'Стільці для масажу',
  },
]
