'use client'

import Image from 'next/image'

import arrowIcon from '@public/icon/header/arrow.svg'
import cardIcon from '@public/icon/header/card.svg'
import langIcon from '@public/icon/header/global.svg'
import phoneIcon from '@public/icon/header/phone.svg'

import NavBar from './NavBar'
import { useCommerce } from './providers/CommerceProvider'

export default function Header() {
  const { openDealerModal } = useCommerce()

  return (
    <header className="mx-auto mt-5 max-w-[1288px] px-6 text-white">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-[20px] bg-[#22354A] px-6 py-[11.8px] leading-[26px]">
        <div className="flex flex-wrap items-center gap-[25px]">
          <div className="flex items-center gap-[8px]">
            <Image src={phoneIcon} alt="Phone icon" width={16} height={16} />
            <div className="font-medium">0-800-123-456</div>
          </div>
          <div className="uppercase text-[#D5E0E8]">Безкоштовна доставка від 5000 грн</div>
        </div>

        <div className="flex flex-wrap items-center gap-[25px]">
          <div className="flex cursor-pointer items-center">
            <Image src={langIcon} alt="Language icon" />
            <div className="ml-[6px] mr-[8px]">UA</div>
            <Image src={arrowIcon} alt="" aria-hidden="true" className="h-[10px] w-[9.14px]" />
          </div>

          <div className="flex cursor-pointer items-center">
            <Image src={cardIcon} alt="Currency icon" />
            <div className="ml-[6px] mr-[8px]">₴ UAH</div>
            <Image src={arrowIcon} alt="" aria-hidden="true" className="h-[10px] w-[9.14px]" />
          </div>

          <button
            type="button"
            onClick={openDealerModal}
            className="font-bold uppercase text-[#4FACF5]"
          >
            Стати дилером
          </button>
        </div>
      </div>

      <NavBar />
    </header>
  )
}
