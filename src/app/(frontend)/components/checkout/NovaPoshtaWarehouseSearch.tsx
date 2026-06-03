'use client'

import { useEffect, useId, useRef, useState } from 'react'

type WarehouseOption = {
  city: string
  description: string
  label: string
  number: string
  ref: string
}

type WarehouseResponse = {
  error?: string
  warehouses?: WarehouseOption[]
}

export function NovaPoshtaWarehouseSearch({
  onChange,
  value,
}: {
  onChange: (value: string) => void
  value: string
}) {
  const listboxId = useId()
  const [isFocused, setIsFocused] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [options, setOptions] = useState<WarehouseOption[]>([])
  const [error, setError] = useState('')
  const abortControllerRef = useRef<AbortController | null>(null)
  const selectedValueRef = useRef('')

  useEffect(() => {
    const query = value.trim()

    abortControllerRef.current?.abort()

    if (query === selectedValueRef.current) {
      setError('')
      setIsLoading(false)
      return
    }

    if (query.length < 3) {
      setOptions([])
      setError('')
      setIsLoading(false)
      return
    }

    const abortController = new AbortController()
    abortControllerRef.current = abortController
    setIsLoading(true)
    setError('')

    const timeoutId = window.setTimeout(async () => {
      try {
        const response = await fetch(`/api/nova-poshta/warehouses?q=${encodeURIComponent(query)}`, {
          signal: abortController.signal,
        })
        const payload = (await response.json()) as WarehouseResponse

        if (!response.ok) {
          throw new Error(payload.error || 'Не вдалося завантажити відділення')
        }

        setOptions(payload.warehouses ?? [])
      } catch (fetchError) {
        if (abortController.signal.aborted) return

        setOptions([])
        setError(fetchError instanceof Error ? fetchError.message : 'Не вдалося завантажити відділення')
      } finally {
        if (!abortController.signal.aborted) {
          setIsLoading(false)
        }
      }
    }, 700)

    return () => {
      window.clearTimeout(timeoutId)
      abortController.abort()
    }
  }, [value])

  const showDropdown =
    isFocused && (isLoading || Boolean(error) || options.length > 0 || value.trim().length >= 3)

  return (
    <div className="relative">
      <input
        value={value}
        onBlur={() => {
          window.setTimeout(() => setIsFocused(false), 120)
        }}
        onChange={(event) => {
          if (event.target.value !== selectedValueRef.current) {
            selectedValueRef.current = ''
          }

          onChange(event.target.value)
        }}
        onFocus={() => setIsFocused(true)}
        placeholder="Введіть місто або номер відділення"
        className="h-[50px] w-full rounded-[16px] border border-[#D5E0E8] bg-white px-4 text-[14px] font-medium leading-[165%] text-[#22354A] outline-none placeholder:text-[#B7CAD1] focus:border-[#4FACF5] sm:px-6 sm:text-[18px]"
        role="combobox"
        aria-autocomplete="list"
        aria-controls={listboxId}
        aria-expanded={showDropdown}
      />

      {showDropdown ? (
        <div
          id={listboxId}
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 max-h-[260px] overflow-auto rounded-[16px] border border-[#D5E0E8] bg-white p-2 shadow-[0_18px_48px_rgba(34,53,74,0.12)]"
        >
          {isLoading ? (
            <div className="px-4 py-3 text-[14px] font-medium leading-[165%] text-[#B7CAD1]">
              Шукаємо відділення...
            </div>
          ) : null}

          {!isLoading && error ? (
            <div className="px-4 py-3 text-[14px] font-medium leading-[165%] text-[#B7CAD1]">
              {error}
            </div>
          ) : null}

          {!isLoading && !error && options.length === 0 ? (
            <div className="px-4 py-3 text-[14px] font-medium leading-[165%] text-[#B7CAD1]">
              Почніть вводити місто, наприклад Київ або Львів
            </div>
          ) : null}

          {!isLoading && !error
            ? options.map((option) => (
                <button
                  key={option.ref}
                  type="button"
                  role="option"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => {
                    selectedValueRef.current = option.label
                    onChange(option.label)
                    setIsFocused(false)
                  }}
                  className="flex w-full flex-col gap-1 rounded-[12px] px-4 py-3 text-left transition-colors hover:bg-[#F5F8F9]"
                >
                  <span className="text-[15px] font-medium leading-[145%] text-[#22354A]">
                    {option.description}
                  </span>
                  {option.city ? (
                    <span className="text-[13px] font-medium leading-[145%] text-[#B7CAD1]">
                      {option.city}
                    </span>
                  ) : null}
                </button>
              ))
            : null}
        </div>
      ) : null}
    </div>
  )
}
