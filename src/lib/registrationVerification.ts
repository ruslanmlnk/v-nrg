import {
  createCipheriv,
  createDecipheriv,
  createHmac,
  createHash,
  randomBytes,
  randomInt,
  timingSafeEqual,
} from 'crypto'

export type PendingRegistration = {
  email: string
  firstName: string
  lastName: string
  password: string
  phone: string
}

export function createVerificationCode() {
  return randomInt(0, 1_000_000).toString().padStart(6, '0')
}

export function hashVerificationValue(value: string) {
  return createHmac('sha256', getSecret()).update(value).digest('hex')
}

export function hashVerificationCode(id: string, code: string) {
  return hashVerificationValue(`${id}:${code}`)
}

export function isVerificationCodeValid(expectedHash: string, id: string, code: string) {
  const actualHash = hashVerificationCode(id, code)
  const expected = Buffer.from(expectedHash, 'hex')
  const actual = Buffer.from(actualHash, 'hex')

  return expected.length === actual.length && timingSafeEqual(expected, actual)
}

export function encryptRegistration(data: PendingRegistration) {
  const iv = randomBytes(12)
  const cipher = createCipheriv('aes-256-gcm', getEncryptionKey(), iv)
  const encrypted = Buffer.concat([cipher.update(JSON.stringify(data), 'utf8'), cipher.final()])
  const tag = cipher.getAuthTag()

  return [iv, tag, encrypted].map((part) => part.toString('base64url')).join('.')
}

export function decryptRegistration(value: string): PendingRegistration {
  const [ivValue, tagValue, encryptedValue] = value.split('.')

  if (!ivValue || !tagValue || !encryptedValue) {
    throw new Error('Invalid encrypted registration payload')
  }

  const decipher = createDecipheriv(
    'aes-256-gcm',
    getEncryptionKey(),
    Buffer.from(ivValue, 'base64url'),
  )
  decipher.setAuthTag(Buffer.from(tagValue, 'base64url'))
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(encryptedValue, 'base64url')),
    decipher.final(),
  ])

  return JSON.parse(decrypted.toString('utf8')) as PendingRegistration
}

function getEncryptionKey() {
  return createHash('sha256').update(getSecret()).digest()
}

function getSecret() {
  const secret = process.env.REGISTRATION_VERIFICATION_SECRET?.trim()

  if (!secret || secret.length < 32) {
    throw new Error('REGISTRATION_VERIFICATION_SECRET must contain at least 32 characters')
  }

  return secret
}
