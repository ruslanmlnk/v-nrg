import configPromise from '@payload-config'
import { generatePayloadCookie, getPayload } from 'payload'
import { NextResponse, type NextRequest } from 'next/server'

import { verifyTurnstile } from '@/lib/turnstile'

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null

  if (!body || !(await verifyTurnstile(request, body.turnstileToken))) {
    return NextResponse.json({ message: 'Підтвердьте, що ви не робот.' }, { status: 400 })
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
  const password = typeof body.password === 'string' ? body.password : ''

  if (!email || !password) {
    return NextResponse.json({ message: 'Введіть email і пароль.' }, { status: 400 })
  }

  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.login({
      collection: 'users',
      data: { email, password },
      depth: 0,
    })

    if (!result.token) {
      throw new Error('Payload did not return an authentication token')
    }

    const authConfig = payload.collections.users.config.auth

    if (!authConfig) {
      throw new Error('Users authentication is not configured')
    }

    const cookie = generatePayloadCookie({
      collectionAuthConfig: authConfig,
      cookiePrefix: payload.config.cookiePrefix,
      token: result.token,
    })

    return NextResponse.json(
      { exp: result.exp, message: 'Вхід виконано успішно.', user: result.user },
      { headers: { 'Set-Cookie': cookie } },
    )
  } catch (error) {
    console.error('Frontend login failed', error)
    return NextResponse.json(
      { message: 'Не вдалося увійти. Перевірте email і пароль.' },
      { status: 401 },
    )
  }
}
