'use client'

import type { ReactNode } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'

import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import partner from '@public/assets/product/partner.jpg'
import instagramIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-product-detail-page-instagram.svg'
import phoneIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-product-detail-page-phone.svg'
import productChevronLeftIconAsset from '@public/icon/generated/product-chevron-left.svg'
import productChevronRightIconAsset from '@public/icon/generated/product-chevron-right.svg'

import SectionHeading from './SectionHeading'

export type PartnerReview = {
  author: string
  image?: string
  quote: string
}

type PartnerReviewsSectionProps = {
  activePage: number
  containerClassName?: string
  eyebrow?: string
  onNext: () => void
  onPrev: () => void
  onSelect: (page: number) => void
  pageCount: number
  reviews: readonly PartnerReview[]
  sectionClassName?: string
  title?: string
}

export default function PartnerReviewsSection({
  activePage,
  containerClassName = 'max-w-[1240px]',
  eyebrow = 'Відгуки',
  onNext,
  onPrev,
  onSelect,
  pageCount,
  reviews,
  sectionClassName = 'px-6 pt-[100px] lg:px-[100px]',
  title = 'Відгуки наших партнерів',
}: PartnerReviewsSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className={`mx-auto flex flex-col items-center gap-12 ${containerClassName}`.trim()}>
        <SectionHeading align="center" eyebrow={eyebrow} title={title} />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`review-page-${activePage}`}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -32 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) {
                onNext()
              }

              if (info.offset.x > 60) {
                onPrev()
              }
            }}
            className="grid w-full min-w-0 gap-5 lg:grid-cols-[repeat(2,minmax(0,1fr))]"
          >
            {reviews.map((review, index) => (
              <PartnerReviewCard key={`${review.author}-${index}`} review={review} />
            ))}
          </motion.div>
        </AnimatePresence>

        <SliderNavigation
          activePage={activePage}
          pageCount={pageCount}
          onNext={onNext}
          onPrev={onPrev}
          onSelect={onSelect}
        />
      </div>
    </section>
  )
}

function PartnerReviewCard({ review }: { review: PartnerReview }) {
  return (
    <article className="flex min-w-0 flex-col items-center gap-8 overflow-hidden rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
      <div className="flex w-full min-w-0 flex-col gap-8 md:flex-row md:items-stretch">
        <Image
          src={review.image ?? partner}
          alt={review.author}
          height={148}
          width={195}
          className="h-[148px] w-full rounded-[20px] object-cover md:h-auto md:w-[194.779px] md:flex-none"
        />
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-8">
          <p className="min-w-0 text-center text-[20px] font-medium leading-[145%] text-[#22354A] md:text-left">
            &ldquo;{review.quote}&rdquo;
          </p>
          <div className="flex w-full min-w-0 flex-col items-center gap-4 self-center md:w-auto md:flex-row md:flex-wrap md:self-start sm:gap-6 xl:flex-nowrap">
            <div className="w-full min-w-0 border-b border-[#D5E0E8] pb-4 text-center text-[20px] font-medium leading-[145%] text-[#22354A] md:w-auto md:border-b-0 md:border-r md:pb-0 md:pr-4 md:text-left sm:pr-6 sm:text-[24px] xl:shrink-0 xl:whitespace-nowrap">
              {review.author}
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <CircleAction href="https://www.instagram.com/" label="Instagram" size="sm">
                <IconAsset src={instagramIconAsset} width={20} height={20} />
              </CircleAction>
              <CircleAction href="tel:+380975468820" label="Телефон" size="md">
                <IconAsset src={phoneIconAsset} width={20} height={20} />
              </CircleAction>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function SliderNavigation({
  activePage,
  onNext,
  onPrev,
  onSelect,
  pageCount,
}: {
  activePage: number
  onNext: () => void
  onPrev: () => void
  onSelect: (page: number) => void
  pageCount: number
}) {
  return (
    <div className="flex w-full items-center justify-between text-[#4FACF5]">
      <button
        type="button"
        aria-label="Попередній слайд"
        onClick={onPrev}
        className="transition-opacity hover:opacity-70"
      >
        <IconAsset src={productChevronLeftIconAsset} width={24} height={24} />
      </button>
      <div className="flex items-center gap-2">
        {Array.from({ length: pageCount }, (_, pageIndex) => (
          <button
            key={`partner-review-dot-${pageIndex}`}
            type="button"
            aria-label={`Перейти до слайду ${pageIndex + 1}`}
            onClick={() => onSelect(pageIndex)}
            className={`h-2 w-2 rounded-full ${
              pageIndex === activePage ? 'bg-[#4FACF5]' : 'bg-[#D5E0E8]'
            }`}
          />
        ))}
      </div>
      <button
        type="button"
        aria-label="Наступний слайд"
        onClick={onNext}
        className="transition-opacity hover:opacity-70"
      >
        <IconAsset src={productChevronRightIconAsset} width={24} height={24} />
      </button>
    </div>
  )
}

function CircleAction({
  children,
  href,
  label,
  size = 'sm',
}: {
  children: ReactNode
  href: string
  label: string
  size?: 'sm' | 'md'
}) {
  const dimensions = size === 'md' ? 'h-[44px] w-[44px]' : 'h-[42px] w-[42px]'

  return (
    <Link
      href={href}
      aria-label={label}
      className={`flex items-center justify-center rounded-full bg-[#4FACF5] ${dimensions}`}
    >
      {children}
    </Link>
  )
}
