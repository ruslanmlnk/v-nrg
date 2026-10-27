'use client'

import Script from 'next/script'
import { useCallback, useEffect, useRef } from 'react'

type TurnstileApi = {
  remove: (widgetId: string) => void
  render: (container: HTMLElement, options: Record<string, unknown>) => string
  reset: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

export function Turnstile({
  onTokenChange,
  resetKey = 0,
  theme = 'light',
}: {
  onTokenChange: (token: string) => void
  resetKey?: number
  theme?: 'auto' | 'dark' | 'light'
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  const renderWidget = useCallback(() => {
    if (!siteKey || !containerRef.current || !window.turnstile || widgetIdRef.current) return

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      callback: (token: string) => onTokenChange(token),
      'error-callback': () => onTokenChange(''),
      'expired-callback': () => onTokenChange(''),
      sitekey: siteKey,
      // The normal widget is a fixed 300px wide; fall back to compact (150px) where it would be clipped.
      size: containerRef.current.offsetWidth < 300 ? 'compact' : 'normal',
      theme,
    })
  }, [onTokenChange, siteKey, theme])

  useEffect(() => {
    renderWidget()
  }, [renderWidget])

  useEffect(() => {
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current)
      onTokenChange('')
    }
  }, [onTokenChange, resetKey])

  useEffect(
    () => () => {
      if (widgetIdRef.current && window.turnstile) window.turnstile.remove(widgetIdRef.current)
      widgetIdRef.current = null
    },
    [],
  )

  if (!siteKey) {
    return <p className="text-sm text-[#D94F4F]">Cloudflare Turnstile не налаштовано.</p>
  }

  return (
    // contain: the fixed 300px iframe must not widen parent grid/flex tracks (horizontal scroll on mobile);
    // leading-0: removes the inline-iframe baseline gap that made the box jump from 65px to 72px.
    <div className="min-h-[65px] max-w-full overflow-hidden leading-[0] [contain:inline-size]">
      <Script
        id="cloudflare-turnstile"
        onLoad={renderWidget}
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
      />
      <div ref={containerRef} />
    </div>
  )
}
