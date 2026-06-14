'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import DemoConsultationModal from '../mainPage/DemoConsultationModal'
import ProductImagePlaceholder from '../shared/ProductImagePlaceholder'
import { ProductPrice } from '../shared/ProductPrice'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import availabilityIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-product-detail-page-availability.svg'
import compareIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-product-detail-page-compare.svg'
import productMiniChevronDownIconAsset from '@public/icon/generated/product-mini-chevron-down.svg'
import productMiniChevronUpIconAsset from '@public/icon/generated/product-mini-chevron-up.svg'
import shareIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-product-detail-page-share.svg'
import starIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-product-detail-page-star.svg'
import { type ProductData } from '../../data/products'

export function ProductOverviewSection({
  activeGalleryIndex,
  activeGalleryItem,
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
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <>
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
                <ProductImagePlaceholder
                  className="absolute inset-0"
                  label="Фото товару відсутнє"
                />
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

              <ProductPrice
                oldPrice={product.oldPrice}
                priceClassName="text-[28px]"
                price={product.price}
                regularPrice={product.regularPrice}
              />

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
                <button
                  type="button"
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="flex min-h-[50px] items-center justify-center rounded-[40px] border border-[#D5E0E8] bg-white px-6 text-[18px] font-medium leading-[145%] text-[#22354A]"
                >
                  Консультація
                </button>
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="flex min-h-[50px] items-center justify-center rounded-[40px] border border-[#D5E0E8] bg-white px-6 text-[18px] font-medium leading-[145%] text-[#22354A]"
                >
                  Демонстрація
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
      <DemoConsultationModal
        actionLabel="Записатися на демонстрацію"
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        title="Запис на демонстрацію"
      />
    </>
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
