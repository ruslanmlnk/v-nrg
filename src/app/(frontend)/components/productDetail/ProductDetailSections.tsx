'use client'

import type { ReactNode } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'

import beforeAfterAfter from '@public/assets/product/before-after-after.jpg'
import beforeAfterBefore from '@public/assets/product/before-after-before.jpg'
import certificate from '@public/assets/product/certificate.jpg'
import partner from '@public/assets/product/partner.jpg'

import SectionHeading from '../shared/SectionHeading'
import ProductImagePlaceholder from '../shared/ProductImagePlaceholder'
import BeforeAfterSlider from '../ui/BeforeAfterSlider'
import { useCommerce } from '../providers/CommerceProvider'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import availabilityIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-product-detail-page-availability.svg'
import cartIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-product-detail-page-cart.svg'
import compareIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-product-detail-page-compare.svg'
import demoArrowIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-product-detail-page-demo-arrow.svg'
import instagramIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-product-detail-page-instagram.svg'
import phoneIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-product-detail-page-phone.svg'
import productChevronLeftIconAsset from '@public/icon/generated/product-chevron-left.svg'
import productChevronRightIconAsset from '@public/icon/generated/product-chevron-right.svg'
import productMiniChevronDownIconAsset from '@public/icon/generated/product-mini-chevron-down.svg'
import productMiniChevronUpIconAsset from '@public/icon/generated/product-mini-chevron-up.svg'
import shareIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-product-detail-page-share.svg'
import starIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-product-detail-page-star.svg'
import {
  formatPrice,
  type ProductData,
  type ProductImage,
  type ProductTabData,
} from '../../data/products'
import { comparisonCardPositions } from './data'

export function ProductPageSection({
  children,
  className = '',
  sectionClassName = '',
}: {
  children: ReactNode
  className?: string
  sectionClassName?: string
}) {
  return (
    <section className={sectionClassName}>
      <div className={`mx-auto flex max-w-[1288px] flex-col px-6 ${className}`.trim()}>
        {children}
      </div>
    </section>
  )
}

export function ProductHeroSection({ title }: { title: string }) {
  return (
    <section className="flex min-h-[268px] items-center justify-center rounded-[20px] bg-[#22354A] px-6 py-14 text-center text-white">
      <div className="flex max-w-[920px] flex-col items-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-2 text-[16px] font-bold uppercase leading-[145%]">
          <Link href="/">Головна</Link>
          <span>/</span>
          <Link href="/catalog">Каталог</Link>
          <span>/</span>
          <Link href="/catalog/aparaty-vakuumnoho-masazhu">Апарати вакуумного масажу</Link>
          <span>/</span>
          <span className="text-[#4FACF5]">{title}</span>
        </div>
        <h1 className="text-[36px] font-medium leading-[145%] md:text-[48px]">{title}</h1>
      </div>
    </section>
  )
}

export function ProductOverviewSection({
  activeGalleryIndex,
  activeGalleryItem,
  demoHref,
  deliveryHref,
  isCompared,
  isShareActive,
  onAddToCart,
  onDecreaseQuantity,
  onIncreaseQuantity,
  onSelectGallery,
  onToggleCompare,
  onShare,
  paymentHref,
  product,
  productGallery,
  quantity,
}: {
  activeGalleryIndex: number
  activeGalleryItem?: { alt: string; main: string; video: boolean }
  demoHref: string
  deliveryHref: string
  isCompared: boolean
  isShareActive: boolean
  onAddToCart: () => void
  onDecreaseQuantity: () => void
  onIncreaseQuantity: () => void
  onSelectGallery: (index: number) => void
  onToggleCompare: () => void
  onShare: () => Promise<void>
  paymentHref: string
  product: ProductData
  productGallery: Array<{ alt: string; thumb: string; video: boolean }>
  quantity: number
}) {
  return (
    <section className="flex flex-col gap-5">
      <div className="grid items-start gap-5 xl:grid-cols-[610px_minmax(0,1fr)]">
        <div className="flex flex-col gap-4 rounded-[20px] bg-white p-6 shadow-[0_20px_60px_rgba(34,53,74,0.04)] xl:h-[621px]">
          <div className="relative flex min-h-[340px] flex-1 items-center justify-center overflow-hidden rounded-[20px] border border-[#D5E0E8] bg-[linear-gradient(180deg,rgba(255,255,255,0)_54.61%,rgba(255,255,255,0.8)_91.48%)] px-8 py-8">
            {activeGalleryItem ? (
              <>
                <Image
                  src={activeGalleryItem.main}
                  alt={activeGalleryItem.alt}
                  priority
                  fill
                  className="object-contain"
                  sizes="(min-width: 1280px) 562px, 100vw"
                />
                {activeGalleryItem.video ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayBadge large />
                  </div>
                ) : null}
              </>
            ) : (
              <ProductImagePlaceholder className="absolute inset-0" label="Фото товару відсутнє" />
            )}
          </div>

          {productGallery.length > 0 ? (
            <div className="grid grid-cols-5 gap-4">
              {productGallery.map((item, index) => (
                <GalleryThumb
                  key={item.alt}
                  active={index === activeGalleryIndex}
                  alt={item.alt}
                  image={item.thumb}
                  showPlayBadge={item.video}
                  onClick={() => onSelectGallery(index)}
                />
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-6 rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[16px] font-bold uppercase leading-[145%] text-[#4FACF5]">
                <IconAsset src={availabilityIconAsset} width={16} height={16} />
                <span>В наявності</span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <h2 className="text-[24px] font-medium leading-[145%] text-[#22354A]">
                  {product.title}
                </h2>
                <div className="flex items-center gap-4 text-[#22354A]">
                  <button
                    type="button"
                    aria-label="Порівняти товар"
                    onClick={onToggleCompare}
                    className={`transition-colors hover:opacity-70 ${isCompared ? 'text-[#4FACF5]' : 'text-[#22354A]'}`}
                  >
                    <IconAsset src={compareIconAsset} width={32} height={32} />
                  </button>
                  <button
                    type="button"
                    aria-label="Поділитися товаром"
                    onClick={() => void onShare()}
                    className={`transition-colors hover:opacity-70 ${isShareActive ? 'text-[#4FACF5]' : 'text-[#22354A]'}`}
                  >
                    <IconAsset src={shareIconAsset} width={32} height={32} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <IconAsset src={starIconAsset} width={19} height={18} />
              <span className="text-[18px] font-bold leading-[145%] text-[#22354A]">
                {product.rating}/5
              </span>
            </div>

            <div className="text-[28px] font-bold leading-[145%] text-[#22354A]">
              {formatPrice(product.price)}
            </div>

            <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
              <div className="flex h-[50px] items-center gap-[11px] rounded-[11px] border border-[#D5E0E8] bg-white py-[9px] pl-[18px] pr-[9px]">
                <span className="text-[20px] font-medium leading-[145%] text-[#22354A]">
                  {quantity}
                </span>
                <div className="flex flex-col">
                  <button
                    type="button"
                    aria-label="Збільшити кількість"
                    onClick={onIncreaseQuantity}
                    className="flex h-4 w-[20px] items-center justify-center rounded-[4.5px] bg-white text-[#22354A]"
                  >
                    <MiniChevron up />
                  </button>
                  <button
                    type="button"
                    aria-label="Зменшити кількість"
                    onClick={onDecreaseQuantity}
                    className="flex h-4 w-[20px] items-center justify-center rounded-[4.5px] bg-white text-[#22354A]"
                  >
                    <MiniChevron />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={onAddToCart}
                className="flex h-[50px] w-full items-center justify-center rounded-[40px] bg-[#4FACF5] px-6 text-[18px] font-medium leading-[145%] text-white transition-opacity hover:opacity-90 xl:w-[200px]"
              >
                Купити
              </button>

              <Link
                href={paymentHref}
                className="flex h-[50px] w-full items-center justify-center rounded-[40px] border border-[#D5E0E8] bg-white px-6 text-[18px] font-medium leading-[145%] text-[#22354A] transition-colors hover:border-[#4FACF5] hover:text-[#4FACF5] xl:min-w-[287px] xl:whitespace-nowrap"
              >
                Оплатити частинами
              </Link>
            </div>

            <div className="flex flex-col gap-4 rounded-[20px] bg-[#F5F8F9] p-6">
              <div className="flex flex-col gap-2 text-[18px] leading-[165%] text-[#22354A]">
                <p>
                  <span className="font-semibold">Доставка:</span> 1-3 робочі дні
                </p>
                <p>
                  <span className="font-semibold">Оплата:</span> онлайн, безготівкова, оплата
                  частинами
                </p>
                <p>
                  <span className="font-semibold">Гарантія:</span> 12 місяців
                </p>
              </div>
              <Link
                href={deliveryHref}
                className="text-[18px] font-bold leading-[145%] text-[#4FACF5]"
              >
                Умови доставки та оплати →
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="tel:+380975468820"
                className="flex min-h-[50px] items-center justify-center rounded-[40px] border border-[#D5E0E8] bg-white px-6 text-[18px] font-medium leading-[145%] text-[#22354A]"
              >
                Консультація
              </Link>
              <Link
                href={demoHref}
                className="flex min-h-[50px] items-center justify-center rounded-[40px] border border-[#D5E0E8] bg-white px-6 text-[18px] font-medium leading-[145%] text-[#22354A]"
              >
                Демонстрація
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProductTabsSection({
  activeTab,
  activeTabId,
  displayTabs,
  onSelectTab,
}: {
  activeTab?: ProductTabData
  activeTabId: string
  displayTabs: ProductTabData[]
  onSelectTab: (tabId: string) => void
}) {
  if (displayTabs.length === 0 || !activeTab) {
    return (
      <div className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
        <div className="text-[18px] font-medium leading-[165%] text-[#6F8498]">
          Інформація по вкладках відсутня.
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
      <div className="flex flex-wrap gap-x-12 gap-y-4 border-b border-[#D5E0E8]">
        {displayTabs.map((tab) => (
          <TabLabel
            key={tab.id}
            active={tab.id === activeTabId}
            onClick={() => onSelectTab(tab.id)}
          >
            {tab.label}
          </TabLabel>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeTab.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <TabContent tab={activeTab} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export function ProductComparisonSection({ demoHref }: { demoHref: string }) {
  return (
    <ProductPageSection
      sectionClassName="mt-[100px]"
      className="gap-12 rounded-t-[48px] bg-[#22354A] pb-[140px] pt-[100px] text-white"
    >
      <SectionHeading
        align="center"
        eyebrow="До / Після"
        title="Як працює технологія V-NRG"
        titleClassName="text-white"
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {comparisonCardPositions.map((position, index) => (
          <motion.div
            key={`comparison-${position}`}
            initial={{ opacity: 0, scale: 0.96, y: 22 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ amount: 0.3, once: true }}
            transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <BeforeAfterSlider
              beforeAlt="Стан до процедури V-NRG"
              beforeImage={beforeAfterBefore}
              afterAlt="Стан після процедури V-NRG"
              afterImage={beforeAfterAfter}
              defaultPosition={position}
            />
          </motion.div>
        ))}
      </div>
      <ProductDemoCta demoHref={demoHref} />
    </ProductPageSection>
  )
}

export function ProductCertificatesSection() {
  return (
    <ProductPageSection sectionClassName="pt-[100px]" className="gap-12">
      <SectionHeading
        align="center"
        eyebrow="Надійність та підтримка"
        title="Офіційне обладнання з гарантією та сервісом"
      />
      <div className="flex flex-wrap items-center justify-center gap-5">
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
      </div>
    </ProductPageSection>
  )
}

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

export function ProductCardsSection({
  eyebrow,
  products,
  title,
}: {
  eyebrow: string
  products: ProductData[]
  title: string
}) {
  return (
    <ProductPageSection sectionClassName="pt-[100px]" className="gap-12">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="grid gap-5 lg:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard
            key={`${product.title}-${index}-${eyebrow}`}
            details={product.details}
            href={product.href}
            image={product.cartImage}
            price={product.price}
            productId={product.id}
            title={product.title}
          />
        ))}
      </div>
    </ProductPageSection>
  )
}

function ProductDemoCta({ demoHref }: { demoHref: string }) {
  return (
    <Link href={demoHref} className="group mx-auto inline-flex items-center">
      <span className="flex min-h-[50px] items-center rounded-[40px] bg-white px-6 text-[18px] font-medium leading-[145%] text-[#22354A] transition-transform duration-300 group-hover:-translate-x-1">
        Записатися на демонстрацію
      </span>
      <span className="ml-[-6px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#4FACF5] transition-transform duration-300 group-hover:translate-x-1">
        <IconAsset src={demoArrowIconAsset} width={26} height={26} />
      </span>
    </Link>
  )
}

function GalleryThumb({
  active = false,
  alt,
  image,
  onClick,
  showPlayBadge = false,
}: {
  active?: boolean
  alt: string
  image: string
  onClick: () => void
  showPlayBadge?: boolean
}) {
  return (
    <button
      type="button"
      aria-label={alt}
      onClick={onClick}
      className={`relative flex h-[100px] items-center justify-center overflow-hidden rounded-[20px] bg-white ${
        active ? 'border-[3px] border-[#4FACF5]' : 'border border-[#D5E0E8]'
      }`}
    >
      <Image src={image} alt={alt} fill className="object-cover" sizes="100px" />
      {showPlayBadge ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayBadge />
        </div>
      ) : null}
    </button>
  )
}

function TabLabel({
  active = false,
  children,
  onClick,
}: {
  active?: boolean
  children: ReactNode
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border-b-2 pb-4 text-[20px] font-medium leading-[145%] md:text-[24px] ${
        active ? 'border-[#4FACF5] text-[#22354A]' : 'border-transparent text-[#22354A]'
      }`}
    >
      {children}
    </button>
  )
}

function TabContent({ tab }: { tab: ProductTabData }) {
  if (tab.content.type === 'paragraphs') {
    return (
      <div className="flex flex-col gap-4 pt-8">
        {tab.content.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-[18px] font-medium leading-[165%] text-[#22354A]">
            {paragraph}
          </p>
        ))}
      </div>
    )
  }

  return (
    <ul className="grid gap-4 pt-8 md:grid-cols-2">
      {tab.content.items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-[18px] font-medium leading-[165%] text-[#22354A]"
        >
          <span className="mt-2 h-2 w-2 rounded-full bg-[#4FACF5]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function CertificateCard() {
  return (
    <div className="flex w-[232px] items-center justify-center rounded-[20px] bg-white px-8 py-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
      <Image
        src={certificate}
        alt="Сертифікат V-NRG"
        className="h-[210px] w-[150px] rounded-[5px] border border-[#D5E0E8] object-cover"
      />
    </div>
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

function ProductCard({
  details,
  href,
  image,
  price,
  productId,
  title,
}: {
  details: string
  href: string
  image: ProductImage
  price: number
  productId: ProductData['id']
  title: string
}) {
  const { addToCart } = useCommerce()

  return (
    <Link
      href={href}
      className="flex flex-col rounded-[20px] bg-white shadow-[0_20px_60px_rgba(34,53,74,0.05)]"
    >
      <div className="relative h-[300px] overflow-hidden rounded-[20px] bg-white">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-6"
            sizes="(min-width: 1024px) 400px, 100vw"
          />
        ) : (
          <ProductImagePlaceholder className="absolute inset-0" />
        )}
      </div>
      <div className="flex flex-col gap-4 px-8 py-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">{title}</h3>
          <p className="text-[16px] font-medium leading-[165%] text-[#22354A]">
            {details || 'Немає даних'}
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="text-[24px] font-bold leading-[145%] text-[#22354A]">
            {formatPrice(price)}
          </div>
          <button
            type="button"
            aria-label={`Додати ${title} до кошика`}
            onClick={(event) => {
              event.preventDefault()
              addToCart(productId)
            }}
            className="text-[#4FACF5] transition-opacity hover:opacity-70"
          >
            <IconAsset src={cartIconAsset} width={32} height={32} />
          </button>
        </div>
        <div className="text-[18px] font-medium leading-[145%] text-[#4FACF5]">Детальніше</div>
      </div>
    </Link>
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

function PlayBadge({ large = false }: { large?: boolean }) {
  const size = large ? 'h-[120px] w-[120px]' : 'h-12 w-12'
  const inner = large ? 'h-[84px] w-[84px]' : 'h-[34px] w-[34px]'
  const arrow = large ? 'border-l-[22px] border-y-[14px]' : 'border-l-[10px] border-y-[7px]'

  return (
    <div className={`flex items-center justify-center rounded-full bg-[#4FACF5]/25 ${size}`}>
      <div className={`flex items-center justify-center rounded-full bg-[#4FACF5] ${inner}`}>
        <span className={`ml-1 block h-0 w-0 border-y-transparent border-l-white ${arrow}`} />
      </div>
    </div>
  )
}

function MiniChevron({ up = false }: { up?: boolean }) {
  return (
    <IconAsset
      src={up ? productMiniChevronUpIconAsset : productMiniChevronDownIconAsset}
      width={21}
      height={16}
    />
  )
}
