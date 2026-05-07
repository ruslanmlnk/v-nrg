'use client'

import type { ReactNode } from 'react'

import { RadioIndicator } from './RadioIndicator'

export function PaymentOption({
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
    <button type="button" onClick={onClick} className="flex flex-col gap-4 text-left">
      <div className="flex items-start gap-4">
        <RadioIndicator active={active} />
        <div className="flex flex-col gap-1">
          <div className="text-[18px] font-medium leading-[165%] text-[#22354A]">{title}</div>
          <div className="text-[16px] font-medium leading-[165%] text-[#B7CAD1]">{description}</div>
        </div>
      </div>
      {active ? children : null}
    </button>
  )
}
