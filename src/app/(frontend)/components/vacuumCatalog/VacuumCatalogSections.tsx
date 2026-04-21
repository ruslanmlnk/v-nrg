'use client'

import { useState, type ReactNode } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

import compareIcon from '@public/icon/header/compare.svg'

import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import cartIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-vacuum-massage-catalog-page-cart.svg'
import chevronDownIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-vacuum-massage-catalog-page-chevron-down.svg'
import chevronUpIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-vacuum-massage-catalog-page-chevron-up.svg'
import checkboxCheckedIconAsset from '@public/icon/generated/catalog-checkbox-checked.svg'
import checkboxUncheckedIconAsset from '@public/icon/generated/catalog-checkbox-unchecked.svg'
import gridIconAsset from '@public/icon/generated/catalog-grid.svg'
import listIconAsset from '@public/icon/generated/catalog-list.svg'
import paginationLeftIconAsset from '@public/icon/generated/catalog-pagination-left.svg'
import paginationRightIconAsset from '@public/icon/generated/catalog-pagination-right.svg'
import radioCheckedIconAsset from '@public/icon/generated/catalog-radio-checked.svg'
import radioUncheckedIconAsset from '@public/icon/generated/catalog-radio-unchecked.svg'
import readMoreArrowIconAsset from '@public/icon/generated/catalog-read-more-arrow.svg'
import searchIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-vacuum-massage-catalog-page-search.svg'
import shareIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-vacuum-massage-catalog-page-share.svg'
import {
  formatPrice,
  type ProductCategory,
  type ProductId,
} from '../../data/products'
import {
  categoryLabels,
  categoryOptions,
  footerCopyBody,
  footerCopyBodySecondary,
  footerCopyTitle,
  footerCopyTitleSecondary,
  matchesPowerBandValue,
  powerLabels,
  type CatalogItem,
  type PowerBand,
  type SortOption,
  type ViewMode,
} from './data'

export function VacuumCatalogHero() {
  return (
    <section className="flex min-h-[268px] items-center justify-center rounded-[20px] bg-[#22354A] px-6 py-14 text-center text-white">
      <div className="flex max-w-[845px] flex-col items-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-2 text-[16px] font-bold uppercase leading-[145%]">
          <span>Головна</span>
          <span>/</span>
          <span>Каталог</span>
          <span>/</span>
          <span className="text-[#4FACF5]">Апарати вакуумного масажу</span>
        </div>
        <h1 className="text-[36px] font-medium leading-[145%] md:text-[48px]">
          Апарати вакуумного масажу
        </h1>
      </div>
    </section>
  )
}

export function VacuumCatalogSidebar({
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
  selectedModels,
  selectedPowerBands,
}: {
  catalogItems: CatalogItem[]
  maniplesOptions: number[]
  modelOptions: Array<{ id: ProductId; title: string }>
  onSearchChange: (value: string) => void
  onSelectCategory: (category: ProductCategory) => void
  onToggleManiples: (maniples: number) => void
  onToggleModel: (id: ProductId) => void
  onTogglePowerBand: (band: PowerBand) => void
  resetFilters: () => void
  searchQuery: string
  selectedCategory: ProductCategory
  selectedManiples: number[]
  selectedModels: ProductId[]
  selectedPowerBands: PowerBand[]
}) {
  return (
    <aside className="flex flex-col gap-5">
      <h2 className="text-[42px] font-medium leading-[145%] text-[#22354A]">Фільтр</h2>

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
        {categoryOptions.map((category) => {
          const count = catalogItems.filter((item) => item.category === category).length

          return (
            <RadioOption
              key={category}
              checked={selectedCategory === category}
              count={count}
              disabled={count === 0}
              label={categoryLabels[category]}
              onClick={() => onSelectCategory(category)}
            />
          )
        })}
      </FilterSection>

      <FilterSection title="Модель">
        {modelOptions.map((model) => {
          const count = catalogItems.filter((item) => item.id === model.id).length

          return (
            <CheckboxOption
              key={model.id}
              checked={selectedModels.includes(model.id)}
              count={count}
              label={model.title}
              onClick={() => onToggleModel(model.id)}
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

export function VacuumCatalogToolbar({
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
    <div className="flex flex-col gap-4 rounded-[20px] bg-white px-6 py-4 shadow-[0_20px_60px_rgba(34,53,74,0.04)] sm:flex-row sm:items-center sm:justify-between">
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

export function VacuumCatalogGrid({
  items,
  onAddToCart,
  onShare,
  onToggleCompare,
  isCompared,
  sharedProductId,
}: {
  isCompared: (productId: ProductId) => boolean
  items: CatalogItem[]
  onAddToCart: (productId: ProductId) => void
  onShare: (title: string, href: string, productId: string) => Promise<void>
  onToggleCompare: (productId: ProductId) => void
  sharedProductId: string | null
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {items.map((product, index) => (
        <motion.article
          key={product.uid}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: index * 0.04, duration: 0.28 }}
          className="overflow-hidden rounded-[20px] bg-white shadow-[0_20px_60px_rgba(34,53,74,0.05)]"
        >
          <div className="relative h-[300px] overflow-hidden rounded-[20px] bg-white">
            <div className="absolute right-5 top-5 z-10 flex items-center gap-3">
              <button
                type="button"
                onClick={() => onToggleCompare(product.id)}
                aria-label={`Додати ${product.title} до порівняння`}
                className={`flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-[0_12px_30px_rgba(34,53,74,0.12)] transition-colors ${
                  isCompared(product.id) ? 'text-[#4FACF5]' : 'text-[#22354A]'
                }`}
              >
                <Image
                  src={compareIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-[18px] w-[18px]"
                />
              </button>

              <button
                type="button"
                onClick={() => void onShare(product.title, product.href, product.uid)}
                aria-label={`Поділитися ${product.title}`}
                className={`flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-[0_12px_30px_rgba(34,53,74,0.12)] transition-colors ${
                  sharedProductId === product.uid ? 'text-[#4FACF5]' : 'text-[#22354A]'
                }`}
              >
                <IconAsset src={shareIconAsset} width={24} height={24} />
              </button>
            </div>

            <Link href={product.href}>
              <Image
                src={product.catalogImage}
                alt={product.title}
                fill
                sizes="(min-width: 1024px) 400px, 100vw"
                className="object-cover"
              />
            </Link>
          </div>

          <div className="flex flex-col gap-4 px-8 py-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">
                {product.title}
              </h3>
              <p className="text-[16px] font-medium leading-[165%] text-[#22354A]">
                {product.details}
              </p>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="text-[24px] font-bold leading-[145%] text-[#22354A]">
                {formatPrice(product.price)}
              </div>
              <button
                type="button"
                onClick={() => onAddToCart(product.id)}
                aria-label={`Додати ${product.title} до кошика`}
                className="text-[#4FACF5] transition-opacity hover:opacity-70"
              >
                <IconAsset src={cartIconAsset} width={32} height={32} />
              </button>
            </div>

            <Link
              href={product.href}
              className="text-[18px] font-medium leading-[145%] text-[#4FACF5]"
            >
              Детальніше
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  )
}

export function VacuumCatalogList({
  items,
  onAddToCart,
}: {
  items: CatalogItem[]
  onAddToCart: (productId: ProductId) => void
}) {
  return (
    <div className="flex flex-col gap-5">
      {items.map((product, index) => (
        <motion.article
          key={product.uid}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: index * 0.04, duration: 0.26 }}
          className="overflow-hidden rounded-[20px] bg-white shadow-[0_20px_60px_rgba(34,53,74,0.05)]"
        >
          <div className="grid items-stretch gap-0 md:grid-cols-[380px_minmax(0,1fr)]">
            <div className="relative min-h-[240px] md:min-h-full">
              <Image
                src={product.catalogImage}
                alt={product.title}
                fill
                sizes="(min-width: 768px) 380px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center gap-4 px-8 py-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">
                  {product.title}
                </h3>
                <p className="text-[16px] font-medium leading-[165%] text-[#22354A]">
                  {product.summary}
                </p>
                <div className="text-[16px] font-medium leading-[165%] text-[#22354A]">
                  {product.listFeatures.map((feature) => (
                    <div key={`${product.uid}-${feature}`}>• {feature}</div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="text-[24px] font-bold leading-[145%] text-[#22354A]">
                  {formatPrice(product.price)}
                </div>
                <button
                  type="button"
                  onClick={() => onAddToCart(product.id)}
                  aria-label={`Додати ${product.title} до кошика`}
                  className="text-[#4FACF5] transition-opacity hover:opacity-70"
                >
                  <IconAsset src={cartIconAsset} width={32} height={32} />
                </button>
              </div>

              <Link
                href={product.href}
                className="text-[18px] font-medium leading-[145%] text-[#4FACF5]"
              >
                Детальніше
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  )
}

export function VacuumCatalogPagination({
  currentPage,
  onPageChange,
  rangeEnd,
  rangeStart,
  totalItems,
  totalPages,
}: {
  currentPage: number
  onPageChange: (page: number) => void
  rangeEnd: number
  rangeStart: number
  totalItems: number
  totalPages: number
}) {
  return (
    <div className="flex flex-col gap-4 rounded-[24px] bg-white px-8 py-6 shadow-[0_20px_60px_rgba(34,53,74,0.04)] sm:flex-row sm:items-center sm:justify-between">
      <div className="text-[18px] font-medium leading-[165%] text-[#22354A]">
        Показано {rangeStart}-{rangeEnd} із {totalItems} товарів
      </div>

      <div className="flex items-center gap-3">
        <PaginationArrowButton
          direction="left"
          disabled={currentPage === 0}
          label="Попередня сторінка"
          onClick={() => onPageChange(Math.max(0, currentPage - 1))}
        />

        <div className="flex items-center gap-3">
          {Array.from({ length: totalPages }, (_, pageIndex) => (
            <PaginationNumber
              key={`page-${pageIndex}`}
              active={pageIndex === currentPage}
              onClick={() => onPageChange(pageIndex)}
            >
              {pageIndex + 1}
            </PaginationNumber>
          ))}
        </div>

        <PaginationArrowButton
          direction="right"
          disabled={currentPage >= totalPages - 1}
          label="Наступна сторінка"
          onClick={() => onPageChange(Math.min(totalPages - 1, currentPage + 1))}
        />
      </div>
    </div>
  )
}

export function VacuumCatalogInfoSection() {
  return (
    <section className="rounded-[20px] bg-white px-8 py-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-[32px] font-medium leading-[125%] tracking-[-0.64px] text-[#22354A]">
            {footerCopyTitle}
          </h2>
          <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
            {footerCopyBody}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[32px] font-medium leading-[125%] tracking-[-0.64px] text-[#22354A]">
            {footerCopyTitleSecondary}
          </h2>
          <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
            {footerCopyBodySecondary}
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

function PaginationNumber({
  active = false,
  children,
  onClick,
}: {
  active?: boolean
  children: ReactNode
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[62px] w-[62px] items-center justify-center rounded-[20px] text-[30px] font-medium leading-[145%] transition-colors ${
        active ? 'bg-[#4FACF5] text-white' : 'bg-[#EEF3F6] text-[#22354A]'
      }`}
    >
      {children}
    </button>
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

function PaginationArrowButton({
  direction,
  disabled = false,
  label,
  onClick,
}: {
  direction: 'left' | 'right'
  disabled?: boolean
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex h-[62px] w-[62px] items-center justify-center rounded-[20px] bg-[#EEF3F6] text-[#22354A] transition-opacity disabled:cursor-not-allowed disabled:opacity-45"
    >
      <IconAsset
        src={direction === 'left' ? paginationLeftIconAsset : paginationRightIconAsset}
        width={18}
        height={18}
      />
    </button>
  )
}
