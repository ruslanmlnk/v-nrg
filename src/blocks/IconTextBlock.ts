import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { type Block } from 'payload'

export const IconTextBlock: Block = {
  slug: 'iconText',
  interfaceName: 'IconTextBlock',
  labels: {
    plural: 'Блоки з іконкою',
    singular: 'Блок з іконкою',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      label: 'Зображення / іконка',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'text',
      type: 'richText',
      label: 'Текст',
      editor: lexicalEditor({}),
      required: true,
    },
  ],
}
