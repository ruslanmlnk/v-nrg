import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'
import { slugify as trSlugify } from 'transliteration'

import { Seo } from '../fields/Seo'

export const Category: CollectionConfig = {
  slug: 'category',
  labels: { plural: 'Категорії товарів', singular: 'Категорія товарів' },
  access: {
    read: () => true,
  },
  fields: [
    Seo,
    {
      name: 'image',
      relationTo: 'media',
      type: 'upload',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
    slugField({
      useAsSlug: 'title',
      slugify: ({ valueToSlugify }) =>
        trSlugify(valueToSlugify, {
          lowercase: true,
          separator: '-',
        }),
    }),
  ],
}
