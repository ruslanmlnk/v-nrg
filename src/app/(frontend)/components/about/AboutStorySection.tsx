import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from 'lexical'
import Image from 'next/image'

import type { AboutPage } from '@/payload-types'
import aboutTeam1 from '@public/assets/about/about-team-1.jpg'
import aboutTeam2 from '@public/assets/about/about-team-2.jpg'

import styles from './AboutStorySection.module.css'

export function AboutStorySection({ content }: { content?: AboutPage['storySection'] }) {
  return (
    <section className="grid items-center gap-12 lg:grid-cols-[500px_minmax(0,1fr)]">
      <div className="relative order-2 mx-auto aspect-[312/298.896] w-full max-w-[312px] md:hidden">
        <Image
          src={aboutTeam1}
          alt="Команда V-NRG"
          className="absolute left-0 top-[4.015%] h-[54.2%] w-[48.077%] rounded-[20px] object-cover"
        />
        <AboutStatCard
          className="absolute left-[51.923%] top-0 h-[37.472%] w-[43.91%] rounded-[20px] bg-[#4FACF5] p-4"
          value="15+"
          label="років досвіду"
        />
        <AboutStatCard
          className="absolute left-[3.846%] top-[62.564%] h-[37.472%] w-[43.91%] rounded-[20px] bg-[#22354A] p-4"
          value="20+"
          label="країн присутності"
        />
        <Image
          src={aboutTeam2}
          alt="Виробництво V-NRG"
          className="absolute left-[51.923%] top-[41.487%] h-[54.2%] w-[48.077%] rounded-[20px] object-cover"
        />
      </div>

      <div className="relative order-2 mx-auto hidden h-[479px] w-full max-w-[500px] md:block lg:order-1">
        <Image
          src={aboutTeam1}
          alt="Команда V-NRG"
          className="absolute left-0 top-5 h-[260px] w-[240px] rounded-[20px] object-cover"
        />
        <AboutStatCard
          className="absolute right-5 top-0 h-[179px] w-[220px] rounded-[20px] bg-[#4FACF5] p-8"
          value="15+"
          label="років досвіду"
        />

        <Image
          src={aboutTeam2}
          alt="Виробництво V-NRG"
          className="absolute bottom-0 right-0 h-[260px] w-[240px] rounded-[20px] object-cover"
        />
        <AboutStatCard
          className="absolute bottom-0 left-5 h-[179px] w-[220px] rounded-[20px] bg-[#22354A] p-8"
          value="20+"
          label="країн присутності"
        />
      </div>

      <div className="order-1 flex flex-col gap-6 lg:order-2">
        <div className="flex flex-col gap-4">
          <div className="text-[16px] font-bold uppercase leading-[145%] text-[#4FACF5]">
            {content?.topTitle || 'Про нас'}
          </div>
          <h2 className="text-[36px] font-medium leading-[125%] text-[#22354A] md:text-[48px]">
            {content?.title || 'Наша мета це розвивати професійну вакуумну терапію'}
          </h2>
        </div>

        {content?.content ? (
          <RichText className={styles.content} data={content.content as SerializedEditorState} />
        ) : null}
      </div>
    </section>
  )
}

function AboutStatCard({
  className,
  label,
  value,
}: {
  className: string
  label: string
  value: string
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center text-white ${className}`}
    >
      <div className="text-[28px] font-bold leading-[145%] md:text-[48px]">{value}</div>
      <div className="text-[12px] font-medium leading-[165%] md:text-[16px]">{label}</div>
    </div>
  )
}
