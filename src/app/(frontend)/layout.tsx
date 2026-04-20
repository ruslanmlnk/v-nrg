import React from 'react'
import { Google_Sans } from 'next/font/google'
import { headers as getHeaders } from 'next/headers'
import { getPayload } from 'payload'

import config from '@/payload.config'
import { toFrontendUser } from '@/lib/frontendUser'

import './styles.css'
import Header from './components/Header'
import { CommerceProvider } from './components/providers/CommerceProvider'
import { mapPayloadProducts } from './data/products'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

const googleSans = Google_Sans({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
  weight: 'variable',
  display: 'swap',
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  const initialUser = toFrontendUser(user)
  const { docs: productDocs } = await payload.find({
    collection: 'products',
    depth: 1,
    limit: 100,
    sort: 'createdAt',
    where: {
      price: {
        greater_than: 0,
      },
    },
  })
  const initialProducts = mapPayloadProducts(productDocs)

  return (
    <html lang="en">
      <body className={googleSans.className}>
        <CommerceProvider initialProducts={initialProducts} initialUser={initialUser}>
          <Header />
          <main>{children}</main>
        </CommerceProvider>
      </body>
    </html>
  )
}
