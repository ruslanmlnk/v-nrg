'use client'

import { useState, type FormEvent } from 'react'

import {
  ContactField,
  ContactsFormSection,
  ContactsHeroSection,
  ContactsInfoSection,
  ContactsPillsSection,
  contactFieldClasses,
} from '../components/contacts/ContactsSections'

export default function ContactsPage() {
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
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
        <ContactsHeroSection />
        <ContactsPillsSection />

        <section className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,580px)]">
          <ContactsInfoSection />

          <ContactsFormSection onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <ContactField label="Ім'я *">
                <input
                  required
                  value={formState.name}
                  onChange={(event) =>
                    setFormState((current) => ({ ...current, name: event.target.value }))
                  }
                  placeholder="Введіть ваше ім'я"
                  className={`${contactFieldClasses} h-[56px]`}
                />
              </ContactField>

              <ContactField label="Email *">
                <input
                  required
                  type="email"
                  value={formState.email}
                  onChange={(event) =>
                    setFormState((current) => ({ ...current, email: event.target.value }))
                  }
                  placeholder="Введіть ваш email"
                  className={`${contactFieldClasses} h-[56px]`}
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
                className={`${contactFieldClasses} min-h-[124px] resize-none py-5`}
              />
            </ContactField>
          </ContactsFormSection>
        </section>
      </div>
    </div>
  )
}
