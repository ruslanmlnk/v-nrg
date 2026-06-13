'use client'

import { type ReactNode } from 'react'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import chevronDownIconAsset from '@public/icon/generated/catalog-chevron-down.svg'
import gridIconAsset from '@public/icon/generated/catalog-grid.svg'
import listIconAsset from '@public/icon/generated/catalog-list.svg'
import { type SortOption, type ViewMode } from './catalogData'

export function CatalogToolbar({
  productCount,
  sortOption,
  viewMode,
  onSortChange,
  onViewModeChange,
}: {
  onSortChange: (value: SortOption) => void
  onViewModeChange: (value: ViewMode) => void
  productCount: number
  sortOption: SortOption
  viewMode: ViewMode
}) {
  return (
    <div className="hidden flex-col gap-4 rounded-[20px] bg-white px-6 py-4 shadow-[0_20px_60px_rgba(34,53,74,0.04)] sm:flex-row sm:items-center sm:justify-between lg:flex">
      <div className="text-[18px] font-medium leading-[165%] text-[#22354A]">
        Знайдено: <span className="font-bold text-[#4FACF5]">{productCount}</span> товарів
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative">
          <select
            value={sortOption}
            onChange={(event) => onSortChange(event.target.value as SortOption)}
            className="h-11 appearance-none rounded-[40px] border border-[#D5E0E8] bg-white px-4 pr-11 text-[16px] font-medium leading-[145%] text-[#22354A] outline-none"
          >
            <option value="popular">За популярністю</option>
            <option value="price-asc">Спочатку дешевші</option>
            <option value="price-desc">Спочатку дорожчі</option>
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
            <IconAsset src={chevronDownIconAsset} width={16} height={16} />
          </span>
        </div>

        <div className="flex items-center gap-2">
          <ViewToggleButton
            active={viewMode === 'grid'}
            label="Сітка"
            onClick={() => onViewModeChange('grid')}
          >
            <IconAsset
              src={gridIconAsset}
              width={20}
              height={20}
              className={viewMode === 'grid' ? 'text-white' : 'text-[#22354A]'}
            />
          </ViewToggleButton>
          <ViewToggleButton
            active={viewMode === 'list'}
            label="Список"
            onClick={() => onViewModeChange('list')}
          >
            <IconAsset
              src={listIconAsset}
              width={20}
              height={20}
              className={viewMode === 'list' ? 'text-white' : 'text-[#22354A]'}
            />
          </ViewToggleButton>
        </div>
      </div>
    </div>
  )
}

function ViewToggleButton({
  active = false,
  children,
  label,
  onClick,
}: {
  active?: boolean
  children: ReactNode
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
        active ? 'border-[#4FACF5] bg-[#4FACF5]' : 'border-[#D5E0E8] bg-white text-[#22354A]'
      }`}
    >
      {children}
    </button>
  )
}
