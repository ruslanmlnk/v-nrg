'use client'

import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '../shared/SectionHeading'
import ProductImagePlaceholder from '../shared/ProductImagePlaceholder'
import { ProductDiscountBadge, ProductPrice } from '../shared/ProductPrice'
import { useCommerce } from '../providers/CommerceProvider'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import cartIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-product-detail-page-cart.svg'
import { type ProductData, type ProductImage } from '../../data/products'

import { ProductPageSection } from './ProductPageSection'

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
    <ProductPageSection className="gap-12">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="grid gap-5 lg:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard
            key={`${product.title}-${index}-${eyebrow}`}
            details={product.details}
            href={product.href}
            image={product.cartImage}
            oldPrice={product.oldPrice}
            price={product.price}
            productId={product.id}
            regularPrice={product.regularPrice}
            title={product.title}
          />
        ))}
      </div>
    </ProductPageSection>
  )
}

function ProductCard({
  details,
  href,
  image,
  oldPrice,
  price,
  productId,
  regularPrice,
  title,
}: {
  details: string
  href: string
  image: ProductImage
  oldPrice?: number
  price: number
  productId: ProductData['id']
  regularPrice?: number
  title: string
}) {
  const { addToCart } = useCommerce()

  return (
    <Link
      href={href}
      className="flex flex-col rounded-[20px] bg-white shadow-[0_20px_60px_rgba(34,53,74,0.05)]"
    >
      <div className="relative h-[300px] overflow-hidden rounded-[20px] bg-white">
        <div className="absolute left-5 top-5 z-10">
          <ProductDiscountBadge oldPrice={oldPrice} price={price} />
        </div>
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
          {details ? (
            <p className="text-[16px] font-medium leading-[165%] text-[#22354A]">{details}</p>
          ) : null}
        </div>
        <div className="flex items-center justify-between gap-4">
          <ProductPrice oldPrice={oldPrice} price={price} regularPrice={regularPrice} />
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
