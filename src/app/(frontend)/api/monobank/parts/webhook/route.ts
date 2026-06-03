import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse, type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const payload = await request.json().catch(() => null)
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
