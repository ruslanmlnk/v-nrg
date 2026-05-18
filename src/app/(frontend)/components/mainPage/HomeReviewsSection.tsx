'use client'

import { useState } from 'react'

import PartnerReviewsSection from '../shared/PartnerReviewsSection'
import { chunkItems, partnerReviews } from '../productDetail/data'

const reviewPages = chunkItems(partnerReviews, 2)

export default function HomeReviewsSection() {
  const [activePage, setActivePage] = useState(0)
  const visibleReviews = reviewPages[activePage] ?? reviewPages[0] ?? []

  return (
    <PartnerReviewsSection
      activePage={activePage}
      pageCount={reviewPages.length}
      reviews={visibleReviews}
      onNext={() => setActivePage((current) => (current + 1) % reviewPages.length)}
      onPrev={() => setActivePage((current) => (current - 1 + reviewPages.length) % reviewPages.length)}
      onSelect={setActivePage}
    />
  )
}
