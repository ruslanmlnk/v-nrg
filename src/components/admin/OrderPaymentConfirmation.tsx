'use client'

import { useState } from 'react'
import { Button, useDocumentInfo, useForm } from '@payloadcms/ui'

type ConfirmPaymentResponse = {
  error?: string
  ok?: boolean
  emailSent?: boolean
  order?: Record<string, unknown>
  redirectUrl?: string
}

export default function OrderPaymentConfirmation() {
  const { data, id, setData } = useDocumentInfo()
  const { dispatchFields } = useForm()
  const [isConfirming, setIsConfirming] = useState(false)
  const [message, setMessage] = useState('')

  const paymentMethod = data?.paymentMethod
  const paymentApprovalStatus = data?.paymentApprovalStatus
  const paymentStatus = data?.paymentStatus
  const canConfirm =
    Boolean(id) &&
    paymentApprovalStatus !== 'confirmed' &&
    paymentStatus !== 'paid' &&
    (paymentMethod === 'card-online' || paymentMethod === 'monobank-parts')

  if (paymentMethod !== 'card-online' && paymentMethod !== 'monobank-parts') {
    return null
  }

  const handleConfirm = async () => {
    if (!id || isConfirming) {
      return
    }

    setIsConfirming(true)
    setMessage('')

    try {
      const response = await fetch(`/api/orders/${id}/confirm-payment`, {
        method: 'POST',
      })
      const result = (await response.json().catch(() => null)) as ConfirmPaymentResponse | null

      if (!response.ok || !result?.ok) {
        throw new Error(result?.error || 'Не вдалося підтвердити оплату')
      }

      if (result.order) {
        setData({ ...(data || {}), ...result.order })
        // DocumentInfo does not update form inputs. Keep a later Save from
        // overwriting the confirmed payment with the values loaded before it.
        for (const path of [
          'orderStatus',
          'paymentApprovalStatus',
          'paymentStatus',
          'confirmedPaymentAt',
          'monobank',
        ]) {
          dispatchFields({ type: 'UPDATE', path, value: result.order[path] })
        }
      }

      setMessage(
        (result.redirectUrl
          ? `Оплату створено. Посилання: ${result.redirectUrl}`
          : 'Оплату створено.') +
          (result.emailSent
            ? ' Лист клієнту надіслано.'
            : ' Не вдалося надіслати лист клієнту. Передайте посилання вручну.'),
      )
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Не вдалося підтвердити оплату')
    } finally {
      setIsConfirming(false)
    }
  }

  return (
    <div
      style={{
        border: '1px solid var(--theme-elevation-150)',
        borderRadius: 'var(--border-radius-m)',
        marginBottom: 'var(--base)',
        padding: 'var(--base)',
      }}
    >
      <div style={{ marginBottom: 'calc(var(--base) / 2)' }}>
        <strong>Підтвердження оплати адміном</strong>
      </div>
      <Button buttonStyle="primary" disabled={!canConfirm || isConfirming} onClick={handleConfirm}>
        {isConfirming ? 'Підтверджуємо...' : 'Підтвердити і створити оплату'}
      </Button>
      {message ? (
        <div style={{ marginTop: 'calc(var(--base) / 2)', overflowWrap: 'anywhere' }}>
          {message}
        </div>
      ) : null}
    </div>
  )
}
