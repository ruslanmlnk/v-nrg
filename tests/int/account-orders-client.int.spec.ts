import React, { act } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { useAccountOrders } from '@/app/(frontend)/components/account/useAccountOrders'

let root: Root
let container: HTMLDivElement
let latest: ReturnType<typeof useAccountOrders>
function Harness({ userId, page = 1 }: { userId?: number; page?: number }) {
  latest = useAccountOrders(userId, page)
  return null
}
const data = (id: string) => ({ orders: [{ id }], totalDocs: 1, totalPages: 1 })

beforeEach(() => {
  Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true })
  container = document.createElement('div')
  root = createRoot(container)
})
afterEach(async () => {
  await act(async () => root.unmount())
  vi.unstubAllGlobals()
})

it('loads server history and refreshes it after a change', async () => {
  const fetch = vi
    .fn()
    .mockResolvedValueOnce(Response.json(data('first')))
    .mockResolvedValueOnce(Response.json(data('updated')))
  vi.stubGlobal('fetch', fetch)
  await act(async () => root.render(React.createElement(Harness, { userId: 12 })))
  expect(latest.orders[0].id).toBe('first')
  expect(fetch).toHaveBeenCalledWith(
    '/api/orders/my-orders?page=1',
    expect.objectContaining({ cache: 'no-store', credentials: 'same-origin' }),
  )
  await act(async () => latest.refresh())
  expect(latest.orders[0].id).toBe('updated')
})

it('does not display another account’s delayed response after logout or account switching', async () => {
  let resolveOld!: (response: Response) => void
  vi.stubGlobal(
    'fetch',
    vi
      .fn()
      .mockImplementationOnce(
        () =>
          new Promise<Response>((resolve) => {
            resolveOld = resolve
          }),
      )
      .mockResolvedValueOnce(Response.json(data('second-account'))),
  )
  await act(async () => root.render(React.createElement(Harness, { userId: 12 })))
  await act(async () => root.render(React.createElement(Harness, { userId: 13 })))
  await act(async () => resolveOld(Response.json(data('old-account'))))
  expect(latest.orders[0].id).toBe('second-account')
  await act(async () => root.render(React.createElement(Harness, {})))
  expect(latest.orders).toEqual([])
})

it('reports request errors instead of falling back to local history', async () => {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(null, { status: 500 })))
  await act(async () => root.render(React.createElement(Harness, { userId: 12, page: 2 })))
  expect(latest.error).toBeTruthy()
  expect(latest.loading).toBe(false)
  expect(latest.orders).toEqual([])
})
