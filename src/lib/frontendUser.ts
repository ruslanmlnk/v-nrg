import type { User } from '../payload-types'

export type FrontendUser = Pick<User, 'email' | 'firstName' | 'id' | 'lastName' | 'phone' | 'role'>

const frontendUserRoles: FrontendUser['role'][] = ['admin', 'dealer', 'user']

export function toFrontendUser(user: unknown): FrontendUser | null {
  const userRecord = asRecord(user)

  if (!userRecord || typeof userRecord.id !== 'number' || typeof userRecord.email !== 'string') {
    return null
  }

  return {
    email: userRecord.email,
    firstName: getStringField(userRecord, 'firstName'),
    id: userRecord.id,
    lastName: getStringField(userRecord, 'lastName'),
    phone: getStringField(userRecord, 'phone'),
    role: isFrontendUserRole(userRecord.role) ? userRecord.role : 'user',
  }
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object' ? (value as Record<string, unknown>) : null
}

function getStringField(record: Record<string, unknown>, key: string) {
  const value = record[key]

  return typeof value === 'string' ? value : ''
}

function isFrontendUserRole(value: unknown): value is FrontendUser['role'] {
  return frontendUserRoles.includes(value as FrontendUser['role'])
}
