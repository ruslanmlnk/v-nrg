'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

import arrowIcon from '@public/icon/header/arrow.svg'
import cardIcon from '@public/icon/header/card.svg'
import langIcon from '@public/icon/header/global.svg'
import phoneIcon from '@public/icon/header/phone.svg'

import NavBar from './NavBar'

const languageOptions = [
  { active: true, label: 'UA' },
  { label: 'RU' },
  { label: 'DE' },
  { label: 'PL' },
]

const currencyOptions = [
  { active: true, label: '₴ UAH' },
  { label: '$ USD' },
  { label: '€ EUR' },
]

export default function Header() {
  return (
    <header className="relative z-50 mx-auto mt-6 md:mt-5 max-w-[1288px] px-6 text-white">
      <div className="hidden flex-wrap items-center justify-between gap-4 rounded-[20px] bg-[#22354A] px-6 py-[11.8px] leading-[26px] lg:flex">
        <div className="flex flex-wrap items-center gap-[25px]">
          <div className="flex items-center gap-[8px]">
            <Image src={phoneIcon} alt="" aria-hidden="true" width={16} height={16} />
            <div className="font-medium">0-800-123-456</div>
          </div>
          <div className="uppercase text-[#D5E0E8]">Безкоштовна доставка від 5000 грн</div>
        </div>

        <div className="flex flex-wrap items-center gap-[25px]">
          <HeaderDropdown
            ariaLabel="Мова"
            icon={langIcon}
            label="UA"
            menuClassName="w-[100px]"
            options={languageOptions}
          />

          <HeaderDropdown
            ariaLabel="Валюта"
            icon={cardIcon}
            label="₴ UAH"
            menuClassName="w-[122px]"
            options={currencyOptions}
          />

          <Link href="/dealer" className="font-bold uppercase text-[#4FACF5]">
            Стати дилером
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
  options: Array<{ active?: boolean; label: string }>
}) {
  return (
    <div className="group relative">
      <button type="button" aria-label={ariaLabel} className="flex cursor-pointer items-center">
        <Image src={icon} alt="" aria-hidden="true" />
        <span className="ml-[6px] mr-[8px]">{label}</span>
        <Image
          src={arrowIcon}
          alt=""
          aria-hidden="true"
          className="h-[10px] w-[9.14px] transition-transform duration-200 group-hover:rotate-180"
        />
      </button>

      <div className="invisible absolute left-0 top-full z-[60] pt-2 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div
          className={`flex flex-col items-start gap-4 rounded-[20px] bg-white p-6 shadow-[0_4px_4px_rgba(0,0,0,0.10)] ${menuClassName}`}
        >
          {options.map((option) => (
            <button
              key={option.label}
              type="button"
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
