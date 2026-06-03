import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse, type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const payload = await request.json().catch(() => null)
  const reference = getStringValue(payload, 'reference')
  const status = getStringValue(payload, 'status')

  if (reference) {
    await updateOrderPaymentStatus(reference, {
      invoiceId: getStringValue(payload, 'invoiceId'),
      paymentType: 'card-online',
      raw: payload,
      status,
    })
  }

  return NextResponse.json({
    ok: true,
    invoiceId: getStringValue(payload, 'invoiceId'),
    reference: getStringValue(payload, 'reference'),
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
  if (status === 'success') {
    return 'paid'
  }

  if (status === 'failure' || status === 'expired') {
    return 'failed'
  }

  if (status === 'reversed') {
    return 'refunded'
  }

  return 'processing'
}

function getOrderStatusFromPayment(status: unknown) {
  return status === 'success' ? 'processing' : 'new'
}

function getStringValue(payload: unknown, key: string) {
  if (!payload || typeof payload !== 'object') {
    return undefined
  }

  const value = (payload as Record<string, unknown>)[key]

  return typeof value === 'string' ? value : undefined
}
