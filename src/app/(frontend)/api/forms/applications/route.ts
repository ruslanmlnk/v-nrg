import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse, type NextRequest } from 'next/server'

import { sendApplicationNotification } from '@/lib/applicationNotifications'
import { verifyTurnstile } from '@/lib/turnstile'

type ApplicationBody = {
  email?: unknown
  message?: unknown
  name?: unknown
  phone?: unknown
  source?: unknown
  website?: unknown
  turnstileToken?: unknown
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as ApplicationBody | null
  if (!body || normalizeText(body.website, 200) || !(await verifyTurnstile(request, body.turnstileToken))) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const source = body.source === 'contacts' || body.source === 'hero-popup' ? body.source : null
  const name = normalizeText(body.name, 120)
  const email = normalizeText(body.email, 200)
  const phone = normalizeText(body.phone, 40)
  const message = normalizeText(body.message, 3000)

  if (!source || !name || !email || !phone || !isEmail(email)) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const payload = await getPayload({ config: configPromise })
  const application = await payload.create({
    collection: 'applications',
    data: { email, message, name, phone, source, status: 'new' },
    depth: 0,
  })

  await sendApplicationNotification({ email, message, name, phone, source }).catch((error) => {
    console.error('Failed to send application notification email', error)
  })

  return NextResponse.json({ id: application.id }, { status: 201 })
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function normalizeText(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}
