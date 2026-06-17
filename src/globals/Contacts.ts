import type { Access, GlobalConfig } from 'payload'

const isAdmin: Access = ({ req: { user } }) => user?.collection === 'users' && user.role === 'admin'

export const Contacts: GlobalConfig = {
  slug: 'contacts',
  label: 'Сторінка контактів',
  admin: {
    description: 'Контент сторінки контактів.',
  },
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Заголовок',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Опис',
      required: true,
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
          name: 'email',
          type: 'email',
          label: 'Email',
          required: true,
        },
        {
          name: 'address',
          type: 'text',
          label: 'Адреса',
          required: true,
        },
      ],
    },
    {
      name: 'form',
      type: 'group',
      label: 'Форма',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Заголовок',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Опис',
          required: true,
        },
        {
          name: 'socialNetworks',
          type: 'relationship',
          relationTo: 'social-networks',
          hasMany: true,
          label: 'Соціальні мережі',
        },
      ],
    },
  ],
}
