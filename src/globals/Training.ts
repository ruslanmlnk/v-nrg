import type { Access, GlobalConfig } from 'payload'

const isAdmin: Access = ({ req: { user } }) => user?.collection === 'users' && user.role === 'admin'

export const Training: GlobalConfig = {
  slug: 'training',
  label: 'Сторінка навчання',
  admin: {
    description: 'Контент сторінки навчання.',
  },
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Заголовок сторінки',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Опис сторінки',
      required: true,
    },
    {
      name: 'formats',
      type: 'group',
      label: 'Формати навчання',
      fields: [
        { name: 'title', type: 'text', label: 'Заголовок', required: true },
        { name: 'subtitle', type: 'text', label: 'Підзаголовок', required: true },
        {
          name: 'cards',
          type: 'array',
          label: 'Картки',
          fields: [
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              label: 'Іконка',
              required: true,
            },
            { name: 'title', type: 'text', label: 'Заголовок', required: true },
            { name: 'description', type: 'textarea', label: 'Опис', required: true },
          ],
        },
      ],
    },
    {
      name: 'videoInstructions',
      type: 'group',
      label: 'Відеоінструкції',
      fields: [
        { name: 'title', type: 'text', label: 'Заголовок', required: true },
        { name: 'subtitle', type: 'text', label: 'Підзаголовок', required: true },
      ],
    },
    {
      name: 'faq',
      type: 'group',
      label: 'FAQ',
      fields: [
        { name: 'title', type: 'text', label: 'Заголовок', required: true },
        { name: 'subtitle', type: 'text', label: 'Підзаголовок', required: true },
        {
          name: 'items',
          type: 'array',
          label: 'Питання та відповіді',
          fields: [
            { name: 'question', type: 'text', label: 'Питання', required: true },
            { name: 'answer', type: 'textarea', label: 'Відповідь', required: true },
          ],
        },
      ],
    },
  ],
}
