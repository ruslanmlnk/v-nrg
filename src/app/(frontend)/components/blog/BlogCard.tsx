import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

import ArrowPillButton from '../ui/ArrowPillButton'

export type BlogCardData = {
  date: string
  href: string
  id: string
  image: StaticImageData | string
  title: string
}

export function BlogCard({ date, href, image, title }: BlogCardData) {
  return (
    <article className="group relative aspect-square min-h-[280px] overflow-hidden rounded-[20px] bg-[#D5E0E8] lg:h-[400px]">
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#222]/0 to-[#222]/70 transition-opacity duration-300 group-hover:opacity-75 group-focus-within:opacity-75"
      />

      <Link href={href} className="absolute inset-0" aria-label={title} />

      <div className="pointer-events-none absolute bottom-[29px] left-8 right-8 flex translate-y-0 flex-col items-start gap-3 text-white transition-transform duration-300 group-hover:-translate-y-[78px] group-focus-within:-translate-y-[78px]">
        <div className="text-[16px] font-bold leading-[145%]">{date}</div>
        <h2 className="max-w-[310px] text-[24px] font-medium leading-[145%]">{title}</h2>
      </div>

      <div className="absolute bottom-8 left-8 translate-y-2 opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <ArrowPillButton className="pointer-events-auto" labelClassName="font-bold leading-[145%]">
          Читати більше
        </ArrowPillButton>
      </div>
    </article>
  )
}
