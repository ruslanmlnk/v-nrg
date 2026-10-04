'use client'

import { useState, type ReactNode } from 'react'
import { useCommerce } from '../providers/CommerceProvider'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import calendarIconAsset from '@public/icon/generated/account-account-page-calendar.svg'
import statusCancelledIconAsset from '@public/icon/generated/account-account-page-status-cancelled.svg'
import statusDeliveredIconAsset from '@public/icon/generated/account-account-page-status-delivered.svg'
import statusPendingIconAsset from '@public/icon/generated/account-account-page-status-pending.svg'
import statusShippedIconAsset from '@public/icon/generated/account-account-page-status-shipped.svg'
import { accountFallbacks, orderLabels, orderStatusMeta, type OrderStatusIconKey } from './data'
import { useSitePreferences } from '../providers/SitePreferencesProvider'
import type { AccountOrder } from '@/lib/accountOrders'
export type { AccountOrder } from '@/lib/accountOrders'

const orderStatusIconMap: Record<OrderStatusIconKey, ReactNode> = {
  cancelled: <IconAsset src={statusCancelledIconAsset} width={16} height={16} />,
  delivered: <IconAsset src={statusDeliveredIconAsset} width={16} height={16} />,
  pending: <IconAsset src={statusPendingIconAsset} width={16} height={16} />,
  shipped: <IconAsset src={statusShippedIconAsset} width={16} height={16} />,
}

export function OrderCard({
  order,
  onCancelled,
}: {
  order: AccountOrder
  onCancelled?: () => void
}) {
  const { cancelOrder } = useCommerce()
  const [confirmCancel, setConfirmCancel] = useState(false)
  const [isCancelling, setIsCancelling] = useState(false)
  const [cancelError, setCancelError] = useState('')
  const handleCancel = async () => {
    setIsCancelling(true)
    setCancelError('')
    try {
      await cancelOrder(order.id)
      setConfirmCancel(false)
      onCancelled?.()
    } catch (error) {
      setCancelError(error instanceof Error ? error.message : 'Не вдалося скасувати замовлення.')
    } finally {
      setIsCancelling(false)
    }
  }
  const { locale } = useSitePreferences()
  // Checkout stores historical amounts in UAH; catalog prices use EUR.
  const formatPrice = (value: number) =>
    new Intl.NumberFormat(locale === 'en' ? 'en-US' : 'uk-UA', {
      style: 'currency',
      currency: 'UAH',
      maximumFractionDigits: 2,
    }).format(value)
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
                {order.createdAt
                  ? new Date(order.createdAt).toLocaleDateString(
                      locale === 'en' ? 'en-GB' : 'uk-UA',
                    )
                  : accountFallbacks.unknownDate}
              </InfoPill>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-semibold leading-[165%] ${status.colorClassName}`}
            >
              {statusIcon}
              {status.label}
            </span>

            <span className="text-sm text-[#22354A]">
              {
                {
                  awaiting_payment: 'Очікує оплати',
                  processing: 'Оплата обробляється',
                  paid: 'Оплачено',
                  failed: 'Оплата неуспішна',
                  refunded: 'Кошти повернено',
                }[order.paymentStatus]
              }
            </span>
          </div>
        </div>

        <div className="rounded-[20px] bg-[#F5F8F9] p-4">
          <div className="mb-4 text-[18px] font-bold leading-[165%] text-[#22354A]">
            {orderLabels.products}
          </div>
          <div className="flex flex-col gap-2">
            {order.items.map((item, index) => (
              <div
                key={`${order.id}-${item.productId}-${index}`}
                className="flex items-center justify-between gap-4"
              >
                <div className="text-[16px] font-medium leading-[165%] text-[#22354A]">
                  {item.title} × {item.quantity}
                </div>
                <div className="text-[16px] font-bold leading-[165%] text-[#22354A]">
                  {formatPrice(item.total)}
                </div>
              </div>
            ))}
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

        {order.paymentUrl && statusKey !== 'cancelled' && !confirmCancel ? (
          <a
            href={order.paymentUrl}
            className="flex min-h-[50px] w-full items-center justify-center rounded-[40px] bg-[#4FACF5] px-6 text-[18px] font-medium leading-[145%] text-white transition-opacity hover:opacity-90"
          >
            {orderLabels.pay}
          </a>
        ) : null}
        {order.canCancel && statusKey === 'new' ? (
          <div className="flex flex-col gap-3">
            {confirmCancel ? (
              <>
                <p className="text-[#22354A]">Скасувати замовлення №{order.id}?</p>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    disabled={isCancelling}
                    onClick={handleCancel}
                    className="rounded-full bg-[#C70036] px-6 py-3 text-white disabled:opacity-50"
                  >
                    {isCancelling ? 'Скасування…' : 'Так, скасувати'}
                  </button>
                  <button
                    type="button"
                    disabled={isCancelling}
                    onClick={() => setConfirmCancel(false)}
                    className="rounded-full border border-[#D5E0E8] px-6 py-3 text-[#22354A] disabled:opacity-50"
                  >
                    Залишити замовлення
                  </button>
                </div>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setConfirmCancel(true)}
                className="self-start rounded-full border border-[#C70036] px-6 py-3 text-[#C70036]"
              >
                Скасувати замовлення
              </button>
            )}
            {cancelError ? (
              <p role="alert" className="text-[#C70036]">
                {cancelError}
              </p>
            ) : null}
          </div>
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
