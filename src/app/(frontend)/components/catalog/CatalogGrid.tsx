'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import compareIcon from '@public/icon/header/compare.svg'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import ProductImagePlaceholder from '../shared/ProductImagePlaceholder'
import cartIconAsset from '@public/icon/generated/catalog-cart.svg'
import shareIconAsset from '@public/icon/generated/catalog-share.svg'
import { formatPrice, type ProductId } from '../../data/products'
import { type CatalogItem } from './catalogData'

export function CatalogGrid({
  items,
  onAddToCart,
  onShare,
  onToggleCompare,
  isCompared,
  sharedProductId,
}: {
  isCompared: (productId: ProductId) => boolean
  items: CatalogItem[]
  onAddToCart: (productId: ProductId) => void
  onShare: (title: string, href: string, productId: string) => Promise<void>
  onToggleCompare: (productId: ProductId) => void
  sharedProductId: string | null
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {items.map((product, index) => (
        <motion.article
          key={product.uid}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: index * 0.04, duration: 0.28 }}
          className="overflow-hidden rounded-[20px] bg-white shadow-[0_20px_60px_rgba(34,53,74,0.05)]"
        >
          <div className="relative h-[300px] overflow-hidden rounded-[20px] bg-white">
            <div className="absolute right-5 top-5 z-10 flex items-center gap-3">
              <button
                type="button"
                onClick={() => onToggleCompare(product.id)}
                aria-label={`Додати ${product.title} до порівняння`}
                className={`flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-[0_12px_30px_rgba(34,53,74,0.12)] transition-colors ${
                  isCompared(product.id) ? 'text-[#4FACF5]' : 'text-[#22354A]'
                }`}
              >
                <Image src={compareIcon} alt="" aria-hidden="true" className="h-[18px] w-[18px]" />
              </button>

              <button
                type="button"
                onClick={() => void onShare(product.title, product.href, product.uid)}
                aria-label={`Поділитися ${product.title}`}
                className={`flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-[0_12px_30px_rgba(34,53,74,0.12)] transition-colors ${
                  sharedProductId === product.uid ? 'text-[#4FACF5]' : 'text-[#22354A]'
                }`}
              >
                <IconAsset src={shareIconAsset} width={24} height={24} />
              </button>
            </div>

            <Link href={product.href}>
              {product.catalogImage ? (
                <Image
                  src={product.catalogImage}
                  alt={product.title}
                  fill
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover"
                />
              ) : (
                <ProductImagePlaceholder className="absolute inset-0" />
              )}
            </Link>
          </div>

          <div className="flex flex-col gap-4 px-8 py-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">
                {product.title}
              </h3>
              <p className="text-[16px] font-medium leading-[165%] text-[#22354A]">
                {product.details || 'Немає даних'}
              </p>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="text-[24px] font-bold leading-[145%] text-[#22354A]">
                {formatPrice(product.price)}
              </div>
              <button
                type="button"
                onClick={() => onAddToCart(product.id)}
                aria-label={`Додати ${product.title} до кошика`}
                className="text-[#4FACF5] transition-opacity hover:opacity-70"
              >
                <IconAsset src={cartIconAsset} width={32} height={32} />
              </button>
            </div>

            <Link
              href={product.href}
              className="text-[18px] font-medium leading-[145%] text-[#4FACF5]"
            >
              Детальніше
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
