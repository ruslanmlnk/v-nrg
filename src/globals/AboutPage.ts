import type { Access, GlobalConfig } from 'payload'

import { Seo } from '../fields/Seo'

const isAdmin: Access = ({ req: { user } }) => user?.collection === 'users' && user.role === 'admin'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  label: { en: 'About page', uk: 'Сторінка про нас' },
  admin: {
    description: 'SEO settings for the about page.',
  },
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    Seo,
    {
      name: 'storySection',
      type: 'group',
      label: { en: 'About us section', uk: 'Секція «Про нас»' },
      fields: [
        {
          name: 'topTitle',
          type: 'text',
          defaultValue: 'Про нас',
          label: { en: 'Top title', uk: 'Верхній заголовок' },
          localized: true,
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Наша мета це розвивати професійну вакуумну терапію',
          label: { en: 'Title', uk: 'Заголовок' },
          localized: true,
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          label: { en: 'Content', uk: 'Текст і переваги' },
          localized: true,
        },
      ],
    },
  ],
}
