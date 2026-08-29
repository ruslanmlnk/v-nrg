import { NextResponse, type NextRequest } from 'next/server'

import { verifyTurnstile } from '@/lib/turnstile'

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null

  if (!body || !(await verifyTurnstile(request, body.turnstileToken))) {
    return NextResponse.json({ message: 'Підтвердьте, що ви не робот.' }, { status: 400 })
  }

  const response = await fetch(new URL('/api/users/login', request.url), {
    body: JSON.stringify({ email: body.email, password: body.password }),
    cache: 'no-store',
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  })

  return response
}
