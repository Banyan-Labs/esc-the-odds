import type { CollectionConfig } from 'payload'
import { publicAccess, isAuthenticated, isAdminAccess } from '../access'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: publicAccess,
    create: isAuthenticated,
    update: isAuthenticated,
    delete: isAdminAccess,
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
