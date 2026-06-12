import type { Access, CollectionConfig } from 'payload'

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
      name: 'items',
      type: 'json',
      label: 'Товари',
      required: true,
    },
    {
      name: 'delivery',
      type: 'json',
      label: 'Доставка',
    },
    {
      name: 'comment',
      type: 'textarea',
      label: 'Коментар',
    },
    {
      name: 'monobank',
      type: 'json',
      label: 'Monobank',
    },
  ],
  timestamps: true,
}
