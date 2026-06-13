'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'

import { loginUser } from '../../lib/authClient'
import { authInputClasses } from '../auth/styles'
import { useCommerce } from '../providers/CommerceProvider'
import ArrowPillButton from '../ui/ArrowPillButton'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import eyeCrossedIconAsset from '@public/icon/generated/common-eye-crossed.svg'
import eyeIconAsset from '@public/icon/generated/common-eye.svg'

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
            className={authInputClasses}
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
              className={`${authInputClasses} pr-12`}
              autoComplete="current-password"
            />

            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              aria-label={showPassword ? 'Приховати пароль' : 'Показати пароль'}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D3DCE4] transition-colors hover:text-[#4FACF5]"
            >
              <IconAsset
                src={showPassword ? eyeIconAsset : eyeCrossedIconAsset}
                width={18}
                height={18}
              />
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

        <ArrowPillButton
          type="submit"
          disabled={isSubmitting}
          isDark
          className="mr-[50px] mt-2 justify-center disabled:cursor-not-allowed disabled:opacity-70 md:mr-[54px]"
        >
          {isSubmitting ? 'Входимо...' : 'Увійти'}
        </ArrowPillButton>

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
