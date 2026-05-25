'use client'

import { useEffect, useMemo, useState } from 'react'

import PartnerReviewsSection from '../shared/PartnerReviewsSection'
import { chunkItems, partnerReviews } from '../productDetail/data'

export default function HomeReviewsSection() {
  const itemsPerPage = useResponsiveReviewPageSize()
  const reviewPages = useMemo(() => chunkItems(partnerReviews, itemsPerPage), [itemsPerPage])
  const [activePage, setActivePage] = useState(0)
  const visibleReviews = reviewPages[activePage] ?? reviewPages[0] ?? []

  useEffect(() => {
    setActivePage(0)
  }, [itemsPerPage])

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
