'use client'

import type { ReactNode } from 'react'
import { useCommerce } from '../providers/CommerceProvider'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import calendarIconAsset from '@public/icon/generated/account-account-page-calendar.svg'
import statusCancelledIconAsset from '@public/icon/generated/account-account-page-status-cancelled.svg'
import statusDeliveredIconAsset from '@public/icon/generated/account-account-page-status-delivered.svg'
import statusPendingIconAsset from '@public/icon/generated/account-account-page-status-pending.svg'
import statusShippedIconAsset from '@public/icon/generated/account-account-page-status-shipped.svg'
import truckBadgeIconAsset from '@public/icon/generated/account-account-page-truck-badge.svg'
import { accountFallbacks, orderLabels, orderStatusMeta, type OrderStatusIconKey } from './data'
import { useSitePreferences } from '../providers/SitePreferencesProvider'

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

export function OrderCard({ order }: { order: AccountOrder }) {
  const { checkoutOrder, getProductById } = useCommerce()
  const { formatPrice } = useSitePreferences()
  const statusKey = order.status ?? 'processing'
  const status = orderStatusMeta[statusKey]
  const statusIcon = orderStatusIconMap[status.iconKey]

  return (
    <article className="rounded-[20px] border border-[#D5E0E8] bg-white p-6">
      <div className="flex flex-col gap-6">
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

        <div className="flex items-center justify-between gap-6 border-t border-[#D5E0E8] pt-4">
          <div className="text-[18px] font-medium leading-[165%] text-[#22354A]">
            {orderLabels.total}
          </div>
          <div className="text-[24px] font-bold leading-[145%] text-[#22354A]">
            {formatPrice(order.total)}
          </div>
        </div>

        {statusKey === 'awaiting-payment' ? (
          <button
            type="button"
            onClick={() => checkoutOrder(order.items)}
            className="flex min-h-[50px] w-full items-center justify-center rounded-[40px] bg-[#4FACF5] px-6 text-[18px] font-medium leading-[145%] text-white transition-opacity hover:opacity-90"
          >
            {orderLabels.pay}
          </button>
        ) : null}
      </div>
    </article>
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
