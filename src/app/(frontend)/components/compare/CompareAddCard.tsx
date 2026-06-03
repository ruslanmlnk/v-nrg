'use client'

import Link from 'next/link'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import plusIconAsset from '@public/icon/generated/compare-compare-page-plus.svg'

export function CompareAddCard() {
  return (
    <Link
      href="/aparati-vakuumnogo-masazhu"
      className="flex min-h-[460px] flex-col items-center justify-center gap-6 rounded-[20px] border border-dashed border-[#D5E0E8] bg-white px-8 text-center shadow-[0_20px_60px_rgba(34,53,74,0.04)] xl:flex-1 xl:self-stretch"
    >
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(79,172,245,0.1)] text-[#4FACF5]">
        <IconAsset src={plusIconAsset} width={40} height={40} />
      </span>
      <span className="text-[18px] font-bold leading-[145%] text-[#4FACF5]">Додати ще модель</span>
    </Link>
  )
}
