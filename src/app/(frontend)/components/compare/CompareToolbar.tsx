'use client'

import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import chevronDownIconAsset from '@public/icon/generated/compare-compare-page-chevron-down.svg'

export function CompareToolbar() {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      <h2 className="text-[28px] font-medium leading-[145%] text-[#22354A]">Порівняння товарів</h2>

      <div className="flex items-center gap-6 rounded-[20px] bg-white px-8 py-6 text-[20px] font-medium leading-[145%] text-[#22354A] shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
        <span>Апарати вакуумного масажу</span>
        <IconAsset src={chevronDownIconAsset} width={16} height={16} />
      </div>
    </div>
  )
}
