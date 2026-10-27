import { normalizeCheckoutPhone } from '@/lib/checkoutPhone'
import config from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse, type NextRequest } from 'next/server'
import { verifyTurnstile } from '@/lib/turnstile'
import { requestCheckoutCode } from '@/lib/checkoutVerification'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  const phone = normalizeCheckoutPhone(body?.phone)
  if (!phone || !(await verifyTurnstile(request, body?.turnstileToken))) {
    return NextResponse.json(
      {
        error:
          body?.locale === 'en'
            ? 'Enter a Ukrainian phone number (+380…) and complete the CAPTCHA.'
            : 'Введіть український номер телефону (+380…) та підтвердьте, що ви не робот.',
      },
      { status: 400 },
    )
  }
  try {
    const payload = await getPayload({ config })
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const verificationId = await requestCheckoutCode(payload, phone, ip, body.locale === 'en')
    if (!verificationId)
      return NextResponse.json(
        {
          error:
            body.locale === 'en'
              ? 'Too many requests. Please wait.'
              : 'Забагато запитів. Зачекайте перед повторною спробою.',
        },
        { status: 429 },
      )
    return NextResponse.json({ verificationId })
  } catch {
    return NextResponse.json(
      {
        error:
          body.locale === 'en'
            ? 'Unable to send the SMS code. Try again later.'
            : 'Не вдалося надіслати SMS-код. Спробуйте пізніше.',
      },
      { status: 503 },
    )
  }
}
