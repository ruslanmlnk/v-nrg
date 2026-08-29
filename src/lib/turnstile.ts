import type { NextRequest } from 'next/server'

const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

type TurnstileResult = {
  success?: boolean
  'error-codes'?: string[]
}

export async function verifyTurnstile(request: NextRequest, token: unknown) {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim()

  if (!secret || typeof token !== 'string' || !token.trim() || token.length > 2048) {
    return false
  }

  const body = new URLSearchParams({ response: token.trim(), secret })
  const remoteIp = getClientIp(request)
  if (remoteIp) body.set('remoteip', remoteIp)

  try {
    const response = await fetch(SITEVERIFY_URL, {
      body,
      cache: 'no-store',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      signal: AbortSignal.timeout(8_000),
    })
    const result = (await response.json()) as TurnstileResult

    if (!result.success) {
      console.warn('Turnstile verification failed', result['error-codes'] ?? [])
    }

    return response.ok && result.success === true
  } catch (error) {
    console.error('Turnstile verification request failed', error)
    return false
  }
}

function getClientIp(request: NextRequest) {
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    ''
  )
}
