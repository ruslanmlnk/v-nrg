'use client'

import { useState } from 'react'
import DemoConsultationModal from '../mainPage/DemoConsultationModal'
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
  title = 'Результати наших клієнтів',
}: {
  cards?: Array<{ afterImage: string; beforeImage: string; defaultPosition?: number }>
  title?: string
}) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <>
      <ProductPageSection
        fullWidth
        className="gap-6 rounded-t-[48px] bg-[#22354A] pb-6 pt-[48px] text-white md:gap-12 md:pb-[140px] md:pt-[100px]"
      >
        <SectionHeading
          align="center"
          eyebrow="До / Після"
          title={title}
          titleClassName="text-white"
        />
        <BeforeAfterGrid
          beforeAlt="Стан до процедури V-NRG"
          afterAlt="Стан після процедури V-NRG"
          cards={cards}
        />
        <ArrowPillButton
          className="mr-[50px] self-center md:mr-[54px]"
          onClick={() => setIsDemoModalOpen(true)}
        >
          Записатися на демонстрацію
        </ArrowPillButton>
      </ProductPageSection>

      <DemoConsultationModal
        actionLabel="Записатися на демонстрацію"
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        title="Запис на демонстрацію"
      />
    </>
  )
}
