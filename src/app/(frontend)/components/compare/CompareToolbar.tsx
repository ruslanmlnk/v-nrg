'use client'

import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import chevronDownIconAsset from '@public/icon/generated/compare-compare-page-chevron-down.svg'

export function CompareToolbar({
  categories,
  selectedCategory,
  onCategoryChange,
}: {
  categories: { slug: string; title: string }[]
  selectedCategory: string
  onCategoryChange: (slug: string) => void
}) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      <h2 className="text-[28px] font-medium leading-[145%] text-[#22354A]">Порівняння товарів</h2>

      <div className="relative max-w-full rounded-[20px] bg-white text-[20px] font-medium leading-[145%] text-[#22354A] shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
        <select
          aria-label="Категорія товарів для порівняння"
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value)}
          disabled={categories.length === 0}
          className="w-full appearance-none rounded-[20px] bg-transparent py-6 pl-8 pr-16 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4FACF5]"
        >
          {categories.length === 0 ? <option value="">Немає товарів для порівняння</option> : null}
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.title}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2">
          <IconAsset src={chevronDownIconAsset} width={16} height={16} />
        </span>
      </div>
    </div>
  )
}
