import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  alternates: { canonical: '/checkout' },
  title: 'Оформлення замовлення V-NRG',
}

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  return children
}
