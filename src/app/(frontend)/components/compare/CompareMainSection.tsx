'use client'

import { useCommerce } from '../providers/CommerceProvider'
import { MAX_COMPARE_PRODUCTS } from './data'

import { CompareAddCard } from './CompareAddCard'
import { CompareEmptyState } from './CompareEmptyState'
import { CompareFeaturesTable } from './CompareFeaturesTable'
import { CompareProductCard } from './CompareProductCard'
import { CompareToolbar } from './CompareToolbar'

export function CompareMainSection() {
  const { addToCart, compareProducts, removeFromCompare } = useCommerce()

  const featureLabels = Array.from(
    new Set(
      compareProducts.flatMap((product) => product.compareFeatures.map((feature) => feature.label)),
    ),
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
