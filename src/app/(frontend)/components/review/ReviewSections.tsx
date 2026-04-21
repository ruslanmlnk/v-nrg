'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { AboutMapPreview } from '../about/AboutMapSection'
import SectionHeading from '../shared/SectionHeading'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import chevronLeftIconAsset from '@public/icon/generated/review-chevron-left.svg'
import chevronRightIconAsset from '@public/icon/generated/review-chevron-right.svg'
import instagramIconAsset from '@public/icon/generated/review-review-page-instagram.svg'
import phoneIconAsset from '@public/icon/generated/review-review-page-phone.svg'

import { reviews } from './data'

const reviewPages = chunkItems(reviews, 2)

export function ReviewShowcaseSection() {
  const [activePage, setActivePage] = useState(0)
  const activeReviews = reviewPages[activePage] ?? reviewPages[0] ?? []

  return (
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
            <ReviewCard key={item.id} {...item} />
          ))}
        </div>

        <div className="flex w-full items-center justify-between text-white/80">
          <button
            type="button"
            aria-label="Попередні відгуки"
            onClick={() => setActivePage((current) => (current - 1 + reviewPages.length) % reviewPages.length)}
            className="p-2 transition-opacity hover:opacity-100"
          >
            <IconAsset src={chevronLeftIconAsset} width={14} height={24} />
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
            <IconAsset src={chevronRightIconAsset} width={14} height={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export function ReviewMapSection() {
  return (
    <section className="rounded-[48px] bg-[#F5F8F9] px-6 pb-0 pt-16 md:pt-[100px]">
      <div className="mx-auto flex max-w-[1288px] flex-col items-center gap-12">
        <SectionHeading align="center" eyebrow="Географія" title="Де скористатися V-NRG" />
        <AboutMapPreview href="/about" />
      </div>
    </section>
  )
}

function ReviewCard({
  author,
  image,
  quote,
}: {
  author: string
  image: (typeof reviews)[number]['image']
  quote: string
}) {
  return (
    <article className="rounded-[20px] bg-white p-8 text-[#22354A] shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
      <div className="grid gap-8 md:grid-cols-[194px_minmax(0,1fr)]">
        <Image src={image} alt={author} className="h-full min-h-[180px] w-full rounded-[20px] object-cover" />

        <div className="flex flex-col justify-between gap-8">
          <p className="text-[18px] font-medium leading-[145%] text-[#22354A] md:text-[20px]">&ldquo;{quote}&rdquo;</p>

          <div className="flex flex-wrap items-center gap-6">
            <div className="border-r border-[#D5E0E8] pr-6">
              <div className="text-[24px] font-medium leading-[145%] text-[#22354A]">{author}</div>
            </div>

            <div className="flex items-center gap-2">
              <CircleAction href="https://www.instagram.com/" label="Instagram">
                <IconAsset src={instagramIconAsset} width={20} height={20} />
              </CircleAction>
              <CircleAction href="tel:+380975468820" label="Телефон">
                <IconAsset src={phoneIconAsset} width={20} height={20} />
              </CircleAction>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
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
    <Link href={href} aria-label={label} className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#4FACF5]">
      {children}
    </Link>
  )
}

function chunkItems<T>(items: readonly T[], size: number) {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, index) => items.slice(index * size, index * size + size))
}
