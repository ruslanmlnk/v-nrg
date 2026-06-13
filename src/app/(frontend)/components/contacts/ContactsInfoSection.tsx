'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

import IconAsset from '@/app/(frontend)/components/ui/IconAsset'

export type ContactSocialNetwork = {
  icon: string
  label: string
  url: string
}

export function ContactsInfoSection({
  description,
  socialNetworks,
  title,
}: {
  description: string
  socialNetworks: ContactSocialNetwork[]
  title: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col justify-center gap-6"
    >
      <div className="flex flex-col gap-4 border-b border-[#D5E0E8] pb-6 md:gap-6">
        <h2 className="text-[26px] font-medium leading-[125%] text-[#22354A] md:text-[48px]">
          {title}
        </h2>
        <p className="text-[16px] font-medium leading-[165%] text-[#22354A] md:text-[18px]">
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-[20px] font-bold leading-[125%] text-[#22354A] md:text-[24px]">
          Ми в соцмережах:
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {socialNetworks.map((social) => (
            <Link
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4FACF5] text-white"
              href={social.url}
              key={`${social.label}-${social.url}`}
            >
              <IconAsset src={social.icon} width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
