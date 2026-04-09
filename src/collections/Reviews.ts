import type { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
    slug: 'reviews',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'avatar',
            relationTo: 'media',
            type: 'upload',
            required: true,
            unique: true,
        },
        {
            name: "text",
            type: "text",
        },
        {
            name: "name",
            type: "text"
        }
    ],

}
