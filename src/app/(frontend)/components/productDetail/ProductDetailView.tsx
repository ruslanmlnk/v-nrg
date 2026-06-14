'use client'

import { useEffect, useMemo, useState } from 'react'

import FaqSection from '../FaqSection'
import { useCommerce } from '../providers/CommerceProvider'
import {
  ProductCardsSection,
  ProductCertificatesSection,
  ProductComparisonSection,
  ProductHeroSection,
  ProductOverviewSection,
  ProductPageSection,
  ProductReviewsSection,
  ProductTabsSection,
} from './ProductDetailSections'
import { chunkItems, createProductGallery, partnerReviews } from './data'
import type { ProductData } from '../../data/products'

export default function ProductDetailView({ product }: { product: ProductData }) {
  const { addToCart, getProductById, isInCompare, products, toggleCompare } = useCommerce()
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
  const [activeReviewPage, setActiveReviewPage] = useState(0)
  const displayProduct = getProductById(product.id) ?? product
  const displayTabs = displayProduct.tabs
  const [activeTabId, setActiveTabId] = useState<string>(displayTabs[0]?.id ?? 'description')
  const [isShareActive, setIsShareActive] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const productGallery = useMemo(() => createProductGallery(displayProduct), [displayProduct])
  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== displayProduct.id).slice(0, 3),
    [displayProduct.id, products],
  )
  const faqColumns = useMemo(() => {
    if (displayProduct.faq.length === 0) {
      return undefined
    }

    const faqItems = displayProduct.faq.map((item, index) => ({
      ...item,
      isActive: index === 0,
    }))

    return chunkItems(faqItems, Math.ceil(faqItems.length / 2))
  }, [displayProduct.faq])

  const activeGalleryItem = productGallery[activeGalleryIndex] ?? productGallery[0]
  const activeTab = displayTabs.find((tab) => tab.id === activeTabId) ?? displayTabs[0]
  const isCompared = isInCompare(displayProduct.id)
  const reviewPages = chunkItems(partnerReviews, 2)
  const visibleReviews = reviewPages[activeReviewPage] ?? reviewPages[0] ?? []
  const paymentHref = `mailto:0870758@gmail.com?subject=${encodeURIComponent(`Оплата частинами ${displayProduct.title}`)}`
  const deliveryHref = `mailto:0870758@gmail.com?subject=${encodeURIComponent(`Умови доставки та оплати ${displayProduct.title}`)}`

  useEffect(() => {
    setActiveGalleryIndex(0)
    setActiveTabId(displayTabs[0]?.id ?? 'description')
  }, [displayProduct.id, displayTabs])

  const handleShare = async () => {
    const shareData = {
      text: displayProduct.title,
      title: displayProduct.title,
      url: typeof window === 'undefined' ? displayProduct.href : window.location.href,
    }

    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share(shareData)
      } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url)
      }

      setIsShareActive(true)
      window.setTimeout(() => setIsShareActive(false), 1800)
    } catch {
      setIsShareActive(false)
    }
  }

  return (
    <div className="bg-[#F5F8F9] pt-5">
      <ProductPageSection className="gap-12" sectionClassName="lg:pb-[100px]">
        <ProductHeroSection
          categoryLabel={displayProduct.categoryLabel}
          categorySlug={displayProduct.category}
          title={displayProduct.title}
        />

        <ProductOverviewSection
          activeGalleryIndex={activeGalleryIndex}
          activeGalleryItem={activeGalleryItem}
          deliveryHref={deliveryHref}
          isCompared={isCompared}
          isShareActive={isShareActive}
          onAddToCart={() => addToCart(displayProduct.id, quantity)}
          onDecreaseQuantity={() => setQuantity((current) => Math.max(1, current - 1))}
          onIncreaseQuantity={() => setQuantity((current) => current + 1)}
          onSelectGallery={setActiveGalleryIndex}
          onShare={handleShare}
          onToggleCompare={() => toggleCompare(displayProduct.id)}
          paymentHref={paymentHref}
          product={displayProduct}
          productGallery={productGallery}
          quantity={quantity}
        />

        <ProductTabsSection
          activeTab={activeTab}
          activeTabId={activeTabId}
          displayTabs={displayTabs}
          onSelectTab={setActiveTabId}
        />
      </ProductPageSection>

      <ProductComparisonSection />
      <ProductCertificatesSection />
      <ProductReviewsSection
        activePage={activeReviewPage}
        pageCount={reviewPages.length}
        reviews={visibleReviews}
        onNext={() => setActiveReviewPage((current) => (current + 1) % reviewPages.length)}
        onPrev={() =>
          setActiveReviewPage((current) => (current - 1 + reviewPages.length) % reviewPages.length)
        }
        onSelect={setActiveReviewPage}
      />
      <ProductCardsSection
        eyebrow="Більше товарів"
        products={relatedProducts}
        title="Схожі товари"
      />
      <ProductCardsSection
        eyebrow="Рекомендуємо разом"
        products={relatedProducts}
        title="Разом з цим товаром купують"
      />

      <FaqSection columns={faqColumns} />
    </div>
  )
}
