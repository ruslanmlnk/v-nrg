'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import arrowIcon from '@public/icon/header/arrow.svg'
import cardIcon from '@public/icon/header/card.svg'
import langIcon from '@public/icon/header/global.svg'
import phoneIcon from '@public/icon/header/phone.svg'

import NavBar from './NavBar'
import { useSitePreferences } from './providers/SitePreferencesProvider'
import { translate } from '../lib/siteTranslations'

export default function Header() {
  const { currencies, currency, locale, setCurrency, setLocale } = useSitePreferences()

  return (
    <header className="relative z-50 mx-auto mt-6 md:mt-5 max-w-[1288px] px-6 text-white">
      <div className="hidden flex-wrap items-center justify-between gap-4 rounded-[20px] bg-[#22354A] px-6 py-[11.8px] leading-[26px] lg:flex">
        <div className="flex flex-wrap items-center gap-[25px]">
          <div className="flex items-center gap-[8px]">
            <Image src={phoneIcon} alt="" aria-hidden="true" width={16} height={16} />
            <div className="font-medium">0-800-123-456</div>
          </div>
          <div className="uppercase text-[#D5E0E8]">{translate(locale, 'delivery')}</div>
        </div>

        <div className="flex flex-wrap items-center gap-[25px]">
          <HeaderDropdown
            ariaLabel={translate(locale, 'language')}
            icon={langIcon}
            label={locale.toUpperCase()}
            menuClassName="w-[100px]"
            options={[
              { active: locale === 'uk', label: 'UA', onSelect: () => setLocale('uk') },
              { active: locale === 'en', label: 'EN', onSelect: () => setLocale('en') },
            ]}
          />

          <HeaderDropdown
            ariaLabel="Валюта"
            icon={cardIcon}
            label={`${currency.symbol} ${currency.code}`}
            menuClassName="w-[122px]"
            options={currencies.map((item) => ({
              active: item.code === currency.code,
              label: `${item.symbol} ${item.code}`,
              onSelect: () => setCurrency(item.code),
            }))}
          />

          <Link href="/dealer" className="font-bold uppercase text-[#4FACF5]">
            {translate(locale, 'dealer')}
          </Link>
        </div>
      </div>

      <NavBar />
    </header>
  )
}

function HeaderDropdown({
  ariaLabel,
  icon,
  label,
  menuClassName,
  options,
}: {
  ariaLabel: string
  icon: StaticImageData
  label: string
  menuClassName: string
  options: Array<{ active?: boolean; label: string; onSelect: () => void }>
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        className="flex cursor-pointer items-center"
        onClick={() => setIsOpen((open) => !open)}
      >
        <Image src={icon} alt="" aria-hidden="true" />
        <span className="ml-[6px] mr-[8px]">{label}</span>
        <Image
          src={arrowIcon}
          alt=""
          aria-hidden="true"
          className={`h-[10px] w-[9.14px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`absolute left-0 top-full z-[60] pt-2 transition duration-200 ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className={`flex flex-col items-start gap-4 rounded-[20px] bg-white p-6 shadow-[0_4px_4px_rgba(0,0,0,0.10)] ${menuClassName}`}
        >
          {options.map((option) => (
            <button
              key={option.label}
              type="button"
              onClick={() => {
                option.onSelect()
                setIsOpen(false)
              }}
              className={`whitespace-nowrap text-[16px] font-medium leading-[165%] transition-colors duration-200 hover:text-[#4FACF5] ${option.active ? 'text-[#4FACF5]' : 'text-[#181818]'
                }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
