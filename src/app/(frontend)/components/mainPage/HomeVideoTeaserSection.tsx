import Image, { type StaticImageData } from 'next/image'

import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import videoTeaserImage from '@public/assets/training/home-video-teaser.jpg'
import attachmentsIconAsset from '@public/icon/generated/training-training-page-attachments.svg'
import settingsIconAsset from '@public/icon/generated/training-training-page-settings.svg'
import videoInstructionsIconAsset from '@public/icon/generated/training-training-page-video-instructions.svg'

import SectionHeading from '../shared/SectionHeading'
import { PlayCircle } from '../training/PlayCircle'

type TeaserBenefit = {
  description: string
  icon: StaticImageData
  title: string
}

const benefits: TeaserBenefit[] = [
  {
    description: 'Матеріали з демонстрацією роботи апарата та основних процедур',
    icon: videoInstructionsIconAsset,
    title: 'Відео-інструкції',
  },
  {
    description: 'Пояснення щодо підключення, підготовки до роботи та режимів',
    icon: settingsIconAsset,
    title: 'Налаштування',
  },
  {
    description: 'Підбір маніпул та поради щодо роботи з різними зонами тіла',
    icon: attachmentsIconAsset,
    title: 'Рекомендації по насадках',
  },
]

export default function HomeVideoTeaserSection() {
  return (
    <section className="pt-12 md:pt-[100px]">
      <div className="mx-auto flex max-w-[1288px] px-6 flex-col items-center gap-6 md:gap-12">
        <SectionHeading
          align="center"
          eyebrow="Навчання"
          title={
            <>
              Відео-інструкції та рекомендації
              <br />
              з використання V-NRG
            </>
          }
        />

        <div className="flex w-full flex-col gap-5">
          <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-[20px] bg-[#1D2734] md:min-h-[614px]">
            <Image
              src={videoTeaserImage}
              alt="Відео-інструкції V-NRG"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1240px, 100vw"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <PlayCircle />
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="flex flex-col items-start gap-6 rounded-[20px] bg-white p-8"
              >
                <IconAsset src={benefit.icon} width={32} height={32} />
                <div className="flex flex-col gap-4">
                  <h3 className="text-[20px] md:text-[24px] font-medium leading-[145%] text-[#22354A]">
                    {benefit.title}
                  </h3>
                  <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                    {benefit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
