'use client'

import type { ReactNode } from 'react'

import { RadioIndicator } from './RadioIndicator'

export function DeliveryOption({
  active,
  children,
  description,
  onClick,
  title,
}: {
  active: boolean
  children?: ReactNode
  description: string
  onClick: () => void
  title: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col gap-4 rounded-[20px] border px-6 py-6 text-left ${active ? 'border-[#4FACF5]' : 'border-[#D5E0E8]'}`}
    >
      <div className="flex items-start gap-4">
        <RadioIndicator active={active} />
        <div className="flex flex-col gap-1">
          <div className="text-[18px] font-medium leading-[165%] text-[#22354A]">{title}</div>
          <div className="text-[16px] font-medium leading-[165%] text-[#B7CAD1]">{description}</div>
        </div>
      </div>
      {children}
    </button>
  )
}
