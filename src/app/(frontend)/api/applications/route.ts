import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse, type NextRequest } from 'next/server'

type ApplicationBody = {
  email?: unknown
  message?: unknown
  name?: unknown
  phone?: unknown
  source?: unknown
  website?: unknown
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as ApplicationBody | null
  if (!body || normalizeText(body.website, 200)) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const source = body.source === 'contacts' || body.source === 'hero-popup' ? body.source : null
  const name = normalizeText(body.name, 120)
  const email = normalizeText(body.email, 200)
  const phone = normalizeText(body.phone, 40)
  const message = normalizeText(body.message, 3000)

  if (!source || !name || (source === 'contacts' && !email) || (source === 'hero-popup' && !phone)) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const payload = await getPayload({ config: configPromise })
  const application = await payload.create({
    collection: 'applications',
    data: { email, message, name, phone, source, status: 'new' },
    depth: 0,
  })

  return NextResponse.json({ id: application.id }, { status: 201 })
}

function normalizeText(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}
