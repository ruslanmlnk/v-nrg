import 'dotenv/config'

import { copyFile, unlink } from 'fs/promises'
import { tmpdir } from 'os'
import path from 'path'
import { fileURLToPath } from 'url'

import type { Media, Review } from '@/payload-types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const projectRoot = path.resolve(dirname, '..', '..')
const publicRoot = path.resolve(projectRoot, 'src', 'app', '(frontend)', 'public')

const assets = {
  certificate: ['assets', 'about', 'about-certificate.jpg'],
  hero: ['assets', 'hero.png'],
  before: ['assets', 'product', 'before-after-before.jpg'],
  after: ['assets', 'product', 'before-after-after.jpg'],
  reviewAvatar: ['assets', 'review', 'review-author.jpg'],
  trainingPoster: ['assets', 'training', 'home-video-teaser.jpg'],
  howIcons: [['icon', 'icon1.svg'], ['icon', 'icon2.svg'], ['icon', 'icon3.svg']],
  trainingIcons: [
    ['icon', 'generated', 'training-training-page-video-instructions.svg'],
    ['icon', 'generated', 'training-training-page-settings.svg'],
    ['icon', 'generated', 'training-training-page-attachments.svg'],
  ],
} as const

async function seedHome() {
  const payload = await getPayload({ config: configPromise })
  const media = await seedMedia(payload)
  const reviews = await seedReviews(payload, media.reviewAvatars.map((avatar) => avatar.id))
  const products = await payload.find({
    collection: 'products',
    depth: 0,
    limit: 2,
    sort: 'price',
  })

  await payload.updateGlobal({
    slug: 'home',
    data: {
      hero: {
        title: 'Професійні апарати вакуумного масажу V-NRG',
        description:
          'Допомагають працювати з болем, набряками та станом шкіри. Швидкий запуск у роботу, навчання та підтримка від виробника.',
        image: media.hero.id,
      },
      howItWork: {
        title: 'Як працює технологія V-NRG',
        subtitle: 'Принцип дії',
        cards: [
          {
            icon: media.howIcons[0].id,
            title: 'Стимуляція кровообігу',
            description:
              'Активує мікроциркуляцію, покращує живлення тканин та прискорює природне відновлення.',
          },
          {
            icon: media.howIcons[1].id,
            title: 'Розслаблення м’язів',
            description:
              'Знімає напруження і спазми, зменшує дискомфорт під час руху та після навантажень.',
          },
          {
            icon: media.howIcons[2].id,
            title: 'Лімфодренаж',
            description:
              'Покращує відтік рідини, допомагає зменшити набряки та застійні явища у тканинах.',
          },
        ],
      },
      beforeAfter: Array.from({ length: 3 }, () => ({
        after: media.after.id,
        before: media.before.id,
      })),
      modelComparison: {
        title: 'Яка конфігурація підійде саме вам',
        subtitle: 'Порівняння моделей',
        products: products.docs.map((product) => product.id),
      },
      certificatesSection: {
        title: 'Офіційне обладнання з гарантією та сервісом',
        subtitle: 'Надійність та підтримка',
        certificates: Array.from({ length: 3 }, () => media.certificate.id),
      },
      trainingSection: {
        title: 'Відео-інструкції та рекомендації з використання V-NRG',
        subtitle: 'Навчання',
        video: {
          file: media.trainingVideo.id,
          poster: media.trainingPoster.id,
        },
        cards: [
          {
            icon: media.trainingIcons[0].id,
            title: 'Відео-інструкції',
            description:
              'Матеріали з демонстрацією роботи апарата та основних процедур.',
          },
          {
            icon: media.trainingIcons[1].id,
            title: 'Налаштування',
            description:
              'Пояснення щодо підключення, підготовки до роботи та режимів.',
          },
          {
            icon: media.trainingIcons[2].id,
            title: 'Рекомендації по насадках',
            description:
              'Підбір маніпул та поради щодо роботи з різними зонами тіла.',
          },
        ],
      },
      reviewsSection: {
        title: 'Відгуки наших партнерів',
        subtitle: 'Відгуки',
        reviews: reviews.map((review) => review.id),
      },
      faqSection: {
        title: 'Відповіді на поширені запитання',
        subtitle: 'FAQ',
        items: [
          {
            question: 'Чи складно працювати з апаратом V-NRG?',
            answer:
              'Ні. Обладнання має зрозумілий інтерфейс, а також відео-інструкції з налаштування та використання.',
          },
          {
            question: 'У чому різниця між 18 PRO та 36 PRO?',
            answer:
              '18 PRO підходить для базових задач, а 36 PRO розрахований на ширший набір процедур і вищу інтенсивність роботи.',
          },
          {
            question: 'Чи надається гарантія на обладнання?',
            answer:
              'Так. На обладнання надається офіційна гарантія, підтримка із запуску та сервісне обслуговування.',
          },
          {
            question: 'Чи доступна оплата частинами?',
            answer:
              'Так, для замовлення доступна оплата частинами через monobank.',
          },
          {
            question: 'Чи можна записатися на демонстрацію?',
            answer:
              'Так. Залиште заявку на консультацію, і команда V-NRG погодить зручний формат демонстрації.',
          },
          {
            question: 'Як стати дилером V-NRG?',
            answer:
              'Заповніть дилерську форму на сайті, після чого команда зв’яжеться з вами для узгодження умов.',
          },
        ],
      },
    },
  })

  console.log('Home Global seeded')
}

async function seedMedia(payload: Awaited<ReturnType<typeof getPayload>>) {
  const [hero, before, after, certificate, trainingPoster, trainingVideo] =
    await Promise.all([
      upsertLocalMedia(payload, 'Home: hero', resolvePublicAsset(assets.hero)),
      upsertLocalMedia(payload, 'Home: before', resolvePublicAsset(assets.before)),
      upsertLocalMedia(payload, 'Home: after', resolvePublicAsset(assets.after)),
      upsertLocalMedia(payload, 'Home: certificate', resolvePublicAsset(assets.certificate)),
      upsertLocalMedia(payload, 'Home: training poster', resolvePublicAsset(assets.trainingPoster)),
      upsertLocalMedia(payload, 'Home: training video', path.resolve(projectRoot, 'media', 'heroblock.mp4')),
    ])
  const howIcons = await Promise.all(
    assets.howIcons.map((asset, index) =>
      upsertLocalMedia(payload, `Home: how it works icon ${index + 1}`, resolvePublicAsset(asset)),
    ),
  )
  const trainingIcons = await Promise.all(
    assets.trainingIcons.map((asset, index) =>
      upsertLocalMedia(payload, `Home: training icon ${index + 1}`, resolvePublicAsset(asset)),
    ),
  )
  const reviewAvatars = await Promise.all(
    Array.from({ length: 4 }, (_, index) =>
      upsertLocalMedia(payload, `Home: review avatar ${index + 1}`, resolvePublicAsset(assets.reviewAvatar)),
    ),
  )

  return { after, before, certificate, hero, howIcons, reviewAvatars, trainingIcons, trainingPoster, trainingVideo }
}

async function seedReviews(payload: Awaited<ReturnType<typeof getPayload>>, avatars: number[]) {
  const reviews = [
    ['Олена Мельник', 'З V-NRG ми отримали помітні результати вже з перших процедур.'],
    ['Ірина Соколова', 'Апарат легко став частиною нашого робочого процесу.'],
    ['Марина Бойко', 'Обладнання стабільно працює навіть при щільному записі.'],
    ['Наталія Кравець', 'Цінуємо простий інтерфейс, підтримку та прогнозований результат.'],
  ]

  return Promise.all(
    reviews.map(async ([name, text], index) => {
      const existing = await payload.find({
        collection: 'reviews',
        depth: 0,
        limit: 1,
        where: { name: { equals: name } },
      })
      const data = { avatar: avatars[index], name, text }

      return existing.docs[0]
        ? (payload.update({ collection: 'reviews', id: existing.docs[0].id, data, depth: 0 }) as Promise<Review>)
        : (payload.create({ collection: 'reviews', data, depth: 0 }) as Promise<Review>)
    }),
  )
}

async function upsertLocalMedia(
  payload: Awaited<ReturnType<typeof getPayload>>,
  alt: string,
  filePath: string,
) {
  const existing = await payload.find({
    collection: 'media',
    depth: 0,
    limit: 1,
    where: { alt: { equals: alt } },
  })

  if (existing.docs[0]) {
    return existing.docs[0] as Media
  }

  const uniqueFilePath = path.resolve(tmpdir(), `${slugify(alt)}${path.extname(filePath)}`)

  await copyFile(filePath, uniqueFilePath)

  try {
    return (await payload.create({
        collection: 'media',
        data: { alt },
        depth: 0,
        filePath: uniqueFilePath,
      })) as Media
  } finally {
    await unlink(uniqueFilePath).catch(() => undefined)
  }
}

function resolvePublicAsset(parts: readonly string[]) {
  return path.resolve(publicRoot, ...parts)
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

seedHome()
  .catch((error: unknown) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(() => process.exit())
