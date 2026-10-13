import { afterEach, expect, it, vi } from 'vitest'
import type { Order } from '@/payload-types'
import { sendOrderPaymentNotification } from '@/lib/applicationNotifications'

const { sendMail } = vi.hoisted(() => ({ sendMail: vi.fn().mockResolvedValue({}) }))
vi.mock('nodemailer', () => ({ default: { createTransport: () => ({ sendMail }) } }))

const order = {
  customerEmail: 'customer@example.com',
  orderNumber: 'ORDER-7',
  firstName: '<Customer>',
  lastName: 'Test',
  total: 250,
  paymentMethod: 'card-online',
} as Order

afterEach(() => {
  vi.unstubAllEnvs()
  sendMail.mockClear()
})

function configureMail() {
  for (const name of [
    'SMTP_FROM',
    'SMTP_USER',
    'SMTP_PASS',
    'SMTP_HOST',
    'SMTP_PORT',
    'SMTP_SECURE',
  ]) {
    vi.stubEnv(name, name === 'SMTP_PORT' ? '465' : 'test')
  }
}

it('sends the customer an escaped HTML payment link and a plain-text alternative', async () => {
  configureMail()
  await sendOrderPaymentNotification(order, 'https://example.com/pay?a=1&b=2')
  expect(sendMail).toHaveBeenCalledWith(
    expect.objectContaining({
      to: 'customer@example.com',
      subject: expect.stringContaining('ORDER-7'),
      html: expect.stringContaining('href="https://example.com/pay?a=1&amp;b=2"'),
      text: expect.stringContaining('https://example.com/pay?a=1&b=2'),
    }),
  )
  expect(sendMail.mock.calls[0][0].html).toContain('&lt;Customer&gt;')
})

it('does not send a card payment email with a missing or unsafe URL', async () => {
  await expect(sendOrderPaymentNotification(order)).rejects.toThrow('no payment URL')
  await expect(sendOrderPaymentNotification(order, 'javascript:alert(1)')).rejects.toThrow(
    'Invalid',
  )
  expect(sendMail).not.toHaveBeenCalled()
})

it('uses app instructions when installments have no redirect link', async () => {
  configureMail()
  await sendOrderPaymentNotification({ ...order, paymentMethod: 'monobank-parts' })
  expect(sendMail).toHaveBeenCalledWith(
    expect.objectContaining({
      text: expect.stringContaining('застосунку monobank'),
    }),
  )
})

it('reports SMTP failure to the caller', async () => {
  configureMail()
  sendMail.mockRejectedValueOnce(new Error('SMTP unavailable'))
  await expect(sendOrderPaymentNotification(order, 'https://example.com/pay')).rejects.toThrow(
    'SMTP unavailable',
  )
})
