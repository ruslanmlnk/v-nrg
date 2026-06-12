import { createVerify } from 'crypto'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse, type NextRequest } from 'next/server'

const MONOBANK_PUBLIC_KEY_URL = 'https://api.monobank.ua/api/merchant/pubkey'

export async function POST(request: NextRequest) {
  const rawBody = await request.text()

  if (!(await hasValidMonobankSignature(rawBody, request.headers.get('x-sign')))) {
    return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 401 })
  }

  const payload = parseJson(rawBody)
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

async function hasValidMonobankSignature(rawBody: string, signature: string | null) {
  const token = process.env.MONOBANK_ACQUIRING_TOKEN

  if (!token || !signature) {
    return false
  }

  const response = await fetch(MONOBANK_PUBLIC_KEY_URL, {
    headers: {
      'X-Token': token,
    },
  })
  const payload = (await response.json().catch(() => null)) as { key?: unknown } | null

  if (!response.ok || typeof payload?.key !== 'string') {
    return false
  }

  const verifier = createVerify('SHA256')
  verifier.update(rawBody)
  verifier.end()

  return verifier.verify(Buffer.from(payload.key, 'base64'), Buffer.from(signature, 'base64'))
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
