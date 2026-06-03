import { formatPrice } from '../../data/products'

export function ProductPrice({
  className = '',
  oldPrice,
  priceClassName = '',
  price,
  regularPrice,
}: {
  className?: string
  oldPrice?: number
  priceClassName?: string
  price: number
  regularPrice?: number
}) {
  const showOldPrice = isDiscountedPrice(oldPrice, price)
  const showRegularPrice = isDiscountedPrice(regularPrice, price) && regularPrice !== oldPrice

  return (
    <div className={className}>
      {showOldPrice ? (
        <div className="text-[16px] font-medium leading-[165%] text-[#B7CAD1] line-through">
          {formatPrice(oldPrice)}
        </div>
      ) : null}
      <div
        className={`text-[24px] font-bold leading-[145%] ${
          showOldPrice ? 'text-[#FFA034]' : 'text-[#22354A]'
        } ${priceClassName}`}
      >
        {formatPrice(price)}
      </div>
      {showRegularPrice ? (
        <div className="mt-1 text-[14px] font-medium leading-[145%] text-[#B7CAD1]">
          РРЦ: {formatPrice(regularPrice)}
        </div>
      ) : null}
    </div>
  )
}

export function ProductDiscountBadge({ oldPrice, price }: { oldPrice?: number; price: number }) {
  const discountPercent = getDiscountPercent(oldPrice, price)

  if (!discountPercent) {
    return null
  }

  return (
    <div className="rounded-full bg-[#FFA034] px-4 py-2 text-[16px] font-medium leading-[145%] text-white">
      −{discountPercent}%
    </div>
  )
}

function getDiscountPercent(oldPrice: number | undefined, price: number) {
  if (!isDiscountedPrice(oldPrice, price)) {
    return 0
  }

  return Math.round(((oldPrice - price) / oldPrice) * 100)
}

function isDiscountedPrice(value: number | undefined, price: number): value is number {
  return typeof value === 'number' && value > price
}
