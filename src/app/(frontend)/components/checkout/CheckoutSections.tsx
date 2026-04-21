'use client'

import type { ReactNode } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

import { formatPrice, type ProductImage } from '../../data/products'
import ProductImagePlaceholder from '../shared/ProductImagePlaceholder'

export const checkoutFieldClasses =
  'w-full rounded-[20px] bg-[#F5F8F9] px-6 text-[18px] font-medium leading-[165%] text-[#22354A] outline-none placeholder:text-[#B7CAD1]'

export function CheckoutSection({
  children,
  icon,
  title,
}: {
  children: ReactNode
  icon: ReactNode
  title: string
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]"
    >
      <div className="mb-8 flex items-center gap-3">
        <span className="text-[#4FACF5]">{icon}</span>
        <h2 className="text-[20px] font-bold leading-[125%] text-[#22354A]">{title}</h2>
      </div>
      <div className="flex flex-col gap-5">{children}</div>
    </motion.section>
  )
}

export function CheckoutField({
  children,
  label,
}: {
  children: ReactNode
  label: string
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[18px] font-medium leading-[165%] text-[#22354A]">{label}</span>
      {children}
    </label>
  )
}

export function DeliveryOption({
  active,
  children,
  description,
  onClick,
  title,
}: {
  active: boolean
  children?: ReactNode
  description: string
  onClick: () => void
  title: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col gap-4 rounded-[20px] border px-6 py-6 text-left ${active ? 'border-[#4FACF5]' : 'border-[#D5E0E8]'}`}
    >
      <div className="flex items-start gap-4">
        <RadioIndicator active={active} />
        <div className="flex flex-col gap-1">
          <div className="text-[18px] font-medium leading-[165%] text-[#22354A]">{title}</div>
          <div className="text-[16px] font-medium leading-[165%] text-[#B7CAD1]">
            {description}
          </div>
        </div>
      </div>
      {children}
    </button>
  )
}

export function PaymentOption({
  active,
  children,
  description,
  onClick,
  title,
}: {
  active: boolean
  children?: ReactNode
  description: string
  onClick: () => void
  title: string
}) {
  return (
    <button type="button" onClick={onClick} className="flex flex-col gap-4 text-left">
      <div className="flex items-start gap-4">
        <RadioIndicator active={active} />
        <div className="flex flex-col gap-1">
          <div className="text-[18px] font-medium leading-[165%] text-[#22354A]">{title}</div>
          <div className="text-[16px] font-medium leading-[165%] text-[#B7CAD1]">
            {description}
          </div>
        </div>
      </div>
      {active ? children : null}
    </button>
  )
}

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
        <h2 className="text-[24px] font-medium leading-[145%] text-[#22354A]">
          Đ’Đ°ŃĐµ Đ·Đ°ĐĽĐľĐ˛Đ»ĐµĐ˝Đ˝ŃŹ
        </h2>

        {isCartEmpty ? (
          <div className="rounded-[20px] bg-[#F5F8F9] px-6 py-8 text-center text-[18px] font-medium leading-[165%] text-[#22354A]">
            ĐšĐľŃĐ¸Đş ĐżĐľŃ€ĐľĐ¶Đ˝Ń–Đą. Đ”ĐľĐ´Đ°ĐąŃ‚Đµ Ń‚ĐľĐ˛Đ°Ń€Đ¸, Ń‰ĐľĐ± ĐľŃ„ĐľŃ€ĐĽĐ¸Ń‚Đ¸ Đ·Đ°ĐĽĐľĐ˛Đ»ĐµĐ˝Đ˝ŃŹ.
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
                    {item.quantity} Ă— {formatPrice(item.product.price)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-6">
          <div className="border-b border-[#D5E0E8] pb-6">
            <div className="flex items-center justify-between text-[18px] font-medium leading-[165%] text-[#22354A]">
              <span>Đ˘ĐľĐ˛Đ°Ń€Đ¸ ({cartItemsDetailed.length}):</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <div className="mt-4 flex items-center justify-between text-[18px] font-medium leading-[165%]">
              <span className="text-[#22354A]">Đ”ĐľŃŃ‚Đ°Đ˛ĐşĐ°:</span>
              <span className="font-bold text-[#4FACF5]">Đ‘ĐµĐ·ĐşĐľŃŃ‚ĐľĐ˛Đ˝Đľ</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[22px] font-bold leading-[165%] text-[#22354A]">
            <span>Đ’ŃŃŚĐľĐłĐľ:</span>
            <span>{formatPrice(cartTotal)}</span>
          </div>
        </div>

        <button
          type="submit"
          form="checkout-form"
          disabled={isCartEmpty}
          className="flex h-[50px] items-center justify-center rounded-full bg-[#4FACF5] text-[18px] font-bold leading-[165%] text-white disabled:cursor-not-allowed disabled:bg-[#B7CAD1]"
        >
          ĐźŃ–Đ´Ń‚Đ˛ĐµŃ€Đ´Đ¸Ń‚Đ¸ Đ·Đ°ĐĽĐľĐ˛Đ»ĐµĐ˝Đ˝ŃŹ
        </button>
      </div>
    </motion.aside>
  )
}

function RadioIndicator({ active }: { active: boolean }) {
  return active ? (
    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#4FACF5]">
      <span className="h-2.5 w-2.5 rounded-full bg-white" />
    </span>
  ) : (
    <span className="mt-1 inline-flex h-6 w-6 rounded-full border-2 border-[#D5E0E8]" />
  )
}
