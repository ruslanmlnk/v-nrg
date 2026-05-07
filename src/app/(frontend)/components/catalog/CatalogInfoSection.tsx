'use client'

import type { ProductCategoryData } from '../../data/products'

import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import readMoreArrowIconAsset from '@public/icon/generated/catalog-read-more-arrow.svg'

export function CatalogInfoSection({ category }: { category?: ProductCategoryData | null }) {
  if (!category?.description) {
    return null
  }

  return (
    <section className="rounded-[20px] bg-white px-8 py-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-[32px] font-medium leading-[125%] tracking-[-0.64px] text-[#22354A]">
            {category.title}
          </h2>
          <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
            {category.description}
          </p>
        </div>

        <button type="button" className="flex items-center self-start">
          <span className="rounded-[40px] bg-[#22354A] px-6 py-3 text-[18px] font-medium leading-[165%] text-white">
            Читати все
          </span>
          <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#4FACF5]">
            <IconAsset src={readMoreArrowIconAsset} width={26} height={26} className="text-white" />
          </span>
        </button>
      </div>
    </section>
  )
}
