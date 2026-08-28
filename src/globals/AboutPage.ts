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
          defaultValue: createDefaultStoryContent(),
          label: { en: 'Content', uk: 'Текст і переваги' },
          localized: true,
          required: true,
        },
      ],
    },
  ],
}

function createDefaultStoryContent() {
  return {
    root: {
      children: [
        {
          children: [
            textNode(
              'V-NRG створює інноваційні апарати вакуумного масажу для професійного використання. Ми поєднуємо технології та практичний досвід, щоб допомогти спеціалістам працювати ефективніше і безпечніше.',
            ),
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'paragraph',
          version: 1,
        },
        {
          children: [
            listItem('Власні розробки та інженерні рішення', 1),
            listItem('Сертифіковане виробництво', 2),
            listItem('Підтримка спеціалістів та навчання', 3),
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          listType: 'number',
          start: 1,
          tag: 'ol',
          type: 'list',
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  }
}

function listItem(text: string, value: number) {
  return {
    children: [
      {
        children: [textNode(text)],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'paragraph',
        version: 1,
      },
    ],
    direction: 'ltr',
    format: '',
    indent: 0,
    type: 'listitem',
    value,
    version: 1,
  }
}

function textNode(text: string) {
  return { detail: 0, format: 0, mode: 'normal', style: '', text, type: 'text', version: 1 }
}
