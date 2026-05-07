'use client'

import { dealerPoints } from './data'

export function DealerInfoSection() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-[36px] font-medium leading-[145%] text-[#22354A] md:text-[48px]">
        Чому дилери обирають нас
      </h2>
      <div className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
        <ul className="flex flex-col gap-4">
          {dealerPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-[18px] font-medium leading-[165%] text-[#22354A]"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-[#4FACF5]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
