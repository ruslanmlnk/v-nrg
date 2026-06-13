import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse, type NextRequest } from 'next/server'

import { createPriceListWorkbook } from '@/lib/createPriceListWorkbook'
import type { Category, User } from '@/payload-types'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const payload = await getPayload({ config: configPromise })
  const authResult = await payload.auth({ headers: request.headers })
  const user = authResult.user?.collection === 'users' ? (authResult.user as User) : null

  if (!user || user.role !== 'dealer') {
    return NextResponse.json({ error: 'Dealer access required' }, { status: 403 })
  }

  const products = await payload.find({
    collection: 'products',
    depth: 1,
    pagination: false,
    sort: 'title',
  })
  const discountMultiplier = (100 - getDealerDiscountPercent(user)) / 100
  const workbook = createPriceListWorkbook(
    products.docs.map((product) => ({
      category: getCategoryTitles(product.category),
      price: normalizeMoney(product.price * discountMultiplier),
      productId: product.id,
      title: product.title,
    })),
  )
  const date = new Date().toISOString().slice(0, 10)

  return new NextResponse(workbook, {
    headers: {
      'Cache-Control': 'private, no-store',
      'Content-Disposition': `attachment; filename="v-nrg-price-list-${date}.xlsx"`,
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    },
  })
}

function getCategoryTitles(categories: (number | Category)[] | null | undefined) {
  return (categories ?? [])
    .flatMap((category) => (typeof category === 'object' && category.title ? [category.title] : []))
    .join(', ')
}

function getDealerDiscountPercent(user: User) {
  return Math.min(100, Math.max(0, user.dealerDiscountPercent ?? 0))
}

function normalizeMoney(value: number) {
  return Math.round((value + Number.EPSILON) * 100) / 100
}
