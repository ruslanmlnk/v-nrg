import type { Order } from '@/payload-types'

export const ACCOUNT_ORDERS_PAGE_SIZE = 5

export type AccountOrder = {
  id: string
  createdAt: string
  customerName: string
  email: string
  phone: string
  status: Order['orderStatus']
  paymentStatus: Order['paymentStatus']
  canCancel: boolean
  paymentUrl: string | null
  total: number
  items: { productId: string; title: string; quantity: number; price: number; total: number }[]
}

export type AccountOrdersPage = {
  orders: AccountOrder[]
  totalDocs: number
  totalPages: number
}

export function toAccountOrder(order: Order): AccountOrder {
  const offline = order.paymentMethod === 'invoice' || order.paymentMethod === 'cash-on-delivery'
  const monobank =
    order.monobank && typeof order.monobank === 'object' && !Array.isArray(order.monobank)
      ? order.monobank
      : null
  const rawUrl = monobank?.pageUrl || monobank?.redirectUrl
  let paymentUrl: string | null = null
  if (
    typeof rawUrl === 'string' &&
    order.paymentApprovalStatus === 'confirmed' &&
    order.paymentStatus === 'awaiting_payment' &&
    ['new', 'processing'].includes(order.orderStatus)
  ) {
    try {
      const url = new URL(rawUrl)
      if (url.protocol === 'https:') paymentUrl = url.href
    } catch {
      /* Ignore invalid stored payment links. */
    }
  }
  return {
    id: order.orderNumber,
    createdAt: order.createdAt,
    customerName: `${order.firstName} ${order.lastName}`.trim(),
    email: order.customerEmail,
    phone: order.phone,
    status: order.orderStatus,
    paymentStatus: order.paymentStatus,
    canCancel:
      order.orderStatus === 'new' &&
      ['awaiting_payment', 'processing', 'failed'].includes(order.paymentStatus) &&
      order.monobank == null &&
      (offline ||
        (order.paymentApprovalStatus === 'pending_admin' && order.paymentStatus !== 'processing')),
    paymentUrl,
    total: order.total,
    items: order.items.map((item) => ({
      productId: String(
        typeof item.product === 'object' ? (item.product?.id ?? '') : (item.product ?? ''),
      ),
      title: item.title,
      quantity: item.quantity,
      price: item.price,
      total: item.total,
    })),
  }
}
