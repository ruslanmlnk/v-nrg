import { afterEach, describe, expect, it, vi } from 'vitest'
import { sendCheckoutCode, sendRegistrationCode } from '@/lib/turboSms'

afterEach(() => { vi.unstubAllGlobals(); vi.unstubAllEnvs() })

describe('Checkout SMS delivery', () => {
  it('uses the configured SMS service, normalizes the recipient and localizes checkout messages', async () => {
    vi.stubEnv('TURBOSMS_API_TOKEN', 'test-token')
    vi.stubEnv('TURBOSMS_SENDER', 'V-NRG')
    const fetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ response_code: 801, response_result: [{ response_code: 0 }] }) })
    vi.stubGlobal('fetch', fetch)
    await sendCheckoutCode('+380671234567', '123456', true)
    const english = JSON.parse(fetch.mock.calls[0][1].body)
    expect(english.recipients).toEqual(['380671234567'])
    expect(english.sms.text).toBe('V-NRG verification code: 123456. Valid for 10 minutes.')
    await sendCheckoutCode('+380671234567', '654321', false)
    const ukrainian = JSON.parse(fetch.mock.calls[1][1].body)
    expect(ukrainian.sms.text).toContain('654321')
    expect(ukrainian.sms.text).toContain('10')
    expect(ukrainian.sms.text).not.toContain('Valid')
    await sendRegistrationCode('+380671234567', '111111')
    expect(JSON.parse(fetch.mock.calls[2][1].body).sms.text).toContain('5')
  })
})
