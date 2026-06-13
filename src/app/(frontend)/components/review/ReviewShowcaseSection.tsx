'use client'

import { useRef, useState } from 'react'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import chevronLeftIconAsset from '@public/icon/generated/review-chevron-left.svg'
import chevronRightIconAsset from '@public/icon/generated/review-chevron-right.svg'
import { reviews } from './data'

import { ReviewCard } from './ReviewCard'

const desktopReviewPages = chunkItems(reviews, 4)

export function ReviewShowcaseSection() {
  const [activeDesktopPage, setActiveDesktopPage] = useState(0)
  const activeDesktopReviews = desktopReviewPages[activeDesktopPage] ?? desktopReviewPages[0] ?? []

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

        <MobileReviewsSlider />

        <div className="hidden w-full md:block">
          <div className="grid w-full grid-cols-2 gap-5">
            {activeDesktopReviews.map((item) => (
              <ReviewCard key={item.id} {...item} />
            ))}
          </div>

          <ReviewNavigation
            activePage={activeDesktopPage}
            className="mt-12"
            onNext={() =>
              setActiveDesktopPage((current) => (current + 1) % desktopReviewPages.length)
            }
            onPrev={() =>
              setActiveDesktopPage(
                (current) => (current - 1 + desktopReviewPages.length) % desktopReviewPages.length,
              )
            }
            onSelect={setActiveDesktopPage}
            pageCount={desktopReviewPages.length}
          />
        </div>
      </div>
    </section>
  )
}

function MobileReviewsSlider() {
  const [activeReview, setActiveReview] = useState(0)
  const sliderRef = useRef<HTMLDivElement | null>(null)

  const scrollToReview = (index: number) => {
    const slider = sliderRef.current
    if (!slider) return
    const target = slider.children[index] as HTMLElement | undefined
    const firstSlide = slider.children[0] as HTMLElement | undefined
    if (!target || !firstSlide) return

    slider.scrollTo({
      behavior: 'smooth',
      left: target.offsetLeft - firstSlide.offsetLeft,
    })
  }

  return (
    <div className="w-full overflow-hidden md:hidden">
      <div
        ref={sliderRef}
        className="flex w-full touch-pan-y snap-x snap-mandatory items-stretch overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onScroll={(event) => {
          const slider = event.currentTarget
          const nextIndex = Math.min(
            reviews.length - 1,
            Math.round(slider.scrollLeft / slider.clientWidth),
          )

          if (nextIndex !== activeReview) setActiveReview(nextIndex)
        }}
      >
        {reviews.map((review) => (
          <div className="flex w-full max-w-full shrink-0 snap-start" key={review.id}>
            <ReviewCard {...review} />
          </div>
        ))}
      </div>

      <ReviewNavigation
        activePage={activeReview}
        className="mt-12"
        onNext={() => scrollToReview((activeReview + 1) % reviews.length)}
        onPrev={() => scrollToReview((activeReview - 1 + reviews.length) % reviews.length)}
        onSelect={scrollToReview}
        pageCount={reviews.length}
      />
    </div>
  )
}

function ReviewNavigation({
  activePage,
  className = '',
  onNext,
  onPrev,
  onSelect,
  pageCount,
}: {
  activePage: number
  className?: string
  onNext: () => void
  onPrev: () => void
  onSelect: (page: number) => void
  pageCount: number
}) {
  return (
    <div className={`flex w-full items-center justify-between text-white/80 ${className}`}>
      <button
        type="button"
        aria-label="Попередні відгуки"
        onClick={onPrev}
        className="p-2 transition-opacity hover:opacity-100"
      >
        <IconAsset src={chevronLeftIconAsset} width={14} height={24} />
      </button>

      <div className="flex max-w-[220px] flex-wrap items-center justify-center gap-2">
        {Array.from({ length: pageCount }, (_, pageIndex) => (
          <button
            key={`review-dot-${pageIndex}`}
            type="button"
            aria-label={`Перейти до відгуку ${pageIndex + 1}`}
            onClick={() => onSelect(pageIndex)}
            className={`h-2 w-2 rounded-full transition-colors ${
              pageIndex === activePage ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="Наступні відгуки"
        onClick={onNext}
        className="p-2 transition-opacity hover:opacity-100"
      >
        <IconAsset src={chevronRightIconAsset} width={14} height={24} />
      </button>
    </div>
  )
}

function chunkItems<T>(items: readonly T[], size: number) {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, index) =>
    items.slice(index * size, index * size + size),
  )
}
