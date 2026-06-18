import configPromise from '@payload-config'
import { getPayload } from 'payload'

import type { Media, TrainingCategory } from '@/payload-types'
import FaqSection from '../components/FaqSection'
import {
  TrainingFormatsSection,
  TrainingHeroSection,
  TrainingLessonsSection,
} from '../components/training/TrainingSections'
import { getSiteLocale } from '../lib/getSiteLocale'
import { createSeoMetadata } from '../lib/seo'

export async function generateMetadata() {
  const payload = await getPayload({ config: configPromise })
  const training = await payload.findGlobal({
    slug: 'training',
    locale: await getSiteLocale(),
  })

  return createSeoMetadata(training.seo, 'Навчання | V-NRG')
}

export default async function TrainingPage() {
  const payload = await getPayload({ config: configPromise })
  const locale = await getSiteLocale()
  const [training, videos] = await Promise.all([
    payload.findGlobal({ slug: 'training', depth: 2, locale }),
    payload.find({
      collection: 'training-videos',
      depth: 2,
      limit: 100,
      sort: 'sortOrder',
      locale,
    }),
  ])

  const formats = (training.formats.cards ?? []).flatMap((card) => {
    const icon = getMedia(card.icon)
    return icon?.url ? [{ ...card, icon: icon.url }] : []
  })
  const lessons = videos.docs.flatMap((video) => {
    const category = getCategory(video.category)
    const poster = getMedia(video.poster)
    const file = getMedia(video.video)
    if (!category || !poster?.url || !file?.url) return []

    return [
      {
        category,
        description: video.description,
        poster: poster.url,
        title: video.title,
        video: file.url,
      },
    ]
  })

  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6">
        <TrainingHeroSection description={training.description} title={training.title} />
        <TrainingFormatsSection
          formats={formats}
          subtitle={training.formats.subtitle}
          title={training.formats.title}
        />
      </div>

      <TrainingLessonsSection
        lessons={lessons}
        subtitle={training.videoInstructions.subtitle}
        title={training.videoInstructions.title}
      />
      <FaqSection
        columns={splitIntoColumns(training.faq.items ?? [])}
        eyebrow={training.faq.subtitle}
        title={training.faq.title}
      />
    </div>
  )
}

function getMedia(value: number | Media | null | undefined) {
  return typeof value === 'object' && value ? value : null
}

function getCategory(value: number | TrainingCategory) {
  return typeof value === 'object' && value ? value.title : null
}

function splitIntoColumns<T>(items: T[]) {
  const midpoint = Math.ceil(items.length / 2)
  return [items.slice(0, midpoint), items.slice(midpoint)]
}
