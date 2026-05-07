'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'

export function CircleAction({
  children,
  href,
  label,
}: {
  children: ReactNode
  href: string
  label: string
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#4FACF5]"
    >
      {children}
    </Link>
  )
}
