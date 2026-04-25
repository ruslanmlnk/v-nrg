import 'dotenv/config'

import { createHash } from 'crypto'
import { unlink, writeFile } from 'fs/promises'
import { tmpdir } from 'os'
import path from 'path'

import type { Media, Product } from '@/payload-types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

type ProductSeedData = Omit<Product, 'createdAt' | 'id' | 'updatedAt'>
type VideoPreviewSource = {
  alt: string
  url: string
}
type ProductSeed = Omit<ProductSeedData, 'category'> & {
  categorySlug?: string
  videoPreviewSources?: VideoPreviewSource[]
}
type RichTextContent = NonNullable<NonNullable<Product['description']>['content']>

const products: ProductSeed[] = [
  {
    slug: 'v-nrg-18-pro',
    title: 'V-NRG 18 PRO',
    price: 68000,
    rating: 4.8,
    categorySlug: 'vacuum',
    maniples: 18,
    powerWatts: 800,
    details: '18 маніпул · 800 Вт',
    shortDescription: 'Професійний апарат вакуумного масажу для кабінету та одного спеціаліста.',
    listFeatures: [
      { feature: '18 маніпул для різних зон тіла' },
      { feature: 'Потужність 800 Вт' },
      { feature: 'Професійне використання' },
    ],
    compareFeatures: [
      { label: 'Кількість маніпул', value: '18 шт' },
      { label: 'Потужність', value: '800 Вт' },
      { label: 'Тиск', value: '0-100 кПа' },
      { label: 'Режим роботи', value: 'регульований' },
      { label: 'Живлення', value: '220В' },
    ],
    description: {
      content: richText([
        'V-NRG 18 PRO — це професійний апарат вакуумного масажу, розроблений для інтенсивної роботи у сфері естетики та фізіотерапії. Модель поєднує сучасні технології, стабільну потужність та зручність експлуатації.',
        'Апарат сприяє покращенню мікроциркуляції, лімфодренажу та зменшенню м’язового напруження. Підходить для роботи з різними зонами тіла та дозволяє адаптувати процедури під індивідуальні потреби клієнтів.',
      ]),
    },
    characteristics: specificationItems([
      ['Кількість маніпул', '18'],
      ['Потужність', '800 Вт'],
      ['Тип терапії', 'вакуумна'],
      ['Режими роботи', 'регульовані'],
      ['Призначення', 'професійне використання'],
      ['Живлення', '220В'],
    ]),
    equipment: textItems([
      'Основний блок апарата',
      'Вакуумні шланги',
      'Силіконові банки різних розмірів',
      'Маніпули для різних зон тіла',
      'Інструкція з експлуатації',
    ]),
    advantages: textItems([
      'Основний блок апарата',
      'Вакуумні шланги',
      'Силіконові банки різних розмірів',
      'Маніпули для різних зон тіла',
      'Інструкція з експлуатації',
    ]),
    video: {
      description:
        'У відео ви можете побачити апарат V-NRG 18 PRO в роботі, ознайомитись з його функціоналом, зрозуміти принцип роботи та оцінити якість виконання процедур вакуумного масажу',
    },
    videoPreviewSources: [
      {
        alt: 'V-NRG 18 PRO відео 1',
        url: 'https://api.builder.io/api/v1/image/assets/TEMP/9e6f4a7f5554fcaada6666b2d8b1904b11ebda8d?width=2352',
      },
      {
        alt: 'V-NRG 18 PRO відео 2',
        url: 'https://api.builder.io/api/v1/image/assets/TEMP/93fc0db1ac43671a6fee6b114d0eb9b3a72c8fcd?width=1156',
      },
    ],
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
    categorySlug: 'vacuum',
    maniples: 36,
    powerWatts: 1200,
    details: '36 маніпул · 1200 Вт',
    shortDescription:
      'Посилена конфігурація для салонів з вищим навантаженням і ширшим набором процедур.',
    listFeatures: [
      { feature: '36 маніпул для інтенсивної роботи' },
      { feature: 'Потужність 1200 Вт' },
      { feature: 'Для салонів із щільним графіком' },
    ],
    compareFeatures: [
      { label: 'Кількість маніпул', value: '36 шт' },
      { label: 'Потужність', value: '1200 Вт' },
      { label: 'Тиск', value: '0-120 кПа' },
      { label: 'Режими роботи', value: 'розширені' },
      { label: 'Живлення', value: '220В' },
    ],
    description: {
      content: richText([
        'V-NRG 36 PRO — розширена модель для інтенсивної щоденної роботи, коли салону потрібен більший набір маніпул і запас потужності.',
        'Апарат підходить для командної роботи, комплексних процедур і масштабування напряму вакуумного масажу.',
      ]),
    },
    characteristics: specificationItems([
      ['Кількість маніпул', '36'],
      ['Потужність', '1200 Вт'],
      ['Тип терапії', 'вакуумна'],
      ['Режими роботи', 'розширені'],
      ['Призначення', 'салонне використання'],
      ['Живлення', '220В'],
    ]),
    equipment: textItems([
      'Основний блок апарата',
      'Розширений набір маніпул',
      'Вакуумні шланги',
      'Силіконові банки різних розмірів',
      'Інструкція та кабель живлення',
    ]),
    advantages: textItems([
      'Більше сценаріїв процедур',
      'Підходить для високого навантаження',
      'Зручний вибір для салонів, що розширюють послуги',
      'Стабільна робота протягом дня',
    ]),
    video: {
      description: 'Відеоматеріали допомагають команді швидко освоїти налаштування та базові режими роботи.',
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
    categorySlug: 'vacuum',
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
      { label: 'Тип дисплею', value: 'сенсорний 8"' },
    ],
    description: {
      content: richText([
        'V-NRG Body Sculpt — компактна тестова модель для локальних процедур і кабінетів з обмеженим простором.',
      ]),
    },
    characteristics: specificationItems([
      ['Кількість маніпул', '12'],
      ['Потужність', '650 Вт'],
      ['Тип терапії', 'вакуумна'],
      ['Призначення', 'локальні процедури'],
    ]),
    equipment: textItems(['Основний блок', 'Набір маніпул', 'Кабель живлення']),
    advantages: textItems(['Компактність', 'Легкий старт', 'Зручність для локальних процедур']),
    video: {
      description: 'Відеоінструкції можна додати в адмінці після тестування або наповнення контентом.',
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
    const { categorySlug, videoPreviewSources, ...productData } = product
    let data: ProductSeedData = productData

    if (categorySlug) {
      const categoryResult = await payload.find({
        collection: 'category',
        depth: 0,
        limit: 1,
        where: {
          slug: {
            equals: categorySlug,
          },
        },
      })

      const category = categoryResult.docs[0]

      if (category) {
        data = {
          ...productData,
          category: [category.id],
        }
      }
    }

    if (videoPreviewSources?.length) {
      const videoItems = await Promise.all(
        videoPreviewSources.map((source) => upsertRemoteMedia(payload, source)),
      )

      data = {
        ...data,
        video: {
          ...data.video,
          items: videoItems.map((item) => item.id),
        },
      }
    }

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
        data,
      })
    } else {
      await payload.create({
        collection: 'products',
        data,
      })
    }
  }

  console.log(`Seeded ${products.length} products`)
}

async function upsertRemoteMedia(payload: Awaited<ReturnType<typeof getPayload>>, source: VideoPreviewSource) {
  const existing = await payload.find({
    collection: 'media',
    depth: 0,
    limit: 1,
    where: {
      alt: {
        equals: source.alt,
      },
    },
  })

  if (existing.docs[0]) {
    return existing.docs[0] as Media
  }

  const response = await fetch(source.url)

  if (!response.ok) {
    throw new Error(`Failed to download media for ${source.alt}: ${response.status} ${response.statusText}`)
  }

  const extension = getFileExtension(response.headers.get('content-type') ?? '')
  const filePath = path.join(
    tmpdir(),
    `${createHash('sha1').update(source.url).digest('hex').slice(0, 12)}.${extension}`,
  )

  await writeFile(filePath, Buffer.from(await response.arrayBuffer()))

  try {
    return (await payload.create({
      collection: 'media',
      data: {
        alt: source.alt,
      },
      depth: 0,
      filePath,
    })) as Media
  } finally {
    await unlink(filePath).catch(() => undefined)
  }
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

function specificationItems(items: Array<[string, string]>): Product['characteristics'] {
  return {
    items: items.map(([label, value]) => ({ label, value })),
  }
}

function textItems(lines: string[]) {
  return {
    items: lines.map((item) => ({ item })),
  }
}

function getFileExtension(contentType: string) {
  if (contentType.includes('png')) return 'png'
  if (contentType.includes('webp')) return 'webp'
  if (contentType.includes('gif')) return 'gif'
  return 'jpg'
}

seedProducts()
  .catch((error: unknown) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(() => {
    process.exit()
  })
