'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import ProductImagePlaceholder from '../shared/ProductImagePlaceholder'
import cartIconAsset from '@public/icon/generated/catalog-cart.svg'
import { formatPrice, type ProductId } from '../../data/products'
import { type CatalogItem } from './catalogData'

export function CatalogList({
  items,
  onAddToCart,
}: {
  items: CatalogItem[]
  onAddToCart: (productId: ProductId) => void
}) {
  return (
    <div className="flex flex-col gap-5">
      {items.map((product, index) => (
        <motion.article
          key={product.uid}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: index * 0.04, duration: 0.26 }}
          className="overflow-hidden rounded-[20px] bg-white shadow-[0_20px_60px_rgba(34,53,74,0.05)]"
        >
          <div className="grid items-stretch gap-0 md:grid-cols-[380px_minmax(0,1fr)]">
            <div className="relative min-h-[240px] md:min-h-full">
              {product.catalogImage ? (
                <Image
                  src={product.catalogImage}
                  alt={product.title}
                  fill
                  sizes="(min-width: 768px) 380px, 100vw"
                  className="object-cover"
                />
              ) : (
                <ProductImagePlaceholder className="absolute inset-0" />
              )}
            </div>

            <div className="flex flex-col justify-center gap-4 px-8 py-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">
                  {product.title}
                </h3>
                <p className="text-[16px] font-medium leading-[165%] text-[#22354A]">
                  {product.summary || 'Опис відсутній'}
                </p>
                {product.listFeatures.length > 0 ? (
                  <div className="text-[16px] font-medium leading-[165%] text-[#22354A]">
                    {product.listFeatures.map((feature) => (
                      <div key={`${product.uid}-${feature}`}>• {feature}</div>
                    ))}
                  </div>
                ) : (
                  <div className="text-[16px] font-medium leading-[165%] text-[#6F8498]">
                    Додаткові характеристики відсутні
                  </div>
                )}
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
          </div>
        </motion.article>
      ))}
    </div>
  )
}
