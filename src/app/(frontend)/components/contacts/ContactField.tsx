'use client'

import type { ReactNode } from 'react'

export function ContactField({ children, label }: { children: ReactNode; label: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[16px] font-medium leading-[165%] text-white">{label}</span>
      {children}
    </label>
  )
}
