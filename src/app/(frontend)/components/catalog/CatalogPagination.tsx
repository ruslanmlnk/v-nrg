'use client'

import { type ReactNode } from 'react'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import paginationLeftIconAsset from '@public/icon/generated/catalog-pagination-left.svg'
import paginationRightIconAsset from '@public/icon/generated/catalog-pagination-right.svg'

export function CatalogPagination({
  currentPage,
  onPageChange,
  rangeEnd,
  rangeStart,
  totalItems,
  totalPages,
}: {
  currentPage: number
  onPageChange: (page: number) => void
  rangeEnd: number
  rangeStart: number
  totalItems: number
  totalPages: number
}) {
  return (
    <div className="flex flex-col gap-4 rounded-[24px] bg-white px-8 py-6 shadow-[0_20px_60px_rgba(34,53,74,0.04)] sm:flex-row sm:items-center sm:justify-between">
      <div className="text-[18px] font-medium leading-[165%] text-[#22354A]">
        Показано {rangeStart}-{rangeEnd} із {totalItems} товарів
      </div>

      <div className="flex items-center gap-3">
        <PaginationArrowButton
          direction="left"
          disabled={currentPage === 0}
          label="Попередня сторінка"
          onClick={() => onPageChange(Math.max(0, currentPage - 1))}
        />

        <div className="flex items-center gap-3">
          {Array.from({ length: totalPages }, (_, pageIndex) => (
            <PaginationNumber
              key={`page-${pageIndex}`}
              active={pageIndex === currentPage}
              onClick={() => onPageChange(pageIndex)}
            >
              {pageIndex + 1}
            </PaginationNumber>
          ))}
        </div>

        <PaginationArrowButton
          direction="right"
          disabled={currentPage >= totalPages - 1}
          label="Наступна сторінка"
          onClick={() => onPageChange(Math.min(totalPages - 1, currentPage + 1))}
        />
      </div>
    </div>
  )
}

function PaginationNumber({
  active = false,
  children,
  onClick,
}: {
  active?: boolean
  children: ReactNode
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[62px] w-[62px] items-center justify-center rounded-[20px] text-[30px] font-medium leading-[145%] transition-colors ${
        active ? 'bg-[#4FACF5] text-white' : 'bg-[#EEF3F6] text-[#22354A]'
      }`}
    >
      {children}
    </button>
  )
}

function PaginationArrowButton({
  direction,
  disabled = false,
  label,
  onClick,
}: {
  direction: 'left' | 'right'
  disabled?: boolean
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex h-[62px] w-[62px] items-center justify-center rounded-[20px] bg-[#EEF3F6] text-[#22354A] transition-opacity disabled:cursor-not-allowed disabled:opacity-45"
    >
      <IconAsset
        src={direction === 'left' ? paginationLeftIconAsset : paginationRightIconAsset}
        width={18}
        height={18}
      />
    </button>
  )
}
