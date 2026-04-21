'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'

import { useCommerce } from '../components/providers/CommerceProvider'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import cardIconAsset from '@public/icon/generated/checkout-checkout-page-card.svg'
import truckIconAsset from '@public/icon/generated/checkout-checkout-page-truck.svg'
import userIconAsset from '@public/icon/generated/checkout-checkout-page-user.svg'
import {
  CheckoutField,
  CheckoutOrderSummary,
  CheckoutSection,
  DeliveryOption,
  PaymentOption,
  checkoutFieldClasses,
} from '../components/checkout/CheckoutSections'

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
          <h1 className="text-[36px] font-medium leading-[145%] text-[#22354A] md:text-[48px]">
            Оформлення замовлення
          </h1>

          <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,820px)_400px]">
            <form id="checkout-form" className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <CheckoutSection
                icon={<IconAsset src={userIconAsset} width={24} height={24} />}
                title="Контактні дані"
              >
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
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, firstName: event.target.value }))
                      }
                      placeholder="Введіть ім'я"
                      className={`${checkoutFieldClasses} h-[64px]`}
                    />
                  </CheckoutField>

                  <CheckoutField label="Прізвище *">
                    <input
                      required
                      value={formState.lastName}
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, lastName: event.target.value }))
                      }
                      placeholder="Введіть прізвище"
                      className={`${checkoutFieldClasses} h-[64px]`}
                    />
                  </CheckoutField>

                  <CheckoutField label="Телефон *">
                    <input
                      required
                      value={formState.phone}
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, phone: event.target.value }))
                      }
                      placeholder="+380"
                      className={`${checkoutFieldClasses} h-[64px]`}
                    />
                  </CheckoutField>

                  <CheckoutField label="Email *">
                    <input
                      required
                      type="email"
                      value={formState.email}
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, email: event.target.value }))
                      }
                      placeholder="user@example.com"
                      className={`${checkoutFieldClasses} h-[64px]`}
                    />
                  </CheckoutField>
                </div>
              </CheckoutSection>

              <CheckoutSection
                icon={<IconAsset src={truckIconAsset} width={24} height={24} />}
                title="Доставка"
              >
                <div className="flex flex-col gap-4">
                  <DeliveryOption
                    active={formState.deliveryMethod === 'nova-poshta'}
                    description="1-3 дні · Безкоштовно"
                    title="Нова Пошта"
                    onClick={() =>
                      setFormState((current) => ({ ...current, deliveryMethod: 'nova-poshta' }))
                    }
                  >
                    <div className="pl-10">
                      <input
                        value={formState.pickupPoint}
                        onChange={(event) =>
                          setFormState((current) => ({
                            ...current,
                            pickupPoint: event.target.value,
                          }))
                        }
                        placeholder="Виберіть відповідне відділення"
                        className="h-[50px] w-full rounded-[16px] border border-[#D5E0E8] bg-white px-6 text-[18px] font-medium leading-[165%] text-[#22354A] outline-none"
                      />
                    </div>
                  </DeliveryOption>

                  <DeliveryOption
                    active={formState.deliveryMethod === 'courier'}
                    description="1-2 дні · 200 грн"
                    title="Кур'єр по Києву"
                    onClick={() =>
                      setFormState((current) => ({ ...current, deliveryMethod: 'courier' }))
                    }
                  />

                  <DeliveryOption
                    active={formState.deliveryMethod === 'pickup'}
                    description="Самовивіз зі складу"
                    title="Самовивіз"
                    onClick={() =>
                      setFormState((current) => ({ ...current, deliveryMethod: 'pickup' }))
                    }
                  />
                </div>
              </CheckoutSection>

              <CheckoutSection
                icon={<IconAsset src={cardIconAsset} width={24} height={24} />}
                title="Спосіб оплати"
              >
                <div className="flex flex-col gap-5">
                  <PaymentOption
                    active={formState.paymentMethod === 'invoice'}
                    description="Оплата за рахунком"
                    title="Безготівковий розрахунок"
                    onClick={() =>
                      setFormState((current) => ({ ...current, paymentMethod: 'invoice' }))
                    }
                  >
                    <div className="rounded-[20px] border border-[#D5E0E8] bg-white px-6 py-4 text-[18px] font-medium leading-[165%] text-[#22354A]">
                      Після підтвердження замовлення ми надішлемо рахунок на вашу електронну
                      пошту
                    </div>
                  </PaymentOption>

                  <PaymentOption
                    active={formState.paymentMethod === 'cash-on-delivery'}
                    description="Оплата при отриманні"
                    title="Накладений платіж"
                    onClick={() =>
                      setFormState((current) => ({
                        ...current,
                        paymentMethod: 'cash-on-delivery',
                      }))
                    }
                  />

                  <CheckoutField label="Коментар до замовлення">
                    <textarea
                      value={formState.comment}
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, comment: event.target.value }))
                      }
                      placeholder="Додаткова інформація, побажання щодо доставки..."
                      className={`${checkoutFieldClasses} min-h-[128px] resize-none py-5`}
                    />
                  </CheckoutField>
                </div>
              </CheckoutSection>
            </form>

            <CheckoutOrderSummary
              cartItemsDetailed={cartItemsDetailed}
              cartTotal={cartTotal}
              isCartEmpty={isCartEmpty}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
