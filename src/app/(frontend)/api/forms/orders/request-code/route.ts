import config from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse, type NextRequest } from 'next/server'
import { verifyTurnstile } from '@/lib/turnstile'
import { normalizeCheckoutEmail, requestCheckoutCode } from '@/lib/checkoutEmailVerification'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  const email = normalizeCheckoutEmail(body?.email)
  if (!email || !(await verifyTurnstile(request, body?.turnstileToken))) {
    return NextResponse.json(
      { error: 'Перевірте email і підтвердьте, що ви не робот. / Check your email and CAPTCHA.' },
      { status: 400 },
    )
  }
  try {
    const payload = await getPayload({ config })
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const verificationId = await requestCheckoutCode(payload, email, ip, body.locale === 'en')
    if (!verificationId)
      return NextResponse.json(
        {
          error:
            'Забагато запитів. Зачекайте перед повторною спробою. / Too many requests. Please wait.',
        },
        { status: 429 },
      )
    return NextResponse.json({ verificationId })
  } catch {
    return NextResponse.json(
      {
        error:
          'Не вдалося надіслати код. Спробуйте пізніше. / Unable to send the code. Try again later.',
      },
      { status: 503 },
    )
  }
}
