import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { NextRequest } from 'next/server'

import { parseProductWorkbook } from '@/lib/productBulkExcel'
import type { User } from '@/payload-types'

export async function POST(request: NextRequest) {
  const payload = await getPayload({ config: configPromise })
  const auth = await payload.auth({ headers: request.headers })
  const user = auth.user?.collection === 'users' ? (auth.user as User) : null
  if (user?.role !== 'admin') return Response.json({ error: 'Forbidden' }, { status: 403 })

  try {
    const formData = await request.formData()
    const file = formData.get('file')
    if (!(file instanceof File) || file.size > 5 * 1024 * 1024) {
      return Response.json({ error: 'Оберіть XLSX-файл розміром до 5 МБ' }, { status: 400 })
    }

    const rows = await parseProductWorkbook(Buffer.from(await file.arrayBuffer()))
    if (!rows.length) return Response.json({ error: 'Файл не містить товарів' }, { status: 400 })
    if (new Set(rows.map((row) => row.id)).size !== rows.length) {
      return Response.json({ error: 'У файлі повторюються ID товарів' }, { status: 400 })
    }

    const existing = await payload.find({
      collection: 'products',
      depth: 0,
      pagination: false,
      user,
      overrideAccess: false,
      where: { id: { in: rows.map((row) => row.id) } },
      select: { title: true },
    })
    const existingIds = new Set(existing.docs.map((product) => String(product.id)))
    const missingIds = rows.map((row) => row.id).filter((id) => !existingIds.has(id))
    if (missingIds.length) {
      return Response.json({ error: `Не знайдено ID: ${missingIds.join(', ')}` }, { status: 400 })
    }

    for (const row of rows) {
      await payload.update({
        collection: 'products',
        id: row.id,
        data: {
          advantages: { items: row.advantages.map((item) => ({ item })) },
          characteristics: { items: row.characteristics },
          price: row.price,
          title: row.title,
        },
        depth: 0,
        user,
        overrideAccess: false,
      })
    }

    return Response.json({ updated: rows.length })
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : 'Не вдалося імпортувати файл' },
      { status: 400 },
    )
  }
}
