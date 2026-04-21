import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Апарати вакуумного масажу V-NRG',
}

export default function VacuumCatalogLayout({ children }: { children: ReactNode }) {
  return children
}
