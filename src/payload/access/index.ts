import type { Access, FieldAccess } from 'payload'

type User = {
  id: string | number
  roles?: ('admin' | 'editor')[]
  [key: string]: unknown
}

export const isAdmin = (user: User | null): boolean => {
  return Boolean(user?.roles?.includes('admin'))
}

export const isEditor = (user: User | null): boolean => {
  return Boolean(user?.roles?.includes('editor'))
}

export const publicAccess: Access = () => true

export const isAuthenticated: Access = ({ req: { user } }) => Boolean(user)

export const isAdminAccess: Access = ({ req: { user } }) => isAdmin(user as User | null)

export const adminFieldAccess: FieldAccess = ({ req: { user } }) => {
  if (!user) return false
  return isAdmin(user as User)
}
