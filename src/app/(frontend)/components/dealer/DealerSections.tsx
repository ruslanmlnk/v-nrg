'use client'

import { useRouter } from 'next/navigation'
import { useState, type ChangeEvent, type ReactNode } from 'react'
import { motion } from 'motion/react'

import PageHero from '../shared/PageHero'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import benefitIconAsset from '@public/icon/generated/dealer-dealer-page-benefit.svg'

import { dealerBenefits, dealerPoints, initialDealerFormState, type DealerFormState } from './data'

export const dealerFieldClasses =
  'w-full rounded-[20px] bg-[#F5F8F9] px-6 text-[18px] font-medium leading-[165%] text-[#22354A] outline-none placeholder:text-[#B7CAD1]'

export function DealerHeroSection() {
  return (
    <PageHero
      currentLabel="Стати дилером"
      title="Партнерство з V-NRG"
      description="Розвивайте свій бізнес разом з виробником професійного обладнання для вакуумного масажу."
      contentClassName="max-w-[860px]"
      descriptionClassName="text-[16px] text-[#D5E0E8] md:text-[18px]"
    />
  )
}

export function DealerBenefitsSection() {
  return (
    <section className="grid gap-5 md:grid-cols-3">
      {dealerBenefits.map((benefit, index) => (
        <motion.article
          key={benefit.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.06, duration: 0.3 }}
          className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]"
        >
          <div className="mb-5 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#F1F9FF] text-[#4FACF5]">
            <IconAsset src={benefitIconAsset} width={28} height={28} />
          </div>
          <h2 className="text-[24px] font-medium leading-[145%] text-[#22354A]">{benefit.title}</h2>
          <p className="mt-3 text-[18px] font-medium leading-[165%] text-[#22354A]">{benefit.description}</p>
        </motion.article>
      ))}
    </section>
  )
}

export function DealerInfoSection() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-[36px] font-medium leading-[145%] text-[#22354A] md:text-[48px]">Чому дилери обирають нас</h2>
      <div className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
        <ul className="flex flex-col gap-4">
          {dealerPoints.map((point) => (
            <li key={point} className="flex items-start gap-3 text-[18px] font-medium leading-[165%] text-[#22354A]">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#4FACF5]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function DealerApplicationSection() {
  const router = useRouter()
  const [formState, setFormState] = useState<DealerFormState>(() => ({ ...initialDealerFormState }))

  const handleFieldChange = (field: keyof DealerFormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
