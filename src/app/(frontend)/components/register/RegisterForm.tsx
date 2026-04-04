'use client'

import Link from 'next/link'
import { useState } from 'react'

const inputClasses =
  'h-[55px] w-full rounded-[14px] border border-[#EFF3F7] bg-[#F5F8F9] px-4 text-[16px] font-medium leading-[165%] text-[#22354A] outline-none transition-colors placeholder:text-[#B7CAD1] focus:border-[#4FACF5]'

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="w-full rounded-[20px] bg-white p-8 shadow-[0_24px_64px_rgba(34,53,74,0.08)]">
      <form className="flex flex-col gap-4" noValidate>
        <label className="flex flex-col gap-3">
          <span className="text-[16px] font-medium leading-[165%] text-[#22354A]">Ім&apos;я *</span>
          <input type="text" placeholder="Введіть ваше ім&apos;я" className={inputClasses} autoComplete="given-name" />
        </label>

        <label className="flex flex-col gap-3">
          <span className="text-[16px] font-medium leading-[165%] text-[#22354A]">Прізвище *</span>
          <input type="text" placeholder="Введіть ваше прізвище" className={inputClasses} autoComplete="family-name" />
        </label>

        <label className="flex flex-col gap-3">
          <span className="text-[16px] font-medium leading-[165%] text-[#22354A]">Email *</span>
          <input type="email" placeholder="Введіть ваш email" className={inputClasses} autoComplete="email" />
        </label>

        <label className="flex flex-col gap-3">
          <span className="text-[16px] font-medium leading-[165%] text-[#22354A]">Телефон *</span>

          <span className="relative block">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[16px] font-medium leading-[165%] text-[#B7CAD1]">
              +380
            </span>
            <input type="tel" placeholder="" className={`${inputClasses} pl-[68px]`} autoComplete="tel" inputMode="tel" />
          </span>
        </label>

        <label className="flex flex-col gap-3">
          <span className="text-[16px] font-medium leading-[165%] text-[#22354A]">Пароль *</span>

          <span className="relative block">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="12345"
              className={`${inputClasses} pr-12`}
              autoComplete="new-password"
            />

            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              aria-label={showPassword ? 'Приховати пароль' : 'Показати пароль'}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D3DCE4] transition-colors hover:text-[#4FACF5]"
            >
              <EyeIcon crossed={!showPassword} />
            </button>
          </span>
        </label>

        <label className="flex flex-col gap-3">
          <span className="text-[16px] font-medium leading-[165%] text-[#22354A]">Підтвердження пароля *</span>

          <span className="relative block">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="12345"
              className={`${inputClasses} pr-12`}
              autoComplete="new-password"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword((current) => !current)}
              aria-label={showConfirmPassword ? 'Приховати підтвердження пароля' : 'Показати підтвердження пароля'}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D3DCE4] transition-colors hover:text-[#4FACF5]"
            >
              <EyeIcon crossed={!showConfirmPassword} />
            </button>
          </span>
        </label>

        <button
          type="submit"
          className="relative mt-2 flex h-[50px] items-center justify-center rounded-full bg-[#22354A] pl-6 pr-[70px] text-white transition-transform duration-200 hover:-translate-y-0.5"
        >
          <span className="text-[16px] font-medium leading-[145%]">Зареєструватися</span>

          <span className="absolute right-[3px] top-1/2 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-[#4FACF5]">
            <ArrowIcon />
          </span>
        </button>
      </form>

      <p className="mt-6 text-center text-[16px] font-medium leading-[165%] text-[#22354A]">
        Вже маєте обліковий запис?{' '}
        <Link href="/login" className="text-[#4FACF5]">
          Увійти
        </Link>
      </p>
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.75 9H14.25" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9.75 4.5L14.25 9L9.75 13.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function EyeIcon({ crossed }: { crossed: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.5 9C2.7 5.925 5.475 3.75 9 3.75C12.525 3.75 15.3 5.925 16.5 9C15.3 12.075 12.525 14.25 9 14.25C5.475 14.25 2.7 12.075 1.5 9Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="9" r="2.25" stroke="currentColor" strokeWidth="1.4" />
      {crossed ? <path d="M3 15L15 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /> : null}
    </svg>
  )
}
