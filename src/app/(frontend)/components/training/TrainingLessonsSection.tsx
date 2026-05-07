'use client'

import Image from 'next/image'
import { useState } from 'react'
import trainingVideo from '@public/assets/training/training-video.jpg'
import SectionHeading from '../shared/SectionHeading'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import clockIconAsset from '@public/icon/generated/training-training-page-clock.svg'
import { lessonsByTab, trainingTabs, type TrainingTab } from './data'

import { PlayCircle } from './PlayCircle'

export function TrainingLessonsSection() {
  const [activeTab, setActiveTab] = useState<TrainingTab>(trainingTabs[0])

  return (
    <section className="px-6 pt-[100px]">
      <div className="mx-auto flex max-w-[1288px] flex-col items-center gap-12">
        <SectionHeading
          align="center"
          eyebrow="Відеоінструкції"
          title="Детальні уроки для всіх етапів роботи"
        />

        <div className="w-full overflow-x-auto">
          <div className="flex min-w-max items-start gap-4">
            {trainingTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`flex h-[50px] items-center rounded-[20px] px-6 text-[18px] leading-[165%] ${
                  tab === activeTab
                    ? 'bg-[#4FACF5] font-bold text-white'
                    : 'border border-[#D5E0E8] bg-white font-medium text-[#22354A]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid w-full gap-5 lg:grid-cols-3">
          {lessonsByTab[activeTab].map((lesson, index) => (
            <article
              key={`${lesson.title}-${index}`}
              className="overflow-hidden rounded-[20px] bg-white shadow-[0_20px_60px_rgba(34,53,74,0.04)]"
            >
              <div className="relative h-[300px]">
                <Image
                  src={trainingVideo}
                  alt={lesson.title.replaceAll('\n', ' ')}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 410px, 100vw"
                />
                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle />
                </div>

                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-[20px] bg-black/40 px-2 py-1 text-white">
                  <IconAsset src={clockIconAsset} width={16} height={16} />
                  <span className="text-[16px] font-bold uppercase leading-[145%]">
                    {lesson.duration}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 px-8 py-6">
                <h3 className="whitespace-pre-line text-[24px] font-medium leading-[145%] text-[#22354A]">
                  {lesson.title}
                </h3>
                <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                  {lesson.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
