'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

import SiteFooter from '../SiteFooter'
import { useCommerce } from '../providers/CommerceProvider'
import { formatPrice } from '../../data/products'

export default function AccountPage() {
  const { cartCount, isLoggedIn, lastOrder, openLogoutModal } = useCommerce()

  if (!isLoggedIn) {
    return (
      <div className="pt-5">
        <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
          <section className="rounded-[32px] bg-white px-6 py-16 text-center shadow-[0_20px_60px_rgba(34,53,74,0.06)] md:px-12 md:py-20">
            <h1 className="text-[40px] font-medium leading-[145%] text-[#22354A] md:text-[56px]">Кабінет користувача</h1>
            <p className="mx-auto mt-4 max-w-[640px] text-[20px] font-medium leading-[165%] text-[#22354A]">
              Щоб переглянути замовлення та персональні дані, увійдіть у свій акаунт
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/login"
                className="flex h-[50px] items-center justify-center rounded-full bg-[#22354A] px-8 text-[18px] font-medium leading-[145%] text-white"
              >
                Увійти
              </Link>
              <Link
                href="/register"
                className="flex h-[50px] items-center justify-center rounded-full border border-[#D5E0E8] px-8 text-[18px] font-medium leading-[145%] text-[#22354A]"
              >
                Зареєструватися
              </Link>
            </div>
          </section>
        </div>

        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
        <section className="flex min-h-[268px] items-center justify-center rounded-[20px] bg-[#22354A] px-6 py-14 text-center text-white">
          <div className="flex max-w-[920px] flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-2 text-[16px] font-bold uppercase leading-[145%]">
              <Link href="/">Головна</Link>
              <span>/</span>
              <span className="text-[#4FACF5]">Кабінет користувача</span>
            </div>
            <h1 className="text-[36px] font-medium leading-[145%] md:text-[48px]">Кабінет користувача</h1>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[380px_minmax(0,1fr)]">
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]"
          >
            <div className="flex flex-col gap-6">
              <div className="flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[#F1F9FF] text-[#4FACF5]">
                <ProfileIcon />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-[28px] font-medium leading-[145%] text-[#22354A]">Вітаємо!</h2>
                <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                  Тут зберігаються ваші останні замовлення та швидкі дії по акаунту
                </p>
              </div>

              <div className="grid gap-4">
                <AccountMetric label="Товарів у кошику" value={`${cartCount}`} />
                <AccountMetric label="Останнє замовлення" value={lastOrder ? `№${lastOrder.id}` : 'Ще немає'} />
              </div>

              <button
                type="button"
                onClick={openLogoutModal}
                className="flex h-[50px] items-center justify-center rounded-full border border-[#D5E0E8] text-[18px] font-medium leading-[145%] text-[#22354A]"
              >
                Вийти з акаунта
              </button>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.3 }}
            className="flex flex-col gap-5"
          >
            <section className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
              <h2 className="text-[28px] font-medium leading-[145%] text-[#22354A]">Швидкі дії</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <QuickAction href="/catalog/aparaty-vakuumnoho-masazhu" title="Каталог" description="Перейти до товарів" />
                <QuickAction href="/compare" title="Порівняння" description="Переглянути обрані моделі" />
                <QuickAction href="/checkout" title="Checkout" description="Завершити поточне замовлення" />
              </div>
            </section>

            <section className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
              <h2 className="text-[28px] font-medium leading-[145%] text-[#22354A]">Останнє замовлення</h2>

              {lastOrder ? (
                <div className="mt-6 flex flex-col gap-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    <AccountMetric label="Номер замовлення" value={`№${lastOrder.id}`} />
                    <AccountMetric label="Сума" value={formatPrice(lastOrder.total)} />
                  </div>

                  <div className="rounded-[20px] bg-[#F5F8F9] p-6">
                    <div className="flex flex-col gap-3">
                      <div className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                        Одержувач: <span className="font-bold">{lastOrder.customerName}</span>
                      </div>
                      <div className="text-[18px] font-medium leading-[165%] text-[#22354A]">Email: {lastOrder.email}</div>
                      <div className="text-[18px] font-medium leading-[165%] text-[#22354A]">Телефон: {lastOrder.phone}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="mt-6 text-[18px] font-medium leading-[165%] text-[#22354A]">
                  Ви ще не оформили жодного замовлення.
                </p>
              )}
            </section>
          </motion.div>
        </section>
      </div>

      <SiteFooter />
    </div>
  )
}

function AccountMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[20px] bg-[#F5F8F9] px-6 py-5">
      <div className="text-[16px] font-medium leading-[165%] text-[#B7CAD1]">{label}</div>
      <div className="mt-1 text-[24px] font-medium leading-[145%] text-[#22354A]">{value}</div>
    </div>
  )
}

function QuickAction({
  description,
  href,
  title,
}: {
  description: string
  href: string
  title: string
}) {
  return (
    <Link href={href} className="rounded-[20px] bg-[#F5F8F9] px-6 py-6">
      <div className="text-[24px] font-medium leading-[145%] text-[#22354A]">{title}</div>
      <div className="mt-2 text-[16px] font-medium leading-[165%] text-[#22354A]">{description}</div>
    </Link>
  )
}

function ProfileIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
