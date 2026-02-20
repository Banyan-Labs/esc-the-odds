import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user?.roles?.includes('admin'),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
          position: 'sidebar',
      }
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
        name: 'excerpt',
        type: 'textarea',
        required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
        name: 'category',
        type: 'select',
        options: [
            { label: 'Mindset', value: 'mindset' },
            { label: 'Business', value: 'business' },
            { label: 'Courses', value: 'courses' },
            { label: 'Lifestyle', value: 'lifestyle' },
        ],
        required: true,
    },
    {
        name: 'author',
        type: 'relationship',
        relationTo: 'users',
        required: true,
    }
  ],
}
