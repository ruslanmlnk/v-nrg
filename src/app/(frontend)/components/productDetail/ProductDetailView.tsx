'use client'

import { useEffect, useMemo, useState } from 'react'

import { PartsPaymentModal } from '../checkout/CheckoutSections'
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
import { chunkItems, createProductGallery } from './data'
import type { ProductData } from '../../data/products'

export default function ProductDetailView({ product }: { product: ProductData }) {
  const { addToCart, checkoutOrder, getProductById, isInCompare, products, toggleCompare } =
    useCommerce()
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
  const [activeReviewPage, setActiveReviewPage] = useState(0)
  const displayProduct = getProductById(product.id) ?? product
  const displayTabs = displayProduct.tabs
  const [activeTabId, setActiveTabId] = useState<string>(displayTabs[0]?.id ?? 'description')
  const [isShareActive, setIsShareActive] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [isPartsModalOpen, setIsPartsModalOpen] = useState(false)
  const [partsCount, setPartsCount] = useState(8)

  const productGallery = useMemo(() => createProductGallery(displayProduct), [displayProduct])
  const moreProducts = useMemo(() => {
    const selectedProducts = products.filter((item) =>
      displayProduct.moreProductIds.includes(item.cmsId),
    )

    return selectedProducts.length > 0
      ? selectedProducts
      : products.filter((item) => item.id !== displayProduct.id).slice(0, 3)
  }, [displayProduct.id, displayProduct.moreProductIds, products])
  const recommendedProducts = useMemo(() => {
    const selectedProducts = products.filter((item) =>
      displayProduct.recommendedTogetherIds.includes(item.cmsId),
    )

    return selectedProducts.length > 0
      ? selectedProducts
      : products.filter((item) => item.id !== displayProduct.id).slice(0, 3)
  }, [displayProduct.id, displayProduct.recommendedTogetherIds, products])
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
  const reviewPages = chunkItems(displayProduct.reviews, 2)
  const visibleReviews = reviewPages[activeReviewPage] ?? reviewPages[0] ?? []
  const deliveryHref = `mailto:0870758@gmail.com?subject=${encodeURIComponent(`Умови доставки та оплати ${displayProduct.title}`)}`
  const partsMonthlyPayment = getMonthlyPayment(displayProduct.price * quantity, partsCount)

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
    <div className="bg-[#F5F8F9] pb-[100px] pt-5">
      <div className="flex flex-col gap-[100px]">
        <ProductPageSection className="gap-12">
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
            onOpenPartsPayment={() => setIsPartsModalOpen(true)}
            onSelectGallery={setActiveGalleryIndex}
            onShare={handleShare}
            onToggleCompare={() => toggleCompare(displayProduct.id)}
            product={displayProduct}
            productGallery={productGallery}
            quantity={quantity}
          />

          {displayTabs.length > 0 ? (
            <ProductTabsSection
              activeTab={activeTab}
              activeTabId={activeTabId}
              displayTabs={displayTabs}
              onSelectTab={setActiveTabId}
            />
          ) : null}
        </ProductPageSection>

        {displayProduct.beforeAfter.length > 0 ? (
          <ProductComparisonSection cards={displayProduct.beforeAfter} />
        ) : null}
        {displayProduct.certificates.length > 0 ? (
          <ProductCertificatesSection certificates={displayProduct.certificates} />
        ) : null}
        {displayProduct.reviews.length > 0 ? (
          <ProductReviewsSection
            activePage={activeReviewPage}
            pageCount={reviewPages.length}
            reviews={visibleReviews}
            onNext={() => setActiveReviewPage((current) => (current + 1) % reviewPages.length)}
            onPrev={() =>
              setActiveReviewPage(
                (current) => (current - 1 + reviewPages.length) % reviewPages.length,
              )
            }
            onSelect={setActiveReviewPage}
          />
        ) : null}
        {moreProducts.length > 0 ? (
          <ProductCardsSection
            eyebrow="Більше товарів"
            products={moreProducts}
            title="Схожі товари"
          />
        ) : null}
        {recommendedProducts.length > 0 ? (
          <ProductCardsSection
            eyebrow="Рекомендуємо разом"
            products={recommendedProducts}
            title="Разом з цим товаром купують"
          />
        ) : null}

        {faqColumns ? <FaqSection columns={faqColumns} sectionClassName="px-6" /> : null}
      </div>

      <PartsPaymentModal
        isOpen={isPartsModalOpen}
        monthlyPayment={partsMonthlyPayment}
        onClose={() => setIsPartsModalOpen(false)}
        onSelect={(nextPartsCount) => {
          setIsPartsModalOpen(false)
          checkoutOrder([{ productId: displayProduct.id, quantity }], {
            partsCount: nextPartsCount,
            paymentMethod: 'monobank-parts',
          })
        }}
        onUpdatePartsCount={setPartsCount}
        partsCount={partsCount}
      />
    </div>
  )
}

function getMonthlyPayment(total: number, partsCount: number) {
  if (!Number.isFinite(total) || total <= 0) {
    return 0
  }

  return Math.ceil(total / Math.max(1, partsCount))
}
