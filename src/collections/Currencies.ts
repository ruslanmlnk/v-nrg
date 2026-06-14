import type { CollectionConfig } from 'payload'

export const Currencies: CollectionConfig = {
  slug: 'currencies',
  labels: {
    plural: { en: 'Currencies', uk: 'Валюти' },
    singular: { en: 'Currency', uk: 'Валюта' },
  },
  admin: {
    defaultColumns: ['name', 'code', 'rate', 'active'],
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: { en: 'Display name', uk: 'Назва для відображення' },
      required: true,
    },
    {
      name: 'code',
      type: 'text',
      label: { en: 'Currency code', uk: 'Код валюти' },
      required: true,
      unique: true,
      hooks: {
        beforeValidate: [({ value }) => (typeof value === 'string' ? value.trim().toUpperCase() : value)],
      },
    },
    {
      name: 'symbol',
      type: 'text',
      label: { en: 'Symbol', uk: 'Символ' },
      required: true,
    },
    {
      name: 'rate',
      type: 'number',
      label: { en: 'UAH per 1 currency unit', uk: 'Курс: гривень за 1 одиницю валюти' },
      min: 0.000001,
      required: true,
    },
    {
      name: 'active',
      type: 'checkbox',
      label: { en: 'Show on website', uk: 'Показувати на сайті' },
      defaultValue: true,
      index: true,
    },
    {
      name: 'sortOrder',
      type: 'number',
      label: { en: 'Sort order', uk: 'Порядок' },
      defaultValue: 0,
      index: true,
    },
  ],
}
