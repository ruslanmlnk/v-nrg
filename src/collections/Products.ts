import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          type: "text",
          name: "title",
          label: "Назва товару",
        },
        {
          type: "number",
          name: "price",
          label: "Ціна",
        },
        {
          type: "number",
          name: "rating",
          label: "Рейтинг",
          admin: {
            step: 0.25,
          },
        }
      ]
    },
    {
      name: "gallery",
      type: "upload",
      relationTo: "media",
      hasMany: true,
      label: "Product Gallery"
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Опис",
          name: "description",
          fields: [
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({}),
            }
          ]
        },
        {
          label: "Характеристики",
          name: "characteristics",
          fields: [
            {
              name: "content",
              type: "richText",
              editor: lexicalEditor({}),
            },
          ],
        },
        {
          label: "Комплектація",
          name: "equipment",
          fields: [
            {
              name: "content",
              type: "richText",
              editor: lexicalEditor({}),
            },
          ],
        },
        {
          label: "Переваги",
          name: "advantages",
          fields: [
            {
              name: "content",
              type: "richText",
              editor: lexicalEditor({}),
            },
          ],
        },
        {
          label: "Відео роботи",
          name: "video",
          fields: [
            {
              name: "content",
              type: "richText",
              editor: lexicalEditor({}),
            },
          ],
        },
      ]
    },
    {
      type: "relationship",
      relationTo: "reviews",
      hasMany: true,
      name: "reviews",
      label: "Відгуки"
    },
    {
      type: "relationship",
      relationTo: "products",
      hasMany: true,
      name: "moreProducts",
      label: "Більше товарів"
    },
    {
      type: "relationship",
      relationTo: "products",
      hasMany: true,
      name: "recommendedTogether",
      label: "Рекомендуємо разом"
    },
    {
      type: "array",
      name: "faq",
      label: "FAQ",
      fields: [
        {
          type: "text",
          name: "question",
          label: "Питання"
        },
        {
          type: "text",
          name: "answer",
          label: "Відповідь"
        }
      ]
    },

    {
      type: "array",
      name: "beforeafter",
      label: "До/Після",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "before",
              type: "upload",
              relationTo: "media",
              label: "До"
            },
            {
              name: "after",
              type: "upload",
              relationTo: "media",
              label: "Після"
            },
          ]
        }
      ]
    }
  ],

}
