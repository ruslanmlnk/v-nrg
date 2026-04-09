import type { User } from '../payload-types'

export type FrontendUser = Pick<User, 'email' | 'firstName' | 'id' | 'lastName' | 'phone' | 'role'>

export function toFrontendUser(user: Partial<User> | null | undefined): FrontendUser | null {
  if (!user || typeof user.id !== 'number' || typeof user.email !== 'string') {
    return null
  }

  return {
    email: user.email,
    firstName: typeof user.firstName === 'string' ? user.firstName : '',
    id: user.id,
    lastName: typeof user.lastName === 'string' ? user.lastName : '',
    phone: typeof user.phone === 'string' ? user.phone : '',
    role: user.role ?? 'user',
  }
}
