import type { Access, GlobalConfig } from 'payload'

import { Seo } from '../fields/Seo'

const isAdmin: Access = ({ req: { user } }) => user?.collection === 'users' && user.role === 'admin'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  label: { en: 'About page', uk: 'Сторінка про нас' },
  admin: {
    description: 'SEO settings for the about page.',
  },
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [Seo],
}
