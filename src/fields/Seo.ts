import type { Field } from 'payload'

export const Seo: Field = {
  name: 'seo',
  type: 'group',
  label: 'SEO',
  fields: [
    {
      name: 'metaTitle',
      type: 'text',
      label: 'Meta title',
      localized: true,
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'Meta description',
      localized: true,
    },
  ],
}
