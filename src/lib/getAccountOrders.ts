import type { PayloadRequest } from 'payload'
import { ACCOUNT_ORDERS_PAGE_SIZE, toAccountOrder } from './accountOrders'

export async function getAccountOrders(req: PayloadRequest): Promise<Response> {
  const headers = { 'Cache-Control': 'private, no-store' }
  if (req.user?.collection !== 'users') {
    return Response.json({ error: 'Увійдіть у свій акаунт.' }, { status: 401, headers })
  }
  const page = Number(req.query?.page ?? 1)
  if (!Number.isSafeInteger(page) || page < 1) {
    return Response.json({ error: 'Некоректна сторінка.' }, { status: 400, headers })
  }
  const result = await req.payload.find({
    collection: 'orders',
    req,
    overrideAccess: false,
    depth: 0,
    page,
    limit: ACCOUNT_ORDERS_PAGE_SIZE,
    sort: ['-createdAt', '-id'],
    // Even administrators see only their own purchases in the customer account.
    where: { customer: { equals: req.user.id } },
  })
  return Response.json(
    {
      orders: result.docs.map(toAccountOrder),
      totalDocs: result.totalDocs,
      totalPages: Math.max(1, result.totalPages),
    },
    { headers },
  )
}
