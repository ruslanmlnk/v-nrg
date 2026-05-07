'use client'

import { useRouter } from 'next/navigation'
import { useState, type ChangeEvent, type ReactNode } from 'react'
import { motion } from 'motion/react'
import { dealerFieldClasses, initialDealerFormState, type DealerFormState } from './data'

export function DealerApplicationSection() {
  const router = useRouter()
  const [formState, setFormState] = useState<DealerFormState>(() => ({ ...initialDealerFormState }))

  const handleFieldChange =
    (field: keyof DealerFormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target
      setFormState((current) => ({ ...current, [field]: value }))
    }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35 }}
      className="overflow-hidden rounded-[28px] bg-white shadow-[0_24px_64px_rgba(34,53,74,0.08)]"
    >
      <div className="border-b border-[#E7EEF3] px-8 py-7">
        <h2 className="text-[24px] font-medium leading-[145%] text-[#22354A]">Подати заявку</h2>
      </div>

      <form
        className="flex flex-col gap-6 p-8"
        onSubmit={(event) => {
          event.preventDefault()
          router.push('/dealer/application-sent')
        }}
      >
        <DealerField label="Назва компанії *">
          <input
            required
            value={formState.companyName}
            onChange={handleFieldChange('companyName')}
            placeholder="Введіть назву компанії"
            className={`${dealerFieldClasses} h-[56px]`}
          />
        </DealerField>

        <div className="grid gap-6 md:grid-cols-2">
          <DealerField label="Ім'я *">
            <input
              required
              value={formState.firstName}
              onChange={handleFieldChange('firstName')}
              placeholder="Введіть ваше ім'я"
              className={`${dealerFieldClasses} h-[56px]`}
            />
          </DealerField>

          <DealerField label="Прізвище *">
            <input
              required
              value={formState.lastName}
              onChange={handleFieldChange('lastName')}
              placeholder="Введіть ваше прізвище"
              className={`${dealerFieldClasses} h-[56px]`}
            />
          </DealerField>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <DealerField label="Телефон *">
            <input
              required
              value={formState.phone}
              onChange={handleFieldChange('phone')}
              placeholder="+380"
              className={`${dealerFieldClasses} h-[56px]`}
            />
          </DealerField>

          <DealerField label="Email *">
            <input
              required
              type="email"
              value={formState.email}
              onChange={handleFieldChange('email')}
              placeholder="Введіть ваш email"
              className={`${dealerFieldClasses} h-[56px]`}
            />
          </DealerField>
        </div>

        <DealerField label="Місто/Країна *">
          <input
            required
            value={formState.city}
            onChange={handleFieldChange('city')}
            placeholder="Київ, Одеса, Львів..."
            className={`${dealerFieldClasses} h-[56px]`}
          />
        </DealerField>

        <DealerField label="Повідомлення">
          <textarea
            value={formState.message}
            onChange={handleFieldChange('message')}
            placeholder="Короткий опис вашого бізнесу"
            className={`${dealerFieldClasses} min-h-[132px] resize-none py-5`}
          />
        </DealerField>

        <button
          type="submit"
          className="flex h-[52px] items-center justify-center rounded-full bg-[#4FACF5] text-[18px] font-bold leading-[145%] text-white"
        >
          Надіслати
        </button>
      </form>
    </motion.div>
  )
}

function DealerField({ children, label }: { children: ReactNode; label: string }) {
  return (
    <label className="flex flex-col gap-3">
      <span className="text-[18px] font-medium leading-[165%] text-[#22354A]">{label}</span>
      {children}
    </label>
  )
}
