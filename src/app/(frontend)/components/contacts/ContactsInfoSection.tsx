'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import facebookIconAsset from '@public/icon/generated/contacts-contacts-page-facebook.svg'
import instagramIconAsset from '@public/icon/generated/contacts-contacts-page-instagram.svg'
import telegramIconAsset from '@public/icon/generated/contacts-contacts-page-telegram.svg'
import whatsappIconAsset from '@public/icon/generated/contacts-contacts-page-whatsapp.svg'

export function ContactsInfoSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col gap-8 px-2 pt-4"
    >
      <div className="flex max-w-[520px] flex-col gap-4">
        <h2 className="text-[36px] font-medium leading-[145%] text-[#22354A] md:text-[48px]">
          Зв&apos;яжіться з нами
        </h2>
        <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
          Щоб отримати консультацію, дізнатися більше про обладнання або домовитися про
          демонстрацію, залиште заявку онлайн або зв&apos;яжіться з нами у робочий час
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="text-[28px] font-medium leading-[145%] text-[#22354A]">
          Ми в соцмережах:
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <SocialCircle href="https://t.me/" label="Telegram">
            <IconAsset src={telegramIconAsset} width={18} height={18} />
          </SocialCircle>
          <SocialCircle href="https://instagram.com/" label="Instagram">
            <IconAsset src={instagramIconAsset} width={18} height={18} />
          </SocialCircle>
          <SocialCircle href="https://facebook.com/" label="Facebook">
            <IconAsset src={facebookIconAsset} width={18} height={18} />
          </SocialCircle>
          <SocialCircle href="https://wa.me/380975468820" label="WhatsApp">
            <IconAsset src={whatsappIconAsset} width={18} height={18} />
          </SocialCircle>
        </div>
      </div>
    </motion.div>
  )
}

function SocialCircle({
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
      className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#4FACF5] text-white"
    >
      {children}
    </Link>
  )
}
