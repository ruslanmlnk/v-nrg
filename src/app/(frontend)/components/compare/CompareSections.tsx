'use client'

import type { CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

import PageHero from '../shared/PageHero'
import ProductImagePlaceholder from '../shared/ProductImagePlaceholder'
import { useCommerce } from '../providers/CommerceProvider'
import { formatPrice, type ProductData } from '../../data/products'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import cartIconAsset from '@public/icon/generated/compare-compare-page-cart.svg'
import chevronDownIconAsset from '@public/icon/generated/compare-compare-page-chevron-down.svg'
import closeIconAsset from '@public/icon/generated/compare-compare-page-close.svg'
import plusIconAsset from '@public/icon/generated/compare-compare-page-plus.svg'

import { MAX_COMPARE_PRODUCTS } from './data'

export function CompareHeroSection() {
  return <PageHero currentLabel="Порівняння товарів" title="Порівняння товарів" />
}

export function CompareMainSection() {
  const { addToCart, compareProducts, removeFromCompare } = useCommerce()

  const featureLabels = Array.from(
    new Set(compareProducts.flatMap((product) => product.compareFeatures.map((feature) => feature.label))),
  )
  const compareColumnsStyle =
    compareProducts.length > 0
      ? { gridTemplateColumns: `repeat(${compareProducts.length}, minmax(0, 1fr))` }
      : undefined

  return (
    <section className="flex flex-col gap-5">
      <CompareToolbar />

      <div className="flex flex-col gap-5 xl:flex-row xl:items-stretch">
        {compareProducts.map((product, index) => (
          <CompareProductCard
            key={product.id}
            product={product}
            index={index}
            onAddToCart={() => addToCart(product.id)}
            onRemove={() => removeFromCompare(product.id)}
          />
        ))}

        {compareProducts.length < MAX_COMPARE_PRODUCTS ? <CompareAddCard /> : null}
      </div>

      {compareProducts.length < 2 ? (
        <CompareEmptyState compareCount={compareProducts.length} />
      ) : (
        <CompareFeaturesTable
          compareColumnsStyle={compareColumnsStyle}
          compareProducts={compareProducts}
          featureLabels={featureLabels}
        />
      )}
    </section>
  )
}

function CompareToolbar() {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      <h2 className="text-[28px] font-medium leading-[145%] text-[#22354A]">Порівняння товарів</h2>

      <div className="flex items-center gap-6 rounded-[20px] bg-white px-8 py-6 text-[20px] font-medium leading-[145%] text-[#22354A] shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
        <span>Апарати вакуумного масажу</span>
        <IconAsset src={chevronDownIconAsset} width={16} height={16} />
      </div>
    </div>
  )
}

function CompareProductCard({
  index,
  onAddToCart,
  onRemove,
  product,
}: {
  index: number
  onAddToCart: () => void
  onRemove: () => void
  product: ProductData
}) {
  return (
    <motion.div
      className="xl:w-[400px] xl:flex-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.3 }}
    >
      <article className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_20px_60px_rgba(34,53,74,0.05)]">
        <div className="relative h-[300px] overflow-hidden rounded-[20px] border-2 border-transparent bg-white transition-colors duration-200 group-hover:border-[#4FACF5]">
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Прибрати ${product.title} з порівняння`}
            className="absolute right-3 top-3 z-10 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white text-[#22354A] shadow-[0_8px_24px_rgba(34,53,74,0.1)]"
          >
            <IconAsset src={closeIconAsset} width={18} height={18} />
          </button>

          {product.compareImage ? (
            <Image
              src={product.compareImage}
              alt={product.title}
              fill
              className="object-contain p-6"
              sizes="(min-width: 1280px) 400px, 100vw"
            />
          ) : (
            <ProductImagePlaceholder className="absolute inset-0" />
          )}
        </div>

        <div className="flex flex-1 flex-col gap-4 px-8 py-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A] transition-colors duration-200 group-hover:text-[#4FACF5]">
              {product.title}
            </h3>
            <p className="text-[16px] font-medium leading-[165%] text-[#22354A]">
              {product.details || 'Немає даних'}
            </p>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="text-[24px] font-bold leading-[145%] text-[#22354A]">{formatPrice(product.price)}</div>
            <button
              type="button"
              onClick={onAddToCart}
              aria-label={`Додати ${product.title} в кошик`}
              className="text-[#4FACF5] transition-opacity hover:opacity-70"
            >
              <IconAsset src={cartIconAsset} width={32} height={32} />
            </button>
          </div>

          <Link href={product.href} className="text-[18px] font-bold leading-[165%] text-[#4FACF5]">
            Детальніше
          </Link>
        </div>
      </article>
    </motion.div>
  )
}

function CompareAddCard() {
  return (
    <Link
      href="/catalog/aparaty-vakuumnoho-masazhu"
      className="flex min-h-[460px] flex-col items-center justify-center gap-6 rounded-[20px] border border-dashed border-[#D5E0E8] bg-white px-8 text-center shadow-[0_20px_60px_rgba(34,53,74,0.04)] xl:flex-1 xl:self-stretch"
    >
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(79,172,245,0.1)] text-[#4FACF5]">
        <IconAsset src={plusIconAsset} width={40} height={40} />
      </span>
      <span className="text-[18px] font-bold leading-[145%] text-[#4FACF5]">Додати ще модель</span>
    </Link>
  )
}

function CompareEmptyState({ compareCount }: { compareCount: number }) {
  return (
    <div className="rounded-[20px] bg-white px-8 py-8 text-[24px] font-medium leading-[145%] text-[#22354A] shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
      {compareCount === 0 ? 'Додайте товари для порівняння' : 'Недостатньо товарів для порівняння'}
    </div>
  )
}

function CompareFeaturesTable({
  compareColumnsStyle,
  compareProducts,
  featureLabels,
}: {
  compareColumnsStyle?: CSSProperties
  compareProducts: ProductData[]
  featureLabels: string[]
}) {
  return (
    <div className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
      {featureLabels.length === 0 ? (
        <div className="text-[18px] font-medium leading-[165%] text-[#6F8498]">
          Характеристики для порівняння відсутні.
        </div>
      ) : (
      <div className="flex flex-col gap-8">
        <section className="border-b border-[#D5E0E8] pb-4">
          <div className="mb-4 text-[24px] font-medium leading-[145%] text-[#22354A]">Характеристика</div>
          <div className="grid gap-4 md:gap-[81px]" style={compareColumnsStyle}>
            {compareProducts.map((product) => (
              <div key={`${product.id}-heading`} className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                {product.title}
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col gap-8">
          {featureLabels.map((label, featureIndex) => (
            <section
              key={label}
              className={`flex flex-col gap-4 ${
                featureIndex === featureLabels.length - 1 ? '' : 'border-b border-[#D5E0E8] pb-4'
              }`}
            >
              <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">{label}</h3>
              <div className="grid gap-4 md:gap-[81px]" style={compareColumnsStyle}>
                {compareProducts.map((product) => (
                  <div key={`${product.id}-${label}`} className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                    {product.compareFeatures.find((feature) => feature.label === label)?.value}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      )}
    </div>
  )
}
