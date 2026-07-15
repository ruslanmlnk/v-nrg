'use client'

import { useEffect, useMemo, useState } from 'react'

import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import chevronDownIconAsset from '@public/icon/generated/catalog-chevron-down.svg'
import { translate } from '../../lib/siteTranslations'
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
  type CatalogModelKey,
  getCatalogModelKey,
  ITEMS_PER_PAGE,
  matchesPowerBandValue,
  type CatalogCategoryOption,
  type CatalogItem,
  type PowerBand,
  type SortOption,
  type ViewMode,
} from './catalogData'

export function CatalogCategoryPage({ routeCategory }: { routeCategory: string }) {
  const { addToCart, categories, isInCompare, products, toggleCompare } = useCommerce()
  const { locale } = useSitePreferences()
  const [sharedProductId, setSharedProductId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(routeCategory || null)
  const [selectedModelKeys, setSelectedModelKeys] = useState<CatalogModelKey[]>([])
  const [selectedManiples, setSelectedManiples] = useState<number[]>([])
  const [selectedPowerBands, setSelectedPowerBands] = useState<PowerBand[]>([])
  const [sortOption, setSortOption] = useState<SortOption>('popular')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

  const catalogItems = useMemo<CatalogItem[]>(
    () =>
      products.map((product, index) => ({
        ...product,
        maniples: product.maniples ?? 0,
        modelKey: getCatalogModelKey(product.title),
        powerWatts: product.powerWatts ?? 0,
        summary: product.shortDescription,
        uid: `${product.id}-${index}`,
      })),
    [products],
  )

  const modelOptions = useMemo(() => {
    const modelsByKey = new Map<CatalogModelKey, { key: CatalogModelKey; title: string }>()

    for (const product of catalogItems) {
      if (!modelsByKey.has(product.modelKey)) {
        modelsByKey.set(product.modelKey, { key: product.modelKey, title: product.title })
      }
    }

    return Array.from(modelsByKey.values())
  }, [catalogItems])

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

  const maniplesOptions = useMemo(
    () =>
      Array.from(new Set(catalogItems.map((item) => item.maniples).filter(Boolean))).sort(
        (left, right) => left - right,
      ),
    [catalogItems],
  )

  useEffect(() => {
    setSelectedModelKeys((current) => {
      const availableKeys = modelOptions.map((option) => option.key)
      return current.filter((key) => availableKeys.includes(key))
    })
  }, [modelOptions])

  useEffect(() => {
    setSelectedManiples((current) => {
      return current.filter((maniples) => maniplesOptions.includes(maniples))
    })
  }, [maniplesOptions])

  useEffect(() => {
    setSelectedCategory(routeCategory || null)
  }, [routeCategory])

  const normalizedQuery = searchQuery.trim().toLowerCase()

  const filteredProducts = catalogItems.filter((item) => {
    const matchesSearch =
      normalizedQuery.length === 0 ||
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.summary.toLowerCase().includes(normalizedQuery) ||
      item.listFeatures.some((feature) => feature.toLowerCase().includes(normalizedQuery))

    const matchesCategory = !selectedCategory || item.category === selectedCategory
    const matchesModel =
      selectedModelKeys.length === 0 || selectedModelKeys.includes(item.modelKey)
    const matchesManiples =
      selectedManiples.length === 0 || selectedManiples.includes(item.maniples)
    const matchesPowerBand =
      selectedPowerBands.length === 0 ||
      selectedPowerBands.some((band) => matchesPowerBandValue(item.powerWatts, band))

    return matchesSearch && matchesCategory && matchesModel && matchesManiples && matchesPowerBand
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
  }, [
    searchQuery,
    selectedCategory,
    selectedManiples,
    selectedModelKeys,
    selectedPowerBands,
    sortOption,
    viewMode,
  ])

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages - 1))
  }, [totalPages])

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
    setSelectedModelKeys([])
    setSelectedManiples([])
    setSelectedPowerBands([])
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
              maniplesOptions={maniplesOptions}
              modelOptions={modelOptions}
              onSearchChange={setSearchQuery}
              onSelectCategory={setSelectedCategory}
              onToggleManiples={(maniples) =>
                setSelectedManiples((current) => toggleSelection(current, maniples))
              }
              onToggleModel={(key) =>
                setSelectedModelKeys((current) => toggleSelection(current, key))
              }
              onTogglePowerBand={(band) =>
                setSelectedPowerBands((current) => toggleSelection(current, band))
              }
              resetFilters={resetFilters}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              selectedManiples={selectedManiples}
              selectedModelKeys={selectedModelKeys}
              selectedPowerBands={selectedPowerBands}
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
              maniplesOptions={maniplesOptions}
              modelOptions={modelOptions}
              onSearchChange={setSearchQuery}
              onSelectCategory={setSelectedCategory}
              onToggleManiples={(maniples) =>
                setSelectedManiples((current) => toggleSelection(current, maniples))
              }
              onToggleModel={(key) =>
                setSelectedModelKeys((current) => toggleSelection(current, key))
              }
              onTogglePowerBand={(band) =>
                setSelectedPowerBands((current) => toggleSelection(current, band))
              }
              resetFilters={resetFilters}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              selectedManiples={selectedManiples}
              selectedModelKeys={selectedModelKeys}
              selectedPowerBands={selectedPowerBands}
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

function toggleSelection<T>(items: T[], value: T) {
  return items.includes(value) ? items.filter((item) => item !== value) : [...items, value]
}
