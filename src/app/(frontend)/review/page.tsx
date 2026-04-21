import { ReviewMapSection, ReviewShowcaseSection } from '../components/review/ReviewSections'

export const metadata = {
  title: 'Відгуки | V-NRG',
}

export default function ReviewPage() {
  return (
    <div className="pt-12">
      <ReviewShowcaseSection />
      <ReviewMapSection />
    </div>
  )
}
