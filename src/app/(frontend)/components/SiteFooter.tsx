import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@public/logo.svg'

const catalogLinks = [
  { href: '/catalog/aparaty-vakuumnoho-masazhu', label: 'Апарати вакуумного масажу' },
  { href: '/catalog', label: 'Апарати фізіотерапії' },
  { href: '#', label: 'Комплектуючі (маніпули / насадки, фільтри, шланги)' },
  { href: '#', label: 'Витратні матеріали' },
  { href: '#', label: 'Аксесуари' },
  { href: '#', label: 'Стільці для масажу' },
]

const infoLinks = [
  { href: '/about', label: 'Про V-NRG' },
  { href: '#', label: 'Доставка та оплата' },
  { href: '#', label: 'Гарантія та сервіс' },
  { href: '/training', label: 'Навчання' },
  { href: '/review', label: 'Відгуки' },
  { href: '#', label: 'Блог' },
]

const legalLinks = [
  { href: '#', label: 'Політика конфіденційності' },
  { href: '#', label: 'Умови користування' },
  { href: '#', label: 'Публічна оферта' },
]

export default function SiteFooter() {
  return (
    <footer className="rounded-t-[48px] bg-[#22354A] px-6 pb-[48px] pt-[100px] text-white">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-14">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="flex max-w-[380px] flex-col gap-6">
            <Image src={logo} alt="V-NRG" className="h-auto w-[108px]" />

            <p className="text-[16px] font-normal leading-[165%] text-[#D5E0E8]">
              Професійне обладнання для вакуумного масажу. Більше 20 країн довіряють нашій якості
            </p>

            <div className="flex flex-col gap-4">
              <span className="text-[18px] font-bold leading-[165%] text-white">Ми в соцмережах:</span>

              <div className="flex items-center gap-3">
                <FooterSocialLink href="#" label="Instagram">
                  <InstagramIcon />
                </FooterSocialLink>
                <FooterSocialLink href="#" label="Facebook">
                  <FacebookIcon />
                </FooterSocialLink>
              </div>
            </div>
          </div>

          <FooterColumn title="Каталог" links={catalogLinks} />
          <FooterColumn title="Інформація" links={infoLinks} />

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-[24px] font-medium leading-[145%] text-white">Зв&apos;яжіться з нами</h2>

              <div className="flex flex-col gap-4 text-[16px] font-medium leading-[165%] text-white">
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="tel:+380975468820">+38 (097) 546-88-20</Link>

                  <div className="flex items-center gap-3">
                    <FooterSocialLink href="#" label="Telegram">
                      <TelegramIcon />
                    </FooterSocialLink>
                    <FooterSocialLink href="#" label="WhatsApp">
                      <WhatsappIcon />
                    </FooterSocialLink>
                  </div>
                </div>

                <Link href="mailto:0870758@gmail.com">0870758@gmail.com</Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-[24px] font-medium leading-[145%] text-white">Адреса</h2>
              <p className="text-[16px] font-medium leading-[165%] text-white">м. Бровари, вул. Підприємницька, 22</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/20 pt-10 text-[16px] font-medium leading-[165%] text-white lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 V-NRG. Всі права захищені.</p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
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

function FooterColumn({
  links,
  title,
}: {
  links: Array<{ href: string; label: string }>
  title: string
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[24px] font-medium leading-[145%] text-white">{title}</h2>

      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <Link key={link.label} href={link.href} className="text-[16px] font-medium leading-[165%] text-white">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
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
      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4FACF5] transition-transform duration-200 hover:scale-105"
    >
      {children}
    </Link>
  )
}

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" width="14" height="14" rx="4" stroke="white" strokeWidth="1.4" />
      <circle cx="8.5" cy="8.5" r="3.2" stroke="white" strokeWidth="1.4" />
      <circle cx="12.4" cy="4.6" r="0.9" fill="white" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.2 15.8V9.5H11.3L11.6 7.1H9.2V5.6C9.2 4.9 9.4 4.4 10.4 4.4H11.7V2.2C11.1 2.1 10.5 2.1 9.9 2.1C7.9 2.1 6.7 3.3 6.7 5.5V7.1H4.7V9.5H6.7V15.8H9.2Z" fill="white" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.8 2.1L2.3 6.4C1.7 6.6 1.7 7.5 2.3 7.7L5.5 8.9L12.5 4.6L7.2 9.3L8.2 13.5C8.3 13.9 8.8 14.1 9.1 13.8L10.9 12.1L13.8 14.2C14.2 14.5 14.8 14.3 14.9 13.7L16.5 2.9C16.6 2.3 15.4 1.9 14.8 2.1Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WhatsappIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 2.3C5.2 2.3 2.6 4.9 2.6 8.1C2.6 9.3 3 10.4 3.7 11.4L3 14.4L6.1 13.6C6.9 14.1 7.7 14.3 8.5 14.3C11.8 14.3 14.4 11.7 14.4 8.5C14.4 5.3 11.8 2.3 8.5 2.3Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.6 6.2C6.8 5.9 7 5.9 7.2 5.9C7.4 5.9 7.6 6 7.7 6.3L8.2 7.4C8.3 7.6 8.2 7.8 8.1 7.9L7.7 8.3C8.1 9 8.7 9.6 9.4 10L9.8 9.6C9.9 9.5 10.1 9.4 10.3 9.5L11.4 10C11.7 10.1 11.8 10.3 11.8 10.5C11.8 10.7 11.7 10.9 11.4 11.1C11.1 11.3 10.8 11.4 10.5 11.4C9.1 11.3 6.9 9.1 6.7 7.7C6.6 7.3 6.6 6.8 6.6 6.2Z" fill="white" />
    </svg>
  )
}
