'use client'

import type { ReactNode } from 'react'

export function CheckoutField({ children, label }: { children: ReactNode; label: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[18px] font-medium leading-[165%] text-[#22354A]">{label}</span>
      {children}
    </label>
  )
}
