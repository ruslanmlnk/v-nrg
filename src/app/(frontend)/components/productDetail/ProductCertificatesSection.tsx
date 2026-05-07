'use client'

import Image from 'next/image'
import certificate from '@public/assets/product/certificate.jpg'
import SectionHeading from '../shared/SectionHeading'

import { ProductPageSection } from './ProductPageSection'

export function ProductCertificatesSection() {
  return (
    <ProductPageSection sectionClassName="pt-[100px]" className="gap-12">
      <SectionHeading
        align="center"
        eyebrow="Надійність та підтримка"
        title="Офіційне обладнання з гарантією та сервісом"
      />
      <div className="flex flex-wrap items-center justify-center gap-5">
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
      </div>
    </ProductPageSection>
  )
}

function CertificateCard() {
  return (
    <div className="flex w-[232px] items-center justify-center rounded-[20px] bg-white px-8 py-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
      <Image
        src={certificate}
        alt="Сертифікат V-NRG"
        className="h-[210px] w-[150px] rounded-[5px] border border-[#D5E0E8] object-cover"
      />
    </div>
  )
}
