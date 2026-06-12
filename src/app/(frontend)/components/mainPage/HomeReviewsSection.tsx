'use client'

import { useEffect, useMemo, useState } from 'react'

import PartnerReviewsSection from '../shared/PartnerReviewsSection'
import { chunkItems } from '../productDetail/data'
import type { PartnerReview } from '../shared/PartnerReviewsSection'

export default function HomeReviewsSection({
  reviews,
  subtitle,
  title,
}: {
  reviews: PartnerReview[]
  subtitle: string
  title: string
}) {
  const itemsPerPage = useResponsiveReviewPageSize()
  const reviewPages = useMemo(() => chunkItems(reviews, itemsPerPage), [itemsPerPage, reviews])
  const [activePage, setActivePage] = useState(0)
  const visibleReviews = reviewPages[activePage] ?? reviewPages[0] ?? []

  if (reviews.length === 0) {
    return null
  }

  return (
    <PartnerReviewsSection
      activePage={activePage}
      pageCount={reviewPages.length}
      reviews={visibleReviews}
      eyebrow={subtitle}
      title={title}
      onNext={() => setActivePage((current) => (current + 1) % reviewPages.length)}
      onPrev={() => setActivePage((current) => (current - 1 + reviewPages.length) % reviewPages.length)}
      onSelect={setActivePage}
    />
  )
}

function useResponsiveReviewPageSize() {
  const [itemsPerPage, setItemsPerPage] = useState(2)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const updateItemsPerPage = () => setItemsPerPage(mediaQuery.matches ? 1 : 2)

    updateItemsPerPage()
    mediaQuery.addEventListener('change', updateItemsPerPage)

    return () => mediaQuery.removeEventListener('change', updateItemsPerPage)
  }, [])

  return itemsPerPage
}
