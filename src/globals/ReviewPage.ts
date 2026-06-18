import type { Access, GlobalConfig } from 'payload'

import { Seo } from '../fields/Seo'

const isAdmin: Access = ({ req: { user } }) => user?.collection === 'users' && user.role === 'admin'

export const ReviewPage: GlobalConfig = {
  slug: 'review-page',
  label: { en: 'Reviews page', uk: 'Сторінка відгуків' },
  admin: {
    description: 'SEO settings for the reviews page.',
  },
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [Seo],
}
