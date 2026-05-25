'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import aboutCertificate from '@public/assets/about/about-certificate.jpg'
import SectionHeading from '../shared/SectionHeading'

export function AboutCertificatesSection() {
  const sliderRef = useCenteredMobileSlide()

  return (
    <section className="mt-12 md:mt-[62px] rounded-[48px] bg-[#22354A] py-12 md:py-[100px] max-w-[1440px] mx-auto">
      <div className="mx-auto flex max-w-[1288px] flex-col items-center gap-12 px-6">
        <SectionHeading
          align="center"
          eyebrow="Надійність та підтримка"
          title="Офіційне обладнання з гарантією та сервісом"
          titleClassName="max-w-[700px] text-white"
        />

        <div
          ref={sliderRef}
          className="-mx-6 flex w-[calc(100%+48px)] snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:w-auto md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0"
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={`certificate-${index}`}
              className="flex w-[149px] shrink-0 snap-center justify-center rounded-[14px] bg-white p-[22px] shadow-[0_24px_64px_rgba(0,0,0,0.08)] md:w-auto md:shrink md:rounded-[20px] md:p-8"
            >
              <Image
                src={aboutCertificate}
                alt={`Сертифікат V-NRG ${index + 1}`}
                className="h-[146px] w-[104px] rounded-[3.5px] border border-[#D5E0E8] object-cover md:h-[210px] md:w-[150px] md:rounded-[5px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function useCenteredMobileSlide() {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current

    if (!slider || !window.matchMedia('(max-width: 767px)').matches) {
      return
    }

    const centerSlide = slider.children[Math.floor(slider.children.length / 2)] as HTMLElement | undefined

    if (!centerSlide) {
      return
    }

    slider.scrollLeft = centerSlide.offsetLeft - (slider.clientWidth - centerSlide.offsetWidth) / 2
  }, [])

  return sliderRef
}
