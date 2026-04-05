'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { motion } from 'motion/react'

import SiteFooter from '../SiteFooter'

const infoContent = {
  accessories: {
    description:
      'Добираємо аксесуари та додаткові позиції під обладнання V-NRG. Для точного підбору залиште заявку, і ми підкажемо сумісні рішення.',
    title: 'Аксесуари',
  },
  chairs: {
    description:
      'Підберемо професійні стільці та масажні крісла під ваш формат роботи, простір кабінету та навантаження на команду.',
    title: 'Стільці для масажу',
  },
  components: {
    description:
      'Маніпули, насадки, фільтри та шланги доступні під запит. Підкажемо сумісність із вашою моделлю обладнання та допоможемо зі швидким доукомплектуванням.',
    title: 'Комплектуючі',
  },
  delivery: {
    description:
      'Працюємо з доставкою по Україні, допомагаємо з узгодженням відправки та підказуємо оптимальний спосіб оплати для салону чи приватної практики.',
    title: 'Доставка та оплата',
  },
  materials: {
    description:
      'Витратні матеріали та супутні позиції для процедур доступні за індивідуальним запитом. Ми допоможемо зібрати комплект саме під ваші послуги.',
    title: 'Витратні матеріали',
  },
  offer: {
    description:
      'Публічна оферта та супровідні умови зараз готуються до публікації. Якщо потрібен документ для погодження, надішлемо його окремо.',
    title: 'Публічна оферта',
  },
  'password-recovery': {
    description:
      'Щоб відновити доступ, напишіть нам або зв’яжіться телефоном. Допоможемо підтвердити дані та повернути доступ до акаунта.',
    title: 'Відновлення доступу',
  },
  privacy: {
    description:
      'Ми обробляємо персональні дані лише для комунікації, оформлення замовлень і супроводу клієнтів. За деталями звертайтеся до нашої команди.',
    title: 'Політика конфіденційності',
  },
  physiotherapy: {
    description:
      'Розділ фізіотерапевтичного обладнання зараз готується. Уже зараз можна отримати консультацію й підібрати рішення під потрібний напрямок.',
    title: 'Апарати фізіотерапії',
  },
  terms: {
    description:
      'Умови користування та сервісні положення оформлюємо як окремий розділ. Тимчасово всю ключову інформацію надаємо через менеджера.',
    title: 'Умови користування',
  },
  warranty: {
    description:
      'Офіційне обладнання V-NRG постачається з гарантією та сервісним супроводом. Ми підкажемо строки, умови та формат звернення на обслуговування.',
    title: 'Гарантія та сервіс',
  },
} as const

const fallbackContent = {
  description:
    'Цей інформаційний розділ уже в роботі. Якщо потрібні деталі просто зараз, ми швидко підкажемо все телефоном або в листуванні.',
  title: 'Інформація',
}

export default function InfoPage() {
  const searchParams = useSearchParams()
  const topic = searchParams.get('topic') as keyof typeof infoContent | null
  const content = (topic ? infoContent[topic] : null) ?? fallbackContent

  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
        <section className="flex min-h-[268px] items-center justify-center rounded-[20px] bg-[#22354A] px-6 py-14 text-center text-white">
          <div className="flex max-w-[860px] flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-2 text-[16px] font-bold uppercase leading-[145%]">
              <Link href="/">Головна</Link>
              <span>/</span>
              <span className="text-[#4FACF5]">Інформація</span>
            </div>
            <h1 className="text-[36px] font-medium leading-[145%] md:text-[48px]">{content.title}</h1>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32 }}
          className="rounded-[28px] bg-white p-8 shadow-[0_24px_64px_rgba(34,53,74,0.08)] md:p-12"
        >
          <div className="mx-auto flex max-w-[860px] flex-col gap-8">
            <p className="text-[18px] font-medium leading-[165%] text-[#22354A] md:text-[22px]">{content.description}</p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contacts"
                className="flex h-[50px] items-center justify-center rounded-full bg-[#22354A] px-8 text-[18px] font-medium leading-[145%] text-white"
              >
                Зв&apos;язатися з нами
              </Link>
              <Link
                href="/catalog"
                className="flex h-[50px] items-center justify-center rounded-full border border-[#D5E0E8] px-8 text-[18px] font-medium leading-[145%] text-[#22354A]"
              >
                Перейти до каталогу
              </Link>
            </div>
          </div>
        </motion.section>
      </div>

      <SiteFooter />
    </div>
  )
}
