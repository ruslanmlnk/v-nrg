import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { slugField, type CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    defaultColumns: ['title', 'publishedAt', 'updatedAt'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Заголовок',
          required: true,
        },
        {
          name: 'publishedAt',
          type: 'date',
          label: 'Дата',
          required: true,
          admin: {
            date: {
              pickerAppearance: 'dayOnly',
            },
          },
        },
      ],
    },
    slugField({ fieldToUse: 'title' }),
    {
      type: 'row',
      fields: [
        {
          name: 'cardPoster',
          type: 'upload',
          relationTo: 'media',
          label: 'Постер для картки блогу',
          required: true,
        },
        {
          name: 'heroImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Головна картинка статті',
          required: true,
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Контент статті',
      editor: lexicalEditor({}),
      required: true,
    },
  ],
}
