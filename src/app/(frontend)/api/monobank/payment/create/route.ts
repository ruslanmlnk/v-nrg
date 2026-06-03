import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse, type NextRequest } from 'next/server'

type PaymentItem = {
  id?: string
  price?: number
  quantity?: number
  title?: string
}

type PaymentRequestBody = {
  amount?: number
  customerEmail?: string
  items?: PaymentItem[]
  orderId?: string
}

const MONOBANK_ACQUIRING_URL = 'https://api.monobank.ua/api/merchant/invoice/create'

export async function POST(request: NextRequest) {
  const token = process.env.MONOBANK_ACQUIRING_TOKEN

  if (!token) {
    return NextResponse.json(
      { error: 'MONOBANK_ACQUIRING_TOKEN is not configured' },
      { status: 500 },
    )
  }

  const body = (await request.json()) as PaymentRequestBody
  const amount = normalizeAmount(body.amount)
  const orderId = normalizeReference(body.orderId)

  if (!amount || !orderId) {
    return NextResponse.json({ error: 'Invalid payment payload' }, { status: 400 })
  }

  const origin = getRequestOrigin(request)
  const response = await fetch(MONOBANK_ACQUIRING_URL, {
    body: JSON.stringify({
      amount,
      ccy: 980,
      merchantPaymInfo: {
        reference: orderId,
        destination: `Оплата замовлення №${orderId}`,
        comment: `Оплата замовлення №${orderId}`,
        customerEmails: body.customerEmail ? [body.customerEmail] : [],
        basketOrder: normalizeBasket(body.items),
      },
      redirectUrl: `${origin}/checkout/success?orderId=${encodeURIComponent(orderId)}`,
      webHookUrl: `${origin}/api/monobank/payment/webhook`,
      validity: 3600,
      paymentType: 'debit',
    }),
    headers: {
      'Content-Type': 'application/json',
      'X-Cms': 'V-NRG',
      'X-Token': token,
    },
    method: 'POST',
  })

  const payload = await response.json().catch(() => null)

  if (!response.ok) {
    return NextResponse.json(
      {
        error: 'Monobank payment invoice failed',
        details: payload,
      },
      { status: response.status },
    )
  }

  await updateOrderMonobankData(orderId, {
    invoiceId: getStringValue(payload, 'invoiceId'),
    pageUrl: getStringValue(payload, 'pageUrl'),
    paymentType: 'card-online',
    raw: payload,
  })

  return NextResponse.json(payload)
}

async function updateOrderMonobankData(orderNumber: string, monobank: Record<string, unknown>) {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: 'orders',
    depth: 0,
    limit: 1,
    where: {
      orderNumber: {
        equals: orderNumber,
      },
    },
  })
  const order = docs[0]

  if (!order) {
    return
  }

  await payload.update({
    collection: 'orders',
    data: {
      monobank,
      paymentStatus: 'awaiting_payment',
    },
    id: order.id,
  })
}

function normalizeAmount(value: unknown) {
  if (typeof value !== 'number' || !Number.isFinite(value) || value <= 0) {
    return 0
  }

  return Math.round(value * 100)
}

function normalizeReference(value: unknown) {
  return typeof value === 'string' && value.trim() ? value.trim().slice(0, 64) : ''
}

function normalizeBasket(items: PaymentItem[] | undefined) {
  return (Array.isArray(items) ? items : [])
    .map((item) => {
      const quantity = normalizeQuantity(item.quantity)
      const price = normalizeAmount(item.price)
      const name = item.title?.trim()

      if (!name || !quantity || !price) {
        return null
      }

      return {
        code: item.id || name,
        name,
        qty: quantity,
        sum: price,
        total: price * quantity,
        unit: 'шт.',
      }
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
}

function normalizeQuantity(value: unknown) {
  return typeof value === 'number' && Number.isFinite(value) && value > 0 ? Math.floor(value) : 0
}

function getRequestOrigin(request: NextRequest) {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    `${request.nextUrl.protocol}//${request.headers.get('host') ?? request.nextUrl.host}`
  )
}

function getStringValue(payload: unknown, key: string) {
  if (!payload || typeof payload !== 'object') {
    return undefined
  }

  const value = (payload as Record<string, unknown>)[key]

  return typeof value === 'string' ? value : undefined
}
