import type { ProductData, ProductId } from '../../data/products'
import { MAX_COMPARE_PRODUCTS } from './data'

export function toggleComparedProduct(
  ids: ProductId[],
  productId: ProductId,
  products: Record<ProductId, Pick<ProductData, 'category'> | undefined>,
): ProductId[] {
  const product = products[productId]
  if (!product) return ids
  if (ids.includes(productId)) return ids.filter((id) => id !== productId)

  const categoryIds = ids.filter((id) => products[id]?.category === product.category)
  // Keep the newest three in this category without evicting other categories.
  const removed = new Set(
    categoryIds.slice(0, Math.max(0, categoryIds.length - MAX_COMPARE_PRODUCTS + 1)),
  )
  return [...ids.filter((id) => !removed.has(id)), productId]
}
