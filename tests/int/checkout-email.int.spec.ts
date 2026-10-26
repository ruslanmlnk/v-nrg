import { beforeEach, describe, expect, it, vi } from 'vitest'
import { NextRequest } from 'next/server'
import { POST } from '@/app/(frontend)/api/forms/orders/route'
import { POST as verifyCode } from '@/app/(frontend)/api/forms/orders/verify-code/route'

const mocks = vi.hoisted(() => ({
  find: vi.fn(),
  create: vi.fn(),
  auth: vi.fn(),
  consume: vi.fn(),
  notify: vi.fn(),
}))
vi.mock('@payload-config', () => ({ default: {} }))
vi.mock('payload', () => ({ getPayload: async () => mocks }))
vi.mock('@/lib/applicationNotifications', () => ({ sendOrderNotification: mocks.notify }))
vi.mock('@/lib/checkoutEmailVerification', async (original) => ({
  ...(await original<object>()),
  consumeCheckoutCode: mocks.consume,
}))
const body = {
  orderNumber: 'VN-TEST-1234',
  firstName: 'Test',
  lastName: 'Customer',
  phone: '+380123456789',
  customerEmail: ' Guest@Example.com ',
  paymentMethod: 'card-online',
  items: [{ id: '1', quantity: 2, price: 1 }],
  verificationId: 'challenge',
  verificationCode: '123456',
}
const submit = (overrides = {}) =>
  POST(
    new NextRequest('https://example.com/api/forms/orders', {
      method: 'POST',
      body: JSON.stringify({ ...body, ...overrides }),
    }),
  )
beforeEach(() => {
  vi.clearAllMocks()
  mocks.auth.mockResolvedValue({ user: null })
  mocks.consume.mockResolvedValue(true)
  mocks.notify.mockResolvedValue(undefined)
  mocks.find.mockImplementation(async ({ collection }) => ({
    docs:
      collection === 'currencies'
        ? [{ rate: 48 }]
        : collection === 'products'
          ? [{ id: 1, title: 'Product', price: 100 }]
          : [{ id: 7, role: 'dealer', dealerDiscountPercent: 50 }],
  }))
  mocks.create.mockImplementation(async ({ data }) => ({ id: 12, ...data }))
})
describe('Verified checkout ownership', () => {
  it('verifies the code separately without creating an order or consuming the code', async () => {
    const response = await verifyCode(new NextRequest('https://example.com/api/forms/orders/verify-code', {
      method: 'POST', body: JSON.stringify({ email: body.customerEmail, verificationId: 'challenge', code: '123456' }),
    }))
    expect(response.status).toBe(200)
    expect(await response.json()).toEqual({ verified: true })
    expect(mocks.consume).toHaveBeenCalledWith(mocks, 'guest@example.com', 'challenge', '123456', false)
    expect(mocks.create).not.toHaveBeenCalled()
  })
  it('links a guest to the verified email account without granting dealer discounts', async () => {
    expect((await submit()).status).toBe(200)
    expect(mocks.consume).toHaveBeenCalledWith(mocks, 'guest@example.com', 'challenge', '123456')
    expect(mocks.create.mock.calls[0][0].data).toMatchObject({
      customer: 7,
      customerEmail: 'guest@example.com',
      total: 9600,
    })
  })
  it('rejects an incorrect, expired or reused code before creating an order', async () => {
    mocks.consume.mockResolvedValue(false)
    expect((await submit()).status).toBe(400)
    expect(mocks.create).not.toHaveBeenCalled()
    expect(mocks.notify).not.toHaveBeenCalled()
  })
  it('rejects missing and malformed emails', async () => {
    for (const customerEmail of ['', 'invalid'])
      expect((await submit({ customerEmail })).status).toBe(400)
    expect(mocks.create).not.toHaveBeenCalled()
  })
  it('keeps logged-in orders with the authenticated customer', async () => {
    mocks.auth.mockResolvedValue({ user: { id: 9, collection: 'users', role: 'customer' } })
    await submit()
    expect(mocks.create.mock.calls[0][0].data.customer).toBe(9)
  })
  it('allows a verified guest without an existing account', async () => {
    mocks.find.mockImplementation(async ({ collection }) => ({
      docs:
        collection === 'currencies'
          ? [{ rate: 48 }]
          : collection === 'products'
            ? [{ id: 1, title: 'Product', price: 100 }]
            : [],
    }))
    expect((await submit()).status).toBe(200)
    expect(mocks.create.mock.calls[0][0].data.customer).toBeUndefined()
  })
})
