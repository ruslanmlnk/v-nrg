'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

type GalleryItem = {
  alt: string
  main: string
  thumb: string
  video: boolean
}

export function ProductGalleryLightbox({
  activeIndex,
  items,
  onClose,
  onSelect,
}: {
  activeIndex: number
  items: GalleryItem[]
  onClose: () => void
  onSelect: (index: number) => void
}) {
  const touchStartX = useRef<number | null>(null)
  const activeItem = items[activeIndex]
  const hasMultipleItems = items.length > 1

  const selectPrevious = () => {
    onSelect((activeIndex - 1 + items.length) % items.length)
  }

  const selectNext = () => {
    onSelect((activeIndex + 1) % items.length)
  }

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft' && hasMultipleItems) selectPrevious()
      if (event.key === 'ArrowRight' && hasMultipleItems) selectNext()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  if (!activeItem) return null

  return (
    <div
      aria-label="Перегляд галереї товару"
      aria-modal="true"
      className="fixed inset-0 z-[200] flex flex-col bg-[#142233]/95 px-3 pb-[max(12px,env(safe-area-inset-bottom))] pt-[max(12px,env(safe-area-inset-top))] backdrop-blur-sm sm:px-6"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose()
      }}
      role="dialog"
    >
      <div className="flex min-h-12 items-center justify-between gap-4 text-white">
        <span className="text-sm font-medium sm:text-base">
          {activeIndex + 1} / {items.length}
        </span>
        <button
          autoFocus
          type="button"
          aria-label="Закрити галерею"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[34px] font-light leading-none transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#4FACF5]"
          onClick={onClose}
        >
          ×
        </button>
      </div>

      <div
        className="pointer-events-none relative flex min-h-0 flex-1 touch-pan-y select-none items-center justify-center"
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0]?.clientX ?? null
        }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null || !hasMultipleItems) return

          const distance = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current
          touchStartX.current = null

          if (Math.abs(distance) < 50) return
          if (distance > 0) selectPrevious()
          else selectNext()
        }}
      >
        {/* The native image keeps its real rendered box clickable while the surrounding overlay stays clickable. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={activeItem.main}
          alt={activeItem.alt}
          className="pointer-events-auto max-h-full max-w-full object-contain"
        />

        {hasMultipleItems ? (
          <>
            <LightboxArrow direction="previous" onClick={selectPrevious} />
            <LightboxArrow direction="next" onClick={selectNext} />
          </>
        ) : null}
      </div>

      {hasMultipleItems ? (
        <div className="mx-auto flex max-w-full gap-2 overflow-x-auto px-1 pb-1 pt-3 sm:gap-3">
          {items.map((item, index) => (
            <button
              type="button"
              key={`${item.main}-${index}`}
              aria-label={`Відкрити зображення ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => onSelect(index)}
              className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white/10 sm:h-20 sm:w-20 ${
                index === activeIndex
                  ? 'ring-2 ring-[#4FACF5] ring-offset-2 ring-offset-[#142233]'
                  : 'opacity-65 hover:opacity-100'
              }`}
            >
              <Image src={item.thumb} alt="" fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function LightboxArrow({
  direction,
  onClick,
}: {
  direction: 'next' | 'previous'
  onClick: () => void
}) {
  const isPrevious = direction === 'previous'

  return (
    <button
      type="button"
      aria-label={isPrevious ? 'Попереднє зображення' : 'Наступне зображення'}
      onClick={onClick}
      className={`absolute top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[38px] leading-none text-[#22354A] shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4FACF5] sm:flex ${
        isPrevious ? 'left-2 lg:left-6' : 'right-2 lg:right-6'
      }`}
    >
      <span className="-translate-y-0.5">{isPrevious ? '‹' : '›'}</span>
    </button>
  )
}
