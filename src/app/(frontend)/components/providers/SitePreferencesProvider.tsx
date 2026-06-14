'use client'

import { createContext, type ReactNode, useContext, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

export type SiteLocale = 'uk' | 'en'

export type SiteCurrency = {
  code: string
  name: string
  rate: number
  symbol: string
}

type SitePreferencesContextValue = {
  currencies: SiteCurrency[]
  currency: SiteCurrency
  formatPrice: (valueInUAH: number) => string
  locale: SiteLocale
  setCurrency: (code: string) => void
  setLocale: (locale: SiteLocale) => void
}

const fallbackCurrencies: SiteCurrency[] = [
  { code: 'UAH', name: 'Гривня', rate: 1, symbol: '₴' },
  { code: 'USD', name: 'US Dollar', rate: 41.5, symbol: '$' },
  { code: 'EUR', name: 'Euro', rate: 48, symbol: '€' },
]

const SitePreferencesContext = createContext<SitePreferencesContextValue | null>(null)

export function SitePreferencesProvider({
  children,
  initialCurrencies,
  initialLocale,
}: {
  children: ReactNode
  initialCurrencies: SiteCurrency[]
  initialLocale: SiteLocale
}) {
  const router = useRouter()
  const currencies = initialCurrencies.length ? initialCurrencies : fallbackCurrencies
  const [locale, setLocaleState] = useState<SiteLocale>(initialLocale)
  const [currencyCode, setCurrencyCode] = useState('UAH')

  useEffect(() => {
    const storedLocale = localStorage.getItem('site-locale')
    const storedCurrency = localStorage.getItem('site-currency')

    if (storedCurrency) setCurrencyCode(storedCurrency)
  }, [])

  const currency = currencies.find((item) => item.code === currencyCode) ?? currencies[0] ?? fallbackCurrencies[0]

  const value = useMemo<SitePreferencesContextValue>(
    () => ({
      currencies,
      currency,
      formatPrice: (valueInUAH) => {
        const convertedValue = valueInUAH / currency.rate
        return new Intl.NumberFormat(locale === 'uk' ? 'uk-UA' : 'en-US', {
          currency: currency.code,
          currencyDisplay: 'narrowSymbol',
          maximumFractionDigits: currency.code === 'UAH' ? 0 : 2,
          style: 'currency',
        }).format(convertedValue)
      },
      locale,
      setCurrency: (code) => {
        setCurrencyCode(code)
        localStorage.setItem('site-currency', code)
      },
      setLocale: (nextLocale) => {
        setLocaleState(nextLocale)
        localStorage.setItem('site-locale', nextLocale)
        document.cookie = `site-locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`
        document.documentElement.lang = nextLocale
        router.refresh()
      },
    }),
    [currencies, currency, locale, router],
  )

  return <SitePreferencesContext.Provider value={value}>{children}</SitePreferencesContext.Provider>
}

export function useSitePreferences() {
  const context = useContext(SitePreferencesContext)

  if (!context) {
    throw new Error('useSitePreferences must be used inside SitePreferencesProvider')
  }

  return context
}
