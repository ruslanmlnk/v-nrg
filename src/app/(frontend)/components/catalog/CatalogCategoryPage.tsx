'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import chevronDownIconAsset from '@public/icon/generated/catalog-chevron-down.svg'
import { translate } from '../../lib/siteTranslations'
import type { CharacteristicFilterOption } from './CatalogSidebar'
import { useCommerce } from '../providers/CommerceProvider'
import { useSitePreferences } from '../providers/SitePreferencesProvider'
import {
  CatalogGrid,
  CatalogHero,
  CatalogInfoSection,
  CatalogList,
  CatalogPagination,
  CatalogSidebar,
  CatalogToolbar,
} from './CatalogSections'
import {
  ITEMS_PER_PAGE,
  type CatalogCategoryOption,
  type CatalogItem,
  type SortOption,
  type ViewMode,
} from './catalogData'

export function CatalogCategoryPage({ routeCategory }: { routeCategory: string }) {
  const { addToCart, categories, isInCompare, products, toggleCompare } = useCommerce()
  const { locale } = useSitePreferences()
  const [sharedProductId, setSharedProductId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(routeCategory || null)
  const [selectedCharacteristics, setSelectedCharacteristics] = useState<Record<string, string[]>>(
    {},
  )
  const [sortOption, setSortOption] = useState<SortOption>('popular')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)
  const [filtersReady, setFiltersReady] = useState(false)
  const previousRouteCategory = useRef(routeCategory)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const categoryParam = params.get('category')
    const sortParam = params.get('sort')
    const viewParam = params.get('view')

    setSearchQuery(params.get('q') ?? '')
    setSelectedCategory(categoryParam === 'all' ? '' : categoryParam || routeCategory || null)
    setSelectedCharacteristics(readCharacteristicFilters(params))
    setSortOption(sortParam === 'price-asc' || sortParam === 'price-desc' ? sortParam : 'popular')
    setViewMode(viewParam === 'list' ? 'list' : 'grid')
    setFiltersReady(true)
  }, [routeCategory])

  const catalogItems = useMemo<CatalogItem[]>(
    () =>
      products.map((product, index) => ({
        ...product,
        summary: product.shortDescription,
        uid: `${product.id}-${index}`,
      })),
    [products],
  )

  const characteristicOptions = useMemo<CharacteristicFilterOption[]>(
    () =>
      buildCharacteristicOptions(
        selectedCategory
          ? catalogItems.filter((item) => item.category === selectedCategory)
          : catalogItems,
      ),
    [catalogItems, selectedCategory],
  )

  useEffect(() => {
    setSelectedCharacteristics((current) =>
      pruneCharacteristicFilters(current, characteristicOptions),
    )
  }, [characteristicOptions])

  const categoryOptions = useMemo<CatalogCategoryOption[]>(() => {
    return categories.map((category) => ({
      label: category.title,
      slug: category.slug,
    }))
  }, [categories])

  const activeCategory = selectedCategory
    ? (categories.find((category) => category.slug === selectedCategory) ?? null)
    : null
  const activeCategoryTitle = selectedCategory
    ? activeCategory?.title ||
    catalogItems.find((item) => item.category === selectedCategory)?.categoryLabel ||
    selectedCategory
    : translate(locale, 'catalog')

  useEffect(() => {
    if (previousRouteCategory.current === routeCategory) return

    previousRouteCategory.current = routeCategory
    setSelectedCategory(routeCategory || null)
  }, [routeCategory])

  const normalizedQuery = searchQuery.trim().toLowerCase()

  const filteredProducts = catalogItems.filter((item) => {
    const matchesSearch =
      normalizedQuery.length === 0 ||
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.summary.toLowerCase().includes(normalizedQuery) ||
      item.advantages.some((advantage) => advantage.toLowerCase().includes(normalizedQuery))

    const matchesCategory = !selectedCategory || item.category === selectedCategory
    const matchesCharacteristics = Object.entries(selectedCharacteristics).every(
      ([label, values]) =>
        values.length === 0 ||
        item.characteristics.some(
          (characteristic) =>
            characteristic.label === label && values.includes(characteristic.value),
        ),
    )

    return matchesSearch && matchesCategory && matchesCharacteristics
  })

  const sortedProducts = [...filteredProducts].sort((left, right) => {
    if (sortOption === 'price-asc') {
      return left.price - right.price || left.title.localeCompare(right.title)
    }

    if (sortOption === 'price-desc') {
      return right.price - left.price || left.title.localeCompare(right.title)
    }

    return (
      catalogItems.findIndex((item) => item.uid === left.uid) -
      catalogItems.findIndex((item) => item.uid === right.uid)
    )
  })

  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / ITEMS_PER_PAGE))
  const paginatedProducts = sortedProducts.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  )
  const rangeStart = sortedProducts.length === 0 ? 0 : currentPage * ITEMS_PER_PAGE + 1
  const rangeEnd = sortedProducts.length === 0 ? 0 : rangeStart + paginatedProducts.length - 1

  useEffect(() => {
    setCurrentPage(0)
  }, [searchQuery, selectedCategory, selectedCharacteristics, sortOption, viewMode])

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages - 1))
  }, [totalPages])

  useEffect(() => {
    if (!filtersReady) return

    const params = new URLSearchParams(window.location.search)

    for (const key of ['category', 'filter', 'maniples', 'model', 'power', 'q', 'sort', 'view']) {
      params.delete(key)
    }

    if (searchQuery.trim()) params.set('q', searchQuery.trim())
    if (selectedCategory === '') {
      params.set('category', 'all')
    } else if (selectedCategory && selectedCategory !== routeCategory) {
      params.set('category', selectedCategory)
    }
    for (const [label, values] of Object.entries(selectedCharacteristics)) {
      for (const value of values) params.append('filter', JSON.stringify({ label, value }))
    }
    if (sortOption !== 'popular') params.set('sort', sortOption)
    if (viewMode !== 'grid') params.set('view', viewMode)

    const query = params.toString()
    const nextUrl = `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`
    window.history.replaceState(window.history.state, '', nextUrl)
  }, [
    filtersReady,
    routeCategory,
    searchQuery,
    selectedCategory,
    selectedCharacteristics,
    sortOption,
    viewMode,
  ])

  useEffect(() => {
    document.body.style.overflow = isMobileFiltersOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileFiltersOpen])

  const handleShare = async (title: string, href: string, productId: string) => {
    const shareUrl = typeof window === 'undefined' ? href : `${window.location.origin}${href}`

    try {
      if (navigator.share) {
        await navigator.share({ title, url: shareUrl })
      } else {
        await navigator.clipboard.writeText(shareUrl)
      }

      setSharedProductId(productId)
      window.setTimeout(() => setSharedProductId(null), 1800)
    } catch {
      setSharedProductId(null)
    }
  }

  const resetFilters = () => {
    setSearchQuery('')
    setSelectedCategory(routeCategory || null)
    setSelectedCharacteristics({})
    setSortOption('popular')
    setCurrentPage(0)
  }

  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
        <CatalogHero
          hasCategory={Boolean(selectedCategory)}
          locale={locale}
          title={activeCategoryTitle}
        />

        <MobileCatalogControls
          onOpenFilters={() => setIsMobileFiltersOpen(true)}
          onSortChange={setSortOption}
          sortOption={sortOption}
        />

        <section className="grid items-start gap-5 lg:grid-cols-[400px_minmax(0,1fr)]">
          <div className="hidden lg:block">
            <CatalogSidebar
              categoryOptions={categoryOptions}
              catalogItems={catalogItems}
              characteristicOptions={characteristicOptions}
              onSearchChange={setSearchQuery}
              onSelectCategory={setSelectedCategory}
              onToggleCharacteristic={(label, value) =>
                setSelectedCharacteristics((current) => toggleCharacteristic(current, label, value))
              }
              resetFilters={resetFilters}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              selectedCharacteristics={selectedCharacteristics}
            />
          </div>

          <div className="flex flex-col gap-5">
            <CatalogToolbar
              productCount={sortedProducts.length}
              sortOption={sortOption}
              viewMode={viewMode}
              onSortChange={setSortOption}
              onViewModeChange={setViewMode}
            />

            {paginatedProducts.length === 0 ? (
              <div className="rounded-[20px] bg-white px-8 py-12 text-center shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
                <h2 className="text-[28px] font-medium leading-[145%] text-[#22354A]">
                  Нічого не знайдено
                </h2>
                <p className="mt-3 text-[18px] font-medium leading-[165%] text-[#22354A]">
                  Спробуйте змінити параметри фільтра або скинути вибір.
                </p>
              </div>
            ) : viewMode === 'grid' ? (
              <CatalogGrid
                items={paginatedProducts}
                isCompared={isInCompare}
                onAddToCart={(productId) => addToCart(productId)}
                onShare={handleShare}
                onToggleCompare={toggleCompare}
                sharedProductId={sharedProductId}
              />
            ) : (
              <CatalogList
                items={paginatedProducts}
                onAddToCart={(productId) => addToCart(productId)}
              />
            )}

            <CatalogPagination
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              rangeEnd={rangeEnd}
              rangeStart={rangeStart}
              totalItems={sortedProducts.length}
              totalPages={totalPages}
            />
          </div>
        </section>

        <CatalogInfoSection category={activeCategory} />
      </div>

      {isMobileFiltersOpen ? (
        <div
          className="fixed inset-0 z-[100] bg-[#22354A]/55 backdrop-blur-[2px] lg:hidden"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setIsMobileFiltersOpen(false)
          }}
          role="presentation"
        >
          <div className="ml-auto h-full w-[min(100%,360px)] overflow-y-auto bg-[#F5F8F9] p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[28px] font-medium leading-[145%] text-[#22354A]">Фільтри</h2>
              <button
                type="button"
                aria-label="Закрити фільтри"
                onClick={() => setIsMobileFiltersOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[28px] leading-none text-[#22354A]"
              >
                ×
              </button>
            </div>

            <CatalogSidebar
              categoryOptions={categoryOptions}
              catalogItems={catalogItems}
              characteristicOptions={characteristicOptions}
              onSearchChange={setSearchQuery}
              onSelectCategory={setSelectedCategory}
              onToggleCharacteristic={(label, value) =>
                setSelectedCharacteristics((current) => toggleCharacteristic(current, label, value))
              }
              resetFilters={resetFilters}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              selectedCharacteristics={selectedCharacteristics}
              showTitle={false}
            />

            <button
              type="button"
              onClick={() => setIsMobileFiltersOpen(false)}
              className="mt-5 flex h-[55px] w-full items-center justify-center rounded-[20px] bg-[#4FACF5] px-6 text-[16px] font-medium leading-[145%] text-white"
            >
              Показати товари
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

function MobileCatalogControls({
  onOpenFilters,
  onSortChange,
  sortOption,
}: {
  onOpenFilters: () => void
  onSortChange: (value: SortOption) => void
  sortOption: SortOption
}) {
  return (
    <div className="flex h-[55px] items-stretch gap-2 lg:hidden">
      <button
        type="button"
        onClick={onOpenFilters}
        className="flex shrink-0 items-center justify-center rounded-[20px] bg-[#4FACF5] px-6 text-[16px] font-medium leading-[145%] text-white"
      >
        Фільтри
      </button>

      <div className="relative min-w-0 flex-1">
        <select
          value={sortOption}
          onChange={(event) => onSortChange(event.target.value as SortOption)}
          className="h-full w-full appearance-none rounded-[20px] border-0 bg-white px-6 pr-11 text-[16px] font-medium leading-[145%] text-[#22354A] outline-none"
        >
          <option value="popular">За популярністю</option>
          <option value="price-asc">Спочатку дешевші</option>
          <option value="price-desc">Спочатку дорожчі</option>
        </select>
        <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-[#22354A]">
          <IconAsset src={chevronDownIconAsset} width={12} height={12} />
        </span>
      </div>
    </div>
  )
}

function buildCharacteristicOptions(items: CatalogItem[]): CharacteristicFilterOption[] {
  const valuesByLabel = new Map<string, Map<string, number>>()

  for (const item of items) {
    for (const characteristic of item.characteristics) {
      const values = valuesByLabel.get(characteristic.label) ?? new Map<string, number>()
      values.set(characteristic.value, (values.get(characteristic.value) ?? 0) + 1)
      valuesByLabel.set(characteristic.label, values)
    }
  }

  return Array.from(valuesByLabel, ([label, values]) => ({
    label,
    values: Array.from(values, ([value, count]) => ({ count, value })),
  })).filter((characteristic) => characteristic.values.length > 1)
}

function readCharacteristicFilters(params: URLSearchParams): Record<string, string[]> {
  const filters: Record<string, string[]> = {}

  for (const rawFilter of params.getAll('filter')) {
    try {
      const filter = JSON.parse(rawFilter) as { label?: unknown; value?: unknown }

      if (typeof filter.label === 'string' && typeof filter.value === 'string') {
        filters[filter.label] = [...(filters[filter.label] ?? []), filter.value]
      }
    } catch {
      // Ignore invalid filter parameters.
    }
  }

  return filters
}

function pruneCharacteristicFilters(
  filters: Record<string, string[]>,
  options: CharacteristicFilterOption[],
) {
  const availableValues = new Map(
    options.map((option) => [option.label, new Set(option.values.map((item) => item.value))]),
  )

  return Object.fromEntries(
    Object.entries(filters).flatMap(([label, values]) => {
      const allowedValues = availableValues.get(label)
      const nextValues = allowedValues ? values.filter((value) => allowedValues.has(value)) : []

      return nextValues.length > 0 ? [[label, nextValues]] : []
    }),
  )
}

function toggleCharacteristic(filters: Record<string, string[]>, label: string, value: string) {
  const currentValues = filters[label] ?? []
  const values = currentValues.includes(value)
    ? currentValues.filter((item) => item !== value)
    : [...currentValues, value]

  if (values.length === 0) {
    const { [label]: _removed, ...rest } = filters
    return rest
  }

  return { ...filters, [label]: values }
}
