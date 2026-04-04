'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import reviewAuthor from '@public/assets/review/review-author.jpg'

import { AboutMapPreview } from '../about/AboutMapSection'
import SiteFooter from '../SiteFooter'

const reviews = [
  {
    author: 'Олена Мельник',
    id: 'review-1',
    image: reviewAuthor,
    quote:
      'З V-NRG ми отримали помітні результати вже за перші процедури. Клієнти відзначають покращення лімфодренажу, а нам подобається проста настройка та стабільна робота апарата.',
  },
  {
    author: 'Ірина Коваленко',
    id: 'review-2',
    image: reviewAuthor,
    quote:
      'Після запуску апарата команда швидко розібралася з режимами. Особливо цінуємо стабільну потужність і те, що клієнти охоче повертаються на повторні процедури.',
  },
  {
    author: 'Наталія Бойко',
    id: 'review-3',
    image: reviewAuthor,
    quote:
      'Для нас важливо, що апарат не ускладнює роботу майстра. Інтерфейс зрозумілий, а результати по тілу та дренажу видно вже після перших сеансів.',
  },
  {
    author: 'Марина Соколова',
    id: 'review-4',
    image: reviewAuthor,
    quote:
      'V-NRG добре вписався в щоденне навантаження салону. Ми швидко інтегрували нові процедури в графік і отримали сильний відгук від постійних клієнтів.',
  },
] as const

export default function ReviewPage() {
  const [activePage, setActivePage] = useState(0)

  const reviewPages = chunkItems(reviews, 2)
  const activeReviews = reviewPages[activePage] ?? reviewPages[0] ?? []

  return (
    <div className="pt-12">
      <section className="rounded-t-[48px] bg-[#22354A] px-6 pb-[120px] pt-16 text-white md:pt-[100px]">
        <div className="mx-auto flex max-w-[1288px] flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2 text-[16px] font-bold uppercase leading-[145%]">
              <span>Головна</span>
              <span>/</span>
              <span className="text-[#4FACF5]">Відгуки</span>
            </div>

            <h1 className="text-[32px] font-medium leading-[125%] text-white md:text-[48px]">
              Відгуки наших партнерів
            </h1>
          </div>

          <div className="grid w-full gap-5 lg:grid-cols-2">
            {activeReviews.map((item) => (
              <article
                key={item.id}
                className="rounded-[20px] bg-white p-8 text-[#22354A] shadow-[0_24px_64px_rgba(0,0,0,0.08)]"
              >
                <div className="grid gap-8 md:grid-cols-[194px_minmax(0,1fr)]">
                  <Image
                    src={item.image}
                    alt={item.author}
                    className="h-full min-h-[180px] w-full rounded-[20px] object-cover"
                  />

                  <div className="flex flex-col justify-between gap-8">
                    <p className="text-[18px] font-medium leading-[145%] text-[#22354A] md:text-[20px]">
                      &ldquo;{item.quote}&rdquo;
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                      <div className="border-r border-[#D5E0E8] pr-6">
                        <div className="text-[24px] font-medium leading-[145%] text-[#22354A]">{item.author}</div>
                      </div>

                      <div className="flex items-center gap-2">
                        <CircleAction href="https://www.instagram.com/" label="Instagram">
                          <InstagramIcon />
                        </CircleAction>
                        <CircleAction href="tel:+380975468820" label="Телефон">
                          <PhoneIcon />
                        </CircleAction>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex w-full items-center justify-between text-white/80">
            <button
              type="button"
              aria-label="Попередні відгуки"
              onClick={() => setActivePage((current) => (current - 1 + reviewPages.length) % reviewPages.length)}
              className="p-2 transition-opacity hover:opacity-100"
            >
              <ChevronLeft />
            </button>

            <div className="flex items-center gap-2">
              {reviewPages.map((_, pageIndex) => (
                <button
                  key={`review-dot-${pageIndex}`}
                  type="button"
                  aria-label={`Перейти до відгуків ${pageIndex + 1}`}
                  onClick={() => setActivePage(pageIndex)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    pageIndex === activePage ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Наступні відгуки"
              onClick={() => setActivePage((current) => (current + 1) % reviewPages.length)}
              className="p-2 transition-opacity hover:opacity-100"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      <section className="rounded-[48px] bg-[#F5F8F9] px-6 pb-0 pt-16 md:pt-[100px]">
        <div className="mx-auto flex max-w-[1288px] flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="text-[16px] font-bold uppercase leading-[145%] text-[#4FACF5]">Географія</div>
            <h2 className="text-[32px] font-medium leading-[125%] text-[#22354A] md:text-[48px]">
              Де скористатися V-NRG
            </h2>
          </div>

          <AboutMapPreview href="/about" />
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

function chunkItems<T>(items: readonly T[], size: number) {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, index) => items.slice(index * size, index * size + size))
}

function CircleAction({
  children,
  href,
  label,
}: {
  children: ReactNode
  href: string
  label: string
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#4FACF5]"
    >
      {children}
    </Link>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.6" y="1.6" width="15.8" height="15.8" rx="3.9" stroke="white" strokeWidth="1.6" />
      <circle cx="9.5" cy="9.5" r="3.18" stroke="white" strokeWidth="1.6" />
      <path d="M13.9 5.17H13.91" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.3351 14.1014V16.6014C18.3361 16.8335 18.2886 17.0632 18.1956 17.2758C18.1026 17.4885 17.9662 17.6794 17.7952 17.8363C17.6242 17.9932 17.4223 18.1126 17.2024 18.187C16.9826 18.2613 16.7496 18.2889 16.5185 18.268C13.9542 17.9894 11.491 17.1132 9.32682 15.7097C7.31334 14.4303 5.60626 12.7232 4.32682 10.7097C2.91846 8.53572 2.04202 6.06054 1.76848 3.48472C1.74766 3.25427 1.77505 3.02202 1.8489 2.80274C1.92275 2.58346 2.04146 2.38196 2.19745 2.21107C2.35345 2.04018 2.54332 1.90364 2.75498 1.81015C2.96663 1.71666 3.19543 1.66827 3.42682 1.66805H5.92682C6.33124 1.66407 6.72331 1.80728 7.02995 2.07099C7.33659 2.33471 7.53688 2.70092 7.59348 3.10138C7.699 3.90144 7.89469 4.68699 8.17682 5.44305C8.28894 5.74132 8.3132 6.06548 8.24674 6.37712C8.18028 6.68875 8.02587 6.97481 7.80182 7.20138L6.74348 8.25972C7.92978 10.346 9.65719 12.0734 11.7435 13.2597L12.8018 12.2014C13.0284 11.9773 13.3144 11.8229 13.6261 11.7565C13.9377 11.69 14.2619 11.7143 14.5601 11.8264C15.3162 12.1085 16.1018 12.3042 16.9018 12.4097C17.3066 12.4668 17.6763 12.6707 17.9406 12.9826C18.2049 13.2945 18.3453 13.6927 18.3351 14.1014Z"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronLeft() {
  return (
    <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 12L12 22" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2L12 12L2 22" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
