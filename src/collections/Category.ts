import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'
import { slugify as trSlugify } from 'transliteration'

export const Category: CollectionConfig = {
    slug: 'category',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'image',
            relationTo: 'media',
            type: 'upload',
            required: true,
        },
        {
            name: "title",
            type: "text",
        },
        {
            name: "description",
            type: "text",
        },
        slugField({
            useAsSlug: 'title',
            slugify: ({ valueToSlugify }) =>
                trSlugify(valueToSlugify, {
                    lowercase: true,
                    separator: '-',
                }),
        }),
    ],

}
