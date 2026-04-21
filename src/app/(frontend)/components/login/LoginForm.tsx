'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'

import { loginUser } from '../../lib/authClient'
import { useCommerce } from '../providers/CommerceProvider'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import arrowIconAsset from '@public/icon/generated/login-components-login-form-arrow.svg'
import eyeCrossedIconAsset from '@public/icon/generated/common-eye-crossed.svg'
import eyeIconAsset from '@public/icon/generated/common-eye.svg'

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

        <button
          type="submit"
          disabled={isSubmitting}
          className="relative mt-2 flex h-[50px] items-center justify-center rounded-full bg-[#22354A] pl-6 pr-[70px] text-white transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span className="text-[16px] font-medium leading-[145%]">
            {isSubmitting ? 'Входимо...' : 'Увійти'}
          </span>

          <span className="absolute right-[3px] top-1/2 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-[#4FACF5]">
            <IconAsset src={arrowIconAsset} width={18} height={18} />
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
