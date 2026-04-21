'use client'

import type { FormEvent, ReactNode } from 'react'

import Link from 'next/link'
import { motion } from 'motion/react'

import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import arrowIconAsset from '@public/icon/generated/contacts-contacts-page-arrow.svg'
import facebookIconAsset from '@public/icon/generated/contacts-contacts-page-facebook.svg'
import instagramIconAsset from '@public/icon/generated/contacts-contacts-page-instagram.svg'
import mailIconAsset from '@public/icon/generated/contacts-contacts-page-mail.svg'
import phoneIconAsset from '@public/icon/generated/contacts-contacts-page-phone.svg'
import pinIconAsset from '@public/icon/generated/contacts-contacts-page-pin.svg'
import telegramIconAsset from '@public/icon/generated/contacts-contacts-page-telegram.svg'
import whatsappIconAsset from '@public/icon/generated/contacts-contacts-page-whatsapp.svg'

export const contactFieldClasses =
  'w-full rounded-[16px] bg-white px-5 text-[16px] font-medium leading-[165%] text-[#22354A] outline-none placeholder:text-[#B7CAD1]'

export function ContactsHeroSection() {
  return (
    <section className="flex min-h-[268px] flex-col items-center justify-center rounded-[20px] bg-[#22354A] px-6 py-14 text-center text-white">
      <div className="flex max-w-[760px] flex-col items-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-2 text-[16px] font-bold uppercase leading-[145%]">
          <Link href="/">Головна</Link>
          <span>/</span>
          <span className="text-[#4FACF5]">Контакти</span>
        </div>
        <h1 className="text-[36px] font-medium leading-[145%] md:text-[48px]">
          Зв'яжіться з нами
        </h1>
        <p className="text-[16px] font-medium leading-[165%] text-[#D5E0E8] md:text-[18px]">
          Маєте запитання щодо обладнання або співпраці? Наша команда готова допомогти
        </p>
      </div>
    </section>
  )
}

export function ContactsPillsSection() {
  return (
    <section className="-mt-20 px-8">
      <div className="grid gap-px overflow-hidden rounded-[20px] bg-[#74C2FA] shadow-[0_20px_60px_rgba(34,53,74,0.08)] md:grid-cols-3">
        <ContactPill
          title="+38 (097) 546-88-20"
          subtitle="Телефон"
          href="tel:+380975468820"
          icon={<IconAsset src={phoneIconAsset} width={24} height={24} />}
        />
        <ContactPill
          title="0870758@gmail.com"
          subtitle="Email"
          href="mailto:0870758@gmail.com"
          icon={<IconAsset src={mailIconAsset} width={24} height={24} />}
        />
        <ContactPill
          title="м. Бровари, вул. Підприємницька, 22"
          subtitle="Адреса"
          href="https://maps.google.com/?q=Бровари%20Підприємницька%2022"
          icon={<IconAsset src={pinIconAsset} width={24} height={24} />}
        />
      </div>
    </section>
  )
}

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
          Зв'яжіться з нами
        </h2>
        <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
          Щоб отримати консультацію, дізнатися більше про обладнання або домовитися про
          демонстрацію, залиште заявку онлайн або зв'яжіться з нами у робочий час
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

export function ContactField({ children, label }: { children: ReactNode; label: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[16px] font-medium leading-[165%] text-white">{label}</span>
      {children}
    </label>
  )
}

function ContactPill({
  href,
  icon,
  subtitle,
  title,
}: {
  href: string
  icon: ReactNode
  subtitle: string
  title: string
}) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center gap-3 bg-[#4FACF5] px-8 py-8 text-center text-white"
    >
      <span className="text-white">{icon}</span>
      <span className="text-[16px] font-medium leading-[165%] text-[#D5E0E8]">{subtitle}</span>
      <span className="text-[18px] font-medium leading-[165%]">{title}</span>
    </Link>
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
