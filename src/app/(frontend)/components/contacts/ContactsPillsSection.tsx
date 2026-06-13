'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import mailIconAsset from '@public/icon/generated/contacts-contacts-page-mail.svg'
import phoneIconAsset from '@public/icon/generated/contacts-contacts-page-phone.svg'
import pinIconAsset from '@public/icon/generated/contacts-contacts-page-pin.svg'

export function ContactsPillsSection({
  address,
  email,
  phone,
}: {
  address: string
  email: string
  phone: string
}) {
  const phoneHref = `tel:${phone.replace(/[^\d+]/g, '')}`

  return (
    <section className="-mt-20 px-8">
      <div className="grid gap-px overflow-hidden rounded-[20px] bg-[#74C2FA] shadow-[0_20px_60px_rgba(34,53,74,0.08)] md:grid-cols-3">
        <ContactPill
          title={phone}
          subtitle="Телефон"
          href={phoneHref}
          icon={<IconAsset src={phoneIconAsset} width={24} height={24} />}
        />
        <ContactPill
          title={email}
          subtitle="Email"
          href={`mailto:${email}`}
          icon={<IconAsset src={mailIconAsset} width={24} height={24} />}
        />
        <ContactPill
          title={address}
          subtitle="Адреса"
          href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
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
