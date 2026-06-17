import type { Access, CollectionConfig } from 'payload'

const isAdmin: Access = ({ req: { user } }) => user?.collection === 'users' && user.role === 'admin'

export const SocialNetworks: CollectionConfig = {
  slug: 'social-networks',
  labels: {
    plural: { en: 'Social networks', uk: 'Соціальні мережі' },
    singular: { en: 'Social network', uk: 'Соціальна мережа' },
  },
  admin: {
    defaultColumns: ['label', 'type', 'url'],
    useAsTitle: 'label',
  },
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      label: { en: 'Name', uk: 'Назва' },
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      label: { en: 'Type', uk: 'Тип' },
      options: [
        { label: 'Instagram', value: 'instagram' },
        { label: 'Facebook', value: 'facebook' },
        { label: 'Telegram', value: 'telegram' },
        { label: 'WhatsApp', value: 'whatsapp' },
        { label: 'Custom', value: 'custom' },
      ],
      required: true,
      unique: true,
    },
    {
      name: 'url',
      type: 'text',
      label: { en: 'URL', uk: 'Посилання' },
      required: true,
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      label: { en: 'Icon', uk: 'Іконка' },
      required: true,
    },
  ],
}
