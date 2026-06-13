import type { Access, CollectionConfig } from 'payload'

const isAdmin: Access = ({ req: { user } }) => user?.collection === 'users' && user.role === 'admin'

export const DealerApplications: CollectionConfig = {
  slug: 'dealer-applications',
  labels: { plural: 'Заявки дилерів', singular: 'Заявка дилера' },
  admin: {
    defaultColumns: ['companyName', 'account', 'city', 'status', 'createdAt'],
    useAsTitle: 'companyName',
  },
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: isAdmin,
    update: isAdmin,
  },
  fields: [
    {
      name: 'account',
      type: 'relationship',
      relationTo: 'users',
      label: 'Акаунт',
      required: true,
    },
    { name: 'companyName', type: 'text', label: 'Назва компанії', required: true },
    {
      type: 'row',
      fields: [
        { name: 'firstName', type: 'text', label: "Ім'я", required: true },
        { name: 'lastName', type: 'text', label: 'Прізвище', required: true },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'phone', type: 'text', label: 'Телефон', required: true },
        { name: 'email', type: 'email', label: 'Email', required: true },
      ],
    },
    { name: 'city', type: 'text', label: 'Місто / країна', required: true },
    { name: 'message', type: 'textarea', label: 'Повідомлення' },
    {
      name: 'status',
      type: 'select',
      label: 'Статус',
      defaultValue: 'new',
      options: [
        { label: 'Нова', value: 'new' },
        { label: 'В роботі', value: 'processing' },
        { label: 'Схвалена', value: 'approved' },
        { label: 'Відхилена', value: 'rejected' },
      ],
      required: true,
    },
  ],
}
