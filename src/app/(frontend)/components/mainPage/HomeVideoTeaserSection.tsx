import Image from 'next/image'

import IconAsset from '@/app/(frontend)/components/ui/IconAsset'

import SectionHeading from '../shared/SectionHeading'
import { PlayCircle } from '../training/PlayCircle'

type TrainingCard = {
  description: string
  icon: string
  title: string
}

export default function HomeVideoTeaserSection({
  cards,
  poster,
  subtitle,
  title,
  video,
}: {
  cards: TrainingCard[]
  poster: string
  subtitle: string
  title: string
  video: string
}) {
  return (
    <section className="pt-12 md:pt-[100px]">
      <div className="mx-auto flex max-w-[1288px] flex-col items-center gap-6 px-6 md:gap-12">
        <SectionHeading align="center" eyebrow={subtitle} title={title} />
        <div className="flex w-full flex-col gap-5">
          <a href={video} className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-[20px] bg-[#1D2734] md:min-h-[614px]">
            <Image src={poster} alt={title} fill className="object-cover" sizes="(min-width: 1024px) 1240px, 100vw" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10"><PlayCircle /></div>
          </a>
          <div className="grid gap-5 lg:grid-cols-3">
            {cards.map((card) => (
              <article key={card.title} className="flex flex-col items-start gap-6 rounded-[20px] bg-white p-8">
                <IconAsset src={card.icon} width={32} height={32} />
                <div className="flex flex-col gap-4">
                  <h3 className="text-[20px] font-medium leading-[145%] text-[#22354A] md:text-[24px]">{card.title}</h3>
                  <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
