'use client'

import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'next/navigation'

import { useCommerce } from '../../components/providers/CommerceProvider'
import {
  CatalogGrid,
  CatalogHero,
  CatalogInfoSection,
  CatalogList,
  CatalogPagination,
  CatalogSidebar,
  CatalogToolbar,
} from '../../components/catalog/CatalogSections'
import {
  ITEMS_PER_PAGE,
  matchesPowerBandValue,
  type CatalogCategoryOption,
  type CatalogItem,
  type PowerBand,
  type SortOption,
  type ViewMode,
} from '../../components/catalog/catalogData'
import { type ProductId } from '../../data/products'

export default function CatalogPage() {
  const params = useParams<{ category?: string }>()
  const routeCategory = typeof params.category === 'string' ? params.category : ''
  const { addToCart, categories, isInCompare, products, toggleCompare } = useCommerce()
  const [sharedProductId, setSharedProductId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(routeCategory)
  const [selectedModels, setSelectedModels] = useState<ProductId[]>([])
  const [selectedManiples, setSelectedManiples] = useState<number[]>([])
  const [selectedPowerBands, setSelectedPowerBands] = useState<PowerBand[]>([
    'under-1000',
    'over-1000',
  ])
  const [sortOption, setSortOption] = useState<SortOption>('popular')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [currentPage, setCurrentPage] = useState(0)

  const catalogItems = useMemo<CatalogItem[]>(
    () =>
      products.map((product, index) => ({
        ...product,
        maniples: product.maniples ?? 0,
        powerWatts: product.powerWatts ?? 0,
        summary: product.shortDescription,
        uid: `${product.id}-${index}`,
      })),
    [products],
  )

  const modelOptions = useMemo(
    () => catalogItems.map((product) => ({ id: product.id, title: product.title })),
    [catalogItems],
  )

  const categoryOptions = useMemo<CatalogCategoryOption[]>(() => {
    const options = new Map<string, CatalogCategoryOption>()

    for (const category of categories) {
      options.set(category.slug, {
        label: category.title,
        slug: category.slug,
      })
    }

    for (const item of catalogItems) {
      if (!options.has(item.category)) {
        options.set(item.category, {
          label: item.categoryLabel,
          slug: item.category,
        })
      }
    }

    return Array.from(options.values())
  }, [catalogItems, categories])

  const activeCategory =
    categories.find((category) => category.slug === selectedCategory) ??
    (selectedCategory ? null : (categories[0] ?? null))

  const maniplesOptions = useMemo(
    () =>
      Array.from(new Set(catalogItems.map((item) => item.maniples).filter(Boolean))).sort(
        (left, right) => left - right,
      ),
    [catalogItems],
  )

  useEffect(() => {
    setSelectedModels((current) => {
      const availableIds = modelOptions.map((option) => option.id)
      const keptIds = current.filter((id) => availableIds.includes(id))

      return keptIds.length > 0 ? keptIds : availableIds
    })
  }, [modelOptions])

  useEffect(() => {
    setSelectedManiples((current) => {
      const keptManiples = current.filter((maniples) => maniplesOptions.includes(maniples))

      return keptManiples.length > 0 ? keptManiples : maniplesOptions
    })
  }, [maniplesOptions])

  useEffect(() => {
    setSelectedCategory(routeCategory)
  }, [routeCategory])

  const normalizedQuery = searchQuery.trim().toLowerCase()

  const filteredProducts = catalogItems.filter((item) => {
    const matchesSearch =
      normalizedQuery.length === 0 ||
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.summary.toLowerCase().includes(normalizedQuery) ||
      item.listFeatures.some((feature) => feature.toLowerCase().includes(normalizedQuery))

    const matchesCategory = !selectedCategory || item.category === selectedCategory
    const matchesModel = selectedModels.length === 0 || selectedModels.includes(item.id)
    const matchesManiples =
      selectedManiples.length === 0 || selectedManiples.includes(item.maniples)
    const matchesPowerBand = selectedPowerBands.some((band) =>
      matchesPowerBandValue(item.powerWatts, band),
    )

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
    selectedModels,
    selectedPowerBands,
    sortOption,
    viewMode,
  ])

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages - 1))
  }, [totalPages])

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
    setSelectedCategory(routeCategory)
    setSelectedModels(modelOptions.map((option) => option.id))
    setSelectedManiples(maniplesOptions)
    setSelectedPowerBands(['under-1000', 'over-1000'])
    setSortOption('popular')
    setCurrentPage(0)
  }

  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
        <CatalogHero title={activeCategory?.title ?? 'Каталог'} />

        <section className="grid items-start gap-5 lg:grid-cols-[400px_minmax(0,1fr)]">
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
            onToggleModel={(id) => setSelectedModels((current) => toggleSelection(current, id))}
            onTogglePowerBand={(band) =>
              setSelectedPowerBands((current) => toggleSelection(current, band))
            }
            resetFilters={resetFilters}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            selectedManiples={selectedManiples}
            selectedModels={selectedModels}
            selectedPowerBands={selectedPowerBands}
          />

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
    </div>
  )
}

function toggleSelection<T>(items: T[], value: T) {
  return items.includes(value) ? items.filter((item) => item !== value) : [...items, value]
}
