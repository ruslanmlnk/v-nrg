import { describe, expect, it, vi } from 'vitest'
import type { PayloadRequest } from 'payload'
import type { Order } from '@/payload-types'
import { getAccountOrders } from '@/lib/getAccountOrders'
import { toAccountOrder } from '@/lib/accountOrders'

const order: Order = {
  id: 7,
  orderNumber: 'ORDER-7',
  customer: 12,
  firstName: 'Test',
  lastName: 'Customer',
  phone: '+380000000000',
  customerEmail: 'test@example.com',
  orderStatus: 'new',
  paymentStatus: 'awaiting_payment',
  paymentApprovalStatus: 'pending_admin',
  paymentMethod: 'card-online',
  total: 250,
  items: [
    { product: null, title: 'Deleted product snapshot', quantity: 2, price: 125, total: 250 },
  ],
  createdAt: '2026-10-04T10:00:00Z',
  updatedAt: '2026-10-04T10:00:00Z',
}

describe('Server account orders', () => {
  it('requires authentication without querying orders', async () => {
    const find = vi.fn()
    const response = await getAccountOrders({
      user: null,
      payload: { find },
    } as unknown as PayloadRequest)
    expect(response.status).toBe(401)
    expect(find).not.toHaveBeenCalled()
  })

  it.each(['user', 'admin'])(
    'limits %s history to the signed-in customer with access checks',
    async (role) => {
      const find = vi.fn().mockResolvedValue({ docs: [order], totalDocs: 6, totalPages: 2 })
      const req = {
        user: { id: 12, role, collection: 'users' },
        query: { page: '2', customer: '999' },
        payload: { find },
      } as unknown as PayloadRequest
      const response = await getAccountOrders(req)
      expect(find).toHaveBeenCalledWith(
        expect.objectContaining({
          req,
          overrideAccess: false,
          depth: 0,
          page: 2,
          limit: 5,
          where: { customer: { equals: 12 } },
        }),
      )
      expect(response.headers.get('Cache-Control')).toBe('private, no-store')
      const data = await response.json()
      expect(data.totalDocs).toBe(6)
      expect(data.orders[0].items[0]).toMatchObject({
        title: 'Deleted product snapshot',
        total: 250,
      })
      expect(data.orders[0]).not.toHaveProperty('monobank')
    },
  )

  it('rejects invalid pagination', async () => {
    const response = await getAccountOrders({
      user: { collection: 'users' },
      query: { page: '-1' },
    } as unknown as PayloadRequest)
    expect(response.status).toBe(400)
  })

  it('uses stored amounts and server statuses without consulting the catalog', () => {
    const data = toAccountOrder({ ...order, orderStatus: 'delivered', paymentStatus: 'paid' })
    expect(data.total).toBe(250)
    expect(data.status).toBe('delivered')
    expect(data.paymentStatus).toBe('paid')
    expect(data.canCancel).toBe(false)
    expect(data.items[0].title).toBe('Deleted product snapshot')
  })

  it('exposes only an existing unpaid payment link, never a new checkout', () => {
    const confirmed: Order = {
      ...order,
      orderStatus: 'processing',
      paymentApprovalStatus: 'confirmed',
      monobank: { pageUrl: 'https://example.com/payment', raw: { private: true } },
    }
    expect(toAccountOrder(confirmed).paymentUrl).toBe('https://example.com/payment')
    expect(toAccountOrder({ ...confirmed, paymentStatus: 'paid' }).paymentUrl).toBeNull()
    expect(toAccountOrder({ ...confirmed, orderStatus: 'cancelled' }).paymentUrl).toBeNull()
    expect(
      toAccountOrder({ ...confirmed, monobank: { pageUrl: 'javascript:alert(1)' } }).paymentUrl,
    ).toBeNull()
  })
})
