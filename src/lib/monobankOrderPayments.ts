import { createHmac } from 'crypto'

import type { Order } from '@/payload-types'

type PaymentItem = {
  id: string
  price: number
  quantity: number
  title: string
}

type PaymentResult = {
  monobank: Record<string, unknown>
  payload: unknown
  redirectUrl?: string
}

const MONOBANK_ACQUIRING_URL = 'https://api.monobank.ua/api/merchant/invoice/create'
const DEFAULT_PARTS_CREATE_URL = 'https://u2.monobank.com.ua/api/order/create'

export async function createCardPaymentForOrder(order: Order, origin: string): Promise<PaymentResult> {
  const token = process.env.MONOBANK_ACQUIRING_TOKEN

  if (!token) {
    throw new Error('Не налаштований MONOBANK_ACQUIRING_TOKEN.')
  }

  const orderData = getOrderPaymentData(order)
  const response = await fetch(MONOBANK_ACQUIRING_URL, {
    body: JSON.stringify({
      amount: normalizeAmount(orderData.total),
      ccy: 980,
      merchantPaymInfo: {
        reference: order.orderNumber,
        destination: `Оплата замовлення №${order.orderNumber}`,
        comment: `Оплата замовлення №${order.orderNumber}`,
        customerEmails: orderData.customerEmail ? [orderData.customerEmail] : [],
        basketOrder: normalizeBasket(orderData.items),
      },
      paymentType: 'debit',
      redirectUrl: `${origin}/checkout/success?orderId=${encodeURIComponent(order.orderNumber)}`,
      validity: 3600,
      webHookUrl: `${origin}/api/monobank/payment/webhook`,
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
    throw new Error(getMonobankErrorMessage(payload, 'Monobank не створив оплату карткою.'))
  }

  const pageUrl = getStringValue(payload, 'pageUrl')

  return {
    monobank: {
      invoiceId: getStringValue(payload, 'invoiceId'),
      pageUrl,
      paymentType: 'card-online',
      raw: payload,
    },
    payload,
    redirectUrl: pageUrl,
  }
}

export async function createPartsPaymentForOrder(order: Order, origin: string): Promise<PaymentResult> {
  const storeId = process.env.MONOBANK_PARTS_STORE_ID
  const secret = process.env.MONOBANK_PARTS_SECRET
  const createUrl = process.env.MONOBANK_PARTS_API_URL || DEFAULT_PARTS_CREATE_URL

  if (!storeId || !secret) {
    throw new Error('Не налаштовані MONOBANK_PARTS_STORE_ID або MONOBANK_PARTS_SECRET.')
  }

  const phone = normalizePhone(order.financialPhone || order.phone)

  if (!phone) {
    throw new Error('Для оплати частинами потрібен фінансовий номер у форматі +380XXXXXXXXX.')
  }

  const orderData = getOrderPaymentData(order)
  const partsCount = normalizePartsCount(order.partsCount)
  const requestPayload = {
    available_programs: [
      {
        available_parts_count: [partsCount],
        type: 'payment_installments',
      },
    ],
    client_email: orderData.customerEmail || undefined,
    client_name: orderData.customerName || undefined,
    client_phone: phone,
    invoice: {
      date: new Date().toISOString().slice(0, 10),
      number: order.orderNumber,
      source: 'INTERNET',
    },
    products: normalizeProducts(orderData.items),
    redirect_url: `${origin}/checkout/success?orderId=${encodeURIComponent(order.orderNumber)}`,
    result_callback: `${origin}/api/monobank/parts/webhook`,
    store_order_id: order.orderNumber,
    total_sum: orderData.total,
  }
  const jsonPayload = JSON.stringify(requestPayload)
  const response = await fetch(createUrl, {
    body: jsonPayload,
    headers: {
      'Content-Type': 'application/json',
      signature: createHmac('sha256', secret).update(jsonPayload).digest('base64'),
      'store-id': storeId,
    },
    method: 'POST',
  })
  const payload = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(getMonobankErrorMessage(payload, 'Monobank не створив оплату частинами.'))
  }

  const redirectUrl = getStringValue(payload, 'redirect_url') || getStringValue(payload, 'redirectUrl')

  return {
    monobank: {
      orderId: getStringValue(payload, 'order_id') || getStringValue(payload, 'orderId'),
      partsCount,
      paymentType: 'monobank-parts',
      raw: payload,
      redirectUrl,
    },
    payload,
    redirectUrl,
  }
}

function getOrderPaymentData(order: Order) {
  const items = normalizeStoredItems(order.items)
  const total = normalizeMoney(order.total)

  if (!total || items.length === 0) {
    throw new Error('Замовлення не має коректної суми або товарів.')
  }

  return {
    customerEmail: order.customerEmail,
    customerName: `${order.firstName} ${order.lastName}`.trim(),
    items,
    total,
  }
}

function normalizeStoredItems(value: Order['items']): PaymentItem[] {
  return (Array.isArray(value) ? value : [])
    .map((item) => {
      const price = normalizeMoney(item.price)
      const quantity = normalizeQuantity(item.quantity)
      const title = typeof item.title === 'string' ? item.title.trim() : ''
      const productId =
        typeof item.product === 'string' || typeof item.product === 'number'
          ? String(item.product)
          : item.product && typeof item.product === 'object' && 'id' in item.product
            ? String(item.product.id)
            : title

      if (!price || !quantity || !title || !productId) {
        return null
      }

      return {
        id: productId,
        price,
        quantity,
        title,
      }
    })
    .filter((item): item is PaymentItem => Boolean(item))
}

function normalizeBasket(items: PaymentItem[]) {
  return items.map((item) => {
    const price = normalizeAmount(item.price)

    return {
      code: item.id || item.title,
      name: item.title,
      qty: item.quantity,
      sum: price,
      total: price * item.quantity,
      unit: 'шт.',
    }
  })
}

function normalizeProducts(items: PaymentItem[]) {
  return items.map((item) => ({
    code: item.id || item.title,
    count: item.quantity,
    name: item.title,
    sum: item.price,
  }))
}

function normalizeAmount(value: number) {
  return Math.round(value * 100)
}

function normalizeMoney(value: unknown) {
  return typeof value === 'number' && Number.isFinite(value) && value > 0
    ? Math.round(value * 100) / 100
    : 0
}

function normalizeQuantity(value: unknown) {
  return typeof value === 'number' && Number.isFinite(value) && value > 0 ? Math.floor(value) : 0
}

function normalizePartsCount(value: unknown) {
  return typeof value === 'number' && Number.isFinite(value)
    ? Math.min(8, Math.max(3, Math.floor(value)))
    : 8
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

function getStringValue(payload: unknown, key: string) {
  if (!payload || typeof payload !== 'object') {
    return undefined
  }

  const value = (payload as Record<string, unknown>)[key]

  return typeof value === 'string' ? value : undefined
}
