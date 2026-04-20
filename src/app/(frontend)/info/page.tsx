import type { Metadata } from 'next'

import InfoPage from './InfoPage'

export const metadata: Metadata = {
  title: 'Інформація | V-NRG',
}

export default function Page() {
  return <InfoPage />
}
