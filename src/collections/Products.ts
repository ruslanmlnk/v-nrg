import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

const productCategoryOptions = [
  { label: 'Апарати вакуумного масажу', value: 'vacuum' },
  { label: 'Апарати фізіотерапії', value: 'physiotherapy' },
  { label: 'Комплектуючі', value: 'components' },
  { label: 'Розхідники', value: 'materials' },
  { label: 'Аксесуари', value: 'accessories' },
  { label: 'Стільці для масажу', value: 'chairs' },
]

function formatSlug(value?: string | null) {
  return (
    value
      ?.trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') || undefined
  )
}

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    defaultColumns: ['title', 'category', 'price', 'updatedAt'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data && !data.slug) {
          data.slug = formatSlug(data.title)
        }

        return data
      },
    ],
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Назва товару',
          required: true,
        },
        {
          name: 'price',
          type: 'number',
          label: 'Ціна',
          required: true,
        },
        {
          name: 'rating',
          type: 'number',
          label: 'Рейтинг',
          admin: {
            step: 0.25,
          },
          defaultValue: 4.8,
        },
      ],
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      unique: true,
      index: true,
      required: true,
      admin: {
        description: 'Використовується в URL товару, наприклад v-nrg-18-pro.',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'category',
          type: 'select',
          label: 'Категорія',
          options: productCategoryOptions,
          defaultValue: 'vacuum',
          required: true,
          index: true,
        },
        {
          name: 'maniples',
          type: 'number',
          label: 'Кількість маніпул',
          admin: {
            step: 1,
          },
        },
        {
          name: 'powerWatts',
          type: 'number',
          label: 'Потужність, Вт',
          admin: {
            step: 1,
          },
        },
      ],
    },
    {
      name: 'details',
      type: 'text',
      label: 'Короткі деталі',
      admin: {
        description: 'Наприклад: 18 маніпул · 800 Вт.',
      },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      label: 'Короткий опис',
    },
    {
      name: 'gallery',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      label: 'Галерея товару',
    },
    {
      name: 'listFeatures',
      type: 'array',
      label: 'Переваги для картки каталогу',
      fields: [
        {
          name: 'feature',
          type: 'text',
          label: 'Перевага',
          required: true,
        },
      ],
    },
    {
      name: 'compareFeatures',
      type: 'array',
      label: 'Характеристики для порівняння',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Назва',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          label: 'Значення',
          required: true,
        },
      ],
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Опис',
          name: 'description',
          fields: [
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({}),
            },
          ],
        },
        {
          label: 'Характеристики',
          name: 'characteristics',
          fields: [
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({}),
            },
          ],
        },
        {
          label: 'Комплектація',
          name: 'equipment',
          fields: [
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({}),
            },
          ],
        },
        {
          label: 'Переваги',
          name: 'advantages',
          fields: [
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({}),
            },
          ],
        },
        {
          label: 'Відео роботи',
          name: 'video',
          fields: [
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({}),
            },
          ],
        },
      ],
    },
    {
      name: 'reviews',
      type: 'relationship',
      relationTo: 'reviews',
      hasMany: true,
      label: 'Відгуки',
    },
    {
      name: 'moreProducts',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      label: 'Більше товарів',
    },
    {
      name: 'recommendedTogether',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      label: 'Рекомендуємо разом',
    },
    {
      name: 'faq',
      type: 'array',
      label: 'FAQ',
      fields: [
        {
          name: 'question',
          type: 'text',
          label: 'Питання',
        },
        {
          name: 'answer',
          type: 'text',
          label: 'Відповідь',
        },
      ],
    },
    {
      name: 'beforeafter',
      type: 'array',
      label: 'До/Після',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'before',
              type: 'upload',
              relationTo: 'media',
              label: 'До',
            },
            {
              name: 'after',
              type: 'upload',
              relationTo: 'media',
              label: 'Після',
            },
          ],
        },
      ],
    },
  ],
}
