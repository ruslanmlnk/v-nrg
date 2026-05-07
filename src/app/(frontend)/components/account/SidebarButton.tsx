'use client'

import type { ReactNode } from 'react'

export function SidebarButton({
  active,
  icon,
  label,
  onClick,
}: {
  active: boolean
  icon: ReactNode
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-4 rounded-[20px] border px-6 py-4 text-left transition-colors ${
        active
          ? 'border-[#4FACF5] bg-[#4FACF5] text-white'
          : 'border-[#D5E0E8] bg-white text-[#22354A] hover:bg-[#F8FBFD]'
      }`}
    >
      <span>{icon}</span>
      <span className={`text-[18px] font-medium leading-[165%] ${active ? 'font-bold' : ''}`}>
        {label}
      </span>
    </button>
  )
}
