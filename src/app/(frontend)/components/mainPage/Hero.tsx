'use client'

import { useState } from 'react'
import Image from 'next/image'

import ArrowPillButton from '../ui/ArrowPillButton'
import DemoConsultationModal from './DemoConsultationModal'

export default function Hero({
  description,
  image,
  title,
}: {
  description: string
  image: string
  title: string
}) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <>
      <section className="mx-auto mt-[23px] grid max-w-[1288px] grid-cols-1 gap-5 px-6 md:mt-5 md:grid-cols-2">
        <div className="flex flex-col rounded-[20px] bg-[#22354A] px-6 py-8 md:py-12 md:pl-8 md:pr-7">
          <div>
            <h1 className="text-center text-[26px] font-semibold leading-[125%] text-white md:text-left md:text-[56px]">
              {title}
            </h1>
            <p className="mt-4 text-center text-base font-medium leading-[165%] text-white md:text-left md:text-[18px]">
              {description}
            </p>
          </div>
          <ArrowPillButton
            className="mr-[50px] mt-6 shrink-0 self-center whitespace-nowrap px-5 md:mr-0 md:mt-[164.5px] md:self-start md:px-6"
            onClick={() => setIsDemoModalOpen(true)}
          >
            Отримати консультацію
          </ArrowPillButton>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-[20px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
      </section>

      <DemoConsultationModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  )
}
