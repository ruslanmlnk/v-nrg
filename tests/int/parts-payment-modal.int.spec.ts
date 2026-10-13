import React, { act } from 'react'
import { createRoot } from 'react-dom/client'
import { expect, it, vi } from 'vitest'
import { PartsPaymentModal } from '@/app/(frontend)/components/checkout/PartsPaymentModal'

const preferences = vi.hoisted(() => ({
  locale: 'uk',
  currency: { code: 'UAH', rate: 50 },
}))
vi.mock('@/app/(frontend)/components/providers/SitePreferencesProvider', () => ({
  useSitePreferences: () => preferences,
}))

it('recalculates installments in the selected site currency when it changes', async () => {
  Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true })
  const container = document.createElement('div')
  const root = createRoot(container)
  const render = async (totalInEUR: number, partsCount: number) => {
    await act(async () =>
      root.render(
        React.createElement(PartsPaymentModal, {
          isOpen: true,
          totalInEUR,
          partsCount,
          onClose: vi.fn(),
          onSelect: vi.fn(),
          onUpdatePartsCount: vi.fn(),
        }),
      ),
    )
  }
  const paymentText = () => container.textContent?.replace(/\s/g, ' ')
  try {
    await render(280, 5)
    expect(paymentText()).toContain('2 800 ₴ / місяць')
    await render(560, 5)
    expect(paymentText()).toContain('5 600 ₴ / місяць')
    await render(280, 8)
    expect(paymentText()).toContain('1 750 ₴ / місяць')
    await render(280.01, 3)
    expect(paymentText()).toContain('4 666,83 ₴ / місяць')
    preferences.currency = { code: 'EUR', rate: 1 }
    await render(280, 5)
    expect(paymentText()).toContain('56 € / місяць')
    expect(paymentText()).not.toContain('₴')
    preferences.currency = { code: 'USD', rate: 1.15 }
    await render(280, 5)
    expect(paymentText()).toContain('64,4 $ / місяць')
    preferences.currency = { code: 'UAH', rate: 50 }
    await render(280, 5)
    expect(paymentText()).toContain('2 800 ₴ / місяць')
    preferences.currency = { code: 'UAH', rate: 0 }
    await render(280, 5)
    expect(paymentText()).toContain('Курс валюти недоступний')
    expect(
      Array.from(container.querySelectorAll('button')).find(
        (button) => button.textContent === 'Вибрати',
      )?.disabled,
    ).toBe(true)
  } finally {
    await act(async () => root.unmount())
    preferences.currency = { code: 'UAH', rate: 50 }
  }
})
