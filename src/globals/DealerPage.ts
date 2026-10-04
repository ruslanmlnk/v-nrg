import type { GlobalConfig } from 'payload'
import { Seo } from '../fields/Seo'

export const DealerPage: GlobalConfig = {
  slug: 'dealer-page',
  label: { uk: 'Сторінка «Стати дилером»', en: 'Become a dealer page' },
  access: {
    read: () => true,
    update: ({ req: { user } }) => user?.collection === 'users' && user.role === 'admin',
  },
  fields: [
    Seo,
    {
      name: 'hero',
      type: 'group',
      label: '1. Верхній банер сторінки',
      fields: [
        { name: 'title', type: 'text', label: 'Заголовок банера' },
        { name: 'description', type: 'textarea', label: 'Опис під заголовком банера' },
      ],
    },
    {
      name: 'benefits',
      type: 'array',
      label: '2. Картки переваг співпраці',
      labels: { singular: 'Картка переваги', plural: 'Картки переваг' },
      admin: {
        description: 'Додавайте, видаляйте й перетягуйте картки для зміни порядку.',
        initCollapsed: true,
      },
      fields: [
        { name: 'title', type: 'text', label: 'Заголовок картки', required: true },
        { name: 'description', type: 'textarea', label: 'Опис картки', required: true },
      ],
    },
    {
      name: 'applicationIntro',
      type: 'group',
      label: '3. Ліва частина біля блоку входу та реєстрації',
      fields: [
        { name: 'title', type: 'text', label: 'Заголовок лівої частини' },
        { name: 'description', type: 'textarea', label: 'Опис лівої частини' },
      ],
    },
  ],
}
