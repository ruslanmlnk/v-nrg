'use client'

import Link from 'next/link'

import SiteFooter from '../../components/SiteFooter'
import { useCommerce } from '../../components/providers/CommerceProvider'

export default function CheckoutSuccessPage() {
  const { lastOrder } = useCommerce()

  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
        <section className="rounded-[32px] bg-white px-6 py-16 shadow-[0_20px_60px_rgba(34,53,74,0.06)] md:px-12 md:py-20">
          <div className="mx-auto flex max-w-[720px] flex-col items-center gap-8 text-center">
            <span className="flex h-[110px] w-[110px] items-center justify-center rounded-full bg-[#4FACF5] text-white shadow-[0_8px_0_rgba(34,53,74,0.08)]">
              <CheckIcon />
            </span>

            <div className="flex flex-col gap-3">
              <h1 className="text-[40px] font-medium leading-[145%] text-[#22354A] md:text-[56px]">Дякуємо за замовлення!</h1>
              <p className="text-[20px] font-medium leading-[165%] text-[#22354A]">
                Ваше замовлення №{lastOrder?.id ?? '12345'} успішно оформлено
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/catalog/aparaty-vakuumnoho-masazhu"
                className="flex h-[50px] items-center justify-center rounded-full bg-[#22354A] px-8 text-[18px] font-medium leading-[145%] text-white"
              >
                Продовжити покупки
              </Link>
              <Link
                href="/account"
                className="flex h-[50px] items-center justify-center rounded-full border border-[#D5E0E8] px-8 text-[18px] font-medium leading-[145%] text-[#22354A]"
              >
                Мій кабінет
              </Link>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </div>
  )
}

function CheckIcon() {
  return (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M45 13.5L22.5 36L12.375 25.875" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
