'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useCommerce } from '../providers/CommerceProvider'
import ProductImagePlaceholder from '../shared/ProductImagePlaceholder'

export function CatalogCategoriesSection() {
  const { categories } = useCommerce()

  if (categories.length === 0) {
    return null
  }

  return (
    <section className="grid gap-5 lg:grid-cols-3">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={category.href}
          className="group flex flex-col rounded-[20px] bg-white shadow-[0_20px_60px_rgba(34,53,74,0.05)]"
        >
          <div className="relative h-[300px] overflow-hidden rounded-[20px] border border-transparent transition-colors group-hover:border-[#4FACF5]">
            {category.image ? (
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(min-width: 1024px) 400px, 100vw"
                className="object-cover object-top"
              />
            ) : (
              <ProductImagePlaceholder className="absolute inset-0" label={category.title} />
            )}
          </div>

          <div className="flex flex-col gap-2 px-8 py-6">
            <h2 className="text-[24px] font-medium leading-[145%] text-[#22354A]">
              {category.title}
            </h2>
            {category.description ? (
              <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                {category.description}
              </p>
            ) : null}
          </div>
        </Link>
      ))}
    </section>
  )
}
