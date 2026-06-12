import { createHmac, timingSafeEqual } from 'crypto'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse, type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const rawBody = await request.text()

  if (!hasValidSignature(rawBody, request.headers.get('signature'))) {
    return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 401 })
  }

  const payload = parseJson(rawBody)
  const orderId = getStringValue(payload, 'store_order_id') || getStringValue(payload, 'order_id')
  const status = getStringValue(payload, 'status')

  if (orderId) {
    await updateOrderPaymentStatus(orderId, {
      orderId: getStringValue(payload, 'order_id'),
      paymentType: 'monobank-parts',
      raw: payload,
      status,
    })
  }

  return NextResponse.json({
    ok: true,
    orderId: getStringValue(payload, 'store_order_id') || getStringValue(payload, 'order_id'),
    status: getStringValue(payload, 'status'),
  })
}

function hasValidSignature(rawBody: string, signature: string | null) {
  const secret = process.env.MONOBANK_PARTS_SECRET

  if (!secret || !signature) {
    return false
  }

  const expected = Buffer.from(createHmac('sha256', secret).update(rawBody).digest('base64'))
  const received = Buffer.from(signature)

  return expected.length === received.length && timingSafeEqual(expected, received)
}

function parseJson(value: string) {
  try {
    return JSON.parse(value) as unknown
  } catch {
    return null
  }
}

async function updateOrderPaymentStatus(orderNumber: string, monobank: Record<string, unknown>) {
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
      orderStatus: getOrderStatusFromPayment(monobank.status),
      paymentStatus: getPaymentStatus(monobank.status),
    },
    id: order.id,
  })
}

function getPaymentStatus(status: unknown) {
  if (status === 'SUCCESS' || status === 'success' || status === 'approved') {
    return 'paid'
  }

  if (status === 'FAIL' || status === 'failure' || status === 'declined' || status === 'expired') {
    return 'failed'
  }

  if (status === 'reversed' || status === 'REFUNDED') {
    return 'refunded'
  }

  return 'processing'
}

function getOrderStatusFromPayment(status: unknown) {
  return getPaymentStatus(status) === 'paid' ? 'processing' : 'new'
}

function getStringValue(payload: unknown, key: string) {
  if (!payload || typeof payload !== 'object') {
    return undefined
  }

  const value = (payload as Record<string, unknown>)[key]

  return typeof value === 'string' ? value : undefined
}
