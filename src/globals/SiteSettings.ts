import type { Access, GlobalConfig } from 'payload'

const isAdmin: Access = ({ req: { user } }) => user?.collection === 'users' && user.role === 'admin'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: { en: 'Site settings', uk: 'Налаштування сайту' },
  admin: {
    description: 'Глобальні налаштування сайту.',
  },
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
      label: 'Favicon',
    },
    {
      name: 'footer',
      type: 'group',
      label: { en: 'Footer', uk: 'Футер' },
      fields: [
        {
          name: 'socialNetworks',
          type: 'relationship',
          relationTo: 'social-networks',
          hasMany: true,
          label: { en: 'Social networks block', uk: 'Блок соцмереж' },
        },
        {
          name: 'contactSocialNetworks',
          type: 'relationship',
          relationTo: 'social-networks',
          hasMany: true,
          label: { en: 'Contact block social networks', uk: 'Соцмережі блоку контактів' },
        },
      ],
    },
  ],
}
