import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse, type NextRequest } from 'next/server'

import { decryptRegistration, isVerificationCodeValid } from '@/lib/registrationVerification'

const MAX_ATTEMPTS = 5

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null
  const verificationId = normalizeId(body?.verificationId)
  const code = typeof body?.code === 'string' ? body.code.trim() : ''

  if (!verificationId || !/^\d{6}$/.test(code)) {
    return NextResponse.json({ message: 'Введіть шестизначний код.' }, { status: 400 })
  }

  const payload = await getPayload({ config: configPromise })
  const verification = await payload
    .findByID({
      collection: 'registration-verifications',
      id: verificationId,
      depth: 0,
    })
    .catch(() => null)

  if (!verification) {
    return invalidCodeResponse()
  }

  if (new Date(verification.expiresAt).getTime() <= Date.now()) {
    await payload.delete({ collection: 'registration-verifications', id: verification.id })
    return NextResponse.json(
      { message: 'Термін дії коду минув. Надішліть новий.' },
      { status: 410 },
    )
  }

  if (verification.attempts >= MAX_ATTEMPTS) {
    await payload.delete({ collection: 'registration-verifications', id: verification.id })
    return NextResponse.json(
      { message: 'Ліміт спроб вичерпано. Надішліть новий код.' },
      { status: 429 },
    )
  }

  if (!isVerificationCodeValid(verification.codeHash, verification.phoneHash, code)) {
    await payload.update({
      collection: 'registration-verifications',
      id: verification.id,
      data: { attempts: verification.attempts + 1 },
      depth: 0,
    })
    return invalidCodeResponse()
  }

  try {
    const registration = decryptRegistration(verification.encryptedPayload)
    const existingUser = await payload.find({
      collection: 'users',
      depth: 0,
      limit: 1,
      where: {
        or: [{ email: { equals: registration.email } }, { phone: { equals: registration.phone } }],
      },
    })

    if (existingUser.totalDocs > 0) {
      await payload.delete({ collection: 'registration-verifications', id: verification.id })
      return NextResponse.json(
        { message: 'Користувач із таким email або телефоном уже існує.' },
        { status: 409 },
      )
    }

    await payload.create({
      collection: 'users',
      data: { ...registration, role: 'user' },
      context: { phoneVerified: true },
      depth: 0,
    })
    await payload.delete({ collection: 'registration-verifications', id: verification.id })

    return NextResponse.json({ verified: true })
  } catch (error) {
    console.error('Failed to complete verified registration', error)
    return NextResponse.json(
      { message: 'Не вдалося завершити реєстрацію. Спробуйте пізніше.' },
      { status: 500 },
    )
  }
}

function normalizeId(value: unknown) {
  if (typeof value === 'number' && Number.isInteger(value) && value > 0) return value
  if (typeof value === 'string' && /^\d+$/.test(value)) return Number(value)
  return null
}

function invalidCodeResponse() {
  return NextResponse.json({ message: 'Неправильний код підтвердження.' }, { status: 400 })
}
