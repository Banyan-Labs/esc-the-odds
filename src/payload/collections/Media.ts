import type { CollectionConfig } from 'payload'
import { publicAccess, isAuthenticated, isAdminAccess } from '../access'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  access: {
    read: publicAccess,
    create: isAuthenticated,
    update: isAuthenticated,
    delete: isAdminAccess,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
