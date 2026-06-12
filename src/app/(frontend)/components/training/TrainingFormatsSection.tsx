'use client'

import SectionHeading from '../shared/SectionHeading'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
type TrainingFormat = {
  description: string
  icon: string
  title: string
}

export function TrainingFormatsSection({
  formats,
  subtitle,
  title,
}: {
  formats: TrainingFormat[]
  subtitle: string
  title: string
}) {
  return (
    <section className="flex flex-col items-center gap-12">
      <SectionHeading align="center" eyebrow={subtitle} title={title} />

      <div className="grid w-full gap-5 lg:grid-cols-3">
        {formats.map((format) => (
          <article
            key={format.title}
            className="flex h-full flex-col gap-6 rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]"
          >
            <IconAsset src={format.icon} width={32} height={32} />

            <div className="flex flex-col gap-4">
              <h2 className="text-[24px] font-medium leading-[145%] text-[#22354A]">
                {format.title}
              </h2>
              <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                {format.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
