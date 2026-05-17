'use client'

import type { ReactNode } from 'react'

export function ProductPageSection({
  children,
  className = '',
  sectionClassName = '',
  fullWidth = false,
}: {
  children: ReactNode
  className?: string
  sectionClassName?: string
  fullWidth?: boolean
}) {
  return (
    <section className={sectionClassName}>
      <div className={`mx-auto flex ${fullWidth ? "max-w-[1440px]" : "max-w-[1288px] px-6"} flex-col ${className}`.trim()}>
        {children}
      </div>
    </section>
  )
}
