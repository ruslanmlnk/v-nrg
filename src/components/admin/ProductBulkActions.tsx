'use client'

import { Button } from '@payloadcms/ui'
import { useRef, useState, type ChangeEvent } from 'react'

export default function ProductBulkActions() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState('')
  const [isImporting, setIsImporting] = useState(false)

  const importFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return

    setIsImporting(true)
    setMessage('')
    const formData = new FormData()
    formData.set('file', file)
    const response = await fetch('/api/product-bulk/import', { body: formData, method: 'POST' }).catch(
      () => null,
    )
    const result = (await response?.json().catch(() => null)) as
      | { error?: string; updated?: number }
      | null
    setIsImporting(false)

    if (!response?.ok) {
      setMessage(result?.error || 'Не вдалося імпортувати товари')
      return
    }

    setMessage(`Оновлено товарів: ${result?.updated ?? 0}`)
    window.location.reload()
  }

  return (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
      <Button buttonStyle="secondary" onClick={() => window.location.assign('/api/product-bulk/export')}>
        Експорт CSV
      </Button>
      <Button disabled={isImporting} onClick={() => fileInputRef.current?.click()}>
        {isImporting ? 'Імпортуємо…' : 'Імпорт CSV'}
      </Button>
      <input
        ref={fileInputRef}
        accept=".csv,text/csv"
        hidden
        onChange={importFile}
        type="file"
      />
      {message ? <span>{message}</span> : null}
    </div>
  )
}
