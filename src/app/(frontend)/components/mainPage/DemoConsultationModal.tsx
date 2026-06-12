'use client'

import { FormEvent, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

type DemoConsultationModalProps = {
  isOpen: boolean
  onClose: () => void
}

const inputClassName =
  'w-full rounded-[16px] bg-[#F5F8F9] px-6 py-4 text-[18px] font-medium leading-[165%] text-[#22354A] outline-none placeholder:text-[#B7CAD1] focus:ring-2 focus:ring-[#4FACF5]'

export default function DemoConsultationModal({ isOpen, onClose }: DemoConsultationModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleClose = useCallback(() => {
    setIsSubmitted(false)
    onClose()
  }, [onClose])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose()
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleClose, isOpen])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#22354A]/55 p-4 backdrop-blur-[2px]"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) handleClose()
      }}
      role="presentation"
    >
      <section
        aria-labelledby="demo-consultation-title"
        aria-modal="true"
        className="my-auto w-full max-w-[500px] overflow-hidden rounded-[20px] bg-white shadow-[0_24px_80px_rgba(34,53,74,0.25)]"
        role="dialog"
      >
        <header className="flex items-center justify-between border-b border-[#D5E0E8] px-6 py-5 sm:px-8 sm:py-6">
          <h2
            id="demo-consultation-title"
            className="text-[20px] font-medium leading-[145%] text-[#22354A] sm:text-[22px]"
          >
            Запис на консультацію
          </h2>
          <button
            aria-label="Закрити форму"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#22354A] transition-colors hover:bg-[#F5F8F9]"
            onClick={handleClose}
            type="button"
          >
            <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24">
              <path
                d="M18 6 6 18M6 6l12 12"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </header>

        {isSubmitted ? (
          <div className="flex flex-col items-center px-6 py-12 text-center sm:px-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4FACF5] text-white">
              <svg aria-hidden="true" fill="none" height="28" viewBox="0 0 24 24" width="28">
                <path
                  d="m5 12 4 4L19 6"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-[22px] font-medium leading-[145%] text-[#22354A]">
              Дякуємо за заявку
            </h3>
            <p className="mt-3 text-[16px] font-medium leading-[165%] text-[#60788A]">
              Наш менеджер зв’яжеться з вами найближчим часом.
            </p>
            <button
              className="mt-8 w-full rounded-[40px] bg-[#4FACF5] px-6 py-3 text-[18px] font-medium leading-[145%] text-white"
              onClick={handleClose}
              type="button"
            >
              Закрити
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-6 px-6 py-6 sm:px-8" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-[18px] font-medium leading-[165%] text-[#22354A]">
                <span>
                  Ім&apos;я <span className="text-[#4FACF5]">*</span>
                </span>
                <input
                  autoFocus
                  className={inputClassName}
                  name="name"
                  placeholder="Введіть ваше ім’я"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-[18px] font-medium leading-[165%] text-[#22354A]">
                <span>
                  Телефон <span className="text-[#4FACF5]">*</span>
                </span>
                <input
                  autoComplete="tel"
                  className={inputClassName}
                  inputMode="tel"
                  name="phone"
                  pattern="[\d\s()+-]{10,}"
                  placeholder="+380"
                  required
                  type="tel"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-[18px] font-medium leading-[165%] text-[#22354A]">
              Коментар
              <textarea
                className={`${inputClassName} min-h-[124px] resize-none`}
                name="comment"
                placeholder="Зручний час для зв’язку, додаткові побажання..."
              />
            </label>

            <button
              className="w-full rounded-[40px] bg-[#4FACF5] px-6 py-3 text-[18px] font-medium leading-[145%] text-white transition-colors hover:bg-[#409CE0]"
              type="submit"
            >
              Записатися на консультацію
            </button>

            <p className="mx-auto max-w-[330px] text-center text-[16px] font-medium leading-[165%] text-[#22354A]">
              Натискаючи кнопку, ви погоджуєтесь з{' '}
              <Link className="text-[#4FACF5] hover:underline" href="/privacy">
                політикою конфіденційності
              </Link>
            </p>
          </form>
        )}
      </section>
    </div>
  )
}
