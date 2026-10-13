import React, { act } from 'react'
import { createRoot } from 'react-dom/client'
import { expect, it, vi } from 'vitest'
import { CompareMainSection } from '@/app/(frontend)/components/compare/CompareMainSection'

const commerce = vi.hoisted(() => ({
  addToCart: vi.fn(),
  removeFromCompare: vi.fn(),
  categories: [
    { slug: 'chairs', title: 'Massage chairs', href: '/chairs' },
    { slug: 'vacuum', title: 'Vacuum devices', href: '/vacuum' },
  ],
  compareProducts: [
    { id: 'chair-1', category: 'chairs', categoryLabel: 'Chairs', characteristics: [] },
    { id: 'chair-2', category: 'chairs', categoryLabel: 'Chairs', characteristics: [] },
    { id: 'vacuum-1', category: 'vacuum', categoryLabel: 'Vacuum', characteristics: [] },
  ],
}))
vi.mock('@/app/(frontend)/components/providers/CommerceProvider', () => ({
  useCommerce: () => commerce,
}))
vi.mock('@/app/(frontend)/components/ui/IconAsset', () => ({ default: () => null }))
vi.mock('@/app/(frontend)/components/compare/CompareProductCard', () => ({
  CompareProductCard: ({ product }: { product: { id: string } }) =>
    React.createElement('div', { 'data-product': product.id }),
}))
vi.mock('@/app/(frontend)/components/compare/CompareFeaturesTable', () => ({
  CompareFeaturesTable: ({ compareProducts }: { compareProducts: { id: string }[] }) =>
    React.createElement('div', {
      'data-features': compareProducts.map((product) => product.id).join(','),
    }),
}))

it('uses actual categories, filters comparison, and falls back after removing a category', async () => {
  Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true })
  const container = document.createElement('div')
  const root = createRoot(container)
  const original = commerce.compareProducts
  try {
    await act(async () => root.render(React.createElement(CompareMainSection)))
    const select = container.querySelector('select')!
    expect(select.value).toBe('chairs')
    expect(select.selectedOptions[0].textContent).toBe('Massage chairs')
    expect(container.querySelectorAll('[data-product]').length).toBe(2)
    expect(container.querySelector('[data-features]')?.getAttribute('data-features')).toBe(
      'chair-1,chair-2',
    )
    expect(container.querySelector('a')?.getAttribute('href')).toBe('/chairs')
    await act(async () => {
      select.value = 'vacuum'
      select.dispatchEvent(new Event('change', { bubbles: true }))
    })
    expect(container.querySelectorAll('[data-product]').length).toBe(1)
    expect(container.querySelector('[data-product]')?.getAttribute('data-product')).toBe('vacuum-1')
    expect(container.querySelector('a')?.getAttribute('href')).toBe('/vacuum')
    expect(commerce.compareProducts).toHaveLength(3)
    commerce.compareProducts = original.slice(0, 2)
    await act(async () => root.render(React.createElement(CompareMainSection)))
    expect(select.value).toBe('chairs')
    commerce.compareProducts = []
    await act(async () => root.render(React.createElement(CompareMainSection)))
    expect(select.disabled).toBe(true)
    expect(container.querySelector('a')?.getAttribute('href')).toBe('/catalog')
  } finally {
    commerce.compareProducts = original
    await act(async () => root.unmount())
  }
})
