'use client'

import type { ReactNode } from 'react'

export function SectionCard({
  children,
  icon,
  title,
}: {
  children: ReactNode
  icon: ReactNode
  title: string
}) {
  return (
    <section className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
      <div className="mb-6 flex items-center gap-3">
        <span className="text-[#4FACF5]">{icon}</span>
        <h2 className="text-[20px] font-bold leading-[125%] text-[#22354A]">{title}</h2>
      </div>
      <div className="flex flex-col gap-6">{children}</div>
    </section>
  )
}
