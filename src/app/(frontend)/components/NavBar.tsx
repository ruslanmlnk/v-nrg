'use client'

import Image from 'next/image'
import Link from 'next/link'

import logo from '@public/logo.svg'
import arrowDarkIcon from '@public/icon/header/arrow_dark.svg'
import cartIcon from '@public/icon/header/cart.svg'
import compareIcon from '@public/icon/header/compare.svg'
import phoneIcon from '@public/icon/header/phone.svg'
import profileIcon from '@public/icon/header/profile.svg'

import { navLinks } from '../data/header'
import ActionIcon from '../ui/ActionIcon'
import { useCommerce } from './providers/CommerceProvider'

export default function NavBar() {
  const { cartCount, compareCount, isLoggedIn, openCart } = useCommerce()

  return (
    <nav className="rounded-[20px] bg-white px-6 py-6 text-[#22354A] lg:mt-2 lg:py-0">
      <div className="flex items-center justify-between gap-6 lg:grid lg:min-h-[90px] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center">
        <Link href="/" className="block shrink-0 lg:order-2 lg:justify-self-center" aria-label="V-NRG Pro">
          <Image src={logo} alt="V-NRG Pro" priority className="h-auto w-[81px] lg:w-[108px]" />
        </Link>

        <ul className="hidden flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[16px] font-medium uppercase leading-[165%] lg:order-1 lg:flex lg:justify-self-start">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="flex items-center gap-2 whitespace-nowrap">
                <span>{link.label}</span>
                {link.hasArrow ? (
                  <Image src={arrowDarkIcon} alt="" aria-hidden="true" className="h-[10px] w-[9.14px]" />
                ) : null}
              </Link>
            </li>
          ))}
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

          <button type="button" aria-label="Меню" className="flex h-5 w-7 items-center justify-center">
            <BurgerIcon />
          </button>
        </div>
      </div>
    </nav>
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
