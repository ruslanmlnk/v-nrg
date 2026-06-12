import type { CollectionConfig } from 'payload'

export const TrainingCategories: CollectionConfig = {
  slug: 'training-categories',
  labels: {
    plural: 'Категорії навчання',
    singular: 'Категорія навчання',
  },
  admin: {
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
      unique: true,
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
