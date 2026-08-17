import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  alternates: { canonical: '/account' },
  title: 'Кабінет користувача V-NRG',
}

export default function AccountLayout({ children }: { children: ReactNode }) {
  return children
}
