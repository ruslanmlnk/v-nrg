import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse, type NextRequest } from 'next/server'

import type { User } from '@/payload-types'

type CheckoutOrderItem = {
  id?: string
  price?: number
  quantity?: number
  title?: string
}

type CheckoutOrderBody = {
  comment?: string
  customerEmail?: string
  delivery?: unknown
  firstName?: string
  items?: CheckoutOrderItem[]
  lastName?: string
  orderNumber?: string
  paymentMethod?: string
  phone?: string
  total?: number
}

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue }

const paymentMethods = ['card-online', 'monobank-parts', 'invoice', 'cash-on-delivery'] as const

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as CheckoutOrderBody | null

  if (!body) {
    return NextResponse.json({ error: 'Invalid order payload' }, { status: 400 })
  }

  const orderNumber = normalizeOrderNumber(body.orderNumber)
  const firstName = normalizeText(body.firstName)
  const lastName = normalizeText(body.lastName)
  const phone = normalizeText(body.phone)
  const customerEmail = normalizeText(body.customerEmail)
  const paymentMethod = normalizePaymentMethod(body.paymentMethod)
  const total = normalizeMoney(body.total)
  const items = normalizeItems(body.items)

  if (!orderNumber || !firstName || !lastName || !phone || !customerEmail || !paymentMethod) {
    return NextResponse.json({ error: 'Missing required order fields' }, { status: 400 })
  }

  if (!total || items.length === 0) {
    return NextResponse.json({ error: 'Order total or items are invalid' }, { status: 400 })
  }

  const payload = await getPayload({ config: configPromise })
  const user = await getRequestUser(payload, request)
  const order = await payload.create({
    collection: 'orders',
    data: {
      comment: normalizeText(body.comment),
      customer: user?.collection === 'users' ? user.id : undefined,
      customerEmail,
      delivery: normalizeJson(body.delivery),
      firstName,
      items,
      lastName,
      orderNumber,
      orderStatus: 'new',
      paymentMethod,
      paymentStatus: getInitialPaymentStatus(paymentMethod),
      phone,
      total,
    },
    depth: 0,
  })

  return NextResponse.json({
    id: order.id,
    orderNumber: order.orderNumber,
    paymentStatus: order.paymentStatus,
  })
}

async function getRequestUser(
  payload: Awaited<ReturnType<typeof getPayload>>,
  request: NextRequest,
): Promise<User | null> {
  try {
    const authResult = await payload.auth({ headers: request.headers })
    const user = authResult.user

    return user?.collection === 'users' ? (user as User) : null
  } catch {
    return null
  }
}

function getInitialPaymentStatus(paymentMethod: (typeof paymentMethods)[number]) {
  if (paymentMethod === 'card-online' || paymentMethod === 'monobank-parts') {
    return 'awaiting_payment'
  }

  return 'processing'
}

function normalizeItems(items: CheckoutOrderItem[] | undefined) {
  return (Array.isArray(items) ? items : [])
    .map((item) => {
      const productId = normalizeText(item.id)
      const title = normalizeText(item.title)
      const price = normalizeMoney(item.price)
      const quantity = normalizeQuantity(item.quantity)

      if (!productId || !title || !price || !quantity) {
        return null
      }

      return {
        productId,
        price,
        quantity,
        title,
        total: price * quantity,
      }
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
}

function normalizeJson(value: unknown): JsonValue {
  if (
    value === null ||
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  ) {
    return value
  }

  if (Array.isArray(value)) {
    return value.map(normalizeJson)
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, normalizeJson(entry)]),
    )
  }

  return null
}

function normalizeOrderNumber(value: unknown) {
  const text = normalizeText(value)

  return text ? text.slice(0, 64) : ''
}

function normalizePaymentMethod(value: unknown) {
  return paymentMethods.includes(value as (typeof paymentMethods)[number])
    ? (value as (typeof paymentMethods)[number])
    : null
}

function normalizeText(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function normalizeMoney(value: unknown) {
  return typeof value === 'number' && Number.isFinite(value) && value > 0
    ? Math.round(value * 100) / 100
    : 0
}

function normalizeQuantity(value: unknown) {
  return typeof value === 'number' && Number.isFinite(value) && value > 0 ? Math.floor(value) : 0
}
