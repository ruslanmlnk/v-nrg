import Image from 'next/image'
import Link from 'next/link'

import catalogEquipment from '@public/assets/catalog/catalog-equipment.jpg'
import catalogVacuum from '@public/assets/catalog/catalog-vacuum.jpg'

import SiteFooter from '../SiteFooter'

type CatalogCategory = {
  description: string
  href: string
  image: typeof catalogVacuum
  isHighlighted?: boolean
  title: string
}

const catalogCategories: CatalogCategory[] = [
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
] as const

export default function CatalogPage() {
  return (
    <div className="pt-12">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-5 px-6 pb-[100px]">
        <section className="flex min-h-[268px] items-center justify-center rounded-[20px] bg-[#22354A] px-6 py-14 text-center text-white">
          <div className="flex max-w-[845px] flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-[16px] font-bold uppercase leading-[145%]">
              <span>Головна</span>
              <span>/</span>
              <span className="text-[#4FACF5]">Каталог</span>
            </div>
            <h1 className="text-[36px] font-medium leading-[145%] md:text-[48px]">Каталог продукції</h1>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {catalogCategories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group flex flex-col rounded-[20px] bg-white shadow-[0_20px_60px_rgba(34,53,74,0.05)]"
            >
              <div
                className={`relative h-[300px] overflow-hidden rounded-[20px] ${
                  category.isHighlighted ? 'ring-2 ring-[#4FACF5]' : ''
                }`}
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 px-8 py-6">
                <h2 className="text-[24px] font-medium leading-[145%] text-[#22354A]">{category.title}</h2>
                <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">{category.description}</p>
              </div>
            </Link>
          ))}
        </section>
      </div>

      <SiteFooter />
    </div>
  )
}
