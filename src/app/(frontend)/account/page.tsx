'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { type ReactNode, useMemo, useState } from 'react'

import { useCommerce } from '../components/providers/CommerceProvider'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import addressIconAsset from '@public/icon/generated/account-account-page-address.svg'
import dealerIconAsset from '@public/icon/generated/account-account-page-dealer.svg'
import headerArrowIconAsset from '@public/icon/generated/account-account-page-header-arrow.svg'
import historyIconAsset from '@public/icon/generated/account-account-page-history.svg'
import ordersIconAsset from '@public/icon/generated/account-account-page-orders.svg'
import profileIconAsset from '@public/icon/generated/account-account-page-profile.svg'
import {
  EmptyState,
  InfoTile,
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
  profileFieldLabels,
  profileNotice,
  type AccountSection,
  type AccountSectionIconKey,
} from '../components/account/data'

const accountSectionIconMap: Record<AccountSectionIconKey, ReactNode> = {
  addresses: <IconAsset src={addressIconAsset} width={24} height={24} />,
  orders: <IconAsset src={ordersIconAsset} width={24} height={24} />,
  profile: <IconAsset src={profileIconAsset} width={24} height={24} />,
}

export default function AccountPage() {
  const { isLoggedIn, lastOrder, openDealerModal, openLogoutModal, orderHistory } = useCommerce()

  const [activeSection, setActiveSection] = useState<AccountSection>('orders')
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.max(1, Math.ceil(orderHistory.length / ORDERS_PER_PAGE))
  const safePage = Math.min(currentPage, totalPages)
  const visibleOrders = useMemo(
    () => orderHistory.slice((safePage - 1) * ORDERS_PER_PAGE, safePage * ORDERS_PER_PAGE),
    [orderHistory, safePage],
  )

  const customerName = lastOrder?.customerName?.trim() || accountFallbacks.customerName
  const customerEmail = lastOrder?.email || accountFallbacks.customerEmail
  const ordersStart = orderHistory.length === 0 ? 0 : (safePage - 1) * ORDERS_PER_PAGE + 1
  const ordersEnd = Math.min(safePage * ORDERS_PER_PAGE, orderHistory.length)
  const avatarLetter = customerName[0]?.toUpperCase() ?? accountFallbacks.avatarLetter

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
        <section className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4">
              <h1 className="text-[24px] font-bold leading-[125%] text-[#22354A]">
                {accountHeader.title}
              </h1>
              <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                {accountHeader.description}
              </p>
            </div>

            <button
              type="button"
              onClick={openLogoutModal}
              className="flex h-[56px] items-center self-start rounded-full bg-[#22354A] pl-6 pr-[3px] text-[18px] font-medium leading-[145%] text-white transition-opacity hover:opacity-90"
            >
              <span>{accountHeader.logoutLabel}</span>
              <span className="ml-5 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#4FACF5]">
                <IconAsset src={headerArrowIconAsset} width={26} height={26} />
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
                  {accountSidebarItems.map((item) => (
                    <SidebarButton
                      key={item.id}
                      active={activeSection === item.id}
                      icon={accountSectionIconMap[item.iconKey]}
                      label={item.label}
                      onClick={() => setActiveSection(item.id)}
                    />
                  ))}
                </div>
              </div>
            </div>

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
                        {orderLabels.shownPrefix} {ordersStart}-{ordersEnd} {orderLabels.shownSeparator}{' '}
                        {orderHistory.length} замовлень
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
                <div className="grid gap-4 md:grid-cols-2">
                  <InfoTile
                    label={profileFieldLabels.name}
                    value={lastOrder?.customerName || accountFallbacks.emptyField}
                  />
                  <InfoTile
                    label={profileFieldLabels.email}
                    value={lastOrder?.email || accountFallbacks.emptyField}
                  />
                  <InfoTile
                    label={profileFieldLabels.phone}
                    value={lastOrder?.phone || accountFallbacks.emptyField}
                  />
                  <InfoTile
                    label={profileFieldLabels.lastOrder}
                    value={lastOrder ? `№${lastOrder.id}` : accountFallbacks.noOrders}
                  />
                </div>

                <div className="rounded-[20px] bg-[#F5F8F9] px-6 py-5 text-[16px] font-medium leading-[165%] text-[#22354A]">
                  {profileNotice}
                </div>
              </SectionCard>
            ) : null}

            {activeSection === 'addresses' ? (
              <SectionCard
                icon={<IconAsset src={addressIconAsset} width={24} height={24} />}
                title={accountSectionTitles.addresses}
              >
                <EmptyState
                  actionHref={accountEmptyStates.addresses.actionHref}
                  actionLabel={accountEmptyStates.addresses.actionLabel}
                  description={accountEmptyStates.addresses.description}
                  title={accountEmptyStates.addresses.title}
                />
              </SectionCard>
            ) : null}
          </motion.div>
        </section>
      </div>
    </div>
  )
}
