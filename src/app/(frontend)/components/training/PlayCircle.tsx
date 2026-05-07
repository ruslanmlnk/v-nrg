'use client'

import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import playIconAsset from '@public/icon/generated/training-play.svg'

export function PlayCircle() {
  return (
    <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-white text-[#4FACF5]">
      <IconAsset src={playIconAsset} width={44} height={44} />
    </div>
  )
}
