import type { Access, CollectionConfig, PayloadRequest } from 'payload'

import { createCardPaymentForOrder, createPartsPaymentForOrder } from '@/lib/monobankOrderPayments'
import type { Order } from '@/payload-types'

const isAdmin: Access = ({ req: { user } }) => user?.collection === 'users' && user.role === 'admin'

const adminOrOrderCustomer: Access = ({ req: { user } }) => {
  if (!user) {
    return false
  }

  if (user.collection === 'users' && user.role === 'admin') {
    return true
  }

  return {
    customer: {
      equals: user.id,
    },
  }
}

export const Orders: CollectionConfig = {
  labels: { plural: 'Замовлення', singular: 'Замовлення' },
  slug: 'orders',
  admin: {
    defaultColumns: ['orderNumber', 'customerEmail', 'paymentMethod', 'paymentStatus', 'total'],
    useAsTitle: 'orderNumber',
  },
  access: {
    create: () => true,
    delete: isAdmin,
    read: adminOrOrderCustomer,
    update: isAdmin,
  },
  endpoints: [
    {
      path: '/:id/confirm-payment',
      method: 'post',
      handler: confirmOrderPayment,
    },
  ],
  fields: [
    {
      name: 'orderNumber',
      type: 'text',
      index: true,
      label: 'Номер замовлення',
      required: true,
      unique: true,
    },
    {
      name: 'customer',
      type: 'relationship',
      admin: {
        readOnly: true,
      },
      label: 'Користувач',
      relationTo: 'users',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'firstName',
          type: 'text',
          label: "Ім'я",
          required: true,
        },
        {
          name: 'lastName',
          type: 'text',
          label: 'Прізвище',
          required: true,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'phone',
          type: 'text',
          label: 'Телефон',
          required: true,
        },
        {
          name: 'customerEmail',
          type: 'email',
          label: 'Email',
          required: true,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'orderStatus',
          type: 'select',
          defaultValue: 'new',
          label: 'Статус замовлення',
          options: [
            { label: 'Нове', value: 'new' },
            { label: 'В обробці', value: 'processing' },
            { label: 'Відправлено', value: 'shipped' },
            { label: 'Доставлено', value: 'delivered' },
            { label: 'Скасовано', value: 'cancelled' },
          ],
          required: true,
        },
        {
          name: 'paymentStatus',
          type: 'select',
          defaultValue: 'awaiting_payment',
          label: 'Статус оплати',
          options: [
            { label: 'Очікує оплати', value: 'awaiting_payment' },
            { label: 'В обробці', value: 'processing' },
            { label: 'Оплачено', value: 'paid' },
            { label: 'Неуспішно', value: 'failed' },
            { label: 'Повернено', value: 'refunded' },
          ],
          required: true,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'paymentApprovalStatus',
          type: 'select',
          defaultValue: 'pending_admin',
          label: 'Статус підтвердження оплати',
          options: [
            { label: 'Очікує підтвердження адміном', value: 'pending_admin' },
            { label: 'Підтверджено, оплату створено', value: 'confirmed' },
            { label: 'Відхилено', value: 'rejected' },
          ],
          required: true,
        },
        {
          name: 'confirmedPaymentAt',
          type: 'date',
          admin: {
            readOnly: true,
          },
          label: 'Коли підтверджено оплату',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'paymentMethod',
          type: 'select',
          label: 'Спосіб оплати',
          options: [
            { label: 'Monobank карткою онлайн', value: 'card-online' },
            { label: 'Monobank оплата частинами', value: 'monobank-parts' },
            { label: 'Безготівковий розрахунок', value: 'invoice' },
            { label: 'Накладений платіж', value: 'cash-on-delivery' },
          ],
          required: true,
        },
        {
          name: 'total',
          type: 'number',
          label: 'Сума',
          min: 0,
          required: true,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'financialPhone',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.paymentMethod === 'monobank-parts',
          },
          label: 'Фінансовий номер для Monobank',
        },
        {
          name: 'partsCount',
          type: 'number',
          admin: {
            condition: (_, siblingData) => siblingData?.paymentMethod === 'monobank-parts',
          },
          defaultValue: 8,
          label: 'Кількість платежів',
          max: 8,
          min: 3,
        },
      ],
    },
    {
      name: 'confirmPaymentAction',
      type: 'ui',
      admin: {
        components: {
          Field: '/components/admin/OrderPaymentConfirmation',
        },
      },
    },
    {
      name: 'items',
      type: 'array',
      label: 'Товари',
      labels: {
        plural: 'Товари',
        singular: 'Товар',
      },
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'product',
          type: 'relationship',
          label: 'Товар',
          relationTo: 'products',
        },
        {
          type: 'row',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Назва на момент замовлення',
              required: true,
            },
            {
              name: 'quantity',
              type: 'number',
              label: 'Кількість',
              min: 1,
              required: true,
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'price',
              type: 'number',
              label: 'Ціна за одиницю',
              min: 0,
              required: true,
            },
            {
              name: 'total',
              type: 'number',
              label: 'Сума позиції',
              min: 0,
              required: true,
            },
          ],
        },
      ],
      required: true,
    },
    {
      name: 'delivery',
      type: 'group',
      label: 'Доставка',
      fields: [
        {
          name: 'method',
          type: 'select',
          label: 'Спосіб доставки',
          options: [
            { label: 'Нова пошта', value: 'nova-poshta' },
            { label: 'Курʼєр', value: 'courier' },
            { label: 'Самовивіз', value: 'pickup' },
          ],
        },
        {
          name: 'pickupPoint',
          type: 'text',
          label: 'Відділення або адреса доставки',
        },
      ],
    },
    {
      name: 'comment',
      type: 'textarea',
      label: 'Коментар',
    },
    {
      type: 'collapsible',
      label: 'Monobank — технічні дані',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'monobank',
          type: 'json',
          label: 'Відповідь Monobank',
        },
      ],
    },
  ],
  timestamps: true,
}

async function confirmOrderPayment(req: PayloadRequest) {
  if (!isAdminRequest(req)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const id = getRouteParam(req, 'id')

  if (!id) {
    return Response.json({ error: 'Missing order id' }, { status: 400 })
  }

  const order = (await req.payload.findByID({
    collection: 'orders',
    depth: 0,
    id,
    req,
  })) as Order | null

  if (!order) {
    return Response.json({ error: 'Order not found' }, { status: 404 })
  }

  if (order.paymentApprovalStatus === 'confirmed') {
    return Response.json({ error: 'Payment was already confirmed' }, { status: 409 })
  }

  if (order.paymentStatus === 'paid') {
    return Response.json({ error: 'Order is already paid' }, { status: 409 })
  }

  const origin = getRequestOrigin(req)
  const result =
    order.paymentMethod === 'card-online'
      ? await createCardPaymentForOrder(order, origin)
      : order.paymentMethod === 'monobank-parts'
        ? await createPartsPaymentForOrder(order, origin)
        : null

  if (!result) {
    return Response.json(
      { error: 'This payment method does not need Monobank confirmation' },
      { status: 400 },
    )
  }

  const updatedOrder = await req.payload.update({
    collection: 'orders',
    data: {
      confirmedPaymentAt: new Date().toISOString(),
      monobank: result.monobank,
      paymentApprovalStatus: 'confirmed',
      paymentStatus: 'awaiting_payment',
    },
    id: order.id,
    req,
  })

  return Response.json({
    ok: true,
    order: updatedOrder,
    redirectUrl: result.redirectUrl,
  })
}

function isAdminRequest(req: PayloadRequest) {
  return req.user?.collection === 'users' && req.user.role === 'admin'
}

function getRouteParam(req: PayloadRequest, key: string) {
  const value = req.routeParams?.[key]

  return typeof value === 'string' || typeof value === 'number' ? String(value) : ''
}

function getRequestOrigin(req: PayloadRequest) {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }

  const url = typeof req.url === 'string' ? req.url : ''

  return url ? new URL(url).origin : ''
}
