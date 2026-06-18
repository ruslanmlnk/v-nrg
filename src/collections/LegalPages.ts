import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { slugField, type CollectionConfig } from 'payload'

import { IconTextBlock } from '../blocks/IconTextBlock'
import { Seo } from '../fields/Seo'

export const LegalPages: CollectionConfig = {
  slug: 'legal-pages',
  labels: { plural: 'Юридичні сторінки', singular: 'Юридична сторінка' },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    Seo,
    {
      name: 'title',
      type: 'text',
      label: 'Заголовок',
      required: true,
    },
    slugField({ fieldToUse: 'title' }),
    {
      name: 'content',
      type: 'richText',
      label: 'Контент Lexical',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [IconTextBlock],
          }),
        ],
      }),
    },
    {
      name: 'contentMarkdown',
      type: 'textarea',
      label: 'Контент Markdown',
      admin: {
        description: 'Fallback. Якщо заповнений Lexical-контент, на фронті використовується він.',
        rows: 24,
      },
    },
  ],
}
