import type { CollectionConfig } from 'payload'

export const TrainingVideos: CollectionConfig = {
  slug: 'training-videos',
  labels: {
    plural: 'Навчальні відео',
    singular: 'Навчальне відео',
  },
  admin: {
    defaultColumns: ['title', 'category', 'sortOrder', 'updatedAt'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Назва',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Опис',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'training-categories',
      label: 'Категорія',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'poster',
          type: 'upload',
          relationTo: 'media',
          label: 'Постер',
          required: true,
        },
        {
          name: 'video',
          type: 'upload',
          relationTo: 'media',
          label: 'Відео',
          required: true,
        },
      ],
    },
    {
      name: 'sortOrder',
      type: 'number',
      label: 'Порядок',
      defaultValue: 0,
      index: true,
    },
  ],
}
