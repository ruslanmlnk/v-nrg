'use client'

import { useCallback, useEffect, useState } from 'react'
import type { AccountOrdersPage } from '@/lib/accountOrders'

export function useAccountOrders(userId: number | undefined, page: number) {
  const [revision, setRevision] = useState(0)
  const refresh = useCallback(() => setRevision((value) => value + 1), [])
  const [state, setState] = useState<{
    userId?: number
    page: number
    data?: AccountOrdersPage
    error?: string
    loading: boolean
  }>({ page: 1, loading: true })

  useEffect(() => {
    if (userId === undefined) return
    let disposed = false
    const request = new AbortController()
    const load = async () => {
      setState((current) => ({
        userId,
        page,
        loading: true,
        data: current.userId === userId && current.page === page ? current.data : undefined,
      }))
      try {
        const response = await fetch(`/api/orders/my-orders?page=${page}`, {
          credentials: 'same-origin',
          cache: 'no-store',
          signal: request.signal,
        })
        if (!response.ok) throw new Error('Не вдалося завантажити замовлення. Спробуйте ще раз.')
        const data: AccountOrdersPage = await response.json()
        if (!disposed && !request.signal.aborted) setState({ userId, page, data, loading: false })
      } catch (error) {
        if (!disposed && !request.signal.aborted)
          setState({
            userId,
            page,
            loading: false,
            error: error instanceof Error ? error.message : 'Помилка завантаження замовлень.',
          })
      }
    }
    void load()
    return () => {
      disposed = true
      request.abort()
    }
  }, [userId, page, revision])

  const current = state.userId === userId && state.page === page && userId !== undefined
  return {
    orders: current ? (state.data?.orders ?? []) : [],
    totalDocs: current ? (state.data?.totalDocs ?? 0) : 0,
    totalPages: current ? (state.data?.totalPages ?? 1) : 1,
    loading: !current || state.loading,
    error: current ? state.error : undefined,
    refresh,
  }
}
