import React, { act } from 'react'
import { createRoot } from 'react-dom/client'
import { expect, it, vi } from 'vitest'
import { PartsPaymentModal } from '@/app/(frontend)/components/checkout/PartsPaymentModal'

const preferences = vi.hoisted(() => ({
  currencies: [{ code: 'UAH', rate: 50 }],
  currency: { code: 'EUR', rate: 1 },
}))
vi.mock('@/app/(frontend)/components/providers/SitePreferencesProvider', () => ({
  useSitePreferences: () => preferences,
}))

it('converts the EUR total to UAH before dividing, regardless of display currency', async () => {
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
    preferences.currencies = []
    await render(280, 5)
    expect(paymentText()).toContain('Курс гривні недоступний')
    expect(
      Array.from(container.querySelectorAll('button')).find(
        (button) => button.textContent === 'Вибрати',
      )?.disabled,
    ).toBe(true)
  } finally {
    await act(async () => root.unmount())
    preferences.currencies = [{ code: 'UAH', rate: 50 }]
  }
})
