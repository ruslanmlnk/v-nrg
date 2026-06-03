'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import ProductImagePlaceholder from '../shared/ProductImagePlaceholder'
import { ProductPrice } from '../shared/ProductPrice'
import { type ProductData } from '../../data/products'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import cartIconAsset from '@public/icon/generated/compare-compare-page-cart.svg'
import closeIconAsset from '@public/icon/generated/compare-compare-page-close.svg'

export function CompareProductCard({
  index,
  onAddToCart,
  onRemove,
  product,
}: {
  index: number
  onAddToCart: () => void
  onRemove: () => void
  product: ProductData
}) {
  return (
    <motion.div
      className="xl:w-[400px] xl:flex-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.3 }}
    >
      <article className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_20px_60px_rgba(34,53,74,0.05)]">
        <div className="relative h-[300px] overflow-hidden rounded-[20px] border-2 border-transparent bg-white transition-colors duration-200 group-hover:border-[#4FACF5]">
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Прибрати ${product.title} з порівняння`}
            className="absolute right-3 top-3 z-10 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white text-[#22354A] shadow-[0_8px_24px_rgba(34,53,74,0.1)]"
          >
            <IconAsset src={closeIconAsset} width={18} height={18} />
          </button>

          {product.compareImage ? (
            <Image
              src={product.compareImage}
              alt={product.title}
              fill
              className="object-contain p-6"
              sizes="(min-width: 1280px) 400px, 100vw"
            />
          ) : (
            <ProductImagePlaceholder className="absolute inset-0" />
          )}
        </div>

        <div className="flex flex-1 flex-col gap-4 px-8 py-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A] transition-colors duration-200 group-hover:text-[#4FACF5]">
              {product.title}
            </h3>
            <p className="text-[16px] font-medium leading-[165%] text-[#22354A]">
              {product.details || 'Немає даних'}
            </p>
          </div>

          <div className="flex items-center justify-between gap-4">
            <ProductPrice
              oldPrice={product.oldPrice}
              price={product.price}
              regularPrice={product.regularPrice}
            />
            <button
              type="button"
              onClick={onAddToCart}
              aria-label={`Додати ${product.title} в кошик`}
              className="text-[#4FACF5] transition-opacity hover:opacity-70"
            >
              <IconAsset src={cartIconAsset} width={32} height={32} />
            </button>
          </div>

          <Link href={product.href} className="text-[18px] font-bold leading-[165%] text-[#4FACF5]">
            Детальніше
          </Link>
        </div>
      </article>
    </motion.div>
  )
}
