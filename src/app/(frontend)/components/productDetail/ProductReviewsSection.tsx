'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import partner from '@public/assets/product/partner.jpg'
import SectionHeading from '../shared/SectionHeading'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import instagramIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-product-detail-page-instagram.svg'
import phoneIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-product-detail-page-phone.svg'
import productChevronLeftIconAsset from '@public/icon/generated/product-chevron-left.svg'
import productChevronRightIconAsset from '@public/icon/generated/product-chevron-right.svg'

import { ProductPageSection } from './ProductPageSection'

export function ProductReviewsSection({
  activePage,
  pageCount,
  reviews,
  onNext,
  onPrev,
  onSelect,
}: {
  activePage: number
  onNext: () => void
  onPrev: () => void
  onSelect: (page: number) => void
  pageCount: number
  reviews: Array<{ author: string; quote: string }>
}) {
  return (
    <ProductPageSection sectionClassName="pt-[100px]" className="gap-12">
      <SectionHeading align="center" eyebrow="Відгуки" title="Відгуки наших партнерів" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`review-page-${activePage}`}
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -32 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-5 lg:grid-cols-2"
        >
          {reviews.map((review, index) => (
            <PartnerReviewCard key={`${review.author}-${index}`} {...review} />
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
    </ProductPageSection>
  )
}

function PartnerReviewCard({ author, quote }: { author: string; quote: string }) {
  return (
    <article className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        <Image
          src={partner}
          alt={author}
          className="h-full min-h-[200px] w-full rounded-[20px] object-cover md:w-[194px] md:flex-none"
        />
        <div className="flex flex-1 flex-col justify-center gap-8">
          <p className="text-[20px] font-medium leading-[145%] text-[#22354A]">
            &ldquo;{quote}&rdquo;
          </p>
          <div className="flex items-center gap-4 self-start sm:gap-6">
            <div className="shrink-0 whitespace-nowrap border-r border-[#D5E0E8] pr-4 text-[20px] font-medium leading-[145%] text-[#22354A] sm:pr-6 sm:text-[24px]">
              {author}
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
            key={`product-review-dot-${pageIndex}`}
            type="button"
            aria-label={`Перейти до слайду ${pageIndex + 1}`}
            onClick={() => onSelect(pageIndex)}
            className={`h-2 w-2 rounded-full ${pageIndex === activePage ? 'bg-[#4FACF5]' : 'bg-[#D5E0E8]'}`}
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
