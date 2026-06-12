import 'dotenv/config'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

const categoryTitles = ['Перший запуск', 'Робота з тілом', 'Робота з обличчям', 'Обслуговування']

async function seedTraining() {
  const payload = await getPayload({ config: configPromise })
  const media = await payload.find({ collection: 'media', depth: 0, limit: 100 })
  const findMedia = (alt: string) => media.docs.find((item) => item.alt === alt)?.id
  const icons = [1, 2, 3].map((index) => findMedia(`Home: training icon ${index}`))
  const poster = findMedia('Home: training poster')
  const video = findMedia('Home: training video')

  if (icons.some((icon) => !icon) || !poster || !video) {
    throw new Error('Спочатку виконайте npm run seed:home')
  }

  const categories = []
  for (const [index, title] of categoryTitles.entries()) {
    const existing = await payload.find({
      collection: 'training-categories',
      limit: 1,
      where: { title: { equals: title } },
    })
    categories.push(
      existing.docs[0] ??
        (await payload.create({
          collection: 'training-categories',
          data: { title, sortOrder: index + 1 },
        })),
    )
  }

  for (const [categoryIndex, category] of categories.entries()) {
    for (let index = 0; index < 3; index += 1) {
      const title = `${category.title}: відеоурок ${index + 1}`
      const existing = await payload.find({
        collection: 'training-videos',
        limit: 1,
        where: { title: { equals: title } },
      })
      const data = {
        title,
        description: 'Детальна відеоінструкція з рекомендаціями для правильної роботи.',
        category: category.id,
        poster,
        video,
        sortOrder: categoryIndex * 10 + index + 1,
      }
      if (existing.docs[0]) {
        await payload.update({ collection: 'training-videos', id: existing.docs[0].id, data })
      } else {
        await payload.create({ collection: 'training-videos', data })
      }
    }
  }

  await payload.updateGlobal({
    slug: 'training',
    data: {
      title: 'Навчання та відеоінструкції V-NRG',
      description:
        'Повна підтримка від виробника: відеоуроки, інструкції та рекомендації для швидкого старту.',
      formats: {
        title: 'Зручні способи навчання',
        subtitle: 'Формати навчання',
        cards: [
          { icon: icons[0]!, title: 'Відео-інструкції', description: 'Матеріали з демонстрацією роботи апарата та основних процедур.' },
          { icon: icons[1]!, title: 'Налаштування', description: 'Пояснення щодо підключення, підготовки до роботи та режимів.' },
          { icon: icons[2]!, title: 'Рекомендації по насадках', description: 'Підбір маніпул та поради щодо роботи з різними зонами тіла.' },
        ],
      },
      videoInstructions: {
        title: 'Детальні уроки для всіх етапів роботи',
        subtitle: 'Відеоінструкції',
      },
      faq: {
        title: 'Відповіді на поширені запитання',
        subtitle: 'FAQ',
        items: [
          { question: 'Чи потрібен досвід для початку навчання?', answer: 'Ні. Матеріали побудовані послідовно та підходять для швидкого старту.' },
          { question: 'Чи можна переглядати відео повторно?', answer: 'Так. Усі відеоінструкції доступні для повторного перегляду на сторінці.' },
          { question: 'Чи є підтримка після навчання?', answer: 'Так. Команда V-NRG допомагає з налаштуваннями та питаннями по роботі.' },
          { question: 'Чи охоплює навчання роботу з тілом?', answer: 'Так. Відео згруповані за категоріями та охоплюють основні робочі сценарії.' },
        ],
      },
    },
  })

  console.log('Training seeded')
}

seedTraining()
  .catch((error: unknown) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(() => process.exit())
