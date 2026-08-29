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
    {
      name: 'principlesSection',
      type: 'group',
      label: { en: 'Our principles', uk: 'Наші принципи' },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'SubTitle',
          required: true,
        },
        {
          name: 'cards',
          type: 'array',
          label: 'Cards',
          fields: [
            {
              name: 'icon',
              type: 'upload',
              label: 'Icon',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'title',
              type: 'text',
              label: 'Title',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
