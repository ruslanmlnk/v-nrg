import { sql } from '@payloadcms/db-postgres'
import type { PayloadRequest } from 'payload'

export async function cancelOrder(req: PayloadRequest): Promise<Response> {
  if (req.user?.collection !== 'users') {
    return Response.json({ error: 'Увійдіть у свій акаунт.' }, { status: 401 })
  }
  if (!req.headers.get('content-type')?.startsWith('application/json')) {
    return Response.json({ error: 'Expected JSON request' }, { status: 415 })
  }
  const orderNumber = req.routeParams?.orderNumber
  if (typeof orderNumber !== 'string' || !orderNumber.trim()) {
    return Response.json({ error: 'Не вказано номер замовлення.' }, { status: 400 })
  }

  // A single conditional UPDATE checks ownership and current state atomically.
  // General collection updates remain admin-only. No client-supplied fields are written.
  const result = await req.payload.db.drizzle.execute(sql`
    UPDATE orders SET order_status = 'cancelled', updated_at = now()
    WHERE order_number = ${orderNumber} AND customer_id = ${req.user.id}
      AND order_status = 'new'
      AND payment_status IN ('awaiting_payment', 'processing', 'failed')
      AND monobank IS NULL
      AND (
        payment_method IN ('invoice', 'cash-on-delivery')
        OR (payment_approval_status = 'pending_admin' AND payment_status != 'processing')
      )
    RETURNING id
  `)
  if (result.rows.length > 0) return Response.json({ ok: true, status: 'cancelled' })

  const { docs } = await req.payload.find({
    collection: 'orders',
    depth: 0,
    limit: 1,
    overrideAccess: false,
    req,
    where: {
      and: [{ orderNumber: { equals: orderNumber } }, { customer: { equals: req.user.id } }],
    },
  })
  if (!docs[0]) {
    return Response.json({ error: 'Замовлення не знайдено.' }, { status: 404 })
  }
  if (docs[0].orderStatus === 'cancelled') return Response.json({ ok: true, status: 'cancelled' })
  return Response.json(
    { error: 'Замовлення вже обробляється або оплачено. Для скасування зверніться до менеджера.' },
    { status: 409 },
  )
}
