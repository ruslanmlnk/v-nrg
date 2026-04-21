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
import {
  chunkItems,
  createProductGallery,
  fallbackProductTabs,
  partnerReviews,
} from './data'
import type { ProductData } from '../../data/products'

export default function ProductDetailView({ product }: { product: ProductData }) {
  const { addToCart, isInCompare, products, toggleCompare } = useCommerce()
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
  const [activeReviewPage, setActiveReviewPage] = useState(0)
  const displayTabs = product.tabs.length > 0 ? product.tabs : fallbackProductTabs
  const [activeTabId, setActiveTabId] = useState<string>(displayTabs[0]?.id ?? 'description')
  const [isShareActive, setIsShareActive] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const productGallery = useMemo(() => createProductGallery(product), [product])
  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 3),
    [product.id, products],
  )
  const faqColumns = useMemo(() => {
    if (product.faq.length === 0) {
      return undefined
    }

    const faqItems = product.faq.map((item, index) => ({
      ...item,
      isActive: index === 0,
    }))

    return chunkItems(faqItems, Math.ceil(faqItems.length / 2))
  }, [product.faq])

  const activeGalleryItem = productGallery[activeGalleryIndex] ?? productGallery[0]
  const activeTab = displayTabs.find((tab) => tab.id === activeTabId) ?? displayTabs[0]
  const isCompared = isInCompare(product.id)
  const reviewPages = chunkItems(partnerReviews, 2)
  const visibleReviews = reviewPages[activeReviewPage] ?? reviewPages[0] ?? []
  const demoHref = `mailto:0870758@gmail.com?subject=${encodeURIComponent(`Демонстрація ${product.title}`)}`
  const paymentHref = `mailto:0870758@gmail.com?subject=${encodeURIComponent(`Оплата частинами ${product.title}`)}`
  const deliveryHref = `mailto:0870758@gmail.com?subject=${encodeURIComponent(`Умови доставки та оплати ${product.title}`)}`

  useEffect(() => {
    setActiveGalleryIndex(0)
    setActiveTabId(displayTabs[0]?.id ?? 'description')
  }, [displayTabs, product.id])

  const handleShare = async () => {
    const shareData = {
      text: product.title,
      title: product.title,
      url: typeof window === 'undefined' ? product.href : window.location.href,
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
      <ProductPageSection className="gap-12">
        <ProductHeroSection title={product.title} />

        <ProductOverviewSection
          activeGalleryIndex={activeGalleryIndex}
          activeGalleryItem={activeGalleryItem}
          demoHref={demoHref}
          deliveryHref={deliveryHref}
          isCompared={isCompared}
          isShareActive={isShareActive}
          onAddToCart={() => addToCart(product.id, quantity)}
          onDecreaseQuantity={() => setQuantity((current) => Math.max(1, current - 1))}
          onIncreaseQuantity={() => setQuantity((current) => current + 1)}
          onSelectGallery={setActiveGalleryIndex}
          onShare={handleShare}
          onToggleCompare={() => toggleCompare(product.id)}
          paymentHref={paymentHref}
          product={product}
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

      <ProductComparisonSection demoHref={demoHref} />
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
      <ProductCardsSection eyebrow="Більше товарів" products={relatedProducts} title="Схожі товари" />
      <ProductCardsSection
        eyebrow="Рекомендуємо разом"
        products={relatedProducts}
        title="Разом з цим товаром купують"
      />

      <FaqSection columns={faqColumns} />
    </div>
  )
}
