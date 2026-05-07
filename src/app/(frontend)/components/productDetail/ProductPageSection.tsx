'use client'

import type { ReactNode } from 'react'

export function ProductPageSection({
  children,
  className = '',
  sectionClassName = '',
}: {
  children: ReactNode
  className?: string
  sectionClassName?: string
}) {
  return (
    <section className={sectionClassName}>
      <div className={`mx-auto flex max-w-[1288px] flex-col px-6 ${className}`.trim()}>
        {children}
      </div>
    </section>
  )
}
