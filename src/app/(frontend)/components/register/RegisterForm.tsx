'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'

import {
  requestRegistrationCode,
  verifyRegistrationCode,
  type RegisterInput,
} from '../../lib/authClient'
import { authInputClasses } from '../auth/styles'
import { Turnstile } from '../security/Turnstile'
import ArrowPillButton from '../ui/ArrowPillButton'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import eyeCrossedIconAsset from '@public/icon/generated/common-eye-crossed.svg'
import eyeIconAsset from '@public/icon/generated/common-eye.svg'

export default function RegisterForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState('')
  const [turnstileResetKey, setTurnstileResetKey] = useState(0)
  const [verificationCode, setVerificationCode] = useState('')
  const [verificationId, setVerificationId] = useState<number | null>(null)
  const [pendingRegistration, setPendingRegistration] = useState<RegisterInput | null>(null)
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

    if (verificationId && pendingRegistration) {
      if (!/^\d{6}$/.test(verificationCode)) {
        setError('Введіть шестизначний код із SMS')
        return
      }

      setError('')
      setIsSubmitting(true)
      const result = await verifyRegistrationCode({
        code: verificationCode,
        verificationId,
      })
      setIsSubmitting(false)

      if (!result.data) {
        setError(result.error || 'Не вдалося підтвердити номер телефону.')
        return
      }

      router.push('/login?registered=1')
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

    if (!turnstileToken) {
      setError('Підтвердьте, що ви не робот.')
      return
    }

    setError('')
    setIsSubmitting(true)

    const registration: RegisterInput = {
      email: formState.email.trim(),
      firstName: formState.firstName.trim(),
      lastName: formState.lastName.trim(),
      password: formState.password,
      phone: normalizedPhone,
    }
    const result = await requestRegistrationCode(registration, turnstileToken)

    setTurnstileResetKey((current) => current + 1)

    setIsSubmitting(false)

    if (!result.data) {
      setError(result.error || 'Не вдалося надіслати SMS. Спробуйте ще раз.')
      return
    }

    setPendingRegistration(registration)
    setVerificationId(result.data.verificationId)
  }

  const resendCode = async () => {
    if (!pendingRegistration || isSubmitting) return
    if (!turnstileToken) {
      setError('Пройдіть перевірку CAPTCHA для повторного SMS.')
      return
    }
    setError('')
    setIsSubmitting(true)
    const result = await requestRegistrationCode(pendingRegistration, turnstileToken)
    setTurnstileResetKey((current) => current + 1)
    setIsSubmitting(false)

    if (!result.data) {
      setError(result.error || 'Не вдалося повторно надіслати SMS.')
      return
    }

    setVerificationId(result.data.verificationId)
    setVerificationCode('')
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
            className={authInputClasses}
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
            className={authInputClasses}
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
            className={authInputClasses}
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
              className={`${authInputClasses} pl-[68px]`}
              autoComplete="tel"
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
              className={`${authInputClasses} pr-12`}
              autoComplete="new-password"
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
              className={`${authInputClasses} pr-12`}
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
              <IconAsset
                src={showConfirmPassword ? eyeIconAsset : eyeCrossedIconAsset}
                width={18}
                height={18}
              />
            </button>
          </span>
        </label>

        {verificationId ? (
          <label className="flex flex-col gap-3">
            <span className="text-[16px] font-medium leading-[165%] text-[#22354A]">
              Код підтвердження з SMS *
            </span>
            <input
              required
              autoComplete="one-time-code"
              className={`${authInputClasses} text-center tracking-[0.35em]`}
              inputMode="numeric"
              maxLength={6}
              placeholder="000000"
              type="text"
              value={verificationCode}
              onChange={(event) =>
                setVerificationCode(event.target.value.replace(/\D/g, '').slice(0, 6))
              }
            />
            <p className="text-[14px] font-medium leading-[165%] text-[#5C7288]">
              Код надіслано на номер {pendingRegistration?.phone}
            </p>
            <button
              type="button"
              className="self-start text-[14px] font-medium text-[#4FACF5] disabled:opacity-60"
              disabled={isSubmitting}
              onClick={resendCode}
            >
              Надіслати код повторно
            </button>
          </label>
        ) : null}

        <Turnstile
          onTokenChange={setTurnstileToken}
          resetKey={turnstileResetKey}
        />

        <ArrowPillButton
          type="submit"
          disabled={isSubmitting}
          isDark
          className="mr-[50px] mt-2 justify-center disabled:cursor-not-allowed disabled:opacity-70 md:mr-[54px]"
        >
          {isSubmitting
            ? verificationId
              ? 'Перевіряємо код...'
              : 'Надсилаємо SMS...'
            : verificationId
              ? 'Підтвердити номер'
              : 'Зареєструватися'}
        </ArrowPillButton>

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

function normalizePhone(value: string) {
  const digits = value.replace(/\D/g, '')

  if (digits.length !== 9) {
    return null
  }

  return `+380${digits}`
}
