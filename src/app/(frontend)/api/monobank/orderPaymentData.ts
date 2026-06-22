import configPromise from '@payload-config'
import { getPayload } from 'payload'

type PaymentMethod = 'card-online' | 'monobank-parts'

type StoredOrderItem = {
  price?: unknown
  product?: unknown
  productId?: unknown
  quantity?: unknown
  title?: unknown
  total?: unknown
}

export async function getOrderPaymentData(orderNumber: string, paymentMethod: PaymentMethod) {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: 'orders',
    depth: 0,
    limit: 1,
    where: {
      orderNumber: {
        equals: orderNumber,
      },
    },
  })
  const order = docs[0]

  if (!order || order.paymentMethod !== paymentMethod) {
    return null
  }

  const items = normalizeStoredItems(order.items)
  const total = normalizeMoney(order.total)

  if (!total || items.length === 0) {
    return null
  }

  return {
    customerEmail: order.customerEmail,
    customerName: `${order.firstName} ${order.lastName}`.trim(),
    items,
    order,
    total,
  }
}

function normalizeStoredItems(value: unknown) {
  return (Array.isArray(value) ? value : [])
    .map((item) => {
      if (!item || typeof item !== 'object') {
        return null
      }

      const storedItem = item as StoredOrderItem
      const price = normalizeMoney(storedItem.price)
      const quantity = normalizeQuantity(storedItem.quantity)
      const title = typeof storedItem.title === 'string' ? storedItem.title.trim() : ''
      const productId =
        typeof storedItem.product === 'string' || typeof storedItem.product === 'number'
          ? String(storedItem.product)
          : typeof storedItem.product === 'object' && storedItem.product && 'id' in storedItem.product
            ? String(storedItem.product.id)
            : typeof storedItem.productId === 'string' || typeof storedItem.productId === 'number'
          ? String(storedItem.productId)
          : title

      if (!price || !quantity || !title || !productId) {
        return null
      }

      return {
        id: productId,
        price,
        quantity,
        title,
      }
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
}

function normalizeMoney(value: unknown) {
  return typeof value === 'number' && Number.isFinite(value) && value > 0
    ? Math.round(value * 100) / 100
    : 0
}

function normalizeQuantity(value: unknown) {
  return typeof value === 'number' && Number.isFinite(value) && value > 0 ? Math.floor(value) : 0
}
