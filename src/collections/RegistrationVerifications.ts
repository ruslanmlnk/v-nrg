import type { CollectionConfig } from 'payload'

const denyAll = () => false

export const RegistrationVerifications: CollectionConfig = {
  slug: 'registration-verifications',
  admin: {
    hidden: true,
  },
  access: {
    create: denyAll,
    delete: denyAll,
    read: denyAll,
    update: denyAll,
  },
  fields: [
    { name: 'phoneHash', type: 'text', index: true, required: true },
    { name: 'emailHash', type: 'text', index: true, required: true },
    { name: 'ipHash', type: 'text', index: true, required: true },
    { name: 'encryptedPayload', type: 'textarea', required: true },
    { name: 'codeHash', type: 'text', required: true },
    { name: 'expiresAt', type: 'date', index: true, required: true },
    { name: 'lastSentAt', type: 'date', required: true },
    { name: 'windowStartedAt', type: 'date', required: true },
    { name: 'attempts', type: 'number', defaultValue: 0, required: true },
    { name: 'sendCount', type: 'number', defaultValue: 1, required: true },
  ],
  timestamps: true,
}
