import type { ProductData } from '../../data/products'

import beforeAfterAfter from '@public/assets/product/before-after-after.jpg'
import beforeAfterBefore from '@public/assets/product/before-after-before.jpg'

export const partnerReviews = [
  {
    author: 'Олена Мельник',
    quote:
      'З V-NRG ми отримали помітні результати вже з перших процедур. Клієнти відзначають зменшення набряків і напруження, а нам подобається проста настройка та стабільна робота апарата.',
  },
  {
    author: 'Ірина Соколова',
    quote:
      'Апарат легко став частиною нашого робочого процесу. Команді подобається проста адаптація режимів, а клієнти швидко помічають комфорт і результат.',
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

export const beforeAfterCards = [
  {
    afterImage: beforeAfterAfter,
    beforeImage: beforeAfterBefore,
    defaultPosition: 44,
  },
  {
    afterImage: beforeAfterAfter,
    beforeImage: beforeAfterBefore,
    defaultPosition: 58,
  },
  {
    afterImage: beforeAfterAfter,
    beforeImage: beforeAfterBefore,
    defaultPosition: 71,
  },
] as const

export function createProductGallery(product: ProductData) {
  const images = Array.from(
    new Set(
      [
        ...product.galleryImages,
        product.compareImage,
        product.catalogImage,
        product.cartImage,
      ].filter((image): image is string => Boolean(image)),
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
