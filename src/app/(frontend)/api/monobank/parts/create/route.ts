import { createHmac } from 'crypto'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse, type NextRequest } from 'next/server'

type PartsItem = {
  id?: string
  price?: number
  quantity?: number
  title?: string
}

type PartsRequestBody = {
  amount?: number
  customerEmail?: string
  customerName?: string
  financialPhone?: string
  items?: PartsItem[]
  orderId?: string
}

const DEFAULT_PARTS_CREATE_URL = 'https://u2.monobank.com.ua/api/order/create'
const PARTS_COUNT = 8

export async function POST(request: NextRequest) {
  const storeId = process.env.MONOBANK_PARTS_STORE_ID
  const secret = process.env.MONOBANK_PARTS_SECRET
  const createUrl = process.env.MONOBANK_PARTS_API_URL || DEFAULT_PARTS_CREATE_URL

  if (!storeId || !secret) {
    return NextResponse.json(
      { error: 'Не налаштовані MONOBANK_PARTS_STORE_ID або MONOBANK_PARTS_SECRET.' },
      { status: 500 },
    )
  }

  const body = (await request.json()) as PartsRequestBody
  const amount = normalizeMoney(body.amount)
  const orderId = normalizeReference(body.orderId)
  const phone = normalizePhone(body.financialPhone)

  if (!amount || !orderId || !phone) {
    return NextResponse.json(
      { error: 'Для оплати частинами введіть фінансовий номер у форматі +380XXXXXXXXX.' },
      { status: 400 },
    )
  }

  const origin = getRequestOrigin(request)
  const payload = {
    available_programs: [
      {
        available_parts_count: [PARTS_COUNT],
        type: 'payment_installments',
      },
    ],
    client_email: body.customerEmail || undefined,
    client_name: body.customerName || undefined,
    client_phone: phone,
    invoice: {
      date: formatInvoiceDate(new Date()),
      number: orderId,
      source: 'INTERNET',
    },
    products: normalizeProducts(body.items),
    redirect_url: `${origin}/checkout/success?orderId=${encodeURIComponent(orderId)}`,
    result_callback: `${origin}/api/monobank/parts/webhook`,
    store_order_id: orderId,
    total_sum: amount,
  }
  const jsonPayload = JSON.stringify(payload)
  const response = await fetch(createUrl, {
    body: jsonPayload,
    headers: {
      'Content-Type': 'application/json',
      signature: createSignature(jsonPayload, secret),
      'store-id': storeId,
    },
    method: 'POST',
  })

  const responsePayload = await response.json().catch(() => null)

  if (!response.ok) {
    return NextResponse.json(
      {
        error: getMonobankErrorMessage(responsePayload, 'Monobank не створив оплату частинами.'),
        details: responsePayload,
      },
      { status: response.status },
    )
  }

  await updateOrderMonobankData(orderId, {
    orderId:
      getStringValue(responsePayload, 'order_id') || getStringValue(responsePayload, 'orderId'),
    paymentType: 'monobank-parts',
    raw: responsePayload,
    redirectUrl:
      getStringValue(responsePayload, 'redirect_url') ||
      getStringValue(responsePayload, 'redirectUrl'),
  })

  return NextResponse.json(responsePayload)
}

function getMonobankErrorMessage(payload: unknown, fallback: string) {
  if (!payload || typeof payload !== 'object') {
    return fallback
  }

  const record = payload as Record<string, unknown>

  return (
    getStringValue(record, 'message') ||
    getStringValue(record, 'errText') ||
    getStringValue(record, 'error') ||
    fallback
  )
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

function createSignature(payload: string, secret: string) {
  return createHmac('sha256', secret).update(payload).digest('base64')
}

function normalizeMoney(value: unknown) {
  if (typeof value !== 'number' || !Number.isFinite(value) || value <= 0) {
    return 0
  }

  return Math.round(value * 100) / 100
}

function normalizeReference(value: unknown) {
  return typeof value === 'string' && value.trim() ? value.trim().slice(0, 64) : ''
}

function normalizePhone(value: unknown) {
  if (typeof value !== 'string') {
    return ''
  }

  const digits = value.replace(/\D/g, '')

  if (digits.length === 10 && digits.startsWith('0')) {
    return `+38${digits}`
  }

  if (digits.length === 12 && digits.startsWith('380')) {
    return `+${digits}`
  }

  return ''
}

function normalizeProducts(items: PartsItem[] | undefined) {
  return (Array.isArray(items) ? items : [])
    .map((item) => {
      const count = normalizeQuantity(item.quantity)
      const sum = normalizeMoney(item.price)
      const name = item.title?.trim()

      if (!name || !count || !sum) {
        return null
      }

      return {
        code: item.id || name,
        count,
        name,
        sum,
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

function formatInvoiceDate(date: Date) {
  return date.toISOString().slice(0, 10)
}

function getStringValue(payload: unknown, key: string) {
  if (!payload || typeof payload !== 'object') {
    return undefined
  }

  const value = (payload as Record<string, unknown>)[key]

  return typeof value === 'string' ? value : undefined
}
