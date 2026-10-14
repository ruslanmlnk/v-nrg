import { expect, it } from 'vitest'
import type { Order } from '@/payload-types'
import { getCardPaymentStatus, getPaymentWebhookUpdate } from '@/lib/orderPaymentWebhook'
import { toAccountOrder } from '@/lib/accountOrders'

const order: Order = {
  phone: '+380000000000',
  customerEmail: 'customer@example.com',
  total: 250,
  createdAt: '2026-10-14T10:00:00Z',
  updatedAt: '2026-10-14T10:00:00Z',
  id: 7,
  orderNumber: 'ORDER-7',
  firstName: 'Test',
  lastName: 'Customer',
  items: [],
  paymentApprovalStatus: 'confirmed',
  paymentMethod: 'card-online',
  paymentStatus: 'awaiting_payment',
  orderStatus: 'processing',
  monobank: { invoiceId: 'invoice-7', pageUrl: 'https://example.com/pay', raw: {} },
}

it('keeps the original payment link through created and processing webhooks', () => {
  let current = order
  for (const status of ['created', 'processing']) {
    const data = getPaymentWebhookUpdate(
      current,
      {
        invoiceId: 'invoice-7',
        status,
        raw: { status },
      },
      getCardPaymentStatus(status)!,
    )!
    current = { ...current, ...data }
    expect(current.monobank).toMatchObject({ pageUrl: 'https://example.com/pay' })
    expect(current.orderStatus).toBe('processing')
    expect(toAccountOrder(current).paymentUrl).toBe('https://example.com/pay')
  }
  expect(getCardPaymentStatus('created')).toBe('awaiting_payment')
  current = { ...current, ...getPaymentWebhookUpdate(current, { status: 'success' }, 'paid')! }
  expect(toAccountOrder(current).paymentUrl).toBeNull()
  expect(getPaymentWebhookUpdate(current, { status: 'created' }, 'awaiting_payment')).toBeNull()
})

it('preserves installment links and delivery states', () => {
  const data = getPaymentWebhookUpdate(
    {
      ...order,
      orderStatus: 'shipped',
      monobank: {
        redirectUrl: 'https://example.com/parts',
        partsCount: 5,
      },
    },
    { status: 'processing' },
    'processing',
  )!
  expect(data.orderStatus).toBe('shipped')
  expect(data.monobank).toMatchObject({ redirectUrl: 'https://example.com/parts', partsCount: 5 })
})

it('ignores older callbacks and hides terminal payment links', () => {
  expect(
    getPaymentWebhookUpdate(
      {
        ...order,
        monobank: {
          raw: { modifiedDate: '2026-10-14T12:00:00Z' },
        },
      },
      { raw: { modifiedDate: '2026-10-14T11:00:00Z' } },
      'processing',
    ),
  ).toBeNull()
  for (const paymentStatus of ['paid', 'failed', 'refunded'] as const) {
    expect(toAccountOrder({ ...order, paymentStatus }).paymentUrl).toBeNull()
  }
  expect(getCardPaymentStatus('unknown')).toBeNull()
})
