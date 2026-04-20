'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'

import { loginUser } from '../../lib/authClient'
import { useCommerce } from '../../components/providers/CommerceProvider'

const inputClasses =
  'h-[55px] w-full rounded-[14px] border border-[#EFF3F7] bg-[#F5F8F9] px-4 text-[16px] font-medium leading-[165%] text-[#22354A] outline-none transition-colors placeholder:text-[#B7CAD1] focus:border-[#4FACF5]'

export default function LoginForm() {
  const router = useRouter()
  const { signIn } = useCommerce()
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    setError('')
    setIsSubmitting(true)

    const result = await loginUser({
      email: formState.email.trim(),
      password: formState.password,
    })

    setIsSubmitting(false)

    if (!result.data) {
      setError(result.error || 'Не вдалося увійти. Спробуйте ще раз.')
      return
    }

    signIn(result.data)
    router.push('/account')
  }

  return (
    <div className="w-full rounded-[20px] bg-white p-8 shadow-[0_24px_64px_rgba(34,53,74,0.08)]">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-3">
          <span className="text-[16px] font-medium leading-[165%] text-[#22354A]">Email</span>
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
          <span className="text-[16px] font-medium leading-[165%] text-[#22354A]">Пароль</span>

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
              autoComplete="current-password"
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

        <div className="flex justify-end">
          <Link
            href="/info?topic=password-recovery"
            className="text-[14px] font-medium leading-[165%] text-[#4FACF5] md:text-[16px]"
          >
            Забули пароль?
          </Link>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="relative mt-2 flex h-[50px] items-center justify-center rounded-full bg-[#22354A] pl-6 pr-[70px] text-white transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span className="text-[16px] font-medium leading-[145%]">
            {isSubmitting ? 'Входимо...' : 'Увійти'}
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
        Немає облікового запису?{' '}
        <Link href="/register" className="text-[#4FACF5]">
          Зареєструватися
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
