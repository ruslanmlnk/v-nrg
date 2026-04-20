'use client'

import type { ReactNode } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useMemo, useState } from 'react'

import beforeAfterAfter from '@public/assets/product/before-after-after.jpg'
import beforeAfterBefore from '@public/assets/product/before-after-before.jpg'
import certificate from '@public/assets/product/certificate.jpg'
import partner from '@public/assets/product/partner.jpg'
import productCardImage from '@public/assets/product/product-card.jpg'
import productMainImage from '@public/assets/product/product-main.jpg'
import productThumbActive from '@public/assets/product/product-thumb-active.jpg'
import productThumbImage from '@public/assets/product/product-thumb.jpg'

import FaqSection from '../../components/FaqSection'
import SiteFooter from '../../components/SiteFooter'
import { useCommerce } from '../../components/providers/CommerceProvider'
import SectionHeading from '../../components/shared/SectionHeading'
import BeforeAfterSlider from '../../components/ui/BeforeAfterSlider'
import {
  formatPrice,
  type ProductData,
  type ProductId,
  type ProductImage,
  type ProductTabData,
} from '../../data/products'

const productHref = '/catalog/aparaty-vakuumnoho-masazhu/v-nrg-18-pro'

const productCards = Array.from({ length: 3 }, () => ({
  details: '18 маніпул · 800 Вт',
  href: productHref,
  price: 68000,
  productId: 'v-nrg-18-pro' as ProductId,
  title: 'V-NRG 18 PRO',
}))

const productGallery = [
  {
    alt: 'V-NRG 18 PRO основний вигляд',
    main: productMainImage,
    thumb: productThumbActive,
    video: true,
  },
  {
    alt: 'V-NRG 18 PRO вигляд збоку',
    main: productThumbImage,
    thumb: productThumbImage,
    video: false,
  },
  {
    alt: 'V-NRG 18 PRO панель керування',
    main: productThumbImage,
    thumb: productThumbImage,
    video: false,
  },
  { alt: 'V-NRG 18 PRO маніпули', main: productThumbImage, thumb: productThumbImage, video: false },
  { alt: 'V-NRG 18 PRO комплект', main: productThumbImage, thumb: productThumbImage, video: false },
] as const

const partnerReviews = [
  {
    author: 'Олена Мельник',
    quote:
      'З V-NRG ми отримали помітні результати вже з перших процедур. Клієнти відзначають зменшення набряків і напруження, а нам подобається проста настройка та стабільна робота апарата.',
  },
  {
    author: 'Ірина Соколова',
    quote:
      'Апарат легко став частиною нашого робочого процесу. Команді подобається проста адаптація режимів, а клієнти швидко помічають комфорт і результат.',
  },
  {
    author: 'Марина Бойко',
    quote:
      'Для салону важливо, що обладнання стабільно працює навіть при щільному записі. Після навчання ми дуже швидко запустили нові процедури в роботу.',
  },
  {
    author: 'Наталія Кравець',
    quote:
      'Найбільше цінуємо поєднання зрозумілого інтерфейсу, підтримки від виробника та прогнозованого результату для клієнтів з різними запитами.',
  },
] as const

const comparisonCardPositions = [44, 58, 71] as const

const description =
  'V-NRG 18 PRO — це професійний апарат вакуумного масажу, розроблений для інтенсивної роботи у сфері естетики та фізіотерапії. Модель поєднує сучасні технології, стабільну потужність та зручність експлуатації.\nАпарат сприяє покращенню мікроциркуляції, лімфодренажу та зменшенню м’язового напруження. Підходить для роботи з різними зонами тіла та дозволяє адаптувати процедури під індивідуальні потреби клієнтів.'

const productTabs: ProductTabData[] = [
  {
    content: {
      paragraphs: description.split('\n'),
      type: 'paragraphs',
    },
    id: 'description',
    label: 'Опис',
  },
  {
    content: {
      items: [
        '18 маніпул для різних зон тіла',
        'Потужність 800 Вт для стабільної роботи',
        'Сенсорна панель керування з простим інтерфейсом',
        'Регулювання інтенсивності вакууму під клієнта',
        'Підходить для естетичних та фізіотерапевтичних процедур',
      ],
      type: 'list',
    },
    id: 'specs',
    label: 'Характеристики',
  },
  {
    content: {
      items: [
        'Основний блок апарата',
        'Набір маніпул для різних зон',
        'Шланги та базові комплектуючі',
        'Кабель живлення та інструкція по запуску',
        'Матеріали для швидкого навчання команди',
      ],
      type: 'list',
    },
    id: 'package',
    label: 'Комплектація',
  },
  {
    content: {
      items: [
        'Швидкий старт без складного навчання',
        'Гнучке налаштування під різні процедури',
        'Стабільна робота при щільному салонному графіку',
        'Офіційна підтримка та сервіс від виробника',
        'Підходить як для запуску, так і для масштабування напрямку',
      ],
      type: 'list',
    },
    id: 'advantages',
    label: 'Переваги',
  },
  {
    content: {
      paragraphs: [
        'На сторінці навчання доступні відеоінструкції по першому запуску, налаштуванню, роботі з тілом та обличчям, а також по базовому обслуговуванню обладнання.',
      ],
      type: 'paragraphs',
    },
    id: 'video',
    label: 'Відео роботи',
  },
]

export default function ProductDetailPage({ product }: { product: ProductData }) {
  const { addToCart, isInCompare, products, toggleCompare } = useCommerce()
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
  const [activeReviewPage, setActiveReviewPage] = useState(0)
  const displayTabs = product.tabs.length > 0 ? product.tabs : productTabs
  const [activeTabId, setActiveTabId] = useState<string>(displayTabs[0]?.id ?? 'description')
  const [isShareActive, setIsShareActive] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const productGallery = useMemo(() => createProductGallery(product), [product])
  const productCards = useMemo(
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
  const partnerReviewPages = chunkItems(partnerReviews, 2)
  const visiblePartnerReviews = partnerReviewPages[activeReviewPage] ?? partnerReviewPages[0] ?? []
  const demoSubject = encodeURIComponent(`Демонстрація ${product.title}`)
  const paymentSubject = encodeURIComponent(`Оплата частинами ${product.title}`)
  const deliverySubject = encodeURIComponent(`Умови доставки та оплати ${product.title}`)

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
        <section className="flex min-h-[268px] items-center justify-center rounded-[20px] bg-[#22354A] px-6 py-14 text-center text-white">
          <div className="flex max-w-[920px] flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-2 text-[16px] font-bold uppercase leading-[145%]">
              <Link href="/">Головна</Link>
              <span>/</span>
              <Link href="/catalog">Каталог</Link>
              <span>/</span>
              <Link href="/catalog/aparaty-vakuumnoho-masazhu">Апарати вакуумного масажу</Link>
              <span>/</span>
              <span className="text-[#4FACF5]">{product.title}</span>
            </div>
            <h1 className="text-[36px] font-medium leading-[145%] md:text-[48px]">
              {product.title}
            </h1>
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <div className="grid items-start gap-5 xl:grid-cols-[610px_minmax(0,1fr)]">
            <div className="flex flex-col gap-4 rounded-[20px] bg-white p-6 shadow-[0_20px_60px_rgba(34,53,74,0.04)] xl:h-[621px]">
              <div className="relative flex min-h-[340px] flex-1 items-center justify-center overflow-hidden rounded-[20px] border border-[#D5E0E8] bg-[linear-gradient(180deg,rgba(255,255,255,0)_54.61%,rgba(255,255,255,0.8)_91.48%)] px-8 py-8">
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
              </div>

              <div className="grid grid-cols-5 gap-4">
                {productGallery.map((item, index) => (
                  <GalleryThumb
                    key={item.alt}
                    active={index === activeGalleryIndex}
                    alt={item.alt}
                    image={item.thumb}
                    showPlayBadge={item.video}
                    onClick={() => setActiveGalleryIndex(index)}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-6 rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-[16px] font-bold uppercase leading-[145%] text-[#4FACF5]">
                    <AvailabilityIcon />
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
                        onClick={() => toggleCompare(product.id)}
                        className={`transition-colors hover:opacity-70 ${isCompared ? 'text-[#4FACF5]' : 'text-[#22354A]'}`}
                      >
                        <CompareIcon />
                      </button>
                      <button
                        type="button"
                        aria-label="Поділитися товаром"
                        onClick={() => void handleShare()}
                        className={`transition-colors hover:opacity-70 ${isShareActive ? 'text-[#4FACF5]' : 'text-[#22354A]'}`}
                      >
                        <ShareIcon />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <StarIcon />
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
                        onClick={() => setQuantity((current) => current + 1)}
                        className="flex h-4 w-[20px] items-center justify-center rounded-[4.5px] bg-white text-[#22354A]"
                      >
                        <MiniChevron up />
                      </button>
                      <button
                        type="button"
                        aria-label="Зменшити кількість"
                        onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                        className="flex h-4 w-[20px] items-center justify-center rounded-[4.5px] bg-white text-[#22354A]"
                      >
                        <MiniChevron />
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => addToCart(product.id, quantity)}
                    className="flex h-[50px] w-full items-center justify-center rounded-[40px] bg-[#4FACF5] px-6 text-[18px] font-medium leading-[145%] text-white transition-opacity hover:opacity-90 xl:w-[200px]"
                  >
                    Купити
                  </button>

                  <Link
                    href={`mailto:0870758@gmail.com?subject=${paymentSubject}`}
                    className="flex h-[50px] w-full items-center justify-center rounded-[40px] border border-[#D5E0E8] bg-white px-6 text-[18px] font-medium leading-[145%] text-[#22354A] transition-colors hover:border-[#4FACF5] hover:text-[#4FACF5] xl:min-w-[287px] xl:whitespace-nowrap"
                  >
                    Оплатити частинами
                  </Link>
                </div>

                <div className="flex flex-col gap-4 rounded-[20px] bg-[#F5F8F9] p-6">
                  <div className="flex flex-col gap-2 text-[18px] leading-[165%] text-[#22354A]">
                    <p>
                      <span className="font-semibold">Доставка:</span> 1–3 робочі дні
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
                    href={`mailto:0870758@gmail.com?subject=${deliverySubject}`}
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
                    href={`mailto:0870758@gmail.com?subject=${demoSubject}`}
                    className="flex min-h-[50px] items-center justify-center rounded-[40px] border border-[#D5E0E8] bg-white px-6 text-[18px] font-medium leading-[145%] text-[#22354A]"
                  >
                    Демонстрація
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
            <div className="flex flex-wrap gap-x-12 gap-y-4 border-b border-[#D5E0E8]">
              {displayTabs.map((tab) => (
                <TabLabel
                  key={tab.id}
                  active={tab.id === activeTabId}
                  onClick={() => setActiveTabId(tab.id)}
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
        </section>
      </ProductPageSection>

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
        <ProductDemoCta />
      </ProductPageSection>

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

      <ProductPageSection sectionClassName="pt-[100px]" className="gap-12">
        <SectionHeading align="center" eyebrow="Відгуки" title="Відгуки наших партнерів" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`review-page-${activeReviewPage}`}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -32 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-5 lg:grid-cols-2"
          >
            {visiblePartnerReviews.map((review, index) => (
              <PartnerReviewCard key={`${review.author}-${index}`} {...review} />
            ))}
          </motion.div>
        </AnimatePresence>
        <SliderNavigation
          activePage={activeReviewPage}
          pageCount={partnerReviewPages.length}
          onNext={() => setActiveReviewPage((current) => (current + 1) % partnerReviewPages.length)}
          onPrev={() =>
            setActiveReviewPage(
              (current) => (current - 1 + partnerReviewPages.length) % partnerReviewPages.length,
            )
          }
          onSelect={setActiveReviewPage}
        />
      </ProductPageSection>

      <ProductPageSection sectionClassName="pt-[100px]" className="gap-12">
        <SectionHeading eyebrow="Більше товарів" title="Схожі товари" />
        <div className="grid gap-5 lg:grid-cols-3">
          {productCards.map((relatedProduct, index) => (
            <ProductCard
              key={`${relatedProduct.title}-${index}`}
              details={relatedProduct.details}
              href={relatedProduct.href}
              image={relatedProduct.cartImage}
              price={relatedProduct.price}
              productId={relatedProduct.id}
              title={relatedProduct.title}
            />
          ))}
        </div>
      </ProductPageSection>

      <ProductPageSection sectionClassName="pt-[100px]" className="gap-12">
        <SectionHeading eyebrow="Рекомендуємо разом" title="Разом з цим товаром купують" />
        <div className="grid gap-5 lg:grid-cols-3">
          {productCards.map((relatedProduct, index) => (
            <ProductCard
              key={`${relatedProduct.title}-bundle-${index}`}
              details={relatedProduct.details}
              href={relatedProduct.href}
              image={relatedProduct.cartImage}
              price={relatedProduct.price}
              productId={relatedProduct.id}
              title={relatedProduct.title}
            />
          ))}
        </div>
      </ProductPageSection>

      <FaqSection columns={faqColumns} />
      <SiteFooter />
    </div>
  )
}

function createProductGallery(product: ProductData) {
  const images = Array.from(
    new Set(
      [
        ...product.galleryImages,
        product.compareImage,
        product.catalogImage,
        product.cartImage,
        productMainImage.src,
        productThumbImage.src,
      ].filter(Boolean),
    ),
  )

  return images.slice(0, 5).map((image, index) => ({
    alt: index === 0 ? `${product.title} основне фото` : `${product.title} фото ${index + 1}`,
    main: image,
    thumb: image,
    video: index === 0,
  }))
}

function ProductPageSection({
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

function ProductDemoCta() {
  return (
    <Link
      href="mailto:0870758@gmail.com?subject=Записатися%20на%20демонстрацію%20V-NRG%2018%20PRO"
      className="group mx-auto inline-flex items-center"
    >
      <span className="flex min-h-[50px] items-center rounded-[40px] bg-white px-6 text-[18px] font-medium leading-[145%] text-[#22354A] transition-transform duration-300 group-hover:-translate-x-1">
        Записатися на демонстрацію
      </span>
      <span className="ml-[-6px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#4FACF5] transition-transform duration-300 group-hover:translate-x-1">
        <DemoArrowIcon />
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
  image: ProductImage
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
                <InstagramIcon />
              </CircleAction>
              <CircleAction href="tel:+380975468820" label="Телефон" size="md">
                <PhoneIcon />
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
        <ChevronLeft />
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
        <ChevronRight />
      </button>
    </div>
  )
}

function chunkItems<T>(items: readonly T[], size: number) {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, index) =>
    items.slice(index * size, index * size + size),
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
  productId: ProductId
  title: string
}) {
  const { addToCart } = useCommerce()

  return (
    <Link
      href={href}
      className="flex flex-col rounded-[20px] bg-white shadow-[0_20px_60px_rgba(34,53,74,0.05)]"
    >
      <div className="relative h-[300px] overflow-hidden rounded-[20px] bg-white">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-6"
          sizes="(min-width: 1024px) 400px, 100vw"
        />
      </div>
      <div className="flex flex-col gap-4 px-8 py-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">{title}</h3>
          <p className="text-[16px] font-medium leading-[165%] text-[#22354A]">{details}</p>
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
            <CartIcon />
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

function DemoArrowIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 13H24.55"
        stroke="white"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 5.25L23.75 13L16 20.75"
        stroke="white"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function AvailabilityIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.3609 1.91203C14.7774 1.49547 15.4527 1.49547 15.8692 1.91203C16.2858 2.3286 16.2858 3.00382 15.8692 3.42038L5.20244 14.0872C5.0024 14.2872 4.73117 14.3997 4.44827 14.3997C4.16537 14.3997 3.89414 14.2872 3.6941 14.0872L0.494063 10.8871C0.0775 10.4706 0.0774997 9.79534 0.494063 9.37877C0.910626 8.96221 1.58585 8.96221 2.00241 9.37877L4.44827 11.8246L14.3609 1.91203Z"
        fill="#4FACF5"
      />
    </svg>
  )
}

function CompareIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M31.9253 16.892L27.884 5.34533C27.324 3.74267 25.8053 2.66533 24.108 2.66533H17.3333V1.33333C17.3333 0.597333 16.7373 0 16 0C15.2627 0 14.6667 0.597333 14.6667 1.33333V2.66667H7.892C6.19467 2.66667 4.676 3.744 4.116 5.34533L0.0746667 16.892C0.0253333 17.0333 0 17.7347 0 17.7347C0 21.076 2.49467 23.824 5.68 23.9907C7.33467 24.0827 8.92533 23.496 10.1307 22.352C11.32 21.224 12 19.6373 12 18C12 18 11.972 17.024 11.9187 16.8773L7.72533 5.344C7.78 5.33733 7.836 5.33333 7.892 5.33333H14.6667V29.3333H6.66667C5.92933 29.3333 5.33333 29.9307 5.33333 30.6667C5.33333 31.4027 5.92933 32 6.66667 32H25.3333C26.0707 32 26.6667 31.4027 26.6667 30.6667C26.6667 29.9307 26.0707 29.3333 25.3333 29.3333H17.3333V5.33333H24.108C24.164 5.33333 24.22 5.336 24.2747 5.344L20.08 16.8773C20.0267 17.0227 19.9987 18 19.9987 18C19.9987 19.6387 20.68 21.224 21.868 22.352C22.9947 23.4213 24.3053 23.9907 26.32 23.9907C29.508 23.9907 31.9987 21.076 31.9987 17.7347C31.9987 17.7347 31.9747 17.0333 31.9253 16.892ZM5.81867 21.3293C4.37733 21.2533 3.17067 20.1267 2.79733 18.6667H9.26667C9.13333 19.332 8.8 19.9387 8.29467 20.4173C7.62533 21.0533 6.74267 21.376 5.82 21.328L5.81867 21.3293ZM8.76267 16H3.212L5.93467 8.22267L8.76267 16ZM26.0653 8.22267L28.788 16H23.2373L26.0653 8.22267ZM26.1827 21.3293C25.2653 21.3773 24.3773 21.0547 23.7067 20.4187C23.2013 19.9387 22.868 19.332 22.7347 18.668H29.204C28.8307 20.1267 27.6253 21.2547 26.184 21.3307L26.1827 21.3293Z"
        fill="currentColor"
      />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M27.6364 5.81818C27.6364 4.21153 26.334 2.90909 24.7274 2.90909C23.1207 2.90909 21.8183 4.21153 21.8183 5.81818C21.8183 7.42482 23.1207 8.72727 24.7274 8.72727C26.334 8.72727 27.6364 7.42482 27.6364 5.81818ZM30.5455 5.81818C30.5455 9.03147 27.9406 11.6364 24.7274 11.6364C21.5141 11.6364 18.9092 9.03147 18.9092 5.81818C18.9092 2.60489 21.5141 0 24.7274 0C27.9406 0 30.5455 2.60489 30.5455 5.81818Z"
        fill="currentColor"
      />
      <path
        d="M10.1823 15.9998C10.1823 14.3932 8.8799 13.0907 7.27326 13.0907C5.66661 13.0907 4.36417 14.3932 4.36417 15.9998C4.36417 17.6065 5.66661 18.9089 7.27326 18.9089C8.8799 18.9089 10.1823 17.6065 10.1823 15.9998ZM13.0914 15.9998C13.0914 19.2131 10.4865 21.818 7.27326 21.818C4.05996 21.818 1.45508 19.2131 1.45508 15.9998C1.45508 12.7865 4.05996 10.1816 7.27326 10.1816C10.4865 10.1816 13.0914 12.7865 13.0914 15.9998Z"
        fill="currentColor"
      />
      <path
        d="M27.6364 26.1815C27.6364 24.5748 26.334 23.2724 24.7274 23.2724C23.1207 23.2724 21.8183 24.5748 21.8183 26.1815C21.8183 27.7881 23.1207 29.0905 24.7274 29.0905C26.334 29.0905 27.6364 27.7881 27.6364 26.1815ZM30.5455 26.1815C30.5455 29.3947 27.9406 31.9996 24.7274 31.9996C21.5141 31.9996 18.9092 29.3947 18.9092 26.1815C18.9092 22.9682 21.5141 20.3633 24.7274 20.3633C27.9406 20.3633 30.5455 22.9682 30.5455 26.1815Z"
        fill="currentColor"
      />
      <path
        d="M9.78397 17.4634C10.1885 16.7696 11.08 16.5348 11.774 16.9392L21.7073 22.729C22.4012 23.1334 22.637 24.0236 22.2328 24.7176C21.8284 25.4117 20.9368 25.6462 20.2428 25.2418L10.3081 19.4534C9.61428 19.0489 9.37957 18.1574 9.78397 17.4634Z"
        fill="currentColor"
      />
      <path
        d="M20.2277 6.75907C20.9215 6.35435 21.8115 6.58805 22.2164 7.2818C22.6211 7.97545 22.3871 8.86542 21.6936 9.27043L11.7732 15.0602C11.0796 15.4648 10.1896 15.2307 9.78455 14.5375C9.37966 13.8437 9.61346 12.9523 10.3073 12.5474L20.2277 6.75907Z"
        fill="currentColor"
      />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.50097 0.662878C8.78815 -0.220961 10.0385 -0.220959 10.3257 0.66288L11.8902 5.47799C12.0187 5.87325 12.387 6.14087 12.8026 6.14087H17.8655C18.7948 6.14087 19.1812 7.33006 18.4294 7.87631L14.3334 10.8522C13.9972 11.0965 13.8565 11.5295 13.9849 11.9248L15.5495 16.7399C15.8366 17.6237 14.825 18.3587 14.0732 17.8124L9.97722 14.8365C9.64099 14.5922 9.1857 14.5922 8.84946 14.8365L4.75349 17.8124C4.00165 18.3587 2.99006 17.6237 3.27724 16.7399L4.84176 11.9248C4.97019 11.5295 4.8295 11.0965 4.49326 10.8522L0.397287 7.87631C-0.354551 7.33006 0.0318445 6.14087 0.961167 6.14087H6.02407C6.43968 6.14087 6.80802 5.87325 6.93645 5.47799L8.50097 0.662878Z"
        fill="#4FACF5"
      />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.6673 29.3327C11.4037 29.3327 12.0007 28.7357 12.0007 27.9993C12.0007 27.263 11.4037 26.666 10.6673 26.666C9.93094 26.666 9.33398 27.263 9.33398 27.9993C9.33398 28.7357 9.93094 29.3327 10.6673 29.3327Z"
        stroke="#4FACF5"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.3333 29.3327C26.0697 29.3327 26.6667 28.7357 26.6667 27.9993C26.6667 27.263 26.0697 26.666 25.3333 26.666C24.597 26.666 24 27.263 24 27.9993C24 28.7357 24.597 29.3327 25.3333 29.3327Z"
        stroke="#4FACF5"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.7334 2.73242H5.40007L8.94673 19.2924C9.07684 19.8989 9.41429 20.4411 9.90101 20.8256C10.3877 21.2101 10.9933 21.4129 11.6134 21.3991H24.6534C25.2603 21.3981 25.8487 21.1901 26.3214 20.8095C26.7942 20.4289 27.1229 19.8985 27.2534 19.3058L29.4534 9.39909H6.82673"
        stroke="#4FACF5"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MiniChevron({ up = false }: { up?: boolean }) {
  const path = up
    ? 'M10.701 4.68314L15.8479 9.80368C16.0855 10.0676 16.0855 10.4635 15.8479 10.7011L15.2408 11.3082C15.0033 11.5457 14.6074 11.5457 14.3434 11.3082L10.2523 7.24341L6.18753 11.3082C5.92359 11.5457 5.52767 11.5457 5.29012 11.3082L4.68305 10.7011C4.4455 10.4635 4.4455 10.0676 4.68305 9.80368L9.82997 4.68314C10.0675 4.44559 10.4634 4.44559 10.701 4.68314Z'
    : 'M10.701 11.3075L15.8479 6.187C16.0855 5.92305 16.0855 5.52713 15.8479 5.28958L15.2408 4.68251C15.0033 4.44496 14.6074 4.44496 14.3434 4.68251L10.2523 8.74726L6.18753 4.68251C5.92359 4.44496 5.52767 4.44496 5.29012 4.68251L4.68305 5.28958C4.4455 5.52713 4.4455 5.92305 4.68305 6.187L9.82997 11.3075C10.0675 11.5451 10.4634 11.5451 10.701 11.3075Z'

  return (
    <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={path} fill="currentColor" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="16" height="16" rx="4" stroke="white" strokeWidth="1.6" />
      <circle cx="10" cy="10" r="3.2" stroke="white" strokeWidth="1.6" />
      <path d="M14.2 5.9H14.21" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.3351 14.1014V16.6014C18.3361 16.8335 18.2886 17.0632 18.1956 17.2758C18.1026 17.4885 17.9662 17.6794 17.7952 17.8363C17.6242 17.9932 17.4223 18.1126 17.2024 18.187C16.9826 18.2613 16.7496 18.2889 16.5185 18.268C13.9542 17.9894 11.491 17.1132 9.32682 15.7097C7.31334 14.4303 5.60626 12.7232 4.32682 10.7097C2.91846 8.53572 2.04202 6.06054 1.76848 3.48472C1.74766 3.25427 1.77505 3.02202 1.8489 2.80274C1.92275 2.58346 2.04146 2.38196 2.19745 2.21107C2.35345 2.04018 2.54332 1.90364 2.75498 1.81015C2.96663 1.71666 3.19543 1.66827 3.42682 1.66805H5.92682C6.33124 1.66407 6.72331 1.80728 7.02995 2.07099C7.33659 2.33471 7.53688 2.70092 7.59348 3.10138C7.699 3.90144 7.89469 4.68699 8.17682 5.44305C8.28894 5.74132 8.3132 6.06548 8.24674 6.37712C8.18028 6.68875 8.02587 6.97481 7.80182 7.20138L6.74348 8.25972C7.92978 10.346 9.65719 12.0734 11.7435 13.2597L12.8018 12.2014C13.0284 11.9773 13.3144 11.8229 13.6261 11.7565C13.9377 11.69 14.2619 11.7143 14.5601 11.8264C15.3162 12.1085 16.1018 12.3042 16.9018 12.4097C17.3066 12.4668 17.6763 12.6707 17.9406 12.9826C18.2049 13.2945 18.3453 13.6927 18.3351 14.1014Z"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 5L8 12L15 19"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 5L16 12L9 19"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
