import productMainImage from '@public/assets/product/product-main.jpg'
import productThumbImage from '@public/assets/product/product-thumb.jpg'

import type { ProductData, ProductTabData } from '../../data/products'

export const partnerReviews = [
  {
    author: 'Олена Мельник',
    quote:
      'З V-NRG ми отримали помітні результати вже з перших процедур. Клієнти відзначають зменшення набряків і напруження, а нам подобається проста настройка та стабільна робота апарата.',
  },
  {
    author: 'Ірина Соколова',
    quote:
      "Апарат легко став частиною нашого робочого процесу. Команді подобається проста адаптація режимів, а клієнти швидко помічають комфорт і результат.",
  },
  {
    author: 'Марина Бойко',
    quote:
      'Для салону важливо, що обладнання стабільно працює навіть при щільному записі. Після навчання ми дуже швидко запустили нові процедури в роботу.',
  },
  {
    author: 'Наталія Кравець',
    quote:
      'Найбільше цінуємо поєднання зрозумілого інтерфейсу, підтримки від виробника та прогнозованого результату для клієнтів з різними запитами.',
  },
] as const

export const comparisonCardPositions = [44, 58, 71] as const

const description =
  "V-NRG 18 PRO це професійний апарат вакуумного масажу, розроблений для інтенсивної роботи у сфері естетики та фізіотерапії. Модель поєднує сучасні технології, стабільну потужність та зручність експлуатації.\nАпарат сприяє покращенню мікроциркуляції, лімфодренажу та зменшенню м'язового напруження. Підходить для роботи з різними зонами тіла та дозволяє адаптувати процедури під індивідуальні потреби клієнтів."

export const fallbackProductTabs: ProductTabData[] = [
  {
    content: {
      paragraphs: description.split('\n'),
      type: 'paragraphs',
    },
    id: 'description',
    label: 'Опис',
  },
  {
    content: {
      items: [
        '18 маніпул для різних зон тіла',
        'Потужність 800 Вт для стабільної роботи',
        'Сенсорна панель керування з простим інтерфейсом',
        'Регулювання інтенсивності вакууму під клієнта',
        'Підходить для естетичних та фізіотерапевтичних процедур',
      ],
      type: 'list',
    },
    id: 'specs',
    label: 'Характеристики',
  },
  {
    content: {
      items: [
        'Основний блок апарата',
        'Набір маніпул для різних зон',
        'Шланги та базові комплектуючі',
        'Кабель живлення та інструкція по запуску',
        'Матеріали для швидкого навчання команди',
      ],
      type: 'list',
    },
    id: 'package',
    label: 'Комплектація',
  },
  {
    content: {
      items: [
        'Швидкий старт без складного навчання',
        'Гнучке налаштування під різні процедури',
        'Стабільна робота при щільному салонному графіку',
        'Офіційна підтримка та сервіс від виробника',
        'Підходить як для запуску, так і для масштабування напрямку',
      ],
      type: 'list',
    },
    id: 'advantages',
    label: 'Переваги',
  },
  {
    content: {
      paragraphs: [
        'На сторінці навчання доступні відеоінструкції по першому запуску, налаштуванню, роботі з тілом та обличчям, а також по базовому обслуговуванню обладнання.',
      ],
      type: 'paragraphs',
    },
    id: 'video',
    label: 'Відео роботи',
  },
]

export function createProductGallery(product: ProductData) {
  const images = Array.from(
    new Set(
      [
        ...product.galleryImages,
        product.compareImage,
        product.catalogImage,
        product.cartImage,
        productMainImage.src,
        productThumbImage.src,
      ].filter(Boolean),
    ),
  )

  return images.slice(0, 5).map((image, index) => ({
    alt: index === 0 ? `${product.title} основне фото` : `${product.title} фото ${index + 1}`,
    main: image,
    thumb: image,
    video: index === 0,
  }))
}

export function chunkItems<T>(items: readonly T[], size: number) {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, index) =>
    items.slice(index * size, index * size + size),
  )
}
