import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { Payload } from 'payload'
import { normalizeCheckoutPhone } from '@/lib/checkoutPhone'
import {
  consumeCheckoutCode,
  normalizeCheckoutEmail,
  requestCheckoutCode,
} from '@/lib/checkoutVerification'
const { send } = vi.hoisted(() => ({ send: vi.fn() }))
vi.mock('@/lib/turboSms', () => ({ sendCheckoutCode: send }))
beforeEach(() => {
  vi.clearAllMocks()
  vi.stubEnv('PAYLOAD_SECRET', 'test-only-secret')
})
describe('Checkout code storage', () => {
  it('normalizes the phone consistently and rejects invalid numbers', () => {
    for (const input of ['0671234567', '+380 (67) 123-45-67', '380671234567']) {
      expect(normalizeCheckoutPhone(input)).toBe('+380671234567')
    }
    for (const input of ['', null, 'hello380671234567', '+380123']) {
      expect(normalizeCheckoutPhone(input)).toBeNull()
    }
  })
  it('checks a code without consuming it before the order is placed', async () => {
    const query = vi.fn().mockResolvedValue({ rows: [{ valid: true }] })
    const payload = { db: { pool: { query } } } as unknown as Payload
    const id = '12345678-1234-1234-1234-123456789abc'
    expect(await consumeCheckoutCode(payload, '+380671234567', id, '123456', false)).toBe(true)
    expect(query.mock.calls[0][1][3]).toBe(false)
    expect(await consumeCheckoutCode(payload, '+380671234567', id, '123456')).toBe(true)
    expect(query.mock.calls[1][1][3]).toBe(true)
  })
  it('normalizes email and rejects malformed values', () => {
    expect(normalizeCheckoutEmail(' User@Example.com ')).toBe('user@example.com')
    for (const value of [null, {}, 'a@b', 'a b@example.com'])
      expect(normalizeCheckoutEmail(value)).toBeNull()
  })
  it('never queries storage for missing or malformed verification', async () => {
    const query = vi.fn()
    const payload = { db: { pool: { query } } } as unknown as Payload
    expect(await consumeCheckoutCode(payload, '+380671234567', undefined, '123456')).toBe(false)
    expect(query).not.toHaveBeenCalled()
  })
  it('binds verification to phone and rejects consumed/missing rows', async () => {
    const query = vi
      .fn()
      .mockResolvedValueOnce({ rows: [{ valid: true }] })
      .mockResolvedValue({ rows: [] })
    const payload = { db: { pool: { query } } } as unknown as Payload
    const id = '12345678-1234-1234-1234-123456789abc'
    expect(await consumeCheckoutCode(payload, '+380671234567', id, '123456')).toBe(true)
    expect(await consumeCheckoutCode(payload, '+380671234568', id, '123456')).toBe(false)
    expect(query.mock.calls[0][1][1]).not.toBe(query.mock.calls[1][1][1])
    expect(query.mock.calls[0][1][2]).not.toBe(query.mock.calls[1][1][2])
    expect(query.mock.calls[0][0]).toContain('attempts < 5')
    expect(query.mock.calls[0][0]).toContain('consumed = false')
  })
  it('does not send SMS when throttled and releases the connection', async () => {
    const query = vi.fn().mockResolvedValue({ rows: [{ limited: true }] })
    const release = vi.fn()
    const payload = {
      db: { pool: { connect: async () => ({ query, release }) } },
    } as unknown as Payload
    expect(await requestCheckoutCode(payload, '+380671234567', '127.0.0.1', false)).toBeNull()
    expect(send).not.toHaveBeenCalled()
    expect(query).toHaveBeenCalledWith('ROLLBACK')
    expect(release).toHaveBeenCalledOnce()
  })
  it('stores only hashed codes and sends the six-digit code to the requested address', async () => {
    const query = vi.fn().mockResolvedValue({ rows: [{ limited: false }] })
    const payload = {
      db: { pool: { connect: async () => ({ query, release: vi.fn() }) } },
    } as unknown as Payload
    const id = await requestCheckoutCode(payload, '+380671234567', '127.0.0.1', true)
    expect(id).toBeTruthy()
    expect(send).toHaveBeenCalledWith('+380671234567', expect.stringMatching(/^\d{6}$/), true)
    const insert = query.mock.calls.find(([sql]) => sql.includes('INSERT INTO'))!
    expect(insert[1][3]).toMatch(/^[a-f0-9]{64}$/)
    expect(insert[1]).not.toContain(send.mock.calls[0][1])
  })
})
