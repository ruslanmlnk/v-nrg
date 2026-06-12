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

  if (!orderNumber || !firstName || !lastName || !phone || !customerEmail || !paymentMethod) {
    return NextResponse.json({ error: 'Missing required order fields' }, { status: 400 })
  }

  const payload = await getPayload({ config: configPromise })
  const user = await getRequestUser(payload, request)
  const items = await getServerPricedItems(payload, body.items, getDealerDiscountPercent(user))
  const total = normalizeMoney(items.reduce((sum, item) => sum + item.total, 0))

  if (!total || items.length === 0) {
    return NextResponse.json({ error: 'Order items are invalid' }, { status: 400 })
  }

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

async function getServerPricedItems(
  payload: Awaited<ReturnType<typeof getPayload>>,
  requestedItems: CheckoutOrderItem[] | undefined,
  discountPercent: number,
) {
  const requestedQuantities = new Map<string, number>()

  for (const item of Array.isArray(requestedItems) ? requestedItems : []) {
    const productId = normalizeIdentifier(item.id)
    const quantity = normalizeQuantity(item.quantity)

    if (productId && quantity) {
      requestedQuantities.set(productId, (requestedQuantities.get(productId) ?? 0) + quantity)
    }
  }

  const productIds = [...requestedQuantities.keys()]

  if (productIds.length === 0) {
    return []
  }

  const { docs } = await payload.find({
    collection: 'products',
    depth: 0,
    limit: productIds.length,
    where: {
      id: {
        in: productIds,
      },
    },
  })
  const discountMultiplier = (100 - discountPercent) / 100

  return docs.flatMap((product) => {
    const productId = String(product.id)
    const quantity = requestedQuantities.get(productId)
    const basePrice = normalizeMoney(product.price)

    if (!quantity || !basePrice) {
      return []
    }

    const price = normalizeMoney(basePrice * discountMultiplier)

    return [
      {
        productId,
        price,
        quantity,
        title: product.title,
        total: normalizeMoney(price * quantity),
      },
    ]
  })
}

function getDealerDiscountPercent(user: User | null) {
  if (user?.role !== 'dealer') {
    return 0
  }

  return Math.min(100, Math.max(0, user.dealerDiscountPercent ?? 0))
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

function normalizeIdentifier(value: unknown) {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return String(value)
  }

  return normalizeText(value)
}

function normalizeMoney(value: unknown) {
  return typeof value === 'number' && Number.isFinite(value) && value > 0
    ? Math.round(value * 100) / 100
    : 0
}

function normalizeQuantity(value: unknown) {
  return typeof value === 'number' && Number.isFinite(value) && value > 0 ? Math.floor(value) : 0
}
