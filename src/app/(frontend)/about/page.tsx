import {
  AboutCertificatesSection,
  AboutHeroSection,
  AboutMapSectionBlock,
  AboutPrinciplesSection,
  AboutStorySection,
} from '../components/about/AboutSections'

export const metadata = {
  title: 'Про бренд V-NRG',
}

export default function AboutPage() {
  return (
    <div className="pt-12">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 lg:gap-24">
        <AboutHeroSection />
        <AboutStorySection />
      </div>

      <AboutCertificatesSection />
      <AboutPrinciplesSection />
      <AboutMapSectionBlock />
    </div>
  )
}
