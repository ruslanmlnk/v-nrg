'use client'

import { useState, type ReactNode } from 'react'
import Image from 'next/image'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import chevronUpIconAsset from '@public/icon/generated/catalog-chevron-up.svg'
import checkboxCheckedIconAsset from '@public/icon/generated/catalog-checkbox-checked.svg'
import checkboxUncheckedIconAsset from '@public/icon/generated/catalog-checkbox-unchecked.svg'
import radioCheckedIconAsset from '@public/icon/generated/catalog-radio-checked.svg'
import radioUncheckedIconAsset from '@public/icon/generated/catalog-radio-unchecked.svg'
import searchIconAsset from '@public/icon/generated/catalog-search.svg'
import {
  type CatalogModelKey,
  matchesPowerBandValue,
  powerLabels,
  type CatalogCategoryOption,
  type CatalogItem,
  type PowerBand,
} from './catalogData'

export function CatalogSidebar({
  categoryOptions,
  catalogItems,
  maniplesOptions,
  modelOptions,
  onSearchChange,
  onSelectCategory,
  onToggleManiples,
  onToggleModel,
  onTogglePowerBand,
  resetFilters,
  searchQuery,
  selectedCategory,
  selectedManiples,
  selectedModelKeys,
  selectedPowerBands,
  showTitle = true,
}: {
  categoryOptions: CatalogCategoryOption[]
  catalogItems: CatalogItem[]
  maniplesOptions: number[]
  modelOptions: Array<{ key: CatalogModelKey; title: string }>
  onSearchChange: (value: string) => void
  onSelectCategory: (category: string) => void
  onToggleManiples: (maniples: number) => void
  onToggleModel: (key: CatalogModelKey) => void
  onTogglePowerBand: (band: PowerBand) => void
  resetFilters: () => void
  searchQuery: string
  selectedCategory: string | null
  selectedManiples: number[]
  selectedModelKeys: CatalogModelKey[]
  selectedPowerBands: PowerBand[]
  showTitle?: boolean
}) {
  return (
    <aside className="flex flex-col gap-5">
      {showTitle ? (
        <h2 className="text-[42px] font-medium leading-[145%] text-[#22354A]">Фільтр</h2>
      ) : null}

      <label className="flex h-20 items-center gap-4 rounded-[40px] bg-white px-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
        <IconAsset src={searchIconAsset} width={18} height={18} />
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Пошук"
          className="w-full bg-transparent text-[24px] font-medium leading-[145%] text-[#22354A] outline-none placeholder:text-[#22354A]"
        />
      </label>

      <FilterSection title="Всі товари">
        <RadioOption
          checked={selectedCategory === ''}
          count={catalogItems.length}
          label="Всі товари"
          onClick={() => onSelectCategory('')}
        />

        {categoryOptions.map((category) => {
          const count = catalogItems.filter((item) => item.category === category.slug).length

          return (
            <RadioOption
              key={category.slug}
              checked={selectedCategory === category.slug}
              count={count}
              disabled={count === 0}
              label={category.label}
              onClick={() => onSelectCategory(category.slug)}
            />
          )
        })}
      </FilterSection>

      <FilterSection title="Модель">
        {modelOptions.map((model) => {
          const count = catalogItems.filter((item) => item.modelKey === model.key).length

          return (
            <CheckboxOption
              key={model.key}
              checked={selectedModelKeys.includes(model.key)}
              count={count}
              label={model.title}
              onClick={() => onToggleModel(model.key)}
            />
          )
        })}
      </FilterSection>

      <FilterSection title="Кількість маніпул">
        {maniplesOptions.map((maniples) => {
          const count = catalogItems.filter((item) => item.maniples === maniples).length

          return (
            <CheckboxOption
              key={maniples}
              checked={selectedManiples.includes(maniples)}
              count={count}
              label={`${maniples}`}
              onClick={() => onToggleManiples(maniples)}
            />
          )
        })}
      </FilterSection>

      <FilterSection title="Потужність">
        {(['under-1000', 'over-1000'] as PowerBand[]).map((band) => {
          const count = catalogItems.filter((item) =>
            matchesPowerBandValue(item.powerWatts, band),
          ).length

          return (
            <CheckboxOption
              key={band}
              checked={selectedPowerBands.includes(band)}
              count={count}
              label={powerLabels[band]}
              onClick={() => onTogglePowerBand(band)}
            />
          )
        })}
      </FilterSection>

      <button
        type="button"
        onClick={resetFilters}
        className="flex h-[54px] items-center justify-center rounded-[20px] border border-[#D5E0E8] bg-white text-[18px] font-medium leading-[145%] text-[#22354A] transition-colors hover:border-[#4FACF5] hover:text-[#4FACF5]"
      >
        Скинути фільтри
      </button>
    </aside>
  )
}

function FilterSection({ children, title }: { children: ReactNode; title: string }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="flex flex-col gap-8 rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex items-center justify-between gap-4 text-left"
      >
        <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">{title}</h3>
        <span className={`transition-transform duration-200 ${isOpen ? '' : 'rotate-180'}`}>
          <IconAsset src={chevronUpIconAsset} width={24} height={24} />
        </span>
      </button>
      {isOpen ? <div className="flex flex-col gap-6">{children}</div> : null}
    </div>
  )
}

function RadioOption({
  checked = false,
  count,
  disabled = false,
  label,
  onClick,
}: {
  checked?: boolean
  count: number
  disabled?: boolean
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex items-center gap-4 text-left transition-opacity disabled:cursor-not-allowed disabled:opacity-45"
    >
      <Image
        src={checked ? radioCheckedIconAsset : radioUncheckedIconAsset}
        alt=""
        aria-hidden="true"
        width={24}
        height={24}
      />
      <div className="flex items-center gap-2 text-[18px] font-medium leading-[165%]">
        <span className="text-[#22354A]">{label}</span>
        <span className="text-[#B7CAD1]">({count})</span>
      </div>
    </button>
  )
}

function CheckboxOption({
  checked = false,
  count,
  label,
  onClick,
}: {
  checked?: boolean
  count: number
  label: string
  onClick: () => void
}) {
  return (
    <button type="button" onClick={onClick} className="flex items-center gap-4 text-left">
      <Image
        src={checked ? checkboxCheckedIconAsset : checkboxUncheckedIconAsset}
        alt=""
        aria-hidden="true"
        width={24}
        height={24}
      />
      <div className="flex items-center gap-2 text-[18px] font-medium leading-[165%]">
        <span className="text-[#22354A]">{label}</span>
        <span className="text-[#B7CAD1]">({count})</span>
      </div>
    </button>
  )
}
