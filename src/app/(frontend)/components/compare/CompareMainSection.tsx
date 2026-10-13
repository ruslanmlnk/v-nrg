'use client'

import { useState } from 'react'
import { useCommerce } from '../providers/CommerceProvider'
import { MAX_COMPARE_PRODUCTS } from './data'

import { CompareAddCard } from './CompareAddCard'
import { CompareEmptyState } from './CompareEmptyState'
import { CompareFeaturesTable } from './CompareFeaturesTable'
import { CompareProductCard } from './CompareProductCard'
import { CompareToolbar } from './CompareToolbar'

export function CompareMainSection() {
  const {
    addToCart,
    compareProducts: allCompareProducts,
    categories,
    removeFromCompare,
  } = useCommerce()
  const [selectedCategory, setSelectedCategory] = useState('')
  const comparisonCategories = Array.from(
    new Map(
      allCompareProducts.map((product) => [
        product.category,
        {
          slug: product.category,
          title:
            categories.find((category) => category.slug === product.category)?.title ||
            product.categoryLabel,
        },
      ]),
    ).values(),
  )
  const activeCategory = comparisonCategories.some((category) => category.slug === selectedCategory)
    ? selectedCategory
    : (comparisonCategories[0]?.slug ?? '')
  const compareProducts = allCompareProducts.filter(
    (product) => product.category === activeCategory,
  )
  const categoryHref =
    categories.find((category) => category.slug === activeCategory)?.href ?? '/catalog'

  const featureLabels = Array.from(
    new Set(
      compareProducts.flatMap((product) => product.characteristics.map((feature) => feature.label)),
    ),
  )
  const compareColumnsStyle =
    compareProducts.length > 0
      ? { gridTemplateColumns: `repeat(${compareProducts.length}, minmax(0, 1fr))` }
      : undefined

  return (
    <section className="flex flex-col gap-5">
      <CompareToolbar
        categories={comparisonCategories}
        selectedCategory={activeCategory}
        onCategoryChange={setSelectedCategory}
      />

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

        {compareProducts.length < MAX_COMPARE_PRODUCTS ? (
          <CompareAddCard href={categoryHref} />
        ) : null}
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
