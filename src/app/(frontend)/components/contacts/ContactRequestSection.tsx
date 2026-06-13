'use client'

import { useState, type FormEvent } from 'react'

import { ContactField } from './ContactField'
import { contactFieldClasses } from './contactFieldClasses'
import { ContactsFormSection } from './ContactsFormSection'
import { ContactsInfoSection } from './ContactsInfoSection'
import type { ContactSocialNetwork } from './ContactsInfoSection'

type ContactRequestSectionProps = {
  className?: string
  description?: string
  socialNetworks?: ContactSocialNetwork[]
  title?: string
}

export function ContactRequestSection({
  className = '',
  description = 'Щоб отримати консультацію, залиште заявку онлайн або зв’яжіться з нами.',
  socialNetworks = [],
  title = 'Написати нам',
}: ContactRequestSectionProps) {
  const [error, setError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState({
    email: '',
    message: '',
    name: '',
  })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)
    const response = await fetch('/api/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formState, source: 'contacts' }),
    }).catch(() => null)
    setIsSubmitting(false)
    if (!response?.ok) {
      setError('Не вдалося надіслати заявку. Спробуйте ще раз.')
      return
    }
    setIsSubmitted(true)
    setFormState({ email: '', message: '', name: '' })
  }

  return (
    <section
      className={`grid items-start gap-6 md:gap-10 lg:grid-cols-[minmax(0,1fr)_610px] lg:items-center lg:gap-12 ${className}`.trim()}
    >
      <ContactsInfoSection description={description} socialNetworks={socialNetworks} title={title} />

      <ContactsFormSection isSubmitting={isSubmitting} onSubmit={handleSubmit} title={title}>
        {isSubmitted ? <p className="text-white">Дякуємо! Заявку успішно надіслано.</p> : null}
        {error ? <p className="text-[#FFB4B4]">{error}</p> : null}
        <div className="grid gap-4 md:grid-cols-2">
          <ContactField label="Ім'я" required>
            <input
              required
              value={formState.name}
              onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
              placeholder="Введіть ваше ім'я"
              className={`${contactFieldClasses} h-[58px]`}
            />
          </ContactField>

          <ContactField label="Email" required>
            <input
              required
              type="email"
              value={formState.email}
              onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
              placeholder="Введіть ваш email"
              className={`${contactFieldClasses} h-[58px]`}
            />
          </ContactField>
        </div>

        <ContactField label="Повідомлення">
          <textarea
            required
            value={formState.message}
            onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
            placeholder="Напишіть нам"
            className={`${contactFieldClasses} min-h-[116px] resize-none py-4`}
          />
        </ContactField>
        <input className="hidden" name="website" tabIndex={-1} autoComplete="off" />
      </ContactsFormSection>
    </section>
  )
}
