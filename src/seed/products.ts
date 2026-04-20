import 'dotenv/config'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { Product } from '@/payload-types'

type ProductSeed = Omit<Product, 'createdAt' | 'id' | 'updatedAt'>
type RichTextContent = NonNullable<NonNullable<Product['description']>['content']>

const products: ProductSeed[] = [
  {
    slug: 'v-nrg-18-pro',
    title: 'V-NRG 18 PRO',
    price: 68000,
    rating: 4.8,
    category: 'vacuum',
    maniples: 18,
    powerWatts: 800,
    details: '18 маніпул · 800 Вт',
    shortDescription: 'Професійний апарат для вакуумного масажу для кабінету та одного спеціаліста.',
    listFeatures: [
      { feature: '18 маніпул для різних зон тіла' },
      { feature: 'Потужність 800 Вт' },
      { feature: 'Оптимально для помірного навантаження' },
    ],
    compareFeatures: [
      { label: 'Кількість маніпул', value: '18 шт' },
      { label: 'Потужність', value: '800 Вт' },
      { label: 'Тиск', value: '0-100 кПа' },
      { label: 'Режим роботи', value: '10 год.' },
      { label: 'Тип дисплею', value: 'Сенсорний 10"' },
    ],
    description: {
      content: richText([
        'V-NRG 18 PRO — професійний апарат для вакуумного масажу, який підходить для салонів краси, spa-центрів і приватних кабінетів.',
        'Модель поєднує стабільну потужність, зрозуміле керування та набір маніпул для базових процедур по тілу.',
      ]),
    },
    characteristics: {
      content: richText([
        '18 маніпул для різних зон тіла',
        'Потужність 800 Вт',
        'Сенсорна панель керування',
        'Регулювання інтенсивності вакууму',
      ]),
    },
    equipment: {
      content: richText([
        'Основний блок апарата',
        'Набір маніпул',
        'Шланги та базові комплектуючі',
        'Кабель живлення та інструкція',
      ]),
    },
    advantages: {
      content: richText([
        'Швидкий старт без складного навчання',
        'Підходить для естетичних і фізіотерапевтичних процедур',
        'Стабільна робота при щоденному навантаженні',
      ]),
    },
    video: {
      content: richText([
        'Для моделі доступні відеоінструкції з першого запуску, налаштування та базового обслуговування.',
      ]),
    },
    faq: [
      {
        question: 'Чи підходить V-NRG 18 PRO для старту кабінету?',
        answer: 'Так, модель розрахована на швидкий запуск і базові салонні процедури.',
      },
      {
        question: 'Чи є навчання після покупки?',
        answer: 'Так, команда допомагає з запуском і базовим налаштуванням апарата.',
      },
    ],
  },
  {
    slug: 'v-nrg-36-pro',
    title: 'V-NRG 36 PRO',
    price: 88000,
    rating: 4.9,
    category: 'vacuum',
    maniples: 36,
    powerWatts: 1200,
    details: '36 маніпул · 1200 Вт',
    shortDescription: 'Посилена конфігурація для салонів з вищим навантаженням і ширшим набором процедур.',
    listFeatures: [
      { feature: '36 маніпул для інтенсивної роботи' },
      { feature: 'Потужність 1200 Вт' },
      { feature: 'Для салонів із щільним графіком' },
    ],
    compareFeatures: [
      { label: 'Кількість маніпул', value: '36 шт' },
      { label: 'Потужність', value: '1200 Вт' },
      { label: 'Тиск', value: '0-120 кПа' },
      { label: 'Режим роботи', value: '15 год.' },
      { label: 'Тип дисплею', value: 'Сенсорний 12"' },
    ],
    description: {
      content: richText([
        'V-NRG 36 PRO — розширена модель для інтенсивної щоденної роботи, коли салону потрібен більший набір маніпул і запас потужності.',
        'Апарат підходить для командної роботи, комплексних процедур і масштабування напрямку вакуумного масажу.',
      ]),
    },
    characteristics: {
      content: richText([
        '36 маніпул',
        'Потужність 1200 Вт',
        'Розширений робочий діапазон',
        'Сенсорний дисплей 12"',
      ]),
    },
    equipment: {
      content: richText([
        'Основний блок апарата',
        'Розширений набір маніпул',
        'Шланги та комплектуючі',
        'Кабель живлення та інструкція',
      ]),
    },
    advantages: {
      content: richText([
        'Більше сценаріїв процедур',
        'Підходить для високого навантаження',
        'Зручний вибір для салонів, що розширюють послуги',
      ]),
    },
    video: {
      content: richText([
        'Відеоматеріали допомагають команді швидко освоїти налаштування та базові режими роботи.',
      ]),
    },
    faq: [
      {
        question: 'Чим 36 PRO відрізняється від 18 PRO?',
        answer: '36 PRO має більше маніпул, вищу потужність і краще підходить для інтенсивної роботи.',
      },
      {
        question: 'Чи можна використовувати модель у салоні з кількома спеціалістами?',
        answer: 'Так, ця конфігурація саме для більшого навантаження та командної роботи.',
      },
    ],
  },
  {
    slug: 'v-nrg-body-sculpt',
    title: 'V-NRG Body Sculpt',
    price: 54000,
    rating: 4.7,
    category: 'vacuum',
    maniples: 12,
    powerWatts: 650,
    details: '12 маніпул · 650 Вт',
    shortDescription: 'Компактний тестовий апарат для локальних процедур і невеликих кабінетів.',
    listFeatures: [
      { feature: '12 маніпул' },
      { feature: 'Компактний формат' },
      { feature: 'Для локальних процедур' },
    ],
    compareFeatures: [
      { label: 'Кількість маніпул', value: '12 шт' },
      { label: 'Потужність', value: '650 Вт' },
      { label: 'Тиск', value: '0-90 кПа' },
      { label: 'Режим роботи', value: '8 год.' },
      { label: 'Тип дисплею', value: 'Сенсорний 8"' },
    ],
    description: {
      content: richText([
        'V-NRG Body Sculpt — компактна тестова модель для локальних процедур і кабінетів з обмеженим простором.',
      ]),
    },
    characteristics: {
      content: richText(['12 маніпул', 'Потужність 650 Вт', 'Компактний корпус']),
    },
    equipment: {
      content: richText(['Основний блок', 'Набір маніпул', 'Кабель живлення']),
    },
    advantages: {
      content: richText(['Компактність', 'Легкий старт', 'Зручність для локальних процедур']),
    },
    video: {
      content: richText(['Відеоінструкції можна додати в адмінці після тестування.']),
    },
    faq: [
      {
        question: 'Це тестова модель?',
        answer: 'Так, цей запис додано як тестовий товар для перевірки CMS-зв’язки.',
      },
    ],
  },
]

async function seedProducts() {
  console.log('Loading Payload config...')
  const payload = await getPayload({ config: configPromise })
  console.log('Payload ready. Upserting products...')

  for (const product of products) {
    console.log(`Upserting ${product.slug}...`)
    const existing = await payload.find({
      collection: 'products',
      depth: 0,
      limit: 1,
      where: {
        slug: {
          equals: product.slug,
        },
      },
    })

    if (existing.docs[0]) {
      await payload.update({
        collection: 'products',
        id: existing.docs[0].id,
        data: product,
      })
    } else {
      await payload.create({
        collection: 'products',
        data: product,
      })
    }
  }

  console.log(`Seeded ${products.length} products`)
}

function richText(lines: string[]): RichTextContent {
  return {
    root: {
      children: lines.map((line) => ({
        children: [
          {
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            text: line,
            type: 'text',
            version: 1,
          },
        ],
        direction: null,
        format: '' as const,
        indent: 0,
        type: 'paragraph',
        version: 1,
      })),
      direction: null,
      format: '' as const,
      indent: 0,
      type: 'root',
      version: 1,
    },
  }
}

seedProducts()
  .catch((error: unknown) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(() => {
    process.exit()
  })
