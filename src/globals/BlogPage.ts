import type { Access, GlobalConfig } from 'payload'

import { Seo } from '../fields/Seo'

const isAdmin: Access = ({ req: { user } }) => user?.collection === 'users' && user.role === 'admin'

export const BlogPage: GlobalConfig = {
  slug: 'blog-page',
  label: { en: 'Blog page', uk: 'Сторінка блогу' },
  admin: {
    description: 'SEO settings for the blog listing page.',
  },
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [Seo],
}
