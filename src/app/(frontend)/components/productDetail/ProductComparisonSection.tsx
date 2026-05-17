'use client'

import Link from 'next/link'
import SectionHeading from '../shared/SectionHeading'
import BeforeAfterGrid from '../ui/BeforeAfterGrid'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import demoArrowIconAsset from '@public/icon/generated/catalog-aparaty-vakuumnoho-masazhu-product-detail-page-demo-arrow.svg'
import { beforeAfterCards } from './data'

import { ProductPageSection } from './ProductPageSection'
import ArrowPillButton from '../ui/ArrowPillButton'

export function ProductComparisonSection({ demoHref }: { demoHref: string }) {
  return (
    <ProductPageSection
      sectionClassName="mt-[100px]"
      fullWidth
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
      <ArrowPillButton className="mt-[164.5px]">Записатися на демонстрацію</ArrowPillButton>
    </ProductPageSection>
  )
}

