import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Контакти V-NRG',
}

export default function ContactsLayout({ children }: { children: ReactNode }) {
  return children
}
