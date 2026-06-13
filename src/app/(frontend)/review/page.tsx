import { AboutMapSectionBlock } from '../components/about/AboutMapSectionBlock'
import { ReviewShowcaseSection } from '../components/review/ReviewSections'

export const metadata = {
  title: 'Відгуки | V-NRG',
}

export default function ReviewPage() {
  return (
    <div className="pt-12">
      <ReviewShowcaseSection />
      <div className="pt-12 md:pt-[100px]">
        <AboutMapSectionBlock />
      </div>
    </div>
  )
}
