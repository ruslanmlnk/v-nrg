'use client'

import { useState, type FormEvent } from 'react'

import { ContactField } from './ContactField'
import { contactFieldClasses } from './contactFieldClasses'
import { ContactsFormSection } from './ContactsFormSection'
import { ContactsInfoSection } from './ContactsInfoSection'

type ContactRequestSectionProps = {
  className?: string
}

export function ContactRequestSection({ className = '' }: ContactRequestSectionProps) {
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
    <section
      className={`grid items-start gap-6 md:gap-10 lg:grid-cols-[minmax(0,1fr)_610px] lg:items-center lg:gap-12 ${className}`.trim()}
    >
      <ContactsInfoSection />

      <ContactsFormSection onSubmit={handleSubmit}>
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
      </ContactsFormSection>
    </section>
  )
}
