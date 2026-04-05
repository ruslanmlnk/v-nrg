'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { useState, type FormEvent, type ReactNode } from 'react'

import SiteFooter from '../SiteFooter'

export default function ContactsPage() {
  const [formState, setFormState] = useState({
    email: '',
    message: '',
    name: '',
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Запит з форми контактів від ${formState.name}`)
    const body = encodeURIComponent(`Ім'я: ${formState.name}\nEmail: ${formState.email}\n\nПовідомлення:\n${formState.message}`)

    window.location.href = `mailto:0870758@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
        <section className="flex min-h-[268px] flex-col items-center justify-center rounded-[20px] bg-[#22354A] px-6 py-14 text-center text-white">
          <div className="flex max-w-[760px] flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-2 text-[16px] font-bold uppercase leading-[145%]">
              <Link href="/">Головна</Link>
              <span>/</span>
              <span className="text-[#4FACF5]">Контакти</span>
            </div>
            <h1 className="text-[36px] font-medium leading-[145%] md:text-[48px]">Зв&apos;яжіться з нами</h1>
            <p className="text-[16px] font-medium leading-[165%] text-[#D5E0E8] md:text-[18px]">
              Маєте запитання щодо обладнання або співпраці? Наша команда готова допомогти
            </p>
          </div>
        </section>

        <section className="-mt-20 px-8">
          <div className="grid gap-px overflow-hidden rounded-[20px] bg-[#74C2FA] shadow-[0_20px_60px_rgba(34,53,74,0.08)] md:grid-cols-3">
            <ContactPill
              title="+38 (097) 546-88-20"
              subtitle="Телефон"
              href="tel:+380975468820"
              icon={<PhoneIcon />}
            />
            <ContactPill
              title="0870758@gmail.com"
              subtitle="Email"
              href="mailto:0870758@gmail.com"
              icon={<MailIcon />}
            />
            <ContactPill
              title="м. Бровари, вул. Підприємницька, 22"
              subtitle="Адреса"
              href="https://maps.google.com/?q=Бровари%20Підприємницька%2022"
              icon={<PinIcon />}
            />
          </div>
        </section>

        <section className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,580px)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col gap-8 px-2 pt-4"
          >
            <div className="flex max-w-[520px] flex-col gap-4">
              <h2 className="text-[36px] font-medium leading-[145%] text-[#22354A] md:text-[48px]">Зв&apos;яжіться з нами</h2>
              <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                Щоб отримати консультацію, дізнатися більше про обладнання або домовитися про демонстрацію,
                залиште заявку онлайн або зв&apos;яжіться з нами у робочий час
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="text-[28px] font-medium leading-[145%] text-[#22354A]">Ми в соцмережах:</div>
              <div className="flex flex-wrap items-center gap-3">
                <SocialCircle href="https://t.me/" label="Telegram">
                  <TelegramIcon />
                </SocialCircle>
                <SocialCircle href="https://instagram.com/" label="Instagram">
                  <InstagramIcon />
                </SocialCircle>
                <SocialCircle href="https://facebook.com/" label="Facebook">
                  <FacebookIcon />
                </SocialCircle>
                <SocialCircle href="https://wa.me/380975468820" label="WhatsApp">
                  <WhatsappIcon />
                </SocialCircle>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.08, duration: 0.35 }}
            className="rounded-[20px] bg-[#22354A] p-8 text-white shadow-[0_20px_60px_rgba(34,53,74,0.08)]"
          >
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <h2 className="text-[32px] font-medium leading-[145%]">Написати нам</h2>

              <div className="grid gap-5 md:grid-cols-2">
                <ContactField label="Ім'я *">
                  <input
                    required
                    value={formState.name}
                    onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
                    placeholder="Введіть ваше ім'я"
                    className={`${contactFieldClasses} h-[56px]`}
                  />
                </ContactField>

                <ContactField label="Email *">
                  <input
                    required
                    type="email"
                    value={formState.email}
                    onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
                    placeholder="Введіть ваш email"
                    className={`${contactFieldClasses} h-[56px]`}
                  />
                </ContactField>
              </div>

              <ContactField label="Повідомлення">
                <textarea
                  required
                  value={formState.message}
                  onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
                  placeholder="Напишіть нам"
                  className={`${contactFieldClasses} min-h-[124px] resize-none py-5`}
                />
              </ContactField>

              <button
                type="submit"
                className="relative mt-2 flex h-[50px] items-center justify-center rounded-full bg-white pl-6 pr-[70px] text-[#22354A]"
              >
                <span className="text-[18px] font-medium leading-[145%]">Надіслати</span>
                <span className="absolute right-[3px] top-1/2 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-[#4FACF5] text-white">
                  <ArrowIcon />
                </span>
              </button>
            </form>
          </motion.div>
        </section>
      </div>

      <SiteFooter />
    </div>
  )
}

function ContactPill({
  href,
  icon,
  subtitle,
  title,
}: {
  href: string
  icon: ReactNode
  subtitle: string
  title: string
}) {
  return (
    <Link href={href} className="flex flex-col items-center justify-center gap-3 bg-[#4FACF5] px-8 py-8 text-center text-white">
      <span className="text-white">{icon}</span>
      <span className="text-[16px] font-medium leading-[165%] text-[#D5E0E8]">{subtitle}</span>
      <span className="text-[18px] font-medium leading-[165%]">{title}</span>
    </Link>
  )
}

function ContactField({
  children,
  label,
}: {
  children: ReactNode
  label: string
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[16px] font-medium leading-[165%] text-white">{label}</span>
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
      className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#4FACF5] text-white"
    >
      {children}
    </Link>
  )
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 16.92V19.92C21.0011 20.1981 20.9442 20.4733 20.8329 20.7282C20.7217 20.983 20.5585 21.2121 20.3534 21.4005C20.1484 21.5888 19.9062 21.7322 19.6424 21.8214C19.3787 21.9107 19.0992 21.9437 18.822 21.918C15.7391 21.5828 12.7717 20.5186 10.164 18.81C7.73864 17.2792 5.68075 15.2214 4.15 12.796C2.43796 10.1763 1.37344 7.19458 1.042 4.09603C1.01699 3.82048 1.05041 3.54273 1.14008 3.28098C1.22975 3.01924 1.37371 2.77898 1.56287 2.57572C1.75202 2.37246 1.98205 2.21073 2.23783 2.1011C2.4936 1.99146 2.7695 1.93626 3.048 1.93903H6.048C6.53563 1.93424 7.00734 2.10622 7.37711 2.42316C7.74688 2.74009 7.98867 3.18074 8.057 3.66403C8.18424 4.63258 8.42145 5.58364 8.765 6.49803C8.90148 6.86093 8.93094 7.25549 8.8499 7.63452C8.76886 8.01355 8.5808 8.36146 8.308 8.63603L7.04 9.90403C8.46112 12.4052 10.5218 14.4659 13.023 15.887L14.291 14.619C14.5656 14.3462 14.9135 14.1582 15.2925 14.0771C15.6716 13.9961 16.0661 14.0256 16.429 14.162C17.3434 14.5056 18.2945 14.7428 19.263 14.87C19.7515 14.939 20.1961 15.1851 20.5139 15.5607C20.8317 15.9364 21.0013 16.4152 21 16.92Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V7C2 5.89543 2.89543 5 4 5Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M22 7L12.7553 13.4673C12.3014 13.785 11.6986 13.785 11.2447 13.4673L2 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21C12 21 19 14.6863 19 9.5C19 5.35786 15.866 2 12 2C8.13401 2 5 5.35786 5 9.5C5 14.6863 12 21 12 21Z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.8 2.1L2.3 6.4C1.7 6.6 1.7 7.5 2.3 7.7L5.5 8.9L12.5 4.6L7.2 9.3L8.2 13.5C8.3 13.9 8.8 14.1 9.1 13.8L10.9 12.1L13.8 14.2C14.2 14.5 14.8 14.3 14.9 13.7L16.5 2.9C16.6 2.3 15.4 1.9 14.8 2.1Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="8.5" cy="8.5" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12.4" cy="4.6" r="0.9" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.2 15.8V9.5H11.3L11.6 7.1H9.2V5.6C9.2 4.9 9.4 4.4 10.4 4.4H11.7V2.2C11.1 2.1 10.5 2.1 9.9 2.1C7.9 2.1 6.7 3.3 6.7 5.5V7.1H4.7V9.5H6.7V15.8H9.2Z" fill="currentColor" />
    </svg>
  )
}

function WhatsappIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 2.3C5.2 2.3 2.6 4.9 2.6 8.1C2.6 9.3 3 10.4 3.7 11.4L3 14.4L6.1 13.6C6.9 14.1 7.7 14.3 8.5 14.3C11.8 14.3 14.4 11.7 14.4 8.5C14.4 5.3 11.8 2.3 8.5 2.3Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.6 6.2C6.8 5.9 7 5.9 7.2 5.9C7.4 5.9 7.6 6 7.7 6.3L8.2 7.4C8.3 7.6 8.2 7.8 8.1 7.9L7.7 8.3C8.1 9 8.7 9.6 9.4 10L9.8 9.6C9.9 9.5 10.1 9.4 10.3 9.5L11.4 10C11.7 10.1 11.8 10.3 11.8 10.5C11.8 10.7 11.7 10.9 11.4 11.1C11.1 11.3 10.8 11.4 10.5 11.4C9.1 11.3 6.9 9.1 6.7 7.7C6.6 7.3 6.6 6.8 6.6 6.2Z" fill="currentColor" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.75 9H14.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9.75 4.5L14.25 9L9.75 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const contactFieldClasses =
  'w-full rounded-[16px] bg-white px-5 text-[16px] font-medium leading-[165%] text-[#22354A] outline-none placeholder:text-[#B7CAD1]'
