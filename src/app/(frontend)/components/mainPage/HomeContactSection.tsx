'use client'

import Link from 'next/link'
import { useState, type FormEvent, type ReactNode } from 'react'

import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import facebookIconAsset from '@public/icon/generated/contacts-contacts-page-facebook.svg'
import instagramIconAsset from '@public/icon/generated/contacts-contacts-page-instagram.svg'
import telegramIconAsset from '@public/icon/generated/contacts-contacts-page-telegram.svg'
import whatsappIconAsset from '@public/icon/generated/contacts-contacts-page-whatsapp.svg'

const fieldClasses =
  'w-full rounded-2xl bg-white px-6 py-4 text-[18px] font-medium leading-[165%] text-[#22354A] outline-none placeholder:text-[#B7CAD1]'

export default function HomeContactSection() {
  const [formState, setFormState] = useState({
    email: '',
    message: '',
    name: '',
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Запит з форми контактів від ${formState.name}`)
    const body = encodeURIComponent(
      `Ім'я: ${formState.name}\nEmail: ${formState.email}\n\nПовідомлення:\n${formState.message}`,
    )

    window.location.href = `mailto:0870758@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="px-6 py-[100px] lg:px-[100px]">
      <div className="mx-auto flex max-w-[1240px] flex-col items-stretch gap-12 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col justify-center gap-6">
          <div className="flex flex-col gap-6 border-b border-[#D5E0E8] pb-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-[36px] font-medium leading-[125%] text-[#22354A] md:text-[48px]">
                Зв&apos;яжіться з нами
              </h2>
            </div>

            <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
              Щоб отримати консультацію, дізнатися більше про обладнання або домовитися про
              демонстрацію, залиште заявку онлайн або зв&apos;яжіться з нами у робочий час
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-[24px] font-bold leading-[125%] text-[#22354A]">
              Ми в соцмережах:
            </div>

            <div className="flex items-center gap-3">
              <SocialCircle href="https://t.me/" label="Telegram">
                <IconAsset src={telegramIconAsset} width={20} height={20} />
              </SocialCircle>
              <SocialCircle href="https://wa.me/380975468820" label="WhatsApp">
                <IconAsset src={whatsappIconAsset} width={20} height={20} />
              </SocialCircle>
              <SocialCircle href="https://instagram.com/" label="Instagram">
                <IconAsset src={instagramIconAsset} width={20} height={20} />
              </SocialCircle>
              <SocialCircle href="https://facebook.com/" label="Facebook">
                <IconAsset src={facebookIconAsset} width={20} height={20} />
              </SocialCircle>
            </div>
          </div>
        </div>

        <div className="w-full rounded-3xl bg-[#22354A] p-8 text-white lg:w-[610px] lg:shrink-0">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <h2 className="text-[24px] font-medium leading-[145%]">Написати нам</h2>

            <div className="flex flex-col gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <ContactField label="Ім'я" required>
                  <input
                    required
                    value={formState.name}
                    onChange={(event) =>
                      setFormState((current) => ({ ...current, name: event.target.value }))
                    }
                    placeholder="Введіть ваше ім'я"
                    className={fieldClasses}
                  />
                </ContactField>

                <ContactField label="Email" required>
                  <input
                    required
                    type="email"
                    value={formState.email}
                    onChange={(event) =>
                      setFormState((current) => ({ ...current, email: event.target.value }))
                    }
                    placeholder="Введіть ваш email"
                    className={fieldClasses}
                  />
                </ContactField>
              </div>

              <ContactField label="Повідомлення">
                <textarea
                  required
                  value={formState.message}
                  onChange={(event) =>
                    setFormState((current) => ({ ...current, message: event.target.value }))
                  }
                  placeholder="Напишіть нам"
                  className={`${fieldClasses} h-[116px] resize-none`}
                />
              </ContactField>
            </div>

            <div className="flex items-center">
              <button
                type="submit"
                className="flex rounded-full bg-white px-6 py-3 text-[18px] font-medium leading-[165%] text-[#22354A]"
              >
                Надіслати
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function ContactField({
  children,
  label,
  required,
}: {
  children: ReactNode
  label: string
  required?: boolean
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[18px] font-medium leading-[165%] text-white">
        {label}
        {required ? <span className="text-[#4FACF5]"> *</span> : null}
      </span>
      {children}
    </label>
  )
}

function SocialCircle({
  children,
  href,
  label,
}: {
  children: ReactNode
  href: string
  label: string
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4FACF5] text-white"
    >
      {children}
    </Link>
  )
}
