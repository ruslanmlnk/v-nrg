'use client'

import { useState } from 'react'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import chevronLeftIconAsset from '@public/icon/generated/review-chevron-left.svg'
import chevronRightIconAsset from '@public/icon/generated/review-chevron-right.svg'
import { reviews } from './data'

import { ReviewCard } from './ReviewCard'

const reviewPages = chunkItems(reviews, 4)

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

        <div className="grid w-full gap-5 md:grid-cols-2">
          {activeReviews.map((item) => (
            <ReviewCard key={item.id} {...item} />
          ))}
        </div>

        <div className="flex w-full items-center justify-between text-white/80">
          <button
            type="button"
            aria-label="Попередні відгуки"
            onClick={() =>
              setActivePage((current) => (current - 1 + reviewPages.length) % reviewPages.length)
            }
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

function chunkItems<T>(items: readonly T[], size: number) {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, index) =>
    items.slice(index * size, index * size + size),
  )
}
