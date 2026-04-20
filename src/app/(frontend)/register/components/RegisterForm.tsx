'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'

import { registerUser } from '../../lib/authClient'
import { useCommerce } from '../../components/providers/CommerceProvider'

const inputClasses =
  'h-[55px] w-full rounded-[14px] border border-[#EFF3F7] bg-[#F5F8F9] px-4 text-[16px] font-medium leading-[165%] text-[#22354A] outline-none transition-colors placeholder:text-[#B7CAD1] focus:border-[#4FACF5]'

export default function RegisterForm() {
  const router = useRouter()
  const { signIn } = useCommerce()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    passwordConfirmation: '',
    phone: '',
  })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    const normalizedPhone = normalizePhone(formState.phone)

    if (formState.password !== formState.passwordConfirmation) {
      setError('Паролі не співпадають')
      return
    }

    if (!normalizedPhone) {
      setError('Введіть коректний номер телефону')
      return
    }

    setError('')
    setIsSubmitting(true)

    const result = await registerUser({
      email: formState.email.trim(),
      firstName: formState.firstName.trim(),
      lastName: formState.lastName.trim(),
      password: formState.password,
      phone: normalizedPhone,
    })

    setIsSubmitting(false)

    if (!result.data) {
      setError(result.error || 'Не вдалося зареєструватися. Спробуйте ще раз.')
      return
    }

    signIn(result.data)
    router.push('/account')
  }

  return (
    <div className="w-full rounded-[20px] bg-white p-8 shadow-[0_24px_64px_rgba(34,53,74,0.08)]">
      <form className="flex flex-col gap-4" noValidate onSubmit={handleSubmit}>
        <label className="flex flex-col gap-3">
          <span className="text-[16px] font-medium leading-[165%] text-[#22354A]">Ім&apos;я *</span>
          <input
            required
            type="text"
            value={formState.firstName}
            onChange={(event) =>
              setFormState((current) => ({ ...current, firstName: event.target.value }))
            }
            placeholder="Введіть ваше ім'я"
            className={inputClasses}
            autoComplete="given-name"
          />
        </label>

        <label className="flex flex-col gap-3">
          <span className="text-[16px] font-medium leading-[165%] text-[#22354A]">Прізвище *</span>
          <input
            required
            type="text"
            value={formState.lastName}
            onChange={(event) =>
              setFormState((current) => ({ ...current, lastName: event.target.value }))
            }
            placeholder="Введіть ваше прізвище"
            className={inputClasses}
            autoComplete="family-name"
          />
        </label>

        <label className="flex flex-col gap-3">
          <span className="text-[16px] font-medium leading-[165%] text-[#22354A]">Email *</span>
          <input
            required
            type="email"
            value={formState.email}
            onChange={(event) =>
              setFormState((current) => ({ ...current, email: event.target.value }))
            }
            placeholder="Введіть ваш email"
            className={inputClasses}
            autoComplete="email"
          />
        </label>

        <label className="flex flex-col gap-3">
          <span className="text-[16px] font-medium leading-[165%] text-[#22354A]">Телефон *</span>

          <span className="relative block">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[16px] font-medium leading-[165%] text-[#B7CAD1]">
              +380
            </span>
            <input
              required
              type="tel"
              value={formState.phone}
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  phone: event.target.value.replace(/\D/g, '').slice(0, 9),
                }))
              }
              placeholder="XX XXX XX XX"
              className={`${inputClasses} pl-[68px]`}
              autoComplete="tel-national"
              inputMode="numeric"
            />
          </span>
        </label>

        <label className="flex flex-col gap-3">
          <span className="text-[16px] font-medium leading-[165%] text-[#22354A]">Пароль *</span>

          <span className="relative block">
            <input
              required
              type={showPassword ? 'text' : 'password'}
              value={formState.password}
              onChange={(event) =>
                setFormState((current) => ({ ...current, password: event.target.value }))
              }
              placeholder="Введіть пароль"
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
          <span className="text-[16px] font-medium leading-[165%] text-[#22354A]">
            Підтвердження пароля *
          </span>

          <span className="relative block">
            <input
              required
              type={showConfirmPassword ? 'text' : 'password'}
              value={formState.passwordConfirmation}
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  passwordConfirmation: event.target.value,
                }))
              }
              placeholder="Повторіть пароль"
              className={`${inputClasses} pr-12`}
              autoComplete="new-password"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword((current) => !current)}
              aria-label={
                showConfirmPassword
                  ? 'Приховати підтвердження пароля'
                  : 'Показати підтвердження пароля'
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D3DCE4] transition-colors hover:text-[#4FACF5]"
            >
              <EyeIcon crossed={!showConfirmPassword} />
            </button>
          </span>
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="relative mt-2 flex h-[50px] items-center justify-center rounded-full bg-[#22354A] pl-6 pr-[70px] text-white transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span className="text-[16px] font-medium leading-[145%]">
            {isSubmitting ? 'Створюємо акаунт...' : 'Зареєструватися'}
          </span>

          <span className="absolute right-[3px] top-1/2 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-[#4FACF5]">
            <ArrowIcon />
          </span>
        </button>

        {error ? (
          <p className="text-[14px] font-medium leading-[165%] text-[#D94F4F]">{error}</p>
        ) : null}
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
      <path
        d="M9.75 4.5L14.25 9L9.75 13.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
      {crossed ? (
        <path d="M3 15L15 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      ) : null}
    </svg>
  )
}

function normalizePhone(value: string) {
  const digits = value.replace(/\D/g, '')

  if (digits.length !== 9) {
    return null
  }

  return `+380${digits}`
}
