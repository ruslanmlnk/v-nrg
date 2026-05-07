'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import mailIconAsset from '@public/icon/generated/contacts-contacts-page-mail.svg'
import phoneIconAsset from '@public/icon/generated/contacts-contacts-page-phone.svg'
import pinIconAsset from '@public/icon/generated/contacts-contacts-page-pin.svg'

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
