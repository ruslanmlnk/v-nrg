import type { Access, GlobalConfig } from 'payload'

const isAdmin: Access = ({ req: { user } }) => user?.collection === 'users' && user.role === 'admin'

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Home',
  admin: {
    description: 'Контент головної сторінки.',
  },
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          label: 'Image',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'howItWork',
      type: 'group',
      label: 'How It Works',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'SubTitle',
          required: true,
        },
        {
          name: 'cards',
          type: 'array',
          label: 'Cards',
          fields: [
            {
              name: 'icon',
              type: 'upload',
              label: 'Icon',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'title',
              type: 'text',
              label: 'Title',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'beforeAfter',
      type: 'array',
      label: 'Before / After',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'before',
              type: 'upload',
              label: 'Before',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'after',
              type: 'upload',
              label: 'After',
              relationTo: 'media',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'modelComparison',
      type: 'group',
      label: 'Model Comparison',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'SubTitle',
          required: true,
        },
        {
          name: 'products',
          type: 'relationship',
          hasMany: true,
          label: 'Products',
          relationTo: 'products',
        },
      ],
    },
    {
      name: 'certificatesSection',
      type: 'group',
      label: 'Certificates',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'SubTitle',
          required: true,
        },
        {
          name: 'certificates',
          type: 'upload',
          hasMany: true,
          label: 'Certificates',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'trainingSection',
      type: 'group',
      label: 'Training',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'SubTitle',
          required: true,
        },
        {
          name: 'video',
          type: 'group',
          label: 'Video',
          fields: [
            {
              name: 'poster',
              type: 'upload',
              label: 'Poster',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'file',
              type: 'upload',
              label: 'Video',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        {
          name: 'cards',
          type: 'array',
          label: 'Cards',
          fields: [
            {
              name: 'icon',
              type: 'upload',
              label: 'Icon',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'title',
              type: 'text',
              label: 'Title',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'reviewsSection',
      type: 'group',
      label: 'Reviews',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'SubTitle',
          required: true,
        },
        {
          name: 'reviews',
          type: 'relationship',
          hasMany: true,
          label: 'Reviews',
          relationTo: 'reviews',
        },
      ],
    },
    {
      name: 'faqSection',
      type: 'group',
      label: 'FAQ',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'SubTitle',
          required: true,
        },
        {
          name: 'items',
          type: 'array',
          label: 'FAQ',
          fields: [
            {
              name: 'question',
              type: 'text',
              label: 'Question',
              required: true,
            },
            {
              name: 'answer',
              type: 'textarea',
              label: 'Answer',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
