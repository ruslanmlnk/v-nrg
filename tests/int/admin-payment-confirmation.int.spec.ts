import React, { act } from 'react'
import { createRoot } from 'react-dom/client'
import { expect, it, vi } from 'vitest'
import OrderPaymentConfirmation from '@/components/admin/OrderPaymentConfirmation'

const { dispatchFields, setData } = vi.hoisted(() => ({
  dispatchFields: vi.fn(),
  setData: vi.fn(),
}))
vi.mock('@payloadcms/ui', () => ({
  Button: ({ children, onClick, disabled }: React.ComponentProps<'button'>) =>
    React.createElement('button', { onClick, disabled }, children),
  useForm: () => ({ dispatchFields }),
  useDocumentInfo: () => ({
    id: 7,
    data: { paymentMethod: 'card-online', paymentApprovalStatus: 'pending_admin' },
    setData,
  }),
}))

it('synchronizes saved payment fields so a later form save cannot undo confirmation', async () => {
  Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true })
  const order = {
    orderStatus: 'processing',
    paymentApprovalStatus: 'confirmed',
    paymentStatus: 'awaiting_payment',
    confirmedPaymentAt: '2026-10-13T12:00:00Z',
    monobank: { pageUrl: 'https://example.com/pay', invoiceId: 'invoice-7' },
  }
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue(Response.json({ ok: true, order })))
  const container = document.createElement('div')
  const root = createRoot(container)
  try {
    await act(async () => root.render(React.createElement(OrderPaymentConfirmation)))
    await act(async () => container.querySelector('button')!.click())
    expect(setData).toHaveBeenCalledWith(expect.objectContaining(order))
    for (const [path, value] of Object.entries(order)) {
      expect(dispatchFields).toHaveBeenCalledWith({ type: 'UPDATE', path, value })
    }
  } finally {
    await act(async () => root.unmount())
    vi.unstubAllGlobals()
  }
})
