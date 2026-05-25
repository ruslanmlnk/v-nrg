'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import certificate from '@public/assets/product/certificate.jpg'
import SectionHeading from '../shared/SectionHeading'

import { ProductPageSection } from './ProductPageSection'

export function ProductCertificatesSection() {
  const sliderRef = useCenteredMobileSlide()

  return (
    <ProductPageSection sectionClassName="pt-[100px]" className="gap-12">
      <SectionHeading
        align="center"
        eyebrow="Надійність та підтримка"
        title="Офіційне обладнання з гарантією та сервісом"
      />
      <div
        ref={sliderRef}
        className="-mx-6 flex w-[calc(100%+48px)] snap-x snap-mandatory items-center gap-5 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:w-auto md:flex-wrap md:justify-center md:overflow-visible md:px-0 md:pb-0"
      >
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
      </div>
    </ProductPageSection>
  )
}

function CertificateCard() {
  return (
    <div className="flex w-[232px] shrink-0 snap-center items-center justify-center rounded-[20px] bg-white px-8 py-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)] md:shrink">
      <Image
        src={certificate}
        alt="Сертифікат V-NRG"
        className="h-[210px] w-[150px] rounded-[5px] border border-[#D5E0E8] object-cover"
      />
    </div>
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
