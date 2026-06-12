'use client'

import Image from 'next/image'
import { useState } from 'react'

import SectionHeading from '../shared/SectionHeading'
import { PlayCircle } from './PlayCircle'

export type TrainingLesson = {
  category: string
  description: string
  poster: string
  title: string
  video: string
}

export function TrainingLessonsSection({
  lessons,
  subtitle,
  title,
}: {
  lessons: TrainingLesson[]
  subtitle: string
  title: string
}) {
  const categories = Array.from(new Set(lessons.map((lesson) => lesson.category)))
  const [activeTab, setActiveTab] = useState(categories[0] ?? '')
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const visibleLessons = lessons.filter((lesson) => lesson.category === activeTab)

  if (!lessons.length) return null

  return (
    <section className="px-6 pt-[100px]">
      <div className="mx-auto flex max-w-[1288px] flex-col items-center gap-12">
        <SectionHeading align="center" eyebrow={subtitle} title={title} />

        <div className="w-full overflow-x-auto">
          <div className="flex min-w-max items-start gap-4">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveTab(category)}
                className={`flex h-[50px] items-center rounded-[20px] px-6 text-[18px] leading-[165%] ${
                  category === activeTab
                    ? 'bg-[#4FACF5] font-bold text-white'
                    : 'border border-[#D5E0E8] bg-white font-medium text-[#22354A]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid w-full gap-5 lg:grid-cols-3">
          {visibleLessons.map((lesson) => (
            <article
              key={`${lesson.category}-${lesson.title}`}
              className="overflow-hidden rounded-[20px] bg-white shadow-[0_20px_60px_rgba(34,53,74,0.04)]"
            >
              <div className="relative h-[300px] bg-[#1D2734]">
                {playingVideo === `${lesson.category}-${lesson.title}` ? (
                  <video
                    autoPlay
                    className="h-full w-full object-contain"
                    controls
                    playsInline
                    poster={lesson.poster}
                    src={lesson.video}
                  />
                ) : (
                  <button
                    aria-label={`Відтворити відео: ${lesson.title}`}
                    className="absolute inset-0 flex items-center justify-center"
                    onClick={() => setPlayingVideo(`${lesson.category}-${lesson.title}`)}
                    type="button"
                  >
                    <Image
                      src={lesson.poster}
                      alt={lesson.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 410px, 100vw"
                    />
                    <span className="absolute inset-0 bg-black/20" />
                    <span className="relative z-10">
                      <PlayCircle />
                    </span>
                  </button>
                )}
              </div>

              <div className="flex flex-col gap-4 px-8 py-6">
                <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">
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
