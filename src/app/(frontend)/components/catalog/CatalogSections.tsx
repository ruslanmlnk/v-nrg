import Image from 'next/image'
import Link from 'next/link'

import PageHero from '../shared/PageHero'
import { catalogCategories } from './data'

export function CatalogHeroSection() {
  return <PageHero currentLabel="Каталог" title="Каталог продукції" contentClassName="max-w-[845px]" />
}

export function CatalogCategoriesSection() {
  return (
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
  )
}
