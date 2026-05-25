'use client'

import type { ReactNode } from 'react'

export function ContactField({
  children,
  label,
  required,
}: {
  children: ReactNode
  label: string
  required?: boolean
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[16px] font-medium leading-[165%] text-white md:text-[18px]">
        {label}
        {required ? <span className="text-[#4FACF5]"> *</span> : null}
      </span>
      {children}
    </label>
  )
}
