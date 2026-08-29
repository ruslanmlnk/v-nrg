import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { NextRequest } from 'next/server'

import { createProductCsv } from '@/lib/productBulkCsv'
import type { User } from '@/payload-types'

export async function GET(request: NextRequest) {
  const payload = await getPayload({ config: configPromise })
  const auth = await payload.auth({ headers: request.headers })
  const user = auth.user?.collection === 'users' ? (auth.user as User) : null
  if (user?.role !== 'admin') return Response.json({ error: 'Forbidden' }, { status: 403 })

  const result = await payload.find({
    collection: 'products',
    depth: 0,
    pagination: false,
    sort: 'id',
    user,
    overrideAccess: false,
    select: { advantages: true, characteristics: true, title: true },
  })
  const csv = createProductCsv(result.docs.map((product) => ({
    advantages: product.advantages?.items?.flatMap((item) => item?.item ? [item.item] : []) ?? [],
    characteristics: product.characteristics?.items?.flatMap((item) =>
      item?.label && item.value ? [{ label: item.label, value: item.value }] : [],
    ) ?? [],
    id: String(product.id),
    title: product.title,
  })))

  return new Response(csv, {
    headers: {
      'Content-Disposition': `attachment; filename="products-${new Date().toISOString().slice(0, 10)}.csv"`,
      'Content-Type': 'text/csv; charset=utf-8',
    },
  })
}
