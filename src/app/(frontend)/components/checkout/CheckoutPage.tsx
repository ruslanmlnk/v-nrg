'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'
import { useState, type FormEvent, type ReactNode } from 'react'

import SiteFooter from '../SiteFooter'
import { useCommerce } from '../providers/CommerceProvider'
import { formatPrice } from '../../data/products'

export default function CheckoutPage() {
  const router = useRouter()
  const { cartItemsDetailed, cartTotal, completeOrder } = useCommerce()
  const [formState, setFormState] = useState({
    comment: '',
    deliveryMethod: 'nova-poshta',
    email: '',
    firstName: '',
    lastName: '',
    paymentMethod: 'invoice',
    phone: '+380',
    pickupPoint: '',
  })

  const isCartEmpty = cartItemsDetailed.length === 0

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isCartEmpty) {
      return
    }

    completeOrder({
      email: formState.email,
      firstName: formState.firstName,
      lastName: formState.lastName,
      phone: formState.phone,
    })

    router.push('/checkout/success')
  }

  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
        <section className="flex flex-col gap-10">
          <h1 className="text-[36px] font-medium leading-[145%] text-[#22354A] md:text-[48px]">Оформлення замовлення</h1>

          <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,820px)_400px]">
            <form id="checkout-form" className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <CheckoutSection icon={<UserIcon />} title="Контактні дані">
                <div className="rounded-[20px] border border-[#D5E0E8] bg-white px-6 py-4 text-[18px] font-medium leading-[165%] text-[#22354A]">
                  <Link href="/login" className="font-bold text-[#4FACF5]">
                    Увійдіть
                  </Link>{' '}
                  в акаунт або продовжіть як гість
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <CheckoutField label="Ім'я *">
                    <input
                      required
                      value={formState.firstName}
                      onChange={(event) => setFormState((current) => ({ ...current, firstName: event.target.value }))}
                      placeholder="Введіть імʼя"
                      className={`${checkoutFieldClasses} h-[64px]`}
                    />
                  </CheckoutField>

                  <CheckoutField label="Прізвище *">
                    <input
                      required
                      value={formState.lastName}
                      onChange={(event) => setFormState((current) => ({ ...current, lastName: event.target.value }))}
                      placeholder="Введіть прізвище"
                      className={`${checkoutFieldClasses} h-[64px]`}
                    />
                  </CheckoutField>

                  <CheckoutField label="Телефон *">
                    <input
                      required
                      value={formState.phone}
                      onChange={(event) => setFormState((current) => ({ ...current, phone: event.target.value }))}
                      placeholder="+380"
                      className={`${checkoutFieldClasses} h-[64px]`}
                    />
                  </CheckoutField>

                  <CheckoutField label="Email *">
                    <input
                      required
                      type="email"
                      value={formState.email}
                      onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
                      placeholder="user@example.com"
                      className={`${checkoutFieldClasses} h-[64px]`}
                    />
                  </CheckoutField>
                </div>
              </CheckoutSection>

              <CheckoutSection icon={<TruckIcon />} title="Доставка">
                <div className="flex flex-col gap-4">
                  <DeliveryOption
                    active={formState.deliveryMethod === 'nova-poshta'}
                    description="1-3 дні · Безкоштовно"
                    title="Нова Пошта"
                    onClick={() => setFormState((current) => ({ ...current, deliveryMethod: 'nova-poshta' }))}
                  >
                    <div className="pl-10">
                      <input
                        value={formState.pickupPoint}
                        onChange={(event) =>
                          setFormState((current) => ({ ...current, pickupPoint: event.target.value }))
                        }
                        placeholder="виберіть відповідне відділення"
                        className="h-[50px] w-full rounded-[16px] border border-[#D5E0E8] bg-white px-6 text-[18px] font-medium leading-[165%] text-[#22354A] outline-none"
                      />
                    </div>
                  </DeliveryOption>

                  <DeliveryOption
                    active={formState.deliveryMethod === 'courier'}
                    description="1-2 дні · 200 грн"
                    title="Кур'єр по Києву"
                    onClick={() => setFormState((current) => ({ ...current, deliveryMethod: 'courier' }))}
                  />

                  <DeliveryOption
                    active={formState.deliveryMethod === 'pickup'}
                    description="Самовивіз зі складу"
                    title="Самовивіз"
                    onClick={() => setFormState((current) => ({ ...current, deliveryMethod: 'pickup' }))}
                  />
                </div>
              </CheckoutSection>

              <CheckoutSection icon={<CardIcon />} title="Спосіб оплати">
                <div className="flex flex-col gap-5">
                  <PaymentOption
                    active={formState.paymentMethod === 'invoice'}
                    description="Оплата за рахунком"
                    title="Безготівковий розрахунок"
                    onClick={() => setFormState((current) => ({ ...current, paymentMethod: 'invoice' }))}
                  >
                    <div className="rounded-[20px] border border-[#D5E0E8] bg-white px-6 py-4 text-[18px] font-medium leading-[165%] text-[#22354A]">
                      Після підтвердження замовлення ми надішлемо рахунок на вашу електронну пошту
                    </div>
                  </PaymentOption>

                  <PaymentOption
                    active={formState.paymentMethod === 'cash-on-delivery'}
                    description="Оплата при отриманні"
                    title="Накладений платіж"
                    onClick={() => setFormState((current) => ({ ...current, paymentMethod: 'cash-on-delivery' }))}
                  />

                  <CheckoutField label="Коментар до замовлення">
                    <textarea
                      value={formState.comment}
                      onChange={(event) => setFormState((current) => ({ ...current, comment: event.target.value }))}
                      placeholder="Додаткова інформація, побажання щодо доставки..."
                      className={`${checkoutFieldClasses} min-h-[128px] resize-none py-5`}
                    />
                  </CheckoutField>
                </div>
              </CheckoutSection>
            </form>

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
                          <Image src={item.product.cartImage} alt={item.product.title} fill className="object-contain p-3" sizes="100px" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="text-[24px] font-medium leading-[145%] text-[#22354A]">{item.product.title}</div>
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
          </div>
        </section>
      </div>

      <SiteFooter />
    </div>
  )
}

function CheckoutSection({
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

function CheckoutField({
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

function DeliveryOption({
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
          <div className="text-[16px] font-medium leading-[165%] text-[#B7CAD1]">{description}</div>
        </div>
      </div>
      {children}
    </button>
  )
}

function PaymentOption({
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
          <div className="text-[16px] font-medium leading-[165%] text-[#B7CAD1]">{description}</div>
        </div>
      </div>
      {active ? children : null}
    </button>
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

function UserIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 3H16V16H1V3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M16 8H20L23 11V16H16V8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function CardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2 10H22" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6 15H10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

const checkoutFieldClasses =
  'w-full rounded-[20px] bg-[#F5F8F9] px-6 text-[18px] font-medium leading-[165%] text-[#22354A] outline-none placeholder:text-[#B7CAD1]'
