'use client'

import type { ReactNode } from 'react'

import Link from 'next/link'

import { useCommerce } from '../providers/CommerceProvider'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import calendarIconAsset from '@public/icon/generated/account-account-page-calendar.svg'
import paginationLeftIconAsset from '@public/icon/generated/account-pagination-left.svg'
import paginationRightIconAsset from '@public/icon/generated/account-pagination-right.svg'
import statusCancelledIconAsset from '@public/icon/generated/account-account-page-status-cancelled.svg'
import statusDeliveredIconAsset from '@public/icon/generated/account-account-page-status-delivered.svg'
import statusPendingIconAsset from '@public/icon/generated/account-account-page-status-pending.svg'
import statusShippedIconAsset from '@public/icon/generated/account-account-page-status-shipped.svg'
import truckBadgeIconAsset from '@public/icon/generated/account-account-page-truck-badge.svg'
import { formatPrice } from '../../data/products'
import { accountFallbacks, orderLabels, orderStatusMeta, type OrderStatusIconKey } from './data'

export type AccountOrder = {
  createdAt?: string
  customerName: string
  email: string
  expectedDate?: string
  id: string
  items: { productId: string; quantity: number }[]
  phone: string
  status?: keyof typeof orderStatusMeta
  total: number
  trackingNumber?: string
}

const orderStatusIconMap: Record<OrderStatusIconKey, ReactNode> = {
  cancelled: <IconAsset src={statusCancelledIconAsset} width={16} height={16} />,
  delivered: <IconAsset src={statusDeliveredIconAsset} width={16} height={16} />,
  pending: <IconAsset src={statusPendingIconAsset} width={16} height={16} />,
  shipped: <IconAsset src={statusShippedIconAsset} width={16} height={16} />,
}

export function SectionCard({
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

export function SidebarButton({
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

export function OrderCard({ order }: { order: AccountOrder }) {
  const { getProductById } = useCommerce()
  const statusKey = order.status ?? 'processing'
  const status = orderStatusMeta[statusKey]
  const statusIcon = orderStatusIconMap[status.iconKey]

  return (
    <article className="rounded-[20px] border border-[#D5E0E8] bg-white p-6">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <div className="text-[20px] font-medium leading-[145%] text-[#22354A]">
              {orderLabels.orderPrefix}
              {order.id}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[16px] font-medium leading-[165%] text-[#22354A]">
              <InfoPill icon={<IconAsset src={calendarIconAsset} width={20} height={20} />}>
                {order.createdAt || accountFallbacks.unknownDate}
              </InfoPill>
              {order.trackingNumber ? (
                <InfoPill icon={<IconAsset src={truckBadgeIconAsset} width={20} height={20} />}>
                  {orderLabels.trackingPrefix} {order.trackingNumber}
                </InfoPill>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-semibold leading-[165%] ${status.colorClassName}`}
            >
              {statusIcon}
              {status.label}
            </span>

            {order.expectedDate ? (
              <div className="text-[16px] font-medium leading-[165%] text-[#22354A]">
                {orderLabels.expectedDate} {order.expectedDate}
              </div>
            ) : null}
          </div>
        </div>

        <div className="rounded-[20px] bg-[#F5F8F9] p-4">
          <div className="mb-4 text-[18px] font-bold leading-[165%] text-[#22354A]">
            {orderLabels.products}
          </div>
          <div className="flex flex-col gap-2">
            {order.items.map((item, index) => {
              const product = getProductById(item.productId)

              if (!product) {
                return null
              }

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
              {orderLabels.total}
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
              {orderLabels.pay}
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export function EmptyState({
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

export function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[20px] bg-[#F5F8F9] px-6 py-5">
      <div className="text-[16px] font-medium leading-[165%] text-[#6F8498]">{label}</div>
      <div className="mt-2 text-[24px] font-medium leading-[145%] text-[#22354A]">{value}</div>
    </div>
  )
}

export function PaginationArrowButton({
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
      aria-label={direction === 'left' ? orderLabels.pagination.left : orderLabels.pagination.right}
    >
      <IconAsset
        src={direction === 'left' ? paginationLeftIconAsset : paginationRightIconAsset}
        width={14}
        height={14}
      />
    </button>
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
