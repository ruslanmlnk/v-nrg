'use client'

import PartnerReviewsSection from '../shared/PartnerReviewsSection'

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
    <PartnerReviewsSection
      activePage={activePage}
      pageCount={pageCount}
      reviews={reviews}
      onNext={onNext}
      onPrev={onPrev}
      onSelect={onSelect}
    />
  )
}
