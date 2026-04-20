'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { useEffect, useMemo, useState, type ReactNode } from 'react'

import compareIcon from '@public/icon/header/compare.svg'

import SiteFooter from '../../components/SiteFooter'
import {
  formatPrice,
  type ProductCategory,
  type ProductData,
  type ProductId,
} from '../../data/products'
import { useCommerce } from '../../components/providers/CommerceProvider'

const footerCopyTitle = 'Професійні апарати вакуумного масажу V-NRG'
const footerCopyBody =
  'Апарати вакуумного масажу V-NRG — це інноваційне обладнання європейської якості для салонів краси, спа-центрів та приватних кабінетів. Наша продукція сертифікована згідно з міжнародними стандартами CE та ISO 9001:2015.'
const footerCopyTitleSecondary = 'Переваги вакуумного масажу'
const footerCopyBodySecondary =
  'Вакуумний масаж ефективно стимулює кровообіг, покращує лімфодренаж, зменшує прояви целюліту та сприяє корекції фігури. Процедури з використанням апаратів V-NRG дозволяють досягти видимих результатів вже після 3-5 сеансів.'

const ITEMS_PER_PAGE = 5

type ViewMode = 'grid' | 'list'
type SortOption = 'popular' | 'price-asc' | 'price-desc'
type PowerBand = 'under-1000' | 'over-1000'

type CatalogItem = ProductData & {
  category: ProductCategory
  maniples: number
  powerWatts: number
  summary: string
  uid: string
}

const categoryLabels: Record<ProductCategory, string> = {
  accessories: 'Аксесуари',
  chairs: 'Стільці для масажу',
  components: 'Комплектуючі',
  materials: 'Розхідники',
  physiotherapy: 'Апарати фізіотерапії',
  vacuum: 'Апарати вакуумного масажу',
}

const categoryOptions: ProductCategory[] = [
  'vacuum',
  'physiotherapy',
  'components',
  'materials',
  'accessories',
  'chairs',
]

const powerLabels: Record<PowerBand, string> = {
  'over-1000': 'понад 1000 Вт',
  'under-1000': 'до 1000 Вт',
}

export default function VacuumMassageCatalogPage() {
  const { addToCart, isInCompare, products, toggleCompare } = useCommerce()
  const [sharedProductId, setSharedProductId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('vacuum')
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

  const normalizedQuery = searchQuery.trim().toLowerCase()

  const filteredProducts = catalogItems.filter((item) => {
    const matchesSearch =
      normalizedQuery.length === 0 ||
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.summary.toLowerCase().includes(normalizedQuery) ||
      item.listFeatures.some((feature) => feature.toLowerCase().includes(normalizedQuery))

    const matchesCategory = item.category === selectedCategory
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
    setSelectedCategory('vacuum')
    setSelectedModels(modelOptions.map((option) => option.id))
    setSelectedManiples(maniplesOptions)
    setSelectedPowerBands(['under-1000', 'over-1000'])
    setSortOption('popular')
    setCurrentPage(0)
  }

  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
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

        <section className="grid items-start gap-5 lg:grid-cols-[400px_minmax(0,1fr)]">
          <aside className="flex flex-col gap-5">
            <h2 className="text-[42px] font-medium leading-[145%] text-[#22354A]">Фільтр</h2>

            <label className="flex h-20 items-center gap-4 rounded-[40px] bg-white px-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
              <SearchIcon />
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
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
                    onClick={() => setSelectedCategory(category)}
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
                    onClick={() =>
                      setSelectedModels((current) => toggleSelection(current, model.id))
                    }
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
                    onClick={() =>
                      setSelectedManiples((current) => toggleSelection(current, maniples))
                    }
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
                    onClick={() =>
                      setSelectedPowerBands((current) => toggleSelection(current, band))
                    }
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

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 rounded-[20px] bg-white px-6 py-4 shadow-[0_20px_60px_rgba(34,53,74,0.04)] sm:flex-row sm:items-center sm:justify-between">
              <div className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                Знайдено: <span className="font-bold text-[#4FACF5]">{sortedProducts.length}</span>{' '}
                товарів
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative">
                  <select
                    value={sortOption}
                    onChange={(event) => setSortOption(event.target.value as SortOption)}
                    className="h-11 appearance-none rounded-[40px] border border-[#D5E0E8] bg-white px-4 pr-11 text-[16px] font-medium leading-[145%] text-[#22354A] outline-none"
                  >
                    <option value="popular">За популярністю</option>
                    <option value="price-asc">Спочатку дешевші</option>
                    <option value="price-desc">Спочатку дорожчі</option>
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                    <ChevronDownIcon />
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <ViewToggleButton
                    active={viewMode === 'grid'}
                    label="Сітка"
                    onClick={() => setViewMode('grid')}
                  >
                    <GridIcon active={viewMode === 'grid'} />
                  </ViewToggleButton>
                  <ViewToggleButton
                    active={viewMode === 'list'}
                    label="Список"
                    onClick={() => setViewMode('list')}
                  >
                    <ListIcon active={viewMode === 'list'} />
                  </ViewToggleButton>
                </div>
              </div>
            </div>

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
              <div className="grid gap-5 lg:grid-cols-2">
                {paginatedProducts.map((product, index) => (
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
                          onClick={() => toggleCompare(product.id)}
                          aria-label={`Додати ${product.title} до порівняння`}
                          className={`flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-[0_12px_30px_rgba(34,53,74,0.12)] transition-colors ${
                            isInCompare(product.id) ? 'text-[#4FACF5]' : 'text-[#22354A]'
                          }`}
                        >
                          <Image src={compareIcon} alt="" aria-hidden="true" className="h-[18px] w-[18px]" />
                        </button>

                        <button
                          type="button"
                          onClick={() => void handleShare(product.title, product.href, product.uid)}
                          aria-label={`Поділитися ${product.title}`}
                          className={`flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-[0_12px_30px_rgba(34,53,74,0.12)] transition-colors ${
                            sharedProductId === product.uid ? 'text-[#4FACF5]' : 'text-[#22354A]'
                          }`}
                        >
                          <ShareIcon />
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
                          onClick={() => addToCart(product.id)}
                          aria-label={`Додати ${product.title} до кошика`}
                          className="text-[#4FACF5] transition-opacity hover:opacity-70"
                        >
                          <CartIcon />
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
            ) : (
              <div className="flex flex-col gap-5">
                {paginatedProducts.map((product, index) => (
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
                            onClick={() => addToCart(product.id)}
                            aria-label={`Додати ${product.title} до кошика`}
                            className="text-[#4FACF5] transition-opacity hover:opacity-70"
                          >
                            <CartIcon />
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
            )}

            <div className="flex flex-col gap-4 rounded-[24px] bg-white px-8 py-6 shadow-[0_20px_60px_rgba(34,53,74,0.04)] sm:flex-row sm:items-center sm:justify-between">
              <div className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                Показано {rangeStart}-{rangeEnd} із {sortedProducts.length} товарів
              </div>

              <div className="flex items-center gap-3">
                <PaginationArrowButton
                  direction="left"
                  disabled={currentPage === 0}
                  label="Попередня сторінка"
                  onClick={() => setCurrentPage((page) => Math.max(0, page - 1))}
                />

                <div className="flex items-center gap-3">
                  {Array.from({ length: totalPages }, (_, pageIndex) => (
                    <PaginationNumber
                      key={`page-${pageIndex}`}
                      active={pageIndex === currentPage}
                      onClick={() => setCurrentPage(pageIndex)}
                    >
                      {pageIndex + 1}
                    </PaginationNumber>
                  ))}
                </div>

                <PaginationArrowButton
                  direction="right"
                  disabled={currentPage >= totalPages - 1}
                  label="Наступна сторінка"
                  onClick={() => setCurrentPage((page) => Math.min(totalPages - 1, page + 1))}
                />
              </div>
            </div>
          </div>
        </section>

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
                <ReadMoreArrow />
              </span>
            </button>
          </div>
        </section>
      </div>

      <SiteFooter />
    </div>
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
          <ChevronUpIcon />
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
      <RadioIcon checked={checked} />
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
      <CheckboxIcon checked={checked} />
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

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
        stroke="#22354A"
        strokeWidth="1.5"
      />
      <path d="M12.75 12.75L15.75 15.75" stroke="#22354A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.38199 11.9219L14.4757 5.85938C14.7569 5.54688 14.7569 5.07813 14.4757 4.79688L13.757 4.07813C13.4757 3.79688 13.007 3.79688 12.6945 4.07813L7.85074 8.89063L3.03824 4.07813C2.72574 3.79688 2.25699 3.79688 1.97574 4.07813L1.25699 4.79688C0.975744 5.07812 0.975744 5.54687 1.25699 5.85938L7.35074 11.9219C7.63199 12.2031 8.10074 12.2031 8.38199 11.9219Z"
        fill="#22354A"
      />
    </svg>
  )
}

function ChevronUpIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5732 6.11719L21.7138 15.2109C22.1357 15.6797 22.1357 16.3828 21.7138 16.8047L20.6357 17.8828C20.2138 18.3047 19.5107 18.3047 19.042 17.8828L11.7763 10.6641L4.55758 17.8828C4.08883 18.3047 3.38571 18.3047 2.96384 17.8828L1.88571 16.8047C1.46384 16.3828 1.46384 15.6797 1.88571 15.2109L11.0263 6.11719C11.4482 5.69531 12.1513 5.69531 12.5732 6.11719Z"
        fill="#22354A"
      />
    </svg>
  )
}

function RadioIcon({ checked }: { checked: boolean }) {
  return checked ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#4FACF5" />
      <circle cx="12" cy="12" r="5" fill="white" />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#D5E0E8" strokeWidth="2" />
    </svg>
  )
}

function CheckboxIcon({ checked }: { checked: boolean }) {
  return checked ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#4FACF5" />
      <path
        d="M9.33301 15.9188L5.41401 11.9998C5.22648 11.8123 4.97217 11.707 4.70701 11.707C4.44185 11.707 4.18754 11.8123 4.00001 11.9998C3.81254 12.1873 3.70721 12.4416 3.70721 12.7068C3.70721 12.972 3.81254 13.2263 4.00001 13.4138L7.91901 17.3328C8.10474 17.5186 8.32525 17.666 8.56795 17.7666C8.81066 17.8671 9.0708 17.9189 9.33351 17.9189C9.59622 17.9189 9.85636 17.8671 10.0991 17.7666C10.3418 17.666 10.5623 17.5186 10.748 17.3328L20 8.08081C20.1875 7.89328 20.2928 7.63897 20.2928 7.37381C20.2928 7.10865 20.1875 6.85434 20 6.66681C19.8125 6.47934 19.5582 6.37402 19.293 6.37402C19.0278 6.37402 18.7735 6.47934 18.586 6.66681L9.33301 15.9188Z"
        fill="white"
      />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="22" height="22" rx="4" stroke="#D5E0E8" strokeWidth="2" />
    </svg>
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

function GridIcon({ active = false }: { active?: boolean }) {
  const color = active ? 'white' : '#22354A'

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 7.5H17.5"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 2.5V17.5"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 2.5V17.5"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ListIcon({ active = false }: { active?: boolean }) {
  const color = active ? 'white' : '#22354A'

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.5 10H2.50833"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 15H2.50833"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 5H2.50833"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66663 10H17.5"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66663 15H17.5"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66663 5H17.5"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.6673 29.3327C11.4037 29.3327 12.0007 28.7357 12.0007 27.9993C12.0007 27.263 11.4037 26.666 10.6673 26.666C9.93094 26.666 9.33398 27.263 9.33398 27.9993C9.33398 28.7357 9.93094 29.3327 10.6673 29.3327Z"
        stroke="#4FACF5"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.3333 29.3327C26.0697 29.3327 26.6667 28.7357 26.6667 27.9993C26.6667 27.263 26.0697 26.666 25.3333 26.666C24.597 26.666 24 27.263 24 27.9993C24 28.7357 24.597 29.3327 25.3333 29.3327Z"
        stroke="#4FACF5"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.73328 2.7334H5.39994L8.94661 19.2934C9.07671 19.8999 9.41417 20.442 9.90089 20.8265C10.3876 21.2111 10.9932 21.4139 11.6133 21.4001H24.6533C25.2602 21.3991 25.8486 21.1911 26.3213 20.8105C26.794 20.4299 27.1228 19.8994 27.2533 19.3067L29.4533 9.40006H6.82661"
        stroke="#4FACF5"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CompareIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 8H21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M7 14H17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M7 20H21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="19" cy="14" r="2.5" fill="currentColor" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="14" r="2.5" fill="currentColor" />
      <circle cx="20" cy="8" r="2.5" fill="currentColor" />
      <circle cx="20" cy="20" r="2.5" fill="currentColor" />
      <path d="M10.2 12.9L17.8 9.1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M10.2 15.1L17.8 18.9"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
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
      <PaginationArrow direction={direction} />
    </button>
  )
}

function PaginationArrow({ direction }: { direction: 'left' | 'right' }) {
  const path = direction === 'left' ? 'M10 4L4 9L10 14' : 'M6 4L12 9L6 14'

  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d={path}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ReadMoreArrow() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.769 0C12.5085 0 12.2587 0.10346 12.0746 0.28762C11.8904 0.47178 11.787 0.721555 11.787 0.981997V24.5499C11.787 24.8104 11.8904 25.0601 12.0746 25.2443C12.2587 25.4285 12.5085 25.5319 12.769 25.5319C13.0294 25.5319 13.2792 25.4285 13.4633 25.2443C13.6475 25.0601 13.751 24.8104 13.751 24.5499V0.981997C13.751 0.721555 13.6475 0.47178 13.4633 0.28762C13.2792 0.10346 13.0294 0 12.769 0Z"
        fill="white"
      />
      <path
        d="M4.2192 16.0001C4.03531 16.1842 3.93202 16.4338 3.93202 16.694C3.93202 16.9543 4.03531 17.2038 4.2192 17.388L12.0751 25.2439C12.2593 25.4278 12.5089 25.5311 12.7691 25.5311C13.0293 25.5311 13.2789 25.4278 13.463 25.2439L21.319 17.388C21.4925 17.2018 21.5869 16.9556 21.5824 16.7012C21.5779 16.4468 21.4749 16.2041 21.2949 16.0241C21.115 15.8442 20.8723 15.7412 20.6179 15.7367C20.3635 15.7322 20.1173 15.8266 19.9311 16.0001L12.7691 23.1621L5.60709 16.0001C5.42297 15.8162 5.17338 15.7129 4.91315 15.7129C4.65292 15.7129 4.40333 15.8162 4.2192 16.0001Z"
        fill="white"
      />
    </svg>
  )
}

function matchesPowerBandValue(powerWatts: number, band: PowerBand) {
  if (band === 'under-1000') {
    return powerWatts <= 1000
  }

  return powerWatts > 1000
}

function toggleSelection<T>(items: T[], value: T) {
  return items.includes(value) ? items.filter((item) => item !== value) : [...items, value]
}
