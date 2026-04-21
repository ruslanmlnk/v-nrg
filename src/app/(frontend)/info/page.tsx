import type { Metadata } from 'next'

import { InfoPageContent } from '../components/info/InfoSections'

export const metadata: Metadata = {
  title: 'Інформація | V-NRG',
}

export default function InfoPage() {
  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
        <InfoPageContent />
      </div>
    </div>
  )
}
