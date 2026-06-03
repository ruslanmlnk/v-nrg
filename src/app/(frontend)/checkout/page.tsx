'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState, type FormEvent } from 'react'

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
  NovaPoshtaWarehouseSearch,
  PaymentOption,
  checkoutFieldClasses,
} from '../components/checkout/CheckoutSections'

type MonobankCreateResponse = {
  details?: unknown
  error?: string
  invoiceUrl?: string
  message?: string
  pageUrl?: string
  redirectUrl?: string
  redirect_url?: string
  url?: string
}

type CreatedOrderResponse = {
  id: number | string
  orderNumber: string
  paymentStatus?: string
}

export default function CheckoutPage() {
  const router = useRouter()
  const {
    cartItemsDetailed,
    cartTotal,
    completeOrder,
    currentUser,
    deliveryAddress,
    isLoggedIn,
    isUserLoading,
  } = useCommerce()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentError, setPaymentError] = useState('')
  const [formState, setFormState] = useState({
    comment: '',
    deliveryMethod: 'nova-poshta',
    email: '',
    financialPhone: '+38',
    firstName: '',
    lastName: '',
    paymentMethod: 'monobank-parts',
    phone: '+380',
    pickupPoint: '',
  })

  const isCartEmpty = cartItemsDetailed.length === 0

  useEffect(() => {
    if (!currentUser) {
      return
    }

    setFormState((current) => ({
      ...current,
      email: current.email || currentUser.email || '',
      financialPhone:
        current.financialPhone && current.financialPhone !== '+38'
          ? current.financialPhone
          : currentUser.phone || '+38',
      firstName: current.firstName || currentUser.firstName || '',
      lastName: current.lastName || currentUser.lastName || '',
      phone:
        current.phone && current.phone !== '+380' ? current.phone : currentUser.phone || '+380',
    }))
  }, [currentUser])

  useEffect(() => {
    if (!deliveryAddress) {
      return
    }

    setFormState((current) => ({
      ...current,
      deliveryMethod: 'courier',
      pickupPoint: current.pickupPoint || formatDeliveryAddress(deliveryAddress),
    }))
  }, [deliveryAddress])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isCartEmpty || isSubmitting) {
      return
    }

    setIsSubmitting(true)
    setPaymentError('')

    const paymentItems = cartItemsDetailed.map((item) => ({
      id: item.product.id,
      price: item.product.price,
      quantity: item.quantity,
      title: item.product.title,
    }))
    const orderId = createCheckoutOrderId()
    const customerName = `${formState.firstName} ${formState.lastName}`.trim()

    try {
      const createdOrder = await createCheckoutOrder({
        comment: formState.comment,
        customerEmail: formState.email,
        delivery: {
          method: formState.deliveryMethod,
          pickupPoint: formState.pickupPoint,
        },
        firstName: formState.firstName,
        items: paymentItems,
        lastName: formState.lastName,
        orderNumber: orderId,
        paymentMethod: formState.paymentMethod,
        phone: formState.phone,
        total: cartTotal,
      })
      const orderNumber = createdOrder.orderNumber

      if (formState.paymentMethod === 'card-online') {
        const response = await createMonobankPayment('/api/monobank/payment/create', {
          amount: cartTotal,
          customerEmail: formState.email,
          items: paymentItems,
          orderId: orderNumber,
        })
        const redirectUrl = getPaymentRedirectUrl(response)

        if (!redirectUrl) {
          throw new Error('Monobank did not return payment url')
        }

        completeOrder({
          email: formState.email,
          firstName: formState.firstName,
          lastName: formState.lastName,
          orderId: orderNumber,
          phone: formState.phone,
        })
        window.location.assign(redirectUrl)
        return
      }

      if (formState.paymentMethod === 'monobank-parts') {
        const response = await createMonobankPayment('/api/monobank/parts/create', {
          amount: cartTotal,
          customerEmail: formState.email,
          customerName,
          financialPhone: getFinancialPhone(formState.financialPhone, formState.phone),
          items: paymentItems,
          orderId: orderNumber,
        })
        const redirectUrl = getPaymentRedirectUrl(response)

        completeOrder({
          email: formState.email,
          firstName: formState.firstName,
          lastName: formState.lastName,
          orderId: orderNumber,
          phone: formState.phone,
        })

        if (redirectUrl) {
          window.location.assign(redirectUrl)
          return
        }
      }

      if (formState.paymentMethod !== 'monobank-parts') {
        completeOrder({
          email: formState.email,
          firstName: formState.firstName,
          lastName: formState.lastName,
          orderId: orderNumber,
          phone: formState.phone,
        })
      }

      router.push('/checkout/success')
    } catch (error) {
      setPaymentError(
        error instanceof Error
          ? error.message
          : 'Не вдалося створити оплату Monobank. Перевірте дані та спробуйте ще раз.',
      )
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-12">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
        <section className="flex flex-col gap-10">
          <h1 className="text-[36px] font-medium leading-[60px] text-[#22354A] md:text-[48px]">
            Оформлення замовлення
          </h1>

          <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,820px)_400px]">
            <form id="checkout-form" className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <CheckoutSection
                icon={<IconAsset src={userIconAsset} width={24} height={24} />}
                title="Контактні дані"
              >
                {!isLoggedIn && !isUserLoading ? (
                  <div className="rounded-[20px] border border-[#D5E0E8] bg-white px-6 py-4 text-[18px] font-medium leading-[165%] text-[#22354A]">
                    <Link href="/login" className="font-bold text-[#4FACF5]">
                      Увійдіть
                    </Link>{' '}
                    в акаунт або продовжіть як гість
                  </div>
                ) : null}

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
                    <div className="pl-0 sm:pl-10">
                      <NovaPoshtaWarehouseSearch
                        value={formState.pickupPoint}
                        onChange={(pickupPoint) =>
                          setFormState((current) => ({
                            ...current,
                            pickupPoint,
                          }))
                        }
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
                    active={formState.paymentMethod === 'card-online'}
                    description="Monobank"
                    title="Оплата карткою онлайн"
                    onClick={() =>
                      setFormState((current) => ({ ...current, paymentMethod: 'card-online' }))
                    }
                  />

                  <PaymentOption
                    active={formState.paymentMethod === 'monobank-parts'}
                    description="Оформлення через менеджера після підтвердження замовлення"
                    title="Оплата частинами Monobank"
                    onClick={() =>
                      setFormState((current) => ({
                        ...current,
                        paymentMethod: 'monobank-parts',
                      }))
                    }
                  >
                    <div className="rounded-[20px] border border-[#D5E0E8] bg-white px-6 py-5">
                      <div className="flex flex-col gap-4">
                        <div>
                          <div className="text-[16px] font-medium leading-[165%] text-[#22354A]">
                            Оплата частинами 8 платежів
                          </div>
                          <div className="text-[16px] font-medium leading-[165%] text-[#B7CAD1]">
                            8 платежів 7 місяців
                          </div>
                        </div>

                        <CheckoutField label="Фінансовий номер">
                          <input
                            value={formState.financialPhone}
                            onChange={(event) =>
                              setFormState((current) => ({
                                ...current,
                                financialPhone: event.target.value,
                              }))
                            }
                            placeholder="+38"
                            className={`${checkoutFieldClasses} h-[64px]`}
                          />
                        </CheckoutField>
                      </div>
                    </div>
                  </PaymentOption>

                  <PaymentOption
                    active={formState.paymentMethod === 'invoice'}
                    description="Оплата за рахунком"
                    title="Безготівковий розрахунок"
                    onClick={() =>
                      setFormState((current) => ({ ...current, paymentMethod: 'invoice' }))
                    }
                  />

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

                  {paymentError ? (
                    <div className="rounded-[20px] border border-[#F4B8B8] bg-[#FFF4F4] px-6 py-4 text-[16px] font-medium leading-[145%] text-[#D94E4E]">
                      {paymentError}
                    </div>
                  ) : null}
                </div>
              </CheckoutSection>
            </form>

            <CheckoutOrderSummary
              cartItemsDetailed={cartItemsDetailed}
              cartTotal={cartTotal}
              isCartEmpty={isCartEmpty}
              isSubmitting={isSubmitting}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

async function createCheckoutOrder(payload: Record<string, unknown>) {
  const response = await fetch('/api/orders', {
    body: JSON.stringify(payload),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
  const data = (await response.json().catch(() => null)) as CreatedOrderResponse | null

  if (!response.ok || !data?.orderNumber) {
    throw new Error('Order create failed')
  }

  return data
}

async function createMonobankPayment(endpoint: string, payload: Record<string, unknown>) {
  const response = await fetch(endpoint, {
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
  const data = (await response.json().catch(() => null)) as MonobankCreateResponse | null

  if (!response.ok || !data) {
    throw new Error(getMonobankErrorMessage(data))
  }

  return data
}

function getPaymentRedirectUrl(response: MonobankCreateResponse) {
  return (
    response.pageUrl ||
    response.invoiceUrl ||
    response.redirectUrl ||
    response.redirect_url ||
    response.url ||
    ''
  )
}

function getMonobankErrorMessage(response: MonobankCreateResponse | null) {
  const explicitMessage = response?.message || response?.error

  if (explicitMessage) {
    return explicitMessage
  }

  const detailsMessage = getDetailsMessage(response?.details)

  return (
    detailsMessage || 'Не вдалося створити оплату Monobank. Перевірте дані та спробуйте ще раз.'
  )
}

function getDetailsMessage(details: unknown) {
  if (!details || typeof details !== 'object') {
    return ''
  }

  const record = details as Record<string, unknown>

  if (typeof record.message === 'string') {
    const nestedMessage = getNestedErrorMessage(record.errors)

    return nestedMessage ? `${record.message}: ${nestedMessage}` : record.message
  }

  if (typeof record.errText === 'string') {
    return record.errText
  }

  if (typeof record.error === 'string') {
    return record.error
  }

  return ''
}

function getNestedErrorMessage(errors: unknown) {
  if (!Array.isArray(errors)) {
    return ''
  }

  const firstError = errors.find((error) => error && typeof error === 'object') as
    | Record<string, unknown>
    | undefined

  if (!firstError) {
    return ''
  }

  return typeof firstError.error === 'string' ? firstError.error : ''
}

function getFinancialPhone(financialPhone: string, phone: string) {
  const digits = financialPhone.replace(/\D/g, '')

  return digits.length >= 12 ? financialPhone : phone
}

function formatDeliveryAddress(address: {
  apartment?: string
  city: string
  postalCode?: string
  street: string
}) {
  return [address.city, address.street, address.apartment, address.postalCode]
    .filter(Boolean)
    .join(', ')
}

function createCheckoutOrderId() {
  return `${Math.floor(10000 + Math.random() * 90000)}`
}
