import type { Order } from '@/payload-types'

export function getPaymentWebhookUpdate(
  order: Order,
  event: Record<string, unknown>,
  paymentStatus: Order['paymentStatus'],
) {
  const stored = asRecord(order.monobank)
  const previousDate = asRecord(stored.raw).modifiedDate
  const nextDate = asRecord(event.raw).modifiedDate
  if (
    typeof previousDate === 'string' &&
    typeof nextDate === 'string' &&
    Date.parse(nextDate) < Date.parse(previousDate)
  )
    return null

  // Late pending notifications must never undo a completed payment.
  if (
    order.paymentStatus === 'refunded' ||
    (order.paymentStatus === 'paid' && paymentStatus !== 'refunded')
  )
    return null

  return {
    monobank: {
      ...stored,
      ...Object.fromEntries(Object.entries(event).filter(([, value]) => value !== undefined)),
    },
    paymentStatus,
    orderStatus:
      order.orderStatus === 'new' &&
      (order.paymentApprovalStatus === 'confirmed' || paymentStatus === 'paid')
        ? ('processing' as const)
        : order.orderStatus,
  }
}

export function getCardPaymentStatus(status: unknown): Order['paymentStatus'] | null {
  switch (status) {
    case 'created':
      return 'awaiting_payment'
    case 'processing':
    case 'hold':
      return 'processing'
    case 'success':
      return 'paid'
    case 'failure':
    case 'expired':
      return 'failed'
    case 'reversed':
      return 'refunded'
    default:
      return null
  }
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {}
}
