import React, { act } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { OrderCard, type AccountOrder } from '@/app/(frontend)/components/account/OrderCard'

const { cancelOrder } = vi.hoisted(() => ({ cancelOrder: vi.fn() }))
vi.mock('@/app/(frontend)/components/providers/CommerceProvider', () => ({
  useCommerce: () => ({ cancelOrder, checkoutOrder: vi.fn(), getProductById: vi.fn() }),
}))
vi.mock('@/app/(frontend)/components/providers/SitePreferencesProvider', () => ({
  useSitePreferences: () => ({ formatPrice: (value: number) => String(value) }),
}))
vi.mock('@/app/(frontend)/components/ui/IconAsset', () => ({ default: () => null }))

const order: AccountOrder = {
  id: 'ORDER-123',
  customerName: 'Customer',
  email: 'customer@example.com',
  phone: '',
  items: [],
  total: 100,
  status: 'new',
  paymentStatus: 'awaiting_payment',
  createdAt: '2026-10-04T10:00:00Z',
  canCancel: true,
  paymentUrl: null,
}
let container: HTMLDivElement
let root: Root
const button = (label: string) =>
  Array.from(container.querySelectorAll('button')).find((element) => element.textContent === label)
const click = async (label: string) => {
  expect(button(label)).toBeDefined()
  await act(async () => button(label)!.click())
}

beforeEach(async () => {
  Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true })
  container = document.createElement('div')
  document.body.append(container)
  root = createRoot(container)
  await act(async () => root.render(React.createElement(OrderCard, { order })))
})
afterEach(async () => {
  await act(async () => root.unmount())
  container.remove()
  vi.resetAllMocks()
})

describe('Customer order cancellation', () => {
  it('requires confirmation and lets the customer keep the order', async () => {
    await click('Скасувати замовлення')
    expect(cancelOrder).not.toHaveBeenCalled()
    await click('Залишити замовлення')
    expect(button('Так, скасувати')).toBeUndefined()
    expect(cancelOrder).not.toHaveBeenCalled()
  })

  it('submits the order number and hides payment after cancellation', async () => {
    cancelOrder.mockResolvedValue(undefined)
    await click('Скасувати замовлення')
    await click('Так, скасувати')
    expect(cancelOrder).toHaveBeenCalledWith('ORDER-123')
    await act(async () =>
      root.render(
        React.createElement(OrderCard, {
          order: { ...order, status: 'cancelled' },
        }),
      ),
    )
    expect(container.textContent).toContain('Скасовано')
    expect(button('Оплатити')).toBeUndefined()
    expect(button('Скасувати замовлення')).toBeUndefined()
  })

  it('shows the server error and allows retrying', async () => {
    cancelOrder.mockRejectedValue(new Error('Зверніться до менеджера.'))
    await click('Скасувати замовлення')
    await click('Так, скасувати')
    expect(container.querySelector('[role="alert"]')?.textContent).toBe('Зверніться до менеджера.')
    expect(button('Так, скасувати')?.disabled).toBe(false)
  })
})
