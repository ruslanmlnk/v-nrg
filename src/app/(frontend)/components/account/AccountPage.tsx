'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { type ReactNode, useMemo, useState } from 'react'

import SiteFooter from '../SiteFooter'
import { useCommerce } from '../providers/CommerceProvider'
import { formatPrice, productsMap } from '../../data/products'

const ORDERS_PER_PAGE = 5

type AccountSection = 'orders' | 'profile' | 'addresses'

const orderStatusMeta = {
  'awaiting-payment': {
    colorClassName: 'bg-[#FCF5DC] text-[#BB7A00]',
    icon: StatusPendingIcon,
    label: 'Очікує оплати',
  },
  cancelled: {
    colorClassName: 'bg-[#FFF1F2] text-[#C70036]',
    icon: StatusCancelledIcon,
    label: 'Скасовано',
  },
  delivered: {
    colorClassName: 'bg-[#ECFDF3] text-[#027A48]',
    icon: StatusDeliveredIcon,
    label: 'Доставлено',
  },
  processing: {
    colorClassName: 'bg-[#FCF5DC] text-[#BB7A00]',
    icon: StatusPendingIcon,
    label: 'Обробляється',
  },
  shipped: {
    colorClassName: 'bg-[#EEF4FF] text-[#155EEF]',
    icon: StatusShippedIcon,
    label: 'Відправлено',
  },
} as const

export default function AccountPage() {
  const { currentUser, isLoggedIn, lastOrder, openDealerModal, openLogoutModal, orderHistory } =
    useCommerce()

  const [activeSection, setActiveSection] = useState<AccountSection>('orders')
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.max(1, Math.ceil(orderHistory.length / ORDERS_PER_PAGE))
  const safePage = Math.min(currentPage, totalPages)
  const visibleOrders = useMemo(
    () => orderHistory.slice((safePage - 1) * ORDERS_PER_PAGE, safePage * ORDERS_PER_PAGE),
    [orderHistory, safePage],
  )

  const customerName = lastOrder?.customerName?.trim() || 'Ваш акаунт'
  const customerEmail = lastOrder?.email || 'Дані зʼявляться після першого замовлення'
  const ordersStart = orderHistory.length === 0 ? 0 : (safePage - 1) * ORDERS_PER_PAGE + 1
  const ordersEnd = Math.min(safePage * ORDERS_PER_PAGE, orderHistory.length)
  const avatarLetter = customerName[0]?.toUpperCase() ?? 'V'

  if (!isLoggedIn) {
    return (
      <div className="pt-5">
        <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
          <section className="rounded-[32px] bg-white px-6 py-16 text-center shadow-[0_20px_60px_rgba(34,53,74,0.06)] md:px-12 md:py-20">
            <h1 className="text-[40px] font-medium leading-[145%] text-[#22354A] md:text-[56px]">
              Кабінет користувача
            </h1>
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
      <div className="mx-auto flex max-w-[1288px] flex-col gap-5 px-6 pb-[100px]">
        <section className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4">
              <h1 className="text-[24px] font-bold leading-[125%] text-[#22354A]">
                Особистий кабінет
              </h1>
              <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                Керуйте своїми замовленнями та даними
              </p>
            </div>

            <button
              type="button"
              onClick={openLogoutModal}
              className="flex h-[56px] items-center self-start rounded-full bg-[#22354A] pl-6 pr-[3px] text-[18px] font-medium leading-[145%] text-white transition-opacity hover:opacity-90"
            >
              <span>Вийти</span>
              <span className="ml-5 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#4FACF5]">
                <HeaderArrowIcon />
              </span>
            </button>
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
                      {customerEmail}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <SidebarButton
                    active={activeSection === 'orders'}
                    icon={<OrdersIcon />}
                    label="Мої замовлення"
                    onClick={() => setActiveSection('orders')}
                  />
                  <SidebarButton
                    active={activeSection === 'profile'}
                    icon={<ProfileIcon />}
                    label="Профіль"
                    onClick={() => setActiveSection('profile')}
                  />
                  <SidebarButton
                    active={activeSection === 'addresses'}
                    icon={<AddressIcon />}
                    label="Адреси доставки"
                    onClick={() => setActiveSection('addresses')}
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={openDealerModal}
              className="flex h-[74px] items-center gap-4 rounded-[20px] bg-white px-6 text-left shadow-[0_20px_60px_rgba(34,53,74,0.04)] transition-colors hover:bg-[#F8FBFD]"
            >
              <span className="text-[#22354A]">
                <DealerIcon />
              </span>
              <span className="text-[18px] font-bold leading-[165%] text-[#22354A]">
                Стати ділером
              </span>
            </button>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.3 }}
            className="flex flex-col gap-5"
          >
            {activeSection === 'orders' ? (
              <>
                <SectionCard icon={<HistoryIcon />} title="Історія замовлень">
                  {orderHistory.length === 0 ? (
                    <EmptyState
                      actionHref="/catalog/aparaty-vakuumnoho-masazhu"
                      actionLabel="Перейти в каталог"
                      description="Після першого оформленого замовлення тут з’явиться детальна історія з поточними статусами."
                      title="У вас ще немає замовлень"
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
                        Показано {ordersStart}-{ordersEnd} з {orderHistory.length} замовлень
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
              <SectionCard icon={<ProfileIcon />} title="Профіль">
                <div className="grid gap-4 md:grid-cols-2">
                  <InfoTile
                    label="Ім’я та прізвище"
                    value={lastOrder?.customerName || 'Ще не вказано'}
                  />
                  <InfoTile label="Email" value={lastOrder?.email || 'Ще не вказано'} />
                  <InfoTile label="Телефон" value={lastOrder?.phone || 'Ще не вказано'} />
                  <InfoTile
                    label="Останнє замовлення"
                    value={lastOrder ? `№${lastOrder.id}` : 'Ще немає замовлень'}
                  />
                </div>

                <div className="rounded-[20px] bg-[#F5F8F9] px-6 py-5 text-[16px] font-medium leading-[165%] text-[#22354A]">
                  Дані профілю автоматично оновлюються після оформлення замовлення, щоб наступні
                  покупки були швидшими.
                </div>
              </SectionCard>
            ) : null}

            {activeSection === 'addresses' ? (
              <SectionCard icon={<AddressIcon />} title="Адреси доставки">
                <EmptyState
                  actionHref="/checkout"
                  actionLabel="Оформити замовлення"
                  description="Ми не зберегли жодної адреси доставки. Після наступного замовлення цей розділ стане інформативнішим."
                  title="Адреси доставки ще не додані"
                />
              </SectionCard>
            ) : null}
          </motion.div>
        </section>
      </div>

      <SiteFooter />
    </div>
  )
}

function SectionCard({
  children,
  icon,
  title,
}: {
  children: ReactNode
  icon: ReactNode
  title: string
}) {
  return (
    <section className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
      <div className="mb-8 flex items-center gap-3">
        <span className="text-[#4FACF5]">{icon}</span>
        <h2 className="text-[20px] font-bold leading-[125%] text-[#22354A]">{title}</h2>
      </div>
      <div className="flex flex-col gap-5">{children}</div>
    </section>
  )
}

function SidebarButton({
  active,
  icon,
  label,
  onClick,
}: {
  active: boolean
  icon: ReactNode
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-4 rounded-[20px] border px-6 py-4 text-left transition-colors ${
        active
          ? 'border-[#4FACF5] bg-[#4FACF5] text-white'
          : 'border-[#D5E0E8] bg-white text-[#22354A] hover:bg-[#F8FBFD]'
      }`}
    >
      <span>{icon}</span>
      <span className={`text-[18px] font-medium leading-[165%] ${active ? 'font-bold' : ''}`}>
        {label}
      </span>
    </button>
  )
}

function OrderCard({
  order,
}: {
  order: {
    createdAt?: string
    customerName: string
    email: string
    expectedDate?: string
    id: string
    items: { productId: keyof typeof productsMap; quantity: number }[]
    phone: string
    status?: keyof typeof orderStatusMeta
    total: number
    trackingNumber?: string
  }
}) {
  const statusKey = order.status ?? 'processing'
  const status = orderStatusMeta[statusKey]
  const StatusIcon = status.icon

  return (
    <article className="rounded-[20px] border border-[#D5E0E8] bg-white p-6">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <div className="text-[20px] font-medium leading-[145%] text-[#22354A]">
              Замовлення №{order.id}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[16px] font-medium leading-[165%] text-[#22354A]">
              <InfoPill icon={<CalendarIcon />}>{order.createdAt || 'Невідома дата'}</InfoPill>
              {order.trackingNumber ? (
                <InfoPill icon={<TruckBadgeIcon />}>ТТН: {order.trackingNumber}</InfoPill>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-semibold leading-[165%] ${status.colorClassName}`}
            >
              <StatusIcon />
              {status.label}
            </span>

            {order.expectedDate ? (
              <div className="text-[16px] font-medium leading-[165%] text-[#22354A]">
                Очікується: {order.expectedDate}
              </div>
            ) : null}
          </div>
        </div>

        <div className="rounded-[20px] bg-[#F5F8F9] p-4">
          <div className="mb-4 text-[18px] font-bold leading-[165%] text-[#22354A]">Товари:</div>
          <div className="flex flex-col gap-2">
            {order.items.map((item, index) => {
              const product = productsMap[item.productId]

              return (
                <div
                  key={`${order.id}-${item.productId}-${index}`}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="text-[16px] font-medium leading-[165%] text-[#22354A]">
                    {product.title} × {item.quantity}
                  </div>
                  <div className="text-[16px] font-bold leading-[165%] text-[#22354A]">
                    {formatPrice(product.price * item.quantity)}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#D5E0E8] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-between gap-6">
            <span className="text-[18px] font-medium leading-[165%] text-[#22354A]">
              Загальна сума:
            </span>
            <span className="text-[24px] font-bold leading-[145%] text-[#22354A]">
              {formatPrice(order.total)}
            </span>
          </div>

          {statusKey === 'awaiting-payment' ? (
            <Link
              href="/checkout"
              className="inline-flex h-[50px] items-center justify-center rounded-full bg-[#22354A] px-6 text-[18px] font-medium leading-[145%] text-white transition-opacity hover:opacity-90"
            >
              Оплатити
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  )
}

function EmptyState({
  actionHref,
  actionLabel,
  description,
  title,
}: {
  actionHref: string
  actionLabel: string
  description: string
  title: string
}) {
  return (
    <div className="rounded-[20px] bg-[#F5F8F9] px-6 py-8">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">{title}</h3>
          <p className="max-w-[720px] text-[18px] font-medium leading-[165%] text-[#22354A]">
            {description}
          </p>
        </div>

        <Link
          href={actionHref}
          className="inline-flex h-[50px] w-fit items-center justify-center rounded-full bg-[#4FACF5] px-6 text-[18px] font-bold leading-[145%] text-white"
        >
          {actionLabel}
        </Link>
      </div>
    </div>
  )
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[20px] bg-[#F5F8F9] px-6 py-5">
      <div className="text-[16px] font-medium leading-[165%] text-[#6F8498]">{label}</div>
      <div className="mt-2 text-[24px] font-medium leading-[145%] text-[#22354A]">{value}</div>
    </div>
  )
}

function InfoPill({ children, icon }: { children: ReactNode; icon: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="text-[#22354A]">{icon}</span>
      <span>{children}</span>
    </span>
  )
}

function PaginationArrowButton({
  direction,
  disabled,
  onClick,
}: {
  direction: 'left' | 'right'
  disabled: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex h-[50px] w-[42px] items-center justify-center rounded-[16px] bg-[#F5F8F9] text-[#22354A] transition-colors hover:bg-[#E8F3FB] disabled:cursor-not-allowed disabled:opacity-40"
      aria-label={direction === 'left' ? 'Попередня сторінка' : 'Наступна сторінка'}
    >
      <PaginationArrowIcon direction={direction} />
    </button>
  )
}

function HeaderArrowIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 13H24.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 5L24 13L16 21"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function OrdersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 1H4C2.34315 1 1 2.34315 1 4V7C1 8.65685 2.34315 10 4 10H7C8.65685 10 10 8.65685 10 7V4C10 2.34315 8.65685 1 7 1Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20 1H17C15.3431 1 14 2.34315 14 4V7C14 8.65685 15.3431 10 17 10H20C21.6569 10 23 8.65685 23 7V4C23 2.34315 21.6569 1 20 1Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 14H4C2.34315 14 1 15.3431 1 17V20C1 21.6569 2.34315 23 4 23H7C8.65685 23 10 21.6569 10 20V17C10 15.3431 8.65685 14 7 14Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20 14H17C15.3431 14 14 15.3431 14 17V20C14 21.6569 15.3431 23 17 23H20C21.6569 23 23 21.6569 23 20V17C23 15.3431 21.6569 14 20 14Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

function ProfileIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function AddressIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 10C19 8.14348 18.2629 6.36256 16.9502 5.0498C15.6374 3.73705 13.8565 3 12 3C10.1435 3 8.36256 3.73705 7.0498 5.0498C5.73705 6.36256 5 8.14348 5 10C5 12.1593 6.21679 14.4871 7.79785 16.5645C9.32566 18.5717 11.0795 20.1963 12 20.9951C12.9205 20.1963 14.6743 18.5717 16.2021 16.5645C17.7832 14.4871 19 12.1593 19 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

function DealerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.2 22.8V20.4C19.2 19.4452 18.8207 18.5296 18.1456 17.8544C17.4704 17.1793 16.5548 16.8 15.6 16.8H8.4C7.44522 16.8 6.52955 17.1793 5.85442 17.8544C5.17928 18.5296 4.8 19.4452 4.8 20.4V22.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10.8C14.3196 10.8 16.2 8.9196 16.2 6.6C16.2 4.28041 14.3196 2.4 12 2.4C9.68041 2.4 7.8 4.28041 7.8 6.6C7.8 8.9196 9.68041 10.8 12 10.8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function HistoryIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 8V12L15 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.05176 11C3.54071 6.50005 7.35559 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C8.13401 21 4.8374 18.5641 3.56329 15.1442"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 4V11H10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.66699 1.66699V5.00033"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.333 1.66699V5.00033"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.16667 3.33301H15.8333C16.7538 3.33301 17.5 4.0792 17.5 4.99967V16.6663C17.5 17.5868 16.7538 18.333 15.8333 18.333H4.16667C3.24619 18.333 2.5 17.5868 2.5 16.6663V4.99967C2.5 4.0792 3.24619 3.33301 4.16667 3.33301Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 8.33301H17.5"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TruckBadgeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.5 5H11.6667V13.3333H2.5V5Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinejoin="round"
      />
      <path
        d="M11.667 7.5H15.417L17.5003 9.58333V13.3333H11.667V7.5Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinejoin="round"
      />
      <circle cx="5.41667" cy="15.4167" r="1.66667" stroke="currentColor" strokeWidth="1.66667" />
      <circle cx="14.5837" cy="15.4167" r="1.66667" stroke="currentColor" strokeWidth="1.66667" />
    </svg>
  )
}

function StatusPendingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="8"
        cy="8"
        r="6.66667"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 5.33301V7.99967"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10.667H8.00667"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StatusDeliveredIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="6.66667" stroke="currentColor" strokeWidth="1.33333" />
      <path
        d="M5 8.16667L6.83333 10L11 5.83334"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StatusShippedIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 4H9.33333V10.6667H2V4Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinejoin="round"
      />
      <path
        d="M9.33301 6H12.333L13.9997 7.66667V10.6667H9.33301V6Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinejoin="round"
      />
      <circle cx="4.33366" cy="12.3337" r="1.33333" stroke="currentColor" strokeWidth="1.33333" />
      <circle cx="11.6667" cy="12.3337" r="1.33333" stroke="currentColor" strokeWidth="1.33333" />
    </svg>
  )
}

function StatusCancelledIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5361 2.25104C12.8709 1.91632 13.4142 1.91632 13.749 2.25104C14.0837 2.58575 14.0837 3.12914 13.749 3.46386L3.46386 13.749C3.12914 14.0837 2.58575 14.0837 2.25104 13.749C1.91632 13.4142 1.91632 12.8709 2.25104 12.5361L12.5361 2.25104Z"
        fill="currentColor"
      />
      <path
        d="M2.25104 2.25104C2.58575 1.91632 3.12914 1.91632 3.46386 2.25104L13.749 12.5361C14.0837 12.8709 14.0837 13.4142 13.749 13.749C13.4142 14.0837 12.8709 14.0837 12.5361 13.749L2.25104 3.46386C1.91632 3.12914 1.91632 2.58575 2.25104 2.25104Z"
        fill="currentColor"
      />
    </svg>
  )
}

function PaginationArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d={
          direction === 'left'
            ? 'M9.81608 1.08631L3.90237 7.00003L9.81608 12.9137'
            : 'M4.18392 1.08631L10.0976 7.00003L4.18392 12.9137'
        }
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
