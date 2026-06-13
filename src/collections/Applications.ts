import type { Access, CollectionConfig } from 'payload'

const isAdmin: Access = ({ req: { user } }) => user?.collection === 'users' && user.role === 'admin'

export const Applications: CollectionConfig = {
  slug: 'applications',
  labels: { plural: 'Заявки', singular: 'Заявка' },
  admin: {
    defaultColumns: ['name', 'source', 'phone', 'email', 'status', 'createdAt'],
    useAsTitle: 'name',
  },
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: isAdmin,
    update: isAdmin,
  },
  fields: [
    {
      name: 'source',
      type: 'select',
      label: 'Джерело',
      options: [
        { label: 'Форма контактів', value: 'contacts' },
        { label: 'Попап на головній', value: 'hero-popup' },
      ],
      required: true,
    },
    { name: 'name', type: 'text', label: "Ім'я", required: true },
    {
      type: 'row',
      fields: [
        { name: 'email', type: 'email', label: 'Email' },
        { name: 'phone', type: 'text', label: 'Телефон' },
      ],
    },
    { name: 'message', type: 'textarea', label: 'Повідомлення' },
    {
      name: 'status',
      type: 'select',
      label: 'Статус',
      defaultValue: 'new',
      options: [
        { label: 'Нова', value: 'new' },
        { label: 'В роботі', value: 'processing' },
        { label: 'Завершена', value: 'completed' },
        { label: 'Відхилена', value: 'rejected' },
      ],
      required: true,
    },
  ],
}
