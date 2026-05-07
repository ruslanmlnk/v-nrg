'use client'

import Link from 'next/link'
import SectionHeading from '../shared/SectionHeading'
import BeforeAfterGrid from '../ui/BeforeAfterGrid'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import demoArrowIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-product-detail-page-demo-arrow.svg'
import { beforeAfterCards } from './data'

import { ProductPageSection } from './ProductPageSection'

export function ProductComparisonSection({ demoHref }: { demoHref: string }) {
  return (
    <ProductPageSection
      sectionClassName="mt-[100px]"
      className="gap-12 rounded-t-[48px] bg-[#22354A] pb-[140px] pt-[100px] text-white"
    >
      <SectionHeading
        align="center"
        eyebrow="До / Після"
        title="Як працює технологія V-NRG"
        titleClassName="text-white"
      />
      <BeforeAfterGrid
        beforeAlt="Стан до процедури V-NRG"
        afterAlt="Стан після процедури V-NRG"
        cards={beforeAfterCards}
      />
      <ProductDemoCta demoHref={demoHref} />
    </ProductPageSection>
  )
}

function ProductDemoCta({ demoHref }: { demoHref: string }) {
  return (
    <Link href={demoHref} className="group mx-auto inline-flex items-center">
      <span className="flex min-h-[50px] items-center rounded-[40px] bg-white px-6 text-[18px] font-medium leading-[145%] text-[#22354A] transition-transform duration-300 group-hover:-translate-x-1">
        Записатися на демонстрацію
      </span>
      <span className="ml-[-6px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#4FACF5] transition-transform duration-300 group-hover:translate-x-1">
        <IconAsset src={demoArrowIconAsset} width={26} height={26} />
      </span>
    </Link>
  )
}
