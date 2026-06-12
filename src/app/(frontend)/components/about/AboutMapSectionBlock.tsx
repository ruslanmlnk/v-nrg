import AboutMapSection from './AboutMapSection'
import SectionHeading from '../shared/SectionHeading'

export function AboutMapSectionBlock() {
  return (
    <section className="mx-auto max-w-[1288px] px-6 pb-12 md:pb-[100px]">
      <div className="flex flex-col gap-6 md:gap-12">
        <SectionHeading align="center" eyebrow="Географія" title="Де скористатися V-NRG" />
        <AboutMapSection />
      </div>
    </section>
  )
}
