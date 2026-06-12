import 'dotenv/config'

import { copyFile, unlink } from 'fs/promises'
import { tmpdir } from 'os'
import path from 'path'

import type { Media } from '@/payload-types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

const locations = [
  {
    name: 'Beauty Kyiv Center',
    country: 'Україна',
    city: 'Київ',
    address: 'вул. Хрещатик, 25',
    latitude: 50.4477,
    longitude: 30.5226,
    sortOrder: 1,
  },
  {
    name: 'Beauty Kyiv Podil',
    country: 'Україна',
    city: 'Київ',
    address: 'вул. Ярославська, 11',
    latitude: 50.4654,
    longitude: 30.5151,
    sortOrder: 2,
  },
  {
    name: 'Beauty Kyiv Pechersk',
    country: 'Україна',
    city: 'Київ',
    address: 'бул. Лесі Українки, 7Б',
    latitude: 50.429,
    longitude: 30.5384,
    sortOrder: 3,
  },
] as const

async function seedLocations() {
  const payload = await getPayload({ config: configPromise })
  const image = await upsertImage(payload)

  for (const location of locations) {
    const existing = await payload.find({
      collection: 'locations',
      depth: 0,
      limit: 1,
      where: { name: { equals: location.name } },
    })
    const data = {
      ...location,
      image: image.id,
      instagram: 'https://instagram.com/',
      phone: '+380975468820',
      isActive: true,
    }

    if (existing.docs[0]) {
      await payload.update({
        collection: 'locations',
        id: existing.docs[0].id,
        data,
        depth: 0,
      })
    } else {
      await payload.create({
        collection: 'locations',
        data,
        depth: 0,
      })
    }
  }

  console.log('Locations seeded')
}

async function upsertImage(payload: Awaited<ReturnType<typeof getPayload>>) {
  const alt = 'V-NRG location'
  const existing = await payload.find({
    collection: 'media',
    depth: 0,
    limit: 1,
    where: { alt: { equals: alt } },
  })

  if (existing.docs[0]) return existing.docs[0] as Media

  const source = path.resolve(
    'src',
    'app',
    '(frontend)',
    'public',
    'assets',
    'about',
    'about-salon-1.webp',
  )
  const target = path.resolve(tmpdir(), 'vnrg-location.webp')
  await copyFile(source, target)

  try {
    return (await payload.create({
      collection: 'media',
      data: { alt },
      depth: 0,
      filePath: target,
    })) as Media
  } finally {
    await unlink(target).catch(() => undefined)
  }
}

seedLocations()
  .catch((error: unknown) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(() => process.exit())
