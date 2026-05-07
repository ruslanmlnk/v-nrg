'use client'

import type { ReactNode } from 'react'
import { motion } from 'motion/react'

export function CheckoutSection({
  children,
  icon,
  title,
}: {
  children: ReactNode
  icon: ReactNode
  title: string
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]"
    >
      <div className="mb-8 flex items-center gap-3">
        <span className="text-[#4FACF5]">{icon}</span>
        <h2 className="text-[20px] font-bold leading-[125%] text-[#22354A]">{title}</h2>
      </div>
      <div className="flex flex-col gap-5">{children}</div>
    </motion.section>
  )
}
