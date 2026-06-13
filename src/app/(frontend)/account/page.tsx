'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { type FormEvent, type ReactNode, useMemo, useState } from 'react'

import { useCommerce, type DeliveryAddress } from '../components/providers/CommerceProvider'
import ArrowPillButton from '../components/ui/ArrowPillButton'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import addressIconAsset from '@public/icon/generated/account-account-page-address.svg'
import dealerIconAsset from '@public/icon/generated/account-account-page-dealer.svg'
import historyIconAsset from '@public/icon/generated/account-account-page-history.svg'
import ordersIconAsset from '@public/icon/generated/account-account-page-orders.svg'
import profileIconAsset from '@public/icon/generated/account-account-page-profile.svg'
import {
  EmptyState,
  OrderCard,
  PaginationArrowButton,
  SectionCard,
  SidebarButton,
} from '../components/account/AccountSections'
import {
  ORDERS_PER_PAGE,
  accountEmptyStates,
  accountFallbacks,
  accountHeader,
  accountHero,
  accountSectionTitles,
  accountSidebarItems,
  dealerCta,
  orderLabels,
  type AccountSection,
  type AccountSectionIconKey,
} from '../components/account/data'

const accountSectionIconMap: Record<AccountSectionIconKey, ReactNode> = {
  addresses: <IconAsset src={addressIconAsset} width={24} height={24} />,
  orders: <IconAsset src={ordersIconAsset} width={24} height={24} />,
  profile: <IconAsset src={profileIconAsset} width={24} height={24} />,
}

function PriceListIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.1875 20.7273V3.27273C2.1875 2.40475 2.53255 1.57256 3.14631 0.958807C3.76006 0.345051 4.59225 0 5.46023 0H15.2784L15.386 0.0053267C15.6358 0.0300795 15.8707 0.140537 16.0497 0.319602L21.5043 5.77415C21.7088 5.97873 21.8239 6.25613 21.8239 6.54545V20.7273C21.8239 21.5953 21.4788 22.4274 20.8651 23.0412C20.2513 23.6549 19.4191 24 18.5511 24H5.46023C4.59225 24 3.76006 23.6549 3.14631 23.0412C2.53255 22.4274 2.1875 21.5953 2.1875 20.7273ZM4.36932 20.7273C4.36932 21.0166 4.48434 21.294 4.68892 21.4986C4.89351 21.7032 5.1709 21.8182 5.46023 21.8182H18.5511C18.8405 21.8182 19.1179 21.7032 19.3224 21.4986C19.527 21.294 19.642 21.0166 19.642 20.7273V6.99716L14.8267 2.18182H5.46023C5.1709 2.18182 4.89351 2.29684 4.68892 2.50142C4.48434 2.70601 4.36932 2.9834 4.36932 3.27273V20.7273Z"
        fill="currentColor"
      />
      <path
        d="M13.0938 5.45455V1.09091C13.0938 0.488417 13.5822 0 14.1847 0C14.7872 0 15.2756 0.488417 15.2756 1.09091V5.45455C15.2756 5.74387 15.3906 6.02127 15.5952 6.22585C15.7998 6.43044 16.0772 6.54545 16.3665 6.54545H20.7301C21.3326 6.54545 21.821 7.03387 21.821 7.63636C21.821 8.23886 21.3326 8.72727 20.7301 8.72727H16.3665C15.4985 8.72727 14.6663 8.38222 14.0526 7.76847C13.4388 7.15471 13.0938 6.32253 13.0938 5.45455Z"
        fill="currentColor"
      />
      <path
        d="M9.8196 7.63672C10.4221 7.63672 10.9105 8.12514 10.9105 8.72763C10.9105 9.33012 10.4221 9.81854 9.8196 9.81854H7.63778C7.03529 9.81854 6.54688 9.33012 6.54688 8.72763C6.54688 8.12514 7.03529 7.63672 7.63778 7.63672H9.8196Z"
        fill="currentColor"
      />
      <path
        d="M16.3651 12C16.9675 12 17.456 12.4884 17.456 13.0909C17.456 13.6934 16.9675 14.1818 16.3651 14.1818H7.63778C7.03529 14.1818 6.54688 13.6934 6.54688 13.0909C6.54688 12.4884 7.03529 12 7.63778 12H16.3651Z"
        fill="currentColor"
      />
      <path
        d="M16.3651 16.3633C16.9675 16.3633 17.456 16.8517 17.456 17.4542C17.456 18.0567 16.9675 18.5451 16.3651 18.5451H7.63778C7.03529 18.5451 6.54688 18.0567 6.54688 17.4542C6.54688 16.8517 7.03529 16.3633 7.63778 16.3633H16.3651Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function AccountPage() {
  const {
    deliveryAddress,
    currentUser,
    isLoggedIn,
    lastOrder,
    openDealerModal,
    openLogoutModal,
    orderHistory,
    saveDeliveryAddress,
    updateProfile,
  } = useCommerce()

  const [activeSection, setActiveSection] = useState<AccountSection>('orders')
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.max(1, Math.ceil(orderHistory.length / ORDERS_PER_PAGE))
  const safePage = Math.min(currentPage, totalPages)
  const visibleOrders = useMemo(
    () => orderHistory.slice((safePage - 1) * ORDERS_PER_PAGE, safePage * ORDERS_PER_PAGE),
    [orderHistory, safePage],
  )

  const userFullName = `${currentUser?.firstName ?? ''} ${currentUser?.lastName ?? ''}`.trim()
  const customerName =
    userFullName || lastOrder?.customerName?.trim() || accountFallbacks.customerName
  const customerEmail = currentUser?.email || lastOrder?.email || accountFallbacks.customerEmail
  const ordersStart = orderHistory.length === 0 ? 0 : (safePage - 1) * ORDERS_PER_PAGE + 1
  const ordersEnd = Math.min(safePage * ORDERS_PER_PAGE, orderHistory.length)
  const avatarLetter = customerName[0]?.toUpperCase() ?? accountFallbacks.avatarLetter
  const isDealer = currentUser?.role === 'dealer'

  if (!isLoggedIn) {
    return (
      <div className="pt-5">
        <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
          <section className="rounded-[32px] bg-white px-6 py-16 text-center shadow-[0_20px_60px_rgba(34,53,74,0.06)] md:px-12 md:py-20">
            <h1 className="text-[40px] font-medium leading-[145%] text-[#22354A] md:text-[56px]">
              {accountHero.title}
            </h1>
            <p className="mx-auto mt-4 max-w-[640px] text-[20px] font-medium leading-[165%] text-[#22354A]">
              {accountHero.description}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/login"
                className="flex h-[50px] items-center justify-center rounded-full bg-[#22354A] px-8 text-[18px] font-medium leading-[145%] text-white"
              >
                {accountHero.loginLabel}
              </Link>
              <Link
                href="/register"
                className="flex h-[50px] items-center justify-center rounded-full border border-[#D5E0E8] px-8 text-[18px] font-medium leading-[145%] text-[#22354A]"
              >
                {accountHero.registerLabel}
              </Link>
            </div>
          </section>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-5 px-6 pb-[100px]">
        <section className="py-7 md:py-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4">
              <h1 className="text-[24px] font-bold leading-[125%] text-[#22354A]">
                {accountHeader.title}
              </h1>
              <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                {accountHeader.description}
              </p>
            </div>

            <ArrowPillButton
              onClick={openLogoutModal}
              isDark
              className="mr-[50px] self-start md:mr-[54px]"
            >
              {accountHeader.logoutLabel}
            </ArrowPillButton>
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-[400px_minmax(0,1fr)]">
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-5"
          >
            <div className="rounded-[20px] bg-white px-6 py-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center gap-4 border-b border-[#D5E0E8] pb-6 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#4FACF5] text-[30px] font-bold leading-none tracking-[0.4px] text-white shadow-[0_10px_20px_rgba(79,172,245,0.22)]">
                    {avatarLetter}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[20px] font-bold leading-[125%] text-[#22354A]">
                      {customerName}
                    </div>
                    <div className="text-[16px] font-medium leading-[165%] text-[#6F8498]">
                      {isDealer ? 'B2B Дилер' : customerEmail}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {accountSidebarItems.map((item) =>
                    isDealer && item.id === 'addresses' ? (
                      <SidebarButton
                        key="price-list"
                        active={activeSection === 'price-list'}
                        icon={<PriceListIcon />}
                        label="Прайс-лист"
                        onClick={() => setActiveSection('price-list')}
                      />
                    ) : (
                      <SidebarButton
                        key={item.id}
                        active={activeSection === item.id}
                        icon={accountSectionIconMap[item.iconKey]}
                        label={item.label}
                        onClick={() => setActiveSection(item.id)}
                      />
                    ),
                  )}
                </div>
              </div>
            </div>

            {!isDealer ? (
              <button
                type="button"
                onClick={openDealerModal}
                className="flex h-[74px] items-center gap-4 rounded-[20px] bg-white px-6 text-left shadow-[0_20px_60px_rgba(34,53,74,0.04)] transition-colors hover:bg-[#F8FBFD]"
              >
                <span className="text-[#22354A]">
                  <IconAsset src={dealerIconAsset} width={24} height={24} />
                </span>
                <span className="text-[18px] font-bold leading-[165%] text-[#22354A]">
                  {dealerCta.label}
                </span>
              </button>
            ) : null}
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.3 }}
            className="flex flex-col gap-5"
          >
            {activeSection === 'orders' ? (
              <>
                <SectionCard
                  icon={<IconAsset src={historyIconAsset} width={24} height={24} />}
                  title={accountSectionTitles.orders}
                >
                  {orderHistory.length === 0 ? (
                    <EmptyState
                      actionHref={accountEmptyStates.orders.actionHref}
                      actionLabel={accountEmptyStates.orders.actionLabel}
                      description={accountEmptyStates.orders.description}
                      title={accountEmptyStates.orders.title}
                    />
                  ) : (
                    <div className="flex flex-col gap-4">
                      {visibleOrders.map((order) => (
                        <OrderCard key={order.id} order={order} />
                      ))}
                    </div>
                  )}
                </SectionCard>

                {orderHistory.length > 0 ? (
                  <section className="rounded-[24px] bg-white px-8 py-6 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                      <div className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                        {orderLabels.shownPrefix} {ordersStart}-{ordersEnd}{' '}
                        {orderLabels.shownSeparator} {orderHistory.length} замовлень
                      </div>

                      <div className="flex items-center gap-[10px]">
                        <PaginationArrowButton
                          direction="left"
                          disabled={safePage === 1}
                          onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                        />

                        <div className="flex items-center gap-[5px]">
                          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                            (page) => (
                              <button
                                key={page}
                                type="button"
                                onClick={() => setCurrentPage(page)}
                                className={`flex h-[42px] w-[42px] items-center justify-center rounded-[10px] text-[16px] font-medium leading-[145%] transition-colors ${
                                  page === safePage
                                    ? 'bg-[#4FACF5] text-white'
                                    : 'bg-[#F5F8F9] text-[#22354A] hover:bg-[#E8F3FB]'
                                }`}
                              >
                                {page}
                              </button>
                            ),
                          )}
                        </div>

                        <PaginationArrowButton
                          direction="right"
                          disabled={safePage === totalPages}
                          onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                        />
                      </div>
                    </div>
                  </section>
                ) : null}
              </>
            ) : null}

            {activeSection === 'profile' ? (
              <SectionCard
                icon={<IconAsset src={profileIconAsset} width={24} height={24} />}
                title={accountSectionTitles.profile}
              >
                <ProfilePanel currentUser={currentUser} onUpdateProfile={updateProfile} />
              </SectionCard>
            ) : null}

            {!isDealer && activeSection === 'addresses' ? (
              <SectionCard
                icon={<IconAsset src={addressIconAsset} width={24} height={24} />}
                title={accountSectionTitles.addresses}
              >
                <DeliveryAddressPanel
                  address={deliveryAddress}
                  onSaveAddress={saveDeliveryAddress}
                />
              </SectionCard>
            ) : null}

            {isDealer && activeSection === 'price-list' ? <DealerPriceListPanel /> : null}
          </motion.div>
        </section>
      </div>
    </div>
  )
}

function DealerPriceListPanel() {
  const updatedAt = new Intl.DateTimeFormat('uk-UA', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date())

  return (
    <section className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="text-[#4FACF5]">
                <PriceListIcon />
              </span>
              <h2 className="text-[20px] font-bold leading-[125%] text-[#22354A]">Прайс-лист</h2>
            </div>
            <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
              Оновлено: {updatedAt}
            </p>
          </div>

          <Link
            href="/api/dealer-price-list"
            className="flex min-h-[54px] items-center justify-center gap-3 rounded-[40px] bg-[#4FACF5] px-6 text-[18px] font-bold leading-[165%] text-white transition-opacity hover:opacity-90"
          >
            <DownloadIcon />
            Завантажити Excel
          </Link>
        </div>

        <div className="flex min-h-[124px] items-center justify-center rounded-[20px] bg-[#F5F8F9] p-8">
          <p className="max-w-[470px] text-center text-[18px] font-medium leading-[165%] text-[#22354A]">
            Ви можете завантажити актуальний прайс-лист у форматі Excel з усіма товарами та
            дилерськими цінами
          </p>
        </div>
      </div>
    </section>
  )
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 20 20" width="20">
      <path
        d="M17.5 12.5v3.333a1.667 1.667 0 0 1-1.667 1.667H4.167A1.667 1.667 0 0 1 2.5 15.833V12.5M5.833 8.333 10 12.5l4.167-4.167M10 12.5v-10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
      />
    </svg>
  )
}

function ProfilePanel({
  currentUser,
  onUpdateProfile,
}: {
  currentUser: {
    email: string
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
  } | null
  onUpdateProfile: (input: {
    email?: string
    firstName: string
    lastName: string
    password?: string
    phone: string
  }) => Promise<{ error: string | null }>
}) {
  const [formState, setFormState] = useState({
    email: currentUser?.email ?? '',
    firstName: currentUser?.firstName ?? '',
    lastName: currentUser?.lastName ?? '',
    password: '',
    phone: currentUser?.phone ?? '',
  })
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  const saveProfile = async () => {
    setStatusMessage(null)

    const result = await onUpdateProfile({
      email: formState.email,
      firstName: formState.firstName,
      lastName: formState.lastName,
      password: formState.password || undefined,
      phone: formState.phone,
    })

    if (result.error) {
      setStatusMessage(result.error)
      return
    }

    setFormState((current) => ({ ...current, password: '' }))
    setStatusMessage('Профіль оновлено')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void saveProfile()
  }

  return (
    <div className="flex flex-col gap-5">
      <section className="rounded-[20px] border border-[#D5E0E8] bg-white p-6">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <ProfileFormField label="Ім'я *">
              <input
                required
                value={formState.firstName}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, firstName: event.target.value }))
                }
                placeholder="Введіть ім'я"
                className={profileFieldClasses}
              />
            </ProfileFormField>
            <ProfileFormField label="Прізвище *">
              <input
                required
                value={formState.lastName}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, lastName: event.target.value }))
                }
                placeholder="Введіть прізвище"
                className={profileFieldClasses}
              />
            </ProfileFormField>
            <ProfileFormField className="md:col-span-2" label="Телефон *">
              <input
                required
                value={formState.phone}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, phone: event.target.value }))
                }
                placeholder="+380"
                className={profileFieldClasses}
              />
            </ProfileFormField>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="inline-flex h-[50px] items-center justify-center rounded-full bg-[#4FACF5] px-8 text-[18px] font-bold leading-[145%] text-white transition-opacity hover:opacity-90"
            >
              Зберегти
            </button>
          </div>
        </form>
        {statusMessage ? (
          <div className="mt-5 rounded-[16px] bg-[#F5F8F9] px-5 py-4 text-[16px] font-medium leading-[145%] text-[#22354A]">
            {statusMessage}
          </div>
        ) : null}
      </section>

      <section className="rounded-[20px] border border-[#D5E0E8] bg-white p-6">
        <div className="flex flex-col gap-5">
          <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">
            Електронна адреса
          </h3>
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <ProfileFormField label="Поточна електронна адреса">
              <input
                type="email"
                value={formState.email}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, email: event.target.value }))
                }
                placeholder="Введіть email"
                className={profileFieldClasses}
              />
            </ProfileFormField>
            <button
              type="button"
              onClick={() => void saveProfile()}
              className="inline-flex h-[50px] items-center justify-center rounded-full bg-[#4FACF5] px-8 text-[18px] font-bold leading-[145%] text-white transition-opacity hover:opacity-90"
            >
              Змінити email
            </button>
          </div>
        </div>
      </section>

      <section className="rounded-[20px] border border-[#D5E0E8] bg-white p-6">
        <div className="flex flex-col gap-5">
          <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">Пароль</h3>
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <ProfileFormField label="Новий пароль">
              <input
                type="password"
                value={formState.password}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, password: event.target.value }))
                }
                placeholder="Введіть новий пароль"
                className={profileFieldClasses}
              />
            </ProfileFormField>
            <button
              type="button"
              onClick={() => void saveProfile()}
              className="inline-flex h-[50px] items-center justify-center rounded-full bg-[#4FACF5] px-8 text-[18px] font-bold leading-[145%] text-white transition-opacity hover:opacity-90"
            >
              Змінити пароль
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

const profileFieldClasses =
  'h-[64px] w-full rounded-[20px] border border-transparent bg-[#F5F8F9] px-6 text-[20px] font-medium leading-[145%] text-[#22354A] outline-none transition-colors placeholder:text-[#B7CAD1] focus:border-[#4FACF5] focus:bg-white'

function ProfileFormField({
  children,
  className = '',
  label,
}: {
  children: ReactNode
  className?: string
  label: string
}) {
  return (
    <label className={`flex flex-col gap-3 ${className}`}>
      <span className="text-[18px] font-medium leading-[165%] text-[#22354A]">{label}</span>
      {children}
    </label>
  )
}

function DeliveryAddressPanel({
  address,
  onSaveAddress,
}: {
  address: DeliveryAddress | null
  onSaveAddress: (address: DeliveryAddress) => void
}) {
  const [formState, setFormState] = useState<DeliveryAddress>(() => ({
    apartment: address?.apartment ?? '',
    city: address?.city ?? '',
    postalCode: address?.postalCode ?? '',
    street: address?.street ?? '',
  }))

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextAddress: DeliveryAddress = {
      apartment: formState.apartment?.trim() || undefined,
      city: formState.city.trim(),
      postalCode: formState.postalCode?.trim() || undefined,
      street: formState.street.trim(),
    }

    onSaveAddress(nextAddress)
    setFormState(nextAddress)
  }

  return (
    <form className="rounded-[20px] border border-[#D5E0E8] bg-white p-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6">
        <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">Адреса доставки</h3>

        <div className="grid gap-5 md:grid-cols-2">
          <AddressFormField label="Місто *">
            <input
              required
              value={formState.city}
              onChange={(event) =>
                setFormState((current) => ({ ...current, city: event.target.value }))
              }
              placeholder="Київ"
              className={addressFieldClasses}
            />
          </AddressFormField>

          <AddressFormField label="Поштовий індекс">
            <input
              value={formState.postalCode ?? ''}
              onChange={(event) =>
                setFormState((current) => ({ ...current, postalCode: event.target.value }))
              }
              placeholder="01001"
              className={addressFieldClasses}
            />
          </AddressFormField>

          <AddressFormField className="md:col-span-2" label="Вулиця і будинок *">
            <input
              required
              value={formState.street}
              onChange={(event) =>
                setFormState((current) => ({ ...current, street: event.target.value }))
              }
              placeholder="вул. Хрещатик, 1"
              className={addressFieldClasses}
            />
          </AddressFormField>

          <AddressFormField label="Квартира">
            <input
              value={formState.apartment ?? ''}
              onChange={(event) =>
                setFormState((current) => ({ ...current, apartment: event.target.value }))
              }
              placeholder="15"
              className={addressFieldClasses}
            />
          </AddressFormField>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            className="inline-flex h-[50px] items-center justify-center rounded-full bg-[#4FACF5] px-8 text-[18px] font-bold leading-[145%] text-white transition-opacity hover:opacity-90"
          >
            Зберегти
          </button>
        </div>
      </div>
    </form>
  )
}

const addressFieldClasses =
  'h-[64px] w-full rounded-[20px] border border-transparent bg-[#F5F8F9] px-6 text-[20px] font-medium leading-[145%] text-[#22354A] outline-none transition-colors placeholder:text-[#B7CAD1] focus:border-[#4FACF5] focus:bg-white'

function AddressFormField({
  children,
  className = '',
  label,
}: {
  children: ReactNode
  className?: string
  label: string
}) {
  return (
    <label className={`flex flex-col gap-3 ${className}`}>
      <span className="text-[18px] font-medium leading-[165%] text-[#22354A]">{label}</span>
      {children}
    </label>
  )
}
