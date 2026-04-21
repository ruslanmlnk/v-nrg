import FaqSection from '../components/FaqSection'
import {
  TrainingFormatsSection,
  TrainingHeroSection,
  TrainingLessonsSection,
} from '../components/training/TrainingSections'

export const metadata = {
  title: 'Навчання | V-NRG',
}

export default function TrainingPage() {
  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6">
        <TrainingHeroSection />
        <TrainingFormatsSection />
      </div>

      <TrainingLessonsSection />
      <FaqSection />
    </div>
  )
}
