import type { CollectionConfig } from 'payload'

export const Locations: CollectionConfig = {
  slug: 'locations',
  labels: {
    plural: 'Точки V-NRG',
    singular: 'Точка V-NRG',
  },
  admin: {
    defaultColumns: ['name', 'city', 'country', 'isActive', 'sortOrder'],
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Назва',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'country',
          type: 'text',
          label: 'Країна',
          required: true,
        },
        {
          name: 'city',
          type: 'text',
          label: 'Місто',
          required: true,
        },
      ],
    },
    {
      name: 'address',
      type: 'text',
      label: 'Адреса',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Фото',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'latitude',
          type: 'number',
          label: 'Широта',
          required: true,
          admin: {
            step: 0.000001,
          },
        },
        {
          name: 'longitude',
          type: 'number',
          label: 'Довгота',
          required: true,
          admin: {
            step: 0.000001,
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'phone',
          type: 'text',
          label: 'Телефон',
        },
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram URL',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'sortOrder',
          type: 'number',
          label: 'Порядок',
          defaultValue: 0,
          index: true,
        },
        {
          name: 'isActive',
          type: 'checkbox',
          label: 'Показувати на сайті',
          defaultValue: true,
          index: true,
        },
      ],
    },
  ],
}
