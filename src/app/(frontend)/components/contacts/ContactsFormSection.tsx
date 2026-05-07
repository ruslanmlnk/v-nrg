'use client'

import type { FormEvent, ReactNode } from 'react'
import { motion } from 'motion/react'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import arrowIconAsset from '@public/icon/generated/contacts-contacts-page-arrow.svg'

export function ContactsFormSection({
  children,
  onSubmit,
}: {
  children: ReactNode
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: 0.08, duration: 0.35 }}
      className="rounded-[20px] bg-[#22354A] p-8 text-white shadow-[0_20px_60px_rgba(34,53,74,0.08)]"
    >
      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <h2 className="text-[32px] font-medium leading-[145%]">Написати нам</h2>
        {children}
        <button
          type="submit"
          className="relative mt-2 flex h-[50px] items-center justify-center rounded-full bg-white pl-6 pr-[70px] text-[#22354A]"
        >
          <span className="text-[18px] font-medium leading-[145%]">Надіслати</span>
          <span className="absolute right-[3px] top-1/2 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-[#4FACF5] text-white">
            <IconAsset src={arrowIconAsset} width={18} height={18} />
          </span>
        </button>
      </form>
    </motion.div>
  )
}
