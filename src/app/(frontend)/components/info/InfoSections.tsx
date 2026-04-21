'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { motion } from 'motion/react'

import PageHero from '../shared/PageHero'
import { fallbackContent, infoContent, type InfoTopic } from './data'

export function InfoPageContent() {
  const searchParams = useSearchParams()
  const topic = searchParams.get('topic') as InfoTopic | null
  const content = (topic ? infoContent[topic] : null) ?? fallbackContent

  return (
    <>
      <PageHero currentLabel="Інформація" title={content.title} contentClassName="max-w-[860px]" />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.32 }}
        className="rounded-[28px] bg-white p-8 shadow-[0_24px_64px_rgba(34,53,74,0.08)] md:p-12"
      >
        <div className="mx-auto flex max-w-[860px] flex-col gap-8">
          <p className="text-[18px] font-medium leading-[165%] text-[#22354A] md:text-[22px]">{content.description}</p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contacts"
              className="flex h-[50px] items-center justify-center rounded-full bg-[#22354A] px-8 text-[18px] font-medium leading-[145%] text-white"
            >
              Зв’язатися з нами
            </Link>
            <Link
              href="/catalog"
              className="flex h-[50px] items-center justify-center rounded-full border border-[#D5E0E8] px-8 text-[18px] font-medium leading-[145%] text-[#22354A]"
            >
              Перейти до каталогу
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  )
}
