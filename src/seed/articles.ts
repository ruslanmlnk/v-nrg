import 'dotenv/config'

import path from 'path'
import { fileURLToPath } from 'url'

import type { Article, Media } from '@/payload-types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

type RichTextContent = Article['content']

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const projectRoot = path.resolve(dirname, '..', '..')

const cardPosterPath = path.resolve(
  projectRoot,
  'src',
  'app',
  '(frontend)',
  'public',
  'assets',
  'blog',
  'blog-card-photo.png',
)
const heroImagePath = path.resolve(
  projectRoot,
  'src',
  'app',
  '(frontend)',
  'public',
  'assets',
  'blog',
  'article-hero.png',
)

const articleTitles = [
  'Як працює вакуумний масаж: принцип дії та показання',
  'Як працює вакуумний масаж: принцип дії та показання',
  'Як працює вакуумний масаж: принцип дії та показання',
  'Як працює вакуумний масаж: принцип дії та показання',
  'Як працює вакуумний масаж: принцип дії та показання',
  'Як працює вакуумний масаж: принцип дії та показання',
  'Як працює вакуумний масаж: принцип дії та показання',
  'Як працює вакуумний масаж: принцип дії та показання',
  'Як працює вакуумний масаж: принцип дії та показання',
]

async function seedArticles() {
  console.log('Loading Payload config...')
  const payload = await getPayload({ config: configPromise })
  console.log('Payload ready. Upserting article media...')

  const cardPoster = await upsertLocalMedia(payload, {
    alt: 'Постер статті про вакуумний масаж',
    filePath: cardPosterPath,
  })
  const heroImage = await upsertLocalMedia(payload, {
    alt: 'Головне зображення статті про вакуумний масаж',
    filePath: heroImagePath,
  })

  console.log('Upserting articles...')

  for (const [index, title] of articleTitles.entries()) {
    const slug = `article-${index + 1}`
    const data: Omit<Article, 'createdAt' | 'id' | 'updatedAt'> = {
      title,
      publishedAt: '2024-07-12T00:00:00.000Z',
      generateSlug: false,
      slug,
      cardPoster: cardPoster.id,
      heroImage: heroImage.id,
      content: articleContent(),
    }

    const existing = await payload.find({
      collection: 'articles',
      depth: 0,
      limit: 1,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    if (existing.docs[0]) {
      await payload.update({
        collection: 'articles',
        id: existing.docs[0].id,
        data,
      })
    } else {
      await payload.create({
        collection: 'articles',
        data,
      })
    }
  }

  console.log(`Seeded ${articleTitles.length} articles`)
}

async function upsertLocalMedia(
  payload: Awaited<ReturnType<typeof getPayload>>,
  source: { alt: string; filePath: string },
) {
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

  return (await payload.create({
    collection: 'media',
    data: {
      alt: source.alt,
    },
    depth: 0,
    filePath: source.filePath,
  })) as Media
}

function articleContent(): RichTextContent {
  return richText([
    paragraph(
      'Вакуумний масаж — це сучасна методика апаратної терапії, яка поєднує механічний вплив і контрольований негативний тиск для роботи з м’якими тканинами. Його застосовують у косметології, реабілітації та фізіотерапії для зменшення набряків, покращення стану шкіри та зниження больових відчуттів.',
    ),
    heading('Принцип дії вакуумного масажу'),
    paragraph(
      'Основою методу є створення негативного тиску (вакууму), який обережно підтягує шкіру та підшкірні тканини всередину насадки. Такий вплив:',
    ),
    paragraph(
      '— стимулює кровообіг у зоні обробки — активізує лімфатичний відтік — покращує живлення тканин киснем — сприяє виведенню надлишкової рідини',
    ),
    paragraph(
      'На відміну від ручного масажу, апарат дозволяє точно контролювати силу впливу, ритм і тривалість процедури. Це забезпечує стабільний та прогнозований результат.',
    ),
    heading('Що відбувається в тканинах під час процедури'),
    paragraph(
      'Під дією вакууму тканини м’яко піднімаються, а судини розширюються. Це покращує мікроциркуляцію та обмінні процеси. Регулярні процедури можуть сприяти:',
    ),
    paragraph(
      '— зменшенню застійних явищ — зниженню вираженості набряків — покращенню еластичності шкіри — зменшенню проявів целюліту',
    ),
    paragraph(
      'Також вакуумна терапія допомагає розслабити напружені м’язи та зменшити відчуття дискомфорту після фізичних навантажень.',
    ),
    heading('Основні показання до вакуумного масажу'),
    paragraph('Вакуумний масаж рекомендується у таких випадках:'),
    paragraph(
      '— локальні набряки — відчуття важкості в ногах — початкові прояви целюліту — зниження тонусу шкіри — м’язове напруження — період відновлення після фізичних навантажень',
    ),
    paragraph(
      'У косметології метод застосовують для покращення контурів тіла, підвищення щільності шкіри та загального покращення її вигляду.',
    ),
    heading('Кому підходить процедура'),
    paragraph(
      'Вакуумний масаж підходить як для естетичних цілей, так і для роботи з функціональними порушеннями. Його можуть застосовувати:',
    ),
    paragraph('— косметологи — фізичні терапевти — масажисти — спеціалісти з реабілітації'),
    paragraph(
      'Перед початком курсу важливо провести консультацію та виключити можливі протипоказання (наприклад, гострі запальні процеси, серйозні судинні порушення або пошкодження шкіри).',
    ),
    paragraph(
      'За умови правильного підбору параметрів і професійного виконання вакуумна терапія стає безпечним та результативним інструментом у роботі спеціаліста.',
    ),
  ])
}

function richText(children: Array<ReturnType<typeof paragraph> | ReturnType<typeof heading>>): RichTextContent {
  return {
    root: {
      children,
      direction: null,
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  }
}

function paragraph(text: string) {
  return {
    children: [textNode(text)],
    direction: null,
    format: '' as const,
    indent: 0,
    type: 'paragraph',
    version: 1,
  }
}

function heading(text: string) {
  return {
    children: [textNode(text)],
    direction: null,
    format: '' as const,
    indent: 0,
    tag: 'h2',
    type: 'heading',
    version: 1,
  }
}

function textNode(text: string) {
  return {
    detail: 0,
    format: 0,
    mode: 'normal',
    style: '',
    text,
    type: 'text',
    version: 1,
  }
}

seedArticles()
  .catch((error: unknown) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(() => {
    process.exit()
  })
