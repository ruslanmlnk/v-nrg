import config from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse, type NextRequest } from 'next/server'
import { consumeCheckoutCode, normalizeCheckoutEmail } from '@/lib/checkoutEmailVerification'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  const email = normalizeCheckoutEmail(body?.email)
  if (!email) return NextResponse.json({ error: 'invalid_code' }, { status: 400 })
  try {
    const payload = await getPayload({ config })
    const valid = await consumeCheckoutCode(payload, email, body.verificationId, body.code, false)
    return NextResponse.json(valid ? { verified: true } : { error: 'invalid_code' }, {
      status: valid ? 200 : 400,
    })
  } catch {
    return NextResponse.json({ error: 'unavailable' }, { status: 503 })
  }
}
