'use client'

import SectionHeading from '../shared/SectionHeading'
import BeforeAfterGrid from '../ui/BeforeAfterGrid'
import ArrowPillButton from '../ui/ArrowPillButton'
import { ProductPageSection } from './ProductPageSection'
import beforeAfterAfter from '@public/assets/product/before-after-after.jpg'
import beforeAfterBefore from '@public/assets/product/before-after-before.jpg'

export function ProductComparisonSection({
  cards = [
    { afterImage: beforeAfterAfter.src, beforeImage: beforeAfterBefore.src, defaultPosition: 44 },
    { afterImage: beforeAfterAfter.src, beforeImage: beforeAfterBefore.src, defaultPosition: 58 },
    { afterImage: beforeAfterAfter.src, beforeImage: beforeAfterBefore.src, defaultPosition: 71 },
  ],
  demoHref: _demoHref,
  title = 'Результати наших клієнтів',
}: {
  cards?: Array<{ afterImage: string; beforeImage: string; defaultPosition?: number }>
  demoHref?: string
  title?: string
}) {
  return (
    <ProductPageSection
      fullWidth
      className="gap-6 rounded-t-[48px] bg-[#22354A] pb-6 pt-[48px] text-white md:gap-12 md:pb-[140px] md:pt-[100px]"
    >
      <SectionHeading align="center" eyebrow="До / Після" title={title} titleClassName="text-white" />
      <BeforeAfterGrid
        beforeAlt="Стан до процедури V-NRG"
        afterAlt="Стан після процедури V-NRG"
        cards={cards}
      />
      <ArrowPillButton className="mr-[50px] self-center md:mr-[54px]">
        Записатися на демонстрацію
      </ArrowPillButton>
    </ProductPageSection>
  )
}
