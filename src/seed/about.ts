import 'dotenv/config'

import { copyFile, unlink } from 'fs/promises'
import { tmpdir } from 'os'
import path from 'path'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

import type { Media } from '@/payload-types'

const principles = {
  uk: {
    subtitle: 'Наші принципи',
    title: 'Основа бренду V-NRG',
    cards: [
      {
        description: 'Покращувати якість життя людей через сучасні технології вакуумного масажу.',
        icon: 'mission.svg',
        title: 'Місія',
      },
      {
        description:
          'V-NRG це результат багаторічних досліджень та розвитку у сфері вакуумної терапії.',
        icon: 'history.svg',
        title: 'Історія',
      },
      {
        description:
          'Дотримання міжнародних стандартів виробництва та багаторівневий контроль якості на кожному етапі.',
        icon: 'quality.svg',
        title: 'Якість',
      },
    ],
  },
  en: {
    subtitle: 'Our principles',
    title: 'The foundation of the V-NRG brand',
    cards: [
      {
        description:
          "To improve people's quality of life through modern technologies of vacuum massage.",
        icon: 'mission.svg',
        title: 'Mission',
      },
      {
        description:
          'V-NRG is the result of many years of research and development in the field of vacuum therapy.',
        icon: 'history.svg',
        title: 'History',
      },
      {
        description:
          'Adherence to international production standards and multi-level quality control at each stage.',
        icon: 'quality.svg',
        title: 'Quality',
      },
    ],
  },
} as const

async function seedAbout() {
  const payload = await getPayload({ config: configPromise })
  const iconIds = new Map<string, number>()

  for (const filename of ['mission.svg', 'history.svg', 'quality.svg']) {
    const media = await upsertIcon(payload, filename)
    iconIds.set(filename, media.id)
  }

  await updatePrinciples(payload, 'uk', iconIds)

  const aboutPage = await payload.findGlobal({
    slug: 'about-page',
    depth: 0,
    locale: 'uk',
  })
  const cardIds = (aboutPage.principlesSection.cards ?? []).map((card) => card.id)

  await updatePrinciples(payload, 'en', iconIds, cardIds)
}

async function updatePrinciples(
  payload: Awaited<ReturnType<typeof getPayload>>,
  locale: 'en' | 'uk',
  iconIds: Map<string, number>,
  cardIds: Array<string | null | undefined> = [],
) {
  const section = principles[locale]

  await payload.updateGlobal({
    slug: 'about-page',
    locale,
    data: {
      principlesSection: {
        cards: section.cards.map((card, index) => ({
          description: card.description,
          icon: iconIds.get(card.icon)!,
          id: cardIds[index] ?? undefined,
          title: card.title,
        })),
        subtitle: section.subtitle,
        title: section.title,
      },
    },
    depth: 0,
  })
}

async function upsertIcon(
  payload: Awaited<ReturnType<typeof getPayload>>,
  filename: string,
): Promise<Media> {
  const alt = `About principles: ${path.parse(filename).name}`
  const existing = await payload.find({
    collection: 'media',
    depth: 0,
    limit: 1,
    where: { alt: { equals: alt } },
  })

  if (existing.docs[0]) {
    return existing.docs[0] as Media
  }

  const source = path.resolve('src', 'app', '(frontend)', 'public', 'icon', 'about', filename)
  const temporaryFile = path.resolve(tmpdir(), `about-principles-${filename}`)
  await copyFile(source, temporaryFile)

  try {
    return (await payload.create({
      collection: 'media',
      data: { alt },
      depth: 0,
      filePath: temporaryFile,
    })) as Media
  } finally {
    await unlink(temporaryFile).catch(() => undefined)
  }
}

seedAbout()
  .then(() => console.log('About principles seeded'))
  .catch((error: unknown) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(() => process.exit())
