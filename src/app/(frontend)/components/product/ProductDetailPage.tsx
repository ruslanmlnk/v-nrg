'use client'

import type { ReactNode } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

import beforeAfterAfter from '@public/assets/product/before-after-after.jpg'
import beforeAfterBefore from '@public/assets/product/before-after-before.jpg'
import certificate from '@public/assets/product/certificate.jpg'
import partner from '@public/assets/product/partner.jpg'
import productCardImage from '@public/assets/product/product-card.jpg'
import productMainImage from '@public/assets/product/product-main.jpg'
import productThumbActive from '@public/assets/product/product-thumb-active.jpg'
import productThumbImage from '@public/assets/product/product-thumb.jpg'

import FaqSection from '../FaqSection'
import SiteFooter from '../SiteFooter'
import { useCommerce } from '../providers/CommerceProvider'
import BeforeAfterSlider from '../ui/BeforeAfterSlider'
import { formatPrice, productsMap, type ProductId } from '../../data/products'

const productHref = '/catalog/aparaty-vakuumnoho-masazhu/v-nrg-18-pro'

const productCards = Array.from({ length: 3 }, () => ({
  details: '18 маніпул · 800 Вт',
  href: productHref,
  price: 68000,
  productId: 'v-nrg-18-pro' as ProductId,
  title: 'V-NRG 18 PRO',
}))

const productGallery = [
  { alt: 'V-NRG 18 PRO основний вигляд', main: productMainImage, thumb: productThumbActive, video: true },
  { alt: 'V-NRG 18 PRO вигляд збоку', main: productThumbImage, thumb: productThumbImage, video: false },
  { alt: 'V-NRG 18 PRO панель керування', main: productThumbImage, thumb: productThumbImage, video: false },
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

const productTabs = [
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
] as const

export default function ProductDetailPage() {
  const product = productsMap['v-nrg-18-pro']
  const { addToCart, isInCompare, toggleCompare } = useCommerce()
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
  const [activeReviewPage, setActiveReviewPage] = useState(0)
  const [activeTabId, setActiveTabId] = useState<(typeof productTabs)[number]['id']>('description')
  const [isShareActive, setIsShareActive] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const activeGalleryItem = productGallery[activeGalleryIndex] ?? productGallery[0]
  const activeTab = productTabs.find((tab) => tab.id === activeTabId) ?? productTabs[0]
  const isCompared = isInCompare(product.id)
  const partnerReviewPages = chunkItems(partnerReviews, 2)
  const visiblePartnerReviews = partnerReviewPages[activeReviewPage] ?? partnerReviewPages[0] ?? []

  const handleShare = async () => {
    const shareData = {
      text: 'V-NRG 18 PRO',
      title: 'V-NRG 18 PRO',
      url: typeof window === 'undefined' ? productHref : window.location.href,
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
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6">
        <section className="flex min-h-[268px] items-center justify-center rounded-[20px] bg-[#22354A] px-6 py-14 text-center text-white">
          <div className="flex max-w-[920px] flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-2 text-[16px] font-bold uppercase leading-[145%]">
              <Link href="/">Головна</Link>
              <span>/</span>
              <Link href="/catalog">Каталог</Link>
              <span>/</span>
              <Link href="/catalog/aparaty-vakuumnoho-masazhu">Апарати вакуумного масажу</Link>
              <span>/</span>
              <span className="text-[#4FACF5]">V-NRG 18 PRO</span>
            </div>
            <h1 className="text-[36px] font-medium leading-[145%] md:text-[48px]">V-NRG 18 PRO</h1>
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <div className="grid items-start gap-5 xl:grid-cols-[610px_minmax(0,1fr)]">
            <div className="flex flex-col gap-4 rounded-[20px] bg-white p-6 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
              <div className="relative flex min-h-[473px] items-center justify-center overflow-hidden rounded-[20px] border border-[#D5E0E8] bg-gradient-to-b from-white via-white to-[#F5F8F9] px-8 py-8">
                <Image
                  src={activeGalleryItem.main}
                  alt={activeGalleryItem.alt}
                  priority
                  className="h-full w-full object-contain"
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
                <div className="flex items-center gap-2 text-[16px] font-bold uppercase leading-[145%] text-[#4FACF5]">
                  <AvailabilityIcon />
                  <span>В наявності</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-[24px] font-medium leading-[145%] text-[#22354A]">V-NRG 18 PRO</h2>
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

                <div className="flex items-center gap-2">
                  <StarIcon />
                  <span className="text-[18px] font-bold leading-[145%] text-[#22354A]">4.8/5</span>
                </div>

                <div className="text-[28px] font-bold leading-[145%] text-[#22354A]">{formatPrice(product.price)}</div>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex h-[50px] items-center gap-3 rounded-[11px] border border-[#D5E0E8] bg-white px-[18px]">
                    <span className="text-[20px] font-medium leading-[145%] text-[#22354A]">{quantity}</span>
                    <div className="flex flex-col">
                      <button
                        type="button"
                        aria-label="Збільшити кількість"
                        onClick={() => setQuantity((current) => current + 1)}
                        className="flex h-4 w-4 items-center justify-center text-[#22354A]"
                      >
                        <MiniChevron up />
                      </button>
                      <button
                        type="button"
                        aria-label="Зменшити кількість"
                        onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                        className="flex h-4 w-4 items-center justify-center text-[#22354A]"
                      >
                        <MiniChevron />
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => addToCart(product.id, quantity)}
                    className="flex h-[50px] min-w-[200px] items-center justify-center rounded-[40px] bg-[#4FACF5] px-6 text-[18px] font-medium leading-[145%] text-white transition-opacity hover:opacity-90"
                  >
                    Купити
                  </button>

                  <Link
                    href="mailto:0870758@gmail.com?subject=Оплата%20частинами%20V-NRG%2018%20PRO"
                    className="flex h-[50px] items-center justify-center rounded-[40px] border border-[#D5E0E8] bg-white px-6 text-[18px] font-medium leading-[145%] text-[#22354A] transition-colors hover:border-[#4FACF5] hover:text-[#4FACF5]"
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
                      <span className="font-semibold">Оплата:</span> онлайн, безготівкова, оплата частинами
                    </p>
                    <p>
                      <span className="font-semibold">Гарантія:</span> 12 місяців
                    </p>
                  </div>
                  <Link href="mailto:0870758@gmail.com?subject=Умови%20доставки%20та%20оплати%20V-NRG%2018%20PRO" className="text-[18px] font-bold leading-[145%] text-[#4FACF5]">
                    Умови доставки та оплати →
                  </Link>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="tel:+380975468820"
                    className="flex min-h-[50px] flex-1 items-center justify-center rounded-[40px] border border-[#D5E0E8] bg-white px-6 text-[18px] font-medium leading-[145%] text-[#22354A]"
                  >
                    Консультація
                  </Link>
                  <Link
                    href="mailto:0870758@gmail.com?subject=Демонстрація%20V-NRG%2018%20PRO"
                    className="flex min-h-[50px] flex-1 items-center justify-center rounded-[40px] border border-[#D5E0E8] bg-white px-6 text-[18px] font-medium leading-[145%] text-[#22354A]"
                  >
                    Демонстрація
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
            <div className="flex flex-wrap gap-x-12 gap-y-4 border-b border-[#D5E0E8]">
              {productTabs.map((tab) => (
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
      </div>

      <section className="mt-[100px] rounded-t-[48px] bg-[#22354A] px-6 pb-[140px] pt-[100px] text-white">
        <div className="mx-auto flex max-w-[1288px] flex-col gap-12">
          <SectionHeading align="center" eyebrow="До / Після" title="Як працює технологія V-NRG" titleClassName="text-white" />
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
        </div>
      </section>

      <section className="px-6 pt-[100px]">
        <div className="mx-auto flex max-w-[1288px] flex-col gap-12">
          <SectionHeading align="center" eyebrow="Надійність та підтримка" title="Офіційне обладнання з гарантією та сервісом" />
          <div className="flex flex-wrap items-center justify-center gap-5">
            <CertificateCard />
            <CertificateCard />
            <CertificateCard />
          </div>
        </div>
      </section>

      <section className="px-6 pt-[100px]">
        <div className="mx-auto flex max-w-[1288px] flex-col gap-12">
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
            onPrev={() => setActiveReviewPage((current) => (current - 1 + partnerReviewPages.length) % partnerReviewPages.length)}
            onSelect={setActiveReviewPage}
          />
        </div>
      </section>

      <section className="px-6 pt-[100px]">
        <div className="mx-auto flex max-w-[1288px] flex-col gap-12">
          <SectionHeading eyebrow="Більше товарів" title="Схожі товари" />
          <div className="grid gap-5 lg:grid-cols-3">
            {productCards.map((product, index) => (
              <ProductCard key={`${product.title}-${index}`} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pt-[100px]">
        <div className="mx-auto flex max-w-[1288px] flex-col gap-12">
          <SectionHeading eyebrow="Рекомендуємо разом" title="Разом з цим товаром купують" />
          <div className="grid gap-5 lg:grid-cols-3">
            {productCards.map((product, index) => (
              <ProductCard key={`${product.title}-bundle-${index}`} {...product} />
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
      <SiteFooter />
    </div>
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
  image: typeof productThumbImage
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
      <Image src={image} alt={alt} className="h-full w-full object-cover" sizes="100px" />
      {showPlayBadge ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayBadge />
        </div>
      ) : null}
    </button>
  )
}

function SectionHeading({
  align = 'left',
  eyebrow,
  title,
  titleClassName,
}: {
  align?: 'left' | 'center'
  eyebrow: string
  title: string
  titleClassName?: string
}) {
  const centered = align === 'center'

  return (
    <div className={`flex flex-col gap-4 ${centered ? 'items-center text-center' : 'items-start text-left'}`}>
      <div className="text-[16px] font-bold uppercase leading-[145%] text-[#4FACF5]">{eyebrow}</div>
      <h2 className={`max-w-[780px] text-[32px] font-medium leading-[125%] text-[#22354A] md:text-[48px] ${titleClassName ?? ''}`}>
        {title}
      </h2>
    </div>
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

function TabContent({
  tab,
}: {
  tab: (typeof productTabs)[number]
}) {
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
        <li key={item} className="flex items-start gap-3 text-[18px] font-medium leading-[165%] text-[#22354A]">
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
      <Image src={certificate} alt="Сертифікат V-NRG" className="h-[210px] w-[150px] rounded-[5px] border border-[#D5E0E8] object-cover" />
    </div>
  )
}

function PartnerReviewCard({ author, quote }: { author: string; quote: string }) {
  return (
    <article className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
      <div className="grid gap-8 md:grid-cols-[194px_minmax(0,1fr)]">
        <Image src={partner} alt={author} className="h-full min-h-[200px] w-full rounded-[20px] object-cover" />
        <div className="flex flex-col justify-between gap-8">
          <p className="text-[20px] font-medium leading-[145%] text-[#22354A]">&ldquo;{quote}&rdquo;</p>
          <div className="flex flex-wrap items-center gap-6">
            <div className="border-r border-[#D5E0E8] pr-6 text-[24px] font-medium leading-[145%] text-[#22354A]">{author}</div>
            <div className="flex items-center gap-2">
              <CircleAction href="https://www.instagram.com/" label="Instagram">
                <InstagramIcon />
              </CircleAction>
              <CircleAction href="tel:+380975468820" label="Телефон">
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
    <div className="flex items-center justify-between text-[#4FACF5]">
      <button type="button" aria-label="Попередній слайд" onClick={onPrev} className="transition-opacity hover:opacity-70">
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
      <button type="button" aria-label="Наступний слайд" onClick={onNext} className="transition-opacity hover:opacity-70">
        <ChevronRight />
      </button>
    </div>
  )
}

function chunkItems<T>(items: readonly T[], size: number) {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, index) => items.slice(index * size, index * size + size))
}

function ProductCard({
  details,
  href,
  price,
  productId,
  title,
}: {
  details: string
  href: string
  price: number
  productId: ProductId
  title: string
}) {
  const { addToCart } = useCommerce()

  return (
    <Link href={href} className="flex flex-col rounded-[20px] bg-white shadow-[0_20px_60px_rgba(34,53,74,0.05)]">
      <div className="relative h-[300px] overflow-hidden rounded-[20px] bg-white">
        <Image src={productCardImage} alt={title} fill className="object-contain p-6" sizes="(min-width: 1024px) 400px, 100vw" />
      </div>
      <div className="flex flex-col gap-4 px-8 py-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">{title}</h3>
          <p className="text-[16px] font-medium leading-[165%] text-[#22354A]">{details}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="text-[24px] font-bold leading-[145%] text-[#22354A]">{formatPrice(price)}</div>
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
}: {
  children: ReactNode
  href: string
  label: string
}) {
  return (
    <Link href={href} aria-label={label} className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#4FACF5]">
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

function AvailabilityIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.3609 1.91203C14.7774 1.49547 15.4527 1.49547 15.8692 1.91203C16.2858 2.3286 16.2858 3.00382 15.8692 3.42038L5.20244 14.0872C5.0024 14.2872 4.73117 14.3997 4.44827 14.3997C4.16537 14.3997 3.89414 14.2872 3.6941 14.0872L0.494063 10.8871C0.0775 10.4706 0.0774997 9.79534 0.494063 9.37877C0.910626 8.96221 1.58585 8.96221 2.00241 9.37877L4.44827 11.8246L14.3609 1.91203Z" fill="#4FACF5" />
    </svg>
  )
}

function CompareIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 8H21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M7 14H17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M7 20H21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="19" cy="14" r="2.5" fill="currentColor" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="14" r="2.5" fill="currentColor" />
      <circle cx="20" cy="8" r="2.5" fill="currentColor" />
      <circle cx="20" cy="20" r="2.5" fill="currentColor" />
      <path d="M10.2 12.9L17.8 9.1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M10.2 15.1L17.8 18.9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
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
      <path d="M10.6673 29.3327C11.4037 29.3327 12.0007 28.7357 12.0007 27.9993C12.0007 27.263 11.4037 26.666 10.6673 26.666C9.93094 26.666 9.33398 27.263 9.33398 27.9993C9.33398 28.7357 9.93094 29.3327 10.6673 29.3327Z" stroke="#4FACF5" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25.3333 29.3327C26.0697 29.3327 26.6667 28.7357 26.6667 27.9993C26.6667 27.263 26.0697 26.666 25.3333 26.666C24.597 26.666 24 27.263 24 27.9993C24 28.7357 24.597 29.3327 25.3333 29.3327Z" stroke="#4FACF5" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.7334 2.73242H5.40007L8.94673 19.2924C9.07684 19.8989 9.41429 20.4411 9.90101 20.8256C10.3877 21.2101 10.9933 21.4129 11.6134 21.3991H24.6534C25.2603 21.3981 25.8487 21.1901 26.3214 20.8095C26.7942 20.4289 27.1229 19.8985 27.2534 19.3058L29.4534 9.39909H6.82673" stroke="#4FACF5" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MiniChevron({ up = false }: { up?: boolean }) {
  const path = up ? 'M3 9L8 4L13 9' : 'M3 5L8 10L13 5'

  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={path} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
      <path d="M15 5L8 12L15 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
