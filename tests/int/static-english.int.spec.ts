import React, { act } from 'react'
import { createRoot } from 'react-dom/client'
import { expect, it, vi } from 'vitest'
import { translateStaticEnglish } from '@/app/(frontend)/lib/translateStaticEnglish'
import { GlobalEnglishTranslator } from '@/app/(frontend)/components/providers/GlobalEnglishTranslator'

const preferences = vi.hoisted(() => ({ locale: 'en' }))
vi.mock('@/app/(frontend)/components/providers/SitePreferencesProvider', () => ({
  useSitePreferences: () => preferences,
}))

it.each([
  ['Оплачено', 'Paid'],
  ['  Залишити   замовлення  ', 'Keep order'],
  ['56 € / місяць', '56 € / month'],
  ['Додати V-NRG 36 PRO до кошика', 'Add V-NRG 36 PRO to cart'],
  ['Перейти до слайда 3', 'Go to slide 3'],
  ['Відкрити зображення 2', 'Open image 2'],
  ['36 маніпул', '36 handpieces'],
  ["Контакти для зв'язку:", 'Contact details:'],
])('translates %s', (uk, en) => {
  expect(translateStaticEnglish(uk)).toBe(en)
})

it('translates dynamic text and accessible labels and restores Ukrainian', async () => {
  Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true })
  const host = document.createElement('div')
  const content = document.createElement('div')
  content.innerHTML =
    '<p>Оплата обробляється</p><button aria-label="Відкрити зображення 2"></button><img alt="V-NRG основне фото" />'
  document.body.append(host, content)
  const root = createRoot(host)
  preferences.locale = 'en'
  try {
    await act(async () => root.render(React.createElement(GlobalEnglishTranslator)))
    expect(content.querySelector('p')!.textContent).toBe('Payment processing')
    expect(content.querySelector('button')!.getAttribute('aria-label')).toBe('Open image 2')
    expect(content.querySelector('img')!.alt).toBe('V-NRG main image')
    await act(async () => {
      content.querySelector('p')!.firstChild!.textContent = 'Оплачено'
    })
    expect(content.querySelector('p')!.textContent).toBe('Paid')
    preferences.locale = 'uk'
    await act(async () => root.render(React.createElement(GlobalEnglishTranslator)))
    expect(content.querySelector('p')!.textContent).toBe('Оплачено')
    expect(content.querySelector('button')!.getAttribute('aria-label')).toBe(
      'Відкрити зображення 2',
    )
    expect(content.querySelector('img')!.alt).toBe('V-NRG основне фото')
  } finally {
    await act(async () => root.unmount())
    host.remove()
    content.remove()
  }
})
