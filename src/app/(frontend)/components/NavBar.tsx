'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import logo from '@public/logo.svg'
import arrowDarkIcon from '@public/icon/header/arrow_dark.svg'
import cardHeaderIcon from '@public/icon/header/card.svg'
import cartIcon from '@public/icon/header/cart.svg'
import compareIcon from '@public/icon/header/compare.svg'
import langIcon from '@public/icon/header/global.svg'
import phoneIcon from '@public/icon/header/phone.svg'
import profileIcon from '@public/icon/header/profile.svg'

import { navLinks } from '../data/header'
import ActionIcon from '../ui/ActionIcon'
import { useCommerce } from './providers/CommerceProvider'

export default function NavBar() {
  const { cartCount, categories, compareCount, isLoggedIn, openCart } = useCommerce()
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false)

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  const openMobileCart = () => {
    closeMobileMenu()
    openCart()
  }

  return (
    <nav
      className="relative rounded-[20px] bg-white px-6 py-6 text-[#22354A] lg:mt-2 lg:py-0"
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <div className="flex items-center justify-between gap-6 lg:grid lg:min-h-[90px] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center">
        <Link href="/" className="block shrink-0 lg:order-2 lg:justify-self-center" aria-label="V-NRG Pro">
          <Image src={logo} alt="V-NRG Pro" priority className="h-auto w-[81px] lg:w-[108px]" />
        </Link>

        <ul className="hidden flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[16px] font-medium uppercase leading-[165%] lg:order-1 lg:flex lg:justify-self-start">
          {navLinks.map((link) => {
            const dropdownLinks = link.hasArrow
              ? categories.map((category) => ({
                  href: category.href,
                  label: category.title,
                }))
              : null
            const isOpen = openDropdown === link.label

            return (
              <li
                key={link.label}
                onMouseEnter={() => setOpenDropdown(dropdownLinks?.length ? link.label : null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-2 whitespace-nowrap"
                  onFocus={() => setOpenDropdown(dropdownLinks?.length ? link.label : null)}
                >
                  <span>{link.label}</span>
                  {link.hasArrow ? (
                    <Image
                      src={arrowDarkIcon}
                      alt=""
                      aria-hidden="true"
                      className={`h-[10px] w-[9.14px] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  ) : null}
                </Link>

                {dropdownLinks?.length ? (
                  <div
                    className={`absolute left-6 top-full z-50 w-[520px] pt-2 transition duration-200 ${
                      isOpen ? 'visible opacity-100' : 'invisible opacity-0'
                    }`}
                    onMouseEnter={() => setOpenDropdown(link.label)}
                  >
                    <div className="flex flex-col items-start gap-4 rounded-[20px] bg-white p-6 shadow-[0_4px_4px_rgba(0,0,0,0.10)]">
                      {dropdownLinks.map((dropdownLink) => (
                        <Link
                          key={dropdownLink.label}
                          href={dropdownLink.href}
                          className="text-[16px] font-medium uppercase leading-[165%] text-[#181818] transition-colors duration-200 hover:text-[#4FACF5]"
                        >
                          {dropdownLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </li>
            )
          })}
        </ul>

        <div className="hidden flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[16px] font-medium uppercase leading-[165%] lg:order-3 lg:flex lg:justify-self-end">
          <div className="flex items-center gap-6">
            <ActionIcon href={isLoggedIn ? '/account' : '/login'} label="Профіль" icon={profileIcon} />
            <ActionIcon href="/compare" label="Порівняння" badge={compareCount} icon={compareIcon} />
            <ActionIcon onClick={openCart} label="Кошик" badge={cartCount} icon={cartIcon} />
          </div>
          <Link href="/contacts" className="whitespace-nowrap">
            Контакти
          </Link>
        </div>

        <div className="flex items-center gap-6 lg:hidden">
          <Link href="tel:0800123456" aria-label="Телефон" className="flex h-5 w-5 items-center justify-center">
            <Image src={phoneIcon} alt="" aria-hidden="true" className="h-5 w-5" />
          </Link>

          <Link href="/catalog" aria-label="Пошук" className="flex h-5 w-5 items-center justify-center">
            <SearchIcon />
          </Link>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Закрити меню' : 'Меню'}
            aria-expanded={mobileMenuOpen}
            className="flex h-5 w-7 items-center justify-center"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          >
            {mobileMenuOpen ? <CloseIcon /> : <BurgerIcon />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden ${
          mobileMenuOpen ? 'flex' : 'hidden'
        } flex-col gap-8 pt-8 text-[16px] font-medium uppercase leading-[165%]`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <button
              type="button"
              className={`flex items-center gap-2 text-left transition-colors ${
                mobileCatalogOpen ? 'text-[#4FACF5]' : 'text-[#22354A]'
              }`}
              aria-expanded={mobileCatalogOpen}
              onClick={() => setMobileCatalogOpen((isOpen) => !isOpen)}
            >
              <span className="uppercase">{navLinks[0]?.label ?? 'Каталог'}</span>
              <Image
                src={arrowDarkIcon}
                alt=""
                aria-hidden="true"
                className={`h-[10px] w-[9.14px] transition-transform duration-200 ${
                  mobileCatalogOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {mobileCatalogOpen ? (
              <div className="flex flex-col gap-4">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={category.href}
                    className="text-[#22354A]"
                    onClick={closeMobileMenu}
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className="text-[#22354A]" onClick={closeMobileMenu}>
                {link.label}
              </Link>
            ))}
            <Link href="/contacts" className="text-[#22354A]" onClick={closeMobileMenu}>
              Контакти
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <MobileMenuLink
            href={isLoggedIn ? '/account' : '/login'}
            icon={profileIcon}
            label="Особистий кабінет"
            onClick={closeMobileMenu}
          />
          <MobileMenuLink
            badge={compareCount}
            href="/compare"
            icon={compareIcon}
            label="Списки порівнянь"
            onClick={closeMobileMenu}
          />
          <button type="button" className="flex items-center gap-2 text-left text-[#22354A]" onClick={openMobileCart}>
            <span className="relative flex h-[18px] w-[18px] items-center justify-center">
              <Image src={cartIcon} alt="" aria-hidden="true" className="h-[18px] w-[18px]" />
              <MobileBadge count={cartCount} />
            </span>
            <span>Кошик</span>
          </button>

          <div className="flex items-center gap-8">
            <MobileMenuControl icon={langIcon} label="UA" />
            <MobileMenuControl icon={cardHeaderIcon} label="₴ UAH" />
          </div>
        </div>

        <Link href="/dealer" className="font-bold uppercase text-[#4FACF5]" onClick={closeMobileMenu}>
          Стати дилером
        </Link>
      </div>
    </nav>
  )
}

function MobileMenuLink({
  badge,
  href,
  icon,
  label,
  onClick,
}: {
  badge?: number
  href: string
  icon: typeof profileIcon
  label: string
  onClick: () => void
}) {
  return (
    <Link href={href} className="flex items-center gap-2 text-[#22354A]" onClick={onClick}>
      <span className="relative flex h-[18px] w-[18px] items-center justify-center">
        <Image src={icon} alt="" aria-hidden="true" className="h-[18px] w-[18px]" />
        <MobileBadge count={badge} />
      </span>
      <span>{label}</span>
    </Link>
  )
}

function MobileMenuControl({ icon, label }: { icon: typeof langIcon; label: string }) {
  return (
    <button type="button" className="flex items-center gap-[6px] text-[#22354A]">
      <Image src={icon} alt="" aria-hidden="true" className="h-5 w-5" />
      <span>{label}</span>
      <Image src={arrowDarkIcon} alt="" aria-hidden="true" className="h-[10px] w-[9.14px]" />
    </button>
  )
}

function MobileBadge({ count }: { count?: number }) {
  if (typeof count !== 'number') {
    return null
  }

  return (
    <span className="absolute -right-[8px] -top-[8px] inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#4FACF5] px-[4px] text-[8px] font-semibold leading-none text-white">
      {count}
    </span>
  )
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M16 9A7 7 0 1 1 2 9a7 7 0 0 1 14 0Z" stroke="currentColor" strokeWidth="2" />
      <path d="m14 14 5 5" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}

function BurgerIcon() {
  return (
    <svg width="28" height="20" viewBox="0 0 28 20" fill="none" aria-hidden="true">
      <path d="M2 1.5h24M2 10h24M2 18.5h24" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M18 2 2 18M2 2l16 16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}
