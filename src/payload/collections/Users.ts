import { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'roles'],
  },
  fields: [
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: ['editor'],
      required: true,
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
      ],
      access: {
        read: ({ req: { user } }) => {
          if (!user) return false
          return user.roles?.includes('admin')
        },
        create: ({ req: { user } }) => {
          if (!user) return false
          return user.roles?.includes('admin')
        },
        update: ({ req: { user } }) => {
          if (!user) return false
          return user.roles?.includes('admin')
        },
      },
    },
  ],
}
