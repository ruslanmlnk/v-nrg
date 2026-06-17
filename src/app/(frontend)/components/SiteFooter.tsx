import type { ReactNode } from 'react'

import configPromise from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import type { Media, SocialNetwork } from '@/payload-types'
import { getSiteLocale } from '../lib/getSiteLocale'
import footerLogoIconAsset from '@public/icon/generated/components-site-footer-footer-logo.svg'
import instagramIconAsset from '@public/icon/generated/components-site-footer-instagram.svg'
import facebookIconAsset from '@public/icon/generated/components-site-footer-facebook.svg'
import telegramIconAsset from '@public/icon/generated/components-site-footer-telegram.svg'
import whatsappIconAsset from '@public/icon/generated/contacts-contacts-page-whatsapp.svg'

const catalogLinks = [
  { href: '/aparati-vakuumnogo-masazhu', label: 'Апарати вакуумного масажу' },
  { href: '/catalog', label: 'Апарати фізіотерапії' },
  { href: '/info?topic=components', label: 'Комплектуючі (маніпули / насадки, фільтри, шланги)' },
  { href: '/info?topic=materials', label: 'Витратні матеріали' },
  { href: '/info?topic=accessories', label: 'Аксесуари' },
  { href: '/info?topic=chairs', label: 'Стільці для масажу' },
]

const infoLinks = [
  { href: '/about', label: 'Про V-NRG' },
  { href: '/deliverypayment', label: 'Доставка та оплата' },
  { href: '/warranty', label: 'Гарантія та сервіс' },
  { href: '/training', label: 'Навчання' },
  { href: '/review', label: 'Відгуки' },
  { href: '/blog', label: 'Блог' },
]

const legalLinks = [
  { href: '/privacy', label: 'Політика конфіденційності' },
  { href: '/terms', label: 'Умови користування' },
  { href: '/offer', label: 'Публічна оферта' },
]

const fallbackFooterSocialNetworks: FooterSocialNetwork[] = [
  {
    icon: instagramIconAsset,
    label: 'Instagram',
    url: 'https://instagram.com/',
  },
  {
    icon: facebookIconAsset,
    label: 'Facebook',
    url: 'https://facebook.com/',
  },
]

const fallbackContactSocialNetworks: FooterSocialNetwork[] = [
  {
    icon: telegramIconAsset,
    label: 'Telegram',
    url: 'https://t.me/',
  },
  {
    icon: whatsappIconAsset,
    label: 'WhatsApp',
    url: 'https://wa.me/380975468820',
  },
]

type FooterSocialNetwork = {
  icon: string | typeof instagramIconAsset
  label: string
  url: string
}

export default async function SiteFooter() {
  const payload = await getPayload({ config: configPromise })
  const locale = await getSiteLocale()
  const [siteSettings, contacts] = await Promise.all([
    payload.findGlobal({ slug: 'site-settings', depth: 2, locale }),
    payload.findGlobal({ slug: 'contacts', depth: 0, locale }),
  ])
  const footerSocialNetworks = mapSocialNetworks(siteSettings.footer?.socialNetworks)
  const contactSocialNetworks = mapSocialNetworks(siteSettings.footer?.contactSocialNetworks)
  const phoneHref = `tel:${contacts.phone.replace(/[^\d+]/g, '')}`

  return (
    <footer className="flex flex-col items-center rounded-t-[32px] bg-[#22354A] px-6 pb-6 pt-12 text-white lg:rounded-t-[48px] lg:px-[clamp(64px,6.944vw,100px)] lg:pb-12 lg:pt-[100px]">
      <div className="flex w-full max-w-[1270px] flex-col gap-8 lg:w-[min(1270px,calc(100vw-48px))] lg:gap-[52px]">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:justify-between">
          <div className="flex w-full max-w-[373px] flex-col gap-6">
            <div className="flex flex-col items-start gap-4">
              <Image src={footerLogoIconAsset} alt="V-NRG" width={108} height={48} />

              <p className="text-[16px] font-normal leading-[165%] text-white">
                Професійне обладнання для вакуумного масажу. Більше 20 країн довіряють нашій якості
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[18px] font-bold leading-[165%] text-white">
                Ми в соцмережах:
              </span>

              <div className="flex items-center gap-3">
                {(footerSocialNetworks.length
                  ? footerSocialNetworks
                  : fallbackFooterSocialNetworks
                ).map((social) => (
                  <FooterSocialLink href={social.url} key={social.label} label={social.label}>
                    <IconAsset src={social.icon} width={17} height={17} />
                  </FooterSocialLink>
                ))}
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-6 lg:w-auto lg:flex-row lg:gap-[90px]">
            <FooterColumn className="w-[274px] lg:w-[232px]" links={catalogLinks} title="Каталог" />
            <FooterColumn compactOnMobile links={infoLinks} title="Інформація" />

            <div className="flex flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-4">
                <FooterHeading>Зв’яжіться з нами</FooterHeading>

                <div className="flex flex-col items-start gap-4 text-[16px] font-medium leading-[165%] text-white">
                  <div className="flex items-center gap-4">
                    <Link href={phoneHref}>{contacts.phone}</Link>

                    <div className="flex items-center gap-3">
                      {(contactSocialNetworks.length
                        ? contactSocialNetworks
                        : fallbackContactSocialNetworks
                      ).map((social) => (
                        <FooterSocialLink href={social.url} key={social.label} label={social.label}>
                          <IconAsset src={social.icon} width={17} height={17} />
                        </FooterSocialLink>
                      ))}
                    </div>
                  </div>

                  <Link href={`mailto:${contacts.email}`}>{contacts.email}</Link>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4">
                <FooterHeading>Адреса</FooterHeading>
                <p className="text-[16px] font-medium leading-[165%] text-white">
                  {contacts.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 border-t border-white/20 pt-8 text-center text-[16px] font-medium leading-[165%] text-white lg:flex-row lg:justify-between lg:gap-8 lg:pt-10 lg:text-left">
          <p>© 2026 V-NRG. Всі права захищені.</p>

          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-8">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function getMedia(value: number | Media | null | undefined) {
  return typeof value === 'object' && value ? value : null
}

function getSocialNetwork(value: number | SocialNetwork | null | undefined) {
  return typeof value === 'object' && value ? value : null
}

function mapSocialNetworks(values: (number | SocialNetwork)[] | null | undefined) {
  return (values ?? []).flatMap((value) => {
    const social = getSocialNetwork(value)
    const icon = getMedia(social?.icon)

    return social && icon?.url ? [{ icon: icon.url, label: social.label, url: social.url }] : []
  })
}

function FooterColumn({
  className = '',
  compactOnMobile = false,
  links,
  title,
}: {
  className?: string
  compactOnMobile?: boolean
  links: Array<{ href: string; label: string }>
  title: string
}) {
  return (
    <div className={`flex flex-col items-start gap-4 ${className}`}>
      <FooterHeading>{title}</FooterHeading>

      <div className="flex flex-col items-start gap-4">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`text-[16px] font-medium text-white ${
              compactOnMobile ? 'leading-[21.33px] lg:leading-[165%]' : 'leading-[165%]'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[20px] font-medium leading-[145%] text-white lg:text-[24px]">{children}</h2>
  )
}

function FooterSocialLink({
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
      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4FACF5] text-white transition-opacity duration-200 hover:opacity-80"
    >
      {children}
    </Link>
  )
}
