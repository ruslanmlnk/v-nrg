'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { useState, type ReactNode } from 'react'

import SiteFooter from '../SiteFooter'
import { featuredCatalogProducts, formatPrice } from '../../data/products'
import { useCommerce } from '../providers/CommerceProvider'

const footerCopyTitle = 'Професійні апарати вакуумного масажу V-NRG'
const footerCopyBody =
  'Апарати вакуумного масажу V-NRG — це інноваційне обладнання європейської якості для салонів краси, спа-центрів та приватних кабінетів. Наша продукція сертифікована згідно з міжнародними стандартами CE та ISO 9001:2015.'
const footerCopyTitleSecondary = 'Переваги вакуумного масажу'
const footerCopyBodySecondary =
  'Вакуумний масаж ефективно стимулює кровообіг, покращує лімфодренаж, зменшує прояви целюліту та сприяє корекції фігури. Процедури з використанням апаратів V-NRG дозволяють досягти видимих результатів вже після 3-5 сеансів.'

export default function VacuumMassageCatalogPage() {
  const { addToCart, isInCompare, toggleCompare } = useCommerce()
  const [sharedProductId, setSharedProductId] = useState<string | null>(null)

  const handleShare = async (title: string, href: string, productId: string) => {
    const shareUrl = typeof window === 'undefined' ? href : `${window.location.origin}${href}`

    try {
      if (navigator.share) {
        await navigator.share({ title, url: shareUrl })
      } else {
        await navigator.clipboard.writeText(shareUrl)
      }

      setSharedProductId(productId)
      window.setTimeout(() => setSharedProductId(null), 1800)
    } catch {
      setSharedProductId(null)
    }
  }

  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
        <section className="flex min-h-[268px] items-center justify-center rounded-[20px] bg-[#22354A] px-6 py-14 text-center text-white">
          <div className="flex max-w-[845px] flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-2 text-[16px] font-bold uppercase leading-[145%]">
              <span>Головна</span>
              <span>/</span>
              <span>Каталог</span>
              <span>/</span>
              <span className="text-[#4FACF5]">Апарати вакуумного масажу</span>
            </div>
            <h1 className="text-[36px] font-medium leading-[145%] md:text-[48px]">Апарати вакуумного масажу</h1>
          </div>
        </section>

        <section className="grid items-start gap-5 lg:grid-cols-[400px_minmax(0,1fr)]">
          <aside className="flex flex-col gap-5">
            <h2 className="text-[42px] font-medium leading-[145%] text-[#22354A]">Фільтр</h2>

            <label className="flex h-20 items-center gap-4 rounded-[40px] bg-white px-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
              <SearchIcon />
              <input
                type="text"
                placeholder="Пошук"
                className="w-full bg-transparent text-[24px] font-medium leading-[145%] text-[#22354A] outline-none placeholder:text-[#22354A]"
              />
            </label>

            <FilterSection title="Всі товари">
              <RadioOption label="Апарати вакуумного масажу" count="(6)" checked />
              <RadioOption label="Апарати фізіотерапії" count="(3)" />
              <RadioOption label="Комплектуючі" count="(3)" />
              <RadioOption label="Розхідники" count="(3)" />
              <RadioOption label="Аксесуари" count="(3)" />
              <RadioOption label="Стільці для масажу" count="(3)" />
            </FilterSection>

            <FilterSection title="Модель">
              <CheckboxOption label="V-NRG 18 PRO" count="(3)" checked />
              <CheckboxOption label="V-NRG 36 PRO" count="(3)" checked />
            </FilterSection>

            <FilterSection title="Кількість маніпул">
              <CheckboxOption label="18" count="(3)" checked />
              <CheckboxOption label="36" count="(3)" checked />
            </FilterSection>

            <FilterSection title="Потужність">
              <CheckboxOption label="до 1000 Вт" count="(3)" checked />
              <CheckboxOption label="понад 1000 Вт" count="(3)" checked />
            </FilterSection>
          </aside>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 rounded-[20px] bg-white px-6 py-4 shadow-[0_20px_60px_rgba(34,53,74,0.04)] sm:flex-row sm:items-center sm:justify-between">
              <div className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                Знайдено: <span className="font-bold text-[#4FACF5]">6</span> товарів
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  className="flex h-11 items-center gap-6 rounded-[40px] border border-[#D5E0E8] bg-white px-4 text-[16px] font-medium leading-[145%] text-[#22354A]"
                >
                  <span>За популярністю</span>
                  <ChevronDownIcon />
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4FACF5]"
                    aria-label="Сітка"
                  >
                    <GridIcon />
                  </button>
                  <button
                    type="button"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D5E0E8] bg-white"
                    aria-label="Список"
                  >
                    <ListIcon />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {featuredCatalogProducts.map((product, index) => (
                <motion.article
                  key={`${product.id}-${index}`}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: index * 0.04, duration: 0.28 }}
                  className="overflow-hidden rounded-[20px] bg-white shadow-[0_20px_60px_rgba(34,53,74,0.05)]"
                >
                  <div className="relative h-[300px] overflow-hidden rounded-[20px] bg-white">
                    <div className="absolute right-5 top-5 z-10 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => toggleCompare(product.id)}
                        aria-label={`Додати ${product.title} до порівняння`}
                        className={`flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-[0_12px_30px_rgba(34,53,74,0.12)] transition-colors ${
                          isInCompare(product.id) ? 'text-[#4FACF5]' : 'text-[#22354A]'
                        }`}
                      >
                        <CompareIcon />
                      </button>

                      <button
                        type="button"
                        onClick={() => void handleShare(product.title, product.href, `${product.id}-${index}`)}
                        aria-label={`Поділитися ${product.title}`}
                        className={`flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-[0_12px_30px_rgba(34,53,74,0.12)] transition-colors ${
                          sharedProductId === `${product.id}-${index}` ? 'text-[#4FACF5]' : 'text-[#22354A]'
                        }`}
                      >
                        <ShareIcon />
                      </button>
                    </div>

                    <Link href={product.href}>
                      <Image src={product.catalogImage} alt={product.title} fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
                    </Link>
                  </div>

                  <div className="flex flex-col gap-4 px-8 py-6">
                    <div className="flex flex-col gap-2">
                      <h3 className={`text-[24px] font-medium leading-[145%] ${index === 0 ? 'text-[#4FACF5]' : 'text-[#22354A]'}`}>
                        {product.title}
                      </h3>
                      <p className="text-[16px] font-medium leading-[165%] text-[#22354A]">{product.details}</p>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div className="text-[24px] font-bold leading-[145%] text-[#22354A]">{formatPrice(product.price)}</div>
                      <button
                        type="button"
                        onClick={() => addToCart(product.id)}
                        aria-label={`Додати ${product.title} до кошика`}
                        className="text-[#4FACF5] transition-opacity hover:opacity-70"
                      >
                        <CartIcon />
                      </button>
                    </div>

                    <Link href={product.href} className={`text-[18px] leading-[145%] ${index === 0 ? 'font-bold text-[#4FACF5]' : 'font-medium text-[#4FACF5]'}`}>
                      Детальніше
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="flex flex-col gap-4 rounded-[24px] bg-white px-8 py-6 shadow-[0_20px_60px_rgba(34,53,74,0.04)] sm:flex-row sm:items-center sm:justify-between">
              <div className="text-[18px] font-medium leading-[165%] text-[#22354A]">Показано 1-6 із 6 товарів</div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  className="flex h-[50px] w-[42px] items-center justify-center rounded-[16px] bg-[#F5F8F9]"
                  aria-label="Попередня сторінка"
                >
                  <PaginationArrow direction="left" />
                </button>

                <div className="flex items-center gap-[5px]">
                  <PaginationNumber active>1</PaginationNumber>
                </div>

                <button
                  type="button"
                  className="flex h-[50px] w-[42px] items-center justify-center rounded-[16px] bg-[#F5F8F9]"
                  aria-label="Наступна сторінка"
                >
                  <PaginationArrow direction="right" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[20px] bg-white px-8 py-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-[32px] font-medium leading-[125%] tracking-[-0.64px] text-[#22354A]">{footerCopyTitle}</h2>
              <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">{footerCopyBody}</p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-[32px] font-medium leading-[125%] tracking-[-0.64px] text-[#22354A]">{footerCopyTitleSecondary}</h2>
              <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">{footerCopyBodySecondary}</p>
            </div>

            <button type="button" className="flex items-center self-start">
              <span className="rounded-[40px] bg-[#22354A] px-6 py-3 text-[18px] font-medium leading-[165%] text-white">Читати все</span>
              <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#4FACF5]">
                <ReadMoreArrow />
              </span>
            </button>
          </div>
        </section>
      </div>

      <SiteFooter />
    </div>
  )
}

function FilterSection({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) {
  return (
    <div className="flex flex-col gap-8 rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">{title}</h3>
        <ChevronUpIcon />
      </div>
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  )
}

function RadioOption({
  checked = false,
  count,
  label,
}: {
  checked?: boolean
  count: string
  label: string
}) {
  return (
    <div className="flex items-center gap-4">
      <RadioIcon checked={checked} />
      <div className="flex items-center gap-2 text-[18px] font-medium leading-[165%]">
        <span className="text-[#22354A]">{label}</span>
        <span className="text-[#B7CAD1]">{count}</span>
      </div>
    </div>
  )
}

function CheckboxOption({
  checked = false,
  count,
  label,
}: {
  checked?: boolean
  count: string
  label: string
}) {
  return (
    <div className="flex items-center gap-4">
      <CheckboxIcon checked={checked} />
      <div className="flex items-center gap-2 text-[18px] font-medium leading-[165%]">
        <span className="text-[#22354A]">{label}</span>
        <span className="text-[#B7CAD1]">{count}</span>
      </div>
    </div>
  )
}

function PaginationNumber({
  active = false,
  children,
}: {
  active?: boolean
  children: ReactNode
}) {
  return (
    <div className={`flex h-[42px] w-[42px] items-center justify-center rounded-[10px] text-[16px] font-medium leading-[145%] ${active ? 'bg-[#4FACF5] text-white' : 'bg-[#F5F8F9] text-[#22354A]'}`}>
      {children}
    </div>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="#22354A" strokeWidth="1.5" />
      <path d="M12.75 12.75L15.75 15.75" stroke="#22354A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.38199 11.9219L14.4757 5.85938C14.7569 5.54688 14.7569 5.07813 14.4757 4.79688L13.757 4.07813C13.4757 3.79688 13.007 3.79688 12.6945 4.07813L7.85074 8.89063L3.03824 4.07813C2.72574 3.79688 2.25699 3.79688 1.97574 4.07813L1.25699 4.79688C0.975744 5.07812 0.975744 5.54687 1.25699 5.85938L7.35074 11.9219C7.63199 12.2031 8.10074 12.2031 8.38199 11.9219Z" fill="#22354A" />
    </svg>
  )
}

function ChevronUpIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5732 6.11719L21.7138 15.2109C22.1357 15.6797 22.1357 16.3828 21.7138 16.8047L20.6357 17.8828C20.2138 18.3047 19.5107 18.3047 19.042 17.8828L11.7763 10.6641L4.55758 17.8828C4.08883 18.3047 3.38571 18.3047 2.96384 17.8828L1.88571 16.8047C1.46384 16.3828 1.46384 15.6797 1.88571 15.2109L11.0263 6.11719C11.4482 5.69531 12.1513 5.69531 12.5732 6.11719Z" fill="#22354A" />
    </svg>
  )
}

function RadioIcon({ checked }: { checked: boolean }) {
  return checked ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#4FACF5" />
      <circle cx="12" cy="12" r="5" fill="white" />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#D5E0E8" strokeWidth="2" />
    </svg>
  )
}

function CheckboxIcon({ checked }: { checked: boolean }) {
  return checked ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#4FACF5" />
      <path d="M9.33301 15.9188L5.41401 11.9998C5.22648 11.8123 4.97217 11.707 4.70701 11.707C4.44185 11.707 4.18754 11.8123 4.00001 11.9998C3.81254 12.1873 3.70721 12.4416 3.70721 12.7068C3.70721 12.972 3.81254 13.2263 4.00001 13.4138L7.91901 17.3328C8.10474 17.5186 8.32525 17.666 8.56795 17.7666C8.81066 17.8671 9.0708 17.9189 9.33351 17.9189C9.59622 17.9189 9.85636 17.8671 10.0991 17.7666C10.3418 17.666 10.5623 17.5186 10.748 17.3328L20 8.08081C20.1875 7.89328 20.2928 7.63897 20.2928 7.37381C20.2928 7.10865 20.1875 6.85434 20 6.66681C19.8125 6.47934 19.5582 6.37402 19.293 6.37402C19.0278 6.37402 18.7735 6.47934 18.586 6.66681L9.33301 15.9188Z" fill="white" />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="22" height="22" rx="4" stroke="#D5E0E8" strokeWidth="2" />
    </svg>
  )
}

function GridIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 7.5H17.5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 12.5H17.5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 2.5V17.5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 2.5V17.5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ListIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 10H2.50833" stroke="#22354A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 15H2.50833" stroke="#22354A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 5H2.50833" stroke="#22354A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.66663 10H17.5" stroke="#22354A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.66663 15H17.5" stroke="#22354A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.66663 5H17.5" stroke="#22354A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6673 29.3327C11.4037 29.3327 12.0007 28.7357 12.0007 27.9993C12.0007 27.263 11.4037 26.666 10.6673 26.666C9.93094 26.666 9.33398 27.263 9.33398 27.9993C9.33398 28.7357 9.93094 29.3327 10.6673 29.3327Z" stroke="#4FACF5" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25.3333 29.3327C26.0697 29.3327 26.6667 28.7357 26.6667 27.9993C26.6667 27.263 26.0697 26.666 25.3333 26.666C24.597 26.666 24 27.263 24 27.9993C24 28.7357 24.597 29.3327 25.3333 29.3327Z" stroke="#4FACF5" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.73328 2.7334H5.39994L8.94661 19.2934C9.07671 19.8999 9.41417 20.442 9.90089 20.8265C10.3876 21.2111 10.9932 21.4139 11.6133 21.4001H24.6533C25.2602 21.3991 25.8486 21.1911 26.3213 20.8105C26.794 20.4299 27.1228 19.8994 27.2533 19.3067L29.4533 9.40006H6.82661" stroke="#4FACF5" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CompareIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 8H21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M7 14H17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M7 20H21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="19" cy="14" r="2.5" fill="currentColor" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="14" r="2.5" fill="currentColor" />
      <circle cx="20" cy="8" r="2.5" fill="currentColor" />
      <circle cx="20" cy="20" r="2.5" fill="currentColor" />
      <path d="M10.2 12.9L17.8 9.1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M10.2 15.1L17.8 18.9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

function PaginationArrow({ direction }: { direction: 'left' | 'right' }) {
  const path =
    direction === 'left'
      ? 'M10.8179 7.00003C10.818 6.91645 10.8016 6.83368 10.7696 6.75647C10.7376 6.67926 10.6906 6.60914 10.6315 6.55012L4.26783 0.186495C4.01917 -0.062164 3.61651 -0.062164 3.36801 0.186495C3.11951 0.435153 3.11935 0.837812 3.36801 1.08631L9.28173 7.00003L3.36801 12.9137C3.11935 13.1624 3.11935 13.5651 3.36801 13.8136C3.61667 14.0621 4.01933 14.0622 4.26783 13.8136L10.6315 7.44994C10.6906 7.39092 10.7376 7.32079 10.7696 7.24359C10.8016 7.16638 10.818 7.08361 10.8179 7.00003Z'
      : 'M3.18209 7.00003C3.182 6.91645 3.19843 6.83368 3.23043 6.75647C3.26243 6.67926 3.30936 6.60914 3.36854 6.55012L9.73217 0.186495C9.98083 -0.062164 10.3835 -0.062164 10.632 0.186495C10.8805 0.435153 10.8806 0.837812 10.632 1.08631L4.71827 7.00003L10.632 12.9137C10.8806 13.1624 10.8806 13.5651 10.632 13.8136C10.3833 14.0621 9.98067 14.0622 9.73217 13.8136L3.36854 7.44994C3.30936 7.39092 3.26243 7.32079 3.23043 7.24359C3.19843 7.16638 3.182 7.08361 3.18209 7.00003Z'

  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={path} fill="#22354A" />
    </svg>
  )
}

function ReadMoreArrow() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.769 0C12.5085 0 12.2587 0.10346 12.0746 0.28762C11.8904 0.47178 11.787 0.721555 11.787 0.981997V24.5499C11.787 24.8104 11.8904 25.0601 12.0746 25.2443C12.2587 25.4285 12.5085 25.5319 12.769 25.5319C13.0294 25.5319 13.2792 25.4285 13.4633 25.2443C13.6475 25.0601 13.751 24.8104 13.751 24.5499V0.981997C13.751 0.721555 13.6475 0.47178 13.4633 0.28762C13.2792 0.10346 13.0294 0 12.769 0Z" fill="white" />
      <path d="M4.2192 16.0001C4.03531 16.1842 3.93202 16.4338 3.93202 16.694C3.93202 16.9543 4.03531 17.2038 4.2192 17.388L12.0751 25.2439C12.2593 25.4278 12.5089 25.5311 12.7691 25.5311C13.0293 25.5311 13.2789 25.4278 13.463 25.2439L21.319 17.388C21.4925 17.2018 21.5869 16.9556 21.5824 16.7012C21.5779 16.4468 21.4749 16.2041 21.2949 16.0241C21.115 15.8442 20.8723 15.7412 20.6179 15.7367C20.3635 15.7322 20.1173 15.8266 19.9311 16.0001L12.7691 23.1621L5.60709 16.0001C5.42297 15.8162 5.17338 15.7129 4.91315 15.7129C4.65292 15.7129 4.40333 15.8162 4.2192 16.0001Z" fill="white" />
    </svg>
  )
}
