'use client'

import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import paginationLeftIconAsset from '@public/icon/generated/account-pagination-left.svg'
import paginationRightIconAsset from '@public/icon/generated/account-pagination-right.svg'
import { orderLabels } from './data'

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
