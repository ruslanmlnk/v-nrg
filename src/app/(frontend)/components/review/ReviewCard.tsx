'use client'

import Image from 'next/image'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import instagramIconAsset from '@public/icon/generated/review-review-page-instagram.svg'
import phoneIconAsset from '@public/icon/generated/review-review-page-phone.svg'
import { reviews } from './data'

import { CircleAction } from './CircleAction'

export function ReviewCard({
  author,
  image,
  quote,
}: {
  author: string
  image: (typeof reviews)[number]['image']
  quote: string
}) {
  return (
    <article className="h-full w-full rounded-[20px] bg-white p-8 text-[#22354A] shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
      <div className="grid gap-8 md:grid-cols-[194px_minmax(0,1fr)]">
        <Image
          src={image}
          alt={author}
          className="h-full min-h-[180px] w-full rounded-[20px] object-cover"
        />

        <div className="flex flex-col justify-between gap-8">
          <p className="text-[18px] font-medium leading-[145%] text-[#22354A] md:text-[20px]">
            &ldquo;{quote}&rdquo;
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <div className="border-r border-[#D5E0E8] pr-6">
              <div className="text-[24px] font-medium leading-[145%] text-[#22354A]">{author}</div>
            </div>

            <div className="flex items-center gap-2">
              <CircleAction href="https://www.instagram.com/" label="Instagram">
                <IconAsset src={instagramIconAsset} width={20} height={20} />
              </CircleAction>
              <CircleAction href="tel:+380975468820" label="Телефон">
                <IconAsset src={phoneIconAsset} width={20} height={20} />
              </CircleAction>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
