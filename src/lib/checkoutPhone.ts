// Match the Ukrainian phone format supported by registration and TurboSMS.
export function normalizeCheckoutPhone(value: unknown): string | null {
  if (typeof value !== 'string' || !/^[+\d\s().-]+$/.test(value)) return null
  let digits = value.replace(/\D/g, '')
  if (/^0\d{9}$/.test(digits)) digits = `38${digits}`
  return /^380\d{9}$/.test(digits) ? `+${digits}` : null
}
