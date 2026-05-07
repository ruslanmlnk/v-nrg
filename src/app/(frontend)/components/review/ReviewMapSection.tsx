'use client'

import { AboutMapPreview } from '../about/AboutMapSection'
import SectionHeading from '../shared/SectionHeading'

export function ReviewMapSection() {
  return (
    <section className="rounded-[48px] bg-[#F5F8F9] px-6 pb-0 pt-16 md:pt-[100px]">
      <div className="mx-auto flex max-w-[1288px] flex-col items-center gap-12">
        <SectionHeading align="center" eyebrow="Географія" title="Де скористатися V-NRG" />
        <AboutMapPreview href="/about" />
      </div>
    </section>
  )
}
