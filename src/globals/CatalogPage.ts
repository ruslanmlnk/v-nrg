import type { Access, GlobalConfig } from 'payload'

import { Seo } from '../fields/Seo'

const isAdmin: Access = ({ req: { user } }) => user?.collection === 'users' && user.role === 'admin'

export const CatalogPage: GlobalConfig = {
  slug: 'catalog-page',
  label: { en: 'Catalog page', uk: 'Сторінка каталогу' },
  admin: {
    description: 'Налаштування SEO та текстового блоку загальної сторінки каталогу.',
  },
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    Seo,
    {
      name: 'seoText',
      type: 'group',
      label: 'SEO-текст',
      fields: [
        { name: 'title', type: 'text', label: 'Заголовок' },
        { name: 'description', type: 'textarea', label: 'Текст' },
      ],
    },
  ],
}
