'use client'

import type { FormEvent, ReactNode } from 'react'
import { motion } from 'motion/react'

export function ContactsFormSection({
  children,
  isSubmitting = false,
  onSubmit,
  title,
}: {
  children: ReactNode
  isSubmitting?: boolean
  onSubmit: (event: FormEvent<HTMLFormElement>) => void | Promise<void>
  title: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: 0.08, duration: 0.35 }}
      className="rounded-[24px] bg-[#22354A] p-8 text-white shadow-[0_20px_60px_rgba(34,53,74,0.08)]"
    >
      <form className="flex flex-col gap-6" onSubmit={onSubmit}>
        <h2 className="text-[24px] font-medium leading-[145%]">{title}</h2>
        {children}
        <button
          disabled={isSubmitting}
          type="submit"
          className="flex h-[54px] w-full items-center justify-center rounded-full bg-white px-6 text-[#22354A] disabled:opacity-60 md:h-auto md:w-auto md:self-start md:py-3"
        >
          <span className="text-[16px] font-bold leading-[145%] md:text-[18px] md:font-medium md:leading-[165%]">
            {isSubmitting ? 'Надсилання...' : 'Надіслати'}
          </span>
        </button>
      </form>
    </motion.div>
  )
}
