'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

import SiteFooter from '../components/SiteFooter'
import { useCommerce } from '../components/providers/CommerceProvider'
import { formatPrice } from '../data/products'

const MAX_COMPARE_PRODUCTS = 3

export default function ComparePage() {
  const { addToCart, compareProducts, removeFromCompare } = useCommerce()

  const featureLabels = compareProducts[0]?.compareFeatures.map((feature) => feature.label) ?? []
  const compareColumnsStyle =
    compareProducts.length > 0
      ? { gridTemplateColumns: `repeat(${compareProducts.length}, minmax(0, 1fr))` }
      : undefined

  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
        <section className="flex min-h-[268px] items-center justify-center rounded-[20px] bg-[#22354A] px-6 py-14 text-center text-white">
          <div className="flex max-w-[920px] flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-2 text-[16px] font-bold uppercase leading-[145%]">
              <Link href="/">Головна</Link>
              <span>/</span>
              <span className="text-[#4FACF5]">Порівняння товарів</span>
            </div>
            <h1 className="text-[36px] font-medium leading-[145%] md:text-[48px]">
              Порівняння товарів
            </h1>
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <h2 className="text-[28px] font-medium leading-[145%] text-[#22354A]">
              Порівняння товарів
            </h2>

            <div className="flex items-center gap-6 rounded-[20px] bg-white px-8 py-6 text-[20px] font-medium leading-[145%] text-[#22354A] shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
              <span>Апарати вакуумного масажу</span>
              <ChevronDownIcon />
            </div>
          </div>

          <div className="flex flex-col gap-5 xl:flex-row xl:items-stretch">
            {compareProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="xl:w-[400px] xl:flex-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.3 }}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_20px_60px_rgba(34,53,74,0.05)]">
                  <div className="relative h-[300px] overflow-hidden rounded-[20px] border-2 border-transparent bg-white transition-colors duration-200 group-hover:border-[#4FACF5]">
                    <button
                      type="button"
                      onClick={() => removeFromCompare(product.id)}
                      aria-label={`Прибрати ${product.title} з порівняння`}
                      className="absolute right-3 top-3 z-10 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white text-[#22354A] shadow-[0_8px_24px_rgba(34,53,74,0.1)]"
                    >
                      <CloseIcon />
                    </button>

                    <Image
                      src={product.compareImage}
                      alt={product.title}
                      fill
                      className="object-contain p-6"
                      sizes="(min-width: 1280px) 400px, 100vw"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-4 px-8 py-6">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A] transition-colors duration-200 group-hover:text-[#4FACF5]">
                        {product.title}
                      </h3>
                      <p className="text-[16px] font-medium leading-[165%] text-[#22354A]">
                        {product.details}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div className="text-[24px] font-bold leading-[145%] text-[#22354A]">
                        {formatPrice(product.price)}
                      </div>
                      <button
                        type="button"
                        onClick={() => addToCart(product.id)}
                        aria-label={`Додати ${product.title} в кошик`}
                        className="text-[#4FACF5] transition-opacity hover:opacity-70"
                      >
                        <CartIcon />
                      </button>
                    </div>

                    <Link
                      href={product.href}
                      className="text-[18px] font-bold leading-[165%] text-[#4FACF5]"
                    >
                      Детальніше
                    </Link>
                  </div>
                </article>
              </motion.div>
            ))}

            {compareProducts.length < MAX_COMPARE_PRODUCTS ? (
              <Link
                href="/catalog/aparaty-vakuumnoho-masazhu"
                className="flex min-h-[460px] flex-col items-center justify-center gap-6 rounded-[20px] border border-dashed border-[#D5E0E8] bg-white px-8 text-center shadow-[0_20px_60px_rgba(34,53,74,0.04)] xl:flex-1 xl:self-stretch"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(79,172,245,0.1)] text-[#4FACF5]">
                  <PlusIcon />
                </span>
                <span className="text-[18px] font-bold leading-[145%] text-[#4FACF5]">
                  Додати ще модель
                </span>
              </Link>
            ) : null}
          </div>

          {compareProducts.length < 2 ? (
            <div className="rounded-[20px] bg-white px-8 py-8 text-[24px] font-medium leading-[145%] text-[#22354A] shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
              {compareProducts.length === 0
                ? 'Додайте товари для порівняння'
                : 'Недостатньо товарів для порівняння'}
            </div>
          ) : (
            <div className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
              <div className="flex flex-col gap-8">
                <section className="border-b border-[#D5E0E8] pb-4">
                  <div className="mb-4 text-[24px] font-medium leading-[145%] text-[#22354A]">
                    Характеристика
                  </div>
                  <div className="grid gap-4 md:gap-[81px]" style={compareColumnsStyle}>
                    {compareProducts.map((product) => (
                      <div
                        key={`${product.id}-heading`}
                        className="text-[18px] font-medium leading-[165%] text-[#22354A]"
                      >
                        {product.title}
                      </div>
                    ))}
                  </div>
                </section>

                <div className="flex flex-col gap-8">
                  {featureLabels.map((label, featureIndex) => (
                    <section
                      key={label}
                      className={`flex flex-col gap-4 ${
                        featureIndex === featureLabels.length - 1
                          ? ''
                          : 'border-b border-[#D5E0E8] pb-4'
                      }`}
                    >
                      <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">
                        {label}
                      </h3>
                      <div className="grid gap-4 md:gap-[81px]" style={compareColumnsStyle}>
                        {compareProducts.map((product) => (
                          <div
                            key={`${product.id}-${label}`}
                            className="text-[18px] font-medium leading-[165%] text-[#22354A]"
                          >
                            {
                              product.compareFeatures.find((feature) => feature.label === label)
                                ?.value
                            }
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>
      </div>

      <SiteFooter />
    </div>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 4.5L13.5 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13.5 4.5L4.5 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.6673 29.3327C11.4037 29.3327 12.0007 28.7357 12.0007 27.9993C12.0007 27.263 11.4037 26.666 10.6673 26.666C9.93094 26.666 9.33398 27.263 9.33398 27.9993C9.33398 28.7357 9.93094 29.3327 10.6673 29.3327Z"
        stroke="#4FACF5"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.3333 29.3327C26.0697 29.3327 26.6667 28.7357 26.6667 27.9993C26.6667 27.263 26.0697 26.666 25.3333 26.666C24.597 26.666 24 27.263 24 27.9993C24 28.7357 24.597 29.3327 25.3333 29.3327Z"
        stroke="#4FACF5"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.7334 2.73242H5.40007L8.94673 19.2924C9.07684 19.8989 9.41429 20.4411 9.90101 20.8256C10.3877 21.2101 10.9933 21.4129 11.6134 21.3991H24.6534C25.2603 21.3981 25.8487 21.1901 26.3214 20.8095C26.7942 20.4289 27.1229 19.8985 27.2534 19.3058L29.4534 9.39909H6.82673"
        stroke="#4FACF5"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.33203 20H31.6654"
        stroke="currentColor"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 8.33301V31.6663"
        stroke="currentColor"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.38086 11.9219L14.4746 5.85938C14.7559 5.54688 14.7559 5.07813 14.4746 4.79688L13.7559 4.07813C13.4746 3.79688 13.0059 3.79688 12.6934 4.07813L7.84961 8.89063L3.03711 4.07813C2.72461 3.79688 2.25586 3.79688 1.97461 4.07813L1.25586 4.79688C0.97461 5.07812 0.97461 5.54687 1.25586 5.85938L7.34961 11.9219C7.63086 12.2031 8.09961 12.2031 8.38086 11.9219Z"
        fill="#4FACF5"
      />
    </svg>
  )
}
