'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'
import { useState, type FormEvent, type ReactNode } from 'react'

import SiteFooter from '../components/SiteFooter'

export default function DealerPage() {
  const router = useRouter()
  const [formState, setFormState] = useState({
    city: '',
    companyName: '',
    email: '',
    firstName: '',
    lastName: '',
    message: '',
    phone: '+380',
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push('/dealer/application-sent')
  }

  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
        <section className="flex min-h-[268px] flex-col items-center justify-center rounded-[20px] bg-[#22354A] px-6 py-14 text-center text-white">
          <div className="flex max-w-[860px] flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-2 text-[16px] font-bold uppercase leading-[145%]">
              <Link href="/">Головна</Link>
              <span>/</span>
              <span className="text-[#4FACF5]">Стати дилером</span>
            </div>
            <h1 className="text-[36px] font-medium leading-[145%] md:text-[48px]">Партнерство з V-NRG</h1>
            <p className="text-[16px] font-medium leading-[165%] text-[#D5E0E8] md:text-[18px]">
              Розвивайте свій бізнес разом з виробником професійного обладнання для вакуумного масажу
            </p>
          </div>
        </section>

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
                <BenefitIcon />
              </div>
              <h2 className="text-[24px] font-medium leading-[145%] text-[#22354A]">{benefit.title}</h2>
              <p className="mt-3 text-[18px] font-medium leading-[165%] text-[#22354A]">{benefit.description}</p>
            </motion.article>
          ))}
        </section>

        <section className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,600px)]">
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

            <form className="flex flex-col gap-6 p-8" onSubmit={handleSubmit}>
              <DealerField label="Назва компанії *">
                <input
                  required
                  value={formState.companyName}
                  onChange={(event) =>
                    setFormState((current) => ({ ...current, companyName: event.target.value }))
                  }
                  placeholder="Введіть назву компанії"
                  className={`${dealerFieldClasses} h-[56px]`}
                />
              </DealerField>

              <div className="grid gap-6 md:grid-cols-2">
                <DealerField label="Ім'я *">
                  <input
                    required
                    value={formState.firstName}
                    onChange={(event) =>
                      setFormState((current) => ({ ...current, firstName: event.target.value }))
                    }
                    placeholder="Введіть ваше ім'я"
                    className={`${dealerFieldClasses} h-[56px]`}
                  />
                </DealerField>

                <DealerField label="Прізвище *">
                  <input
                    required
                    value={formState.lastName}
                    onChange={(event) =>
                      setFormState((current) => ({ ...current, lastName: event.target.value }))
                    }
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
                    onChange={(event) =>
                      setFormState((current) => ({ ...current, phone: event.target.value }))
                    }
                    placeholder="+380"
                    className={`${dealerFieldClasses} h-[56px]`}
                  />
                </DealerField>

                <DealerField label="Email *">
                  <input
                    required
                    type="email"
                    value={formState.email}
                    onChange={(event) =>
                      setFormState((current) => ({ ...current, email: event.target.value }))
                    }
                    placeholder="Введіть ваш email"
                    className={`${dealerFieldClasses} h-[56px]`}
                  />
                </DealerField>
              </div>

              <DealerField label="Місто/Країна *">
                <input
                  required
                  value={formState.city}
                  onChange={(event) =>
                    setFormState((current) => ({ ...current, city: event.target.value }))
                  }
                  placeholder="Київ, Одеса, Львів..."
                  className={`${dealerFieldClasses} h-[56px]`}
                />
              </DealerField>

              <DealerField label="Повідомлення">
                <textarea
                  value={formState.message}
                  onChange={(event) =>
                    setFormState((current) => ({ ...current, message: event.target.value }))
                  }
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
        </section>
      </div>

      <SiteFooter />
    </div>
  )
}

function DealerField({
  children,
  label,
}: {
  children: ReactNode
  label: string
}) {
  return (
    <label className="flex flex-col gap-3">
      <span className="text-[18px] font-medium leading-[165%] text-[#22354A]">{label}</span>
      {children}
    </label>
  )
}

function BenefitIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.83398 14L11.6673 19.8333L22.1673 9.33333" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const dealerBenefits = [
  {
    description: 'Офіційні умови співпраці, доступ до сертифікованого обладнання та зрозуміла комунікація',
    title: 'Прозора модель партнерства',
  },
  {
    description: 'Навчальні матеріали, демонстрації, консультації та супровід під запуск або масштабування',
    title: 'Підтримка команди',
  },
  {
    description: 'Готові рішення для салонів, студій та приватних кабінетів з акцентом на результат для клієнта',
    title: 'Продукт, який легко продавати',
  },
] as const

const dealerPoints = [
  'Маркетингові матеріали та рекомендації для запуску продажів',
  'Допомога з підбором обладнання під формат вашого бізнесу',
  'Сервісний супровід та консультації після старту співпраці',
  'Навчання для вашої команди по роботі з обладнанням V-NRG',
] as const

const dealerFieldClasses =
  'w-full rounded-[20px] bg-[#F5F8F9] px-6 text-[18px] font-medium leading-[165%] text-[#22354A] outline-none placeholder:text-[#B7CAD1]'
