'use client'

import { normalizeCheckoutPhone } from '@/lib/checkoutPhone'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState, type FormEvent } from 'react'

import { useCommerce } from '../components/providers/CommerceProvider'
import { useSitePreferences } from '../components/providers/SitePreferencesProvider'
import { Turnstile } from '../components/security/Turnstile'
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
  PartsPaymentModal,
  checkoutFieldClasses,
} from '../components/checkout/CheckoutSections'

type CreatedOrderResponse = {
  error?: string
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
  const { locale } = useSitePreferences()
  const [verificationId, setVerificationId] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [confirmedCodeKey, setConfirmedCodeKey] = useState('')
  const [isVerifyingCode, setIsVerifyingCode] = useState(false)
  const [verificationPhone, setVerificationPhone] = useState('')
  const [isSendingCode, setIsSendingCode] = useState(false)
  const [resendAt, setResendAt] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isPartsModalOpen, setIsPartsModalOpen] = useState(false)
  const [partsCount, setPartsCount] = useState(8)
  const [paymentError, setPaymentError] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')
  const [turnstileResetKey, setTurnstileResetKey] = useState(0)
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
    const searchParams = new URLSearchParams(window.location.search)

    setPartsCount(normalizePartsCount(searchParams.get('partsCount')))
  }, [])

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

  const requestCode = async () => {
    if (isSendingCode || isSubmitting) return
    if (Date.now() < resendAt) {
      setPaymentError(
        locale === 'en'
          ? 'Wait 60 seconds before requesting another code.'
          : 'Зачекайте 60 секунд перед повторним запитом коду.',
      )
      return
    }
    setIsSendingCode(true)
    setPaymentError('')
    const phone = normalizeCheckoutPhone(formState.phone)
    try {
      const response = await fetch('/api/forms/orders/request-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, turnstileToken, locale }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error)
      setVerificationId(data.verificationId)
      setVerificationPhone(phone ?? '')
      setVerificationCode('')
      setResendAt(Date.now() + 60000)
    } catch (error) {
      setPaymentError(error instanceof Error ? error.message : 'Unable to send code')
    } finally {
      setIsSendingCode(false)
      setTurnstileToken('')
      setTurnstileResetKey((value) => value + 1)
    }
  }

  const codeKey = `${normalizeCheckoutPhone(formState.phone)}:${verificationId}:${verificationCode}`
  const isPhoneVerified = confirmedCodeKey === codeKey

  const verifyCode = async () => {
    if (isVerifyingCode || isSubmitting || isSendingCode) return
    setIsVerifyingCode(true)
    setPaymentError('')
    setConfirmedCodeKey('')
    try {
      const response = await fetch('/api/forms/orders/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: formState.phone, verificationId, code: verificationCode }),
      })
      if (!response.ok) throw new Error(response.status === 400 ? 'invalid_code' : 'unavailable')
      setConfirmedCodeKey(codeKey)
    } catch (error) {
      setPaymentError(
        error instanceof Error && error.message === 'invalid_code'
          ? locale === 'en'
            ? 'Invalid or expired code. Check it or request a new one.'
            : 'Невірний або прострочений код. Запросіть новий.'
          : locale === 'en'
            ? 'Unable to verify the code. Please try again.'
            : 'Не вдалося перевірити код. Спробуйте ще раз.',
      )
    } finally {
      setIsVerifyingCode(false)
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isCartEmpty || isSubmitting || isSendingCode || isVerifyingCode) {
      return
    }

    if (
      !isPhoneVerified ||
      !verificationId ||
      verificationPhone !== normalizeCheckoutPhone(formState.phone) ||
      !/^\d{6}$/.test(verificationCode)
    ) {
      setPaymentError(
        locale === 'en'
          ? 'Confirm your phone number with the six-digit SMS code first.'
          : 'Спершу підтвердьте номер телефону шестизначним кодом із SMS.',
      )
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
    try {
      const createdOrder = await createCheckoutOrder({
        comment: formState.comment,
        customerEmail: formState.email,
        delivery: {
          method: formState.deliveryMethod,
          pickupPoint: formState.pickupPoint,
        },
        firstName: formState.firstName,
        financialPhone: getFinancialPhone(formState.financialPhone, formState.phone),
        items: paymentItems,
        lastName: formState.lastName,
        orderNumber: orderId,
        partsCount,
        paymentMethod: formState.paymentMethod,
        phone: formState.phone,
        total: cartTotal,
        verificationId,
        verificationCode,
      })
      const orderNumber = createdOrder.orderNumber

      completeOrder({
        email: formState.email,
        firstName: formState.firstName,
        lastName: formState.lastName,
        orderId: orderNumber,
        phone: formState.phone,
      })

      router.push('/checkout/success')
    } catch (error) {
      setTurnstileResetKey((current) => current + 1)
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
                      onChange={(event) => {
                        setConfirmedCodeKey('')
                        setFormState((current) => ({ ...current, phone: event.target.value }))
                      }}
                      placeholder="+380"
                      className={`${checkoutFieldClasses} h-[64px]`}
                    />
                  </CheckoutField>

                  <CheckoutField label="Email *">
                    <input
                      required
                      type="email"
                      value={formState.email}
                      onChange={(event) => {
                        setFormState((current) => ({ ...current, email: event.target.value }))
                      }}
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
                    action={
                      formState.paymentMethod === 'monobank-parts' ? (
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation()
                            setIsPartsModalOpen(true)
                          }}
                          className="text-[16px] font-bold leading-[145%] text-[#4FACF5]"
                        >
                          Змінити
                        </button>
                      ) : null
                    }
                    description="Оформлення онлайн через monobank"
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
                            Оплата частинами {partsCount} платежів
                          </div>
                          <div className="text-[16px] font-medium leading-[165%] text-[#B7CAD1]">
                            {partsCount} платежів {Math.max(1, partsCount - 1)} місяців
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

                  <div className="flex flex-col gap-3">
                    <p>
                      {locale === 'en'
                        ? 'Verify your phone number before placing the order.'
                        : 'Підтвердьте номер телефону перед оформленням замовлення.'}
                    </p>
                    <button
                      type="button"
                      disabled={
                        isSendingCode ||
                        isSubmitting ||
                        !turnstileToken ||
                        !normalizeCheckoutPhone(formState.phone)
                      }
                      onClick={requestCode}
                      className="rounded-full bg-[#4FACF5] px-6 py-3 text-white disabled:opacity-50"
                    >
                      {isSendingCode
                        ? locale === 'en'
                          ? 'Sending…'
                          : 'Надсилаємо…'
                        : locale === 'en'
                          ? 'Send SMS code'
                          : 'Надіслати код у SMS'}
                    </button>
                    {verificationId &&
                    verificationPhone === normalizeCheckoutPhone(formState.phone) ? (
                      <CheckoutField
                        label={locale === 'en' ? 'SMS verification code *' : 'Код із SMS *'}
                      >
                        <p role="status">
                          {locale === 'en' ? 'Code sent to' : 'Код надіслано на'}{' '}
                          {verificationPhone}.{' '}
                          {locale === 'en'
                            ? 'The SMS code is valid for 10 minutes.'
                            : 'Код із SMS діє 10 хвилин.'}
                        </p>
                        <div className="flex w-full items-center gap-3">
                          <input
                            required
                            aria-label={
                              locale === 'en'
                                ? 'Phone verification code'
                                : 'Код підтвердження телефону'
                            }
                            disabled={isVerifyingCode || isSubmitting}
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            pattern="[0-9]{6}"
                            maxLength={6}
                            value={verificationCode}
                            onChange={(event) => {
                              setConfirmedCodeKey('')
                              setVerificationCode(event.target.value.replace(/\D/g, ''))
                            }}
                            className={`${checkoutFieldClasses} h-[64px] min-w-0 flex-1`}
                          />
                          <button
                            type="button"
                            onClick={verifyCode}
                            disabled={
                              isVerifyingCode ||
                              isSubmitting ||
                              isSendingCode ||
                              isPhoneVerified ||
                              !/^\d{6}$/.test(verificationCode)
                            }
                            className="h-[64px] shrink-0 rounded-full bg-[#4FACF5] px-4 text-[16px] font-medium text-white disabled:opacity-50 sm:px-6"
                          >
                            {isVerifyingCode
                              ? locale === 'en'
                                ? 'Checking…'
                                : 'Перевіряємо…'
                              : isPhoneVerified
                                ? locale === 'en'
                                  ? 'Verified'
                                  : 'Підтверджено'
                                : locale === 'en'
                                  ? 'Verify'
                                  : 'Перевірити'}
                          </button>
                        </div>
                        {isPhoneVerified ? (
                          <p role="status" className="text-green-700">
                            {locale === 'en'
                              ? 'Phone number verified. You can now place your order.'
                              : 'Номер телефону підтверджено. Тепер можна оформити замовлення.'}
                          </p>
                        ) : null}
                      </CheckoutField>
                    ) : null}
                  </div>
                  <Turnstile onTokenChange={setTurnstileToken} resetKey={turnstileResetKey} />

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

      <PartsPaymentModal
        isOpen={isPartsModalOpen}
        totalInEUR={cartTotal}
        onClose={() => setIsPartsModalOpen(false)}
        onSelect={(nextPartsCount) => {
          setPartsCount(nextPartsCount)
          setIsPartsModalOpen(false)
        }}
        onUpdatePartsCount={setPartsCount}
        partsCount={partsCount}
      />
    </div>
  )
}

async function createCheckoutOrder(payload: Record<string, unknown>) {
  const response = await fetch('/api/forms/orders', {
    body: JSON.stringify(payload),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
  const data = (await response.json().catch(() => null)) as CreatedOrderResponse | null

  if (!response.ok || !data?.orderNumber) {
    throw new Error(data?.error || 'Не вдалося створити замовлення')
  }

  return data
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

function normalizePartsCount(value: string | null) {
  const parsedValue = Number(value)

  return [3, 4, 5, 6, 7, 8].includes(parsedValue) ? parsedValue : 8
}

function createCheckoutOrderId() {
  const timestamp = Date.now().toString(36).toUpperCase()
  const randomPart = crypto.randomUUID().slice(0, 8).toUpperCase()

  return `VN-${timestamp}-${randomPart}`
}
