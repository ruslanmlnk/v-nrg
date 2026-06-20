import type { SiteLocale } from '../components/providers/SitePreferencesProvider'

const translations = {
  uk: {
    about: 'Про бренд',
    account: 'Особистий кабінет',
    blog: 'Блог',
    cart: 'Кошик',
    catalog: 'Каталог',
    compare: 'Порівняння',
    contacts: 'Контакти',
    dealer: 'Стати дилером',
    delivery: 'Безкоштовна доставка від 5000 грн',
    language: 'Мова',
    main: 'Головна',
    reviews: 'Відгуки',
    training: 'Навчання',
  },
  en: {
    about: 'About',
    account: 'My account',
    blog: 'Blog',
    cart: 'Cart',
    catalog: 'Catalogue',
    compare: 'Compare',
    contacts: 'Contacts',
    dealer: 'Become a dealer',
    delivery: 'Free delivery from UAH 5,000',
    language: 'Language',
    main: 'Main',
    reviews: 'Reviews',
    training: 'Training',
  },
} as const

export type TranslationKey = keyof (typeof translations)['uk']

export function translate(locale: SiteLocale, key: TranslationKey) {
  return translations[locale][key]
}

export function translateNavLink(locale: SiteLocale, href: string, fallback: string) {
  const keyByHref: Partial<Record<string, TranslationKey>> = {
    '/about': 'about',
    '/blog': 'blog',
    '/catalog': 'catalog',
    '/review': 'reviews',
    '/training': 'training',
  }
  const key = keyByHref[href]
  return key ? translate(locale, key) : fallback
}
