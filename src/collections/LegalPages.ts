import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { slugField, type CollectionConfig } from 'payload'

import { IconTextBlock } from '../blocks/IconTextBlock'

export const LegalPages: CollectionConfig = {
  slug: 'legal-pages',
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
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
        description:
          'Fallback. Якщо заповнений Lexical-контент, на фронті використовується він.',
        rows: 24,
      },
    },
  ],
}
