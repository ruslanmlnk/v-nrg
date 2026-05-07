'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { formatPrice, type ProductImage } from '../../data/products'
import ProductImagePlaceholder from '../shared/ProductImagePlaceholder'

export function CheckoutOrderSummary({
  cartItemsDetailed,
  cartTotal,
  isCartEmpty,
}: {
  cartItemsDetailed: Array<{
    product: { cartImage: ProductImage; id: string; price: number; title: string }
    quantity: number
  }>
  cartTotal: number
  isCartEmpty: boolean
}) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-[20px] bg-white px-6 py-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]"
    >
      <div className="flex flex-col gap-8">
        <h2 className="text-[24px] font-medium leading-[145%] text-[#22354A]">Ваше замовлення</h2>

        {isCartEmpty ? (
          <div className="rounded-[20px] bg-[#F5F8F9] px-6 py-8 text-center text-[18px] font-medium leading-[165%] text-[#22354A]">
            Кошик порожній. Додайте товари, щоб оформити замовлення.
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {cartItemsDetailed.map((item) => (
              <div key={item.product.id} className="flex items-center gap-4">
                <div className="relative h-[100px] w-[100px] overflow-hidden rounded-[10px] border border-[#D5E0E8] bg-white">
                  {item.product.cartImage ? (
                    <Image
                      src={item.product.cartImage}
                      alt={item.product.title}
                      fill
                      className="object-contain p-3"
                      sizes="100px"
                    />
                  ) : (
                    <ProductImagePlaceholder className="absolute inset-0 text-[12px]" />
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-[24px] font-medium leading-[145%] text-[#22354A]">
                    {item.product.title}
                  </div>
                  <div className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                    {item.quantity} × {formatPrice(item.product.price)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-6">
          <div className="border-b border-[#D5E0E8] pb-6">
            <div className="flex items-center justify-between text-[18px] font-medium leading-[165%] text-[#22354A]">
              <span>Товари ({cartItemsDetailed.length}):</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <div className="mt-4 flex items-center justify-between text-[18px] font-medium leading-[165%]">
              <span className="text-[#22354A]">Доставка:</span>
              <span className="font-bold text-[#4FACF5]">Безкоштовно</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[22px] font-bold leading-[165%] text-[#22354A]">
            <span>Всього:</span>
            <span>{formatPrice(cartTotal)}</span>
          </div>
        </div>

        <button
          type="submit"
          form="checkout-form"
          disabled={isCartEmpty}
          className="flex h-[50px] items-center justify-center rounded-full bg-[#4FACF5] text-[18px] font-bold leading-[165%] text-white disabled:cursor-not-allowed disabled:bg-[#B7CAD1]"
        >
          Підтвердити замовлення
        </button>
      </div>
    </motion.aside>
  )
}
