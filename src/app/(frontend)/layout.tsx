import { Google_Sans } from 'next/font/google'
import type { ReactNode } from 'react'

import './styles.css'
import Header from './components/Header'
import { CommerceProvider } from './components/providers/CommerceProvider'
import SiteFooter from './components/SiteFooter'
import { getLayoutData } from './lib/graphql/queries'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

const googleSans = Google_Sans({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
  weight: 'variable',
  display: 'swap',
})

export default async function RootLayout(props: { children: ReactNode }) {
  const { children } = props
  const { initialProducts, initialUser } = await getLayoutData()

  return (
    <html lang="en">
      <body className={googleSans.className}>
        <CommerceProvider initialProducts={initialProducts} initialUser={initialUser}>
          <Header />
          <main>{children}</main>
          <SiteFooter />
        </CommerceProvider>
      </body>
    </html>
  )
}
