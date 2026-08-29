import configPromise from '@payload-config'
import { getPayload, type Where } from 'payload'
import { NextResponse, type NextRequest } from 'next/server'

import {
  createVerificationCode,
  encryptRegistration,
  hashVerificationCode,
  hashVerificationValue,
  type PendingRegistration,
} from '@/lib/registrationVerification'
import { sendRegistrationCode } from '@/lib/turboSms'
import { verifyTurnstile } from '@/lib/turnstile'

const CODE_TTL_MS = 5 * 60 * 1000
const RESEND_COOLDOWN_MS = 60 * 1000
const RATE_WINDOW_MS = 60 * 60 * 1000
const MAX_SENDS_PER_REGISTRATION = 5
const MAX_REQUESTS_PER_IP = 10

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null
  const input = normalizeRegistration(body)

  if (!input || !(await verifyTurnstile(request, body?.turnstileToken))) {
    return NextResponse.json({ message: 'Перевірте введені дані.' }, { status: 400 })
  }

  try {
    const payload = await getPayload({ config: configPromise })
    const phoneHash = hashVerificationValue(input.phone)
    const emailHash = hashVerificationValue(input.email)
    const ipHash = hashVerificationValue(getClientIp(request))
    const now = Date.now()
    const windowStart = new Date(now - RATE_WINDOW_MS).toISOString()

    const existingUser = await payload.find({
      collection: 'users',
      depth: 0,
      limit: 1,
      where: {
        or: [{ email: { equals: input.email } }, { phone: { equals: input.phone } }],
      },
    })

    if (existingUser.totalDocs > 0) {
      return NextResponse.json(
        { message: 'Користувач із таким email або телефоном уже існує.' },
        { status: 409 },
      )
    }

    const ipRequests = await payload.find({
      collection: 'registration-verifications',
      depth: 0,
      limit: MAX_REQUESTS_PER_IP,
      where: {
        and: [{ ipHash: { equals: ipHash } }, { createdAt: { greater_than: windowStart } }],
      },
    })

    if (ipRequests.totalDocs >= MAX_REQUESTS_PER_IP) {
      return NextResponse.json({ message: 'Забагато запитів. Спробуйте пізніше.' }, { status: 429 })
    }

    const pending = await payload.find({
      collection: 'registration-verifications',
      depth: 0,
      limit: 1,
      sort: '-createdAt',
      where: {
        or: [{ phoneHash: { equals: phoneHash } }, { emailHash: { equals: emailHash } }],
      },
    })
    const existing = pending.docs[0]
    const existingWindowStartedAt = existing ? new Date(existing.windowStartedAt).getTime() : 0
    const isSameWindow = now - existingWindowStartedAt < RATE_WINDOW_MS

    if (existing && now - new Date(existing.lastSentAt).getTime() < RESEND_COOLDOWN_MS) {
      return NextResponse.json(
        { message: 'Повторний код можна надіслати через 60 секунд.' },
        { status: 429 },
      )
    }

    if (existing && isSameWindow && existing.sendCount >= MAX_SENDS_PER_REGISTRATION) {
      return NextResponse.json(
        { message: 'Ліміт SMS вичерпано. Спробуйте через годину.' },
        { status: 429 },
      )
    }

    const code = createVerificationCode()
    await sendRegistrationCode(input.phone, code)

    const commonData = {
      attempts: 0,
      codeHash: hashVerificationCode(phoneHash, code),
      emailHash,
      encryptedPayload: encryptRegistration(input),
      expiresAt: new Date(now + CODE_TTL_MS).toISOString(),
      ipHash,
      lastSentAt: new Date(now).toISOString(),
      phoneHash,
      sendCount: existing && isSameWindow ? existing.sendCount + 1 : 1,
      windowStartedAt:
        existing && isSameWindow ? existing.windowStartedAt : new Date(now).toISOString(),
    }

    const verification = existing
      ? await payload.update({
          collection: 'registration-verifications',
          id: existing.id,
          data: commonData,
          depth: 0,
        })
      : await payload.create({
          collection: 'registration-verifications',
          data: commonData,
          depth: 0,
        })

    return NextResponse.json({ expiresIn: CODE_TTL_MS / 1000, verificationId: verification.id })
  } catch (error) {
    console.error('Failed to request registration verification code', error)
    return NextResponse.json(
      { message: 'Не вдалося надіслати SMS. Спробуйте пізніше.' },
      { status: 502 },
    )
  }
}

function normalizeRegistration(value: unknown): PendingRegistration | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return null
  }

  const data = value as Record<string, unknown>
  const email = normalizeText(data.email).toLowerCase()
  const firstName = normalizeText(data.firstName)
  const lastName = normalizeText(data.lastName)
  const password = typeof data.password === 'string' ? data.password : ''
  const phone = normalizePhone(data.phone)

  if (
    !firstName ||
    !lastName ||
    !phone ||
    password.length < 8 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return null
  }

  return { email, firstName, lastName, password, phone }
}

function normalizeText(value: unknown) {
  return typeof value === 'string' ? value.trim().slice(0, 200) : ''
}

function normalizePhone(value: unknown) {
  if (typeof value !== 'string') return null
  const digits = value.replace(/\D/g, '')
  return /^380\d{9}$/.test(digits) ? `+${digits}` : null
}

function getClientIp(request: NextRequest) {
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  )
}
