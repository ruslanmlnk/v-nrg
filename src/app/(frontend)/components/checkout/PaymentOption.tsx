'use client'

import type { ReactNode } from 'react'

import { RadioIndicator } from './RadioIndicator'

export function PaymentOption({
  active,
  action,
  children,
  description,
  onClick,
  title,
}: {
  action?: ReactNode
  active: boolean
  children?: ReactNode
  description: string
  onClick: () => void
  title: string
}) {
  return (
    <div
      className={`flex flex-col gap-4 text-left ${
        active ? 'rounded-[20px] border border-[#4FACF5] p-6' : ''
      }`}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            onClick()
          }
        }}
        className="flex cursor-pointer items-start gap-4"
      >
        <RadioIndicator active={active} />
        <div className="flex min-w-0 flex-1 items-start justify-between gap-4">
          <div className="flex min-w-0 flex-col gap-1">
            <div className="text-[18px] font-medium leading-[165%] text-[#22354A]">{title}</div>
            <div className="text-[16px] font-medium leading-[165%] text-[#B7CAD1]">
              {description}
            </div>
          </div>
          {action ? <div className="flex-none">{action}</div> : null}
        </div>
      </div>
      {active ? children : null}
    </div>
  )
}
