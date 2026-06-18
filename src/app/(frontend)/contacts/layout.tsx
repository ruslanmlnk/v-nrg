import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { getSiteLocale } from '../lib/getSiteLocale'
import { createSeoMetadata } from '../lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config: configPromise })
  const contacts = await payload.findGlobal({
    slug: 'contacts',
    locale: await getSiteLocale(),
  })

  return createSeoMetadata(contacts.seo, 'Контакти V-NRG')
}

export default function ContactsLayout({ children }: { children: ReactNode }) {
  return children
}
