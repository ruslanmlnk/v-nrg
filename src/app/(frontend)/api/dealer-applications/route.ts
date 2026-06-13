import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse, type NextRequest } from 'next/server'

import type { User } from '@/payload-types'

type DealerApplicationBody = {
  city?: unknown
  companyName?: unknown
  email?: unknown
  firstName?: unknown
  lastName?: unknown
  message?: unknown
  phone?: unknown
  website?: unknown
}

export async function POST(request: NextRequest) {
  const payload = await getPayload({ config: configPromise })
  const user = await getRequestUser(payload, request)
  if (!user) return NextResponse.json({ error: 'Authentication required' }, { status: 401 })

  const body = (await request.json().catch(() => null)) as DealerApplicationBody | null
  if (!body || normalizeText(body.website, 200)) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const data = {
    account: user.id,
    city: normalizeText(body.city, 200),
    companyName: normalizeText(body.companyName, 200),
    email: normalizeText(body.email, 200),
    firstName: normalizeText(body.firstName, 120),
    lastName: normalizeText(body.lastName, 120),
    message: normalizeText(body.message, 3000),
    phone: normalizeText(body.phone, 40),
    status: 'new' as const,
  }

  if (!data.city || !data.companyName || !data.email || !data.firstName || !data.lastName || !data.phone) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const application = await payload.create({
    collection: 'dealer-applications',
    data,
    depth: 0,
  })
  return NextResponse.json({ id: application.id }, { status: 201 })
}

async function getRequestUser(
  payload: Awaited<ReturnType<typeof getPayload>>,
  request: NextRequest,
): Promise<User | null> {
  try {
    const authResult = await payload.auth({ headers: request.headers })
    return authResult.user?.collection === 'users' ? (authResult.user as User) : null
  } catch {
    return null
  }
}

function normalizeText(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}
